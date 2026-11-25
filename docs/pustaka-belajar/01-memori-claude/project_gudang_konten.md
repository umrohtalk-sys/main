---
name: project-gudang-konten
description: Gudang Konten — bank konten (hook/copywriting/referensi per akun) + catatan, maskot Gemi & Si Bulat, simpan awan Netlify Blobs; LIVE gudang-konten-auzan.netlify.app (versi tanpa kunci)
metadata:
  type: project
---
2026-10-22: dibuat dari gaya LP `lp-edugamelabs-id-20261022-0317-prompt-generator-elegan` (token krem/oranye, Outfit/Plus Jakarta/DM Mono). Folder `bank-konten-catatan-20261022-0425-gemi-bulat/`: `site/` (Netlify, statis + fungsi) dan `_sumber/` (fungsi/data.src.mjs + node_modules @netlify/blobs).
LIVE https://gudang-konten-auzan.netlify.app (siteId 70824032-3687-4e62-acbb-7a1bf98411a3), deploy dari folder `site/` via MCP.

Simpan lintas PC: `/api/data` (Netlify Function v2 + Blobs store "bank-konten-catatan"). Kunci rahasia ≥6 karakter; simpan PERTAMA menetapkan kunci (hash SHA-256). Klien: GET → gabung per id (diubah terbaru menang, hapus = nisan 30 hari) → PUT. 20 cadangan riwayat/<waktu>. DELETE = reset total (tanpa tombol UI). Sudah diuji lalu di-reset 22 Okt — user belum pasang kunci.
**How to apply:** ubah fungsi di `_sumber/fungsi/data.src.mjs` lalu `bash _sumber/bangun.sh` (esbuild bundel → site/netlify/functions/data.mjs, supaya tanpa node_modules 25 MB). Maskot: Gemi SVG dari gemi-app-…-maskot-svg-baru (img/gemi), Si Bulat = js/bulat.js. Uji lokal: launch.json "gudang-konten" (serve-api.mjs scratchpad = tiruan API).

Revisi 2026-10-22 19:43 (TERKINI, LIVE): user minta TANPA kunci — cukup klik Simpan. Folder `bank-konten-catatan-20261022-1943-simpan-tanpa-kunci/`. /api/data kini terbuka (GET/PUT tanpa header, DELETE dibuang, 30 cadangan riwayat). Dialog atur tinggal: Simpan & ambil terbaru, simpan otomatis, cadangan JSON. Buka situs = otomatis tarik data awan.
**Why:** user mahu sesimple mungkin; risikonya siapa pun yang tahu URL boleh baca/ubah (sudah diberitahu).
