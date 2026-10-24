# Full prompt: Arena Clawd Pro

> Paste everything below into an AI coding agent (Claude, ChatGPT, Cursor, etc.). It describes the whole game — look, data, balance numbers, map coordinates, formulas, question generator, interface text and how to test it — so the result matches Arena Clawd Pro exactly. The game's own UI text is Indonesian (default) and Malay; the English names below are for understanding, the in-game strings are given in quotes.

---

## 0. Task

Build the web game **Arena Clawd Pro**: a MOBA (like Mobile Legends, simplified) for learning maths, for primary-school children in grades 1–6. The player controls **one hero** called Clawd. **The enemy is only minions and towers** (no enemy heroes, no boss). Maths questions are part of the fight: knocking down towers, casting the ultimate, earning power-ups and respawning after being knocked out.

Deliverables:
1. `game.html` — one file with HTML + CSS + plain JavaScript (ES5, an IIFE with `'use strict'`), **no libraries and no external images**. All graphics are drawn with Canvas 2D. The only external resource is Google Fonts.
2. A `netlify/` folder ready to upload: `index.html` (game.html wrapped in `<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">` + og:title/og:description/og:image meta), `sampul.jpg` (960×600 gameplay screenshot), `netlify.toml` (publish ".", headers `X-Content-Type-Options: nosniff` and `X-Robots-Tag: noindex, nofollow`, no cache on `index.html`, redirect `/*` → `/index.html` status 200), `robots.txt` (`Disallow: /`), and a zip of that folder.
3. Comfortable on phones (touch, 390×844) and desktop (keyboard), 60 fps.

---

## 1. "Paper & ink" visual style

CSS colour tokens:
```
--paper #efebe2  --paper-2 #faf8f2  --ink #2e2620  --muted #6d665b  --line #d6d0c3
--accent #d8714f  --accent-dark #b4553a  --leaf #6fa83c  --leaf-dark #3f6b22  --gold #e2a93b  --enemy #2c3e6b
```
Canvas colours: ink `#2e2620`, paper `#efebe2`/`#faf8f2`, gold `#e2a93b`, Clawd `#d8714f` (shade `#a94c33`), Comot blue `#2c3e6b`, purple `#5a2d58`, sky `#6fa8dc`.

Fonts (Google Fonts): **Source Serif 4** 400/700 (headings), **Geist** 400/600/800 (UI), **Caveat** 600/700 (handwriting: damage numbers, banners, notes), **IBM Plex Mono** 400/500 (small uppercase labels, letter-spacing .08em).

Ink drawing helpers (required, used for every drawing):
- `hsh(n)` = fractional part of `sin(n*12.9898)*43758.5453` (seeded random).
- `wobRect(x,y,w,h,u,amp)` — a rectangle whose edges are split every 8 px and jittered ±amp, as if drawn with a pen.
- `inkCircle(cx,cy,r,u,amp,lw,col,fill)` — a wobbly circle.
- `scratch(x,y,w,h,n,col,alpha,ang,u)` — n short 2.5–7.5 px strokes at angle `ang` (pen hatching) inside a shape (use `clip`).
- `star4` — a 4+4-point line star. `heart` — a small outlined heart.
- Paper grain: a 128×128 canvas of random transparent dots used as a pattern.
- The ink "seed" changes 7× per second (`seed = floor(time*7)`) so lines shimmer slightly.

HTML cards/buttons: 1.5 px ink border, radius 8–12 px, hard shadow `6px 6px 0 rgba(46,38,32,.85)` on dialog sheets. Sheets drop in (`translateY(-30px) rotate(-3deg) scale(.9)` → normal, bouncy cubic-bezier). Respect `prefers-reduced-motion`.

### Characters
- **Clawd** (`drawClawd(cx, footY, options)`): body `wobRect(-17,-29,34,20)` filled with the hero colour + hatching in the hero's dark colour, 4 legs 3.6×10 at x = −14, −8.6, 5, 10.4 (swinging when running: `sin(t*20)`), 2 arms 5×6.5 (front arm raised 6 px when attacking), 2 square eyes 2.9×6.2. Expressions: happy (^ eyes), hurt (× eyes), blink, angry (slanted brows). Options: `s` scale, `face` direction (−1/1), `hero`, `run`, `atk`, `pencil` (ranged minion), `crown` (super minion), `cannon` (siege minion), `col`.
- Hero accessories: Warrior = waving red cape `#d9534a` + yellow pencil sword; Shield = grey helmet `#9aa3a8` with a red plume + round shield `#c9d2a0` with a gold centre; Archer = red headband + brown bow `#8f5a1f`; Mage = purple hat `#5a3d8f` with a star + gold star staff; Shadow = dark scarf `#3a3150` across the eyes + waving scarf tail + silver dagger; Healer = crown of 5 green leaves + staff topped with a heart `#e8607e`.
- **Si Comot** (`drawComot(x,y,r,options)`): a blue ink blob, wavy semicircle top, 6-point jagged wobbling bottom, 2 white oval eyes whose pupils follow the target, angry white brows. Ranged minions are purple `#5a2d58` with a purple orb staff; siege `r 17` with a dark cannon behind; super `r 20` colour `#1f2b4d` with a gold crown.
- Hand-drawn jungle monsters: Hermit Crab (orange spiral shell, 6 legs), Red Beetle (spotted red ellipse + antennae, fire particles), Blue Snail (blue spiral shell + blinking white star), Ink Turtle (big dark-green hexagon shell, bobbing head, red warning circle before it slams).

