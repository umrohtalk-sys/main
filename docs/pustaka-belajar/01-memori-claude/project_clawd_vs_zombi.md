---
name: project-clawd-vs-zombi
description: "Game ala Plants vs Zombies siri Clawd: tanaman Clawd vs zombi Comot lucu + Soal Matahari; folder -20261023-1037, zip Netlify di Downloads, localhost 8851, belum deploy"
metadata:
  type: project
---

Dibuat 23 Okt 2026 selepas [[project-mahkota-clawd]]; user minta "persis seperti Plants vs Zombies", Claude/Clawd vs zombi lucu, ada soal matematik, output folder Netlify + preview localhost.
- Folder `game-clawd-vs-zombi-20261023-1037-plants-vs-zombies-matematika/` (satu index.html, Canvas 2D). Zip: ~/Downloads/game-clawd-vs-zombi-20261023-1037-plants-vs-zombies-matematika-netlify.zip.
- Kebun 5×9, rumah Clawd kiri + gerobak sekali pakai per baris, jalan kanan. Tanaman: Matahari, Penembak, Tembok, Ranjau, Penembak Es, Ceri Bom, Ganda (+ sekop). Zombi Comot: Biasa, Kon, Ember, Bendera.
- 5 Hari (level), tiap hari buka tanaman baru; simpan kemajuan di localStorage `clawd-vs-zombi`.
- Soal Matahari di bawah kebun: betul +50 (kombo 3 = +75), salah kunci 2 s.
- HP tegak: #app diputar 90° (body.putar) supaya kebun mendatar; koordinat input lewat lp()/lrect(). Menu tetap tegak.
- Localhost: launch.json "clawd-vs-zombi" → node .claude/serve-clawd-vs-zombi.mjs. Kait ujian `__game.lewatiMula/tanam/zombi/jawabUji/habiskan/percepat`.
- 23 Okt 2026: dipasang ke Prompt Generator (template kertas & tinta + prompt detail 3 bahasa) dan LIVE di preview.edugamelabs.com/kertas-tinta/games/<id>/ (repo game-preview).
