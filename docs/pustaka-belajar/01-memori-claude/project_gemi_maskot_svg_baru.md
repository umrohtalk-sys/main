---
name: project-gemi-maskot-svg-baru
description: "gemi app maskot diganti 15 SVG kucing baru (QuiverAI, ~/Downloads/svg gemi) — folder -20260923-1936-maskot-svg-baru, belum deploy"
metadata:
  type: project
---

2026-09-23: user minta semua maskot app gemi diganti SVG baru (lebih bagus), tetap interaktif, output folder Netlify. Dibina di atas [[project-gemi-modul-app-builder]]. Belum deploy/push.

Folder `gemi-app-20260923-1936-maskot-svg-baru/` (+ .zip). 15 pose: wave book cape celebration cup globe headphones heart laptop magnify puzzle sunglasses tablet tablet2 backpack. `_build/jana-maskot-baru.py` tanda mata (.gm-e/.gm-p berklip-path/.gm-l kelopak inline scaleY(0)) → js/hidup.js kelip+lirik. 44 nama pose lama dialihkan lewat POSE_GANTI (js/ui.js) — data/skrin tak perlu diubah. Avatar e00–e04 = potongan kepala (`_build/jana-kepala-baru.py`). cover.png dirender Chrome headless dari `_build/cover/cover.html`. VERSI_APP 3.3, sw `gemi-v9-maskot-svg-baru-20260923-1936`.

**Why:** set lama 44 pose trace (VTracer) diganti set vektor asli yang lebih tajam.
**How to apply:** tambah pose → letak SVG di _sumber/svg-baru-asal, tambah ke NAMA dalam skrip + MK di ui.js, jana semula, naikkan VERSI sw.js.
