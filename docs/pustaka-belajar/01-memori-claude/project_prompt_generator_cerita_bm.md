---
name: project-prompt-generator-cerita-bm
description: "Video 60s BM cerita Cikgu Aina + promosi Prompt Generator, gaya video launch, narasi ElevenLabs via OpenRouter, folder -20261026-2017"
metadata:
  node_type: memory
  type: project
  originSessionId: c2cb917d-39e6-4962-82b1-7cc1f9b59c65
  modified: 2026-10-26T13:22:16.222Z
---

26 Okt 2026. Folder `video-prompt-generator-cerita-20261026-2017-potret-ms/` = salinan [[project-prompt-generator-launch-video]] (visual & lagu 132 BPM sama, node_modules symlink ke folder launch). Hanya hook BM diubah ("Murid ketagih / Mobile Legends… / Cikgu pun boleh?").
- Narasi 18 ayat di naskah.json, setiap ayat punya `at` (detik mula dikunci ke babak); tts-openrouter.mjs kini menyokong `at` + `dur`. Suara sarah, eleven-v4-turbo.
- Audio: render Remotion (lagu+tap) → `sh campur-vo.sh` (lagu merunduk saat narasi, −14 LUFS).
- Output ~/Downloads/prompt-generator-cerita-20261026-2021-60s-ms-potret.mp4. Belum ada versi ID.
- Biaya narasi: $0,03704 (985 huruf termasuk revisi) ≈ Rp 669 pada kurs Rp 18.050. Video lukisan ID: $0,02008 ≈ Rp 362. Lihat [[project-prompt-generator-lukisan-video]].

## Revisi ikut suara (26 Okt 2026 20:33) — TERKINI
User mahu video IKUT PERKATAAN, bukan lagu; lagu cuma latar kecil; jangan bayar ElevenLabs lagi. Folder `video-prompt-generator-cerita-20261026-2026-ikut-suara-ms/`: narasi sama disusun berurutan dari cache (0 huruf dibayar, 61,8 s), komposisi baru `Cerita-MS` (src/scenes/Cerita.tsx + src/VideoCerita.tsx): 18 adegan = 18 ayat, tulisan skrin = perkataan diucap muncul ikut words (src/lib/vo.ts dijana dari words.js), kata kunci oren; lagu volume 0.09. Komponen lama diekspor dari Launch.tsx. Output ~/Downloads/prompt-generator-cerita-20261026-2033-ikut-suara-62s-ms-potret.mp4.

## Copy baru BM + ID (26 Okt 2026 21:17) — TERKINI
User: BM kaku, buang Cikgu Aina, copy utama "cara paling mudah bikin apps & game, dengan prompt", tambah ID Rp 99.000. Folder `video-prompt-generator-cerita-20261026-2112-copy-baru-ms-id/`: vo-ms/ & vo-id/ (naskah.json santai: "je", "lepas tu" / "kayak gini", "tinggal ketik"), model **eleven-v4** (bukan turbo) suara **jessica**, biaya dua bahasa $0,13224 ≈ Rp 2.387. Komposisi Cerita-MS & Cerita-ID (Cerita.tsx dua bahasa: tx(), wa() calon "a|b", src/lib/vo-{ms,id}.ts). Output ~/Downloads/prompt-generator-cerita-20261026-2117-copy-baru-{ms,id}-potret.mp4 (67,7 s / 69 s).

## Versi ID MiniMax (26 Okt 2026 21:32)
Folder `video-prompt-generator-cerita-20261026-2130-minimax-id/`: naskah ID sama, model **minimax/speech-2.8-turbo** ($0,06/1k huruf), suara **Indonesian_CharmingGirl** (MiniMax terima ID suara di luar daftar OpenRouter; Indonesian_ConfidentWoman/SweetGirl juga sah). Asli 78 s → atempo 1.12 (masa kata dibahagi 1.12) → 69,8 s. Biaya $0,05112 ≈ Rp 923. Saldo kunci selepas: $1,5628 ≈ Rp 28.209. Output ~/Downloads/prompt-generator-cerita-20261026-2132-minimax-turbo-id-potret.mp4.
