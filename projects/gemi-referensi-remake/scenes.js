// gemi · Referensi — REMAKE. 16 babak, satu latar kertas, tiada muzik: fokus pada suara.
// Setiap perkataan muncul tepat pada masa sebutannya (indeks WORDS: lihat words.js / words.mjs).
const w = i => WORDS[i].a, we = i => WORDS[i].b, S = seg;

// ═══ 01 PERKARA ═════════════════════════════════════════════════════════════
function s0(t) {
  const kg = sn(t, .1, 1.1);
  g.fillStyle = K.rule; for (let i = 0; i <= 12; i++) { const x = 96 + i * 144, hh = H * .8 * kg * (1 - Math.abs(i - 6) / 13); g.fillRect(x, 540 - hh / 2, 1, hh); }
  const out = 3.42;
  wordsLine(S(0, 3), ML, 330, t, {size: 104, wt: 900, out});
  wordsLine(S(4, 6), ML, 450, t, {size: 104, wt: 900, col: K.grey, out});
  wordsLine(S(7, 8), ML, 690, t, {size: 210, fam: F.s, it: true, wt: 400, col: K.or, ls: -4, out});
  // pendakap pencari yang sentiasa terlepas titik mango
  const spots = [[1200, 200, 330, 230, .9], [1100, 520, 300, 210, 1.7], [1440, 330, 280, 200, 2.4], [1480, 600, 260, 190, 3.05]];
  let [bx, by, bw, bh] = spots[0];
  for (let i = 1; i < spots.length; i++) { const k = sn(t, spots[i][4], .3, eIO); bx = lerp(bx, spots[i][0], k); by = lerp(by, spots[i][1], k); bw = lerp(bw, spots[i][2], k); bh = lerp(bh, spots[i][3], k); }
  const kb = ph(t, .7, out, .3);
  if (kb > 0) { brackets(bx, by, bw, bh, K.ink, 34, 4, kb); mono('FOKUS?', bx, by - 16, 15, K.mid, {a: kb}); }
  // titik yang lari setiap kali pendakap sampai
  const dots = [[1650, 330], [1350, 760], [1700, 820], [1180, 380], [1560, 180]];
  let dx = dots[0][0], dy = dots[0][1];
  for (let i = 1; i < dots.length; i++) { const k = sn(t, .75 + i * .66, .25, eIO); dx = lerp(dx, dots[i][0], k); dy = lerp(dy, dots[i][1], k); }
  circle(dx, dy, 14 * back(cl((t - .4) / .4)) * (1 - sn(t, out, .3)), K.mango);
  const look = Math.max(-16, Math.min(16, (dx - 1520) / 18));
  bulatShadow(1560, 935, 170 * cl((t - 1.7) / .5)); bulatPop(1560, 935, 170, t, 1.7, out, {mood: 'look', look, lookY: (dy - 600) / 50, color: 'orange'});
}

// ═══ 02 TAHU DULU ═══════════════════════════════════════════════════════════
function s1(t) {
  const out = 7.62;
  wordsLine(S(9, 12), ML, 250, t, {size: 88, wt: 900, out});
  wordsLine(S(13, 14), ML, 350, t, {size: 88, wt: 900, col: K.grey, out});
  slam('TAHU', ML - 10, 780, t, w(15) - .05, {size: 400, col: K.mango, echo: true, echoCol: '#EBDCC0', out});
  wordsLine(S(16, 19), 1010, 930, t, {size: 84, fam: F.s, it: true, wt: 400, col: K.ink, out, sp: .9});
  // rangka app di kanan: kotak "?" berubah menjadi tanda semak bila "tahu" disebut
  const X = 1300, Y = 150, kw = ph(t, 4.4, out, .4);
  if (kw > 0) {
    g.save(); g.globalAlpha = kw; g.translate(0, (1 - kw) * 40);
    box(X, Y, 440, 300, 22, K.cream, {shadow: .12});
    box(X, Y, 440, 54, 22, K.ink); bar(X + 24, Y + 20, 60, 14, K.mango);
    const known = sn(t, w(15), .5);
    for (let i = 0; i < 6; i++) {
      const cx = X + 30 + (i % 3) * 136, cy = Y + 78 + Math.floor(i / 3) * 104, kk = sn(t, 4.6 + i * .12, .35);
      box(cx, cy, 116, 86, 14, known > 0 ? [K.or, K.mango, K.green, K.purple, K.pink, K.blue][i] : K.paper2, {stroke: K.rule, dash: known > 0 ? null : [6, 6]});
      g.save(); g.globalAlpha *= kk; if (known <= 0) { font(40, 800, F.g); g.fillStyle = K.grey; g.textAlign = 'center'; g.fillText('?', cx + 58, cy + 58); }
      else icon('check', cx + 58, cy + 44, 52, sn(t, w(15) + i * .07, .35), K.cream, 11); g.restore();
    }
    g.restore();
  }
}

// ═══ 03 REFERENSI ═══════════════════════════════════════════════════════════
function s2(t) {
  const out = 10.78;
  wordsLine([['Dan', w(20)], ['di', w(21)], ['sinilah', w(22)]], ML, 250, t, {size: 64, wt: 800, out});
  const size = fit('REFERENSI', 1480, 300), t0 = w(24) - .08, hot = Math.floor((t - t0 - .8) * 9);
  slam('REFERENSI', ML - 6, 610, t, t0, {size, col: K.ink, stag: .038, echo: true, echoCol: '#E9D9BC', out, colAt: i => (i === hot % 9 && t > t0 + .8) ? K.or : K.ink});
  wordsLine(S(25, 26), ML, 830, t, {size: 104, fam: F.s, it: true, wt: 400, col: K.or, out});
  const kc = ph(t, w(24) + .4, out, .3);
  if (kc > 0) { g.save(); g.globalAlpha = kc; mono('REF. 01 — RUJUKAN VISUAL', 1780, 250, 16, K.mid, {align: 'right'}); g.restore(); }
}

