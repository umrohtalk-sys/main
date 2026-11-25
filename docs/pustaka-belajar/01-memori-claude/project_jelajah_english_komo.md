---
name: project-jelajah-english-komo
description: Game edukasi "Jelajah English" (mascot Komo) — folder app, sumber design system, dan site Netlify tujuannya
metadata:
  type: project
---

Per 31 Agustus 2026: app "Jelajah English — Petualangan Komo Keliling Nusantara" (game edukasi Bahasa Inggris TK–SD 6) dibangun di `app matematika/jelajah-english-komo-app-20260831-v1/` — static, tanpa build, vanilla JS.

Sumber desain wajib untuk brand ini ada di `~/Downloads/Komo Game Kit Sprites/`:
- `Jelajah English UI Kit.dc.html` → sumber WARNA + tipografi + radius (green #3DAF4F, dark #258B3D, Baloo 2 + Nunito).
- `Komo Game Kit.dc.html` → sumber POLA UI/UX + tata letak saja, bukan warnanya (palet kit itu olive/cream, jangan dipakai).
- `assets/komo-*.png` → 20 pose mascot Komo; `peta-nusantara.png` → ilustrasi peta.

Isi materi (v2, 1 Sep 2026) = kurikulum **CAKAP** (app lain milik user, `cakap-id-sd-20260829-v1`): 6 unit → 6 pulau, 24 pelajaran → 24 level, 72 kosakata, 78 soal kuis, 24 latihan ucapan. Semua soal kuis ada catatan "kalau benar" dan penjelasan "kalau salah" yang ditampilkan di panel feedback.

Sejak v2.1 (11 Sep 2026) ada login sederhana: username murid bebas + satu password umum di `js/data.js` → `LOGIN.password` (awal: `jelajah123`). Progres per murid di localStorage perangkat itu saja.

Live di Netlify site `effervescent-cucurucho-bf5ba3` (siteId `1d010bd9-6d0f-494c-b910-d0b08dd6a648`).

**Why:** dua kit itu punya palet berbeda, dan gampang keliru mengambil warna dari Komo Game Kit.
**How to apply:** kalau diminta lanjut/revisi app ini, ambil warna dari Jelajah English UI Kit, layout dari Komo Game Kit, dan deploy ke site Netlify di atas. Lihat [[feedback-netlify-ready-output]] dan [[feedback-versioned-filenames]].
