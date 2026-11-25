---
name: project-bola-hamster-clawd
description: "Bola Hamster Clawd — game bola hamster (gaya Hamsterball) remake enjin Petualangan Fotosintesis, 4 trek + gerbang soalan matematik asas, BM/EN, LIVE di preview + template di Prompt Generator Pro (13 Nov 2026)"
metadata:
  node_type: memory
  type: project
  originSessionId: c6190b89-57a4-4952-a871-5cc1d6089f88
  modified: 2026-11-13T12:48:18.382Z
---

Dibuat 13 Nov 2026. Sumber kerja `game-bola-hamster-clawd-20261113-1929-matematik-bm-en/` (folder: index.html + css/game.css + js/01..10 + 99, BACA-SAYA.md); salinan Netlify `~/Downloads/game-bola-hamster-clawd-20261113-1947-netlify-bm-en/`.
- Clawd dalam bola lutsinar, 4 trek grid teks (Taman Biji, Jambatan Ais, Kilang Gear, Menara Awan), gerbang = baris 3 pintu jawapan `G` (salah melantun + jadi dinding), biji, titik simpan, 5 nyawa, 3 bintang. Tahap Mudah/Sederhana/Mencabar. BM lalai + EN.
- Ujian: `?uji=1&demo=1&tr=N` autopilot BFS (menunggu pelantar berhenti), `?uji=1&preview=1&skip=9` untuk sampul (headless Chrome tidak memajukan rAF, jadi skip simulasi dulu). launch.json `bola-hamster-clawd` port 8971; repo PG terkini `pg-repo-terkini` port 8972.
- Push: prompt-generator b8e84e9 (template KT id bola-hamster-clawd, bhs ms, KW_TPL hamster ball/marble/monkey ball, dipandu tema 'lari', DETAIL ms+en), game-preview eb329e0 (LIVE preview.edugamelabs.com/kertas-tinta/games/bola-hamster-clawd/).

Lihat [[project-prompt-generator-game]], [[project-petualangan-fotosintesis]], [[project-koleksi-game-clawd]].

13 Nov 2026 20:03: prompt detail kini 3 bahasa (id ditambah, commit 48d0c22). Paket game + prompt: `~/Downloads/bola-hamster-clawd-20261113-2003-game-dan-prompt/` (+ .zip): game-netlify/ + prompt/PROMPT-{ms,en,id}.md. User mahu setiap game baru disertai prompt-nya juga.