// ═══ 04 CARI (dinding inspirasi) & 05 SIMPAN ═══════════════════════════════
const WALL = (() => {
  const cols = [];
  for (let c = 0; c < 4; c++) { const cards = []; let y = 0; let n = 0;
    while (y < 2400) { const h = 230 + Math.floor(hash(c * 31 + n) * 4) * 55; cards.push({y, h, type: Math.floor(hash(c * 7 + n * 13) * 6), seed: c * 50 + n}); y += h + 22; n++; }
    cols.push({cards, len: y, v: (c % 2 ? -1 : 1) * (80 + c * 12), x: 760 + c * 272}); }
  return cols;
})();
const WALL_T0 = 11.0, WALL_SLOW = 16.2, WALL_STOP = 17.5;
function wallOff(t, v) { const a = Math.min(t, WALL_SLOW) - WALL_T0, d = cl(t - WALL_SLOW, 0, WALL_STOP - WALL_SLOW); return v * (a + d - d * d / (2 * (WALL_STOP - WALL_SLOW))); }
function wallCards(t) {
  const out = [];
  for (const col of WALL) { const off = wallOff(t, col.v);
    for (const cd of col.cards) { let y = ((cd.y + off) % col.len + col.len) % col.len - 300; if (y > 1100) continue; out.push({...cd, x: col.x, y, w: 250}); } }
  return out;
}
const CHOSEN = (() => { const cs = wallCards(WALL_STOP); let best = cs[0], bd = 1e9; for (const c of cs) { const d = Math.hypot(c.x + 125 - 1270, c.y + c.h / 2 - 520); if (d < bd) { bd = d; best = c; } } return {...best, type: 2}; })();
// isi kad pada saiz asas (250 × h); skala dibuat oleh pemanggil
function cardArt(type, seed, w0, h0, o = {}) {
  const pal = [K.or, K.mango, K.green, K.purple, K.pink, K.blue], c1 = pal[Math.floor(hash(seed) * 6)], c2 = pal[Math.floor(hash(seed + 5) * 6)];
  box(0, 0, w0, h0, 16, K.cream, {shadow: o.shadow ?? .08, blur: 24, oy: 10});
  g.save(); rr(0, 0, w0, h0, 16); g.clip();
  if (type === 0) { g.fillStyle = c1; g.fillRect(0, 0, w0, h0 * .7); circle(w0 * .72, h0 * .22, 26, K.cream); g.fillStyle = K.ink2; g.beginPath(); g.moveTo(0, h0 * .7); g.lineTo(w0 * .35, h0 * .32); g.lineTo(w0 * .6, h0 * .58); g.lineTo(w0 * .75, h0 * .45); g.lineTo(w0, h0 * .7); g.fill(); bar(18, h0 * .78, w0 * .6, 12, K.ink2); bar(18, h0 * .78 + 24, w0 * .4, 10, K.rule); }
  else if (type === 1) { g.font = 'italic 400 110px "Instrument Serif"'; g.letterSpacing = '0px'; g.fillStyle = K.ink; g.fillText('Aa', 20, 120); for (let i = 0; i < 4; i++) bar(20, 160 + i * 26, w0 - 40 - i * 30, 10, K.rule); circle(w0 - 34, 36, 14, c1); }
  else if (type === 2) { g.fillStyle = o.head ?? K.green; g.fillRect(0, 0, w0, 62); bar(16, 24, 70, 14, K.cream); for (let i = 0; i < Math.floor((h0 - 80) / 54); i++) { box(14, 76 + i * 54, w0 - 28, 42, 10, '#FFFFFF', {stroke: '#EEE6D6'}); circle(36, 97 + i * 54, 9, i === 1 ? K.green : '#DDD6CA'); bar(56, 92 + i * 54, w0 - 110 - (i % 2) * 40, 10, '#D8D0C2'); } }
  else if (type === 3) { g.fillStyle = K.ink; g.fillRect(0, 0, w0, h0); for (let i = 0; i < 6; i++) { const hh = (h0 - 90) * (.25 + hash(seed + i) * .7); bar(22 + i * 36, h0 - 30 - hh, 22, hh, i === 3 ? K.mango : '#4A423A', 4); } bar(22, 26, 90, 12, K.cream); }
  else if (type === 4) { g.fillStyle = c2; g.fillRect(0, 0, w0, h0); box(w0 * .2, 26, w0 * .6, h0 - 52, 22, K.ink); box(w0 * .2 + 10, 36, w0 * .6 - 20, h0 - 72, 16, K.cream); box(w0 * .2 + 20, 56, w0 * .6 - 40, 56, 10, c1); for (let i = 0; i < 3; i++) bar(w0 * .2 + 20, 130 + i * 24, w0 * .6 - 60 - i * 14, 10, K.rule); }
  else { for (let i = 0; i < 5; i++) { g.fillStyle = pal[(Math.floor(hash(seed) * 6) + i) % 6]; g.fillRect(0, i * h0 / 5, w0, h0 / 5 + 1); } mono('#F05323', 16, h0 - 18, 13, K.cream); }
  g.restore();
}
function drawWall(t, tf, a = 1, skip) {
  g.save(); g.globalAlpha *= a;
  for (const c of wallCards(tf)) { if (skip && c.seed === skip) continue;
    const kin = sn(t, WALL_T0 + .15 + (c.x - 760) / 2000 + Math.max(0, c.y) / 3000, .6); if (kin <= 0) continue;
    g.save(); g.translate(c.x, c.y + (1 - kin) * 120); g.globalAlpha *= kin; cardArt(c.type, c.seed, c.w, c.h); g.restore(); }
  g.restore();
}
function s3(t) {
  g.save(); g.beginPath(); g.rect(720, 0, 1200, H); g.clip(); drawWall(t, t); g.restore();
  // garis pemisah halaman: kiri = ayat, kanan = dinding
  g.fillStyle = K.rule; g.fillRect(700, 100 + (1 - sn(t, 11.1, .6, eIO)) * 800, 1.5, 800 * sn(t, 11.1, .6, eIO));
  // satu perenggan mengalir; nama platform berwarna, ekor ayat pudar
  const hl = {5: K.or, 9: K.blue}; for (let i = 13; i <= 17; i++) hl[i] = K.grey;
  wordsLine(S(27, 44), ML, 250, t, {size: 56, wt: 900, maxW: 530, lh: 74, hl});
  // label platform melekat pada dinding tepat bila disebut
  const tag = (s, x, y, t0, bg) => { const k = ph(t, t0, 17.45, .35); if (k > 0) { g.save(); g.globalAlpha = k; chip(s, x, y, t, t0, {bg, fg: K.cream, size: 20}); g.restore(); } };
  tag('PINTEREST', 790, 300, w(32), K.or); tag('BEHANCE', 1340, 560, w(36), K.blue); tag('INTERFACE', 1080, 800, w(39), K.ink);
  mono('SKROL · SKROL · SKROL', ML, 860, 15, K.mid, {a: ph(t, 12, 16.4)});
  // kursor merayau di atas dinding, kemudian berhenti pada kad pilihan
  const ch = CHOSEN, tx = ch.x + 150, ty = ch.y + ch.h * .55;
  const [cx, cy] = cursorAt(t, [[11.6, 1900, 900], [12.6, 1060, 640], [13.6, 1420, 330], [14.6, 1650, 760], [15.6, 1180, 300], [17.0, tx, ty]]);
  if (t > 16.7) { const k = sn(t, 16.7, .4); g.save(); g.globalAlpha = k; box(ch.x - 6, ch.y - 6, 262, ch.h + 12, 20, null, {stroke: K.or, lw: 5}); g.restore(); }
  if (t > 11.6) cursor(cx, cy, t);
}
function s4(t) {
  // kesinambungan: dinding beku, kad pilihan membesar ke kanan
  const ch = CHOSEN, kz = sn(t, 17.55, .8, eIO), sc = lerp(1, 2.05, kz);
  const X = lerp(ch.x, 1090, kz), Y = lerp(ch.y, (H - ch.h * 2.05) / 2 - 20, kz);
  g.save(); g.beginPath(); g.rect(lerp(720, 0, kz), 0, W, H); g.clip(); drawWall(99, WALL_STOP, 1 - kz * .88, ch.seed); g.restore();
  g.fillStyle = K.rule; g.globalAlpha = 1 - kz; g.fillRect(700, 100, 1.5, 800); g.globalAlpha = 1;
  g.save(); g.translate(X, Y); g.scale(sc, sc); cardArt(2, ch.seed, 250, ch.h, {shadow: .18});
  // butang simpan di sudut kad
  const kb = sn(t, 18.6, .4), saved = sn(t, w(51), .3);
  if (kb > 0) { g.save(); g.translate(250 - 34, ch.h - 34); g.scale(back(kb), back(kb)); circle(0, 0, 22, saved > 0 ? K.or : K.ink); icon('bookmark', 0, 0, 22, 1, K.cream, 12); g.restore(); }
  g.restore();
  box(X - 6 * sc, Y - 6 * sc, (262) * sc, (ch.h + 12) * sc, 20 * sc, null, {stroke: K.or, lw: 5});
  const bx = X + (250 - 34) * sc, by = Y + (ch.h - 34) * sc;
  burst(bx, by, t, w(51), {r: 160, n: 18});
  // kursor bergerak ke butang simpan dan klik pada "Simpan."
  const [cx, cy] = cursorAt(t, [[17.55, ch.x + 150, ch.y + ch.h * .55], [18.4, X + 200, Y + 300], [19.7, bx + 6, by + 6]]);
  cursor(cx, cy, t, [w(51) - .05]);
  // toast "Disimpan"
  const kt = ph(t, w(51) + .15, 22.2, .4);
  if (kt > 0) { const ty = 905 + (1 - kt) * 60; g.save(); g.globalAlpha = kt; box(1140, ty - 40, 420, 64, 32, K.ink, {shadow: .2}); icon('check', 1180, ty - 8, 26, sn(t, w(51) + .3, .3), K.mango, 14);
    font(22, 700, F.g, false, 0); g.fillStyle = K.paper; g.fillText('Disimpan ke Referensi', 1212, ty); font(22, 700, F.m); g.fillStyle = K.mango; const n = t > w(51) + .5 ? '13' : '12'; g.fillText(n, 1500, ty); g.restore(); }
  // ayat kiri
  const outHa = w(51) - .3;
  wordsLine([[WORDS[45].w, w(45)]], ML, 330, t, {size: 220, fam: F.s, it: true, wt: 400, out: outHa});
  wordsLine(S(46, 50), ML, 470, t, {size: 92, fam: F.s, it: true, wt: 400, out: outHa, hl: {4: K.or}});
  pop('Simpan.', ML, 560, t, w(51), {size: 210, wt: 900, out: 22.3});
  wordsLine(S(52, 54), ML, 760, t, {size: 64, wt: 800, hl: {2: K.or}, out: 22.3});
  if (t > w(54)) { g.save(); g.globalAlpha = sn(t, w(54), .3); mono('REFERENSI · 13 SIMPANAN', ML, 840, 15, K.mid); g.restore(); }
}

