---
name: feedback-video-tidak-tersendat
description: "User menolak suara & gerak \"tersendat\": jangan potong jeda keras ke 0.16 s, jangan atempo, kamera jangan ease-in-out per shot"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 011585ed-479b-47dd-a8be-2ca06accd3fb
  modified: 2026-11-10T21:16:31.860Z
---

Suara dan gerak harus terasa natural, tidak tersendat-sendat.
**Why:** 11 Nov 2026 user mengeluhkan video Singapura: semua jeda > 0.24 s dipotong keras ke 0.16 s tanpa fade + atempo 1.12 → suara patah-patah; kamera io() per shot berhenti di ujung tiap shot (195 frame identik) → gerak macet.
**How to apply:** kirim naskah TTS sebagai satu paragraf (newline = jeda panjang), atur tempo lewat `speed` ElevenLabs (bukan atempo), pendekkan hanya jeda > 0.32 s ke 0.3 s dengan fade 25 ms (`_alat/suara_halus.py` di [[project-video-pendidikan-singapura]]). Kalau kepanjangan, buang kalimat utuh di batas kalimat. Kamera `camMove` linear, guncangan ×0.45. Ukur frame identik berurutan sebelum kirim (target < 1%).

Related: [[feedback-elevenlabs-v4-turbo-daud]]
