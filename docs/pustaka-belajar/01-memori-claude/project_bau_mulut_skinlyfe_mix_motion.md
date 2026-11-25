---
name: project-bau-mulut-skinlyfe-mix-motion
description: "Talking head 6 min 'kebiasaan bikin bau mulut' + Skinlyfe mouth spray, gaya Drive 'Claude Edit' split screen hijau + selang-seling full motion; folder video-talkinghead-20261112-1930-splitscreen-hijau"
metadata:
  node_type: memory
  type: project
  originSessionId: aeac0107-8a1e-4599-82d0-dd9a596c1346
  modified: 2026-11-12T13:03:04.127Z
---

12 Nov 2026. Sumber `~/Documents/2026-11-12 19.14.22.mp4` (720x1280, cermin → hflip; label "Skinlyfe Refreshing Mouth Spray", Scribe dengar "Skin Life"). Rujukan gaya = folder Drive `1uysDAi-dU0l4XLQPZyhi3bsIh8B51txa/references` (7 md: editing-rules, styles, graphics, sound-design, delivery, digest, premiere) — aturan: jeda >0.45 s jadi 0.25 s, buang retake, punch-in +8% bergantian di jump cut, pembuka zoom 120% + kilat putih, kilat hanya di ganti tata letak, takarir kotak gelap di garis tengah, gerak fade+blur tanpa memantul, −14 LUFS.
Hasil `~/Downloads/bau-mulut-skinlyfe-20261112-2005-hijau-mix-motion-suara-asli-bersih.mp4` (292 s dari 369 s).
Suara asli dibersihkan lokal (highpass, afftdn, anlmdn, agate, kompresor): noise −50 → −80 dB, 0 kredit. Scribe v2 dipakai 4×.
**Why:** user minta video "jangan cuma muka + penjelasan" → tiga mode selang-seling: split (kartu atas + wajah), full (wajah + kata besar di dada), motion (grafis penuh tanpa wajah, buka dengan clip-reveal lingkaran).
**How to apply:** salin folder ini untuk talking head lain: `_alat/potong.py` (BUANG indeks kata), `data.py` (S = adegan + mode), `film.html` (atas()/layar()/besar()), `komposit.py`, `mix.py`. PENTING: Chrome headless menangkap cuma 1833 px tinggi → wajib `Emulation.setDeviceMetricsOverride` 1080x1920 (sudah di komposit.py); project lama (img8854 dll) kena bug ini di 87 px bawah. Render motion ±3 fps per proses (2 proses paralel ±15 menit). Lihat [[project-img8854-haid-titletext]] [[feedback-tulisan-tidak-menutupi]].