// ═══ 06 TUNJUK ══════════════════════════════════════════════════════════════
const JARGON = ['grid 12 kolum', 'kerning −2%', 'hierarki visual', 'padding 24px', 'border-radius 16', 'sans-serif', 'kontras 4.5:1', 'user flow',
  'breakpoint 768', 'z-index', 'affordance', 'white space', 'baseline 8pt', 'UX writing', 'atomic design', 'gestalt'];
function s5(t) {
  const out = 29.4;
  wordsLine(S(55, 58), ML, 230, t, {size: 68, wt: 900, out: 27.15});
  wordsLine(S(59, 61), ML, 318, t, {size: 68, wt: 900, out: 27.15});
  wordsLine([['dengan', w(62)], ['istilah', w(63)]], ML, 406, t, {size: 68, wt: 900, out: 27.15});
  rise('teknikal,', ML + twf('dengan istilah ', 68, 900), 406, t, w(64), {size: 64, wt: 700, fam: F.m, col: K.or, out: 27.15});
  // banjir jargon, kemudian dipotong pisau
  const kc = knife(ML - 20, 640, 1780, t, 27.0);
  let x = ML, y = 520;
  JARGON.forEach((j, i) => { const cw = twf(j, 22, 700, F.m) + 31; if (x + cw > 1780) { x = ML; y += 54; }
    g.save(); g.translate(0, 640); g.scale(1, 1 - kc); g.translate(0, -640);
    chip(j, x, y, t, w(62) + i * .055, {bg: i % 5 === 2 ? K.mango : K.paper2, fg: i % 5 === 2 ? K.ink : K.ink3, size: 22}); g.restore(); x += cw + 12; });
  // tunjukkan sahaja
  wordsLine(S(65, 66), ML, 640, t, {size: 128, wt: 900, out});
  wordsLine(S(67, 70), ML, 790, t, {size: 92, fam: F.s, it: true, wt: 400, col: K.or, out});
  // kad yang "ditunjuk": kursor angkat kad & tekan suka
  const kk = sn(t, w(65) - .1, .6), X = 1440, Y = lerp(1100, 400, kk) + wob(t, .4) * 6;
  if (kk > 0 && t < out + .4) {
    g.save(); g.translate(X, Y); g.rotate(lerp(.25, -.06, kk)); g.globalAlpha = 1 - sn(t, out, .3);
    cardArt(0, 7, 300, 400, {shadow: .2});
    const liked = sn(t, w(70), .3); circle(300 - 46, 400 - 46, 26, liked > 0 ? K.or : K.ink); icon('heart', 300 - 46, 400 - 44, 26, 1, K.cream, 12);
    g.restore();
    burst(X + 254, Y + 340, t, w(70), {n: 16});
    cursor(X + 260, Y + 360, t, [w(70) - .05]);
  }
}

