// ─────────────────────────────────────────────────────────────────────────────
// kinetik.js — engine tipografi kinetik (Canvas 2D, 1920×1080, deterministik)
//
// Setiap frame ialah fungsi tulen masa t: tiada Math.random(), tiada Date.now(),
// tiada keadaan yang dibawa dari frame sebelumnya. Mana-mana frame boleh dirender
// sendirian, dalam apa-apa susunan (gaya PDoomVideo / lemo-opuscar / shipvideo).
//
// Projek menyediakan:
//   window.WORDS  = [{w, a, b}]      perkataan suara (masa sudah termasuk OFF)
//   window.DUR    = 93.5             panjang filem (saat)
//   SCENES        = [[t0, fn, 'LABEL'], ...]   fn(t, lt, dur) melukis babak
//   TR            = {t0: 'wipe' | 'slats' | 'iris' | 'push' | 'rise' | 'cut'}
// Engine menyediakan window.__draw(t), window.__ready dan window.__sheet().
// ─────────────────────────────────────────────────────────────────────────────

const W = 1920, H = 1080, TAU = Math.PI * 2;
const QS = new URLSearchParams(location.search);
const ALPHA = QS.has('alpha');           // ?alpha=1 → latar lutsinar (untuk WebM/MOV alpha)
let g = null;                            // konteks kanvas aktif

// ── palet & fon ──────────────────────────────────────────────────────────────
// Palet jenama gemi / Si Bulat. Satu latar sahaja (kertas) — warna dibawa oleh tipografi.
const K = {
  paper: '#F7F2E8', paper2: '#EFE8D9', ink: '#191512', ink2: '#2A241F', ink3: '#4A423A',
  grey: '#9A9184', mid: '#6B635A', rule: '#DDD3C1', cream: '#FFFDF8',
  or: '#F05323', mango: '#F8A81B', green: '#12946A', purple: '#8B7BE8', pink: '#F7A8C4', blue: '#2F5BFF',
};
const F = {g: 'Archivo', s: 'Instrument Serif', m: 'Space Mono'};
const ML = 140, MR = 1780;               // margin kiri / kanan (grid 12 kolum)

// ── matematik & pelonggaran ─────────────────────────────────────────────────
const cl = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lerp = (a, b, k) => a + (b - a) * k;
const inv = (a, b, x) => cl((x - a) / (b - a));
const eOut = k => k >= 1 ? 1 : 1 - Math.pow(2, -10 * k);                    // expo-out: masuk laju, mendarat lembut
const eIn = k => k <= 0 ? 0 : Math.pow(2, 10 * k - 10);
const eIO = k => k < .5 ? 16 * k ** 5 : 1 - (-2 * k + 2) ** 5 / 2;          // ≈ cubic-bezier(.7,0,.2,1): snap Swiss
const eSm = k => k * k * (3 - 2 * k);
const back = (k, s = 1.70158) => { k = cl(k) - 1; return 1 + k * k * ((s + 1) * k + s); };   // overshoot
const elastic = k => k <= 0 ? 0 : k >= 1 ? 1 : Math.pow(2, -10 * k) * Math.sin((k * 10 - .75) * TAU / 3) + 1;
const sn = (t, a, d = .5, e = eOut) => e(cl((t - a) / d));                   // kemajuan 0→1 bermula pada a
const ph = (t, a, b, d = .45) => sn(t, a, d) * (1 - sn(t, b, d * .8, eIn)); // masuk pada a, keluar pada b
const hash = i => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
const wob = (t, f = 1, p = 0) => Math.sin(t * f * TAU + p);
// bingkai kunci: kf(t, [[t0, v0], [t1, v1], ...], ease) — v boleh nombor atau tatasusunan
function kf(t, keys, e = eIO) {
  if (t <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) if (t < keys[i][0]) {
    const [t0, a] = keys[i - 1], [t1, b] = keys[i], k = e((t - t0) / (t1 - t0));
    return Array.isArray(a) ? a.map((v, j) => lerp(v, b[j], k)) : lerp(a, b, k);
  }
  return keys[keys.length - 1][1];
}

// ── perkataan suara ──────────────────────────────────────────────────────────
const WD = () => window.WORDS || [];
const norm = s => s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]/g, '');
const __missing = new Set();
// T('referensi', 2) → masa mula sebutan kedua "referensi". Te() → masa tamat.
function T(key, n = 1) { const w = findW(key, n); return w ? w.a : 0; }
function Te(key, n = 1) { const w = findW(key, n); return w ? w.b : 0; }
function findW(key, n) {
  const k = norm(key); let c = 0;
  for (const w of WD()) if (norm(w.w) === k && ++c === n) return w;
  if (!__missing.has(key + n)) { __missing.add(key + n); console.error(`T(): perkataan "${key}" ke-${n} tiada dalam WORDS`); }
  return null;
}
// seg(i0, i1) → [[teks, masa], ...] untuk perkataan i0..i1 (indeks dalam WORDS)
const seg = (i0, i1) => WD().slice(i0, i1 + 1).map(w => [w.w, w.a]);
// segK('dan', 1, 'peranan', 1) → sama seperti seg tetapi dengan kata kunci
function segK(k0, n0, k1, n1) { const a = WD().indexOf(findW(k0, n0)), b = WD().indexOf(findW(k1, n1)); return seg(a, b); }

