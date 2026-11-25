---
name: project-clawd-kilat
description: "Clawd Kilat — runner 3D 3 lajur ala Sonic Dash (three.js r170 lokal) + gerbang soal + bos Raja Comot, tema Arena Clawd Pro; folder -20261031-1001, localhost 8975, belum deploy"
metadata:
  node_type: memory
  type: project
  originSessionId: 7dd33961-4d6b-4667-b29d-dc7db5d1b872
  modified: 2026-10-31T04:06:20.285Z
---

Dibuat 31 Okt 2026: user minta game "seperti Sonic Dash" dengan referensi [[project-arena-clawd]] Pro, website referensi dulu ("ratusan referensi"), cek 3 kali, output folder Netlify + preview localhost.
- Folder `game-clawd-kilat-20261031-1001-lari-kilat-matematika/` (ES module + importmap ke js/vendor/three, file js/01..12 + 99; BACA-SAYA.md). launch.json `clawd-kilat` port 8975 (serve-dir.mjs).
- `referensi/` = website 161 referensi (60 tautan nyata hasil riset + 101 catatan desain → fitur), data di referensi/data.js. Tanpa nama/aset Sonic di game.
- Mekanik: koin bintang → meter KILAT, pegas, papan percepat, magnet/perisai, Si Comot (lompat/guling hancur), gerbang angka 3 lajur, bos Raja Comot tiap 1200 m (bom + bola jawaban, 3 pukulan) → zona Lembah Hijau/Pantai Senja/Kota Tinta. 7 hero Arena dengan pasif lari; Nini punya kucing Mochi.
- Uji: `node uji/uji.mjs http://localhost:8975 <putaran>` (Chrome headless + bot.js, 25 cek; harus grafik ringan karena swiftshader lambat). Putaran 4 & 5 lulus 25/25.
- Zip ~/Downloads/clawd-kilat-20261031-1106-netlify-siap-upload.zip; belum deploy.