// ═══ 07 BERI ARAH ═══════════════════════════════════════════════════════════
const PX = 1300, PY = 130, PW = 420, PH = 820;
function appScreen(t, w0, h0, o = {}) {
  g.fillStyle = K.ink; g.fillRect(0, 0, w0, 88); font(22, 800, F.g, false, 0); g.fillStyle = K.cream; g.fillText(o.title ?? 'Ruang Kelas', 26, 66);
  const cardCol = o.cardCol ?? K.or;
  box(20, 108, w0 - 40, 150, 22, cardCol); font(32, 900, F.g); g.fillStyle = K.ink; g.fillText('Kuiz Sains', 46, 168);
  mono('Tahap 3 · 12 soalan', 46, 202, 14, K.ink2); bulat(w0 - 80, 230, 70, {mood: 'happy', color: cardCol === K.mango ? 'orange' : 'mango'});
  const tiles = [K.mango, K.green, K.purple, K.pink];
  for (let i = 0; i < 4; i++) { const x = 20 + (i % 2) * ((w0 - 52) / 2 + 12), y = 280 + Math.floor(i / 2) * 150, tw0 = (w0 - 52) / 2;
    box(x, y, tw0, 136, 16, o.tileBg ?? '#F1EBDF'); box(x + 18, y + 18, 34, 34, 8, o.tileCols ? o.tileCols[i] : tiles[i]); bar(x + 18, y + 80, tw0 - 50, 10, '#D8D0C2'); bar(x + 18, y + 102, tw0 - 80, 8, '#E3DCCF'); }
  const nb = o.navBounce ?? (() => 0);
  g.fillStyle = '#FFFFFF'; g.fillRect(0, h0 - 92, w0, 92);
  ['Modul', 'Utama', 'Profil', 'Prompt'].forEach((s, i) => { const x = 30 + i * (w0 - 60) / 4 + (w0 - 60) / 8, dy = -nb(i) * 14;
    box(x - 16, h0 - 74 + dy, 32, 22, 8, i === 1 ? K.or : '#CFC6B6'); mono(s, x, h0 - 28 + dy, 12, K.mid, {align: 'center'}); });
}
function s6(t) {
  const out = 39.0;
  wordsLine(S(71, 74), ML, 230, t, {size: 62, wt: 900, hl: {1: K.or}, out});
  const r2 = wordsLine(S(75, 78), ML, 310, t, {size: 62, wt: 900, out});
  arrow(r2.endX + 24, 290, 1240, 290, sn(t, w(78) + .2, .5, eIO), K.or, 4);
  g.fillStyle = K.rule; g.fillRect(ML, 365, 1000 * sn(t, 32.8, .5, eIO), 1.5);
  const lines = [[79, 82, 2, 'ARAH 01', 470], [83, 87, 2, 'ARAH 02', 600], [88, 92, 3, 'ARAH 03', 730]];
  for (const [a, b, h, lab, y] of lines) { if (t > w(a) - .2) mono(lab, ML, y - 70, 14, K.mid, {a: sn(t, w(a) - .2, .3)}); wordsLine(S(a, b), ML, y, t, {size: 64, fam: F.s, it: true, wt: 400, hl: {[h]: K.or}, out}); }
  // telefon + anotasi yang mengikut setiap arahan
  const kp = sn(t, 29.8, .7), py = PY + (1 - kp) * 900;
  const kS = sn(t, w(85), .5), styled = t > w(85) + .25;
  const nav = i => Math.max(0, 1 - Math.abs(t - (w(91) + .15 + i * .12)) / .18);
  phone(PX, py, PW, PH, (sw, shh) => appScreen(t, sw, shh, {cardCol: styled ? K.mango : K.or, tileCols: styled ? [K.or, K.ink, K.green, K.purple] : null, navBounce: nav}));
  const P = PX + PW * .045, Q = py + PW * .045;
  // 01 layout: kotak putus-putus pada grid jubin
  const kL = sn(t, w(81), .4, eIO);
  if (kL > 0) { g.save(); g.globalAlpha = 1 - sn(t, out, .3); box(P + 12, Q + 272, (PW * .91 - 24) * kL, 316, 18, null, {stroke: K.or, lw: 4, dash: [10, 8]});
    curve([[ML + twf('“Saya suka layout ini.', 64, 400, F.s, true) + 20, 450], [1100, 450], [1150, Q + 430], [P + 12, Q + 430]], sn(t, w(81) + .1, .5, eIO), K.or, 3); g.restore(); }
  // 02 style: palet warna muncul di sebelah telefon
  if (kS > 0) { g.save(); g.globalAlpha = 1 - sn(t, out, .3); [K.or, K.mango, K.green, K.ink].forEach((c, i) => circle(PX - 60, Q + 150 + i * 70, 24 * back(sn(t, w(85) + i * .08, .4, x => x)), c));
    g.font = 'italic 400 70px "Instrument Serif"'; g.letterSpacing = '0px'; g.fillStyle = K.ink; g.globalAlpha *= sn(t, w(86), .3); g.fillText('Aa', PX - 100, Q + 470); g.restore(); }
  // 03 menu: kotak sorotan pada navigasi bawah
  const kM = sn(t, w(91), .4, eIO);
  if (kM > 0) { g.save(); g.globalAlpha = 1 - sn(t, out, .3); box(P + 4, py + PH - PW * .045 - 100, (PW * .91 - 8) * kM, 96, 16, null, {stroke: K.or, lw: 4});
    curve([[ML + twf('Saya suka cara menu disusun.”', 64, 400, F.s, true) + 20, 712], [1050, 712], [1150, py + PH - 60], [P + 4, py + PH - 60]], sn(t, w(91) + .1, .5, eIO), K.or, 3); g.restore(); }
}

