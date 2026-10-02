#!/usr/bin/env node
// words.json (Whisper / transformers.js: {chunks:[{text, timestamp:[a,b]}]}  atau  [{word|text, start, end}])
//   → words.js  (window.WORDS = [{w, a, b}], masa filem = masa suara + OFF)
//
//   node words.mjs <words.json> <keluar/words.js> [--off=0.6] [--fix=fix.json]
//
// fix.json: {"desain": "design", "tes": "test"} — ejaan paparan (suara tidak berubah).
// Cetak senarai "indeks:perkataan@masa" untuk menulis babak dengan seg(i0, i1).
import {readFileSync, writeFileSync} from 'node:fs';
const [src, dst = 'words.js'] = process.argv.slice(2).filter(a => !a.startsWith('--'));
const flag = k => (process.argv.find(a => a.startsWith(`--${k}=`)) || '').split('=')[1];
const OFF = +(flag('off') ?? 0) || 0, fix = flag('fix') ? JSON.parse(readFileSync(flag('fix'), 'utf8')) : {};
const raw = JSON.parse(readFileSync(src, 'utf8'));
const list = raw.chunks ? raw.chunks.map(c => [c.text, c.timestamp[0], c.timestamp[1]])
  : (raw.words || raw.segments?.flatMap(s => s.words) || raw).map(w => [w.word ?? w.text, w.start, w.end]);
const out = list.map(([s, a, b]) => { s = String(s).trim(); s = fix[s] ?? s; return {w: s, a: +(a + OFF).toFixed(3), b: +((b ?? a + .3) + OFF).toFixed(3)}; })
  .filter(w => w.w);
writeFileSync(dst, `// dijana oleh words.mjs — OFF ${OFF} s\nwindow.WORDS = ${JSON.stringify(out)};\n`);
console.log(out.map((o, i) => `${i}:${o.w}@${o.a}`).join('  '));
console.log(`\n${out.length} perkataan → ${dst}; suara tamat pada ${out.at(-1).b} s (masa filem)`);
