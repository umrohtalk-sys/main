# LAPORAN: Video promo 5 game

- Output: `video-promo-5-game-20261121.mp4` (1080x1920, 35.0 s, H.264 30 fps + AAC), `contact-sheet.png` (12 frame), `caption-ig.md`.
- Struktur: cover tipografi 0-3 s (hilang dengan sapuan), 5 game x 5.6 s (3-31 s), CTA "Komen GAME" 4 s (31-35 s).
- Gameplay: rakaman sebenar (CDP screencast, viewport 390x844 skala 2, di-resample 30 fps) semasa bot memainkan game dengan sentuhan/ketikan sebenar; bot ikut skrip `uji/` setiap game (Rebut Wilayah guna `bot.mjs`nya). Tahap 1 (Kedai Pantas tahap 2).
- Susun atur: telefon di tengah, label (chip nombor + nama BM + 1 baris "apa murid belajar") di ruang kosong BAWAH telefon, tiada judul tetap di atas game; ikon SVG, tiada emoji; zon bawah 270 px dibiarkan kosong untuk UI Reels. Satu arah arus: semua sapuan/reveal kiri ke kanan, teks naik clip-reveal.
- Muzik: `musik-echoes.mp3` dipakai semula dari `video-kek-pendidikan-id-vs-my-20261108-1640-bm/sfx/`, bahagian 20-55 s, volume 0.3 (purata -31.6 dB), fade in/out. Tiada narasi, tiada SFX, tiada TTS, tiada muzik dijana.
- Contact sheet disemak sebelum render akhir; dua pembetulan (cover "5 GAME" berbalut, teks CTA berbalut) dibuat selepas sheet pertama.
- Andaian yang perlu disahkan: baris CTA "Saya hantar pautan game ke DM kamu" (aliran Komen GAME ke DM). Tajuk "Letus Gelembung" dan "Rebut Wilayah" dipendekkan daripada nama dalam app (Clawd Letus Gelembung, Bulat Rebut Wilayah). Audio game sendiri tidak dirakam.
- Tidak diposting.

## sumber/
`komposisi.html` (frame = fungsi t: `render(t)`), `rakam.mjs` (rakam bot: `node rakam.mjs <10|11|12|18|19> 9`), `render.mjs` (`sheet`/`full`), `musik-echoes.mp3`. Ulang render perlukan rakaman semula ke `sumber/_frames/<id>/` (dipadam).
Pipeline ffmpeg: `ffmpeg -framerate 30 -i _frames/out/f%05d.jpg -ss 20 -t 35 -i musik-echoes.mp3 -af "volume=0.3,afade=t=in:st=0:d=1.5,afade=t=out:st=33:d=2" -c:v libx264 -pix_fmt yuv420p -crf 17 -t 35 -movflags +faststart ...`
