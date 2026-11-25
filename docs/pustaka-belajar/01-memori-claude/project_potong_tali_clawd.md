---
name: project-potong-tali-clawd
description: "Potong Tali Clawd — game ala Cut the Rope + Soal Bintang, folder -20261023-1325, localhost 8866, belum deploy"
metadata:
  node_type: memory
  type: project
  originSessionId: bbedb6c8-93e7-4dee-9742-c5340f10eb3f
  modified: 2026-10-23T06:39:49.514Z
---

Game ala Cut the Rope (permintaan 23 Okt 2026), siri Clawd seperti [[project-clawd-vs-zombi]] dan [[project-mahkota-clawd]].
Folder `game-potong-tali-clawd-20261023-1325-cut-the-rope-matematika/`, zip Netlify di ~/Downloads, preview `.claude/launch.json` nama `potong-tali-clawd` port 8866. Belum deploy.

- Matematika: permen sentuh bintang → fisika berhenti → Soal Bintang (benar = bintang, salah = retak).
- 12 level dalam array `LEVELS` (papan logik 320×480); 2 kotak, Kotak Kain perlu 8 bintang.
- `window.__game.cari(i, n)` = pemecah rawak; setiap ubah level, jalankan semula untuk pastikan 3 bintang masih boleh.

**Why:** Level fizik mudah jadi mustahil bila koordinat diubah; pemecah menjamin boleh diselesaikan.
**How to apply:** Bila tambah/ubah level, semak `cari()` untuk semua level sebelum serah.
- 23 Okt 2026: dipasang ke Prompt Generator (template kertas & tinta + prompt detail 3 bahasa) dan LIVE di preview.edugamelabs.com/kertas-tinta/games/<id>/ (repo game-preview).
