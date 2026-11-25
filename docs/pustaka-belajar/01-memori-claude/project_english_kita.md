---
name: project-english-kita
description: App English Kita — game belajar Bahasa Inggris dwibahasa MS/ID untuk anak, live di english-kita.netlify.app
metadata:
  type: project
---

`english-kita/` — game kosakata Bahasa Inggris untuk anak Malaysia + Indonesia.
Live: <https://english-kita.netlify.app> (Netlify site `english-kita`, id `caaeb486-6f49-4982-a232-27f8f087d134`).

Struktur skrin diturunkan dari UI kit *Sains Kita*; maskot/ikon/tombol dari tiga sprite sheet SVG hasil
png2svg (latar aslinya dibuang supaya transparan), dan **seluruh palet app mengikuti warna maskot**
— putih + biru `#2E86C8` + sian `#5FD8F5`, emas hanya untuk reward.

**Why:** keputusan desain ini diminta eksplisit oleh user dan tidak terbaca dari kode saja.
**How to apply:** kalau menambah elemen UI, ambil dari sprite sheet di `assets/` (kelas `.sp` + `--x --y --w --h --k`)
sebelum menggambar bentuk CSS baru; jangan ganti emoji kosakata (🐱🐘) — itu materi ajar, bukan hiasan.
Dua bahasa diatur `S.loc` ('ms'/'id') + `i18n.js`; UI kit 12 layar per bahasa ada di `ui-kit/`
(digenerate ulang lewat `ui-kit/build_kit.py`). Lihat [[reference-netlify-deploy-mcp]].
