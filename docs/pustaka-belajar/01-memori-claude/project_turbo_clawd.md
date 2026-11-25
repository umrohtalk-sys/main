---
name: project-turbo-clawd
description: "Turbo Clawd — balap mobil mainan 3D + item + Gerbang Angka; LIVE game-preview + template Prompt Generator 23 Nov 2026"
metadata:
  node_type: memory
  type: project
  originSessionId: 487b015d-9fac-48d0-8542-4668d0dee66c
  modified: 2026-11-23T14:06:25.960Z
---

Dibuat 23 Nov 2026: user minta game "ala Hot Wheels arena" balap seru (rujukan rasa Temple Run/Sonic), banyak skill, matematika di tengah perjalanan, ada cerita, push GitHub + preview.
- Folder `game-turbo-clawd-20261123-2029-arena-balap-matematika/` (three.js lokal ES module, js/00..08 + 99, BACA-SAYA.md). launch.json `turbo-clawd` port 8990.
- Lintasan = kurva rel (s, x lateral), petunjuk "atas" per titik kontrol (loop tidak terbalik), SK skala 1.5, 4 putaran, 2 gerbang/putaran (masuk lajur warna jawaban). 4 arena cerita: Rak Mainan, Jembatan Wastafel (angka 8), Bukit Bunga, Benteng Comot (juara 1, Raja Comot jatuhkan bom). Tokoh: Clawd, Nini, geng Comot. ID + BM.
- Uji: `node uji/uji.mjs <url> <putaran>` (32 cek, lulus lokal & live), `uji/balapan-penuh.mjs <url> <arena> [salah]` untuk keseimbangan (jawab benar semua ≈ juara tipis vs Raja Comot).
- LIVE https://preview.edugamelabs.com/kertas-tinta/games/turbo-clawd/ (game-preview 3f2fab1, kartu kat "besar"). Zip ~/Downloads/turbo-clawd-20261123-2106-…-netlify.zip. Fix AI lajur gerbang: game-preview a56d8ca.
- 23 Nov: dipasang ke Prompt Generator (commit 68469da, LIVE generator.edugamelabs.com): template besar `turbo-clawd` di js/template-kt.js + KT_IDE, KW_TPL hot wheels/balap/racing/kart/drift (pakai \b supaya 'kartu' tidak kena), tema dipandu 'lari', i18n MS/EN, prompt detail 3 bahasa ditulis agen Haiku (±14k karakter), cache v=20261123, contoh/kertas-tinta/games/turbo-clawd/.
Lihat [[project-clawd-kilat]], [[project-prompt-generator-game]].
