---
name: project-video-singapura-kaya
description: "Video potret EN 57s \"Why Singapore is so rich\" (Selat Melaka), gaya dokumenter Bom Atom di atas citra satelit asli, suara Alex Upbeat, CTA comment VIDEO"
metadata:
  node_type: memory
  type: project
  originSessionId: cb1240c6-a191-431a-9903-51d2cb986197
  modified: 2026-11-12T14:31:13.372Z
---

12 Nov 2026. Folder `video-singapura-kaya-20261112-2113-dokumenter-en/`. Remake copywriting Shorts "Why Singapore Is One of the Richest Countries on Earth" (Map & Myth) + gaya rujukan Bom Atom ([[feedback-judul-cover-pembuka]]): cover judul "WHY SINGAPORE / IS SO RICH" di frame 0, chip merah diketik, stempel, foto berbingkai, latar beton, takarir per kata merah, akhir komputer CRT + chip hijau COMMENT "VIDEO".
Aset gratis berlisensi: citra Sentinel-2 cloudless 2016 EOX (CC BY 4.0) lewat `_alat/ambil_satelit.py` (plate wide z6/strait z8/sg z11/chan z13), garis pantai Natural Earth + geoBoundaries SGP (ODbL) lewat `_alat/geo.py`, 5 foto Wikimedia Commons (kredit di `aset/foto/KREDIT.txt`). Mesin `js/film.js` Canvas 2D: drawMap lon/lat/zoom kontinu dengan plate dipudar, selat merah = koridor dikurangi daratan. `_alat/cek.py` = contact sheet frame.
**Why:** user minta video seperti rujukan, suara Inggris Alex, cek 3 kali sebelum render.
**How to apply:** suara Alex - Upbeat, Energetic and Clear `yl2ZDV1MzN4HbQJbMihG`. PENTING: `eleven_v4_turbo` mengabaikan `speed` (diuji: 1.0 dan 1.2 sama panjang) → pakai `MODEL=eleven_turbo_v2_5 SPEED=1.1 STAB=.4 STYLE=.3` (tts.py kini baca env MODEL/STAB/STYLE). 1072 karakter = 214 kredit, 56.2 s. Revisi santai 77.5 s: alex-v5 = speed 0.9 + tambah_jeda.py (lihat [[feedback-tempo-santai]]). "2.8 km" = lebar jalur Phillip Channel di selatan P. Satumu (1.1455N), bukan jarak antar-daratan. Angka $3B/$7B/$15B dari rujukan, diberi tag ESTIMATED.

Related: [[feedback-elevenlabs-v4-turbo-daud]] [[feedback-video-tidak-tersendat]] [[project-video-pendidikan-singapura]]