// ═══ 08 BUKAN INI ═══════════════════════════════════════════════════════════
function s7(t) {
  const out = 43.1;
  wordsLine(S(93, 95), ML, 250, t, {size: 72, wt: 900, col: K.grey, out});
  const kb = ph(t, 39.6, out, .5), X = 260, Y = 420, BW = 1400, BH = 150;
  if (kb > 0) {
    g.save(); g.globalAlpha = kb; g.translate(0, (1 - kb) * 50);
    box(X, Y, BW, BH, 30, K.cream, {shadow: .14, stroke: t > w(96) - .2 && t < 42.9 ? K.ink : K.rule, lw: 3});
    mono('PROMPT', X + 40, Y - 22, 15, K.mid);
    const txt = '“AI, buatkan app yang cantik.”', d = we(100) - w(96) + .1;
    if (t < w(96)) { font(40, 400, F.m); g.fillStyle = K.grey; if (t > 40.4) g.fillText('Tulis arahan anda…', X + 50, Y + 90); }
    typeOn(txt, X + 50, Y + 90, t, w(96) - .05, {cps: txt.length / d, size: 40, col: K.ink});
    // butang hantar
    const sent = 42.95, ks = Math.max(0, 1 - Math.abs(t - sent) / .12);
    g.save(); g.translate(X + BW - 90, Y + BH / 2); g.scale(1 - ks * .15, 1 - ks * .15); circle(0, 0, 44, t > sent ? K.or : K.ink); arrow(-16, 0, 18, 0, 1, K.cream, 6, 14); g.restore();
    ripple(X + BW - 90, Y + BH / 2, t, sent, K.or, 90);
    g.restore();
  }
  // balasan yang samar: ??? dan Si Bulat keliru
  const kr = sn(t, 42.4, .4);
  if (kr > 0 && t < out + .3) { g.save(); g.globalAlpha = kr * (1 - sn(t, out, .3));
    box(260, 640, 640, 230, 28, K.paper2); for (let i = 0; i < 3; i++) icon('question', 360 + i * 120, 750 + wob(t, 1.4, i) * 8, 70, sn(t, 42.5 + i * .12, .4), K.grey, 9);
    mono('HASIL: ???', 290, 845, 15, K.mid); g.restore(); }
  bulatShadow(1500, 900, 200 * cl((t - 42.2) / .5)); bulatPop(1500, 900, 200, t, 42.2, out, {mood: 'oops', color: 'orange', rot: wob(t, .7) * .05});
  if (t > 42.5 && t < out) { g.save(); g.globalAlpha = sn(t, 42.5, .3); font(90, 900, F.g); g.fillStyle = K.or; g.fillText('?', 1590 + wob(t, 1.1) * 6, 640); g.restore(); }
}

// ═══ 09 JELAS ═══════════════════════════════════════════════════════════════
function s8(t) {
  const out = 47.85;
  wordsLine(S(101, 103), ML, 220, t, {size: 64, wt: 900, hl: {2: K.or}, out});
  wordsLine(S(104, 106), ML, 300, t, {size: 64, wt: 900, col: K.grey, out});
  const t0 = w(104), tf = w(107), size = 330;
  const blur = 34 * (1 - sn(t, tf - .05, .45, eIO));
  if (t > t0) { g.save(); const kin = sn(t, t0, .6); g.globalAlpha = kin * (1 - sn(t, out, .3)); if (blur > .3) g.filter = `blur(${blur.toFixed(1)}px)`;
    font(size, 900, F.g, false, -12); g.fillStyle = K.ink; g.textAlign = 'center'; g.fillText('JELAS', W / 2, 690); g.restore(); }
  // pendakap merapat apabila fokus tajam
  const tight = sn(t, tf - .05, .45, eIO), bw = lerp(1400, 1040, tight), bh = lerp(420, 300, tight);
  if (t > t0) brackets(W / 2 - bw / 2, 690 - 240 - (bh - 300) / 2, bw, bh, tight > .9 ? K.mango : K.ink3, 44, 5, sn(t, t0, .4) * (1 - sn(t, out, .3)));
  const pct = Math.round(100 * tight); if (t > t0) mono(`FOKUS ${String(pct).padStart(3, ' ')}%`, W / 2 + bw / 2, 690 - 240 - (bh - 300) / 2 - 16, 15, tight > .9 ? K.or : K.mid, {align: 'right', a: 1 - sn(t, out, .3)});
  wordsLine(S(108, 112), ML + 260, 880, t, {size: 76, fam: F.s, it: true, wt: 400, col: K.or, out});
}

