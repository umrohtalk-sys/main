---
name: project-panduan-google-ai-cikgu
description: App BM "Panduan Google AI untuk Cikgu" — folder statik Netlify-ready, aset ikon+maskot dijana dari dua sumber berasingan
metadata:
  type: project
---

App belajar Bahasa Malaysia untuk cikgu tentang Google AI (Gemini, Gems, Spark,
NotebookLM, AI Studio). Folder `panduan-google-ai-cikgu-20260909-0238/`.
Dibina 2026-09-09 daripada UI kit `ui-kit-google-ai-redesign-20260907-1938`.

**Dua aset luar yang perlu diingat asalnya:**
- 50 ikon Google-edu diekstrak daripada Artifact "Ikon Google for Educator"
  (`ab301b92-31de-42b1-b185-7ad2e8dd79bd`) guna `seed-canvas.mjs --extract`,
  kemudian ditulis semula jadi `js/icons.js`.
- Enjin maskot ditranspil daripada `maskot-google-edu-20260908/gen-mascots.mjs`
  (50 bentuk x 22 ekspresi) jadi `js/mascot.js`, ditambah parameter warna ganti
  dan kawalan `MASKOT.blush` untuk nada dewasa.

**Keputusan reka bentuk yang tidak jelas dari kod:**
- Nada sengaja dewasa walaupun ada maskot: maskot maksimum 76px, blush .3 dan
  boleh dimatikan, maskot pada kepala modul dipaksa warna dakwat supaya tidak
  berlanggar dengan warna modul.
- Setiap poin penjelasan WAJIB ikon berbeza dalam satu pelajaran — ada ujian
  automatik untuk ini; jangan tambah poin tanpa menyemak semula.
- Saiz teks 3 aras melalui `fs()` dalam `js/ui.js`; semua px mesti lalu fungsi itu.

**Perangkap:** service worker menyimpan cache shell. Selepas mengubah mana-mana
fail dalam senarai SHELL, naikkan `VERSI` dalam `sw.js` — kalau tidak, perubahan
tidak kelihatan dan anda akan menyangka kod tidak berfungsi.

Berkait: [[feedback-netlify-ready-output]], [[feedback-versioned-filenames]]