// ── fon & ukuran ─────────────────────────────────────────────────────────────
function font(size, wt = 800, fam = F.g, it = false, ls = null) {
  g.font = `${it ? 'italic ' : ''}${wt} ${size}px "${fam}"`;
  const l = ls ?? (fam === F.g && size >= 56 ? -size * .025 : fam === F.m ? size * .04 : 0);
  g.letterSpacing = `${l}px`;
}
const tw = s => g.measureText(s).width;
// lebar teks dengan fon tertentu (simpan/pulih fon semasa)
function twf(s, size, wt = 800, fam = F.g, it = false, ls = null) { g.save(); font(size, wt, fam, it, ls); const w = tw(s); g.restore(); return w; }
// saiz terbesar ≤ max supaya s muat dalam lebar maxW
function fit(s, maxW, max, wt = 900, fam = F.g, it = false) { const w = twf(s, 100, wt, fam, it); return Math.min(max, 100 * maxW / w); }

// ── primitif teks ────────────────────────────────────────────────────────────
// rise: teks naik keluar dari kotak klip di bawah garis dasar (tiada fade) — gaya Swiss.
// o: {size, wt, fam, it, col, d, out, align, alpha, ls, hl:[from,to,col]}
function rise(s, x, y, t, t0, o = {}) {
  const size = o.size ?? 60, d = o.d ?? .55, k = sn(t, t0, d), ko = o.out != null ? sn(t, o.out, o.outD ?? .38, eIO) : 0;
  if (k <= 0 || ko >= 1) return 0;
  g.save(); font(size, o.wt ?? 800, o.fam ?? F.g, o.it, o.ls);
  const w = tw(s), ax = o.align === 'center' ? x - w / 2 : o.align === 'right' ? x - w : x;
  g.beginPath(); g.rect(ax - size, y - size * (o.clipTop ?? 1.0), w + size * 2, size * ((o.clipTop ?? 1.0) + .32)); g.clip();
  g.globalAlpha *= o.alpha ?? 1; g.fillStyle = o.col ?? K.ink;
  g.fillText(s, ax, y + (1 - k) * size * 1.3 - ko * size * 1.05);
  g.restore(); return w;
}
// pop: teks melantun dengan skala overshoot (untuk perkataan beremosi)
function pop(s, x, y, t, t0, o = {}) {
  const size = o.size ?? 80, k = cl((t - t0) / (o.d ?? .45)); if (k <= 0) return 0;
  const ko = o.out != null ? sn(t, o.out, .3, eIn) : 0; if (ko >= 1) return 0;
  g.save(); font(size, o.wt ?? 900, o.fam ?? F.g, o.it, o.ls); const w = tw(s);
  const ax = o.align === 'center' ? x : o.align === 'right' ? x - w / 2 : x + w / 2;
  g.translate(ax, y - size * .35); g.rotate((o.rot ?? 0) * (1 - k)); g.scale(back(k, 2.4) * (1 - ko), back(k, 2.4) * (1 - ko));
  g.fillStyle = o.col ?? K.ink; g.textAlign = 'center'; g.fillText(s, 0, size * .35); g.restore(); return w;
}
// letters: setiap huruf dengan transformnya sendiri. fn(i, ch, n) → {dx, dy, r, s, a, col, stroke}
function letters(s, x, y, o, fn) {
  g.save(); font(o.size, o.wt ?? 900, o.fam ?? F.g, o.it, o.ls);
  const chars = [...s], ws = []; let acc = 0;
  for (let i = 0; i < chars.length; i++) { const wpre = tw(chars.slice(0, i + 1).join('')); ws.push([acc, wpre - acc]); acc = wpre; }
  const total = acc, x0 = o.align === 'center' ? x - total / 2 : o.align === 'right' ? x - total : x;
  chars.forEach((ch, i) => {
    const p = fn(i, ch, chars.length) || {}; if ((p.a ?? 1) <= 0 || (p.s ?? 1) <= 0) return;
    const cx = x0 + ws[i][0] + ws[i][1] / 2;
    g.save(); g.globalAlpha *= p.a ?? 1; g.translate(cx + (p.dx ?? 0), y + (p.dy ?? 0) - o.size * .35);
    g.rotate(p.r ?? 0); g.scale(p.s ?? 1, p.sy ?? p.s ?? 1); g.textAlign = 'center'; g.letterSpacing = '0px';
    if (p.stroke) { g.strokeStyle = p.stroke; g.lineWidth = p.lw ?? 2; g.strokeText(ch, 0, o.size * .35); }
    else { g.fillStyle = p.col ?? o.col ?? K.ink; g.fillText(ch, 0, o.size * .35); }
    g.restore();
  });
  g.restore(); return total;
}
// slam: huruf jatuh berperingkat (expo-out) + gema garis luar — untuk satu perkataan besar.
// o: {size, col, stag, fall, echo, echoCol, out}
function slam(s, x, y, t, t0, o = {}) {
  const size = o.size ?? 220, stag = o.stag ?? .045, fall = o.fall ?? size * .9, ko = o.out != null ? sn(t, o.out, .35, eIn) : 0;
  if (t < t0 || ko >= 1) return 0;
  if (o.echo) for (const dir of [-1, 1]) {
    const ke = sn(t, t0 + .25, .7);
    if (ke > 0) letters(s, x, y + dir * size * .86 * ke, {...o, size}, () => ({stroke: o.echoCol ?? K.rule, lw: 2, a: (1 - ko) * .9}));
  }
  return letters(s, x, y, {...o, size}, (i, ch, n) => {
    const k = sn(t, t0 + i * stag, .55); if (k <= 0) return {a: 0};
    return {dy: -(1 - k) * fall + ko * size * .6, r: (1 - k) * (hash(i + 3) - .5) * .5, a: 1 - ko, col: o.colAt ? o.colAt(i) : o.col};
  });
}
// wordsLine: senarai [teks, masa] dilukis sebaris; setiap perkataan naik tepat pada masa sebutannya.
// o: {size, wt, fam, it, col, maxW, lh, hl: {indeks|teks: warna}, out, ghost, d}
function wordsLine(list, x, y, t, o = {}) {
  const size = o.size ?? 64, lh = o.lh ?? size * 1.12, maxW = o.maxW ?? 1640;
  g.save(); font(size, o.wt ?? 800, o.fam ?? F.g, o.it, o.ls); const sp = tw(' ') * (o.sp ?? 1); g.restore();
  let cx = x, cy = y, lines = 1, wmax = 0;
  list.forEach(([s, t0, c], i) => {
    const w = twf(s, size, o.wt ?? 800, o.fam ?? F.g, o.it, o.ls);
    if (cx > x && cx + w - x > maxW) { cx = x; cy += lh; lines++; }
    const col = c ?? (o.hl && (o.hl[i] ?? o.hl[norm(s)])) ?? o.col ?? K.ink;
    if (o.ghost && t < t0) { g.save(); font(size, o.wt ?? 800, o.fam ?? F.g, o.it, o.ls); g.fillStyle = col; g.globalAlpha *= o.ghost; g.fillText(s, cx, cy); g.restore(); }
    rise(s, cx, cy, t, t0 - (o.lead ?? .06), {...o, size, col, out: o.out != null ? o.out + i * (o.outStag ?? .02) : undefined});
    cx += w + sp; wmax = Math.max(wmax, cx - x - sp);
  });
  return {w: wmax, h: lines * lh, lines, endX: cx - sp, endY: cy};
}
// typeOn: mesin taip dengan karet berkelip. cps = aksara sesaat
function typeOn(s, x, y, t, t0, o = {}) {
  const cps = o.cps ?? 22, n = cl(Math.floor((t - t0) * cps), 0, s.length); if (t < t0 - .4) return 0;
  g.save(); font(o.size ?? 34, o.wt ?? 400, o.fam ?? F.m, o.it, o.ls); g.fillStyle = o.col ?? K.ink;
  const part = s.slice(0, n); g.fillText(part, x, y); const w = tw(part);
  if (o.caret !== false && Math.floor(t * 2.2) % 2 === 0 || (n < s.length && t >= t0)) { g.fillStyle = o.caretCol ?? K.or; g.fillRect(x + w + 4, y - (o.size ?? 34) * .8, 3, (o.size ?? 34) * .95); }
  g.restore(); return w;
}
// scramble: teks mono "menyahkod" dari simbol rawak (deterministik) ke teks sebenar
function scramble(s, x, y, t, t0, o = {}) {
  const d = o.d ?? .6, sym = '#%&@*+=<>/\\|01'; if (t < t0) return;
  const out = [...s].map((ch, i) => { const k = (t - t0) / d - i / s.length; return ch === ' ' || k >= 1 ? ch : sym[Math.floor(hash(i * 7 + Math.floor(t * 24)) * sym.length)]; }).join('');
  g.save(); font(o.size ?? 22, o.wt ?? 700, F.m); g.fillStyle = o.col ?? K.mid; g.fillText(out, x, y); g.restore();
}
// marker: sapuan penyerlah di belakang teks (lukis SEBELUM teks)
function marker(x, y, w, h, t, t0, col = K.mango, o = {}) {
  const k = sn(t, t0, o.d ?? .45, eIO); if (k <= 0) return;
  g.save(); g.fillStyle = col; g.globalAlpha *= o.a ?? 1; g.beginPath();
  const sk = o.skew ?? 8; g.moveTo(x, y + h); g.lineTo(x + sk, y); g.lineTo(x + sk + w * k, y); g.lineTo(x + w * k, y + h); g.fill(); g.restore();
}
function underline(x, y, w, t, t0, col = K.or, lw = 6, o = {}) {
  const k = sn(t, t0, o.d ?? .4, eIO); if (k <= 0) return; const ko = o.out != null ? sn(t, o.out, .3, eIO) : 0;
  g.save(); g.strokeStyle = col; g.lineWidth = lw; g.lineCap = 'round'; g.beginPath(); g.moveTo(x + w * ko, y); g.lineTo(x + w * k, y); g.stroke(); g.restore();
}
// knife: garis memotong elemen; pulangkan faktor runtuh 0→1 untuk elemen tersebut
function knife(x0, y, x1, t, t0, col = K.or) {
  const k = sn(t, t0, .28, eIO), kc = sn(t, t0 + .22, .3, eIO);
  if (k > 0 && kc < 1) { g.save(); g.strokeStyle = col; g.lineWidth = 4; g.globalAlpha = 1 - kc; g.beginPath(); g.moveTo(x0, y); g.lineTo(lerp(x0, x1, k), y); g.stroke(); g.restore(); }
  return kc;
}
// label mono kecil
function mono(s, x, y, size = 18, col = K.mid, o = {}) { g.save(); font(size, o.wt ?? 700, F.m, false, o.ls ?? size * .12); g.fillStyle = col; g.globalAlpha *= o.a ?? 1; g.textAlign = o.align ?? 'left'; g.fillText(s, x, y); g.restore(); }
// chip: pil label yang disapu masuk. Pulangkan lebar.
function chip(s, x, y, t, t0, o = {}) {
  const size = o.size ?? 22, k = sn(t, t0, o.d ?? .35, eIO); if (k <= 0) return twf(s, size, 700, F.m) + size * 1.4;
  g.save(); font(size, o.wt ?? 700, o.fam ?? F.m, false, o.ls ?? size * .06); const w = tw(s) + size * 1.4, h = size * 1.75;
  const ko = o.out != null ? sn(t, o.out, .3, eIO) : 0;
  g.beginPath(); g.rect(x - 4, y - h / 2 - 4, (w + 8) * k * (1 - ko) + (w + 8) * ko, h + 8); g.clip();
  if (ko > 0) { g.beginPath(); g.rect(x + (w + 8) * ko, y - h, w, h * 2); g.clip(); }
  rr(x, y - h / 2, w, h, h / 2); g.fillStyle = o.bg ?? K.ink; g.fill();
  if (o.stroke) { g.strokeStyle = o.stroke; g.lineWidth = 2.5; g.stroke(); }
  g.fillStyle = o.fg ?? K.paper; g.fillText(s, x + size * .7, y + size * .36); g.restore(); return w;
}

