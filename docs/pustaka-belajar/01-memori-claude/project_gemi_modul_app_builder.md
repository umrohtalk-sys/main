---
name: project-gemi-modul-app-builder
description: "gemi trek ke-5 \"App Builder\" (Modul 26–32, sumber BM) — folder -20260920-0926-modul-app-builder, belum deploy"
metadata:
  type: project
---

2026-09-20: user minta materi ~/Downloads/modul-baru/GEMI-APP-BUILDER-MS-20260920-1145 (7 fail BM: peta + 01–06) ditambah ke app gemi sebagai trek sendiri, minta hemat token output. Folder `gemi-app-20260920-0926-modul-app-builder/` (+ .zip), belum deploy/push. Output: folder Netlify sahaja (tiada artifact kali ini).

Trek ke-5 'builder' = Modul 26–32, 149 pelajaran, 70 soalan. Jumlah app: 32 modul · 468 pelajaran · 188 soalan. VERSI_APP 3.2, sw `gemi-v8-modul-app-builder-20260920-0926`.
Jana: `python3 _build/jana-app-builder.py` → js/data-builder.js. Skrip itu **memuat semula pengurai [[project-gemi-modul-bina-app]]** (_build/jana-bina-app.py) melalui importlib dan menindih TREK/LANG/VAR/POST/MODUL_META/KUIS; kuis di _build/kuis_builder.py (helper Q ms-dahulu + _POLA menyebar kedudukan jawapan).

**Why:** sumber BM, bukan ID — jadi `sumberLang:'ms'` dan chipID(teras.js) kini dua arah (cip ditunjuk bila sumberLang != bahasa pilihan; string langMS).
**How to apply:** ubah materi → edit _sumber/*.txt atau kuis_builder.py, jana semula, jalankan audit blok, naikkan VERSI sw.js. Jangan sunting js/data-builder.js.
