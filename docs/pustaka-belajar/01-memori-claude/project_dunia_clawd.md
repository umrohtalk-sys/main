---
name: project-dunia-clawd
description: "Dunia Clawd: remake Roblox Three.js gaya Arena Clawd Pro, platform + 4 dunia + soal matematik, BM/EN/ID, folder -20261102-0430, port 8986, LIVE di preview + Prompt Generator"
metadata:
  node_type: memory
  type: project
  originSessionId: 815dd6b0-4c3a-4842-ad39-41773f2b071f
  modified: 2026-11-01T23:12:53.237Z
---

Dibuat 2 Nov 2026. User minta "Roblox 3D" dengan Three.js, gaya "Cloud Pro" = [[project-arena-clawd]] Pro (biru malam + emas, ikon garis), soal matematik, BM + English (ID ikut sebab ayat awal sebut Indonesia), folder Netlify + localhost.

- Folder `game-dunia-clawd-20261102-0430-roblox-3d-ms-en-id/`, launch.json `dunia-clawd` port 8986. ES module + importmap ke js/vendor/three (r170 salinan Clawd Kilat). Ikut [[feedback-output-folder]].
- Fizik nilai Roblox: jalan 16, lompat 50, graviti 196.2, tinggi 5. Blok statik disatukan satu geometri warna verteks (js/06-bahan.js).
- Platform: masuk, Laman, butiran, memuat, Avatar (pratonton 3D), Kedai (CBux), Lencana, Kemajuan, Tetapan. HUD: sembang, senarai pemain, beg alat, menu Esc (R/L), badan pecah bila mati, joystik + lompat telefon.
- 4 dunia: Obby Angka (15 peringkat, jambatan & pintu jawapan), Menara Lava (8 tingkat acak, lif soal), Tycoon Kedai (12 barang), Simulator Bintang (4 zon, telur, lahir semula).
- Tiada nama/logo/aset Roblox dalam game. Pemain lain = bot bertanda AI; kiraan pemain & kunjungan simulasi.
- Uji: `node uji/uji.mjs <url> <putaran>` (semua skrin + 4 dunia), `node uji/peringkat.mjs <url> 0 14 70` (autopilot per peringkat Obby), `node uji/laluan.mjs <url> menara <saat>`.

**Why autopilot penting:** ia menjumpai bug sebenar yang lulus ujian biasa: `gerak` menangkap `let y` yang berubah (platform terbang), tangga bertindih mesin, blok di bawah pad soal.
**How to apply:** dalam closure `gerak` selalu salin ke const dulu. Revisi = folder bertarikh baharu ([[feedback-versioned-filenames]]).

## LIVE + video (2 Nov 2026)
- game-preview `kertas-tinta/games/dunia-clawd/` (39b8f59, 6b45fcd); prompt-generator template `dunia-clawd` (3d24721), prompt `tpl:dunia-clawd` BM sahaja (ditulis agen Haiku), kata kunci roblox/obby/tycoon/simulator. ID/EN jatuh ke prompt umum.
- Video 95s BM `video-dunia-clawd-promo-20261102-2150-potret-bm`: gameplay 3D sebenar, jam maya `_alat/jam.js`, pengarah `js/film.js`, tanpa SFX, musik-echoes pelan, Daud v4 Turbo 302 kredit, CTA komen NAK + Pro. Render `_alat/render.py mp4` tangkapan 13 menit.

## v2 12 dunia + Mod Guru (7–14 Nov 2026)
- Folder terkini `game-dunia-clawd-20261114-1921-soal-guru/` (launch.json `dunia-clawd-guru` port 8987); v2 tanpa guru di `-20261107-2048-blok-arena-banyak`.
- Tambahan: enjin voxel `js/15-blok-teras.js` + `16-blok.js` (Kreatif, Bertahan, Gua Permata, 10 Malam di Hutan), `17-kebun`, `18-kubu`, `19-bencana`, `20-pedang`; hadiah & misi harian, penapis genre. Mod guru = [[project-soal-guru-modul]].
- Uji: `node uji/asap.mjs <url> desktop|hp [id,id]` (semua dunia + ralat), `node uji/guru.mjs <url>` (16 semakan mod guru + pautan murid). Google Fonts kadang tergantung → skrip uji menyekat fonts.googleapis.
- 14 Nov: disalin ke game-preview `kertas-tinta/games/dunia-clawd/` & PG `contoh/…` (commit 3241483 / 79f38ea), prompt detail tpl:dunia-clawd ditambah bahagian VERSI 2 + MODE GURU 3 bahasa.
