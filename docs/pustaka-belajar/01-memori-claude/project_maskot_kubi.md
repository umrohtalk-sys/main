---
name: project_maskot_kubi
description: Kubi — sistem maskot piksel lintas-app (50 varian SVG, palet Claude), dibuat 8 Sep 2026
metadata:
  type: project
---

Maskot lintas-app bernama **Kubi**: karakter piksel 17×18 unit bergaya referensi Kevin Ngo, palet Claude (badan coral #D97757, latar krem #F0EEE6, mata arang #20201E, aksen biru/hijau/emas/ungu maks satu per maskot). 50 varian: Ekspresi 16, Pose 10, Aksesori 14, Peran 10.

Sumber: `maskot-claude-20260908-1900/` di folder app matematika — `gen.mjs` (generator grid piksel, satu-satunya tempat bentuk diedit), `build.mjs` (artboard + sprite), `svg/*.svg`, `kubi-sprite.svg` (`<use href="#kubi-<id>">`), `kubi.json`.
Kanvas desain: https://claude.ai/code/artifact/1bb5b62f-bee2-4c89-af90-eddbc60f4d99

**Why:** dimaksudkan dipakai ulang di semua app (lihat [[project_english_kita]], [[project_kido_belajar_inggris]], [[project_basic_life_for_kids]]), bukan aset sekali pakai.

**How to apply:** kalau butuh varian/warna baru, edit `gen.mjs` lalu jalankan ulang `node gen.mjs && node build.mjs` — jangan edit file SVG hasilnya satu per satu. Skala pakai kelipatan bulat (16/32/48/64) supaya piksel tetap tajam. Ikuti [[feedback_versioned_filenames]] untuk folder revisi berikutnya.