---

## 2. Page structure

```
<main> (max-width 1100px, flex column, gap 14px)
  <section id="menu" class="card">
     .brand: <canvas id="heroCv" 220×220> + text (tag, h1 "Arena Clawd" + tilted orange PRO badge, intro, handwritten note)
     .topbar: .tabs (role=tablist) + language buttons [Indonesia | Melayu]
     #tabMain  #tabBelajar  #tabLatihan  #tabKemajuan
  <section id="game" hidden>
     .stage (height min(80vh,700px), min 440px, border, radius 12) with a full <canvas id="cv"> + ⏸ and 🔊 buttons top right + .toast
     p.hint (handwriting, control hints)
<div class="sheet" id="sheet" hidden><div class="paper" id="paper" role="dialog"></div></div>
```
Every important button has a `data-uji` attribute (for automated tests): `mula`, `hero-<id>`, `spell-<id>`, `mode-satu/tiga`, `topik-<id>`, `tingkat-<id>`, `tab-<id>`, `lang-id/ms`, `opt`, `lanjut`, `beli-<id>`, `tutup-kedai`, `sambung`, `main-semula`, `latih-salah`, `ke-menu`, `latihan-mula`, `latihan-lanjut`, `latihan-salah`, `latihan-ulang`, `latih-<topic>`, `kemajuan-latih`, `kemajuan-hapus`, `jeda`.

On phones (≤760 px) hero cards are 2 columns with the drawing above the text (64 px) and the skill list hidden; spells 2 columns; difficulty buttons (≤560 px) stack vertically.

---

## 3. Languages

Indonesian (default) and Malay. All text goes through `L(id, ms)`; text data is stored as `[id, ms]` and read with `tx(arr)`. Saved in localStorage `arena-pro-lang`. Switching language redraws the menu and map labels. Term pairs (ID/MS): Toko/Kedai (shop), Koin/Syiling (coins), Level/Tahap, Soal/Soalan (question), Benar/Betul (correct), Jawaban/Jawapan (answer), Pulang/Balik (recall), Lanjut/Teruskan (next), Penjumlahan/Tambah, Pengurangan/Tolak, Perkalian/Darab, Pembagian/Bahagi, Campuran/Campur, Sedang/Sederhana, Sulit/Sukar, kelas/tahun (grade), detik/saat (seconds), roboh/runtuh (fallen), hancur/musnah (destroyed), Markas/Pangkalan (base).

---

## 4. Tabbed menu

Header: tag "Kertas & tinta · MOBA matematika · main sendiri"; intro "Pilih hero Clawd, ikuti minion menyusuri lorong, robohkan menara Si Comot, lalu hancurkan Inti Istana Comot. Jawab soal untuk Soal Gempur, Ultimate Matematika, dan Ledakan Kombo."; note "musuhnya hanya minion & menara, tanpa hero musuh!". The `heroCv` canvas shows the mini-map of the chosen mode, towers (orange/blue squares), cores (large squares), camps (coloured circles), minion dots moving along lanes, and the chosen hero running (scale 5).

**Main (Play) tab** (4 numbered steps + button):
1. Choose hero — 6 cards (168×168 canvas with the hero at scale 2.6, animated, role in small caps, name, 3 skills with icons; ult marked "(ultimate)"). Selected = white background + 3 px gold ring.
2. Choose spell — 5 cards (icon, name, description).
3. Arena mode — 2 cards: **1 lorong** "Satu lorong tengah, 3 menara tiap tim. Cepat dan fokus, cocok untuk pemula." / **3 lorong** "Peta penuh: lorong atas, tengah, bawah, hutan, dan 7 menara musuh. Lebih strategis."
4. Maths questions — topic chips (Campuran, Penjumlahan +, Pengurangan −, Perkalian ×, Pembagian ÷) and a difficulty segment (Mudah · kelas 1–2, Sedang · kelas 3–4, Sulit · kelas 5–6) with the note "soal makin sulit tiap naik 5 level".
Then a big orange "Mulai bertarung ▸" button, "Skor terbaik: N", and 4 dashed how-to boxes: Gerak / Serang & skill / ⚡ Soal Gempur / Menang. All choices are saved in localStorage `arena-pro-set` `{hero, spell, mode, topik, diff}`. Defaults: pahlawan, kilas, satu, campur, mudah.

