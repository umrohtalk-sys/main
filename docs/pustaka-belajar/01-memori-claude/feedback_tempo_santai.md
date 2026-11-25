---
name: feedback-tempo-santai
description: "Video explainer jangan terlalu cepat; tempo santai dengan jeda napas, durasi boleh lebih panjang dari rujukan"
metadata:
  node_type: memory
  type: feedback
  originSessionId: cb1240c6-a191-431a-9903-51d2cb986197
  modified: 2026-11-12T14:50:29.019Z
---

Narasi video penjelasan harus santai, jangan secepat Shorts rujukan.
**Why:** 12 Nov 2026 user bilang video Singapura 57 s (Alex speed 1.1, tanpa jeda) "terlalu cepat, pusing"; minta ~1:15–1:20 untuk naskah yang sama (186 kata).
**How to apply:** target ~150 kata/menit. ElevenLabs `eleven_turbo_v2_5` speed 0.9, lalu sisipkan jeda napas di batas kalimat (0.7 s antar-bagian, 0.3–0.4 s kalimat pendek) dengan `_alat/tambah_jeda.py` (di folder [[project-video-singapura-kaya]]); baris baru di naskah TIDAK menghasilkan jeda. Adegan diikat ke cap waktu kata sehingga visual ikut melambat sendiri. Ini berbeda dari [[feedback-video-tidak-tersendat]]: jeda boleh panjang asal natural, yang dilarang adalah memotong/atempo.
