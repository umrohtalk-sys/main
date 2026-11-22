// Render 50 slide jadi JPG 1080×1350 (kualitas 92, siap unggah IG/TikTok).
// Pakai:  node render.js            (semua)      node render.js 2        (tema 2 saja)
// Butuh:  Node + Playwright (npm i playwright; npx playwright install chromium)
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const DIR = __dirname, only = process.argv[2] ? +process.argv[2] : 0;
global.window = {}; eval(fs.readFileSync(path.join(DIR, 'data.js'), 'utf8'));
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  p.on('pageerror', e => console.log('ERR', e.message));
  await p.goto('file://' + path.join(DIR, 'index.html') + '?render' + (only ? '&tema=' + only : ''));
  await p.waitForSelector('body[data-ready="1"]'); await p.waitForTimeout(800);
  for (const T of window.TEMA) {
    if (only && T.no !== only) continue;
    const out = path.join(DIR, 'slide', `tema-${T.no}-${T.slug}`); fs.mkdirSync(out, { recursive: true });
    for (const s of window.SLIDES.filter(x => x.t === T.no)) {
      const el = await p.$(`.slide[data-id="${s.id}"]`);
      await el.screenshot({ path: path.join(out, `${s.id.slice(-2)}.jpg`), type: 'jpeg', quality: 92 });
    }
    console.log('Tema', T.no, 'selesai ->', out);
  }
  await b.close();
})();
