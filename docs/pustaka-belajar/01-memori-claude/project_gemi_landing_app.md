---
name: project-gemi-landing-app
description: "Landing page Gemi App — terkini -20260923-1945-maskot-baru (15 maskot SVG kucing biru baharu, BM, belum deploy); live lama gemi-app-landing.netlify.app"
metadata: 
  node_type: memory
  type: project
  originSessionId: 5cc09934-0f4b-4e24-86b7-aae8ba9d87c5
  modified: 2026-09-18T22:08:53.543Z
---

Versi terkini 2026-09-23 19:45: `gemi-landing-20260923-1945-maskot-baru/` — artifact https://claude.ai/artifact/FxdqmyyeSMLxTSq7DVKGM4, preview launch.json "gemi-lp-maskot" port 8797, **belum deploy**. Semua maskot lama (44 pose) diganti **15 SVG kucing biru bertali leher** yang user hantar dari `~/Downloads/svg gemi/cat_*.svg` (Quiver AI, 80x80): bag book cheer cool cup dengar globe heart hero laptop nota puzzle scope tablet wave. `_sumber/jana-maskot.py` menjana `assets/maskot/` — ia bungkus mata dalam `<g class="gm-k">` (kelip: scaleY 1→0.06, animasi `kelopakb` dalam lp.css) dan anak mata dalam `<g class="gm-p">` (melirik), dan pangkas viewBox ke bbox sebenar (jadual BBOX/MATA diukur dengan getBBox dalam pelayar — jangan kira semula dengan tangan). cheer/cool/dengar/heart mata tertutup → tiada kelip. `gen.mjs` ada peta `PETA` nama pose lama → baharu supaya kod lama kekal jalan; lp.js `_kelip` kini semak `.gm-l,.gm-k`. Folder turun 6.9 MB → 1.1 MB. Pose `cup` sengaja tidak dipakai (user pernah tolak maskot pegang cawan).

Versi sebelumnya 2026-09-19 19:30: `gemi-landing-20260919-1930-asas-bina-app/` — artifact https://claude.ai/artifact/TB6Rh2yo1dAaa85ksYVYBN, preview launch.json "gemi-lp-asas" port 8795, belum deploy. Sumber app kini `gemi-app-20260919-1807-modul-bina-app` (25 modul, 319 pelajaran, 118 kuiz, ±27j, 4 trek termasuk Bina App M23–25). Copy dalam **Bahasa Malaysia** (user tegaskan), fokus: belajar asas (blueprint, anatomi app, verify) supaya boleh bina app/game edukasi sendiri; ekosistem Google utama + Claude (M03, M20, M21 sahaja — jangan lebih-lebihkan). Seksyen baru #alat; demo Bina Prompt diganti App Blueprint mini (kad putih, TIDAK sticky — user kata kotak hitam sticky mengganggu). Pose `coffee` ditolak user (nampak kotor) — guna `winkthumb` di harga.
Versi sebelumnya: `gemi-landing-20260919-0441-svg-interaktif/` — dijana `node _sumber/gen.mjs` (lp.css + lp.js + gen.mjs → index.html + _sumber/artifact.html). **Belum deploy Netlify.** Artifact review: https://claude.ai/artifact/FZV3kAehjh9nxZGnjfEAcF. Preview: launch.json "gemi-lp-svg" port 8794.
Versi lama: `-20260915-0320-bk2-hd` (BK2 + PNG HD, tak deploy), `-20260912-2015-hd-mobile` (live di gemi-app-landing.netlify.app, site id 5b07b0ba-546d-4090-b8d9-6166ae4a6ee2).

Edisi SVG: token & komponen ikut kulit app [[project-gemi-maskot-svg-hidup]] (bukan BK2 sahaja); gen.mjs salin 44 SVG dari app itu. Maskot `.gm` = button, SVG dimasukkan sebaris (fetch) → berkelip, pupil ikut kursor, condong 3D, menoleh ikut arah skrol, tekan = lompat + pose reaksi + zarah + gelembung kata. Replika HTML 5 skrin app (Beranda, Pembaca, Fokus, Kuiz, Pustaka) boleh dicuba; bar tab terapung gaya app + teman Gemi ikut seksyen.

**Why:** user mahu LP dan app terasa satu pengalaman, maskot SVG sangat interaktif, mobile & PC enak, copywriting dianalisa; cek 3x sebelum publish artifact.
**How to apply:** fakta app sebenar (sumber -20260919-1807-modul-bina-app): 25 modul, 319 pelajaran, 118 soalan kuiz, 4 trek, TIADA sijil (jangan janji sijil), harga RM15 sekali bayar, tiada "percuma". LINK_BELI dalam gen.mjs masih `#pasang` (tunggu pautan bayaran). Peraturan tetap: maskot tak boleh tertutup/menutup teks, tiada penyok, butang .gm perlu lebar eksplisit (button tak isi lebar sendiri), selector CSS `x span` akan timpa fon ikon Material — guna `x>span`. JANGAN `will-change:transform` pada maskot dalam kad overflow:hidden.
