---
name: project-gemi-modul-video-opus
description: "gemi trek ke-6 \"Video Claude Opus\" (Modul 33–38, sumber BM) — folder -20260925-0438-modul-video-opus, belum deploy"
metadata:
  type: project
---

2026-09-25: user minta TXT [[project-modul-video-claude-opus]] dimasukkan ke app gemi sebagai section baru, layout & maskot sama. Dibina di atas [[project-gemi-maskot-svg-baru]]. Folder `gemi-app-20260925-0438-modul-video-opus/` (+ .zip). Belum deploy/push, tiada artifact.

Trek 'video' = Modul 33–38 (Bahagian A–F; Lampiran A–G + aliran kerja akhir masuk 38), 44 pelajaran, 60 soalan dwibahasa. Jumlah app 38 modul · 512 pelajaran · 248 soalan. VERSI_APP 3.4, sw `gemi-v10-modul-video-opus-20260925-0438`.
Jana: `python3 _build/jana-video-opus.py` (muat jana-bina-app.py lewat importlib seperti jana-app-builder.py) + `_build/kuis_video.py` (MODS/TITLES/LAMPIRAN + kuis ms/id, jawapan betul ditulis dahulu, _POLA).

**Why:** sumber satu fail besar dengan jadual berlajur, rajah kotak ┌─┐ dan tajuk huruf besar yang pengurai asal tidak kenal.
**How to apply:** normalkan() dalam skrip itu yang menukar semua ini (jadual → senarai, kotak → senarai, tajuk → "Tajuk:", ✘/✔ → ❌/✅, rujukan Pelajaran NN → 3x.y); ubah di situ, bukan di data-video.js. Semasa uji, nyahdaftar SW sebelum reload (cache-first memberi data lama).
