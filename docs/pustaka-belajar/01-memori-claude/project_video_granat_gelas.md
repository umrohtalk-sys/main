---
name: project-video-granat-gelas
description: "Remake EN 24.27s \"granat dalam gelas\" gaya Zack D (panel video kiri rujukan saja, 9:16), Three.js 3D, Jarnathan v4 turbo, takarir Melayu (21 Nov 2026)"
metadata:
  node_type: memory
  type: project
  originSessionId: 69de9527-032f-44c7-8b8a-eabcee90b9e2
  modified: 2026-11-20T21:05:12.547Z
---

21 Nov 2026. Folder `video-granat-gelas-20261121-0344-zackd-3d-en/`, hasil `~/Downloads/video-granat-gelas-20261121-0404-zackd-3d-en.mp4` (21 MB). Rujukan igexport-Dfy091sRwSj.mp4 ialah layout promo (panel prompt kanan); user mahu HANYA panel video kiri (crop 310x552 @ 43,238), bukan full frame.
- Naskah EN dibaca dari takarir frame (tanpa Whisper). Jarnathan `eleven_v4_turbo` 27.4 s → atempo 1.05 + suara_halus 0.26/0.17 = tepat 24.27 s (v4 abaikan speed).
- Enjin: js/aset.js (granat F1 prosedural, gelas lathe transmission, pintu biru, lantai oktagon, askar + armIK), js/main.js 16 syot ikat kata, js/lensa.js (DOF palsu, blur, flash). Render 30 fps ±90 s.
- Takarir Melayu gaya rujukan: putih + sorotan kotak limau #d4f53c, label pil hitam titik limau; penutup "jerangkap samar." besar.
**How to apply:** untuk remake Zack D/"how it works" 3D lain, salin folder ini; tokoh askar masih kasar (kapsul) — kalau user minta lebih realistik, perbaiki rig muka/tangan dahulu.

Related: [[feedback-elevenlabs-v4-turbo-daud]] [[feedback-video-tidak-tersendat]] [[feedback-output-ke-downloads]]
