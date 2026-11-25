---
name: project-siaga-merdeka-rts
description: "Game RTS ala Red Alert tentang perang kemerdekaan Indonesia vs Belanda/Jepang + soal sejarah/matematika; folder per bagian; localhost, belum deploy"
metadata:
  node_type: memory
  type: project
  originSessionId: a55eccf4-eb92-4561-bd1f-e53ec332e9cb
  modified: 2026-10-31T03:33:11.994Z
---

Dibuat 31 Okt 2026. Folder `game-siaga-merdeka-20261031-1006-rts-sejarah-id/` (index.html + css/dasar.css, css/game.css + js/00..12 + 99, struktur ala Arena Clawd Pro, lihat [[project-arena-clawd]] dan [[feedback-output-folder]]). Zip ~/Downloads/game-siaga-merdeka-20261031-1033-netlify-rts-sejarah.zip (sebelum perbaikan CSS kameo). LIVE, lihat bawah.
- RTS asli (bukan klon): Markas, Pembangkit, Gudang Rempah + Truk Rempah, Barak, Bengkel, Pos Radio (minimap), Pusat Siasat; turret Sarang Senapan/Meriam Benteng/Karung Pasir; unit Laskar Bambu Runcing, Penembak TKR, Regu Granat, Komandan Gerilya, Panser, Tank Rampasan, Meriam Gunung. Daya listrik, kabut perang, A*.
- 5 misi kampanye (Semarang, Surabaya, Ambarawa, Agresi II, Serangan Umum) + pertempuran bebas (NL/JP, 3 tingkat). Soal: Soal Logistik tiap 70 dtk (+400 Dana), kekuatan Serangan Umum & Hujan Mortir dilepas dengan menjawab soal. Mode soal sejarah/mtk/campur.
- Keseimbangan AI ada di js/06-ai.js (batas tentara per tingkat), angka unit di js/01-data.js.
- Preview: launch.json `siaga-merdeka` (node scratchpad serve-siaga.mjs, port 8970). Kait uji `window.__game` (misi/bangun/latih/lompat/serbuMarkas).

## LIVE (31 Okt 2026)
- Prompt detail ID: `prompt-siaga-merdeka-20261031-1111-detail-id.md` (folder app matematika), ±23 rb karakter; MS/EN BELUM dibuat (user minta ID dulu) → di bahasa MS/EN generator jatuh ke prompt umum promptKT.
- game-preview commit 79e1e31: `kertas-tinta/games/siaga-merdeka/` + sampul/siaga-merdeka.jpg + kartu DATA (kat besar). LIVE https://preview.edugamelabs.com/kertas-tinta/games/siaga-merdeka/
- prompt-generator commit 5c9136c: KT_GAMES entry (besar, feat), KT_IDE 3 ide, KW_TPL red alert/rts/strategi perang/agresi militer → siaga-merdeka (paling depan), dipandu strategi, DETAIL.id, vid/template/siaga-merdeka-edu.jpg.
- Sampul dibuat `scratchpad/sampul.mjs` (puppeteer-core dari skill studio-game-web, 960×600, kabut dimatikan).
- Perbaikan CSS: #grid-prod `grid-auto-rows: max-content` + .kameo-img flex:none (kameo tergencet di layar tinggi 600).
