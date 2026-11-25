---
name: project-terakhir-menggendong
description: "Short emosional 72.5s ID untuk ibu menggendong bayi, narator kain gendongan, Three.js, hanya musik ElevenLabs"
metadata:
  node_type: memory
  type: project
  originSessionId: 0b246c89-8ef4-4afb-9157-4eb976a371ce
  modified: 2026-11-05T13:26:37.181Z
---

5 Nov 2026. Folder `video-terakhir-menggendong-20261105-2030-ibu-bayi-id/`, hasil `~/Downloads/terakhir-menggendong-20261105-2028-fix-perut-ibu-hp.mp4` (1080x1920, 72.5 s, 26,7 MB). Format mengikuti reel "last time your dad carried you", tetapi naskah, tokoh, dan latar dibuat sendiri.

Enjin: `js/film.js` satu file Three.js (ibu berhijab, anak tumbuh lewat parameter `age`, kain batik), `_alat/stills.py` untuk lembar cek, `_alat/render.py` (96 detik saja untuk seluruh video di M1). Musik: `/v1/music` music_v1 73 s = 912 kredit; hasilnya punya hening 3 s di awal dan habis sebelum akhir, jadi dipotong + `atempo=0.93`.

**How to apply:** untuk short serupa, salin folder ini lalu ganti `CAP`, `SC`, `counter`, dan kamera. Lihat [[feedback-tulisan-tidak-menutupi]] [[feedback-output-ke-downloads]].
