---
name: project-prompt-generator-demo
description: "Galeri Prompt versi demo (tanpa generator) 3 bahasa, repo auzanhasfi/prompt-generator-demo- (nama repo berakhiran tanda hubung)"
metadata:
  node_type: memory
  type: project
  originSessionId: fc61299d-b4da-4d14-9710-e43370b7bdb4
  modified: 2026-11-09T13:25:15.767Z
---

Dibuat 23 Okt 2026. Folder ~/Downloads/prompt-generator-demo-20261023-1642-galeri-3bahasa, repo git@github.com:auzanhasfi/prompt-generator-demo-.git (perhatikan "-" di akhir nama), commit 014499a. Belum ada domain/Netlify.
- 12 prompt (±1/5 dari 56 contoh ber-preview): 9 game + 3 app (grammo, cakap-v1, kido-koda). Prompt = prompt DETAIL dari js/detail-{id,ms,en}.js [[project-prompt-generator-game]]; preview ke preview.edugamelabs.com.
- Data dijana `node _build/jana.js <prompt-generator> <game-preview>` → js/data-<lg>.js + img/. Pilihan di PILIH.
- Tombol Pro (atas, melayang HP, kartu terkunci "100+", kotak Demo vs Pro): PRO_LINK di js/i18n.js — id→lpindo.edugamelabs.com, ms & en→lpmalay.edugamelabs.com.
- Localhost: launch.json "prompt-generator-demo" (node _build/serve.mjs, port 8930; python http.server gagal di sandbox karena getcwd).

**Why:** user ingin versi demo/galeri yang bisa dibagikan untuk menjual versi Pro.
**How to apply:** ubah daftar contoh lewat PILIH lalu jana ulang; jangan tambahkan generator AI ke demo.

## Cara pakai + fitur Pro (25 Okt 2026, 18:46) — TERKINI, SUDAH PUSH (commit db12586)
Folder `~/Downloads/prompt-generator-demo-20261025-1846-cara-pakai-fitur-pro` (repo sama). Di bawah galeri: bagian "Cara pakai prompt gratis" (animasi 4 tahap pilih kartu → salin → tempel ke AI → jadi; kartu & potongan prompt diambil dari DATA bahasa aktif, Arena Clawd diutamakan) lalu "Fitur Pro" (9 kartu beranimasi: 100+ prompt, ubah topik/jenjang/bahasa, dua mode, custom AI, kirim ke AI, template LP, riwayat, game Clawd, panduan), lalu kotak Demo vs Pro lama. File: css/fitur.css, js/demo.js (juga reveal-on-scroll), teks di akhir js/i18n.js (Object.assign UI.id/ms/en), img/pro/. Localhost: launch.json "demo-pro-lokal" port 8931.
- 26 Okt 2026: demo LIVE di https://demoprompt.edugamelabs.com (Netlify calm-cuchufli-f91bd8, auto-deploy dari GitHub main).

## Hook gratis + ringkas Pro (28 Okt 2026, 19:53) — sudah push lewat folder -2010
Folder `~/Downloads/prompt-generator-demo-20261028-1953-hook-gratis-pro` (repo sama, salinan dari -1846). Hero: "Cara tercepat membuat apps dan game? Pakai prompt." + "Ini saya berikan gratis untuk kalian semua" + "Lihat hasilnya dulu, lalu salin prompt-nya" + strip gelap ringkas Pro (Prompt Generator, 100+ prompt, ubah topik/jenjang/bahasa, kirim ke AI). Teks di akhir js/i18n.js (Object.assign 3 bahasa), CSS di akhir css/app.css. Localhost "demo-hook-gratis" port 8932. Live demoprompt auto-deploy dari GitHub main → perlu commit + push.

