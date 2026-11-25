---
name: project-liga-stik-pro
description: "Liga Stik Pro: sepak bola stickman gaya PES (Canvas 2D 3D-semu) 10 klub + soal matematika, ID/EN, LIVE preview 14 Nov 2026"
metadata:
  node_type: memory
  type: project
  originSessionId: e346a379-8a7c-4f65-8122-49d4f29a3dbd
  modified: 2026-11-14T13:02:26.508Z
---

Dibuat 14 Nov 2026 atas permintaan "game seperti PES, klub Man City/Man United, pemain stickman berwarna (Haaland, Ronaldo), soal matematika di tengah laga, gaya Claude Pro".
- Sumber `game-liga-stik-20261114-1920-pes-matematika-id-en/` (index.html + css/game.css + js/00..15, 99; BACA-SAYA.md, prompt/PROMPT-{id,ms,en}.md ditulis agen Haiku). Paket `~/Downloads/game-liga-stik-pro-20261114-2000-netlify-pes-matematika/` (+ .zip).
- 11v11 4-3-3, kamera siaran (js/06-kamera.js), 10 klub di js/03-klub.js (Ronaldo di Al Nassr), Soal Momen → Semangat + Tendangan Super, penalti/adu penalti dengan soal. Gaya Arena Clawd Pro (biru malam + emas).
- Uji: `node uji/main.mjs [menu|demo|laga|adu]` (puppeteer-core dari skill studio-game-web) → bukti/; `node uji/bot.mjs normal`; `node uji/sampul.mjs`. launch.json `liga-stik` port 9310.
- LIVE https://preview.edugamelabs.com/kertas-tinta/games/liga-stik-pro/ (game-preview 06358bd, kartu kat "besar"). Prompt Generator: commit c4a21c8 (template besar `liga-stik-pro` di js/template-kt.js, prompt detail ID/MS/EN = isi prompt/PROMPT-*.md, KW_TPL sepak bola/PES/football/Man City/Ronaldo, tema dipandu 'kuis'), LIVE generator.edugamelabs.com 14 Nov.

Lihat [[project-arena-clawd]], [[project-bola-hamster-clawd]], [[feedback-output-folder]].
