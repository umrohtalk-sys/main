---
name: project-pendidikan-film-3d-toon
description: "Video 2 minit BM Indonesia vs Malaysia anggaran pendidikan, enjin baharu Three.js tokoh kepala besar + wajah dilukis, panel atas-bawah, takarir RM + Rp, Daud V4 Turbo, 8 Nov 2026"
metadata:
  node_type: memory
  type: project
  originSessionId: 82bdcbe6-9357-4273-8f3f-e1eee48e8302
  modified: 2026-11-08T10:32:26.076Z
---

8 Nov 2026. Folder `video-kek-pendidikan-id-vs-my-20261108-1640-bm/`, server "kek-id-vs-my-film" port 9016. Hasil di ~/Downloads/pendidikan-indonesia-vs-malaysia-bm-*-film-3d-toon-hp.mp4. Enjin: js/face.js (±100 parameter, 26 ungkapan), js/actor.js (rig + IK), js/world.js (satu peta dua kampus + jambatan), js/shots.js (37 shot dikunci kata K()), js/main.js (dua kamera, pembahagi senget, AO, bloom), js/captions.js (peta sebutan angka ke RM/Rp). Render ±0.05 s/bingkai di M1.

**Why:** user mahu gaya prompt 3D toon yang tidak monoton, tetapi copywriting seperti video cikgu (hook dua angka, "Jom bandingkan", topik demi topik), V4 Turbo, suara boleh tanpa rupiah tapi visual wajib RM dan Rp, tambah fakta sarjana (Bank Dunia 25+: ID 9.33%, MY 14.56%).
**How to apply:** untuk perbandingan negara lain, salin folder ini, ganti naskah, js/time.js dan shots. Panel kiri-kanan terlalu sempit untuk papan angka; pakai atas-bawah dengan takarir di garis pemisah. `_alat/sisip.py` menyisip satu baris tanpa jana semula semua (25 kredit). Rendah kos: `render_potong.sh`, ulang potongan yang berubah sahaja.

Related: [[project-guru-id-vs-my]] [[project-pendidikan-id-vs-my]] [[feedback-elevenlabs-v4-turbo-daud]] [[feedback-musik-sfx-pakai-ulang]]
