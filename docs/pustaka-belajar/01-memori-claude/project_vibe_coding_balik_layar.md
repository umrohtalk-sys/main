---
name: project_vibe_coding_balik_layar
description: "Reel 56.6s ID \"di balik layar vibe coding\" — HyperFrames + ElevenLabs Liam via OpenRouter, presenter SVG, brand Prompt Generator"
metadata:
  node_type: memory
  type: project
  originSessionId: 78ecf266-478c-4bf6-885c-812a7a82a885
  modified: 2026-10-30T22:55:31.156Z
---

Folder `video-vibe-coding-balik-layar-20261031-0400-potret-id/` (dibuat 31 Okt 2026). Final: `out/vibe-coding-balik-layar-20261031-0600-potret-id.mp4` (1080x1920, −14.6 LUFS).

- Gaya copy meniru video rujukan user (Ucup beli followers): "Pernah kepikiran…", tokoh (Bayu, guru kelas 4), kalimat pendek, twist di akhir. Arahan visual = brief kertas krem/ink/merah, kartu halftone, presenter berkacamata + hoodie.
- Suara: ElevenLabs `eleven-v4-turbo` voice `liam` via OpenRouter (model ini TOLAK param speed → percepat 1.1 dengan ffmpeg atempo). Kunci OpenRouter ada di env Netlify site prompt-game-edukasi.
- Transkrip rujukan: `google/gemini-2.5-flash-lite` via OpenRouter (input_audio, ~$0.001). Cap masa kata tetap faster-whisper `small` lokal (medium lambat diunduh).
- Semua komposisi dijana oleh `src/build.mjs` (edit di sana, lalu `node src/build.mjs`, `npx hyperframes check`, render ±12–17 min). Openverse sering timeout → musik disintesis `src/musik.py`.

**Why:** user mahu explainer menarik proses prompt→token→server→AI→kode→browser untuk app/game edukasi.
**How to apply:** revisi teks/waktu di build.mjs; tukar suara = rekam ulang naskah.txt lalu jalankan potong-jeda.py, waktu-kata.py, siapkan-audio.py. Related: [[project_prompt_generator_game]] [[reference_opus_video_repos]]
