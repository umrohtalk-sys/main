---
name: project-catur-ajaib-clawd
description: "Auto-battler gaya Magic Chess: Go Go seri Clawd + soal matematika, folder -20261027-0539, dipasang ke game-preview & prompt-generator"
metadata:
  node_type: memory
  type: project
  originSessionId: 6fa7bae5-361c-4c0f-90dd-4876d8982530
  modified: 2026-10-26T23:05:53.634Z
---

Dibuat 27 Okt 2026 atas permintaan user ("persis Magic Chess Mobile Legends, ada soal matematika; output ke game preview + prompt ke prompt generator; cek 3 kali sebelum publish"). Lanjutan [[project-arena-clawd]].
- Folder `game-catur-ajaib-clawd-20261027-0539-magic-chess-matematika/` (index.html + css/dasar.css, papan.css + js/00..13 + 99, ID default + MS). launch.json `catur-ajaib-clawd` port 8970. Zip ~/Downloads/...-netlify.zip.
- Alur: 8 komandan (7 AI Comot), kolam hero bersama, 20 hero biaya 1–5, 5 faksi + 5 peran (sinergi 2/4), ★ gabung 3, toko 5/segarkan 2/XP 4, bunga 1 per 10 emas, tahap 1 = 3 creep; tahap 2+ = PvP,PvP,Kotak Go Go,PvP,PvP,Creep+kartu Go Go. Mode Cepat (50 HP) / Penuh (100). Top 4 menang.
- Matematika: Soal Ajaib tiap persiapan (+2 emas), skill komandan via soal (salah 40%), kartu emas dikunci soal, Kotak Go Go benar = pilih pertama, Kesempatan Kedua, soal cerita ekonomi.
- Uji: uji/senario.json (main-uji skill studio-game-web), kait `__game.auto(on, ketepatan)` main otomatis sampai hasil; invarian kolam = 258 salinan.
- HUD memakai setH() (tulis innerHTML hanya bila berubah) — jangan kembali ke render ulang tiap 0,3 s karena ketukan tombol hilang.
- Dipasang: game-preview `kertas-tinta/games/catur-ajaib-clawd/` + kartu DATA; prompt-generator template KT `catur-ajaib-clawd` (besar, KW_TPL magic chess/auto chess sebelum ML, dipandu strategi, i18n MS/EN, DETAIL 3 bahasa ditulis agen Haiku).