**Belajar (Learn) tab**: an intro sentence + 4 cards (2 columns, 1 on phones). Each card: symbol circle (+ − × ÷), topic title, idea, emoji visual, 3 numbered steps, green example box, green handwritten tip, "Latihan 5 soal ▸" button.
- Add: "Menjumlahkan = menggabungkan dua kelompok menjadi satu." 🍎🍎🍎 + 🍎🍎 = 🍎🍎🍎🍎🍎. Steps: start from the bigger number; count on by the second number; big numbers: tens first then ones. Example **34 + 25** → 30 + 20 = 50, 4 + 5 = 9 → 50 + 9 = **59**. Tip: order can swap 3 + 8 = 8 + 3.
- Subtract: "Mengurangi = mengambil sebagian dari sebuah kelompok." 🍬🍬🍬~~🍬🍬~~ = 🍬🍬🍬. Example **58 − 23** → 58 − 20 = 38, 38 − 3 = **35**. Tip: check with the inverse 35 + 23 = 58 ✓.
- Multiply: "Perkalian = penjumlahan berulang." ⭐⭐⭐ + ⭐⭐⭐ + ⭐⭐⭐ = 3 × 3. Steps: 4 × 3 = 3+3+3+3 = 12; learn ×2, ×5, ×10 first; split big numbers. Example **14 × 3** → 10 × 3 = 30, 4 × 3 = 12 → **42**. Tip: 2 × 7 = 7 × 2.
- Divide: "Pembagian = membagi sama rata ke beberapa kelompok." 🐟🐟 | 🐟🐟 | 🐟🐟 = 6 ÷ 3. Steps: how many 3s make 12; use multiplication 3 × 4 = 12; split first 48 = 40 + 8. Example **48 ÷ 4** → 40 ÷ 4 = 10, 8 ÷ 4 = 2 → **12**. Tip: division is the inverse of multiplication.

**Latihan (Practice) tab**: no timer, no enemies. The start screen shows the active topic & level, buttons "Mulai 10 soal ▸" and "Ulangi soal yang salah (N)". Questions 1–4 tier 0, questions 5–10 tier 1. Each question: progress line "title · Soal i/n · benar k", visual (if any), big question, answer buttons. After answering: correct → "Benar!"; wrong → "Jawabannya X." + explanation box; then "Lanjut ▸". End screen: score stamp k/n (green if ≥60%, red otherwise), message (100% "Sempurna! Siap bertarung di arena." / ≥60% "Bagus! Terus berlatih ya." / else "Tidak apa-apa, baca lagi tab Belajar lalu coba lagi."), buttons "Latihan lagi" and "Main sekarang ▸". Practice also records progress.

**Kemajuan (Progress) tab**: 4 stat boxes (games played, wins, best score, total accuracy (N questions)), accuracy bar per topic, "8 soal salah terakhir" (the full question with the answer, plus an explanation box), buttons "Latihan soal yang salah" and "Hapus kemajuan" (with confirmation).

Storage `arena-pro-kemajuan`: `{ main, menang, best, topik: { tambah:[correct,total], kurang:[…], kali:[…], bagi:[…] }, salah: [ {ty,a,b,c,miss,ans,lv} … max 8, newest first ] }`. Every answer (arena or practice) updates topic stats; wrong answers are put at the front of `salah` (no duplicate question text); a correct answer to a question in that list removes it. Wrap all localStorage access in try/catch.

---

## 5. Question generator (must be exact)

`mkQ(topic, level, tier)`. Combined level `lv = min(9, levelIndex*3 + tier)` (easy=0, medium=1, hard=2). `tier` = `min(2, floor((heroLevel−1)/5))`, **+1 for the Maths Ultimate**.

Topic "mixed": if easy and tier 0, pick from [add, subtract, add, subtract, multiply]; otherwise any of the four.

**Addition** a + b (ranges per lv):
| lv | a | b |
|---|---|---|
| 0 | 1–5 | 1–5 |
| 1 | 2–9 | 2–9 |
| 2 | 10–40 | 1–9 |
| 3 | 10–59 | 10–39 |
| 4 | 20–79 | 12–49 |
| 5 | 100–499 | 10–99 |
| 6 | 100–899 | 100–899 |
| 7 | 1000–4999 | 100–999 |
| 8 | 1000–8999 | 1000–4999 |
| 9 | 1000–8999 | 1000–8999 |
Emoji visual when lv ≤ 1 and the sum ≤ 10: emoji×a `+` emoji×b.

**Subtraction** a − b: a per lv = 2–10, 11–18, 20–59, 30–99, 50–99, 100–499, 300–999, 1000–4999, 1000–9999, 2000–9999. b: lv0 1..a−1; lv1 2–9; lv2 1–9; lv3 10..min(29,a−1); lv4 15..min(49,a−1); lv5 10–99; lv6 100..min(299,a−1); lv7–9 100..min(999,a−1). Visual at lv0: emoji×result then emoji×b faded and struck through.

**Multiplication** a × b: lv0 a∈{2,5,10}, b 1–5; lv1 a∈{2,3,4,5,10}, b 1–10; lv2 a 2–5, b 2–10; lv3 a 2–6, b 2–10; lv4 a 2–9, b 2–10; lv5 a 11–25, b 2–5; lv6 a 12–49, b 3–9; lv7 a 11–30, b 11–19; lv8 a 12–60, b 3–9; lv9 a 100–250, b 2–9. For lv ≤ 4 swap a and b 50% of the time. Visual at lv0 when a,b ≤ 5: a groups of emoji×b joined by "+".

**Division** a ÷ b = c (b divisor, c quotient, a = b×c): lv0 b=2, c 1–5; lv1 b∈{2,5,10}, c 1–5; lv2 b 2–5, c 1–10; lv3 b 2–5, c 2–10; lv4 b 2–9, c 2–10; lv5 b 2–9, c 6–12; lv6 b 3–9, c 11–25; lv7 b 3–9, c 20–60; lv8 b 3–9, c 11–40; lv9 b 4–9, c 50–120.

