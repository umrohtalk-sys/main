// gemi · Referensi — 15 babak, setiap perkataan besar jatuh pada masa sebutannya dalam suara.
const DUR = 95;
const ground = col => { g.fillStyle = col; g.fillRect(0, 0, W, H); };
const ph = (t, a, b, d = .4) => sn(t, a, d) * (1 - sn(t, b, d * .8));   // masuk pada a, keluar pada b
const LAST = n => WD[WD.length - n];                                     // perkataan dari hujung

// ── 1. PERKARA ──────────────────────────────────────────────────────────────
function s0(t) {
  ground(K.ink);
  const kg = sn(t, .15, .9);                                   // grid tumbuh dari titik tengah
  g.fillStyle = K.ink3; for (let i = 0; i <= 12; i++) { const x = 96 + i * 144, hh = H * kg * (1 - Math.abs(i - 6) / 14); g.fillRect(x, 540 - hh / 2, 1, hh); }
  const kd = sn(t, .9, .5), dx = lerp(W / 2, 1640, kd), dy = lerp(540, 300, kd), dr = back(cl(t / .3)) * 12;
  g.fillStyle = K.mango; g.beginPath(); g.arc(dx, dy, dr, 0, TAU); g.fill();
  line([['Tapi', T('tapi')], ['ada', T('ada')], ['satu', T('satu')], ['perkara', T('perkara')]], ML, 330, 112, t, {col: K.paper, wt: 800});
  line([['yang', T('yang')], ['sering', T('sering')], ['orang', T('orang')]], ML, 465, 112, t, {col: K.grey, wt: 800});
  line([['terlepas', T('terlepas')], ['pandang…', T('pandang')]], ML, 720, 220, t, {col: K.mango, fam: F.s, it: true, wt: 400});
  // jejak pandang: kurungan pencari yang sentiasa terlepas sasaran
  const spots = [[1250, 180, 380, 250, 1.1], [1150, 560, 330, 220, 1.9], [1480, 380, 300, 210, 2.6], [1520, 620, 280, 200, 3.3]];
  let bx = spots[0][0], by = spots[0][1], bw = spots[0][2], bh = spots[0][3];
  for (let i = 1; i < spots.length; i++) { const k = sn(t, spots[i][4], .35); bx = lerp(bx, spots[i][0], k); by = lerp(by, spots[i][1], k); bw = lerp(bw, spots[i][2], k); bh = lerp(bh, spots[i][3], k); }
  const kb = sn(t, .9, .4); if (kb > 0) { g.save(); g.globalAlpha = kb; g.strokeStyle = K.paper; g.lineWidth = 4; const c = 34;
    for (const [sx, sy] of [[0, 0], [1, 0], [0, 1], [1, 1]]) { const x0 = bx + sx * bw, y0 = by + sy * bh; g.beginPath(); g.moveTo(x0 + (sx ? -c : c), y0); g.lineTo(x0, y0); g.lineTo(x0, y0 + (sy ? -c : c)); g.stroke(); }
    setF(15, 700, 'normal', F.m, false, 3); g.fillStyle = K.grey; g.fillText('FOKUS?', bx, by - 14); g.restore(); }
  if (t > 2.9) { const k = sn(t, 2.9, .4); g.save(); g.globalAlpha = k; icEye(1660, 830, 150, t, T('pandang') + .15); g.restore(); }
  bulatPop(1250, 935, 150, t, 2.2, 1e9, {mood: 'look', look: -14, color: 'orange'});
}

// ── 2. TAHU DULU ────────────────────────────────────────────────────────────
function s1(t) {
  ground(K.paper);
  line([['Sebelum', T('sebelum')], ['kita', T('kita')], ['bina', T('bina')], ['app,', T('app')]], ML, 250, 92, t, {col: K.ink});
  line([['kita', T('kita', 2)], ['perlu', T('perlu')]], ML, 365, 92, t, {col: K.ink});
  slam('TAHU', ML - 8, 735, 370, t, T('tahu'), {st: 'expanded', col: K.or, stag: .05});
  line([['apa', T('apa')], ['yang', T('yang', 2)], ['kita', T('kita', 3)], ['bina.', T('bina', 2)]], ML, 880, 104, t, {col: K.ink, fam: F.s, it: true, wt: 400});
  // susunan: BINA dulu → TAHU masuk di atas, BINA turun ke 02 (re-flow)
  const kt = sn(t, T('tahu'), .45), x = 1420;
  setF(16, 700, 'normal', F.m, false, 3); g.fillStyle = K.mid; if (t > T('bina')) g.fillText('URUTAN', x, 250);
  rule(x, 1780, 268, t, T('bina'), K.ink, 2);
  if (t > T('bina') - .1) { const y = lerp(350, 450, kt); chip(kt > .5 ? '02  BINA' : '01  BINA', x, y, t, T('bina'), {px: 28, bg: K.ink, fg: K.paper}); }
  if (kt > 0) chip('01  TAHU', x, 350, t, T('tahu') + .1, {px: 28, bg: K.or, fg: K.ink});
}

// ── 3. REFERENSI ────────────────────────────────────────────────────────────
function s2(t) {
  ground(K.mango);
  line([['Dan', T('dan')], ['di', T('di')], ['sinilah', T('sinilah')]], ML, 230, 76, t, {col: K.ink});
  const px = fit('REFERENSI', 1640, 900, 'condensed'), tr = T('referensi');
  echo('REFERENSI', ML, 640, px, t, tr, {st: 'condensed', col: K.ink, a: .35, below: true, life: .8});
  slam('REFERENSI', ML, 640, px, t, tr, {st: 'condensed', col: K.ink});
  const ew = line([['memainkan', T('memainkan')], ['peranan.', T('peranan')]], ML, 880, 66, t, {col: K.ink, wt: 700});
  icBookmark(ML + ew + 70, 850, 90, t, T('peranan') + .15, K.or, K.ink);
}

