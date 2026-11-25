---
name: project-soal-guru-modul
description: Modul bersama js/soal-guru.js + css/soal-guru.css — guru tulis/tampal soalan mapel apa saja, pautan murid #soal=, PIN, laporan; dipasang di Dunia Clawd & Arena Clawd Pro
metadata:
  type: project
---

Dibuat 14 Nov 2026 atas permintaan user: game Clawd perlu "customizable untuk guru" — masukkan soalan & mata pelajaran sendiri semasa login.
- Sumber asal: salinan dalam setiap game (`js/soal-guru.js`, `css/soal-guru.css`), skrip biasa → `window.SoalGuru`. Tanpa pelayan: localStorage `soal-guru-v1` {mod: mtk|guru|campur, aktif, set[], stat, pin}.
- Editor: tab Soalan / Tampal pantas (baris `Soalan | betul | salah…` atau blok bertanda `*`) / Kongsi (pautan `#soal=` base64url, JSON, PIN) / Laporan (% betul tiap soalan).
- API: bahasa(l), guna(), ambil() → {custom, teks, opts, ans, penjelasan}, rekod(q, ok), buka({tab, selepas}), ringkas(), mod().
- Dipasang: [[project-dunia-clawd]] (buatSoal generik di 03-soal.js, barisSoal untuk papan 3D) dan [[project-arena-clawd]] Pro (soalBaru/samaJawab).

**Why:** user mahu guru boleh guna game untuk apa-apa mata pelajaran tanpa kod.
**How to apply:** untuk game Clawd lain, salin dua fail ini, muat sebelum skrip game, ganti penjana soalan dengan "guna()? ambil() : soalan matematik", dan bandingkan jawapan sebagai teks bila q.custom.