**Missing number**: when lv ≥ 8, 50% of questions become `□ op b = c` (answer a) or `a op □ = c` (answer b).

Question text: `a + b = ?`, symbols `+ − × ÷`, `□` for the missing number.

**Answer choices**: lv0 → 3 choices, otherwise 4. Distractors = answer ± one of [1, 2, 10, 1, 2]; plain multiplication also ±a and ±b; if the answer ≥ 100 also ±100 and ±20. No negatives or duplicates; shuffled.

**Explanation `explain(q)`** (numbered steps, result numbers in bold; text in Indonesian/Malay):
- Missing number: "Kotak □ adalah angka yang hilang. Pakai operasi **kebalikan**:" → `□ = c − b = a` (add, front missing), `□ = c − a` (add, back missing), `□ = c + b` / `□ = a − c` (subtract), `□ = c ÷ b` / `□ = c ÷ a` (multiply), `□ = c × b` / `□ = a ÷ c` (divide) → "Cek: a op b = c ✓".
- Add: if a and b < 10 → "Mulai dari **a**, hitung maju b langkah:" + the sequence `a+1 → … → c`. Otherwise split b = big part + rest (big part = b rounded down to tens; to hundreds if b ≥ 100) → `a + big = m` → `m + rest = c`. Then "Cek dengan kebalikan: c − b = a ✓".
- Subtract: if b < 10 and a ≤ 20 → count back with a sequence; otherwise split b and subtract the big part first. "Cek dengan kebalikan: c + b = a ✓".
- Multiply (lo = smaller, hi = bigger): if (lo ≤ 5 and hi ≤ 12) or hi ≤ 10 → "a × b artinya penjumlahan berulang: hi ditambah lo kali." + `hi + hi + … = c`. If lo < 10 and hi is a multiple of 10 → "hitung hi/10 × lo, lalu tambahkan satu nol". If lo < 10 → split hi = big + rest, multiply each, add. Otherwise (2-digit × 2-digit) split b. "Cek dengan kebalikan: c ÷ lo = hi ✓".
- Divide: "Cari angka yang kalau dikali b hasilnya a." If c ≥ 10 and c is not a multiple of 10 → `a = b×tens + b×ones → … ÷ b = tens, … ÷ b = ones` → `tens + ones = c`; otherwise `b × c = a`. Close with "Jadi a ÷ b = c. Cek: c × b = a ✓".
Explanation box: title "Cara menghitung", light green background `#eef4e2`, dashed green border.

---

## 6. Map and the two modes

2000×2000 world, painted once onto a hidden `MAP` canvas and a 220×220 `MINI` mini-map (repainted when mode/language changes). The camera follows the hero (lerp 0.15), zoom `min(width,height)/760` (×1.08 on very wide screens), clamped to the world edges, screen shake on explosions.

- Clawd base `BASE0 (190,1810)`, Comot Palace `BASE1 (1810,190)`, hero spawn `(330,1680)`. Base = circle r 250 (light orange `#f6d1bd` / light blue `#c9d2e8`) + hatching + ring r 200. Handwritten labels "Markas Clawd", "Istana Comot", "~ sungai tinta ~" (rotated 45°).
- Ground `#dfe5c6` + grain pattern + 9000 grass strokes `#8fae64`.
- River: a 130 px `#bcd8e3` band with ink edges from (0,0) to (2000,2000), meandering `sin(t*9)*30`, plus 60 white ripples.
- Lanes: 150 px `#ecd9ae` bands with ink edges + dashed centre line.
  - top: (190,1810) → (205,1500) → (205,205) → (1500,205) → (1810,190)
  - middle: (190,1810) → (1810,190); `midP(t) = (190+1620t, 1810−1620t)`
  - bottom: (190,1810) → (500,1795) → (1795,1795) → (1795,500) → (1810,190)
- 46 px footpaths (`#e6dcb8`, 55% opacity) from each camp to the nearest lane point.

**Mode `satu` (1 lane)**: middle lane only. Enemy towers tier 1/2/3 at `midP(0.6)`, `midP(0.72)`, `midP(0.86)`; our towers tier 1/2/3 at `midP(0.4)`, `midP(0.28)`, `midP(0.14)`. Camps: Blue Snail (600,900), Red Beetle (1500,1250), Hermit Crab (700,700) and (1240,1240), Ink Turtle (1350,1550). Bushes: (489,1299), (863,1349), (1137,651), (1511,701). 170 trees.

**Mode `tiga` (3 lanes)**: enemy towers top (820,205) t1, (1360,205) t2; middle midP(0.62) t1, midP(0.78) t2, midP(0.88) **t3**; bottom (1795,1180) t1, (1795,640) t2. Our towers: top (205,1120), middle midP(0.3), bottom (880,1795) (all t1) + midP(0.14) t3. Camps: Blue (520,1050) & (1050,520), Red (1050,1480) & (1480,1050), Crab (560,560) & (1440,1440), Turtle (1185,1185). Bushes: (863,1349), (1137,651), (330,950), (1050,330), (1670,1050), (950,1670). 140 trees.

