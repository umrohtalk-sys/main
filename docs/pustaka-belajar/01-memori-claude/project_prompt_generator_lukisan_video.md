---
name: project-prompt-generator-lukisan-video
description: "Video 44s potret ID cat minyak promosi Prompt Generator + Galeri Prompt, narasi ElevenLabs via OpenRouter, folder -20261026-1957"
metadata:
  node_type: memory
  type: project
  originSessionId: c2cb917d-39e6-4962-82b1-7cc1f9b59c65
  modified: 2026-10-26T13:08:28.279Z
---

26 Okt 2026, ide dari "Shorts Animator" (@tobiadonadon_). Folder `video-prompt-generator-lukisan-20261026-1957-potret-id/`: cerita Bu Rina (ide game → tak bisa coding → Si Bulat buka Prompt Generator → pilih game + topik pecahan kelas 4 → prompt jadi → tempel ChatGPT/Claude/Gemini → game hidup di kelas → Galeri Prompt 100+ → "Cek link di bio").
- Narasi: OpenRouter `elevenlabs/eleven-v4-turbo` suara "sarah" (tier termurah $0,04/1k huruf; 502 huruf ≈ $0,02). Kunci = OPENROUTER_API_KEY dari env Netlify site prompt-game-edukasi (limit $5, sisa ±$1,78).
- Mesin: paint.js (sapuan kuas ikut tepi + tekstur kanvas), scenes.js, main.js, mix.mjs (musik sintesis 90 BPM + SFX). Ubah naskah.json → `node ~/.claude/skills/video-tipografi-suara/scripts/tts-openrouter.mjs .` (hanya baris berubah dibayar).
- Mode ini dimasukkan ke skill video-tipografi-suara (references/lukisan-tts.md, contoh/lukisan-*). Lihat [[project-video-tipografi-suara-skill]], [[project-prompt-generator-game]].