// ── 4. CARI · SIMPAN ────────────────────────────────────────────────────────
const WALL = (() => { const cols = []; for (let c = 0; c < 5; c++) { const r = R(c * 31 + 5), cards = []; let y = 0; while (y < 2600) { const h = 200 + Math.floor(r() * 4) * 70; cards.push({y, h, seed: c * 50 + cards.length}); y += h + 22; } cols.push({cards, len: y, v: (c % 2 ? -1 : 1) * (70 + c * 9)}); } return cols; })();
function wallOff(t, v) { const t0 = 11.2, ta = T('interface'), tb = T('ha'); const u = Math.min(t, ta) - t0, d = cl(t - ta, 0, tb - ta); return v * (u + d - d * d / (2 * (tb - ta))); }
const CHOSEN = {c: 2, i: 6};
function s3(t) {
  ground(K.paper);
  const tha = T('ha'), tsv = T('simpan'), X0 = 900, CW = 190, GAP = 22;
  // dinding rujukan (parallax: lajur selang-seli naik/turun)
  const dim = sn(t, tha - .1, .5) * .78 + sn(t, tsv - .3, .4) * .22, kin = sn(t, 11.3, .6);
  g.save(); g.beginPath(); g.rect(X0 - 20, 0, W, 970); g.clip();
  WALL.forEach((col, c) => { const off = ((wallOff(t, col.v) % col.len) + col.len) % col.len, x = X0 + c * (CW + GAP);
    for (let rep = -1; rep <= 1; rep++) for (const cd of col.cards) { const y = cd.y + rep * col.len - off + (1 - kin) * 900 * (c % 2 ? -1 : 1); if (y > H || y + cd.h < 0) continue; if (c === CHOSEN.c && cd === col.cards[CHOSEN.i] && t > tha - .1) continue; refCard(x, y, CW, cd.h, cd.seed); } });
  g.restore();
  if (dim > 0) { g.fillStyle = K.paper; g.globalAlpha = dim; g.fillRect(X0 - 20, 0, W, 970); g.globalAlpha = 1; }
  // label sumber pada dinding
  const tp = T('pinterest'), tbh = T('behance'), tif = T('interface');
  [[' PINTEREST ', tp, T('satu', 3) - .1, 1040, 300], [' BEHANCE ', tbh, T('atau') - .1, 1270, 560], [' INTERFACE ', tif, tha - .15, 1100, 760]].forEach(([s, a, b, x, y]) => { if (t > a - .1 && t < b + .4) { g.save(); g.globalAlpha = 1 - sn(t, b, .3); chip(s, x, y, t, a, {px: 24, bg: K.ink, fg: K.mango}); g.restore(); } });
  // teks kiri, tiga gelombang
  const o1 = T('satu', 3) - .15, o2 = T('atau') - .12, o3 = tha - .15;
  line([['Pernah', T('pernah')], ['nampak', T('nampak')]], ML, 300, 76, t, {col: K.ink, out: o1});
  line([['satu', T('satu', 2)], ['design', T('design')]], ML, 392, 76, t, {col: K.ink, out: o1});
  line([['di', T('di', 2)], ['Pinterest…', tp]], ML, 570, 132, t, {col: K.or, fam: F.s, it: true, wt: 400, out: o1});
  line([['satu', T('satu', 3)], ['app', T('app', 2)]], ML, 392, 76, t, {col: K.ink, out: o2});
  line([['di', T('di', 3)], ['Behance…', tbh]], ML, 570, 132, t, {col: K.or, fam: F.s, it: true, wt: 400, out: o2});
  line([['atau', T('atau')], ['satu', T('satu', 4)], ['interface', tif]], ML, 300, 64, t, {col: K.ink, out: o3});
  line([['yang', T('yang', 3)], ['terus', T('terus')], ['buat', T('buat')]], ML, 385, 64, t, {col: K.ink, out: o3});
  line([['kita', T('kita', 4)], ['fikir,', T('fikir')]], ML, 570, 132, t, {col: K.or, fam: F.s, it: true, wt: 400, out: o3});
  // "Ha…": satu kad dipilih, zum keluar dari dinding
  const col = WALL[CHOSEN.c], cd = col.cards[CHOSEN.i];
  if (t > tha - .1) {
    const off = ((wallOff(tha, col.v) % col.len) + col.len) % col.len; let y0 = cd.y - off; if (y0 < -200) y0 += col.len; if (y0 > H) y0 -= col.len;
    const kz = sn(t, tha - .1, .55), ks = sn(t, tsv - .15, .45);
    let x = lerp(X0 + CHOSEN.c * (CW + GAP), 1180, kz), y = lerp(y0, 150, kz), w = lerp(CW, 520, kz), h = lerp(cd.h, 720, kz);
    // "Simpan.": kad mengecil & masuk ke penanda buku
    const bx = 1600, by = 500; x = lerp(x, bx - 40, ks); y = lerp(y, by - 60, ks); w = lerp(w, 80, ks); h = lerp(h, 110, ks);
    if (ks < .98) refCard(x, y, w, h, cd.seed, {type: 1, ring: ks < .2 ? K.or : null});
    if (t > tsv - .2) { icBookmark(bx, by, 300, t, tsv - .2, K.or, K.ink); ripple(bx, by, t, tsv + .25, K.or, 260); }
    if (t > tsv + .3) { chip('DISIMPAN · 001', bx - 130, by + 260, t, tsv + .3, {px: 26, bg: K.ink, fg: K.mango}); }
  }
  bulatPop(1720, 930, 220, t, tha + .05, tsv - .2, {mood: 'cheer', arms: true, armsUp: true, color: 'orange'});
  line([['“Ha…', tha]], ML - 10, 470, 260, t, {col: K.ink, fam: F.s, it: true, wt: 400, out: tsv - .3});
  line([['macam', T('macam')], ['ni', T('ni')], ['yang', T('yang', 4)]], ML, 640, 112, t, {col: K.ink, fam: F.s, it: true, wt: 400, out: tsv - .3});
  line([['aku', T('aku')], ['nak!”', T('nak', 1)]], ML, 770, 112, t, {col: K.or, fam: F.s, it: true, wt: 400, out: tsv - .3});
  slam('Simpan.', ML - 6, 560, 280, t, tsv, {col: K.ink});
  line([['Sebab', T('sebab')], ['itulah', T('itulah')]], ML, 720, 68, t, {col: K.mid, wt: 700});
  line([['referensi.', T('referensi', 2)]], ML, 870, 150, t, {col: K.or, fam: F.s, it: true, wt: 400});
}

// ── 5. TUNJUK ───────────────────────────────────────────────────────────────
const JARGON = ['grid 12 kolum', 'kerning −2%', 'hierarki visual', 'padding 24px', 'border-radius 16', 'sans-serif', 'kontras 4.5:1', 'user flow', 'breakpoint 768', 'z-index', 'affordance', 'white space', 'baseline 8pt', 'UX writing', 'atomic design', 'gestalt'];
function s4(t) {
  ground(K.ink);
  const tt = T('tunjukkan'), ko = tt - .2;
  line([['Kita', T('kita', 5)], ['tak', T('tak')], ['semestinya', T('semestinya')], ['perlu', T('perlu', 2)]], ML, 200, 70, t, {col: K.paper, out: ko});
  line([['pandai', T('pandai')], ['menerangkan', T('menerangkan')], ['design', T('design', 2)]], ML, 292, 70, t, {col: K.paper, out: ko});
  line([['dengan', T('dengan')], ['istilah', T('istilah')], ['teknikal,', T('teknikal'), {fam: F.m, wt: 700, col: K.mango, px: 60, ls: 0}]], ML, 384, 70, t, {col: K.paper, out: ko});
  // ribut istilah teknikal
  const c = knife(60, 1000, 1860, 420, t, tt - .3, K.paper, 5);
  collapse(c, 690, () => { let x = ML, y = 560; JARGON.forEach((s, i) => { const t0 = 23.7 + i * .2; setF(30, 700, 'normal', F.m, false, 2); const w = g.measureText(s).width + 39; if (x + w > 1780) { x = ML; y += 96; }
    chip(s, x, y, t, t0, {px: 30, bg: i % 5 === 2 ? K.ink : K.ink3, fg: i % 5 === 2 ? K.mango : '#B9B1A4'}); if (i % 5 === 2 && t > t0) strokeRR(x, y - 57, w, 57, 28, K.mango, 2); x += w + 20; }); });
  // "Tunjukkan sahaja apa yang kita suka."
  line([['Tunjukkan', tt], ['sahaja', T('sahaja')]], ML, 420, 150, t, {col: K.paper, wt: 900});
  const ex = line([['apa', T('apa', 2)], ['yang', T('yang', 5)], ['kita', T('kita', 6)], ['suka.', T('suka')]], ML, 600, 130, t, {col: K.mango, fam: F.s, it: true, wt: 400});
  if (t > T('suka') - .1) icHeart(ex + 80, 555, 90, t, [T('suka') + .05, T('suka') + .5]);
  // kursor menunjuk satu kad
  const kc = sn(t, tt + .1, .5); if (kc > 0) { refCard(1390, lerp(1100, 500, kc), 330, 420, 17, {type: 0, ring: t > T('suka') ? K.mango : null});
    const kp = sn(t, T('sahaja'), .9), cx = lerp(1900, 1580, kp), cy = lerp(1000, 720, kp), press = tri(t, T('suka'), .3);
    ripple(1585, 722, t, T('suka'), K.mango, 90); icCursor(cx, cy, 64, K.paper, press); icCursor(cx, cy, 0); }
}