**Trees**: seeded random positions (a different seed per mode), r 26–52; rejected if < 115+r from a lane, < 95+r from the river, < 330 from a base, < 150+r from a camp, < 75+r from a camp footpath, < 95+r from a bush, or overlapping another tree. Drawn as: ellipse shadow, green `inkCircle` `#8cb35a`/`#7aa64c`, hatching `#3f6b22`, a light highlight. Trees block the hero (circle collision tree r + 0.7×hero r).

**Camps**: circle r 70 (turtle 95), faded cream/green + dashed inner circle.

**Bushes**: 78×50 ellipse, green `rgba(78,128,52,.55)` with a dashed edge + 46 curved grass blades `#2f5418`.

---

## 7. Buildings

| | HP | range | fire delay | damage to minions | damage to hero |
|---|---|---|---|---|---|
| Enemy tower t1/t2/t3 | 1900 / 2600 / 3000 | 300 | 1.2 s | 85 | min(110, 55 + 0.06×seconds) |
| Our tower t1/t2/t3 | 2400 / 2800 / 3200 | 300 | 1.2 s | 85 | – |
| Our base core | 4500 (at BASE0+(20,−20), r 46) | 320 | 1.2 s | 85 | – |
| **Comot Palace Core** | 6000 (at BASE1+(−20,20), r 50) | 330 | 1.0 s | 110 | min(140, 85 + 0.06×seconds) |

- Towers always target the nearest enemy minion first; enemy towers/core only shoot the hero when no minion is in range and the hero is not hidden. Shots are thick beams (blue `#6b7fb0` / orange `#f2b04a`).
- **Shield chain** (both teams): tier 2 is invulnerable while tier 1 on the same lane stands; tier 3 is invulnerable until one lane has all of that team's tier 1–2 towers down; the core is invulnerable while any tier 3 of that team stands. Invulnerable buildings show a pulsing transparent blue dome, a grey-blue HP bar, and hitting them shows "Terlindung!".
- Tower drawing: grey round base, `wobRect` body 34×74 (t3 ×1.12; core ×1.45) in a light colour + team-colour hatching, team-colour roof, floating diamond crystal (gold for us, blue for the enemy). The enemy core has 4 battlements on the roof. "T1/T2/T3" label when the hero is near; labels "Inti Istana Comot" / "Inti Markas". A fallen tower = grey rubble.
- Enemy tower falls: +160 XP, +220 coins, banner "Menara musuh roboh! (n/total)"; when the core's shield breaks, toast "Perisai Inti Istana Comot pecah! Serang inti di kanan atas 🏰". Our tower falls: a warning toast.
- **Win** = the Comot Palace Core is destroyed. **Lose** = our base core is destroyed.

---

## 8. Minions

| type | base HP | damage | range | speed | r | attack delay |
|---|---|---|---|---|---|---|
| melee | 280 | 18 | 52 | 105 | 15 | 1.0 s |
| ranged | 190 | 24 | 210 | 105 | 15 | 1.3 s |
| siege | 520 | 30 (×2.6 vs buildings) | 240 | 85 | 18 | 1.8 s |
| super | 900 | 45 | 60 | 110 | 20 | 0.9 s |

- First wave 3 s after the start, then every 28 s. Per lane, per team: melee, melee, melee, ranged (+ siege every 3rd wave), spawned 0.7 s apart, 150 px out of the base. HP and damage scale: enemy `1 + 0.05×wave`, ours `1 + 0.035×wave`. Max 170 units.
- AI: every 0.3 s find the nearest target within range+150 (units first, then buildings). With a target → approach and attack; ranged/siege fire projectiles (our yellow pellets, enemy purple drops, dark cannonballs). No target → walk to the next lane waypoint. Minions push apart so they don't stack.
- An enemy minion dying near the hero (≤700): +22 XP & +12 coins, or +34 XP & +28 coins if the hero landed the kill (siege ×2). 3 kills within 2.5 s → banner "Tiga Sekaligus!", 5 → "Ganas! Lima minion!".
- Drawing: our minions = small Clawd (scale 0.6; siege 0.72; super 0.9, colour `#e9945f`, crowned); enemy minions = Comot r 14 (siege 17, super 20). Small HP bar when hurt (always for siege/super).

---

## 9. Heroes

Stats (HP, +HP/level, attack, +attack/level, range, attack delay, speed, skill multiplier):
| id | name | colour | HP | +HP | ATK | +ATK | range | delay | speed | sp |
|---|---|---|---|---|---|---|---|---|---|---|
| pahlawan | Clawd Pahlawan (warrior, melee) | #d8714f | 1150 | 125 | 58 | 8 | 95 | 0.75 | 255 | 1 |
| perisai | Clawd Perisai (tank) | #a3b86c | 1500 | 150 | 44 | 6 | 90 | 0.85 | 240 | 1 |
| pemanah | Clawd Pemanah (ranged) | #f2c14e | 860 | 95 | 52 | 8 | 270 | 0.62 | 250 | 1 |
| sihir | Clawd Penyihir (mage) | #7f9fd9 | 820 | 90 | 46 | 7 | 235 | 0.85 | 245 | 1.25 |
| bayang | Clawd Bayangan (assassin, melee) | #8a78b8 | 820 | 92 | 62 | 9 | 92 | 0.60 | 278 | 1 |
| penyembuh | Clawd Penyembuh (support, ranged) | #f19bb4 | 900 | 100 | 40 | 6 | 240 | 0.80 | 248 | 1.1 |

