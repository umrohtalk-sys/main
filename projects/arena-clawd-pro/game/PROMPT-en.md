# Prompt: Arena Clawd Pro — single-player math MOBA (paper & ink style)

Build one HTML file (plain HTML + CSS + JavaScript, no libraries, no external images; every graphic drawn with Canvas 2D) called **Arena Clawd Pro**: an educational math MOBA for primary-school children (grades 1–6). The player controls one hero; the enemy is **only minions and towers** (no enemy heroes, no boss). Math questions are part of the gameplay, not a separate quiz. It must play well on a phone (touch, 390×844) and on desktop (keyboard).

## 1. Visual style
- "Paper & ink" theme: paper background `#efebe2`, cards `#faf8f2`, ink `#2e2620`, orange accent `#d8714f`, gold `#e2a93b`, enemy ink blue `#2c3e6b`. Wobbly outlines as if drawn with a pen (slightly jittered points), pen-scratch hatching inside shapes, paper grain texture.
- Google Fonts: Source Serif 4 (headings), Geist (UI), Caveat (handwriting, floating numbers, banners), IBM Plex Mono (small labels).
- Hero = "Clawd": an orange box body with ink outline, 4 short legs, 2 arms, square eyes. Each hero has its own color and accessory (pencil sword + cape, round shield + helmet, bow + headband, wizard hat + star staff, dark scarf + dagger, leaf crown + heart staff).
- Enemy = "Si Comot": a blue ink blob with two eyes and a jagged bottom edge. Ranged minions carry a purple staff, siege minions push a cannon, super minions are bigger and crowned.

## 2. Tabbed menu (Indonesian by default + a Malay language button)
- All text goes through a function `L(id, ms)`; the language choice is saved in localStorage. (For an English build, add a third language the same way.)
- Menu header: an animated mini-map preview canvas, the title "Arena Clawd" + a PRO badge, a one-sentence intro, and a handwritten note "the enemy is only minions & towers".
- **Play** tab: (1) choose one of 6 heroes (cards with hero drawing, role, 3 skill names), (2) choose a spell (Flash, Heal, Smite, Sprint, Shield), (3) arena mode 1 lane / 3 lanes, (4) question topic (Mixed, Addition, Subtraction, Multiplication, Division) and level (Easy grades 1–2, Medium grades 3–4, Hard grades 5–6), a "Start battle" button, best score, and 4 how-to-play boxes. Save choices in localStorage.
- **Learn** tab: 4 concept cards (add, subtract, multiply, divide): a one-sentence idea, an emoji visual example, 3 steps, a worked example (e.g. 34 + 25 → 30 + 20 = 50, 4 + 5 = 9 → 59), a tip, and a "Practice 5 questions" button.
- **Practice** tab: 10 questions with no timer and no enemies; every wrong answer shows the right answer + a step-by-step explanation + a Next button; a score summary at the end; a "Retry the questions I got wrong" button.
- **Progress** tab (localStorage): games played, wins, best score, overall accuracy, accuracy bar per topic, the last 8 wrong questions with explanations, buttons to practise wrong questions and to reset progress.

## 3. Map and modes
- 2000×2000 world, camera follows the hero, the map is painted once onto an offscreen canvas. Clawd base bottom-left, Comot Palace top-right, an ink river on the diagonal.
- **1-lane mode**: one diagonal middle lane; enemy towers tier 1/2/3 at 60%/72%/86% along the lane, our towers at 40%/28%/14%.
- **3-lane mode**: top, middle, bottom lanes; the enemy has 2 towers on each lane + 1 tier-3 tower in the middle (7 in total).
- Forest: trees placed randomly with a fixed seed but never covering lanes, the river, bases, monster camps, bushes, or the paths from camps to lanes.
- Jungle camps: Hermit Crab (heals 35% + speed), Red Beetle (burning-attack buff), Blue Snail (faster-skills buff), Ink Turtle (40% shield + super minions).
- **Bushes** (tall grass): a hero inside a bush is invisible to enemy minions and towers until 1.2 s after it attacks; inside a bush the hero does not auto-attack.

## 4. Towers, core and shield chain
- Towers shoot enemy minions first; enemy towers shoot the hero only when no minions are in range.
- Tier 2 is invulnerable until tier 1 on the same lane falls; tier 3 is invulnerable until one whole lane is cleared; the **Comot Palace Core** is invulnerable until tier 3 falls. Invulnerable buildings show a blue dome.
- Win = the Comot Palace Core is destroyed. Lose = our base core is destroyed (the same shield rules apply to our side).

## 5. Minions
- A wave every 28 s on every lane for both teams: 3 melee + 1 ranged; every 3rd wave adds a **siege minion** (slow, long range, 2.6× damage to buildings). **Super minions** (big HP) come from the Healer's ultimate, the Ink Turtle, and the Bonus Cannon quiz reward.
- Minions walk along the lane waypoints, stop to fight the nearest enemy, then continue. Enemies get slightly stronger each wave. Defeating minions gives XP and coins.

