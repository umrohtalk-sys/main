---
name: project-bidan-virda-hari1-thriller
description: "Seri video \"Bertahan Hidup Jadi Newborn\" HARI 1 untuk Bidan Virda — thriller POV bayi stickman 3D three.js, suara ElevenLabs Sarah, ±67 s"
metadata:
  node_type: memory
  type: project
  originSessionId: 2604184d-b827-4651-8325-180132d4b6b4
  modified: 2026-10-29T14:28:05.225Z
---

2026-10-29: folder `app matematika/video-bidan-virda-hari1-20261029-2024-newborn-thriller-id/`. Gaya: survival thriller orang-kedua, 4 ATURAN = fakta unik bayi (tangis tanpa air mata, pandang 30 cm, lambung kelereng, refleks genggam), twist 31 cm, pilihan hijau/merah, FOLLOW HARI 2 (pemilik tangan bau telon belum terungkap → bahan HARI 2 = pijat bayi).
Mesin: film.html + js/ (set.js kamar low-poly, stick.js kartu stickman topi hijau, shots.js daftar shot `at:[baris,kata]`, overlay.js HUD/takarir/stiker, physics.js cannon-es + gorden verlet). Naskah di js/timeline.js (say = ucapan, cap = takarir).
Alur: `_alat/tts.py <kunci>` (OpenRouter elevenlabs/eleven-v4-turbo, voice sarah; parameter speed DITOLAK; semua suara ±sama lambat → atempo 1.32) → `_alat/suara.py 1.32` (whisper small, timing.json) → `_alat/snap.py` → `_alat/mix.py` (SFX Mixkit di sfx/, musik "Echoes" Mixkit, -14 LUFS) → `_alat/render.py render/….mp4` (Playwright Chrome, ±0.4 s/frame). Still: `sh _alat/still.sh <dir> id:u` (maks 4 Chrome headless, lebih banyak = macet). Server pratinjau launch.json "bidan-virda-hari1-film" port 8871 (butuh index.html).
**Why:** kunci OpenRouter hanya ada di env Netlify site prompt-game-edukasi (dibaca lewat konektor, disimpan di scratchpad, jangan ke folder project).
**How to apply:** HARI 2 = salin folder, ganti naskah & set (rotasi setting), pakai ulang alat. Lihat [[project_bidan_virda_lp_lpindo]], [[reference_opus_video_repos]].
