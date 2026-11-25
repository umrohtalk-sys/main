---
name: project-ghanias-jahit-brand
description: "Brand identity Ghania's Jahit (penjahit wanita/muslimah, Mangli Jember, by Puput Yuniana) — pola sama Londrequ, logo-only"
metadata:
  type: project
---

Dibuat 2026-09-18 di `brandkit-ghanias-jahit-20260918-2030/`. Kanvas 12 papan: https://claude.ai/artifact/BjSBT8u3cj7Ec7gxmXV2GU. Pipeline sama dengan [[project-londrequ-express-brand]]: `brand.mjs` (token + simbol wanita bergaun digambar ulang jadi path SVG), `gen.mjs` (papan, tinggi diukur otomatis via Chrome headless), `jana-aset.mjs` (logo/ PNG telus + landing/ siap Netlify, belum deploy). Palet ikut logo: Merah Gaun #EE3A57, Marun #B81E3D, Hitam Rambut #2A2C33, aksen Benang Emas #C8A165. Font: Cormorant Garamond + Montserrat + Ms Madi (skrip mirip wordmark). Tagline "Pas. Rapi. Anggun." / "Dijahit untukmu, pas untukmu."

**Why:** user minta brand identity detail "seperti Londrequ Express" tapi warna sesuai logo Ghania's jahit; fokus pakaian wanita (muslimah & umum).
**How to apply:** nomor WA, alamat, jam, harga belum ada — isi konstanta di atas jana-aset.mjs. User menulis "Gania", logo "Ghania's" — dipakai versi logo.

Film promo 60s potret (2026-09-19): `video-ghanias-jahit-20260919-0419-potret/` (html + _render/render.mjs + out/ + siap-netlify/), artifact https://claude.ai/artifact/WxjY32KhRxn3EQV4FpkAts, mp4 di ~/Downloads/ghanias-jahit-film-60s-20260919-audio-keras.mp4. Mesin sama dengan film Londrequ, tapi serif Cormorant, transisi "kain jatuh", musik F mayor 120 BPM + bunyi gunting/mesin jahit. Konstanta WA_NO kosong → tombol "Chat WhatsApp"; isi lalu render ulang.