## 6. Heroes (6) — 3 skills each, ultimate unlocks at level 4, max level 15
1. **Warrior**: Pencil Charge (dash + slow), Spinning Top (area + heal + damage reduction), ult Earth Slam (leap, slam, stun).
2. **Shield** (tank, 1500 HP): Shield Bash (150 area in front, 0.8 s stun), Paper Wall (30% shield + 4 s damage reduction, nearby enemy minions are taunted to attack it), ult Giant Fortress (270 ring, 1.6 s stun).
3. **Archer** (ranged): Ink Arrow (pierces a line), Wind Step (dodge leap, next 3 attacks stronger), ult Arrow Rain.
4. **Mage**: Star Ball (explodes), Chain Lightning (jumps to 4 enemies), ult Star Rain.
5. **Shadow** (assassin, fast): Shadow Leap (dash to the nearest enemy; resets if that enemy dies), Twin Stab (2 hits), ult Shadow Dance (1.6 s untargetable, hits every enemy within 230 every 0.2 s).
6. **Healer** (support): Healing Light (heals self + allied minions), Guard Bubble (allied minions take −50% damage and deal +50% for 6 s), ult Call the Troops (3 super minions, 5 if the ultimate question is answered correctly).
- One skill point per level-up (a yellow + button above the skill button). Spells have their own cooldown. Recall to base (stand still 3 s) and fast healing at base.

## 7. Math questions inside the gameplay (the core of the game)
- **Siege Question**: a ⚡ button (key G) appears when the hero is near an enemy tower/core that is not invulnerable. Correct = a giant pencil drops, −18% tower HP (core −12%), ready again in 20 s; wrong = ready again in 12 s.
- **Math Ultimate**: pressing the ultimate shows a question one tier harder. Correct = ultimate at 150%; wrong = 70% (the ultimate still fires).
- **Flash question** every 60–75 s with a random reward: Pencil Power (+40% attack), Magic Shoes (speed), Paper Shield (½ damage), Full Heal, Coin Chest (+200), Bonus Cannon.
- **Knock-out question**: correct = respawn at base immediately.
- **Combo**: 3 correct answers in a row = Combo Blast (280 area explosion + 150 coins). The combo shows on the HUD as 3 dots.
- Each correct answer: +40 XP and +30 coins. The game pauses while a question is shown.
- **Question difficulty rises every 5 hero levels** (tier 0–2) within the chosen level: Easy = add/subtract up to 20 with emoji pictures, ×2/×5/×10; Medium = 2-digit numbers, tables 2–9, division; Hard = 3–4 digits, 2-digit × 2-digit, and missing-number questions (□ + 25 = 70).
- 3–4 big answer buttons (distractors ±1, ±2, ±10). Keys 1–4 on the keyboard.
- **Wrong answers are not punished harshly**: show the right answer + the steps (split tens and ones, repeated addition for multiplication, "find the number that times … gives …" for division, the inverse operation for missing numbers) + a "Check with the inverse" line, then a Next button.

## 8. HUD and controls
- Top-left mini-map (towers, minions, monsters, hero, camera box), hero name + level + XP bar, coins + Shop button, info bar with time / towers destroyed / minions defeated, combo dots, active buffs, the Comot Palace Core HP bar when near, handwritten banners for key events, floating damage numbers.
- Phone: a joystick appears wherever the finger touches on the left half; bottom right a big ATTACK button, 3 skills (Q E R) in an arc, spell (F), recall (B), ⚡ Siege Question. A dark sweep shows skill cooldown.
- Desktop: WASD/arrows, J/Space attack, Q E R, F, G, B, I shop, P pause.
- Pause and sound buttons top right; the game pauses automatically when the tab is hidden.

## 9. Shop
- 8 items (max 6 slots): Pencil Sword +22 attack, Running Shoes +40 speed, Paper Jacket +350 HP, Hourglass −15% skill cooldown, Star Wand +30% skill power, Book Shield −15% damage taken, Healing Leaf heals 12% of damage dealt, Quick Bow +20% attack speed. Plus a **Health Potion** (90 coins, +40% HP instantly, uses no slot). The game pauses while the shop is open.

## 10. End screen = learning report
- WIN/LOSE stamp, stars (win; knocked out ≤1 time; accuracy ≥75%), stats (correct answers, accuracy, longest combo, giant pencils, time, towers destroyed, minions defeated, level), accuracy bar per topic, the list of wrong questions + explanations, buttons Play again, Practise wrong questions, Menu. Save the best score and progress.

## 11. Sound and quality
- Sounds generated with Web Audio (no files): slash, shot, explosion, level up, coin, correct, wrong, simple background music; the mute button is saved in localStorage.
- Target 60 fps; cap particles and minions; no accidental page scrolling on touch (`touch-action: none` on the canvas); buttons at least 44 px; respect `prefers-reduced-motion` for paper animations.
- Provide a test hook `window.__game` (state, info, step(seconds), move, skill, buy, question, answerTest(correct), next, siege, destroy(n), destroyCore) so the game can be tested automatically.
- Before finishing, play it yourself at phone and desktop sizes: win, lose, every hero, both modes, right and wrong answers, practice and progress must all work with no console errors.
