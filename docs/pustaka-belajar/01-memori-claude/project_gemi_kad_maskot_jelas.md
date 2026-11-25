---
name: project-gemi-kad-maskot-jelas
description: gemi v3 + GEMI-ASSETS (card Spotlight, 44 pose bersih) — folder -20260917-1803-kad-maskot-jelas, belum deploy
metadata:
  type: project
---
Dibina 2026-09-17 daripada [[project-gemi-alur-interaktif]] guna `~/Downloads/GEMI-ASSETS.zip` (README aset = rujukan reka bentuk).
Pengguna komplen card lama: maskot tak nampak (putih mata transparan), kabur, ikon terlalu kecil.

**Why:** semua card/maskot mesti readable; pengguna minta cek satu-satu, output folder Netlify + artifact preview, jangan push/deploy dulu.
**How to apply:** `js/kad.js` = sistem card (KAD_MODUL pose/ikon/tema per modul, KAD_PANDUAN, gIk() ikon gemi, palet() ikut tema).
Tahap saiz: >=150 PNG art img/kad; 96–149 dilukis (cip min 10px, lencana min 22px); 44–95 maskot besar; <44 ikon sahaja.
img/maskot kini nama pose (hi.png…) — mImg() di ui.js + POSE_GANTI alih pose mata tertutup/kacamata. Card kategori Prompt Library tidak dipakai.
Artifact: app https://claude.ai/artifact/7uuT6fQPwA36cAR2P9JZM6, review https://claude.ai/artifact/7uaJYWAqfEE5vaqLK7DXeG