// ═══ 10 FUNDAMENTAL ═════════════════════════════════════════════════════════
function s9(t) {
  const out = 51.75;
  wordsLine(S(113, 117), ML, 230, t, {size: 56, wt: 800, out, hl: {}});
  const t0 = w(118) - .05, size = fit('FUNDAMENTAL', 1600, 230), base = 600;
  // tapak: tiga lapis blok dibina dari kiri ke kanan
  const layers = [[K.or, 0], [K.mango, .12], [K.ink, .24]];
  layers.forEach(([c, d], i) => { const k = sn(t, t0 + .25 + d, .5, eIO); if (k > 0) { const ko = sn(t, out, .3, eIO); g.fillStyle = c; g.fillRect(ML + 1640 * ko, base + 40 + i * 52, 1640 * k * (1 - ko), 40); } });
  letters('FUNDAMENTAL', ML, base, {size, wt: 900, col: K.ink, ls: -size * .02}, (i) => {
    const k = cl((t - t0 - i * .04) / .45); if (k <= 0) return {a: 0};
    const fall = 1 - eIn(cl(k * 1.6)), land = k > .62 ? Math.sin(cl((k - .62) / .38) * Math.PI) * .18 : 0;
    return {dy: -fall * 500 + sn(t, out, .3, eIn) * 300, s: 1 + land * .3, sy: 1 - land, a: 1 - sn(t, out, .3)};
  });
  wordsLine(S(119, 120), ML, 880, t, {size: 110, fam: F.s, it: true, wt: 400, col: K.or, out});
}

// ═══ 11 BELAJAR ×4 ══════════════════════════════════════════════════════════
function s10(t) {
  const out = 57.55;
  rise('Belajar', ML, 430, t, w(121) - .05, {size: 200, wt: 900, out});
  rise('kemudian', ML + twf('Belajar', 200, 900) + 40, 430, t, w(127), {size: 90, fam: F.s, it: true, wt: 400, col: K.mid, out});
  const steps = [[122, 'mencari,', 'search', 'CARI'], [124, 'memilih,', 'check', 'PILIH'], [126, 'memahami,', 'bulb', 'FAHAM'], [129, 'membina.', 'blocks', 'BINA']];
  let cur = -1; steps.forEach((s, i) => { if (t >= w(s[0]) - .08) cur = i; });
  // slot bergulir: perkataan lama naik keluar, yang baru naik masuk
  steps.forEach(([wi, txt, ic], i) => {
    const tin = w(wi) - .08, tnext = i < 3 ? w(steps[i + 1][0]) - .08 : out;
    rise(txt, ML, 660, t, tin, {size: 200, wt: 900, col: [K.or, K.green, K.mango, K.ink][i], out: i < 3 ? tnext - .3 : tnext, outD: .3, d: .45});
    const k = ph(t, tin + .1, tnext, .35);
    if (k > 0) { g.save(); g.globalAlpha = k; const cx = 1560, cy = 560; circle(cx, cy, 130 * back(sn(t, tin + .05, .45, x => x)), [K.or, K.green, K.mango, K.ink][i]); icon(ic, cx, cy, 120, sn(t, tin + .2, .5), K.cream, 11); g.restore(); }
  });
  // stepper 4 langkah
  const kst = ph(t, w(122) - .1, out, .4);
  if (kst > 0) { g.save(); g.globalAlpha = kst;
    steps.forEach(([wi, , , lab], i) => { const x = ML + i * 410, fill = sn(t, w(wi), .45, eIO);
      g.fillStyle = K.rule; g.fillRect(x, 820, 380, 6); g.fillStyle = i <= cur ? [K.or, K.green, K.mango, K.ink][i] : K.rule; g.fillRect(x, 820, 380 * fill, 6);
      mono(`0${i + 1} ${lab}`, x, 860, 16, i <= cur ? K.ink : K.grey); });
    g.restore(); }
}

// ═══ 12 EDUCATOR ════════════════════════════════════════════════════════════
function s11(t) {
  const out = 62.35;
  wordsLine(S(130, 132), ML, 240, t, {size: 64, wt: 800, col: K.mid, out});
  slam('educator', ML - 6, 490, t, w(133) - .05, {size: 250, col: K.mango, stag: .035, out});
  wordsLine(S(134, 137), ML, 620, t, {size: 86, fam: F.s, it: true, wt: 400, out});
  wordsLine(S(138, 142), ML, 770, t, {size: 60, wt: 900, hl: {1: K.or, 2: K.or}, out});
  const t0 = w(143) - .05, cw = chip('prompt.', ML, 880, t, t0, {size: 44, bg: K.ink, fg: K.paper, out});
  // garis coret: "bukan hanya" prompt
  const ks = sn(t, t0 + .3, .25, eIO); if (ks > 0 && t < out + .3) { g.save(); g.globalAlpha = 1 - sn(t, out, .3); g.strokeStyle = K.or; g.lineWidth = 7; g.lineCap = 'round'; g.beginPath(); g.moveTo(ML - 10, 884); g.lineTo(ML - 10 + (cw + 20) * ks, 878); g.stroke(); g.restore(); }
  bulatShadow(1560, 930, 210 * cl((t - 59.4) / .5)); bulatPop(1560, 930, 210, t, 59.4, out, {mood: t > 61 ? 'thinking' : 'happy', color: 'mango', blush: true});
}

