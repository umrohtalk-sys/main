---
name: project-lp-pg-ketagihan
description: "LP promosi Prompt Generator \"aku ketagihan bikin apps\" ID+MS dengan animasi salin→tempel→app jadi, folder -20261024-2100, belum deploy"
metadata:
  node_type: memory
  type: project
  originSessionId: d20c6d29-f649-4c0a-839d-e1432e39c9f0
  modified: 2026-10-24T14:03:36.014Z
---

24 Okt 2026: folder `lp-prompt-generator-ketagihan-20261024-2100-id-ms/`. Tema ikut LP elegan [[project-lp-prompt-generator-id]] (krem, oranye #F05323, Outfit/DM Mono, Si Bulat).
- Sumber `_sumber/lp.html|lp.css|lp.js` + teks ID/MS & harga di `_sumber/jana.py` → `python3 _sumber/jana.py` menulis `site/` (index.html = ID, ms/index.html = MS, satu folder Netlify).
- Hero: panggung animasi frame = fungsi waktu t (kursor bawa chip prompt → jendela AI → HP), `window.__panggung(detik)` untuk uji (pane membekukan rAF).
- Galeri: 6 seri Clawd (Arena Clawd Pro = kartu besar PRO, mirip Mobile Legends) + 9 contoh lama. User minta HANYA video pratinjau, TANPA link ke game preview (preview.edugamelabs.com). Video di `aset/vid/`: arena-clawd-pro direkam `_sumber/rekam/rekam-arena-pro.mjs` dari ~/Downloads/game-preview-20261023-repo/kertas-tinta/games/arena-clawd-pro (folder game -2100-ml-lobi-hero-skin error AKUN is not defined); 5 Clawd lain = slaid tangkapan layar `_sumber/rekam/slaid-video.sh`.
- Revisi 24 Okt: hook "Cara termudah bikin app & game? Copy-paste prompt." + "karena semudah itulah aku ketagihan"; seksyen step by step 5 langkah (stepper + layar mock tool); daftar 50 game (DAFTAR_GAME di jana.py).
- Harga SATU paket (disahkan user): ID Rp 99.000, MS RM 29, sekali bayar selamanya = Prompt Generator 5 prompt/hari + akses semua galeri, tanpa bulanan. Tombol beli = WhatsApp pra-isi (link PG belum ada).
- Revisi 2 (24 Okt): user tak suka ciri AI (pil/ikon di eyebrow) → eyebrow & alis seksyen pakai Instrument Serif italic tanpa ikon. JANGAN tampilkan domain generator.edugamelabs.com (itu yang dijual). Semua pratonton HP potret 360x780 di aset/hp (tidak terpotong): app Grammo/JawiKu/KIDO/Cakap v1-v4-v5 direkam `_sumber/rekam/rekam-hp.mjs`, Arena Clawd Pro mod arena (splash data-uji masuk-game → Tamu → lobi lbMain → fdOk → hero → dfLock ×2), game Clawd lain = `slaid-hp.sh` dari tangkapan telefon. Galeri = 6 game + 6 app, filter Semua/Game/App.
- Localhost: launch.json "lp-pg-ketagihan" port 8952.
