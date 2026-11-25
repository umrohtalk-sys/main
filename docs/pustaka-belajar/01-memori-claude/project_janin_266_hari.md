---
name: project-janin-266-hari
description: "Video 128s ID pertumbuhan janin hari demi hari gaya Zack D., 3D halus raymarching GLSL (bukan rig), suara Anjani"
metadata:
  node_type: memory
  type: project
  originSessionId: 2b0284d7-fbb7-4324-ba8c-8e47ad27acff
  modified: 2026-11-04T11:39:40.811Z
---

4 Nov 2026. Folder `video-janin-266-hari-20261104-1740-zack-id/`, hasil `~/Downloads/janin-266-hari-20261104-1837-anjani-3d-id-hp.mp4` (1080x1920, 128 s, 28,6 MB). Patokan tunggal: sejak pembuahan (hari 266 = minggu 38).

Enjin baru: `js/shader.js` satu fragment shader WebGL2 raymarching SDF (janin bertumbuh lewat satu parameter `uG`, sel, rahim, ibu berhijab + jendela sinar-X di perut, bayi berselimut). `js/film.js` adegan dikunci baris suara + potongan kamera per kalimat, `js/ui.js` label dan takarir, `_alat/{tts,suara,mix,render}.py`. Render 1080p sekitar 0,25 s per frame di M1 (`--use-angle=metal`), 3845 frame ±15 menit.

**How to apply:** untuk visual 3D organik/medis yang halus, pakai shader SDF ini; hasilnya jauh lebih halus daripada avatar voxel, dan ringan untuk M1 8 GB. Suara: `suara.py 1.2 .7` (Anjani terlalu lambat untuk FYP tanpa tempo 1.2). Header ElevenLabs menyebut 367 kredit, tetapi `character_count` langganan naik 702; laporkan keduanya. Lihat [[feedback-tulisan-tidak-menutupi]], [[project-cikgu-buat-semula]].