// ═══ 13 LALUAN (6 modul → tangga) ═══════════════════════════════════════════
const MODS = [[149, 'Mencari', 'referensi', 'search'], [151, 'Menyusun', 'idea', 'bulb'], [153, 'App', 'Blueprint', 'blueprint'], [156, 'Bekerja', 'dengan AI', 'chat'], [159, 'Test', '', 'flask'], [160, 'Publish', '', 'rocket']];
const MC = [K.or, K.mango, K.blue, K.purple, K.green, K.ink];
function s12(t) {
  const out = 74.7;
  wordsLine(S(144, 148), ML, 220, t, {size: 58, wt: 900, out: 71.8});
  const st = sn(t, w(166) - .1, .7, eIO);              // susunan → tangga
  const CW = 246, GAP = 33, Y0 = 330, CH = 300;
  MODS.forEach(([wi, a, b, ic], i) => {
    const tin = w(wi) - .1, k = sn(t, tin, .5); if (k <= 0) return;
    const x = ML + i * (CW + GAP), yStair = 700 - i * 78, y = lerp(Y0, yStair - 160, st), hh = lerp(CH, 160, st);
    g.save(); g.globalAlpha = 1 - sn(t, out, .25); g.translate(x + CW / 2, y + hh / 2 + (1 - k) * 80); g.scale(lerp(.85, 1, back(k)), lerp(.85, 1, back(k))); g.translate(-CW / 2, -hh / 2);
    const done = t > (i < 5 ? w(MODS[i + 1][0]) - .1 : w(162));
    box(0, 0, CW, hh, 20, i === 5 ? K.ink : K.cream, {shadow: .1, stroke: done ? MC[i] : K.rule, lw: done ? 4 : 2});
    mono(`0${i + 1}`, 22, 40, 22, MC[i]);
    if (st < .5) { g.globalAlpha *= 1 - st * 2; icon(ic, CW / 2, 140, 84, sn(t, tin + .15, .6), i === 5 ? K.cream : MC[i], 10);
      font(26, 800, F.g, false, 0); g.fillStyle = i === 5 ? K.cream : K.ink; g.fillText(a, 22, 236); font(24, 400, F.s, true, 0); g.fillStyle = i === 5 ? K.mango : K.mid; g.fillText(b, 22, 268); }
    if (done) { circle(CW - 34, 34, 18 * back(sn(t, i < 5 ? w(MODS[i + 1][0]) - .1 : w(162), .35)), MC[i]); icon('check', CW - 34, 34, 22, 1, K.cream, 14); }
    g.restore();
  });
  // garis kemajuan yang menyambung kad
  const lastIn = MODS.reduce((m, [wi], i) => t > w(wi) ? i : m, -1);
  if (st < .05 && lastIn >= 0) { g.fillStyle = K.or; g.fillRect(ML, Y0 + CH + 30, (CW + GAP) * lastIn + CW * sn(t, w(MODS[lastIn][0]), .5, eIO), 4); }
  wordsLine(S(162, 165), ML, 790, t, {size: 62, wt: 900, out});
  wordsLine(S(166, 168), ML, 885, t, {size: 92, fam: F.s, it: true, wt: 400, col: K.or, out});
  // Si Bulat melompat naik tangga
  if (st > .5) { const hops = [[w(166) + .25, 0], [w(167), 2], [w(168), 4], [w(168) + .32, 5]];
    let pos = 0, hi = 0; hops.forEach(([th, p], j) => { if (t >= th) { pos = p; hi = j; } });
    const top = i => [ML + i * (CW + GAP) + CW / 2, 700 - i * 78 - 160];
    const [x0, y0] = top(hi > 0 ? hops[hi - 1][1] : 0), [x1, y1] = top(pos), th = hops[hi][0];
    if (t >= hops[0][0]) bulatHop(x0, y0, x1, y1, 110, t, th, th + .3, {mood: 'happy', color: 'orange', h: 90, a: 1 - sn(t, out, .25)}); }
}

// ═══ 14 PANDUAN ═════════════════════════════════════════════════════════════
function s13(t) {
  const out = 79.6;
  wordsLine(S(169, 173), ML, 230, t, {size: 56, wt: 800, col: K.mid, out});
  wordsLine(S(174, 175), ML, 390, t, {size: 128, wt: 900, hl: {1: K.or}, out});
  wordsLine(S(176, 177), ML, 525, t, {size: 128, wt: 900, out});
  rise('untuk', ML, 630, t, w(178), {size: 64, fam: F.s, it: true, wt: 400, col: K.mid, out});
  const c1 = chip('pemula', ML, 720, t, w(179), {size: 34, bg: K.or, fg: K.cream, fam: F.g, wt: 800, ls: 0, out});
  rise('&', ML + c1 + 18, 738, t, w(180), {size: 50, fam: F.s, it: true, wt: 400, out});
  chip('educator', ML + c1 + 64, 720, t, w(181), {size: 34, bg: K.mango, fg: K.ink, fam: F.g, wt: 800, ls: 0, out});
  // telefon: senarai langkah dengan kotak semak yang ditanda satu demi satu
  const kp = sn(t, 75.0, .7), py = 120 + (1 - kp) * 900 + sn(t, out, .3, eIn) * 900;
  const items = ['Cari referensi', 'Susun idea', 'App blueprint', 'Bina dengan AI', 'Test', 'Publish'];
  phone(1250, py, 420, 820, (sw) => {
    g.fillStyle = K.or; g.fillRect(0, 0, sw, 170); font(28, 900, F.g, false, 0); g.fillStyle = K.cream; g.fillText('Panduan', 28, 92); g.fillText('Bina App', 28, 128);
    bulat(sw - 70, 140, 80, {mood: 'happy', color: 'mango'});
    items.forEach((s, i) => { const y = 200 + i * 86, tick = sn(t, 76.0 + i * .5, .3);
      box(18, y, sw - 36, 70, 14, '#FFFFFF', {stroke: '#EEE6D6'}); box(36, y + 20, 30, 30, 8, tick > 0 ? K.green : '#FFFFFF', {stroke: tick > 0 ? K.green : '#CFC6B6', lw: 3});
      if (tick > 0) icon('check', 51, y + 35, 22, tick, K.cream, 16); font(22, 700, F.g, false, 0); g.fillStyle = K.ink; g.fillText(s, 84, y + 43); });
  });
  const tap = i => 76.0 + i * .5, j = cl(Math.floor((t - 75.6) / .5), 0, 5);
  if (t > 75.4 && t < out) { const [cx, cy] = cursorAt(t, [[75.4, 1900, 900], [tap(0) - .1, 1300, py + 19 + 200 + 35]].concat(items.map((_, i) => [tap(i) - .08, 1300, py + 19 + 200 + i * 86 + 35]))); cursor(cx, cy, t, items.map((_, i) => tap(i) - .02)); }
}