// ── 6. BERI ARAH ────────────────────────────────────────────────────────────
function aiCard(t, x, y, w, h) {
  const tl = T('layout'), tst = T('style'), tm = T('menu');
  g.save(); g.shadowColor = 'rgba(25,21,18,.18)'; g.shadowBlur = 40; g.shadowOffsetY = 18; fillRR(x, y, w, h, 34, '#FFFFFF'); g.restore();
  g.save(); rr(x, y, w, h, 34); g.clip();
  g.fillStyle = K.ink; g.fillRect(x, y, w, 96); setF(26, 800, 'normal', F.g); g.fillStyle = K.paper; g.fillText('Ruang Kelas', x + 36, y + 60);
  fillRR(x + 30, y + 126, w - 60, 200, 22, K.or); setF(40, 900, 'normal', F.g, false, -1); g.fillStyle = K.ink; g.fillText('Kuiz Sains', x + 60, y + 200); setF(20, 400, 'normal', F.m); g.fillText('Tahap 3 · 12 soalan', x + 60, y + 240);
  bulat(x + w - 110, y + 316, 150, {mood: 'happy', color: 'mango'});
  const tc = ['#F8A81B', '#12946A', '#8B7BE8', '#F7A8C4'], gw = (w - 60 - 20) / 2;
  for (let i = 0; i < 4; i++) { const tx = x + 30 + (i % 2) * (gw + 20), ty = y + 350 + Math.floor(i / 2) * 150; fillRR(tx, ty, gw, 130, 20, '#F4EFE4'); fillRR(tx + 20, ty + 20, 44, 44, 12, tc[i]); g.fillStyle = '#C9C0B0'; g.fillRect(tx + 20, ty + 82, gw * .6, 12); g.fillRect(tx + 20, ty + 102, gw * .4, 10); }
  // menu: susunan bersepah → tersusun bila "menu disusun"
  const items = ['Utama', 'Modul', 'Prompt', 'Profil'], scr = [2, 0, 3, 1], km = sn(t, tm + .25, .6), ny = y + h - 90;
  g.fillStyle = '#FFFFFF'; g.fillRect(x, ny - 10, w, 100); g.fillStyle = '#E6DED0'; g.fillRect(x, ny - 10, w, 2);
  items.forEach((s, i) => { const xa = x + 30 + scr[i] * (w - 60) / 4 + (i % 2 ? 14 : -10), xb = x + 30 + i * (w - 60) / 4, ya = ny + 30 + (i % 2 ? 16 : -6); const ix = lerp(xa, xb, km), iy = lerp(ya, ny + 30, km);
    fillRR(ix + 18, iy - 18, 36, 26, 8, i === 0 && km > .9 ? K.or : '#C9C0B0'); setF(17, 700, 'normal', F.g); g.fillStyle = K.ink; g.fillText(s, ix + 8, iy + 38); });
  // imbasan AI
  const ks = inv(T('ai') + .1, T('referensi', 3) + .8, t); if (ks > 0 && ks < 1) { const sy = y + h * ks; g.fillStyle = 'rgba(240,83,35,.10)'; g.fillRect(x, y, w, sy - y); g.fillStyle = K.or; g.fillRect(x, sy - 2, w, 4); }
  g.restore();
  // sorotan: layout (grid), style (swatch), menu (bingkai)
  const kl = ph(t, tl + .2, tst - .1), ksw = sn(t, tst + .2, .5), kmn = ph(t, tm + .2, 1e9);
  if (kl > 0) { g.save(); g.globalAlpha = kl; g.strokeStyle = K.or; g.lineWidth = 3; g.setLineDash([12, 10]); for (let i = 0; i <= 2; i++) { const gx = x + 30 + i * (gw + 10) + (i === 2 ? 0 : 0); g.beginPath(); g.moveTo(Math.min(gx, x + w - 30), y + 110); g.lineTo(Math.min(gx, x + w - 30), y + h - 110); g.stroke(); } g.setLineDash([]); strokeRR(x + 20, y + 340, w - 40, 300, 24, K.or, 5); g.restore(); }
  if (ksw > 0) { ['#F05323', '#F8A81B', '#12946A', '#191512'].forEach((c, i) => { const k = sn(t, tst + .2 + i * .08, .4); g.fillStyle = c; g.beginPath(); g.arc(x - 70, y + 200 + i * 92, 34 * back(k), 0, TAU); g.fill(); });
    g.save(); g.globalAlpha = ksw; setF(80, 400, 'normal', F.s, true); g.fillStyle = K.ink; g.fillText('Aa', x - 120, y + 640); g.restore(); }
  if (kmn > 0) { g.save(); g.globalAlpha = kmn; strokeRR(x + 10, ny - 22, w - 20, 108, 20, K.or, 5); g.restore(); }
}
function s5(t) {
  ground(K.paper);
  const X = 1200, Y = 110, Wc = 540, Hc = 800, kc = sn(t, 29.95, .6);
  g.save(); g.translate(0, (1 - kc) * 900); aiCard(t, X, Y, Wc, Hc); g.restore();
  line([['Bila', T('bila')], ['AI', T('ai'), {col: K.or, wt: 900}], ['nampak', T('nampak', 2)], ['referensi,', T('referensi', 3)]], ML, 210, 78, t, {col: K.ink});
  const ae = line([['kita', T('kita', 7)], ['boleh', T('boleh')], ['beri', T('beri')], ['arah,', T('arah')]], ML, 305, 78, t, {col: K.ink});
  arrowR(ae + 40, 280, 160, t, T('arah') + .2, K.or, 7);
  const tl = T('layout'), tst = T('style'), tm = T('menu');
  rule(ML, 1080, 400, t, T('saya') - .3, K.rule, 2);
  const q = (items, y, n, t0, key) => { setF(18, 700, 'normal', F.m, false, 3); if (t > t0 - .1) { g.globalAlpha = sn(t, t0 - .1, .3); g.fillStyle = K.mid; g.fillText('ARAH 0' + n, ML, y - 92); g.globalAlpha = 1; }
    const e = line(items, ML, y, 80, t, {col: K.ink, fam: F.s, it: true, wt: 400}); return e; };
  const e1 = q([['“Saya', T('saya')], ['suka', T('suka', 2)], ['layout', tl, {col: K.or}], ['ini.', T('ini')]], 545, 1, T('saya'));
  const e2 = q([['Saya', T('saya', 2)], ['mahu', T('mahu')], ['style', tst, {col: K.or}], ['seperti', T('seperti')], ['ini.', T('ini', 2)]], 700, 2, T('saya', 2));
  const e3 = q([['Saya', T('saya', 3)], ['suka', T('suka', 3)], ['cara', T('cara')], ['menu', tm, {col: K.or}], ['disusun.”', T('disusun')]], 855, 3, T('saya', 3));
  thread(Math.min(e1, 1060) + 20, 520, X + 20, Y + 480, sn(t, tl + .25, .55) * (1 - sn(t, tst - .1, .3)), K.or);
  thread(Math.min(e2, 1060) + 20, 675, X - 110, Y + 330, sn(t, tst + .25, .55) * (1 - sn(t, tm - .1, .3)), K.or);
  thread(Math.min(e3, 1060) + 20, 830, X + 40, Y + Hc - 50, sn(t, tm + .25, .55), K.or);
}

