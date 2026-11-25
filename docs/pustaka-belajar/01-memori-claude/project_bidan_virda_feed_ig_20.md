---
name: project_bidan_virda_feed_ig_20
description: 20 feed IG Bidan Virda (16 cover tunggal 4:5 + 4 video kotak); TERKINI ~/Downloads/bidan-virda-feed-ig-20261107-2059-cover-satu-tema
metadata:
  type: project
---
7 Nov 2026. User minta 20 feed IG pengisi grid. Awalnya direncanakan carousel ±55 slide → user koreksi: **cukup cover saja, 1 gambar per postingan** (16 cover + 4 video). Folder: slides/ PNG 1080x1350, video/ MP4 1080x1080 (video potret 562x1000 di kartu kiri + panel teks kanan, teks A→B di tengah durasi; lanskap kartu 1000x563), sampul-video/ 4:5 untuk grid 3:4, index.html galeri feed.
Mesin: _build/slides.js (C = cover, V = overlay, POST = urutan + caption) → shoot.py (Playwright channel chrome) → video.py (ffmpeg, musik-ukulele 0.55, suara asli dibuang).
**Why:** feed IG harus rapi; video kotak terpotong di grid profil 3:4, jadi perlu sampul 4:5.
**How to apply:** untuk konten feed berikutnya, tanya dulu apakah carousel atau cover tunggal; salin folder ini. Lihat [[project_bidan_virda_carousel_ig]].

Revisi 7 Nov 21:00 (folder -2059-cover-satu-tema): user minta gaya COVER IG berdiri sendiri (judul besar + foto, teks sedikit, bukan penjelasan/daftar harga panjang) dan SATU TEMA warna putih · krem · hijau saja — dilarang pink/ungu/kuning/biru. 3 layout di slides.js: coverA (foto atas), coverB (judul kiri + foto lengkung kanan), coverC (tipografi tengah + maskot, latar hijau tua).