// ── bentuk & UI ──────────────────────────────────────────────────────────────
function rr(x, y, w, h, r) { r = Math.max(0, Math.min(r, w / 2, h / 2)); g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
function box(x, y, w, h, r, fill, o = {}) {
  g.save(); if (o.shadow) { g.shadowColor = `rgba(40,25,10,${o.shadow})`; g.shadowBlur = o.blur ?? 40; g.shadowOffsetY = o.oy ?? 18; }
  rr(x, y, w, h, r); if (fill) { g.fillStyle = fill; g.fill(); } g.shadowColor = 'transparent';
  if (o.stroke) { g.strokeStyle = o.stroke; g.lineWidth = o.lw ?? 2; if (o.dash) g.setLineDash(o.dash); g.stroke(); } g.restore();
}
const bar = (x, y, w, h, col, r = h / 2) => box(x, y, w, h, r, col);
function circle(x, y, r, col) { if (r <= 0) return; g.fillStyle = col; g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill(); }
function ring(x, y, r, col, lw = 3) { if (r <= 0) return; g.strokeStyle = col; g.lineWidth = lw; g.beginPath(); g.arc(x, y, r, 0, TAU); g.stroke(); }
// riak klik: gelang yang membesar dan pudar
function ripple(x, y, t, t0, col = K.or, R = 70) { const k = cl((t - t0) / .55); if (k <= 0 || k >= 1) return; g.save(); g.globalAlpha = 1 - k; ring(x, y, R * eOut(k), col, 5 * (1 - k) + 1); g.restore(); }
// kursor tetikus. clicks = [masa,...] → tekan (mengecil) + riak
function cursor(x, y, t, clicks = [], o = {}) {
  let s = o.s ?? 1; for (const c of clicks) { s *= 1 - .18 * Math.max(0, 1 - Math.abs(t - c) / .12); ripple(x, y, t, c, o.rc ?? K.or); }
  g.save(); g.translate(x, y); g.scale(s, s); g.rotate(-.08);
  g.beginPath(); g.moveTo(0, 0); g.lineTo(0, 46); g.lineTo(11, 35); g.lineTo(20, 55); g.lineTo(28, 51); g.lineTo(19, 32); g.lineTo(34, 32); g.closePath();
  g.fillStyle = o.col ?? K.ink; g.fill(); g.strokeStyle = K.cream; g.lineWidth = 3; g.lineJoin = 'round'; g.stroke(); g.restore();
}
// laluan kursor dengan bingkai kunci [[t, x, y], ...] (lengkung lembut)
const cursorAt = (t, keys) => kf(t, keys.map(([tt, x, y]) => [tt, [x, y]]), eIO);
// percikan konfeti deterministik
function burst(x, y, t, t0, o = {}) {
  const k = (t - t0) / (o.d ?? .9); if (k <= 0 || k >= 1) return; const n = o.n ?? 14, cols = o.cols ?? [K.or, K.mango, K.green, K.purple, K.pink];
  for (let i = 0; i < n; i++) { const a = i / n * TAU + hash(i) * .5, r = (o.r ?? 140) * eOut(k) * (.6 + hash(i + 9) * .6);
    g.save(); g.globalAlpha = 1 - k; g.translate(x + Math.cos(a) * r, y + Math.sin(a) * r + k * k * 60); g.rotate(a + k * 4);
    g.fillStyle = cols[i % cols.length]; i % 3 ? g.fillRect(-7, -3, 14, 6) : (g.beginPath(), g.arc(0, 0, 5, 0, TAU), g.fill()); g.restore(); }
}
// sudut pendakap fokus (gaya kamera)
function brackets(x, y, w, h, col = K.ink, c = 34, lw = 4, a = 1) {
  g.save(); g.globalAlpha *= a; g.strokeStyle = col; g.lineWidth = lw; g.lineCap = 'square';
  for (const [sx, sy] of [[0, 0], [1, 0], [0, 1], [1, 1]]) { const x0 = x + sx * w, y0 = y + sy * h; g.beginPath(); g.moveTo(x0 + (sx ? -c : c), y0); g.lineTo(x0, y0); g.lineTo(x0, y0 + (sy ? -c : c)); g.stroke(); }
  g.restore();
}
// anak panah (garis + kepala), k = kemajuan lukisan
function arrow(x0, y0, x1, y1, k = 1, col = K.or, lw = 4, head = 16) {
  if (k <= 0) return; const x = lerp(x0, x1, k), y = lerp(y0, y1, k), a = Math.atan2(y1 - y0, x1 - x0);
  g.save(); g.strokeStyle = col; g.fillStyle = col; g.lineWidth = lw; g.lineCap = 'round'; g.beginPath(); g.moveTo(x0, y0); g.lineTo(x, y); g.stroke();
  g.translate(x, y); g.rotate(a); g.beginPath(); g.moveTo(2, 0); g.lineTo(-head, -head * .6); g.lineTo(-head, head * .6); g.closePath(); g.fill(); g.restore();
}
// garis lengkung bezier dilukis mengikut k
function curve(pts, k, col = K.or, lw = 3, dash) {
  if (k <= 0) return; const [p0, p1, p2, p3] = pts, N = 40;
  g.save(); g.strokeStyle = col; g.lineWidth = lw; g.lineCap = 'round'; if (dash) g.setLineDash(dash); g.beginPath();
  for (let i = 0; i <= N * k; i++) { const u = i / N, m = 1 - u; const x = m * m * m * p0[0] + 3 * m * m * u * p1[0] + 3 * m * u * u * p2[0] + u * u * u * p3[0], y = m * m * m * p0[1] + 3 * m * m * u * p1[1] + 3 * m * u * u * p2[1] + u * u * u * p3[1]; i ? g.lineTo(x, y) : g.moveTo(x, y); }
  g.stroke(); g.restore();
}

// ── ikon beranimasi (garis, k = kemajuan lukisan 0→1) ───────────────────────
function icon(name, x, y, s, k = 1, col = K.ink, lw = null) {
  if (k <= 0) return; g.save(); g.translate(x, y); g.scale(s / 100, s / 100);
  g.strokeStyle = col; g.fillStyle = col; g.lineWidth = lw ?? 9; g.lineCap = 'round'; g.lineJoin = 'round';
  const dash = L => { g.setLineDash([L * k, L]); };
  switch (name) {
    case 'search': dash(260); g.beginPath(); g.arc(-10, -10, 30, 0, TAU); g.stroke(); dash(60); g.beginPath(); g.moveTo(12, 12); g.lineTo(38, 38); g.stroke(); break;
    case 'check': dash(110); g.beginPath(); g.moveTo(-32, 2); g.lineTo(-10, 26); g.lineTo(34, -24); g.stroke(); break;
    case 'bookmark': dash(320); g.beginPath(); g.moveTo(-26, -40); g.lineTo(26, -40); g.lineTo(26, 40); g.lineTo(0, 20); g.lineTo(-26, 40); g.closePath(); g.stroke(); break;
    case 'bulb': dash(240); g.beginPath(); g.arc(0, -12, 28, Math.PI * .8, Math.PI * 2.2); g.lineTo(12, 26); g.lineTo(-12, 26); g.closePath(); g.stroke(); dash(40); g.beginPath(); g.moveTo(-10, 40); g.lineTo(10, 40); g.stroke(); break;
    case 'blocks': g.setLineDash([]); g.globalAlpha *= k; for (let i = 0; i < 3; i++) { const kk = cl(k * 3 - i); if (kk > 0) { rr(-36 + i * 6, 22 - i * 26 - (1 - kk) * 30, 72 - i * 12, 20, 5); g.fill(); } } break;
    case 'eye': dash(240); g.beginPath(); g.moveTo(-42, 0); g.quadraticCurveTo(0, -38, 42, 0); g.quadraticCurveTo(0, 38, -42, 0); g.stroke(); g.setLineDash([]); circle(0, 0, 12 * k, col); break;
    case 'grid': dash(400); g.strokeRect(-36, -36, 72, 72); g.beginPath(); g.moveTo(0, -36); g.lineTo(0, 36); g.moveTo(-36, 0); g.lineTo(36, 0); g.stroke(); break;
    case 'chat': dash(300); rr(-40, -32, 80, 56, 14); g.stroke(); g.beginPath(); g.moveTo(-14, 24); g.lineTo(-24, 40); g.lineTo(0, 24); g.stroke(); break;
    case 'rocket': dash(300); g.beginPath(); g.moveTo(0, -44); g.quadraticCurveTo(26, -14, 16, 26); g.lineTo(-16, 26); g.quadraticCurveTo(-26, -14, 0, -44); g.stroke(); g.beginPath(); g.arc(0, -8, 8, 0, TAU); g.stroke(); dash(60); g.beginPath(); g.moveTo(-8, 34); g.lineTo(-8, 44); g.moveTo(8, 34); g.lineTo(8, 44); g.stroke(); break;
    case 'flask': dash(260); g.beginPath(); g.moveTo(-12, -40); g.lineTo(-12, -8); g.lineTo(-34, 34); g.lineTo(34, 34); g.lineTo(12, -8); g.lineTo(12, -40); g.stroke(); dash(40); g.beginPath(); g.moveTo(-18, -40); g.lineTo(18, -40); g.stroke(); break;
    case 'blueprint': dash(380); g.strokeRect(-40, -32, 80, 64); g.beginPath(); g.moveTo(-40, -12); g.lineTo(40, -12); g.moveTo(-10, -12); g.lineTo(-10, 32); g.stroke(); break;
    case 'heart': dash(260); g.beginPath(); g.moveTo(0, 34); g.bezierCurveTo(-60, -6, -24, -50, 0, -18); g.bezierCurveTo(24, -50, 60, -6, 0, 34); g.stroke(); break;
    case 'star': dash(360); g.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? 18 : 42; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); } g.closePath(); g.stroke(); break;
    case 'question': dash(200); g.beginPath(); g.arc(0, -16, 22, Math.PI * 1.1, Math.PI * 2.4); g.quadraticCurveTo(0, 6, 0, 16); g.stroke(); g.setLineDash([]); circle(0, 38, 6 * k, col); break;
  }
  g.restore();
}

