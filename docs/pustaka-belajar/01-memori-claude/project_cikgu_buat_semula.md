---
name: project-cikgu-buat-semula
description: "Video 76s BM cikgu-murid 'Buat semula', remake gaya 3D 'food at home' + pembilang, Daud tanpa musik/SFX, rig Three.js halus baru"
metadata:
  type: project
---

3 Nov 2026. Folder `video-cikgu-buat-semula-20261103-2007-3d-bm/`, hasil `render/cikgu-buat-semula-20261103-2037-daud-3d-bm-hp.mp4` (1080x1920, 28,6 MB). Rujukan: reel "When your mom said we have food at home" (pembilang kali + umur, takarir serif miring, loncat 10 tahun, kad akhir kabur).

Enjin baru `js/rig.js` (tokoh halus bersendi + IK lengan + tudung) dan `js/set.js` (kelas, pejabat malam, pintu), `js/film.js` shot dikunci baris suara, render `_alat/render.py {still|t|mp4}` lewat Chrome Metal (±3 menit). Suara: `_alat/tts.py` lalu `_alat/suara.py 1.12 .65`.

**How to apply:** untuk remake 3D kartun halus gaya rujukan ini, pakai rig ini, bukan avatar voxel Dunia Clawd. Tudung warna gelap; krem terbaca seperti helm, peach terbaca seperti kulit. User minta tanpa SFX, jadi hanya narasi. Lihat [[feedback-elevenlabs-v4-turbo-daud]].
