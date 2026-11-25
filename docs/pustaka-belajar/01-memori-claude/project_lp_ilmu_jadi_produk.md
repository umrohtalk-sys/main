---
name: project-lp-ilmu-jadi-produk
description: "lpindo & lpmalay versi \"Punya ilmu mengajar? Jadikan produk digital\" — LIVE 15 Okt 2026, folder lp-edugamelabs-{id,ms}-20261015-1949-ilmu-jadi-produk"
metadata:
  node_type: memory
  type: project
  originSessionId: 909fdcc9-6e51-4783-be5d-2073a3fcd6b3
  modified: 2026-11-01T13:27:52.654Z
---

2026-10-15: hero lpindo/lpmalay diganti copywriting user "Punya Ilmu Mengajar? Jadikan Produk Digital yang Bisa Dijual" (BM: "Ada Ilmu Mengajar?…"). Gaya live tidak diubah; ditambah section animasi #manfaat (bantu mengajar / murid paham / bisa dijual), #buat (app/game/worksheet), #fundamental (stepper 6 langkah), #jual (garis waktu + mock halaman jualan, isi dari section Produk Laku/Laris). Banding "AI slop" dipindah ke bawah jual. Materi dijana ulang dari app terbaru -20260929-1911 (ID 54 modul/5 section, BM 30 modul/4 section).

Jana: `node _sumber/rakit.mjs id|ms` (basis `_sumber/asli-live.html` = unduhan live sebelumnya; teks di `teks.mjs`, gerak di `ij.css`/`ij.js`) → `site/`. LIVE deploy ID 6ad0cf84965dbe10626fce26, BM 6ad0cfb54819ef0b34ec2422. Preview launch.json lp-ilmu-produk-id 8873 / -ms 8874.

1 Nov 2026 — TERKINI, LIVE: folder `lp-edugamelabs-{id,ms}-20261101-2030-clarity-video-atas` (blok "l. REVISI 1 Nov" di rakit.mjs): Clarity xh6pboeonq + video Shorts ySk5FHJWbCA tepat di bawah h1 (.ij-vid). Site ID Netlify: lpindo 93707aa2-4f08-47f9-a8ad-36942f620406, lpmalay 60e78d2c-6f13-41ad-906b-0bfd46e05e86. LP ini tidak punya seksyen WTM. Live kini berbeda dari asli-live.html; rakit tetap jana dari basis itu.

**Why:** user mahu fokus fundamental bina app + cara jual, lebih informatif & bermotion. 
**How to apply:** awas `String.replace` dengan teks berisi `$$` — guna fungsi replacer. Tab baru jangan pakai kelas `.trek-tab` (JS live mengikat semua `.trek-tab` jadi satu kumpulan). Lihat [[project-masterclass-ai-lp]].
