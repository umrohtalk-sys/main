---
name: project-lari-clawd
description: "Game lari ala Temple Run, Clawd dikejar Raja Comot, gerbang soal matematika pilih jalur; tema Arena Clawd; folder -20261022-1947, preview localhost 8831, belum deploy"
metadata:
  type: project
---

Dibuat 22 Okt 2026 atas permintaan user: "semirip mungkin dengan Temple Run", tema persis [[project-arena-clawd]], cukup preview localhost (hemat).
- Folder `game-lari-clawd-20261022-1947-temple-run-matematika/` (satu index.html, Canvas 2D 3D-semu: kamera di belakang Clawd, belok 90° di simpang L/R/T, pohon menutup ujung jalan).
- Rintangan: kayu/tembok (lompat), gapura Comot (luncur), Si Comot/batu di lajur (pindah), sungai (lompat), koin. Gerbang angka tiap ±140 unit: lari ke lajur jawapan betul → pengali + perisai 3 s; salah → Comot dekat.
- Hidup semula sekali dengan soal; UI ID (lalai) + BM; Mudah (+−) / Sedang (+−×÷); 3 hero Arena.
- Localhost: launch.json "lari-clawd" → node .claude/serve-lari-clawd.mjs (port 8831, atau 8832 bila terpakai). Kait ujian `__game.keGerbang/pilihJalur/keSimpang/paksaMati/jawabUji`; uji/senario.json lulus telefon+desktop.
- Belum zip/deploy.
- 23 Okt 2026: dipasang ke Prompt Generator (template kertas & tinta + prompt detail 3 bahasa) dan LIVE di preview.edugamelabs.com/kertas-tinta/games/<id>/ (repo game-preview).
