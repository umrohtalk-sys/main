---
name: project-final-boss-matematik
description: "Game kuiz Final Boss BM — Si Bulat (Claude No Code) lawan Raja Bug, 4 topik × 5 soalan KBAT, folder -20261009-0136, belum deploy"
metadata:
  node_type: memory
  type: project
  originSessionId: 88f998f1-9e5a-49cc-8e28-84bf978cc9c1
  modified: 2026-10-08T18:54:42.205Z
---

2026-10-09: game web statik `app matematika/final-boss-matematik-20261009-0136-si-bulat-vs-raja-bug/` (zip di ~/Downloads/final-boss-matematik-20261009-0154-…zip). Belum deploy.
- Rujukan user: papan pendahulu Clash Royale (trek nod), banner "BOSS 來襲!" jalur bahaya, reben "Начать бой" pedang bersilang, match-3 wira vs naga (HP bar). Watak ikut app Claude No Code: Si Bulat wira berpedang, bos Raja Bug (kumbang ralat ungu bermahkota, fasa 2 "mengamuk" mata merah bila HP ≤ 40).
- Soalan dalam js/soalan.js (Pecahan, Peratus & Wang, Ukuran, Pola & Algebra); pilihan salah ada ayat "perangkap", isian ada `perangkap` ikut nilai salah biasa. Item: Ubat, Petunjuk 50:50, Perisai, Kristal x2; kombo 3 → item percuma. Mod Masa 90 s boleh dimatikan.
- Muzik/SFX disintesis di js/audio.js (lagu menu/lawan/amuk). Uji: `window.__game` + launch.json "final-boss" (node serve.mjs port 8877).
**How to apply:** pelajaran: jangan beri kelas generik (.bos/.wira/.kecil) pada elemen lain — bertembung; jangan bergantung pada requestAnimationFrame untuk logik (pane tersembunyi menjeda rAF).

**Revisi 2026-10-09:** user minta soalan "jangan sulit-sulit" → folder baharu -20261009-0200-soalan-lebih-mudah, soalan asas Tahun 3–4 (rajah baharu petak & bintang). Versi KBAT asal kekal di -0136.

**Deploy 2026-10-10:** versi -0200 LIVE di https://final-boss-matematik.netlify.app (siteId 62d1d9f7-101a-4c4d-ae3b-2b4e6e02bbdb).
