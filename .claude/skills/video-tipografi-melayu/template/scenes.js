// Babak permulaan. Ganti dengan babak anda — rujuk projects/gemi-referensi-remake/scenes.js untuk contoh lengkap.
// Indeks perkataan: lihat cetakan words.mjs (indeks:perkataan@masa).
const w = i => WORDS[i].a, we = i => WORDS[i].b, S = seg;
const N = WORDS.length;

// 01 — ayat pertama: kata demi kata + SLAM kata terakhir
function s0(t) {
  const end = Math.min(N - 1, 6), out = we(end) + .6;
  wordsLine(S(0, end - 1), ML, 300, t, {size: 96, wt: 900, out});
  slam(WORDS[end].w.replace(/[.,!?…]/g, '').toUpperCase(), ML - 8, 700, t, w(end) - .05, {size: 300, col: K.or, echo: true, out});
  bulatShadow(1560, 930, 200 * cl((t - 1) / .5)); bulatPop(1560, 930, 200, t, 1, out, {mood: 'happy', color: 'orange'});
}
// 02 — ayat semasa sahaja, besar, kata demi kata (titik mula yang selamat; ganti dengan babak sebenar)
function s1(t) {
  const ss = sentences(), cur = ss.find(x => t >= x[0].a - .35 && t < x[x.length - 1].b + .5) || [];
  if (!cur.length) return; const i0 = WORDS.indexOf(cur[0]), i1 = WORDS.indexOf(cur[cur.length - 1]);
  wordsLine(S(i0, i1), ML, 330, t, {size: 84, wt: 900, maxW: 1500, lh: 100, out: we(i1) + .25});
}
SCENES = [[0, s0, 'BUKA'], [WORDS[Math.min(N - 1, 7)].a - .35, s1, 'ISI']];
TR = {[SCENES[1][0]]: 'wipe'};
