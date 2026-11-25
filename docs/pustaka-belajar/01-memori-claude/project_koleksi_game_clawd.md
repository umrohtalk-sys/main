---
name: project-koleksi-game-clawd
description: "Folder gabungan 3 game Clawd (Arena, Bilik Misteri, Lastik) berstruktur sama dengan situs Prompt Generator, siap salin/unggah; belum dipasang ke situs"
metadata:
  type: project
---

Dibuat 20 Okt 2026 atas permintaan user ("jadikan satu folder rapi, mau upload ke prompt generator").
Folder `game-clawd-koleksi-20261020-1714-siap-prompt-generator/` (+ zip di ~/Downloads):
- `contoh/arena-clawd/` (v2, identik dengan yang sudah ada di situs), `contoh/kertas-tinta/games/bilik-misteri-clawd/` dan `lastik-clawd/` (BARU), `vid/template/<id>-edu.jpg` sampul 960×600.
- `koleksi-clawd.html` galeri kecil (sengaja bukan index.html supaya tidak menimpa index situs).
- `_sumber/<id>/game.html + build.sh` (build menulis ke path contoh/), `_sumber/data-template-kt.js` = entri KT_GAMES + KT_IDE siap tempel + catatan baris `bhs` (ketiganya BM).
Belum dipasang ke js/template-kt.js situs dan belum deploy. Lihat [[project-prompt-generator-game]], [[project-arena-clawd]], [[project-bilik-misteri-clawd]], [[project-lastik-clawd]].

## 23 Okt 2026 — LIVE
User mengupload sendiri; dicek: ketiga game (contoh/arena-clawd, contoh/kertas-tinta/games/bilik-misteri-clawd & lastik-clawd), sampul, dan entri KT_GAMES tampil di prompt-game-edukasi.netlify.app.
