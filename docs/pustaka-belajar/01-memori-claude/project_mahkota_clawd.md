---
name: project-mahkota-clawd
description: "Game kartu ala Clash Royale siri Clawd + Soal Eliksir matematik; folder -20261022-2138, zip Netlify di Downloads, localhost 8841, belum deploy"
metadata:
  type: project
---

Dibuat 22 Okt 2026 selepas [[project-lari-clawd]]; user minta "semirip mungkin Clash Royale" (fitur + efek), tema [[project-arena-clawd]], preview localhost + output folder Netlify.
- Folder `game-mahkota-clawd-20261022-2138-clash-royale-matematika/` (satu index.html, Canvas 2D). Zip: ~/Downloads/game-mahkota-clawd-20261022-2138-clash-royale-matematika-netlify.zip.
- Arena 18×32, 2 lajur + sungai + jambatan, menara putri/raja (raja tidur → bangun), eliksir 10 (×2 minit akhir), dek 8 kad (tangan 4 + seterusnya): Pahlawan, Pemanah×2, Penyihir, Raksasa, Clawd Mini×4, Kumbang×3 (udara), Bola Api, Hujan Panah. Lawan AI Raja Comot (Santai/Tangguh).
- Matematik: panel Soal Eliksir atas kad, betul +2 (kombo 3 = +3), salah kunci 2.5 s.
- Efek: hitung mundur, kad jatuh + debu + jam pasang, guncangan, mahkota terbang, banner, emote, peti dibuka, trofi/koin di localStorage `mahkota-clawd`.
- Localhost: launch.json "mahkota-clawd" → node .claude/serve-mahkota-clawd.mjs. Kait ujian `__game.lewatiHitung/pasangKartu/jawabUji/rusakMenara/waktu`.
- Ucapan user "Kedua tidak ada olahraganya" ditafsir sebagai "tidak ada error-nya" — belum disahkan.
- 23 Okt 2026: dipasang ke Prompt Generator (template kertas & tinta + prompt detail 3 bahasa) dan LIVE di preview.edugamelabs.com/kertas-tinta/games/<id>/ (repo game-preview).