// ── 7. BUKAN INI ────────────────────────────────────────────────────────────
function s6(t) {
  ground('#E7E1D4');
  line([['Daripada', T('daripada')], ['hanya', T('hanya')], ['berkata…', T('berkata')]], ML, 220, 64, t, {col: K.mid, wt: 700});
  const tc = T('cantik'), c = knife(90, 470, 1360, 470, t, tc + .5, K.ink, 6);
  collapse(c, 470, () => {
    const kb = sn(t, T('daripada') + .3, .5); g.save(); g.beginPath(); g.rect(ML, 340, 1180 * kb, 260); g.clip();
    fillRR(ML, 380, 1160, 170, 28, '#FFFFFF'); strokeRR(ML, 380, 1160, 170, 28, K.ink, 3);
    setF(18, 700, 'normal', F.m, false, 3); g.fillStyle = K.grey; g.fillText('PROMPT', ML + 34, 420);
    const ex = line([['“AI,', T('ai', 2)], ['buatkan', T('buatkan')], ['app', T('app', 3)], ['yang', T('yang', 6)], ['cantik.”', tc]], ML + 34, 500, 52, t, {fam: F.m, wt: 400, col: K.ink, ls: 0, sp: .35});
    const typed = [['“AI,', T('ai', 2)], ['buatkan', T('buatkan')], ['app', T('app', 3)], ['yang', T('yang', 6)], ['cantik.”', tc]].filter(([, a]) => t >= a + .1).map(([w]) => w).join(' ');
    if (t > T('daripada') + .6 && Math.floor(t * 2.5) % 2 === 0) { setF(52, 400, 'normal', F.m, false, 0); const tw_ = typed ? typed.split(' ') : [], cxp = ML + 34 + tw_.reduce((a, w) => a + g.measureText(w).width, 0) + Math.max(0, tw_.length - 1) * 52 * .35 + (tw_.length ? 10 : 0); g.fillStyle = K.or; g.fillRect(Math.min(cxp, ML + 1120), 458, 5, 56); }
    if (t > tc + .3) { g.strokeStyle = K.or; g.lineWidth = 4; g.beginPath(); const x0 = ex - 300; for (let i = 0; i <= 30; i++) { const xx = x0 + i * 10; g.lineTo(xx, 522 + Math.sin(i * 1.6) * 5); } g.globalAlpha = sn(t, tc + .3, .3); g.stroke(); g.globalAlpha = 1; }
    g.restore();
    // keputusan kabur: kad kelabu tanpa arah
    for (let i = 0; i < 3; i++) { const k = sn(t, tc + .1 + i * .12, .45); if (k <= 0) continue; const x = ML + i * 300, wob = Math.sin(t * 4 + i) * 4;
      g.save(); g.globalAlpha = k; fillRR(x, 640 + wob, 270, 270, 22, '#D2CBBD'); setF(150, 400, 'normal', F.s, true); g.fillStyle = '#B4AC9C'; g.fillText('?', x + 105, 830 + wob); g.restore(); }
  });
  bulatPop(1560, 900, 280, t, T('buatkan'), 1e9, {mood: t > tc + .2 ? 'oops' : 'thinking', color: 'orange', ph: 1});
}

// ── 8. JELAS ────────────────────────────────────────────────────────────────
function s7(t) {
  ground(K.ink);
  line([['Kita', T('kita', 8)], ['memberikan', T('memberikan')], ['AI', T('ai', 3), {col: K.mango}]], ML, 210, 74, t, {col: K.paper});
  line([['gambaran', T('gambaran')], ['yang', T('yang', 7)], ['lebih', T('lebih')]], ML, 305, 74, t, {col: K.grey});
  const tj = T('jelas'), px = fit('JELAS', 1500, 900, 'expanded', F.g, false, 430), kf = sn(t, tj - .15, 1.1);
  if (t > tj - .25) { g.save(); g.filter = `blur(${(1 - kf) * 38}px)`; g.globalAlpha = sn(t, tj - .25, .3); setF(px, 900, 'expanded', F.g, false, -px * .03); g.fillStyle = K.paper; g.fillText('JELAS', ML - 6, 700); g.restore(); }
  // kurungan fokus menutup ke perkataan
  const kb = sn(t, tj - .1, .9); if (kb > 0) { const w0 = tw('JELAS', px, 900, 'expanded', F.g, false, -px * .03); const x0 = lerp(30, ML - 40, kb), x1 = lerp(1890, ML + w0 + 20, kb), y0 = lerp(80, 700 - px * .78, kb), y1 = lerp(1000, 735, kb);
    g.save(); g.strokeStyle = K.mango; g.lineWidth = 6; const c = 60; for (const [x, y, sx, sy] of [[x0, y0, 1, 1], [x1, y0, -1, 1], [x0, y1, 1, -1], [x1, y1, -1, -1]]) { g.beginPath(); g.moveTo(x + sx * c, y); g.lineTo(x, y); g.lineTo(x, y + sy * c); g.stroke(); } g.restore(); }
  line([['tentang', T('tentang')], ['apa', T('apa', 3)], ['yang', T('yang', 8)], ['kita', T('kita', 9)], ['mahukan.', T('mahukan')]], ML, 885, 92, t, {col: K.mango, fam: F.s, it: true, wt: 400});
}

