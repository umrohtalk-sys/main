---
name: project-pinball-clawd
description: "Pinball Clawd — pinball 3D meja Angka (tanpa cerita) + soal di 4 tembakan (orbit/ramp), dot-matrix, multiball; LIVE game-preview 23 Nov 2026"
metadata:
  type: project
---

Dibuat 23 Nov 2026: user minta remake gaya Turbo Clawd (Hot Wheels arena) tapi pinball, tanpa storytelling, tetap ada matematika, cek 3 kali sebelum push.
- Folder `game-pinball-clawd-20261123-2114-meja-angka-matematika/` (three.js lokal, js/00..09 + 99, BACA-SAYA.md, PROMPT.md). launch.json `pinball-clawd` port 8991.
- Fisika 2D murni (04-meja, 05-fisika, 06-aturan, 07-bot tanpa DOM) → bisa diuji di Node: `uji/game-node.mjs`, `kalibrasi.mjs` (posisi bola di flipper → tembakan; BIDIK di 07-bot). Render 3D di 08-render.
- Soal: 4 pilihan di orbit kiri, ramp kiri, ramp kanan, orbit kanan. Drop target → Kotak Clawd → 2 kunci = multiball (jackpot). ID + BM.
- Uji: `node uji/uji.mjs <url> <putaran>` 29 cek (desktop, fisika 60 s, HP sentuh). Panel browser menjeda otomatis karena blur jendela → pakai uji headless.
- LIVE https://preview.edugamelabs.com/kertas-tinta/games/pinball-clawd/ (game-preview 1f22b53, kartu kat "besar"). Zip ~/Downloads/pinball-clawd-20261123-2156-meja-angka-netlify.zip. Belum dipasang ke Prompt Generator.
Lihat [[project-turbo-clawd]], [[project-prompt-generator-game]].
