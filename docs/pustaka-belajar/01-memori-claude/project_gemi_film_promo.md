---
name: gemi-film-promo
description: Film promo gemi 60 s (Canvas + Web Audio) meniru referensi promo "AI team"; folder video-gemi-motion-20260917-2016-promo-60s
metadata:
  type: project
---
Dibuat 2026-09-17 dengan skill canvas-film-studio ([[canvas-film-studio-skill]]), referensi ~/Downloads/ssstwitter_com_1789650125742_frames (69 frame).
Satu file gemi-film.html (12 adegan + musik 120 BPM), maskot PNG dari [[project-gemi-kad-maskot-jelas]].
Render: `cd _render && node render.mjs mp4` (atau `grid 36 nama` / `sheet 1,2 nama`) → out/gemi-film-60s-20260917.mp4. siap-netlify/ = salinan index.html + img.
Artifact lanskap: https://claude.ai/artifact/51zn5knKmw3TL9FuMTpfxb

Versi potret TikTok/IG (18 Sep 2026): folder video-gemi-motion-20260918-0434-potret-9x16, gemi-film-potret.html (1080x1920).
Bedanya: adegan app = skrin telefon gemi (kad modul + maskot), HARGA RM15 / Rp55.000 sekali bayar (bukan gratis), musik club (kick tiap ketuk + duck/pump, supersaw drop).
Audio dinaikkan ke ~-15.5 LUFS lewat ffmpeg (volume 8dB + alimiter + loudnorm) -> out/*-audio-keras.mp4 = fail untuk diunggah.
Artifact potret: https://claude.ai/artifact/AxVVWgzFXLJ9oigKNYXP7h
**Why:** user minta direview 3x sebelum dilihat. **How to apply:** edit gemi-film.html lalu render ulang; salin ulang ke siap-netlify/index.html.

Versi BM (18 Sep 2026): folder video-gemi-motion-20260918-0455-potret-bm, gemi-film-potret-bm.html.
Bezanya: semua teks BM (Tahun 5, kuiz, FAHAM/RANCANG/BINA, Anda yang bina dahulu), harga RM15 sahaja (tiada Rupiah),
nama alat penuh "Google Gemini/Canvas/AI Studio/Stitch/Antigravity" + cip 4 titik "Ekosistem Google AI",
fungsi bendera(x,y,w) melukis bendera Malaysia + benderaChip "Untuk cikgu di Malaysia" (adegan A & penutup),
hook melodi ditambah pada drop pertama. Artifact BM: https://claude.ai/artifact/VaXXKwozBERjeqDHVH7Wc5