// ── 9. FUNDAMENTAL ──────────────────────────────────────────────────────────
function s8(t) {
  ground(K.or);
  line([['Dan', T('dan', 2)], ['ini', T('ini', 3)], ['sebenarnya', T('sebenarnya')], ['sebahagian', T('sebahagian')], ['daripada', T('daripada', 2)]], ML, 220, 62, t, {col: K.ink});
  const tf = T('fundamental'), px = fit('FUNDAMENTAL', 1640, 900, 'condensed');
  slam('FUNDAMENTAL', ML, 590, px, t, tf, {st: 'condensed', col: K.ink, stag: .025});
  // asas: bata tersusun dari kiri (fundamental = asas)
  const bw = 1640 / 8; for (let r = 0; r < 2; r++) for (let i = 0; i < 8 + r; i++) { const k = sn(t, tf + .35 + (r * 8 + i) * .04, .3); if (k <= 0) continue; const x = ML + i * bw - r * bw / 2, y = 650 + r * 54; if (x + bw < ML || x > ML + 1640) continue;
    g.save(); g.beginPath(); g.rect(ML, 620, 1640, 140); g.clip(); g.fillStyle = r ? K.paper : K.ink; g.fillRect(x + 3, y + (1 - k) * -80, bw - 6, 48); g.restore(); }
  line([['bina', T('bina', 3)], ['app.', T('app', 4)]], ML, 905, 150, t, {col: K.paper, fam: F.s, it: true, wt: 400});
}

// ── 10. BELAJAR ×4 ──────────────────────────────────────────────────────────
function s9(t) {
  ground(K.paper);
  const tb = T('belajar'), V = [['mencari', T('mencari')], ['memilih', T('memilih')], ['memahami', T('memahami')], ['membina', T('membina')]];
  const bw = rise('Belajar', ML - 6, 400, 230, t, tb, {wt: 900, col: K.ink});
  rise('kemudian', ML + bw + 40, 400, 96, t, T('kemudian'), {fam: F.s, it: true, wt: 400, col: K.mid, out: T('membina') + .6});
  V.forEach(([s, a], i) => rise(s + (i < 3 ? ',' : '.'), ML - 4, 690, 220, t, a, {wt: 900, col: K.or, out: V[i + 1] ? V[i + 1][1] - .12 : null, d: .38}));
  // penunjuk langkah 1–4
  V.forEach(([, a], i) => { const k = sn(t, a, .35); g.fillStyle = K.rule; g.fillRect(ML + i * 150, 840, 130, 10); g.fillStyle = K.ink; g.fillRect(ML + i * 150, 840, 130 * k, 10); });
  setF(18, 700, 'normal', F.m, false, 3); g.fillStyle = K.mid; const cur = V.filter(([, a]) => t >= a - .05).length; if (cur) g.fillText(`LANGKAH ${cur}/4`, ML, 900);
  const cx = 1520, base = 860;
  // cari: Si Bulat dengan kanta yang mengimbas
  const k1 = ph(t, V[0][1] - .1, V[1][1] - .15); if (k1 > 0) { g.save(); g.globalAlpha = k1; bulat(cx, base, 300, {mood: 'look', look: Math.sin(t * 3) * 14}); const a = (t - V[0][1]) * 3.2; icMagnifier(cx + Math.cos(a) * 120, 480 + Math.sin(a) * 50, 230, K.ink, 16); g.restore(); }
  // pilih: tiga pilihan, satu dipilih
  const k2 = ph(t, V[1][1] - .1, V[2][1] - .15); if (k2 > 0) { const ks = sn(t, V[1][1] + .35, .4); g.save(); g.globalAlpha = k2;
    [['purple', 1340], ['green', 1520], ['mango', 1700]].forEach(([c, x], i) => { const sel = i === 1; g.save(); g.globalAlpha *= sel ? 1 : 1 - ks * .65; bulat(x, base - (sel ? ks * 40 : 0), 160 * (sel ? 1 + ks * .15 : 1), {mood: sel && ks > .5 ? 'happy' : 'calm', color: c}); g.restore(); });
    if (ks > 0) { g.strokeStyle = K.or; g.lineWidth = 6; g.beginPath(); g.arc(1520, base - 130 - ks * 40, 125 * back(ks), 0, TAU); g.stroke(); g.fillStyle = K.or; g.beginPath(); g.arc(1610, base - 230, 34 * back(ks), 0, TAU); g.fill(); icCheck(1610, base - 230, 44, sn(t, V[1][1] + .55, .3), K.paper, 7); }
    g.restore(); }
  // fahami: berfikir → faham (kilauan)
  const k3 = ph(t, V[2][1] - .1, V[3][1] - .15); if (k3 > 0) { const ok = t > V[2][1] + .7; g.save(); g.globalAlpha = k3; bulat(cx, base, 300, {mood: ok ? 'happy' : 'thinking', color: 'green'});
    if (ok) [[1340, 470, 46], [1700, 430, 34], [1650, 600, 26]].forEach(([x, y, s], i) => icSpark(x, y, s, back(inv(V[2][1] + .7 + i * .1, V[2][1] + 1.1 + i * .1, t)), K.mango)); g.restore(); }
  // bina: blok jatuh bertindan, Si Bulat mendarat di atas
  const k4 = sn(t, V[3][1] - .1, .3); if (k4 > 0) { const cols = ['#191512', '#F8A81B', '#12946A']; cols.forEach((c, i) => { const k = eo(inv(V[3][1] - .05 + i * .14, V[3][1] + .2 + i * .14, t)); if (k <= 0) return; const y = lerp(-200, base - 70 - i * 80, k); fillRR(cx - 150 + i * 14, y, 300 - i * 28, 70, 10, c); });
    const kl = inv(V[3][1] + .45, V[3][1] + .75, t); if (kl > 0) { const sq = 1 + Math.sin(cl(kl) * Math.PI) * .18; bulat(cx, lerp(-100, base - 230, eo(kl)), 170, {mood: 'cheer', color: 'orange', sy: kl < 1 ? 1 : sq, sx: kl < 1 ? 1 : 1 / sq}); } }
}

// ── 11. EDUCATOR ────────────────────────────────────────────────────────────
function s10(t) {
  ground(K.ink);
  line([['Sebab', T('sebab', 2)], ['itu', T('itu')], ['untuk', T('untuk')]], ML, 210, 64, t, {col: K.grey, wt: 700});
  slam('educator', ML - 6, 450, 240, t, T('educator'), {col: K.mango});
  line([['yang', T('yang', 9)], ['baru', T('baru')], ['nak', T('nak', 2)], ['mula…', T('mula')]], ML, 580, 96, t, {col: K.paper, fam: F.s, it: true, wt: 400});
  line([['anda', T('anda')], ['bukan', T('bukan'), {col: K.mango}], ['hanya', T('hanya', 2), {col: K.mango}], ['perlu', T('perlu', 3)], ['belajar', T('belajar', 5)]], ML, 760, 62, t, {col: K.paper});
  const tp = T('prompt'), k = sn(t, tp - .1, .4);
  if (k > 0) { setF(64, 700, 'normal', F.m); const w = g.measureText('prompt.').width + 70; g.save(); g.beginPath(); g.rect(ML, 800, w * k, 130); g.clip(); fillRR(ML, 810, w, 110, 22, K.paper); g.fillStyle = K.ink; g.fillText('prompt.', ML + 35, 888); g.restore();
    // "bukan hanya": prompt hanya satu kepingan kecil
    const kz = sn(t, tp + .45, .5); for (let i = 0; i < 5; i++) { const kk = sn(t, tp + .45 + i * .07, .4); if (kk <= 0) continue; g.save(); g.globalAlpha = kk; strokeRR(ML + w + 30 + i * 150, 810, 130, 110, 22, K.ink3, 3); setF(16, 700, 'normal', F.m, false, 2); g.fillStyle = K.mid; g.fillText('0' + (i + 2), ML + w + 52 + i * 150, 850); g.restore(); }
    void kz; }
}

