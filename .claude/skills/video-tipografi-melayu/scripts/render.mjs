#!/usr/bin/env node
// Pemacu render tanpa kepala (headless Chromium + ffmpeg).
//
//   node render.mjs <projek> sheet 0.5,3,7.2 [nama]     lembaran kenalan pada masa tertentu
//   node render.mjs <projek> grid 36 [nama]             lembaran kenalan seragam sepanjang filem
//   node render.mjs <projek> still 12.4                 satu frame resolusi penuh (PNG)
//   node render.mjs <projek> mp4 [--fps=30] [--workers=4] [--out=nama.mp4] [--from=0 --to=DUR]
//   node render.mjs <projek> alpha [--fps=30]           latar lutsinar → WebM VP9 alpha (tanpa HUD)
//
// <projek> ialah folder yang mengandungi index.html (window.DUR, window.VOICE, window.OFF).
// Hasil di <projek>/out/. Audio: suara sahaja (tiada muzik latar), dinormalkan ke −16 LUFS.
import {spawn, execFileSync} from 'node:child_process';
import {writeFileSync, mkdirSync, existsSync, rmSync} from 'node:fs';
import {createRequire} from 'node:module';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

const [projArg = '.', mode = 'grid', arg = '', nameArg] = process.argv.slice(2).filter(a => !a.startsWith('--'));
const flags = Object.fromEntries(process.argv.slice(2).filter(a => a.startsWith('--')).map(a => { const [k, v = '1'] = a.slice(2).split('='); return [k, v]; }));
const proj = path.resolve(projArg), out = path.join(proj, 'out');
mkdirSync(out, {recursive: true});

// cari playwright: tempatan → global
async function loadPW() {
  for (const m of ['playwright-core', 'playwright']) { try { return (await import(m)).chromium; } catch {} }
  const root = execFileSync('npm', ['root', '-g']).toString().trim();
  for (const m of ['playwright-core', 'playwright']) { try { return createRequire(path.join(root, 'x.js'))(m).chromium; } catch {} }
  throw new Error('playwright tiada: npm i -D playwright-core');
}
const chromium = await loadPW();
const exe = flags.chrome || process.env.CHROME_PATH || ['/opt/pw-browsers/chromium-1194/chrome-linux/chrome', '/usr/bin/chromium', '/usr/bin/google-chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'].find(p => existsSync(p));
const browser = await chromium.launch({executablePath: exe, args: ['--allow-file-access-from-files', '--autoplay-policy=no-user-gesture-required', '--no-sandbox']});
const errors = [];
const alpha = mode === 'alpha';
async function openPage() {
  const page = await browser.newPage({viewport: {width: 1920, height: 1080}});
  page.on('pageerror', e => errors.push(String(e)));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto(pathToFileURL(path.join(proj, 'index.html')).href + '?bare=1' + (alpha ? '&alpha=1' : ''));
  await page.waitForFunction('window.__ready === true', null, {timeout: 60000});
  return page;
}
const save = (f, d) => writeFileSync(f, Buffer.from(d.split(',')[1], 'base64'));

