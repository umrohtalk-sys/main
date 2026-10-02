# API engine `kinetik.js`

Semua koordinat dalam ruang 1920×1080, y ke bawah. `t` = masa filem (saat). `g` = konteks kanvas.

## Masa & pelonggaran
| Fungsi | Guna |
|---|---|
| `sn(t, a, d=.5, e=eOut)` | kemajuan 0→1 bermula pada `a` selama `d` |
| `ph(t, a, b, d=.45)` | sampul masuk pada `a`, keluar pada `b` (0→1→0) |
| `kf(t, [[t0,v0],[t1,v1],…], e=eIO)` | bingkai kunci; `v` nombor atau tatasusunan |
| `eOut` expo-out · `eIn` · `eIO` snap Swiss ≈ cubic-bezier(.7,0,.2,1) · `eSm` smoothstep · `back(k,s)` overshoot · `elastic` | pelonggaran |
| `cl, lerp, inv(a,b,x), hash(i), wob(t,f,p)` | utiliti; `hash` ganti `Math.random` |

## Perkataan suara
| Fungsi | Guna |
|---|---|
| `WORDS[i]` → `{w, a, b}` | perkataan ke-i (masa filem, sudah + OFF) |
| `w(i)`, `we(i)` (ditakrif dalam scenes.js) | masa mula / tamat kata ke-i |
| `T('kata', n=1)`, `Te(...)` | masa mula / tamat sebutan ke-n kata itu (tanpa tanda baca, huruf kecil) |
| `seg(i0, i1)` | `[[teks, masa], …]` untuk `wordsLine` |
| `segK('dan',1,'peranan',1)` | sama, dengan kata kunci |

## Teks
| Fungsi | Kesan | Pilihan utama |
|---|---|---|
| `wordsLine(list, x, y, t, o)` | kata demi kata naik dari garis dasar tepat pada masanya; balut automatik | `size, wt, fam, it, col, maxW, lh, hl:{indeks: warna}, out, outStag, ghost, lead, sp` → pulang `{w, h, lines, endX, endY}` |
| `rise(s, x, y, t, t0, o)` | satu rentetan naik keluar klip (Swiss) | `size, wt, fam, it, col, d, out, outD, align, clipTop` |
| `pop(s, x, y, t, t0, o)` | skala overshoot (perkataan beremosi, "Simpan.") | `size, rot, out` |
| `slam(s, x, y, t, t0, o)` | huruf jatuh berperingkat + gema garis luar | `size, col, stag, fall, echo, echoCol, colAt(i), out` |
| `letters(s, x, y, o, fn)` | transform setiap huruf: `fn(i,ch,n) → {dx,dy,r,s,sy,a,col,stroke}` | bina pintu masuk sendiri (cth. FUNDAMENTAL jatuh & penyek) |
| `typeOn(s, x, y, t, t0, o)` | mesin taip + karet | `cps, size, col` (cps = huruf ÷ tempoh sebutan) |
| `scramble(s, x, y, t, t0, o)` | mono menyahkod | `d, size, col` |
| `marker(x,y,w,h,t,t0,col)` · `underline(x,y,w,t,t0,col,lw)` | penyerlah / garis bawah disapu | lukis marker SEBELUM teks |
| `knife(x0, y, x1, t, t0)` | garis pisau; pulang faktor runtuh 0→1 | skala elemen `1 - k` pada garis tengahnya |
| `chip(s, x, y, t, t0, o)` | pil disapu masuk; pulang lebar | `bg, fg, size, fam, wt, out, stroke` |
| `mono(s, x, y, size, col, o)` | label teknikal kecil | `align, a` |
| `font(size, wt, fam, it, ls)` · `tw(s)` · `twf(s, size, wt, fam, it)` · `fit(s, maxW, max)` | ukuran; `fit` cari saiz terbesar yang muat | — |

## UI & bentuk
| Fungsi | Guna |
|---|---|
| `box(x,y,w,h,r,fill,{shadow,stroke,lw,dash})` · `rr` · `bar` · `circle` · `ring` | kad, butang, pil |
| `cursor(x, y, t, [masaKlik…])` + `cursorAt(t, [[t,x,y],…])` | kursor dengan tekan + riak |
| `ripple(x,y,t,t0,col,R)` · `burst(x,y,t,t0,{n,r,cols})` | maklum balas klik, konfeti |
| `brackets(x,y,w,h,col,c,lw,a)` | pendakap fokus kamera |
| `arrow(x0,y0,x1,y1,k,col,lw)` · `curve([p0,p1,p2,p3], k, col, lw, dash)` | anak panah, garis anotasi |
| `icon(nama, x, y, s, k, col, lw)` | ikon garis dilukis mengikut `k`: search, check, bookmark, bulb, blocks, eye, grid, chat, rocket, flask, blueprint, heart, star, question |
| `phone(x, y, w, h, (sw, sh) => {...})` | peranti; isi skrin dilukis dalam koordinat skrin (diklip) |

## Si Bulat (`bulat.js`)
`bulat(x, y, s, {mood, color, arms, armsUp, blush, rot, sx, sy, look, lookY, a})` — (x, y) = tengah bawah.
Mood: `calm happy wink thinking cheer oops look blink wow sad`. Warna: `orange mango green purple pink cream charcoal`.
`bulatPop(x, y, s, t, t0, t1, o)` muncul dengan squash & stretch, berkelip sendiri, jatuh keluar pada `t1`. `mood` boleh fungsi `t => …`.
`bulatHop(x0,y0,x1,y1,s,t,t0,t1,o)` lompat dengan antisipasi & penyek mendarat. `bulatShadow(x,y,s)`.

## Babak, peralihan, HUD
```js
SCENES = [[0, s0, 'PERKARA'], [3.8, s1, 'TAHU DULU'], ...];   // fn(t, lt, dur)
TR = {3.8: 'wipe', 7.85: 'slats', 11.0: 'iris', 17.55: 'cut', 22.55: 'rise', ...};
TCOL = [K.or, K.mango, K.ink, K.green, K.purple];             // warna tirai ikut indeks babak
HUD_ON = true;                                                // label babak, kod masa, sari kata karaoke, bar kemajuan
```
Engine menolak kamera +2.2 % sepanjang setiap babak. `?alpha=1` → latar lutsinar tanpa HUD.

## Pratonton
Buka `index.html` terus dalam Chrome (atau `npx serve`): ruang = main/jeda dengan suara, ←/→ = lompat 2 s, klik kanvas = lompat.