// ── 12. LALUAN ──────────────────────────────────────────────────────────────
const MODS = [['Mencari', 'referensi'], ['Menyusun', 'idea'], ['App', 'Blueprint'], ['Bekerja', 'dengan AI'], ['Test', ''], ['Publish', '']];
function modIcon(i, cx, cy, s, t, t0, dark) {
  const lt = t - t0, fg = dark ? K.paper : K.ink, ac = dark ? K.mango : K.or;
  if (i === 0) icBookmark(cx, cy, s, t, t0 + .1, ac, fg);
  else if (i === 1) { const cs = ['#F8A81B', '#F7A8C4', '#12946A']; cs.forEach((c, j) => { const k = sn(t, t0 + .35 + j * .1, .45), r0 = [[-50, -30, -.5], [40, 20, .4], [-10, 50, -.2]][j]; g.save(); g.translate(cx + lerp(r0[0], -s * .3 + j * s * .3, k), cy + lerp(r0[1], 0, k)); g.rotate(lerp(r0[2], 0, k)); fillRR(-s * .14, -s * .14, s * .28, s * .28, 6, c); g.restore(); }); }
  else if (i === 2) { const p = inv(t0 + .15, t0 + 1.2, t), sq = s * .9; g.save(); g.translate(cx - sq / 2, cy - sq / 2); fillRR(0, 0, sq, sq, 10, '#2F5BFF'); g.strokeStyle = 'rgba(255,255,255,.25)'; g.lineWidth = 1; for (let k = 1; k < 6; k++) { g.beginPath(); g.moveTo(k * sq / 6, 0); g.lineTo(k * sq / 6, sq); g.moveTo(0, k * sq / 6); g.lineTo(sq, k * sq / 6); g.stroke(); }
    g.strokeStyle = '#FFFFFF'; g.lineWidth = 3; const segs = [[.15, .2, .85, .2], [.15, .2, .15, .8], [.15, .45, .85, .45], [.5, .45, .5, .8], [.15, .8, .85, .8]]; segs.forEach((sg, j) => { const q = cl(p * segs.length - j); if (q <= 0) return; g.beginPath(); g.moveTo(sg[0] * sq, sg[1] * sq); g.lineTo(lerp(sg[0], sg[2], q) * sq, lerp(sg[1], sg[3], q) * sq); g.stroke(); }); g.restore(); }
  else if (i === 3) { fillRR(cx - s * .45, cy - s * .32, s * .8, s * .55, 18, dark ? K.ink3 : '#FFFFFF'); strokeRR(cx - s * .45, cy - s * .32, s * .8, s * .55, 18, fg, 3); for (let j = 0; j < 3; j++) { const b = Math.max(0, Math.sin((lt * 6) - j * .9)); g.fillStyle = fg; g.beginPath(); g.arc(cx - s * .2 + j * s * .16, cy - s * .05 - b * 6, 7, 0, TAU); g.fill(); } icSpark(cx + s * .42, cy - s * .38, s * .22 * (1 + Math.sin(lt * 5) * .15), sn(t, t0 + .3, .4), ac); }
  else if (i === 4) { const p = inv(t0 + .1, t0 + .7, t); g.save(); g.strokeStyle = dark ? K.ink3 : K.rule; g.lineWidth = 10; g.beginPath(); g.arc(cx, cy, s * .4, 0, TAU); g.stroke(); g.strokeStyle = ac; g.lineCap = 'round'; g.beginPath(); g.arc(cx, cy, s * .4, -Math.PI / 2, -Math.PI / 2 + TAU * p); g.stroke(); g.restore(); icCheck(cx, cy + 4, s * .55, sn(t, t0 + .65, .3), fg, 10); }
  else { const k = sn(t, t0 + .1, .6), y = cy + s * .3 - k * s * .5; g.save(); g.globalAlpha = .5; g.fillStyle = ac; g.fillRect(cx - 4, y + s * .2, 8, k * s * .4); g.restore(); g.fillStyle = fg; g.beginPath(); g.moveTo(cx, y - s * .3); g.lineTo(cx + s * .25, y); g.lineTo(cx + s * .1, y); g.lineTo(cx + s * .1, y + s * .22); g.lineTo(cx - s * .1, y + s * .22); g.lineTo(cx - s * .1, y); g.lineTo(cx - s * .25, y); g.closePath(); g.fill();
    g.fillStyle = dark ? K.ink3 : '#E7E1D4'; [[-38, 0, 30], [0, -12, 38], [38, 0, 30]].forEach(([dx, dy, r]) => { g.beginPath(); g.arc(cx + dx, cy + s * .45 + dy, r, 0, TAU); g.fill(); }); }
}
function s11(t) {
  ground(K.paper);
  const tA = [T('mencari', 2), T('menyusun'), T('membina', 2), T('bekerja'), T('test'), T('publish')], tS = T('semua');
  line([['Anda', T('anda', 2)], ['perlu', T('perlu', 4)], ['belajar', T('belajar', 6)], ['bagaimana', T('bagaimana')], ['untuk…', T('untuk', 2)]], ML, 190, 64, t, {col: K.ink, out: tS - .15});
  line([['Semua', tS], ['ini', T('ini', 4)], ['boleh', T('boleh', 2)], ['dipelajari', T('dipelajari')]], ML, 190, 64, t, {col: K.ink});
  line([['langkah', T('langkah')], ['demi', T('demi')], ['langkah.', T('langkah', 2)]], ML, 320, 112, t, {col: K.or, fam: F.s, it: true, wt: 400});
  const cw = 1640 / 6, CW = cw - 20;
  const hops = [T('langkah') - .05, T('langkah') + .22, T('demi') - .05, T('langkah', 2) - .05, T('langkah', 2) + .2, T('langkah', 2) + .42], tIn = tS + .5;
  let litN = -1; if (t > tIn) hops.forEach((h, i) => { if (t >= h + (i ? .24 : 0)) litN = Math.max(litN, i); }); if (t > tIn) litN = Math.max(0, litN);
  const cur = tA.filter(a => t >= a - .1).length - 1;
  // landasan kemajuan
  const tx = cur >= 0 ? ML + cur * cw + CW / 2 : ML, kTr = 1 - sn(t, tS, .4);
  if (cur >= 0 && kTr > 0) { g.save(); g.globalAlpha = kTr; g.fillStyle = K.rule; g.fillRect(ML, 838, 1640 - 20, 4); g.fillStyle = K.ink; g.fillRect(ML, 838, tx - ML, 4); g.fillStyle = K.or; g.beginPath(); g.arc(tx, 840, 12, 0, TAU); g.fill(); g.restore(); }
  MODS.forEach(([a, b], i) => {
    const t0 = tA[i], k = sn(t, t0 - .12, .42); if (k <= 0) return;
    const kst = sn(t, tS + i * .07, .55), x = ML + i * cw, top = lerp(380, 690 - i * 62, kst), bot = 800, h = bot - top, dark = i === cur && kst < .5 && t < tS;
    g.save(); g.beginPath(); g.rect(x - 4, bot - (bot - top + 8) * k, CW + 8, (bot - top + 8) * k + 4); g.clip();
    const lit = litN >= i; fillRR(x, top, CW, h, 22, dark ? K.ink : lit ? K.or : '#FFFFFF'); if (!dark) strokeRR(x, top, CW, h, 22, K.ink, 2.5);
    setF(lerp(72, 54, kst), 900, 'normal', F.g, false, -2); g.fillStyle = dark ? K.mango : lit ? K.ink : K.or; g.fillText('0' + (i + 1), x + 22, top + lerp(80, 64, kst));
    const ka = 1 - kst; if (ka > 0) { g.save(); g.globalAlpha = ka; modIcon(i, x + CW / 2, top + 210, 120, t, t0, dark); setF(30, 800, 'normal', F.g, false, -.5); g.fillStyle = dark ? K.paper : K.ink; g.fillText(a, x + 22, bot - (b ? 62 : 30)); if (b) g.fillText(b, x + 22, bot - 26); g.restore(); }
    g.restore();
  });
  // Si Bulat naik tangga, satu anak tangga setiap kali
  if (t > tIn) { let step = 0; for (let i = 0; i < hops.length; i++) if (t > hops[i]) step = i;
    const topOf = i => 690 - i * 62, cxOf = i => ML + i * cw + CW / 2; let x = cxOf(0), y = topOf(0), hopK = 0;
    const hi = hops.findIndex((h, i) => t >= h && t < h + .24 && i > 0);
    if (hi > 0) { const p = (t - hops[hi]) / .24; x = lerp(cxOf(hi - 1), cxOf(hi), p); y = lerp(topOf(hi - 1), topOf(hi), p) - Math.sin(p * Math.PI) * 90; hopK = p; }
    else { const s = t < hops[1] ? 0 : Math.min(5, hops.filter(h => t >= h + .24).length - 0); const ss = Math.max(0, Math.min(5, hops.filter((h, i) => i > 0 && t >= h + .24).length)); x = cxOf(ss); y = topOf(ss); void s; }
    const land = hops.some((h, i) => i > 0 && tri(t, h + .24, .2) > 0) ? Math.max(...hops.map(h => tri(t, h + .24, .2))) : 0;
    bulat(x, y, 130 * back(inv(tIn, tIn + .4, t)), {mood: t > hops[5] + .3 ? 'cheer' : 'happy', color: 'orange', sx: 1 + land * .18, sy: (1 - land * .18) * (hopK ? 1.06 : 1)});
  }
}

