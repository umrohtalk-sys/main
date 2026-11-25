---
name: project-game-kertas-tinta
description: "5 game edukasi gaya kertas & tinta (remake Lompat Hitung) dengan galeri pratinjau animasi + prompt; folder game-kertas-tinta-5-variasi-20261017-1219, belum deploy"
metadata:
  node_type: memory
  type: project
  originSessionId: 342524cd-487e-42c6-9d16-aa8c78352ae0
  modified: 2026-10-17T07:00:57.100Z
---

Folder `game-kertas-tinta-5-variasi-20261017-1219`: galeri index.html + 5 game (peta-harta, pesawat-kata, ketapel-pecahan, tangkap-huruf, duel-tinta), kit bersama kit/ink.js + ink.css. Tokoh Si Bulat (bukan hero piksel). Belum deploy (17 Okt 2026).

**Why:** User minta preview berupa animasi HTML, BUKAN video, supaya hemat. Pratinjau = iframe game dengan ?preview=1 (main otomatis, hanya jalan saat terlihat).

**How to apply:** Game baru cukup panggil INK.game({...}) dengan start/stage/update/draw/demo. Lihat [[project-lompat-hitung]] dan [[project-prompt-generator-game]].


## Update 17 Okt 2026 14:54
Folder baru game-kertas-tinta-6-fotosintesis-20261017-1454 = 5 game + Petualangan Fotosintesis (kartu feat). SUDAH deploy sebagai contoh/kertas-tinta/ di prompt-game-edukasi.netlify.app. Lihat [[project-petualangan-fotosintesis]].

## Revisi 17 Okt 2026 15:48 — digabung ke katalog, tanpa main otomatis (LIVE, deploy 6ad337af)
Folder situs `prompt-generator-game-20261017-1548-kertas-tinta-satu`. User TIDAK mau galeri/section terpisah dan TIDAK mau AI main otomatis.
- 7 game = template kategori "Kertas & tinta" di TPL (js/template-kt.js: KT_GAMES, promptKT, own:true), prompt di laci yang sama; sampul diam vid/template/<id>-edu.jpg; tombol kartu "▶ Main".
- contoh/kertas-tinta/index.html hanya redirect ke #kertas; link `#tpl=<id>` membuka laci prompt. Sidebar link & sorotan Beranda dihapus.
- ?demo/?preview di game hanya aktif dengan ?uji=1 (untuk tangkapan layar internal; sejarah/fotosintesis juga &langsung=1 lewati kartu bab).