// ── peranti telefon (skrin diklip, fn melukis isi dalam koordinat skrin) ─────
function phone(x, y, w, h, fn, o = {}) {
  g.save(); box(x, y, w, h, w * .13, K.ink, {shadow: o.shadow ?? .22, blur: 60, oy: 26});
  const p = w * .045; rr(x + p, y + p, w - 2 * p, h - 2 * p, w * .1); g.fillStyle = o.screen ?? K.cream; g.fill(); g.clip();
  g.translate(x + p, y + p); fn(w - 2 * p, h - 2 * p); g.restore();
  g.save(); bar(x + w / 2 - w * .14, y + p + 10, w * .28, 16, K.ink); g.restore();
}

// ── HUD: label babak, kod masa, sari kata karaoke, bar kemajuan ─────────────
let HUD_ON = true;
function sentences() {
  if (sentences.c) return sentences.c; const out = []; let cur = [];
  for (const w of WD()) { cur.push(w); if (/[.?!…]["”']?$/.test(w.w)) { out.push(cur); cur = []; } }
  if (cur.length) out.push(cur); return (sentences.c = out);
}
function hud(t, idx, n, label) {
  if (!HUD_ON || ALPHA) return; const col = K.mid;
  mono(`${String(idx + 1).padStart(2, '0')}/${String(n).padStart(2, '0')} — ${label}`, 64, 58, 15, col);
  const fr = Math.floor(t * 30) % 30, sec = Math.floor(t);
  mono(`00:00:${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}:${String(fr).padStart(2, '0')}`, W - 64, 58, 15, col, {align: 'right'});
  g.fillStyle = K.rule; g.fillRect(64, 1000, W - 128, 1.5);
  g.fillStyle = K.or; g.fillRect(64, 1000, (W - 128) * cl(t / window.DUR), 3);
  // sari kata: ayat semasa; perkataan yang sudah disebut gelap, yang akan datang pudar
  const s = sentences().find(ws => t >= ws[0].a - .15 && t <= ws[ws.length - 1].b + .5); if (!s) return;
  const kin = sn(t, s[0].a - .15, .25), kout = 1 - sn(t, s[s.length - 1].b + .3, .2, eIn);
  g.save(); g.globalAlpha = kin * kout; font(22, 600, F.g, false, 0); let x = 64;
  for (const w of s) { const txt = w.w.replace(/^["“]|["”]$/g, m => m === '"' ? (x === 64 ? '“' : '”') : m) + ' '; g.fillStyle = t >= w.a ? K.ink : K.grey; g.globalAlpha = kin * kout * (t >= w.a ? 1 : .55); g.fillText(txt, x, 1040); x += tw(txt); }
  g.restore();
}

// ── peralihan (dalam medium: bar warna, bilah, iris, tolak) ─────────────────
const TD = .6;
function overlay(type, k, col, seed) {   // k: 0→1 sepanjang peralihan (0.5 = menutup penuh)
  g.save(); g.fillStyle = col;
  const c = k < .5 ? eIO(k * 2) : 1 - eIO((k - .5) * 2);   // liputan 0→1→0
  if (type === 'wipe') { const a = k < .5 ? 0 : eIO((k - .5) * 2) * W, b = k < .5 ? eIO(k * 2) * W : W; g.fillRect(a, 0, b - a, H); }
  else if (type === 'rise') { const a = k < .5 ? H - eIO(k * 2) * H : 0, b = k < .5 ? H : H - eIO((k - .5) * 2) * H; g.fillRect(0, a, W, b - a); }
  else if (type === 'slats') { for (let i = 0; i < 6; i++) { const kk = cl((k - i * .05) / .75); const a = kk < .5 ? 0 : eIO(kk * 2 - 1) * W, b = kk < .5 ? eIO(kk * 2) * W : W; if (b > a) g.fillRect(a, i * H / 6, b - a, H / 6 + 1); } }
  else if (type === 'iris') { const r = c * Math.hypot(W, H) * .6; circle(W * (.3 + hash(seed) * .4), H * .5, r, col); }
  g.restore();
}

// ── pemacu babak ─────────────────────────────────────────────────────────────
let SCENES = [], TR = {}, TCOL = [K.or, K.mango, K.ink, K.green, K.purple];
function sceneAt(t) { let i = 0; while (i + 1 < SCENES.length && t >= SCENES[i + 1][0]) i++; return i; }
function drawScene(i, t) {
  const [t0, fn] = SCENES[i], t1 = SCENES[i + 1] ? SCENES[i + 1][0] : window.DUR, dur = t1 - t0, lt = t - t0;
  g.save(); const z = 1 + .022 * cl(lt / dur);                    // tolakan kamera perlahan: tiada frame beku
  g.translate(W / 2, H / 2); g.scale(z, z); g.translate(-W / 2, -H / 2);
  fn(t, lt, dur); g.restore();
}
function ground() { if (ALPHA) g.clearRect(0, 0, W, H); else { g.fillStyle = K.paper; g.fillRect(0, 0, W, H); } }
function render(t) {
  g.setTransform(1, 0, 0, 1, 0, 0); g.globalAlpha = 1; ground();
  const i = sceneAt(t), t0 = SCENES[i][0];
  // peralihan "push": dua babak bergerak bersama
  const nb = SCENES[i + 1], tb = nb ? nb[0] : 1e9, prevB = t0;
  const typeIn = TR[prevB], typeOut = TR[tb];
  if (typeOut === 'push' && t > tb - TD / 2 && nb) {
    const k = eIO(inv(tb - TD / 2, tb + TD / 2, t));
    g.save(); g.translate(-W * k, 0); drawScene(i, t); g.restore(); g.save(); g.translate(W * (1 - k), 0); drawScene(i + 1, Math.max(t, tb)); g.restore();
  } else if (typeIn === 'push' && t < prevB + TD / 2 && i > 0) {
    const k = eIO(inv(prevB - TD / 2, prevB + TD / 2, t));
    g.save(); g.translate(-W * k, 0); drawScene(i - 1, Math.min(t, prevB - 1e-3)); g.restore(); g.save(); g.translate(W * (1 - k), 0); drawScene(i, t); g.restore();
  } else drawScene(i, t);
  g.setTransform(1, 0, 0, 1, 0, 0);
  hud(t, i, SCENES.length, SCENES[i][2]);
  // tirai warna di atas segalanya, berpusat pada sempadan babak
  for (const [tbS, type] of Object.entries(TR)) {
    const b = +tbS; if (type === 'push' || type === 'cut' || Math.abs(t - b) > TD / 2) continue;
    const idx = SCENES.findIndex(s => s[0] === b); overlay(type, inv(b - TD / 2, b + TD / 2, t), TCOL[(idx + TCOL.length) % TCOL.length], idx);
  }
}

// ── but: muat fon, sediakan kanvas, dedahkan API kepada pemacu render ───────
async function boot(cvIn, withPreview = true) {
  const cv = cvIn || document.getElementById('cv'); cv.width = W; cv.height = H; g = cv.getContext('2d', {alpha: true});
  const faces = [
    [F.g, 'archivo-latin-500-normal', '500'], [F.g, 'archivo-latin-700-normal', '700'], [F.g, 'archivo-latin-800-normal', '800'], [F.g, 'archivo-latin-900-normal', '900'],
    [F.s, 'instrument-serif-latin-400-normal', '400', 'normal'], [F.s, 'instrument-serif-latin-400-italic', '400', 'italic'],
    [F.m, 'space-mono-latin-400-normal', '400'], [F.m, 'space-mono-latin-700-normal', '700'],
  ];
  await Promise.all(faces.map(async ([fam, file, weight, style = 'normal']) => {
    const ff = new FontFace(fam, `url(${ENGINE_BASE}fonts/${file}.woff2)`, {weight, style}); await ff.load(); document.fonts.add(ff);
  }));
  await document.fonts.ready;
  // pemanasan: lukis setiap babak sekali supaya ralat muncul awal
  for (const s of SCENES) { try { render(s[0] + .5); } catch (e) { console.error('babak', s[2], e); } }
  window.__draw = render;
  window.__ready = true;
  // pratonton langsung jika dibuka terus dalam pelayar (bukan ?bare=1)
  if (withPreview && !QS.has('bare')) preview(cv);
}
// untuk Remotion / HyperFrames: muat fon & sediakan __draw tanpa gelung pratonton
window.bootRemotion = cv => boot(cv, false);
const ENGINE_BASE = (document.currentScript?.src || '').replace(/[^/]*$/, '');
// lembaran kenalan: lukis beberapa masa dan susun dalam grid → dataURL JPEG
window.__sheet = (times, cols, w) => {
  const rows = Math.ceil(times.length / cols), h = Math.round(w * H / W), sh = document.createElement('canvas');
  sh.width = cols * w; sh.height = rows * h; const sg = sh.getContext('2d');
  times.forEach((tt, i) => { render(tt); sg.drawImage(g.canvas, (i % cols) * w, Math.floor(i / cols) * h, w, h);
    sg.fillStyle = '#000'; sg.fillRect((i % cols) * w, Math.floor(i / cols) * h, 74, 24); sg.fillStyle = '#fff'; sg.font = '700 16px monospace'; sg.fillText(tt.toFixed(2), (i % cols) * w + 6, Math.floor(i / cols) * h + 18); });
  return sh.toDataURL('image/jpeg', .9);
};
// pratonton: main dengan audio, ruang = jeda, ←/→ = lompat 2 s, klik bar = lompat
function preview(cv) {
  const au = document.getElementById('au'), OFF = window.OFF || 0; let t0 = performance.now(), off = 0, playing = false;
  const now = () => playing ? off + (performance.now() - t0) / 1000 : off;
  const sync = () => { if (!au) return; if (playing && off >= OFF) { au.currentTime = off - OFF; au.play(); } else au.pause(); };
  const seek = s => { off = cl(s, 0, window.DUR); t0 = performance.now(); sync(); };
  addEventListener('keydown', e => {
    if (e.code === 'Space') { off = now(); t0 = performance.now(); playing = !playing; sync(); }
    if (e.code === 'ArrowRight') seek(now() + 2); if (e.code === 'ArrowLeft') seek(now() - 2);
  });
  cv.addEventListener('click', e => { const r = cv.getBoundingClientRect(); seek((e.clientX - r.left) / r.width * window.DUR); });
  const loop = () => {
    const t = now(); if (t >= window.DUR && playing) { playing = false; off = window.DUR; if (au) au.pause(); }
    if (au && playing && au.paused && t >= OFF && t < OFF + (au.duration || 1e9)) { au.currentTime = t - OFF; au.play(); }
    render(Math.min(t, window.DUR - 1e-3)); requestAnimationFrame(loop);
  };
  loop();
}