Formulas:
- `skillDamage(base, ratio, n) = (base + effectiveAttack × ratio) × (1 + 0.22×(skillLevel−1)) × sp × ultimateMultiplier`
- `skillCooldown(n) = baseCd × max(0.4, 1 − itemCdr − (blueBuff ? 0.25 : 0)) × (1 − 0.06×(skillLevel−1))`
- Effective attack = attack × 1.4 (Power buff) × 1.1 (Red buff).
- XP to level up = `90 + level×60`, max level 15. Level up: recompute stats, +200 HP, golden light pillar, "Level N!" text. Level 4 unlocks the ultimate (banner "Ultimate terbuka! …"); every other level gives 1 skill point (yellow + button). Skills 1–2 max level 5; the ultimate max 3, needing hero level 8 then 12.
- Natural regen 0.4% HP/s (1.2% with the Blue buff). Inside the base (r 250) heal 22% HP/s. Passive coins +1.6/s, starting coins 300.
- Knock-out: respawn after `6 + 0.6×level` s at the spawn point; 0.9 s after being knocked out a question appears (see §11).
- Recall (B): stand still 3 s (blue progress ring), cancelled by moving/attacking/taking damage.
- Auto-attack when standing still (except inside a bush) or while the attack button is held; targets the nearest unit first, then buildings. Melee heroes slash directly; ranged heroes fire an arrow (Archer), purple orb (Mage) or heart (Healer).

Skills (the bracket is base damage + ratio × attack, fed into `skillDamage`; base cooldown in seconds; aim = nearest enemy, else joystick direction, else forward-diagonal):
- **Warrior**: Q Pencil Charge (6 s) dash 1300/s for 0.2 s, hits enemies passed `(70 + 1.2×ATK)` + slow 1.5 s. E Spinning Top (9 s) area 175 `(60 + 1.1×ATK)`, heal 9% HP, damage taken ×0.7 for 3 s. R Earth Slam (30 s) leap 0.5 s to the target (≤480), invulnerable while airborne, landing area 230 `(170 + 2×ATK)` + 1.3 s stun.
- **Shield**: Q Shield Bash (6 s) area 150 centred 90 px ahead, `(60 + 1.0×ATK)`, 0.8 s stun. E Paper Wall (12 s) 30% HP shield + damage taken ×0.5 for 4 s + enemy minions within range+220 are forced to attack the hero; text "Ayo serang aku!". R Giant Fortress (32 s) ring 270 `(150 + 1.6×ATK)` + 1.6 s stun + 25% shield.
- **Archer**: Q Ink Arrow (5 s) big arrow 1000/s for 0.75 s, piercing `(85 + 1.3×ATK)`. E Wind Step (8 s) leap away 1000/s 0.18 s, next 3 attacks ×1.6. R Arrow Rain (28 s) 8 arrow volleys every 0.25 s in a 200 area `(36 + 0.5×ATK)` + slow.
- **Mage**: Q Star Ball (4 s) orb 650/s exploding in a 115 area `(100 + 1.6×ATK)`. E Chain Lightning (8 s) hits the target + jumps to 3 more enemies (≤230 per jump) `(75 + 1.2×ATK)` + 0.7 s stun. R Star Rain (30 s) 8 stars falling every 0.15 s, area 115 `(110 + 1.3×ATK)`.
- **Shadow**: Q Shadow Leap (7 s) dash 1500/s to the nearest enemy unit (≤420) `(80 + 1.3×ATK)`; if that target dies → Q cooldown resets to 0.3 s + "Siap lagi!" text. E Twin Stab (5 s) 2 stabs `(55 + 1.0×ATK)` 0.18 s apart. R Shadow Dance (30 s) 1.6 s untargetable and immune, every 0.2 s hits all enemies within 230 `(40 + 0.55×ATK)`, hero afterimages appear.
- **Healer**: Q Healing Light (8 s) heals 15% own HP, allied minions within 320 heal 40%, area 180 `(40 + 0.6×ATK)`. E Guard Bubble (14 s) allied minions within 350 get a 6 s bubble (damage taken ×0.5, damage dealt ×1.5). R Call the Troops (40 s) spawns super minions next to the hero heading for the nearest lane: 5 if the ultimate question is right, 3 if wrong; HP ×(1 + 0.25×(ultLevel−1)).

**Spells** (F): Kilas ⚡ 40 s (blink 240 px), Pulih 💚 50 s (+30% HP), Hukuman 🗡 30 s (lightning on a monster/minion within 260: 650+40×level to monsters, 500 to minions), Lari Kencang 👟 45 s (+60% speed for 5 s), Perisai 🛡 50 s (30% HP shield for 4 s).

---

## 10. Jungle monsters (neutral team)

| | HP | damage | r | respawn | coins | XP | reward |
|---|---|---|---|---|---|---|---|
| Kelomang (Hermit Crab) | 520 | 0 (runs away) | 22 | 45 s | 60 | 30 | +35% HP + speed for 8 s |
| Kumbang Merah (Red Beetle) | 1300 | 32 | 28 | 70 s | 110 | 80 | Red buff 70 s: +10% attack, attacks burn 3 s + slow |
| Siput Biru (Blue Snail) | 1300 | 28 | 28 | 70 s | 110 | 80 | Blue buff 70 s: −25% skill cooldown, regen ×3 |
| Penyu Tinta (Ink Turtle) | 3200 | 60 (area slam 150 after a 0.8 s warning, every 2.4 s) | 44 | 120 s (first appears at 60 s) | 260 | 160 | 40% HP shield + 1 super minion on each lane |

