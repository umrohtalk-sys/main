---
name: project_gemi_prompt_library
description: App web GEMI Prompt Library — 100 prompt, live di gemi-prompt-library.netlify.app
metadata:
  type: project
---

Folder `gemi-prompt-library-20260915-1050/` (2 MB, statik, tanpa build). Live: https://gemi-prompt-library.netlify.app · Netlify siteId `fe139e9e-976d-42a6-a76d-1d7a806100f3`.

SPA hash-route satu fail `index.html` + `js/data.js` (100 prompt, 10 kategori, 8 pelajaran, 10 pencapaian, meta pembolehubah `VARS`), `js/icons.js` (43 ikon + `logoMark`), `js/app.js` (penghala, carian, Prompt Customizer, XP/streak, koleksi, onboarding). Kemajuan di localStorage kunci `gemi_prompt_library_v1`.

Token brand disalin terus daripada [[project_gemi_brand_kit]] (`brandkit-gemi-20260911-2130-lengkap/gen.mjs`): #1E60FF / #3B82FF / #0B2559, Plus Jakarta Sans + JetBrains Mono. Maskot daripada `maskot-gemi-hd-20260915-0140/` — `kit/` (44 pose) ke `img/maskot/`, dua pose HD sahaja (`hero`, `point`) ke `img/hd/`.

**Why:** semua skrin baharu mesti ambil nilai dari fail `gen.mjs` itu, bukan warna baharu.
**How to apply:** nak tambah prompt → sunting `js/data.js` sahaja; nak tambah kategori → pastikan `ikon:` sepadan dengan kunci dalam `IK` (`js/icons.js`) — pernah rosak sebab guna 'book'/'camera' sedangkan kuncinya 'buku'/'kamera'. Deploy semula: jalankan perintah `npx @netlify/mcp` dari dalam folder app (lihat [[reference_netlify_deploy_mcp]]).