// ── 13. PANDUAN ─────────────────────────────────────────────────────────────
function phone(t, x, y, w, h, t0) {
  fillRR(x - 14, y - 14, w + 28, h + 28, 70, K.ink3); fillRR(x, y, w, h, 58, K.paper);
  g.save(); rr(x, y, w, h, 58); g.clip();
  setF(18, 700, 'normal', F.g); g.fillStyle = K.ink; g.fillText('9:41', x + 44, y + 46); fillRR(x + w / 2 - 60, y + 18, 120, 34, 17, K.ink);
  bulat(x + 82, y + 175, 92, {mood: (t - t0) % 3 < .12 ? 'blink' : 'happy', color: 'orange'});
  setF(30, 900, 'normal', F.g, false, -.5); g.fillStyle = K.ink; g.fillText('Panduan', x + 150, y + 128); g.fillText('Bina App', x + 150, y + 162);
  setF(14, 700, 'normal', F.m, false, 1); g.fillStyle = K.mid; g.fillText('PEMULA · EDUCATOR', x + 150, y + 190);
  const kp = sn(t, t0 + 1.2, 1.2); fillRR(x + 30, y + 215, w - 60, 14, 7, '#E7E1D4'); fillRR(x + 30, y + 215, (w - 60) * .34 * kp, 14, 7, K.or);
  MODS.forEach(([a, b], i) => { const k = sn(t, t0 + .4 + i * .12, .45); if (k <= 0) return; const yy = y + 252 + i * 92 + (1 - k) * 60;
    g.save(); g.globalAlpha = k; fillRR(x + 26, yy, w - 52, 78, 18, '#FFFFFF'); fillRR(x + 42, yy + 15, 48, 48, 12, i < 2 ? K.or : '#EFE8DA');
    if (i < 2) icCheck(x + 66, yy + 40, 30, sn(t, t0 + 1 + i * .2, .3), K.paper, 5); else { setF(18, 900, 'normal', F.g); g.fillStyle = K.mid; g.fillText('0' + (i + 1), x + 54, yy + 46); }
    setF(21, 800, 'normal', F.g); g.fillStyle = K.ink; g.fillText((a + ' ' + b).trim(), x + 108, yy + 47); g.restore(); });
  g.restore();
}
function s12(t) {
  ground(K.ink);
  line([['Dan', T('dan', 4)], ['itulah', T('itulah', 2)], ['tujuan', T('tujuan')], ['kami', T('kami')], ['membina', T('membina', 3)]], ML, 200, 60, t, {col: K.grey, wt: 700});
  line([['app', T('app', 6)], ['panduan', T('panduan'), {col: K.mango}]], ML, 390, 140, t, {col: K.paper, wt: 900});
  line([['bina', T('bina', 4)], ['app', T('app', 7)]], ML, 540, 140, t, {col: K.paper, wt: 900});
  rise('untuk', ML, 660, 56, t, T('untuk', 3), {fam: F.s, it: true, wt: 400, col: K.grey});
  const w1 = chip('pemula', ML, 820, t, T('pemula'), {px: 64, fam: F.g, wt: 900, bg: K.or, fg: K.ink, ls: -1});
  rise('&', ML + w1 + 22, 790, 60, t, T('dan', 5), {fam: F.s, it: true, wt: 400, col: K.paper});
  chip('educator', ML + w1 + 80, 820, t, T('educator', 2), {px: 64, fam: F.g, wt: 900, bg: K.mango, fg: K.ink, ls: -1});
  const t0 = T('membina', 3) - .3, kp = sn(t, t0, .7);
  if (kp > 0) { g.save(); g.translate(0, (1 - kp) * 1000); g.rotate((1 - kp) * .08); phone(t, 1300, 120, 430, 810, t0); g.restore(); }
}

