---
name: project-video-habuk-mata-3d
description: "Video BM \"Masuk habuk? Jangan gosok.\" — remake reel kepala keratan rentas 3D (Three.js) + subtajuk English, CTA Komen TOOLS (15 Nov 2026)"
metadata:
  node_type: memory
  type: project
  originSessionId: 3ccf1096-c8f9-4be7-802d-4ff2ce3ad758
  modified: 2026-11-14T21:58:27.195Z
---

15 Nov 2026. Rujukan ~/Downloads/igexport-DfmbqqpDMlS.mp4 (reel ID "Kelilipan? Jangan dikucek", 74.9 s, kepala dipotong melintang gaya Blender, takarir pil putih + sorotan oren, kad langkah 1-2-3, badge 1-5, papan H). Folder `video-habuk-mata-jangan-gosok-20261115-0446-3d-potret-bm/`, hasil ~/Downloads/video-habuk-mata-jangan-gosok-<ts>-3d-potret-bm-sub-en.mp4.
- Enjin: `js/main.js` Three.js r170 — muka potongan = ExtrudeGeometry kepala dengan tekstur kanvas (drawSection dalam unit dunia) + plane "patch" resolusi tinggi untuk mata yang dilukis semula tiap frame (kelip, air mata, calar, kayu, darah); dua laluan render (dunia latar kabur CSS blur + depan tajam). Tangan = kapsul `poseHand(A,P,'fist'|'vee')`, botol + aliran TubeGeometry.
- `js/teks.js` AYAT = potongan BM (`*kata*` sorotan, `#n` bilangan kata dituturkan, cth "24 jam#5") + terjemahan EN di bawah.
- Audio: tts/suara_halus/tambah_jeda/mix dari [[project-video-ai-matematik-akar-masalah]]; Daud v4 Turbo speed .95, 220 kredit; set-1..8 whoosh baharu + air-bilas, kelip, calar, motor-mati.
**How to apply:** untuk explainer anatomi/kesihatan gaya keratan 3D, salin folder ini; tukar drawSection + SH (shot) + AYAT. `_alat/still.py t1 t2…` buat sheet cepat.

Related: [[feedback-elevenlabs-v4-turbo-daud]] [[feedback-judul-cover-pembuka]] [[feedback-bunyi-transisi-unik]]