try {
  const page = await openPage();
  const meta = await page.evaluate(() => ({DUR: window.DUR, VOICE: window.VOICE, OFF: window.OFF || 0}));
  const fonts = await page.evaluate(() => ['900 40px Archivo', 'italic 400 40px "Instrument Serif"', '700 20px "Space Mono"'].map(f => document.fonts.check(f)));
  console.log('fon dimuat:', fonts.join(' '), '· DUR', meta.DUR);
  if (mode === 'sheet' || mode === 'grid') {
    const n = +arg || 36;
    const times = mode === 'sheet' ? arg.split(',').map(Number) : [...Array(n).keys()].map(i => +((i + .5) * meta.DUR / n).toFixed(2));
    const cols = +(flags.cols || (times.length > 8 ? 6 : Math.min(times.length, 3))), w = +(flags.w || (times.length > 8 ? 320 : 640));
    const f = path.join(out, `${nameArg || mode}.jpg`);
    save(f, await page.evaluate(([t, c, ww]) => window.__sheet(t, c, ww), [times, cols, w])); console.log(f);
  } else if (mode === 'still') {
    const f = path.join(out, `${nameArg || 'still-' + arg}.png`);
    save(f, await page.evaluate(t => { window.__draw(t); return document.getElementById('cv').toDataURL('image/png'); }, +arg)); console.log(f);
  } else {
    const fps = +(flags.fps || 30), from = +(flags.from || 0), to = +(flags.to || meta.DUR);
    const N = Math.round((to - from) * fps), workers = Math.max(1, +(flags.workers || 3));
    const segs = [], t0 = Date.now(); let done = 0;
    const vcodec = alpha ? ['-c:v', 'libvpx-vp9', '-pix_fmt', 'yuva420p', '-b:v', '0', '-crf', '30', '-row-mt', '1']
      : ['-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', flags.crf || '18', '-preset', 'medium', '-tune', 'animation'];
    const ext = alpha ? 'webm' : 'mp4';
    async function worker(w, page) {
      const a = Math.floor(N * w / workers), b = Math.floor(N * (w + 1) / workers), f = path.join(out, `_seg${w}.${ext}`); segs[w] = f;
      const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', alpha ? 'png' : 'mjpeg', '-i', '-', ...vcodec, f], {stdio: ['pipe', 'inherit', 'inherit']});
      for (let i = a; i < b; i++) {
        const d = await page.evaluate(([t, al]) => { window.__draw(t); return document.getElementById('cv').toDataURL(al ? 'image/png' : 'image/jpeg', .93); }, [from + i / fps, alpha]);
        if (!ff.stdin.write(Buffer.from(d.split(',')[1], 'base64'))) await new Promise(r => ff.stdin.once('drain', r));
        if (++done % 300 === 0) console.log(`frame ${done}/${N} (${((Date.now() - t0) / 1000).toFixed(0)} s)`);
      }
      ff.stdin.end(); await new Promise(r => ff.on('close', r));
    }
    const pages = [page]; for (let w = 1; w < workers; w++) pages.push(await openPage());
    await Promise.all(pages.map((p, w) => worker(w, p)));
    const list = path.join(out, '_segs.txt'); writeFileSync(list, segs.map(s => `file '${s}'`).join('\n'));
    const final = path.join(out, flags.out || nameArg || (alpha ? 'video-alpha.webm' : 'video.mp4'));
    const args = ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', list];
    if (meta.VOICE && !flags.mute) {
      const ms = Math.round((meta.OFF - from) * 1000);
      args.push('-i', path.resolve(proj, meta.VOICE), '-filter_complex',
        `[1:a]aresample=48000,pan=stereo|c0=c0|c1=c0,highpass=f=70,acompressor=threshold=-20dB:ratio=3:attack=5:release=150,loudnorm=I=-16:TP=-1.5:LRA=11,` +
        (ms >= 0 ? `adelay=${ms}|${ms},` : `atrim=start=${-ms / 1000},asetpts=PTS-STARTPTS,`) + `apad[a]`,
        '-map', '0:v', '-map', '[a]', '-c:v', 'copy', '-c:a', alpha ? 'libopus' : 'aac', '-b:a', '192k', '-t', String(to - from));
    } else args.push('-c', 'copy');
    if (!alpha) args.push('-movflags', '+faststart');
    execFileSync('ffmpeg', [...args, final], {stdio: 'inherit'});
    for (const s of [...segs, list]) rmSync(s, {force: true});
    console.log(final, `(${((Date.now() - t0) / 1000).toFixed(0)} s)`);
  }
} finally { await browser.close(); }
console.log(errors.length ? 'RALAT:\n' + [...new Set(errors)].join('\n') : 'tiada ralat');
process.exitCode = errors.length ? 1 : 0;
