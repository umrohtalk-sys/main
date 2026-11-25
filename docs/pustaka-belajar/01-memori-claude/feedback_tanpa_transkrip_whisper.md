---
name: feedback-tanpa-transkrip-whisper
description: Jangan transkrip video rujukan pakai Whisper CPU; ambil copywriting dari takarir di screenshot/frame
metadata:
  node_type: memory
  type: feedback
  originSessionId: f2e60c20-2bfb-440f-a341-378af1d92854
  modified: 2026-10-31T23:00:55.071Z
---

Bila user beri video rujukan yang sudah ada auto-caption, ambil copywritingnya dari takarir pada frame/screenshot (contact sheet), jangan jalankan transkrip Whisper.

**Why:** user bilang transkrip pakai model CPU kelamaan; copywriting sudah terbaca di takarir.
**How to apply:** buat contact sheet frame rujukan → baca takarir. Untuk waktu kata suara TTS, pakai cap waktu ElevenLabs `/with-timestamps`, bukan Whisper. Lihat [[project-cikgu-reaktans-disuruh]].