// ── 14. DARI MANA? → TAHU ───────────────────────────────────────────────────
const ARR = (() => { const r = R(99), a = []; for (let i = 0; i < 18; i++) a.push({x: 1450 + (i % 6) * 72 + r() * 30, y: 300 + Math.floor(i / 6) * 170 + r() * 40, ph: r() * 10, sp: .6 + r() * 1.6}); return a; })();
function s13(t) {
  ground(K.paper);
  const tsb = T('sebaliknya'), tq = T('aku', 2);
  line([['Supaya', T('supaya')], ['anda', T('anda', 3)], ['tak', T('tak', 2)], ['lagi', T('lagi')], ['bermula', T('bermula')], ['dengan…', T('dengan', 3)]], ML, 200, 60, t, {col: K.mid, wt: 700, out: tsb - .2});
  rise('Sebaliknya…', ML, 200, 60, t, tsb, {col: K.mid, wt: 700});
  // tanda soal gergasi di belakang
  if (t < tsb + .2) { g.save(); g.globalAlpha = .13 * sn(t, tq, .6) * (1 - sn(t, tsb - .3, .3)); setF(640, 400, 'normal', F.s, true); g.fillStyle = K.or; g.translate(1520, 860); g.rotate(Math.sin(t * 1.4) * .08); g.fillText('?', -150, 0); g.restore(); }
  const c = knife(80, 500, 1200, 500, t, tsb - .35, K.ink, 6);
  collapse(c, 500, () => {
    line([['“Aku', tq], ['nak', T('nak', 3)], ['buat', T('buat', 2)], ['app…', T('app', 8)]], ML, 430, 124, t, {col: K.ink, fam: F.s, it: true, wt: 400});
    line([['tapi', T('tapi', 2)], ['nak', T('nak', 4)], ['mula', T('mula', 2)], ['dari', T('dari')], ['mana?”', T('mana'), {col: K.or}]], ML, 585, 124, t, {col: K.ink, fam: F.s, it: true, wt: 400});
  });
  // anak panah: berpusing tanpa arah → sejajar ke kanan bila "tahu"
  const tt = T('tahu', 2);
  ARR.forEach((a, i) => { const k = sn(t, tq + i * .04, .4); if (k <= 0) return; const dist = (a.x - 1450) / 420, ka = sn(t, tt - .2 + dist * .35, .45);
    const ang = lerp(Math.sin(t * a.sp + a.ph) * 3.2 + a.ph, 0, ka), march = ka * (Math.sin((t - tt) * 6 + dist * 3) * .5 + .5) * 18;
    g.save(); g.translate(a.x + Math.max(0, march) * ka, a.y); g.rotate(ang); g.scale(k, k); g.strokeStyle = ka > .5 ? K.or : K.ink; g.lineWidth = 6; g.lineCap = 'round'; g.lineJoin = 'round';
    g.beginPath(); g.moveTo(-30, 0); g.lineTo(30, 0); g.moveTo(14, -16); g.lineTo(30, 0); g.lineTo(14, 16); g.stroke(); g.restore(); });
  bulatPop(1130, 930, 170, t, tq - .2, 1e9, {mood: tt => tt > T('tahu', 2) ? 'happy' : 'thinking', color: 'orange', ph: 2});
  rise('anda', ML, 430, 130, t, T('anda', 4), {fam: F.s, it: true, wt: 400, col: K.ink});
  slam('TAHU', ML - 8, 735, 360, t, tt, {st: 'expanded', col: K.or, stag: .05});
  line([['apa', T('apa', 4)], ['yang', T('yang', 10)], ['perlu', T('perlu', 5)], ['dibuat.', T('dibuat')]], ML, 885, 96, t, {col: K.ink, fam: F.s, it: true, wt: 400});
}

// ── 15. BINA (penutup) ──────────────────────────────────────────────────────
function s14(t) {
  ground(K.ink);
  const tB = LAST(5).a, tb = LAST(4).a, tB2 = LAST(3).a, tu = LAST(2).a, tl = LAST(1).a;
  const PX = Math.min(210, Math.floor(210 * 1600 / (tw('Bina', 210, 900, 'normal', F.g, false, LS(210)) + tw('untuk', 210, 400, 'normal', F.s, true, LS(210)) + tw('belajar.', 210, 900, 'normal', F.g, false, LS(210)) + 210 * .5)));
  const up = sn(t, 91.5, .6) * -150, ce = sn(t, 94.15, .45);
  collapse(ce, 540, () => {
    g.save(); g.translate(0, up);
    const w1 = rise('Belajar', ML - 6, 420, PX, t, tB, {wt: 900, col: K.paper}), sp = PX * .25;
    rise('bina.', ML + w1 + sp, 420, PX, t, tb, {wt: 900, col: K.mango});
    // kiasmus: "bina" turun ke depan baris 2, "belajar" ke hujung
    const kb = sn(t, tB2 - .15, .5), ku = sn(t, tu - .1, .45), kl = sn(t, tl - .15, .55);
    setF(PX, 900, 'normal', F.g, false, LS(PX)); const wB = g.measureText('Bina').width;
    if (kb > 0) { g.fillStyle = K.mango; g.fillText('Bina', lerp(ML + w1 + sp, ML - 6, kb), lerp(420, 650, kb)); }
    const wu = rise('untuk', ML + wB + sp, 650, PX, t, tu, {fam: F.s, it: true, wt: 400, col: K.paper});
    if (kl > 0) { setF(PX, 900, 'normal', F.g, false, LS(PX)); g.fillStyle = K.paper; g.fillText('belajar.', lerp(ML - 6, ML + wB + sp + wu + sp, kl), lerp(420, 650, kl) + Math.sin(kl * Math.PI) * 60); }
    g.restore();
    const kt = sn(t, 91.9, .5); if (kt > 0) { rule(ML, 1780, 720, t, 91.9, K.ink3, 2); rise('app panduan bina app · untuk pemula & educator', ML, 790, 30, t, 92.0, {fam: F.m, wt: 700, col: K.grey, ls: 1}); }
    bulatPop(1580, 930, 300, t, 91.6, 1e9, {mood: 'cheer', arms: true, armsUp: true, color: 'orange'});
  });
  if (t > 94.15) { const k = back(inv(94.35, 94.7, t)); g.fillStyle = K.mango; g.beginPath(); g.arc(W / 2, 540, 14 * k, 0, TAU); g.fill(); }
}

// ── susunan babak & peralihan ───────────────────────────────────────────────
const SC = [
  [0, s0, 'PERKARA', 1], [4.25, s1, 'TAHU DULU', 0], [8.38, s2, 'REFERENSI', 0], [11.4, s3, 'CARI · SIMPAN', 0], [23.0, s4, 'TUNJUK', 1],
  [29.9, s5, 'BERI ARAH', 0], [39.65, s6, 'BUKAN INI', 0], [43.7, s7, 'JELAS', 1], [48.45, s8, 'FUNDAMENTAL', 0], [52.42, s9, 'BELAJAR ×4', 0],
  [58.25, s10, 'EDUCATOR', 1], [63.0, s11, 'LALUAN', 0], [75.3, s12, 'PANDUAN', 1], [80.26, s13, 'DARI MANA?', 0], [88.62, s14, 'BINA', 1],
];
const TRK = {4.25: 'wipe', 8.38: 'slats', 11.4: 'iris', 23.0: 'push', 29.9: 'slats', 39.65: 'wipe', 43.7: 'iris', 48.45: 'push', 52.42: 'slats', 58.25: 'wipe', 63.0: 'iris', 75.3: 'push', 80.26: 'slats', 88.62: 'iris'};
const TD = .55;
