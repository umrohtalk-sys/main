---
name: project-video-universiti-asean
description: "Video potret BM ~78s \"8 daripada 10 universiti terbaik ASEAN ada di Malaysia\" (QS Asia 2027 via GoodStats), kad universiti + garis penunjuk ke pin peta satelit, suara Daud v4 turbo"
metadata:
  node_type: memory
  type: project
  originSessionId: 43187510-c058-4786-9f6a-d8f9c9e7f48a
  modified: 2026-11-13T14:40:41.738Z
---

13 Nov 2026. Folder `video-universiti-asean-20261113-2127-dokumenter-bm/` (disalin dari [[project-video-malaysia-underrated]]). Data dari infografik IG GoodStats "Kampus Terbaik di ASEAN 2027" (QS Asia University Rankings 2027): NUS 98.7, NTU 98.5, lalu 8 universiti Malaysia di no. 3–10, UTP 11, Chula 12, UGM 13. User minta hook "7 dari 10" tapi data = 8, dipakai 8 dan diberitahu.
Gaya: kad dokumenter `uniCard()` (foto Commons, lencana NO., nama, bendera mini, skor + bar) di atas, garis putus `leader()` ke pin kampus di satelit, kamera `fly()` antar kampus (bump zoom-out), `rankPins()` pin bernombor yang terkumpul ("peta berubah"), papan 10 terbaik, cincin 6 universiti Lembah Klang, donat pemberat QS (akademik 30% + majikan 20%).
**Why:** user minta gaya video Malaysia sebelumnya, BM, Daud, ~1:15, sangat detail dengan foto universiti dan peta menunjuk lokasi.
**How to apply:** Daud v4 turbo bicara ~123 kata/menit → 172 kata = 83.8 s; dipendekkan tanpa TTS ulang dengan `_alat/buang_kalimat.py` (buang kalimat utuh + crossfade, tulis naskah-<nama>.txt). 1279 karakter = 256 kredit. `_alat/ambil_satelit.py` membaca & menulis ulang sat_meta.js — cek kunci plate lama (sg) tidak hilang. macOS tanpa `timeout`.

Related: [[feedback-elevenlabs-v4-turbo-daud]] [[feedback-tempo-santai]] [[feedback-judul-cover-pembuka]]
