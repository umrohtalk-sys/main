---
name: project-gemi-maskot-svg-hidup
description: "gemi app semua maskot SVG (bayang halus + kelip/lirik) — folder -20260918-2024-maskot-svg-hidup, belum deploy"
metadata: 
  node_type: memory
  type: project
  originSessionId: 419c43ab-fb86-485a-94a5-7b1476538eb6
  modified: 2026-09-18T21:06:46.846Z
---

2026-09-18: user minta seluruh app [[project-gemi-kad-maskot-jelas]] pakai SVG dari [[project-gemi-maskot-svg-hd]], "lebih sempurna, seamless, interaktif, realistik", card gaya lama tapi SVG. Belum deploy/push.

Folder `gemi-app-20260918-2024-maskot-svg-hidup/` (+ .zip). img/maskot/<pose>.svg (0 PNG di img/), img/kad dibuang, kadGemi melukis semua saiz, js/hidup.js inline-kan .mskbtn SVG (kelopak .gm-l, pupil .gm-p, data-kelip="0" utk wave/wave2/phone2/scope/search). Avatar e00–e04 dilukis vektor tangan (heads/gen.py). sw.js VERSI gemi-v6-maskot-svg-hidup-20260918-2024-r2.
Pipeline disalin ke `_sumber/maskot-svg-pipeline/` (trace2.py → clean.py; perlu venv vtracer/opencv/resvg-py).
Artifact: app https://claude.ai/artifact/9BHjAQ4iAEdFgY1tfdrGoG, review https://claude.ai/artifact/SpTPds7ngVjqvF5dV4xruV

**Why:** SVG v1 belang (camo) — bayang badan diganti 11 lapis halus dari medan cahaya PNG asal.
**How to apply:** ubah pose → jalankan semula pipeline, salin final/*.svg ke img/maskot, naikkan VERSI sw.js.
