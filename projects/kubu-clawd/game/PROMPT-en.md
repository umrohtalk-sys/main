# Full prompt: Kubu Clawd

> Paste everything below into an AI coding agent (Claude, ChatGPT, Cursor, etc.). It describes the whole game — look, data, balance numbers, map, formulas, troop AI, maths questions, interface text and how to test it — so the result matches Kubu Clawd. The in-game text is Indonesian (default) and Malay via `L(id, ms)`; names below are given as Indonesian / Malay.

---

## 0. Task

Build the web game **Kubu Clawd**: a village strategy game like Clash of Clans (simplified) for learning maths, for primary-school children in grades 1–6. The player builds Clawd's village, collects **gold (emas)** and **magic ink (tinta)**, trains troops, then raids the villages of **Si Comot**. Maths questions are part of play: speeding up buildings, opening chests, casting spells and boosting loot. All art and names are original (do not use Supercell assets or character names).

Deliverables:
1. `game.html` — one file of HTML + CSS + plain JavaScript (ES5, IIFE with `'use strict'`), **no libraries, no external images**. All graphics drawn with Canvas 2D. The only external resource is Google Fonts.
2. A `netlify/` folder ready to upload: `index.html` (game.html wrapped in `<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">` + og:title/og:description/og:image meta), `sampul.jpg` (960×600), `netlify.toml` (publish ".", headers `X-Content-Type-Options: nosniff` and `X-Robots-Tag: noindex, nofollow`, no cache on `index.html`, redirect `/*` → `/index.html` status 200), `robots.txt` (`Disallow: /`), and a zip of that folder.
3. Full-screen like a phone game: comfortable on a portrait phone (390×844) and desktop (1280×800).

---

## 1. "Paper & ink" visual style

CSS tokens:
```
--paper #efebe2  --paper-2 #faf8f2  --ink #2e2620  --muted #6d665b  --line #d6d0c3
--accent #d8714f  --accent-dark #b4553a  --leaf #6fa83c  --leaf-dark #3f6b22  --gold #e2a93b  --gold-dark #a87516
--tinta #9b5cc4  --tinta-dark #6b3a8f  --gem #3fae7f  --enemy #2c3e6b  --danger #d9534a
```
Google Fonts: **Source Serif 4** (headings), **Geist** (UI), **Caveat** (handwriting: floating numbers, banners), **IBM Plex Mono** (small uppercase labels).

Ink helpers (required): seeded random `hsh(n)`; wobbly `inkCircle`; pen-stroke hatching `scratch` inside shapes; line star `star4`; `wobRect`; 128×128 paper-grain pattern. All buildings have 1.4–1.5 px ink outlines.

Characters:
- **Clawd** (`drawClawd`): orange box body with ink outline, 4 short legs that swing when running, 2 arms, square eyes. Variants: pencil sword + red cape (Penebas, swordsman), bow + headband (Pemanah, archer), dark green scarf + sack (Pencuri, thief), helmet + round shield + crown, large (Raksasa, giant), grey Clawd holding a blinking bomb (Pembobol Tembok, wall breaker), yellow hard hat + hammer (builder).
- **Si Comot**: a blue ink blob with two eyes (archer on enemy towers).

Enemy buildings use blue roofs/flags `#3d5288`; ours are orange/red.

---

## 2. Isometric projection and camera

- **36×36 tile** grid. Build area tiles 2–33 (`LO=2`, `HI=34`); the 2-tile rim is for deploying troops.
- Projection: `P(x,y) = ((x−y)×32, (x+y)×16)` (64×32 px tiles). Inverse `unP`.
- Building heights are multiplied by `HM = 1.35` inside `up(p,h)` so buildings look sturdy.
- The ground is painted once to an offscreen canvas: green `#c9d9a1` (enemy `#c4cf9f`) with a faint checkerboard, 5000 grass strokes, 70 small flowers, a thick ink diamond edge, a dashed build-area border, and 150 forest trees outside the diamond.
- Camera: 1-finger drag to pan, 2-finger pinch and mouse wheel to zoom (towards the cursor), + and − buttons. Initial zoom = `max(minZoom × 1.9; phone 0.62 / desktop 0.8)`.
- Draw order by depth `x + y + size`.

