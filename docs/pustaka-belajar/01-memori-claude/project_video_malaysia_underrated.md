---
name: project-video-malaysia-underrated
description: "Video potret EN ~73s \"Why Malaysia Is So Underrated\" — remake Shorts geografi, gaya 50/50 (peta berwarna rujukan + chip/stempel/CRT Singapura), suara Jarnathan v4 turbo, bendera Malaysia berkibar di cover"
metadata:
  node_type: memory
  type: project
  originSessionId: 43187510-c058-4786-9f6a-d8f9c9e7f48a
  modified: 2026-11-12T15:12:28.174Z
---

12 Nov 2026. Folder `video-malaysia-underrated-20261112-2159-dokumenter-en/` (disalin dari [[project-video-singapura-kaya]]). Copywriting dari takarir Shorts "Why Malaysia Is One of Asia's Most Underrated Countries" (45 s) + CTA comment VIDEO.
Gaya 50/50: dari rujukan = satelit berwarna, wilayah diisi warna (Semenanjung biru, Malaysia Timur merah, Borneo cyan), panah tangan, pin foto bulat, teks besar SOUTH CHINA SEA/BORNEO., bendera diisi ke bentuk wilayah; dari Singapura = chip diketik, stempel, slam beton, foto berbingkai, CTA komputer CRT, takarir per kata (sorot kuning emas).
Bendera Malaysia digambar kode (`drawFlag` di js/film.js, 14 jalur + bulan bintang 14 sudut, berkibar sinus). Adegan diikat ke frasa lewat `cx_('frasa')`, bukan nomor kata.
**Why:** user minta remake rujukan pakai kode video Singapura, tidak terlalu cepat, suara Jarnathan, bendera Malaysia di cover.
**How to apply:** suara Jarnathan - Confident and Versatile `c6SfcYrb2t09NHXiT80T` (voice library, bisa dipakai langsung), `eleven_v4_turbo` LANG en STAB .45 STYLE .25 → 1001 karakter = 200 kredit, 63.4 s (~150 kata/menit, sudah santai tanpa speed). Lalu suara_halus 0.9 0.6 + tambah_jeda.py → 71.4 s. Plate satelit baru: base z5, borneo z8, kina z10 (`_alat/ambil_satelit.py`); geo.js punya MYP/MYE (Semenanjung/Timur). Foto Commons via `_alat/ambil_foto.py` (tahan 429). Bug yang pernah terjadi: stroke setelah clip harus panggil ringsPath lagi (path tidak ikut save/restore).

Related: [[feedback-tempo-santai]] [[feedback-judul-cover-pembuka]] [[feedback-elevenlabs-v4-turbo-daud]]
