---
name: project-pg-galeri-roblox-video
description: Versi gaya "classai.id" dari video manfaat PG+Galeri untuk guru — avatar voxel Roblox 3D (Three.js) warna PG, latar gelap + grid + cahaya oranye, folder -20261029-2020
metadata:
  type: project
---
29 Okt 2026. Folder `video-pg-galeri-manfaat-roblox-20261029-2020-90s-potret-id/`. Isi & suara sama dengan [[project-pg-galeri-manfaat-edukator-video]]; gaya dirombak meniru referensi ~/Downloads/telegram-cloud-document-5-62758509449995_frames (classai.id: judul 1 baris kata demi kata, kartu UI melayang miring, avatar voxel berkupluk di bawah, besar↔kecil).
- src/Avatar.tsx: avatar Three.js (@remotion/three, render --gl=angle), kupluk voxel instanced oranye, kaos garis krem/oranye, pose (wave/fists/cheeks/point/thumbs/typing/cheer/chin/show) + wajah tekstur piksel 24x22.
- User minta wajah TANPA kumis, terlihat anak muda & elegan → tidak ada garis gelap di atas mulut, tanpa poni hitam di dahi, bibir merah muda, mata besar berkilau.
- src/Roblox.tsx: jadual avatar KEYS, isi tengah per adegan. Render ./render.sh (render + loudnorm) → ~/Downloads/pg-galeri-manfaat-roblox-<waktu>-90s-potret-id.mp4.

## Versi realistis + lip-sync (29 Okt 2026, folder -20261029-2045-realistis-lipsync-potret-id) — TERKINI
- Avatar ditulis ulang: RoundedBoxGeometry, bayangan (ThreeCanvas shadows, key light 4096), RoomEnvironment, mata 3D (putih/iris/pupil/kilau + kelopak turun saat kedip), alis 3D, hidung, mulut 3D (rongga/gigi/lidah/bibir) terbuka ikut amplitudo vo/env.js (src/lib/env.ts) + bentuk A/E/O/M dari huruf kata.
- Hidup: kedip acak (kadang ganda), lirikan mata (saccade), angguk saat kata penekanan, napas.
- Ikon diganti src/Icons.tsx (AIc): tergambar saat muncul + gerak sesuai makna (jam berputar, lonceng berdering, hati berdetak, koin berputar, piala berkilau). User tolak ikon statik "slop".
- Cek wajib sebelum render: Lab composition (`node _render/stills.mjs 0,1,…,15 lab Lab`) → frame layout → urutan frame bibir/ikon. User minta "cek 3 kali" sebelum jadi video.

## Versi suara laki-laki (31 Okt 2026, folder -20261031-0444-suara-laki-potret-id) — TERKINI
- Gaya sama dengan versi realistis; narasi eleven-v4 suara **liam** (85,5 s). Sisa kunci OpenRouter ±US$0,76.
- Ganti suara: ubah "voice" di vo/naskah.json → tts-openrouter.mjs vo → salin suara.wav ke public/ + jana ulang src/lib/vo.ts & env.ts.
