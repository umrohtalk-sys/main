---
name: project-video-ayah-hantar-adik
description: "Video potret BM 71s 'Ayah, hantar adik?' layar belah dua atas/bawah (ayah sibuk vs ayah luangkan masa), tanpa suara, SFX sahaja, gaya flat watak rig gaji-tetap"
metadata:
  node_type: memory
  type: project
  originSessionId: 2360a86f-1268-4b07-93f4-700d892ccab6
  modified: 2026-11-13T21:39:27.289Z
---

14 Nov 2026. Folder `video-hantar-saya-ayah-20261114-0429-belah-dua-bm/`. Remake rujukan ~/Downloads/igexport-DfkAlkKIfeu.mp4 (70.6 s "Antar aku, Yah", Indonesia) versi Malaysia: rumah teres, motor kapcai + helmet, pagar SK/SMK Taman Sri Murni, Jalur Gemilang berkibar, kerb hitam-putih, papan AWAS KAWASAN SEKOLAH; Darjah 1 → Tingkatan 2 → Tingkatan 5 → 10 tahun kemudian; penutup "Kita sangka masih banyak pagi. / Rupanya, dia dah pandai pergi sendiri."
**How to apply:** latar dilukis Canvas 2D terus dalam `js/film.js` (tiada plate Three.js); watak dari `rig.js` lama + helper baharu `motor()`, `rider()` (penunggang sisi bertopi keledar), `flag()` Jalur Gemilang, `drawBubbles` (dialog data BUB). Cover besar di jalur atas frame 0, cip umur di jalur bawah. SFX: 4 jana ElevenLabs (pagi-taman, motor-hidup, motor-jalan, akhir-sunyi; 320 kredit) + pakai ulang pop/pintu/loceng/langkah; `_alat/mix_sfx.py` (beds bergelung + EV), `_alat/selesai.sh` render.

Related: [[project-video-beban-gaji-tetap-fiqh]] [[feedback-judul-cover-pembuka]] [[feedback-musik-sfx-pakai-ulang]]
