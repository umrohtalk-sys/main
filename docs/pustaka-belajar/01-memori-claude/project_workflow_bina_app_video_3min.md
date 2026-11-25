---
name: project-workflow-bina-app-video-3min
description: "Video 3 min landskap BM dari LP workflow bina app & video (10 langkah), muzik medley 3 lagu Suno pengguna, gaya beza tiap langkah"
metadata:
  node_type: memory
  type: project
  originSessionId: 6856bd0b-6e44-47a7-940e-e4cb4f163ff5
  modified: 2026-10-08T13:32:47.388Z
---

2026-10-08: dari [[project-workflow-bina-app-video-zoom]]. Folder `video-workflow-bina-app-20261008-2009-landskap-bm/` (templat skill video-tipografi-suara tetapi TANPA suara: jam = grid ketukan muzik).
Muzik "remake" = medley lagu Suno pengguna (artis auzanhasfi99) yang paling banyak dipakai di folder: Gemi App Showcase 116 BPM (intro + Bahagian A), Let's Learn Something Useful 116 BPM (langkah 6–10, sambung mulus), Tek Tek Launch 132.5 BPM (penutup, tape-stop + riser sebelumnya). Dicampur oleh `_aset/mix.py` (venv video-gemi-kisah-piksel, ~5 min kerana loudnorm) + SFX sintesis dari `out/cues.json` (`node _render/render.mjs cues`).
Gaya per langkah: masonry Pinterest, buku Notes + meter kejelasan, terminal duel kabur/jelas, pokok folder + benang, saluran deploy, grid 5 pemain video, kamera polaroid, editor timeline, bingkai 9:16↔16:9, pad bunyi + oskiloskop; penutup montaj 1 langkah / 2 ketukan. Output ~/Downloads/workflow-bina-app-video-20261008-2057-3min-landskap-bm.mp4 (185 s). Mac 8 GB: render penuh sekali jalan mati "Target closed" → pakai `sh _render/render-chunks.sh nama.mp4` (potongan 600 bingkai, proses baharu).
**How to apply:** ubah scenes.js → `render.mjs cues` → mix.py (jika cue berubah) → `sh _render/render-chunks.sh nama.mp4`.
