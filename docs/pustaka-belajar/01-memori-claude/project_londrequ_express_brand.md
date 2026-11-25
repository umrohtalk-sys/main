---
name: project-londrequ-express-brand
description: "Brand identity Londrequ Express (laundry Jember) — logo-only tanpa maskot, kanvas artifact + logo/ + landing/"
metadata: 
  node_type: memory
  type: project
  originSessionId: afee1ef2-2f03-42b1-9997-e598b9383e1e
  modified: 2026-09-18T12:42:40.393Z
---

Dibuat 2026-09-18 di `brandkit-londrequ-express-20260918-1929/`. Kanvas 12 papan: https://claude.ai/artifact/Mc4qcCGsytxQsVWJmZwubN. Logo digambar ulang jadi vektor di `brand.mjs` (awan busa + kaos terpotong + ayunan bilas + kilau). `gen.mjs` membuat papan, `jana-aset.mjs` membuat logo/ PNG (Chrome headless, latar transparan) dan landing/ (siap Netlify, belum di-deploy). Palet: Biru Busa #1592EE, Bilas #0B63C4, Navy #0A2540, aksen Kuning Jemur #FFC23D. Font: Barlow Condensed + Barlow. Tagline "Bersih. Wangi. Kilat." / "Cucianmu, urusanku."

**Why:** user minta brand identity mengikuti pola brand kit Gemi, tapi TANPA maskot; logonya langsung dipakai di landing page, nota, merch, dan medsos.
**How to apply:** harga/alamat/jam buka masih placeholder [..]. Ada dua nomor WA di materi user; yang dipakai 0812-3335-6786. Logo asli salah eja "EXPRESSS", di kit dibetulkan. Pola kerjanya sama dengan [[project-gemi-brand-kit]].

**Film jingle (2026-09-18):** `video-londrequ-express-jingle-20260918-1957-potret/` — londrequ-jingle-potret.html (Canvas 1080x1920, 60 s, 120 BPM, hook "Lon-dre-qu Ex-press · Ber-sih Wa-ngi Ki-lat" di 12 s & 52 s), render lewat `_render/render.mjs mp4`, lalu ffmpeg loudnorm → `out/*-audio-keras.mp4`. Tanpa maskot; "footage" digambar (mesin cuci, jemuran, setrika, chat WA). Target mahasiswa & ibu RT. Tidak ada harga (masih [..] di brand kit). Pola mesin sama dengan [[project-gemi-film-promo]].

**Film kedua — fokus setrika (2026-09-20):** `video-londrequ-express-20260920-0230-setrika/` — londrequ-setrika-potret.html, 60 s, funk-house 128 BPM kunci F, hook baru "Lon-dre-qu Ex-press · Ah-li-nya Se-tri-ka", transisi setrika melintas layar (bukan sapuan busa), adegan makro kain kusut→licin. Pesan: banyak yang bisa mencuci tapi tak sempat menyetrika; ada layanan setrika tanpa cuci. Dirakit dari potongan `_p_*.js` lewat `bina.sh`; mesin render sama dengan film pertama.
