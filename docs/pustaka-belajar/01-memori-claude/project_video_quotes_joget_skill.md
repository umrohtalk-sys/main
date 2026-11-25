---
name: project-video-quotes-joget-skill
description: "Skill video-quotes-joget — caption quotes gaya pill bidan ditempel ke video joget, ganti quote di hentakan gerak"
metadata:
  node_type: memory
  type: project
  originSessionId: 38a98c62-f17d-47e5-b89f-f64a1fc8177f
  modified: 2026-10-09T12:47:46.742Z
---

Skill `~/.claude/skills/video-quotes-joget/` (dibuat 9 Okt 2026): user upload video joget → Claude tulis quotes.txt → `scripts/quotes_joget.py` render MP4 dengan pill judul cokelat + pill isi biru bernomor (gaya referensi bidan channamix_medikacare), pergantian di-snap ke hentakan gerak+beat, posisi auto hindari wajah.
Contoh pertama: `~/Documents/video-quotes-joget-20261009-1944-bang-ikyy/` (video Bang_ikyy, 5 quote "Pengingat buat diri sendiri").

**Why:** user mau alur "tinggal upload, langsung ada caption" untuk konten TikTok.
**How to apply:** saat user kirim video + minta quotes/caption, pakai skill ini; folder output bertimestamp ([[feedback-versioned-filenames]]), buka di Finder ([[feedback-reveal-output-finder]]).
