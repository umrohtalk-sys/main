---
name: project-lp-pg-wtm-checkout
description: "LP Prompt Generator ID+MS terkini dengan seksyen liputan WTM + halaman checkout ala Shopee (site-*/checkout/), folder -20261028-0137, belum deploy"
metadata:
  node_type: memory
  type: project
  originSessionId: d20c6d29-f649-4c0a-839d-e1432e39c9f0
  modified: 2026-11-01T13:27:52.678Z
---

28 Okt 2026: folder `lp-prompt-generator-20261028-0137-wtm-checkout-id-ms/` (lanjutan [[project-lp-pg-ide-jadi-app]]). Bangun: `python3 _sumber/jana.py` → `site-id/`, `site-ms/` (masing-masing ada `checkout/index.html`). Localhost: launch.json "lp-pg-wtm-checkout" port 8954.
- Seksyen `#liputan` setelah hero: Arena Clawd diliput WTM (What's The Meta, @wtmtoday, 26 Okt 2026). Link IG/TikTok/FB di dict `WTM` jana.py; logo & sampul di `aset/wtm/`.
- Checkout ala Shopee: 10 slide user di `aset/produk/`, rating 5.0, 100 penilaian, 100+ terjual, ulasan bergiliran. Template `_sumber/checkout.html|css|js`.
- ID beli = embed Mayar (`MAYAR` di jana.py, link sama dengan folder checkout-prompt-generator-20261028-0047-mayar-netlify). MS beli = WhatsApp RM 29 (Mayar hanya Rupiah).
- Ulasan di T[..]['ulasan'] adalah CONTOH buatan, user perlu ganti dengan ulasan asli sebelum deploy.

**Why:** user mahu bukti kepercayaan (liputan media) + halaman produk ala marketplace sebelum bayar.
**How to apply:** revisi seterusnya salin folder ini ke folder bertimestamp baru; jangan tampilkan domain generator.edugamelabs.com.

Revisi 28 Okt 01:50 → folder `lp-prompt-generator-20261028-0150-shopee-di-lp-id-ms/` (port 8955 "lp-pg-shopee-lp"): halaman checkout terpisah DIHAPUS, model Shopee langsung di seksyen #harga LP (`_sumber/shopee.css` di-scope `.shp`, `shopee.js`). Dibuang atas permintaan user: daftar game, seksyen "AI apa saja", seksyen generator "ide di luar galeri". Hero ide-box kini ke #harga. Seksyen #fundamental di bawah → lpindo.edugamelabs.com (ID) / lpmalay.edugamelabs.com (MS). MS beli = Kliqoo: isi `KLIQOO_MS` di jana.py (user akan beri link; selagi kosong → WhatsApp).

28 Okt 01:58: versi ID LIVE di https://prompt-generator-edukasi-id.netlify.app (siteId 863ee805-be27-447b-a37a-ff65ad5a4d50) dari folder `lp-prompt-generator-20261028-0157-live-id/site-id`. Ulasan tertulis disembunyikan (`TAMPIL_ULASAN = False` di jana.py) karena masih contoh; rating/100 penilaian/100+ terjual tetap. MS belum deploy (tunggu link Kliqoo).

28 Okt 19:58: versi MS LIVE di https://prompt-generator-edukasi-ms.netlify.app (siteId 21e7747d-02af-4561-b0ae-58fa316352b9) dari folder `lp-prompt-generator-20261028-1958-live-ms-kliqoo/site-ms`; beli → Kliqoo https://kliqoo.com/product/prompt-generator-for-education-game-and-education-apps-dvdxc. Versi ID kini di domain lptoolsid.edugamelabs.com (site prompt-generator-edukasi-id).

28 Okt 20:30: produk diposisikan sebagai **Prompt Generator + Galeri Prompt** (dua alat, satu akses). Folder `lp-prompt-generator-20261028-2030-galeri-generator-id-ms/` (blok revisi di akhir jana.py sebelum TAMPIL_ULASAN; seksyen baru #alat "Dua alat, satu akses" setelah hero, CSS .duo di akhir lp.css). Localhost "lp-galeri-generator" port 8956 (/site-id/, /site-ms/). LIVE 28 Okt (site-id → lptoolsid, site-ms → lptoolsmy; deploy dari salinan bersih di scratchpad). Domain: lptoolsid.edugamelabs.com (ID), lptoolsmy.edugamelabs.com (MS).

31 Okt 2026 07:50: hook baru "Cara tercepat bikin app & game edukasi? Pakai prompt." — kotak ide Prompt Generator di hero DIHAPUS, diganti rumus bergerak Salin (⌘/Ctrl C) + Tempel (V) = TENG! + stopwatch 0:00→3:00, tombol "Ambil promptnya"; TENG! juga muncul di HP panggung. Folder `lp-prompt-generator-20261031-0750-cara-tercepat-id-ms/` (blok "REVISI 31 Okt" di jana.py, CSS di akhir lp.css, JS `#rumus` di lp.js). Localhost "lp-cara-tercepat" port 8962. LIVE di lptoolsid + lptoolsmy (deploy dari salinan scratchpad).

31 Okt 08:03: user tolak rumus kartu (monoton) → hero kini "meja" laptop + HP interaktif (galeri 6 game di laptop → klik Salin → layar geser ke jendela AI → ⌘V → kode mengalir → HP buka app + TENG!). Bisa diklik: kartu game, tombol langkah 1/2/3, logo AI. Paragraf lede "promptnya sudah aku sediakan" DIHAPUS dari hero (user: penjelasan cukup di bawah). Panggung template ChatGPT di bawah tetap. Folder `lp-prompt-generator-20261031-0803-laptop-hp-interaktif/`, port 8963 "lp-laptop-hp". LIVE di lptoolsid + lptoolsmy.

1 Nov 2026 — TERKINI, LIVE lptoolsid + lptoolsmy: folder `lp-prompt-generator-20261101-2030-clarity`, hanya tambah Clarity xh6pboeonq di _sumber/lp.html; urutan seksyen tidak diubah (video & WTM masih posisi lama, user hanya minta pindah di demo/lpindo/lpmalay).

31 Okt 09:40: seksyen #testimoni (setelah #harga, sebelum FAQ) = YouTube Shorts ySk5FHJWbCA "keseruan belajar dengan game" dalam bingkai HP (thumbnail lokal aset/testimoni/, iframe youtube-nocookie dimuat saat diklik) + teks serunya kelas & Prompt Generator membantu pemula. Folder `lp-prompt-generator-20261031-0940-testimoni-video/` (port 8964 "lp-testimoni"). LIVE lptoolsid + lptoolsmy. Sama dipasang di demo [[project-prompt-generator-demo]].

6 Nov 2026 — TERKINI, LIVE lptoolsid + lptoolsmy: folder `~/Downloads/lp-prompt-generator-20261106-1100-marketing-kit` (salinan -1101-2030-clarity). Seksyen #kit "All-in Marketing Kit" setelah #galeri, sebelum #harga: 4 kartu (Prompt Generator, Template Landing Page, Template Video, cara jual), 6 template video pratonton kod (aset/video/, disalin dari repo Pro), 6 langkah cara jual + FAQ & ck_isi baru. Blok "REVISI 6 Nov" di jana.py (T[lg]["mk"], mk_html), CSS/JS di akhir lp.css/lp.js. Localhost "lp-marketing-kit" port 8965. Deploy dari salinan bersih site-id/site-ms di scratchpad via MCP. Lihat [[project-pg-marketing-kit]].

6 Nov 2026 malam — TERKINI, LIVE: folder `~/Downloads/lp-prompt-generator-20261106-1847-clarity-hp` (ikut masukan Microsoft Clarity): testimoni video dipindah tepat setelah hero + kartu harga ringkas #hargaMini; #liputan dipindah ke setelah #harga; HP: #ketagihan disembunyikan, galeri 4 kartu + "Lihat semua", Marketing Kit kartu geser, langkah 3 + tombol; event Clarity (situs=lptools-id/ms, klik_beli, ke_harga, main_video_testimoni, lihat_<seksyen>) di akhir lp.js. HP 21.200 → 16.000 px. Localhost "lp-clarity-hp" port 8966.