Monsters only fight when the hero hits them, and walk back to camp when too far (>380 from camp or hero >520 away) while regenerating 25%/s. The monster name appears when the hero is near.

---

## 11. Questions inside the fight (the heart of the game)

The game pauses (state `soalan`) while a question sheet is shown. The sheet contains: tag, title, a dashed reward box (big icon + text), a small label "TOPIC · LEVEL · tingkat N", the emoji visual (if any), the big question (Geist 800, 40–60 px), 3–4 big answer buttons (2 columns, 3 columns for 3 choices), a handwritten feedback line, an explanation area, the combo line "Kombo ●○○ · 3 benar beruntun = Ledakan Kombo", and confetti when correct. Keys 1–4 pick an answer.

Question types:
1. **Siege Question (Soal Gempur)** — a ⚡ "SOAL" button (G) appears when the hero is within range+130 of an enemy tower/core that is not invulnerable; it pulses gold when ready and shows a circular cooldown when not. Initial cooldown 8 s. Correct → a giant pencil (yellow, wooden tip, pink eraser, ~214 px long) falls from the sky for 0.5 s with a red ground shadow, then removes **18% of the tower's max HP (core 12%)** directly (ignores items/shields), with screen shake and debris; cooldown 20 s. Wrong → cooldown 12 s.
2. **Maths Ultimate (Ultimate Matematika)** — pressing R shows a question at tier+1. Correct → ultimate with multiplier **1.5**; wrong → **0.7** (the ultimate still fires after pressing Next). A small ✏️ icon sits on the R button.
3. **Flash question (soal kilat)** — first at 55 s, then every 60–75 s (only while the hero is alive). Random reward: Kuasa Pensil ⚔ (+40% attack 25 s), Sepatu Ajaib 👟 (speed ×1.3 & attack speed +25% for 25 s), Perisai Kertas 🛡 (damage taken ×0.5 for 25 s), Pulih Penuh 💚 (full HP + all skill cooldowns 0), Peti Koin 🪙 (+200), Meriam Bonus 💣 (1 siege minion + 1 super minion on each of our lanes).
4. **Knock-out question** — when the respawn time is still > 1.5 s. Correct → respawn immediately.

Every correct answer: +40 XP, +30 coins, combo +1, correct sound, confetti, green feedback "Benar! … +40 XP +30 🪙", auto-close after 1.25 s. Every wrong answer: combo resets to 0, the wrong button turns red and shakes, the right one turns green, "Jawabannya X. Tidak apa-apa, lihat caranya:" + explanation box + "Lanjut ▸" button (Enter/Space too). **No extra punishment for wrong answers.**

**Combo Blast (Ledakan Kombo)**: when the combo reaches 3 after the sheet closes → combo back to 0, banner "LEDAKAN KOMBO! 3 benar beruntun 💥", +150 coins, a 280 area explosion around the hero dealing `220 + 2.2×attack` to every enemy except cores.

When the question tier rises (levels 6 and 11) show the toast "Soal naik tingkat! Sekarang lebih menantang ✏️".

---

## 12. Bushes

`h.inBush` = the hero position is inside a bush ellipse. The hero is **hidden** when inside a bush and ≥ 1.2 s have passed since the last attack/skill (or during Shadow Dance). A hidden hero is not targeted by minions/towers, and projectiles already flying at the hero vanish. Inside a bush the hero does not auto-attack. The hero is drawn 50% transparent with the label "🌿 tersembunyi" (green) or "🌿 terlihat (baru menyerang)" (brick red).

---

## 13. Canvas HUD

- Top left: framed mini-map (size `min(160, 0.28×shortest side)`), tower/core squares, minion dots (bigger for siege/super), coloured monster dots, white-ringed hero dot, camera box.
- Below it: a "Name · Lv N" box + gold XP bar; a yellow `#fbefc9` box "🪙 coins" + "🛒 Toko" (tap to open the shop) + a pulsing red dot when an item is affordable.
- Top centre (moves under the mini-map on narrow screens): "mm:ss  🗼towers/total  ⚔kills"; below it a "Kombo" box with 3 circles (filled orange `#e8703a`); then active buff boxes "🔥 12s".
- The Comot Palace Core HP bar when the hero is ≤650 away (purple, grey-blue when invulnerable, 🛡 icon).
- Tilted yellow handwritten banner at 30% screen height (2.4 s, scaling in). HTML toast on top. When knocked out the screen darkens + "Clawd bangkit dalam N…".
- Floating Caveat numbers: gold (hero attacks), purple (skills), red (damage to us), green (heals).
- Hero HP bar with a white shield segment, gold level badge on its left.