// ═══ 15 DARI MANA? ══════════════════════════════════════════════════════════
const ARR = (() => { const a = []; for (let i = 0; i < 24; i++) a.push({x: 1120 + (i % 6) * 112, y: 300 + Math.floor(i / 6) * 130, r: hash(i * 3) * TAU, sp: .5 + hash(i) * 1.5}); return a; })();
function s14(t) {
  const out1 = 84.9, out = 88.0, ta = w(197);
  wordsLine(S(182, 187), ML, 230, t, {size: 56, wt: 800, col: K.mid, out: out1});
  wordsLine(S(188, 191), ML, 400, t, {size: 96, fam: F.s, it: true, wt: 400, out: out1});
  wordsLine(S(192, 196), ML, 520, t, {size: 96, fam: F.s, it: true, wt: 400, hl: {4: K.or}, out: out1});
  // anak panah kucar-kacir → semuanya menunjuk ke kanan
  const kal = i => sn(t, ta + .3 + i * .03, .6, eIO);
  ARR.forEach((a, i) => { const kin = sn(t, 80.3 + i * .03, .4); if (kin <= 0) return; const k = kal(i);
    const rr0 = a.r + wob(t, a.sp * .3, i) * .6, r = lerp(rr0, 0, k), x = lerp(a.x, 1120 + (i % 6) * 112 + k * 40, k), y = a.y;
    g.save(); g.globalAlpha = kin * (1 - sn(t, out, .3)); g.translate(x, y); g.rotate(r); arrow(-30, 0, 30, 0, 1, k > .5 ? K.or : K.ink3, 5, 15); g.restore(); });
  const kq = ph(t, 81.8, ta + .2, .4); if (kq > 0) { g.save(); g.globalAlpha = kq; font(260, 900, F.s, true, 0); g.fillStyle = K.mango; g.fillText('?', 1380 + wob(t, .5) * 8, 560); g.restore(); }
  // Sebaliknya… anda TAHU (bergema dengan babak 02)
  rise('Sebaliknya…', ML, 300, t, ta, {size: 64, wt: 800, col: K.mid, out});
  rise('anda', ML, 430, t, w(198), {size: 96, fam: F.s, it: true, wt: 400, out});
  slam('TAHU', ML - 8, 690, t, w(199) - .05, {size: 300, col: K.or, out});
  wordsLine(S(200, 203), ML, 850, t, {size: 76, fam: F.s, it: true, wt: 400, out});
  bulatShadow(1620, 935, 170 * cl((t - 81.0) / .5));
  bulatPop(1620, 935, 170, t, 81.0, out, {mood: t > w(199) ? 'cheer' : 'thinking', color: 'orange', arms: t > w(199), armsUp: t > w(199)});
}

// ═══ 16 BINA (kiasmus: "Belajar bina." → "Bina untuk belajar.") ══════════════
function s15(t) {
  const S1 = 150, y1 = 430, y2 = 640, wB = twf('Belajar ', S1, 900), xB2 = ML + wB;
  rise('Belajar', ML, y1, t, w(204) - .05, {size: S1, wt: 900});
  rise('bina.', xB2, y1, t, w(205) - .05, {size: S1, wt: 900, col: K.or});
  // perkataan terbang bersilang ke baris kedua
  const tc = w(206) - .1, k1 = sn(t, tc, .55, eIO), k2 = sn(t, w(208) - .2, .55, eIO);
  const wBina = twf('Bina ', S1, 900), wUntuk = twf('untuk ', S1 * .9, 400, F.s, true);
  if (t > tc) { const x = lerp(xB2, ML, k1), y = lerp(y1, y2, k1) - Math.sin(k1 * Math.PI) * 120;
    g.save(); font(S1, 900); g.fillStyle = K.or; g.fillText(k1 > .5 ? 'Bina' : 'bina', x, y); g.restore(); }
  rise('untuk', ML + wBina, y2, t, w(207) - .05, {size: S1 * .9, fam: F.s, it: true, wt: 400, col: K.ink});
  if (t > w(208) - .2) { const x = lerp(ML, ML + wBina + wUntuk, k2), y = lerp(y1, y2, k2) + Math.sin(k2 * Math.PI) * 120;
    g.save(); font(S1, 900); g.fillStyle = K.ink; g.globalAlpha = .25 + .75 * k2; g.fillText(k2 > .5 ? 'belajar.' : 'Belajar', x, y); g.restore(); }
  // kad penutup
  const ke = sn(t, 90.9, .5, eIO);
  if (ke > 0) { g.fillStyle = K.rule; g.fillRect(ML, 760, 1640 * ke, 2); }
  rise('app panduan bina app · untuk pemula & educator', ML, 820, t, 91.1, {size: 26, wt: 700, fam: F.m, col: K.mid, ls: 1});
  rise('gemi', 1780, 820, t, 91.3, {size: 34, wt: 900, col: K.ink, align: 'right'});
  bulatShadow(1560, 690, 260 * cl((t - 90.3) / .5)); bulatPop(1560, 690, 260, t, 90.3, 1e9, {mood: 'cheer', arms: true, armsUp: true, color: 'orange', blush: true});
  burst(1560, 520, t, 90.6, {r: 220, n: 22});
  // tutup: tirai mango naik pada saat terakhir
  const kf2 = sn(t, 92.85, .6, eIO); if (kf2 > 0) { g.fillStyle = K.ink; g.fillRect(0, H * (1 - kf2), W, H * kf2 + 2); }
}

// ── susunan babak & peralihan ───────────────────────────────────────────────
SCENES = [
  [0, s0, 'PERKARA'], [3.8, s1, 'TAHU DULU'], [7.85, s2, 'REFERENSI'], [11.0, s3, 'CARI'], [17.55, s4, 'SIMPAN'],
  [22.55, s5, 'TUNJUK'], [29.6, s6, 'BERI ARAH'], [39.2, s7, 'BUKAN INI'], [43.3, s8, 'JELAS'], [48.05, s9, 'FUNDAMENTAL'],
  [51.95, s10, 'BELAJAR ×4'], [57.75, s11, 'EDUCATOR'], [62.5, s12, 'LALUAN'], [74.85, s13, 'PANDUAN'], [79.8, s14, 'DARI MANA?'], [88.2, s15, 'BINA'],
];
TR = {3.8: 'wipe', 7.85: 'slats', 11.0: 'iris', 17.55: 'cut', 22.55: 'rise', 29.6: 'slats', 39.2: 'wipe', 43.3: 'iris', 48.05: 'rise',
  51.95: 'wipe', 57.75: 'wipe', 62.5: 'slats', 74.85: 'iris', 79.8: 'slats', 88.2: 'rise'};
