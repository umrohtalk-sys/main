---
name: project-gemi-app-belajar
description: App belajar gemi (folder gemi-app-20260912-1947-modul-baru-brandkit) — 22 modul BM/ID, kandungan dijana oleh _build/jana-gemi.py
metadata:
  type: project
---
Dibina 2026-09-13 dengan menyalin [[project-cikgu-pemula-redesign-ui-kit]] dan menjenamakannya
sebagai **gemi**. Folder: `gemi-app-20260912-1947-modul-baru-brandkit/`.
Pratonton Artifact: https://claude.ai/code/artifact/f34957f7-d5d9-41e0-b039-2dae27740275

**Kandungan:** 22 modul · 235 pelajaran · 88 soalan · 43 bahagian panduan, dalam 3 trek
(TREK dalam js/i18n2.js): Praktik Gemini 01–11 (sedia ada) · Asas AI 12–19 (GEMI Fundamentals)
· Lanjutan 20–22 (agentic, ekosistem/MCP, etika & privasi). Panduan tambah: The Art of Stealing
(12 bahagian) + Sentiasa Kemas Kini (3).

**Paip kandungan:** `python3 _build/jana-gemi.py` (dari folder app) menjana `js/data-gemi.js`
daripada tiga fail dalam `_sumber/`. Skrip itu juga menyelaraskan rujukan silang materi asal
(Modul 01-11 masterclass → modul 12–19 app ini, dsb) — lihat senarai TUKAR dalam skrip.
Jangan sunting data-gemi.js atau data-materi.js dengan tangan.

**Keputusan penting:** user mahu APP ikut [[project-gemi-brand-kit]] (bukan lagi Manrope/#1A73E8):
Plus Jakarta Sans, #1E60FF/#3B82FF, dakwat #0B0B0B, corak bentuk rata dalam `js/pola.js`
(2–4 bentuk, sudut sahaja, `zon:'atas'` supaya tidak menindih teks), warna aksen per modul
(MOD_WARNA). Maskot 44 pose kekal; setiap blok penjelasan dapat pose berbeza.
Pelajaran kini ada sub-bahagian bernombor + chip "Dalam pelajaran ini" (blok jenis `sub`).

**Perangkap:** Modul 12–19 dan The Art of Stealing masih teks bahasa Indonesia (sumber asal) —
app tunjuk chip "Kandungan asal bahasa Indonesia" bila mod BM. Terjemahan BM belum dibuat.
Modul 12–19 tiada kuiz; lencananya terbuka bila semua pelajaran selesai (modLulus()).
Naikkan VERSI dalam sw.js selepas sebarang perubahan, dan kosongkan SW semasa menguji.