Touch buttons (u = scale `clamp(0.78, shortest side/430, 1.25)`, attack centre `(width−76u, height−76u)`):
- ATTACK r 46u in the hero colour; skills Q/E/R r 32u at offsets (−118,−8), (−96,−100), (−12,−128); spell F r 25u at (−196,18); recall 🏠 B r 22u at (−196,−52); ⚡ Siege Question r 34u at (−30,−214), only when available.
- Cooldown = dark pie sweep; seconds in the middle; gold dots under the button = skill level; 🔒 when the ultimate is locked; a small gold + button at the top left of a skill button when it can be upgraded.
- Joystick: appears where the finger touches on the left 60% of the screen, radius 58u, knob 26u in the hero colour; when idle it is shown faded at the bottom left.

Keyboard: WASD/arrows move, J/Space attack, Q E R (or 1 2 3) skills, Shift/Ctrl+Q/E/R upgrade a skill, F spell, G Siege Question, B recall, I shop, P/Esc pause. The game pauses automatically when the tab is hidden.

---

## 14. Shop

Sheet "Toko 🪙 N", text "Beli sampai 6 item. Game berhenti selama toko dibuka.", a 6-slot bag row, 2-column grid:
- **Ramuan Nyawa (Health Potion)** 🧪 90 coins: instantly +40% max HP, uses no slot, can be bought repeatedly (disabled at full HP).
- Pedang Pensil 🗡 300 (+22 attack) · Sepatu Lari 👟 250 (+40 speed) · Jaket Kertas 🧥 300 (+350 HP) · Jam Pasir ⏳ 400 (skill cooldown −15%) · Tongkat Bintang 🪄 450 (skills +30%) · Perisai Buku 📘 400 (damage taken −15%) · Daun Penawar 🍃 450 (heal 12% of damage dealt) · Busur Cepat 🏹 350 (attack speed +20%).
Owned items show ✓ on light green. A stats line: Attack · HP x/y · Speed. Button "Kembali bertarung ▸".

---

## 15. End screen = learning report

- Win (1.5 s after the core falls): tilted green "MENANG!" stamp, 3 stars (1 + [knocked out ≤ 1] + [accuracy ≥ 75%]), title "Inti Istana Comot hancur! Arena milik Clawd.", confetti, win sound.
- Lose: red "KALAH" stamp, "Inti Markas Clawd hancur", tips.
- "Laporan belajar": 8 stat boxes — correct a/b, accuracy %, longest combo, giant pencils, time, towers x/y, minions defeated, Clawd level.
- "Akurasi per topik": bars (green ≥75%, gold ≥50%, orange <50%) with "correct/total · %".
- "Soal yang perlu diulang": up to 5 wrong questions (the full question with the answer underlined, "kamu jawab X", explanation box); if all correct: "Semua soal benar — hebat!".
- Score = `kills×20 + towers×300 + monsters×80 + correct×150 + comboBlasts×200 + (won ? 1500 + max(0, 1200 − seconds)×2 : 0)`; "· skor terbaik baru!" on a new record.
- Buttons: "Main lagi", "Latihan soal yang salah" (opens the Practice tab with those questions), "Menu".

---

## 16. Pause and sound

Pause: sheet "Jeda / Minion kedua tim beristirahat sebentar." with "Lanjut ▸" and "Menu". Sounds via Web Audio (no files): shot, slash, hit, pop, zap, boom, dash, spin, thunder, ultimate, star, slam, level-up, coin, hurt, heal, correct (5 rising notes), wrong, win, lose, tap, blink, combo; a 126 bpm arpeggio background loop (4 chords) that stops during questions/pause. Mute is saved in `arena-pro-mute`.

---

## 17. Test hook `window.__game`

`keadaan` ('menu'|'main'|'soalan'|'kedai'|'jeda'|'menang'|'kalah'), `info` (mode, t, hp, max, lvl, sl, pts, cd, emas, item, menara, menaraTotal, bunuh, monster, buff, inti, intiPerisai, mati, kombo, komboMaks, ledakan, gempurCd, gempurSiap, soal, benar, tersembunyi, semak, minions per type), `soalIni` (teks, jawab, ty, lv, why, penjelasan), `langkah(seconds)` (simulate at 30 fps), `gerak(x,y)`, `ke(x,y)`, `skill(n, direct)`, `spell()`, `naik(n)`, `beli(id)`, `kedai()`, `tutupKedai()`, `balik()`, `xp(n)`, `emas(n)`, `soalan()`, `jawabUji(correct)`, `lanjut()`, `runtuh(n)`, `gempur()`, `hancurInti()`, `hancurKita()`, `cedera(n)`, `monster(type)`, `semak(i)`.

---

## 18. Checklist before finishing

Test it yourself in a browser at **390×844** and **1280×800**, with no console errors:
1. The menu is tidy (hero cards not clipped); switching Indonesian ↔ Malay changes all text.
2. 1-lane and 3-lane modes start; minions spawn, walk and fight.
3. All six heroes: Q, E, R work and go on cooldown.
4. The Siege Question appears near towers; a correct answer drops the pencil and removes HP.
5. Wrong answers show the explanation + Next; Maths Ultimate 150%/70%.
6. 3 correct in a row = Combo Blast; the knock-out question revives the hero.
7. Bushes hide the hero; shop & potion work.
8. The shield chain is correct; win and lose show the learning report; Play again and Practise wrong questions work.
9. Learn, Practice and Progress tabs work and persist after reloading the page.
10. Build the `netlify/` folder + zip, run `python3 -m http.server` inside it and make sure the game opens at `http://localhost:8000/`.
