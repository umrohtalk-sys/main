---
name: project-ugc-caption-img8852
description: "UGC talking head Brighty IMG_8852, 175s, Scribe langsung ke ElevenLabs, alur edit video mentah dari tutorial Alex; folder video-img8852-ugc-20261105-caption"
metadata:
  node_type: memory
  type: project
  originSessionId: 80020516-5829-475b-bb11-7c1ba81bf8e7
  modified: 2026-11-05T14:19:18.263Z
---

5 Nov 2026. User minta caption bagus untuk video mentah bidan (mitos kulit gelap saat hamil, produk Brighty) dan analisa tutorial "Claude edit raw footage". Salin folder ini untuk talking head lain: `_alat/potong.py` (kata Scribe → potong, zum, grade), `film.html` (overlay `seek(t)`), `_alat/mix.py`, `_alat/render.py`. Render 175s sekitar 3 menit karena frame overlay kembar dipakai ulang.

Transkrip: POST api.elevenlabs.io/v1/speech-to-text, model scribe_v2, 208 s selesai 5 s.

Revisi gaya Richard Galapate (hook panel, kepala di depan panel via Apple Vision, split screen, punch zoom, warna/font Bidan Virda): `film2.html`, `_alat/data.py`, `_alat/komposit.py`, `_alat/mix2.py`, `_alat/tts.py`, `_alat/topeng.swift`. Dua hasil di ~/Downloads `img8852-ugc-brighty-20261105-2039-gaya-richard-*`. Render dua versi paralel sekitar 8 menit; `kerja/fm` dan `kerja/mask` sudah dihapus, buat ulang dengan topeng.swift kalau render lagi. Versi ElevenLabs tidak lip-sync.

Gaya kedua "scrapbook" (kertas, tulisan tangan Caveat, bingkai lengkung, kertas sobek, cap MITOS, takarir pita stabilo, kamera lembut, tanpa topeng kepala): `film3.html`, `_alat/data3.py`, `_alat/komposit3.py`, `_alat/mix3.py`; hasil `img8852-ugc-brighty-*-gaya-scrapbook-*`. Suara ElevenLabs dipakai ulang, 0 kredit baru. Render paralel sekitar 20 menit (4,4 fps), lebih lambat dari gaya Richard karena lapisan berubah tiap kata.

**Why:** satu ffmpeg menggantung 1 jam 9 menit (`apad` + musik loop tanpa batas) dan saya menunggu tanpa mengecek, sampai user bertanya.

**How to apply:** job latar yang lama harus dicek prosesnya, jangan hanya ditunggu; beri batas waktu `perl -e 'alarm N; exec @ARGV'`. Selalu cek dulu apakah video selfie itu cermin (label terbaca terbalik) dan cocokkan ejaan merek dengan label; Scribe salah dengar "Brighty" jadi "Brackley". Area kosong pada framing ini hanya di atas kepala, jadi saat produk dipegang takarir di y 126. Lihat [[feedback-tulisan-tidak-menutupi]].