## lptools + URL bahasa (28 Okt 2026, 20:10) — TERKINI, SUDAH PUSH (commit d55f4e7), LIVE
Folder `~/Downloads/prompt-generator-demo-20261028-2010-lptools-url-bahasa`. PRO_LINK: id→lptoolsid.edugamelabs.com, ms & en→lptoolsmy.edugamelabs.com. Ganti bahasa mengubah URL ke /id, /ms, /en (history.replaceState di setLang; bahasa dibaca dari path dulu). `_redirects` menulis ulang /id|/ms|/en dan /xx/* ke root; serve.mjs lokal ikut. Localhost "demo-lptools-url" port 8933.

## Fokus Galeri Prompt (28 Okt 2026, 20:35) — SUDAH PUSH (commit 5c112b5), LIVE demoprompt
Folder `~/Downloads/prompt-generator-demo-20261028-2035-fokus-galeri`: demo = Galeri Prompt; Pro = Galeri Prompt lengkap + Prompt Generator (teks di blok terakhir js/i18n.js). Localhost "demo-fokus-galeri" port 8934.

## Liputan WTM (28 Okt 2026, 21:05) — TERKINI, SUDAH PUSH, LIVE
Folder `~/Downloads/prompt-generator-demo-20261028-2105-liputan-wtm`: seksyen #wtm setelah hero (kutipan, rincian siapa/apa/kenapa/bisa ditiru, angka suka IG 2.138/TikTok 776, link IG/TT/FB) lalu blok prompt Arena Clawd (potongan + salin/lihat penuh/main). File css/liputan.css, js/liputan.js (isiLiputan dipanggil dari render()), teks w*/wp* di akhir js/i18n.js, gambar img/wtm/.

## Laptop + HP interaktif (31 Okt 2026, 08:15) — TERKINI, SUDAH PUSH (commit caa50d0), LIVE
Folder `~/Downloads/prompt-generator-demo-20261031-0815-laptop-hp-interaktif`: hero `.steps` diganti meja laptop (Galeri Prompt 6 game → klik Salin → jendela AI → ⌘V → kode) + HP (gambar app + TENG!, klik HP = buka preview game). Sama dengan hero LP lptools [[project-lp-pg-wtm-checkout]]. File css/meja.css, js/meja.js (isiMeja dipanggil dari render()), teks mj* di akhir js/i18n.js, logo img/ai/. Localhost "demo-laptop-hp" port 8935. Aturan user: revisi hero ini dipasang di SEMUA (LP ID, LP MS, demo ID/MS/EN).

## Clarity + video atas (1 Nov 2026, 20:30) — TERKINI, PUSH de3efa3
Folder `~/Downloads/prompt-generator-demo-20261101-2030-clarity-video-atas`: Microsoft Clarity (xh6pboeonq) di head; video Shorts pindah tepat di bawah h1 (.hero-vid, teks tsCap); #testimoni tinggal teks; #wtm pindah ke paling bawah main.

## Best seller di Pro (9 Nov 2026, 20:21) — TERKINI, PUSH a393e6f, LIVE
Folder `~/Downloads/prompt-generator-demo-20261109-2021-best-seller-pro` (salinan -20261106-1847). Seksyen #terlaris setelah galeri: #1 Dunia Clawd (gaya Roblox), #2 Arena Clawd Pro (urutan dari user; "Claude Pro" di ucapan user = Arena Clawd Pro), lalu Mahkota Clawd, Clawd Kilat, JawiKu, BioLab 3D (dipilih Claude tanpa data penjualan, disetujui user). Semua kartu + tombol Akses Pro → PRO_LINK. File css/terlaris.css, img/terlaris/, teks tl* di akhir js/i18n.js, event Clarity terlaris_*. Localhost "demo-best-seller" port 9021.

## Testimoni video (31 Okt 2026, 09:40) — PUSH d7e4ac8
Folder `~/Downloads/prompt-generator-demo-20261031-0940-testimoni-video`: seksyen #testimoni sebelum #pro (Shorts ySk5FHJWbCA, css/testimoni.css, js/testimoni.js, teks ts* di akhir js/i18n.js, img/testimoni/). Tombol → PRO_LINK. Port 8936 "demo-testimoni".
