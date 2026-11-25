---
name: project-riset-carousel-claude-ig
description: "Riset carousel IG tentang Claude (66 carousel, 533 slide) via Apify, LIVE riset-carousel-claude-ig.netlify.app; juga scraping Threads @muhd.afiq.asyraf"
metadata:
  node_type: memory
  type: project
  originSessionId: c3b55114-589b-494a-81c0-c65253fd242d
  modified: 2026-11-21T03:37:01.166Z
---

21 Nov 2026. Folder `~/Downloads/carousel-claude-ig-20261121/` (situs/ = siap Netlify, slide/<kode>/ = slide asli + caption.txt + contact-sheet.jpg, carousel.json). LIVE https://riset-carousel-claude-ig.netlify.app (siteId 4f4f53d2-16c3-4ce7-8098-e467c89c6329, deploy via MCP; user minta langsung Netlify tanpa GitHub).
- Apify `apify/instagram-hashtag-scraper` $0,0026/hasil; maks ±30 postingan per hashtag, kebanyakan reels (66 carousel dari 418). Carousel IG tidak punya angka views, pakai like/komentar.
- Temuan: CTA "Komen KATA" median 1.926 like vs 422 tanpa; 8 slide 4:5; cover angka besar; celah: carousel ID "Claude untuk bikin video" hampir tidak ada.
- Threads @muhd.afiq.asyraf: 200 postingan via `thenetaji/threads-scraper` ($0,004/hasil) di `~/Downloads/threads-afiq-asyraf-20261121/` (analisa-lengkap.md, semua-copywriting.md/txt/csv). Formula: "BERHENTI minta AI '…'", "BANG, MACAM MANA NAK…?", "KHAS UNTUK [golongan]", posting 11–13 MYT.
- Apify akun FREE $5/bulan, siklus reset tiap tanggal 22. Repliz search Threads user butuh paket berbayar (402). Token Apify user pernah ditempel di chat; disarankan ganti. Ada run Apify lain dari luar sesi ini (instagram-scraper) yang memakai saldo.
- Riset carousel BAYI (21 Nov): situs TERPISAH (user minta link beda) https://riset-carousel-bayi-ig.netlify.app (siteId 01d49a3b-10a4-40cb-a5ea-997f0c1e4a6a), folder ~/Downloads/carousel-bayi-ig-20261121/. 249 postingan → 24 carousel (hashtag bayi 82% reels). Skrip pakai ulang di scratchpad: carousel.py, sheet.py, strip.py (PIL butuh python3 tanpa -I).
- Riset konten GURU (21 Nov): situs terpisah https://riset-konten-guru-ig.netlify.app (siteId 9c3c0d76-70cb-4f4a-abab-2cb386ee2dca), folder ~/Downloads/carousel-guru-ig-20261121/. 72 postingan → 9 carousel relevan (hampir semua foto kenangan; carousel edukasi guru = celah) + 39 reels ID/MY (reels.json + js/reels.js, thumbnail r/). Saldo Apify habis ($0,016) 21 Nov.
- Pelajaran biaya: usageTotalUsd saat run selesai bisa lebih kecil dari biaya akhir (0,312 → 0,468); maxTotalChargeUsd tetap ditaati. Hitung budget dari biaya akhir, bukan angka saat selesai.
