---
name: project-lp-prompt-video-ms
description: LP Prompt Video BM (RM29) LIVE prompt-video-ms.netlify.app + video promo kotak 90 s Daud ≤2 MB + carousel 10 slaid, 10 Nov 2026
metadata:
  type: project
---

10 Nov 2026. Produk = Galeri Prompt Video (16 gaya) + Prompt Generator Video, RM 29 sekali bayar, semua BM.
- LP: `~/Downloads/lp-prompt-video-ms-20261110-1837-salin-tampal` (statik, css/js dipecah). LIVE https://prompt-video-ms.netlify.app (siteId b86ac04c-bccf-4e0b-94c7-e6d15a30a794, deploy MCP dari salinan scratchpad). Butang beli = WhatsApp sementara; isi `beliUrl` di js/config.js bila ada pautan Kliqoo. kontak.js dipasang. Clarity tag situs=lpvideo-ms. Localhost "lp-prompt-video" port 9106.
- Video: projek `video-promo-prompt-video-20261110-1843-kotak-bm` (skill video-tipografi-suara, kotak 1080; klip.js lukis bingkai JPG 15 fps daripada cuplikan gaya; _alat/mix.py suara+musik-echoes 0.16+pop/whoosh/siap). Daud 455 kredit (2 TTS). Hasil ~/Downloads/video-promo-prompt-video-20261110-1852-kotak-web-2mb.mp4 (720², 1,91 MB, two-pass 118k + AAC 40k mono) dan -kotak-1080-hd.mp4 (13,8 MB). Video di LP: aset/video/promo-video.mp4.
- Carousel: `carousel-prompt-video-20261110-1850-10slide-bm` (template carousel PG, SEED ms=id), JPEG di ~/Downloads/carousel-prompt-video-20261110-*-10slaid-bm; ekspor headless `_render/ekspor-carousel.mjs <index.html> <folder>` dalam projek video.

**Why:** user mahu LP + video + carousel untuk jual Prompt Video RM29 di Malaysia.
**How to apply:** zsh: `$1:f…` dalam string jadi modifier, guna `${1}`. Lihat [[project-prompt-generator-video]] [[project-kontak-wa-geo]] [[project-carousel-prompt-generator-fitur]].

12 Nov 2026 — TERKINI, LIVE: domain lpvideo.edugamelabs.com (site b86ac04c, LP 3 bahasa) dari folder `~/Downloads/lp-prompt-video-3bahasa-20261112-0551-kliqoo`. Beli MS & EN → Kliqoo https://kliqoo.com/product/prompt-generator-for-bina-video-pembelajaran-and-social-medi-a3tq7 (beliUrl di {ms,en}/js/config.js; nota EN "billed in MYR"). ID tetap WhatsApp Rp 99.000 (Kliqoo menagih RM, mengikut pola Tools: ID pakai gerbang Rupiah). Demo Galeri Prompt Video = promptvideo.edugamelabs.com (site c98eb44f), folder `~/Downloads/demo-prompt-video-20261112-0551-pro-ke-lpvideo`: 4 tombol Pro → https://lpvideo.edugamelabs.com (dulu lptoolsmy). Kedua situs tanpa repo GitHub, deploy MCP.

15 Nov 2026 — TERKINI, LIVE lpvideo.edugamelabs.com: redesign "motion story" ikut rujukan LP jagomotion (hero langit senja + karusel 3D 16 cuplikan + kad obrolan, "kenapa bukan slaid", 3 alat, untuk siapa, bento, harga + rincian, bar beli melayang). Palet krim-oren lama dikekalkan. Pakej kini 3 alat: Galeri Prompt Video + Prompt Generator Video + Skill Studio Video ([[project-skill-studio-video-edukasi]]); harga TIDAK diubah (Rp 99.000 / RM 29 / USD 7). Folder `~/Downloads/lp-prompt-video-3bahasa-20261115-1054-motion-story`: teks semua bahasa di `_sumber/teks.mjs`, jalankan `node _sumber/jana.mjs` → {id,ms,en}/index.html (+ salin js/lp.js). Deploy dari salinan tanpa `_sumber`. Localhost launch "lp-video-motion" port 9311 (.claude/serve-lp3.mjs meniru fallback /xx/*).

18 Nov 2026 — TERKINI, LIVE lpvideo.edugamelabs.com: folder `~/Downloads/lp-prompt-video-3bahasa-20261118-2204-49-gaya` (salinan motion-story). Semua teks "16 gaya" → 49 (teks.mjs), galeri LP kini 49 gaya ({id,ms,en}/js/gaya.js ditambah 33 dari repo Prompt Video + terjemahan i18n; kategori peta & senyap), cuplik+poster disalin ke aset/gaya. Karusel hero sengaja tetap 16 pertama (`G.slice(0, 16)` di js/lp.js). Launch "lp-video-49" port 9312. "14 gaya" = Skill Studio, tidak diubah.

21 Nov 2026 — TERKINI, LIVE lpvideo: folder `~/Downloads/lp-prompt-video-3bahasa-20261121-0717-58-gaya` (58 gaya; teks 49→58, kh1 EN "16"→58). Folder lama kehilangan mp4 (bersih-bersih): cuplik disalin dari repo prompt-video/vid/gaya, promo-video.mp4 diunduh dari live. Launch "lp-video-58" port 9313.

22 Nov 2026 — TERKINI, LIVE lpvideo: folder `~/Downloads/lp-prompt-video-3bahasa-20261122-1215-157-gaya` (157 gaya = 58 video asli + 99 Gaya Seni). Teks dibetulkan supaya tidak mengaku 157 "video sebenar" (galSub, hero, FAQ). {id,ms,en}/js/gaya.js ditambah blok concat 99 kad kat 'seni' (terjemah ID/EN oleh Haiku) + tab "Gaya seni"; baris kredit .gal-kredit (Lemo-Opuscar CC BY 4.0) di bawah galeri. Aset seni di LP dikecilkan (cuplik 270x480 crf34, jpg 360x640) supaya zip 19,7 MB. Launch "lp-video-157" port 9314. Deploy dari salinan tanpa _sumber.