---

## 3. Buildings (`cost/time/hp[i]` = cost, time (seconds), HP for level i+1)

| id | Name (ID / MS) | Size | Pays | Cost | Time | HP | Other |
|---|---|---|---|---|---|---|---|
| balai | Balai Desa / Dewan Kampung (town hall) | 4 | gold | 0, 1000, 3000, 8000, 20000 | 0, 30, 90, 180, 300 | 450, 1600, 1850, 2100, 2400 | stores 1000/1500/2500/4000/6000 of each resource; max Lv 5 |
| tambang | Tambang Emas / Lombong Emas (gold mine) | 3 | ink | 150, 300, 700 | 10, 40, 90 | 400, 440, 480 | 60/120/180 per minute, holds 500/1000/1500 |
| pompa | Pompa Tinta / Pam Dakwat (ink pump) | 3 | gold | 150, 300, 700 | 10, 40, 90 | 400, 440, 480 | same as the mine |
| gudangE | Gudang Emas / Stor Emas (gold storage) | 3 | ink | 300, 750, 1500 | 15, 60, 120 | 400, 600, 800 | capacity 1500/3000/6000 |
| gudangT | Gudang Tinta / Stor Dakwat (ink storage) | 3 | gold | 300, 750, 1500 | 15, 60, 120 | 400, 600, 800 | capacity 1500/3000/6000 |
| pondok | Pondok Tukang (builder's hut) | 2 | gems | 250 | 0 | 250 | 1 builder; max Lv 1 |
| barak | Barak / Berek (barracks) | 3 | ink | 200, 800, 2000 | 10, 60, 120 | 250, 290, 330 | queue 20/25/30 |
| kemah | Kemah Pasukan / Khemah Pasukan (army camp) | 4 | ink | 250, 1000, 2500 | 15, 60, 150 | 250, 270, 290 | army capacity 20/30/40 |
| meriam | Meriam (cannon) | 3 | gold | 250, 1000, 3000 | 10, 60, 150 | 420, 470, 520 | dps 9/11/15, range 9, every 0.8 s |
| menara | Menara Pemanah (archer tower) | 3 | gold | 1000, 2000, 4000 | 20, 90, 180 | 380, 420, 460 | dps 11/15/19, range 10, every 1 s |
| mortir | Mortir / Mortar | 3 | gold | 3000, 6000, 10000 | 60, 150, 240 | 400, 450, 500 | damage 20/25/30 in a 1.5 area, range 4–11, every 5 s |
| tembok | Tembok (wall) | 1 | gold | 50, 200, 600 | 0 | 300, 500, 700 | wood/stone/gold colour |
| bom | Bom (bomb) | 1 | gold | 400, 1000, 1500 | 0, 10, 20 | – | hidden trap, damage 20/24/29 in a 1.5 area |

Max building level is 3, but level L ≥ 2 needs town hall ≥ L.

Count limits by town hall level (Lv 1→5): tambang 1,2,3,4,5 · pompa 1,2,3,4,5 · gudangE 1,1,2,2,2 · gudangT 1,1,2,2,2 · pondok 2,3,3,4,4 · barak 1,1,2,2,3 · kemah 1,1,2,2,3 · meriam 1,2,2,3,3 · menara 0,1,1,2,3 · mortir 0,0,1,1,2 · tembok 0,25,50,75,100 · bom 0,2,2,4,4.

Building drawings (isometric box `rbox` + details, on a darker grass pad):
- **Town hall**: cream box, height 26+4×Lv, red hatched hip roof (Lv 5 purple; enemy blue), wooden door, window, gold flag on top.
- **Gold mine**: brown base, wooden A-frame with a spinning wheel, pile of gold coins.
- **Ink pump**: stone base, cylinder tank of shiny purple ink, rocking pump lever, rising bubbles.
- **Gold storage**: iron-banded wooden crate, a coin pile on top that grows with how full it is.
- **Ink storage**: clear glass tank filled with purple ink up to its fill level.
- **Barracks**: house with a green gable roof (Lv 3 red) and a crossed-swords sign.
- **Army camp**: diamond-shaped clearing, 10 stones in a circle, burning campfire, ready troops standing in a ring.
- **Builder's hut**: small brown-roofed house with a builder Clawd in a yellow hard hat in front (gone while all builders are busy).
- **Cannon**: round stone base, thick dark barrel turning toward its target, wooden wheel.
- **Archer tower**: 4 wooden legs, a platform, an archer Clawd on top (enemy: Si Comot).
- **Mortar**: wide round base, short dark tube facing the target.
- **Wall**: small blocks that auto-connect to walls on their left and top.
- **Construction site**: cream ground + wooden scaffold + hammering builder + progress bar + time left.

---

## 4. The player's village

Start: 750 gold, 750 ink, 50 gems, 0 trophies. Town hall Lv 1 at (16,16), 2 huts at (13,16) & (20,18), mine (12,20), pump (20,12), barracks (16,22), camp (21,21), and 12 random trees/rocks near the edges.

- **Capacity** of gold/ink = town hall storage + total capacity of finished storages.
- **Production** of mines/pumps keeps running, also while the game is closed (applied when reopened, max 8 hours). A 🪙/🧪 bubble appears above when they hold ≥ 15; tap to collect. If storage is full: toast "Gudang penuh!".
- **Builders** = number of huts. Building/upgrading occupies 1 builder for its time. Speed up: 💎 = ceil(seconds left / 30), or **✏️ Question: correct = −60 seconds**.
- **Obstacles**: trees (100 ink, big 200) and rocks (100 gold), cleared in 5 seconds, giving 1–4 gems.
- **Question Chest (Peti Soal)**: appears every 90 seconds (max 2) on an empty tile; tap → question → correct = 3–6 gems or 150×hall-level gold/ink.
- **Missions** (top-left card, gem rewards): collect gold (10), build a cannon (10), open a chest (10), train 10 troops (15), win Campaign 1 (20), hall Lv 2 (25), place 10 walls (20), 3 stars (30), hall Lv 3 (40), conquer 5 villages (50), hall Lv 5 (100).
- **Placing buildings**: from the Shop a ghost building appears on the nearest empty tiles; drag to move; green tiles = ok, red = blocked; ✓ and ✕ buttons. Walls: after ✓ the next wall is ready next to the last one. Buildings can be moved (Pindah).
- Autosave every 5 seconds to localStorage `kubu-clawd-desa`.

Selected-building panel (bottom centre): name + LV, progress bar, buttons Info, Collect, Train, Upgrade (cost or the lock reason), Finish 💎, ✏️ Question −60 s, Move. The selected building gets a pulsing white outline; defenses show their range circle.

---

## 5. Troops

| id | Name (ID / MS) | Space | HP | DPS | Range | Speed (tiles/s) | Ink cost | Time | Target | Unlock |
|---|---|---|---|---|---|---|---|---|---|---|
| penebas | Penebas (swordsman) | 1 | 45 | 8 | 0.75 | 1.6 | 25 | 4 s | nearest building | Hall 1 |
| pemanah | Pemanah (archer) | 1 | 22 | 7 | 3.5 | 1.6 | 50 | 5 s | nearest, from range | Hall 1 |
| pencuri | Pencuri (thief) | 1 | 25 | 11 (2× on resources) | 0.75 | 2.6 | 25 | 5 s | mines, pumps, storages, hall | Hall 2 |
| raksasa | Raksasa / Gergasi (giant) | 5 | 300 | 11 | 1.1 | 1.1 | 250 | 15 s | defenses only | Hall 3 |
| pembobol | Pembobol Tembok / Pemecah Tembok (wall breaker) | 2 | 20 | 12 (40× on walls, 1.2 area) | 0.75 | 2.4 | 100 | 8 s | nearest wall, then explodes | Hall 3 |

- Training in the **barracks**: one queue with the barracks' total capacity; time runs × number of barracks; finished troops move to the camp if there is space. Tap a queued troop to cancel (ink refunded). **✏️ Question: correct = finish 1 troop now.**
- If the preferred targets are gone, troops switch to any building.

---

## 6. Si Comot villages (generator)

`genVillage(level 1–10, seed, lootGold, lootInk)` with seeded random (mulberry32):
- Enemy hall = `min(5, 1 + floor((level−1)/2))`. Building levels random around `1 + floor((level−1)/3)`, capped by each building's max level.
- Hall at (16,16). Core: all cannons, archer towers, mortars, storages within limits, placed on a spiral at radius 3.5–9 with a 1-tile gap.
- Walls: `min(limit, 20 + level×8)` pieces forming a ring around the core; if not enough, a tight ring around the hall only.
- Outside: mines & pumps (`min(limit, 1 + floor(level/3))` pairs), barracks, camp, 2 huts at radius 10–16.
- Bombs random inside the core area.
- **Loot**: 50% in storages, 30% in mines/pumps, 20% in the hall.
- **Comot Campaign**, 10 villages: Pondok Comot, Ladang Tinta, Kubu Kayu, Desa Berpagar, Lembah Meriam, Bukit Pemanah, Kota Mortir, Benteng Batu, Benteng Ganda, Istana Raja Comot. Starting loot `300 + i×350` of each resource, reduced each time it is taken. The next village unlocks once the previous one has ≥ 1 star.
- **Find Opponent (Cari Lawan)**: costs `20 × hall level` gold, level `hall×2 − 1 ± 1`, random loot `(200 + level×300) × 0.6–1.2`. A **"Cari lagi" (next)** button before deploying any troop.

---

## 7. Battle

- Timer **3:00**. Pick a troop card from the bottom tray, then tap or drag on the map (holding deploys 1 troop every 0.14 s).
- **Red zone**: tiles occupied by standing buildings or walls plus 1 tile around them. While a troop card is selected the red zone is shown as transparent red with a red edge; deploying there shows a toast and makes the zone flash.
- **Dijkstra pathfinding** (8 directions, no cutting building corners): other buildings are impassable; walls are passable at cost +7 (wall breaker +1), meaning troops must **hit the wall** first when it is in the way. Goal = an empty tile whose distance to the target's box ≤ range + 0.45. Paths are recomputed every 4 s and whenever a building or wall is destroyed.
- One attack per second (rage: 1.2×). Archers shoot arcing arrows. Wall breakers explode (1.2 area) and die.
- **Defenses**: cannon balls (12 tiles/s), tower arrows (16 tiles/s), mortar shells arcing for 1.3 s that explode in a 1.5 area and cannot fire under 4 tiles. Bombs explode 0.4 s after a troop enters radius 1.2.
- **Building HP** bars appear when damaged; destroyed buildings become rubble; loot drips out in proportion to the damage.
- **Percentage** = destroyed buildings excluding walls and traps. **Stars**: ≥ 50% · hall destroyed · 100%.
- The battle ends when time runs out, at 100% (0.8 s later), on the End button, or when all troops & spells are used and no troop is alive (1.5 s later).
- **Spells** (free each battle: Lightning 1 (2 if hall ≥ 4), Heal 1, Rage 1 if hall ≥ 2). Pick a spell card, tap a spot → a **question one tier harder** appears: correct = 100%, wrong = 50% (still cast).
  - Lightning: 3 strikes (0.22 s apart) within radius 2, each 140 × power to buildings within 1.3 tiles.
  - Heal: circle r 3 for 8 s, +30 × power HP per second.
  - Rage: circle r 3 for 8 s, damage × (1 + 0.6 × power) and faster movement.
- HUD: loot gained/available (top left), timer (top centre), stars + percent (top right), card tray (count, troop drawing), End/Home button, handwritten hint.

**Result**: WIN/LOSE stamp, 3 big stars, "N% destroyed · village name", gold & ink looted, trophies (win `+8 + stars×4 + floor(level/2)`, loss −4, never below 0), troops used. **✏️ Bonus Loot Question**: correct = loot ×1.5 (once). Home button: loot goes into storage (capped), used troops are gone, campaign stars and remaining loot are saved.

Leagues by trophies: Wood 0 · Bronze 100 · Silver 300 · Gold 600 · Crystal 1000.

---

## 8. Maths questions

Use the same question generator as Arena Clawd Pro: `mkQ(topic, level, tier)`, combined level `lv = min(9, levelIndex×3 + tier)`; number-range tables for addition, subtraction, multiplication and division for lv 0–9; missing-number (□) questions when lv ≥ 8; 3 choices at lv 0, otherwise 4 (distractors ±1, ±2, ±10, ±a/±b for multiplication, ±100/±20 when the answer ≥ 100); step-by-step explanations (split tens & ones, repeated addition, "find the number that times…", inverse operation, a "Check with the inverse" line).

- Base tier = `min(2, floor((hall level−1)/2))`; spells and bonus loot +1 (max 3).
- Question sheet: tag, title, reward box (icon + text), label "TOPIC · LEVEL · tier N", emoji visual (if any), big question, 3–4 big buttons (keys 1–4). Correct → confetti, "Benar! 🎉", closes after 1.1 s. Wrong → the wrong button turns red and shakes, the right one green, "Jawabannya X. Tidak apa-apa, lihat caranya:" + green explanation box + "Lanjut ▸" button. The battle pauses while a question is open.
- Every answer is recorded in localStorage `kubu-clawd-kemajuan` (correct/total per topic + last 8 wrong questions).

---

## 9. Interface

- **Title screen**: village picture, tag "Kertas & tinta · strategi desa matematika", title "Kubu Clawd", intro, 4 how-to boxes (Build, Collect, Attack, Questions), language buttons, "Mulai bermain ▸" / "Lanjutkan desaku ▸", note "Inspired by village strategy games like Clash of Clans. All art and names are original."
- **Village HUD**: top left = hall level badge + trophies + league, free/total builders + next job, mission card ("Ambil N 💎" button). Top right = gold and ink bars (filled to capacity, "maks N"), gems. Bottom left = big red "⚔ Serang!" button + army count. Bottom right = Troops (queue badge), Shop, Book. Middle right = +, −, 🔊.
- **Shop**: tabs Economy (mine, pump, gold storage, ink storage, hut), Defense (cannon, tower, mortar, wall, bomb), Army (barracks, camp); cards with a mini building drawing, cost, time, count/limit, "Butuh Balai Desa Lv N".
- **Troops**: capacity, ready army (picture chips), queue (tap to cancel), ✏️ question button, training cards (cost, time, space, HP, description, locked state).
- **Attack**: list of 10 campaign villages (stars, loot left, padlock) + "🔍 Cari lawan · 🪙 cost" button.
- **Book**: Learn (4 village-themed concept cards, e.g. "12 walls × 50 gold"), Practice (10 no-pressure questions + retry wrong ones), Progress (stats, accuracy bar per topic, wrong questions + explanations), Settings (topic, level, language, "Start a new village" with in-page confirmation).
- Indonesian (default) and Malay via `L(id, ms)`, saved in `kubu-clawd-lang`. Web Audio sounds (no files); music during battles; mute saved in `kubu-clawd-mute`.

---

## 10. Test hook `window.__game`

`keadaan` (judul/desa/tempur/hasil/soal), `info`, `tempur`, `soalIni`, `langkah(seconds)`, `maju(seconds)` (advances the village clock), `emas(n)`, `tinta(n)`, `permata(n)`, `taruh(type,x,y)`, `selesai()`, `pilih(type)`, `tingkatkan(type)`, `latih(type,n)`, `pasukanInstan(type,n)`, `serang(i)`, `cari()`, `turun(type,x,y,n)`, `bolehTurun(x,y)`, `mantra(type,x,y)`, `jawabUji(correct)`, `lanjut()`, `akhiri()`, `pulang()`, `peti()`, `kumpul()`, `kamera(x,y,zoom)`.

---

## 11. Checklist before finishing

Test at **390×844** and **1280×800** with no console errors:
1. Title screen, starting village, collect bubbles, missions can be claimed.
2. Shop → place → ✓, builders work, speed up with a question.
3. Train troops; a full camp pauses training.
4. Question chest right and wrong (explanation + Next).
5. The red zone rejects troops; troops hit walls when blocked; no troop gets stuck.
6. All ten campaign villages can be played to the end; stars, percent, loot, trophies are right.
7. Spells with questions, bonus loot, going home with the loot.
8. Malay, the Book, saves survive a page reload.
9. Build the `netlify/` folder + zip, run `python3 -m http.server` inside it and open `http://localhost:8000/`.
