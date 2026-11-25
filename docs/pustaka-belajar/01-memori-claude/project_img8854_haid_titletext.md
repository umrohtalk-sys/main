---
name: project-img8854-haid-titletext
description: "UGC bidan IMG_8854 'haid normal atau perlu dicek' + pembalut Missy, gaya title text Leah (layar belah: kartu app atas, wajah bawah), hijau Bidan Virda, ikon Phosphor duotone; folder video-img8854-ugc-20261106-titletext"
metadata:
  node_type: memory
  type: project
  originSessionId: 80020516-5829-475b-bb11-7c1ba81bf8e7
  modified: 2026-11-06T07:53:30.240Z
---

6 Nov 2026. Remake IMG_8854.MOV (293 s, cermin, merek **Missy** — Scribe dengar "Macy") dengan gaya video Leah_talks_tech: separuh atas kartu bergaya aplikasi dengan judul serif "✳ Catatan Bu Bidan", ikon, efek mengetik, kartu warna kolase; separuh bawah wajah; takarir 1–3 kata putih di garis tengah; produk dibelah dua sudut (atas zoom produk, bawah wajah); akhir kutipan besar “cek ke dokter”. Ikon Phosphor duotone (MIT) dari npm @phosphor-icons/core, dimasukkan sebagai `ikon.js`. Alat: `_alat/potong.py`, `tts.py`, `data.py`, `mix.py`, `komposit.py`, `film.html`. Hasil di ~/Downloads `img8854-haid-normal-*-gaya-titletext-*`. TTS Anjani v4 turbo 640 kredit.

**Why:** render pertama 0,7 fps karena Mac dibebani sesi lain (load 200–300, swap) dan komposit numpy float + libx264.

**How to apply:** untuk render panjang pakai tangkapan CDP `Page.captureScreenshot` optimizeForSpeed (0,11 s vs 0,41 s), komposit PIL `alpha_composite` (bukan array float), encoder `h264_videotoolbox`, jalankan versi berurutan dengan `caffeinate`, dan ukur fps di menit pertama sebelum menjanjikan waktu. Lihat [[project-ugc-caption-img8852]].
