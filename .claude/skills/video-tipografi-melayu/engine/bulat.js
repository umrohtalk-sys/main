// ───────── maskot Si Bulat (port daripada js/mascot.js app no-code; dilukis terus dalam canvas) ─────────
const BUL_PAL = {orange: ['#F05323', '#5E1B08'], mango: ['#F8A81B', '#7A4A00'], green: ['#12946A', '#06412E'], purple: ['#8B7BE8', '#2E2470'], pink: ['#F7A8C4', '#7E2E4E'], cream: ['#F1EAD8', '#4A4136'], charcoal: ['#191512', '#FAF6EE']};
const BUL_BODY = new Path2D('M104 12 C156 6 192 50 186 100 C180 152 146 190 96 188 C46 186 10 148 12 96 C14 46 52 18 104 12 Z');
const BUL_FACE = {
  calm: ['M62 88 Q76 72 90 88', 'M110 88 Q124 72 138 88', 'M58 106 Q100 146 142 106'],
  happy: ['M58 84 Q74 66 90 84', 'M110 84 Q126 66 142 84', 'M52 100 Q100 154 148 100'],
  wink: ['M60 88 Q75 71 90 88', 'D124 84', 'M58 106 Q100 144 142 106'],
  thinking: ['D76 82', 'D124 82', 'M86 116 Q99 125 113 119'],
  cheer: ['M56 82 Q74 62 92 82', 'M108 82 Q126 62 144 82', 'F M62 102 Q100 152 138 102 Z'],
  oops: ['D72 80', 'D128 80', 'M78 122 Q88 110 100 122 Q112 134 122 122'],
  look: ['D80 84', 'D128 84', 'M70 110 Q100 136 130 110'],
  blink: ['M62 86 L90 86', 'M110 86 L138 86', 'M58 106 Q100 146 142 106'],
};
const BUL_P = {}; for (const [k, v] of Object.entries(BUL_FACE)) BUL_P[k] = v.map(d => d[0] === 'D' ? {dot: d.slice(1).split(' ').map(Number)} : d[0] === 'F' ? {fill: new Path2D(d.slice(2))} : {p: new Path2D(d)});
// bulat(x, y, saiz, {mood, color, arms, armsUp, blush, rot, sx, sy, look, lookY, a}) — sauh: tengah bawah
function bulat(x, y, s, o = {}) {
  const [body, ink] = BUL_PAL[o.color ?? 'orange'], k = s / 200;
  g.save(); g.globalAlpha *= o.a ?? 1; g.translate(x, y); g.rotate(o.rot ?? 0); g.scale((o.sx ?? 1) * k, (o.sy ?? 1) * k); g.translate(-100, -190);
  if (o.arms) { g.fillStyle = '#FFFFFF'; const ay = o.armsUp ? 70 : 146, dx = o.armsUp ? 8 : 0; g.beginPath(); g.ellipse(18 - dx, ay, 26, 20, 0, 0, TAU); g.ellipse(182 + dx, ay, 26, 20, 0, 0, TAU); g.fill(); }
  g.fillStyle = body; g.fill(BUL_BODY);
  if (o.blush) { g.save(); g.fillStyle = ink; g.globalAlpha *= .16; g.beginPath(); g.ellipse(46, 110, 13, 8, 0, 0, TAU); g.ellipse(154, 110, 13, 8, 0, 0, TAU); g.fill(); g.restore(); }
  g.translate(o.look ?? 0, o.lookY ?? 0);
  g.strokeStyle = ink; g.fillStyle = ink; g.lineWidth = 7; g.lineCap = 'round'; g.lineJoin = 'round';
  for (const e of BUL_P[o.mood ?? 'calm']) { if (e.dot) { g.beginPath(); g.arc(e.dot[0], e.dot[1], 8.5, 0, TAU); g.fill(); } else if (e.fill) g.fill(e.fill); else g.stroke(e.p); }
  g.restore();
}
// muncul dengan squash & stretch, terapung, berkelip; t1 = keluar (jatuh)
function bulatPop(x, y, s, t, t0, t1 = 1e9, o = {}) {
  const k = cl((t - t0) / .5); if (k <= 0) return; const ko = sn(t, t1, .35); if (ko >= 1) return;
  const sc = back(k), sq = 1 + Math.sin(k * Math.PI) * .14, fl = Math.sin((t - t0) * 2.6 + (o.ph ?? 0)) * .025 * k;
  let mood = o.mood ?? 'calm'; if (typeof mood === 'function') mood = mood(t);
  if ((mood === 'calm' || mood === 'happy' || mood === 'look') && (((t - t0 + (o.ph ?? 0)) % 3.1) < .12)) mood = 'blink';
  bulat(x, y + ko * 260, s * sc, {...o, mood, sx: (o.sx ?? 1) * (1 + fl) / sq, sy: (o.sy ?? 1) * (1 - fl) * sq, a: (o.a ?? 1) * (1 - ko)});
}

// ── tambahan untuk video: mood 'wow' (mulut O) & 'sad', bayang, dan lompatan ─────────
BUL_P.wow = [{dot: [76, 80]}, {dot: [124, 80]}, {fill: new Path2D('M100 104 C116 104 118 136 100 136 C82 136 84 104 100 104 Z')}];
BUL_P.sad = [{dot: [74, 86]}, {dot: [126, 86]}, {p: new Path2D('M70 128 Q100 104 130 128')}];
// bayang lembut di lantai (lukis sebelum maskot)
function bulatShadow(x, y, s, a = .14) { g.save(); g.fillStyle = `rgba(40,25,10,${a})`; g.beginPath(); g.ellipse(x, y + 4, s * .42, s * .07, 0, 0, TAU); g.fill(); g.restore(); }
// lompatan: dari (x0,y0) ke (x1,y1) antara t0..t1 dengan antisipasi, regang & penyek mendarat
function bulatHop(x0, y0, x1, y1, s, t, t0, t1, o = {}) {
  const k = cl((t - t0) / (t1 - t0)), x = lerp(x0, x1, eSm(k)), arcH = o.h ?? 160;
  const y = lerp(y0, y1, k) - Math.sin(k * Math.PI) * arcH;
  const pre = cl((t - t0 + .18) / .18) * (1 - cl(k * 4)), land = k >= 1 ? Math.max(0, 1 - (t - t1) / .25) : 0;
  const sq = 1 - .16 * pre - .2 * land * Math.sin(land * Math.PI) + (k > 0 && k < 1 ? .1 * Math.sin(k * Math.PI) : 0);
  bulatShadow(x, Math.max(y0, y1) * (1 - k) + y1 * k, s * (1 - Math.sin(k * Math.PI) * .4));
  bulat(x, y, s, {...o, sx: 1 / sq, sy: sq});
}
