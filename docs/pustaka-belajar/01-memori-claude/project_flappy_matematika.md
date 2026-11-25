---
name: project-flappy-matematika
description: "Bulat Terbang — flappy 3D (three.js) + gerbang soal matematika SD ID, remake ide Mosswing, folder -20261009-0209, belum deploy"
metadata:
  type: project
---

2026-10-09: user minta repo github.com/Ayi1337/gpt6-astra-one-shot-games "jadi game sungguhan" + flappy wajib jawab soal matematika dulu. Repo tanpa lisensi → kode ditulis baru (hanya three.min.js r160 MIT disalin, baris console.warn dibuang + prefix `!`).
Folder `app matematika/flappy-matematika-20261009-0209-si-bulat-3d/`, zip ~/Downloads/flappy-matematika-20261009-0217-…-netlify.zip. Belum deploy. Artifact 1XhFvDsq12ANCg8hd5axHv (dari artifact.html + css/js; republish file yang sama).
- Si Bulat (palet Claude No Code) terbang lewat menara kubus angka; soal pemanasan, Gerbang Soal tiap 5 menara, nabrak → soal "hidup"; 3 nyawa. 3 tingkat kelas (1–2, 3–4, 5–6), soal acak di js/soal.js, uji/logik.mjs.
- `window.__game.simulasi(detik)` + `autopilot` untuk uji tanpa rAF.
- Game kedua di repo (瓜体实验室 / semangka cair) belum dibuat ulang.
**How to apply:** revisi → folder bertimestamp baru; muka Si Bulat digambar di tekstur bola (u≈0.31), sayap di belakang agar tidak menutupi muka.

Related: [[project-final-boss-matematik]]

**Revisi 2026-10-09:** user: "jangan sulit-sulit, buat mudah dan ada yang sulit" → folder -20261009-0221-mudah-sulit, pilihan Tingkat terbang Mudah (lalai) / Sulit di objek TINGKAT game.js (kelas hanya atur soal); rekor per kelas+tingkat (bt_terbaik2). Artifact sama (1XhFvDsq…) kini dari artifact.html folder ini.
