# LAPORAN — Teka Ejaan Harian / Tebak Kata Harian

Konsep #9 "Teka Ejaan Harian" (`02-riset-game-remake/top10-prompt.md`), dibina sebagai game ORIGINAL. Tahap: **standard** (+ ujian logik ketat). Statik HTML/CSS/JS, tanpa build, siap seret ke Netlify Drop. Rujukan struktur: `11-game-gabung-nombor/`.

## Apa yang ada
- Folder: `~/Downloads/dapur-token-jalan-20261121-1403/22-game-teka-ejaan/` — `index.html`, `css/gaya.css`, `js/` (data, logic, i18n, maskot, audio, game), `uji/`, `bukti/`, `brief-game.md`, `netlify.toml`, `README.txt`, `favicon.svg`.
- **Mekanik**: teka kata 5 huruf dalam 6 cubaan; hijau/blok penuh = tepat, kuning berjalur = ada tapi salah tempat, kelabu = tiada (huruf berulang ditangani betul). Papan kekunci di skrin (diwarnakan) + papan kekunci fizikal. Kata tak sah menggegar papan dan tidak dikira.
- **Dua bahasa** (butang di menu): BM 177 kata jawapan / 457 kata sah; ID 159 jawapan / 410 kata sah. Semua jawapan ada maksud; senarai disusun sendiri, tiada kata kasar (ujian senarai hitam).
- **Kata Hari Ini**: susunan berbenih tetap ikut tarikh, semua murid dapat kata sama; kemajuan hari ini dipulihkan selepas muat semula; **Latihan** rawak tanpa had.
- Selepas tamat: kata, maksud, teks kongsi petak `█ ▒ ░` (tanpa emoji, `*` jika guna Petunjuk), butang Kongsi (clipboard), statistik (main, menang %, streak, rekod, agihan cubaan) per bahasa dalam localStorage (try/catch). Butang Petunjuk (mentol) memaparkan maksud lebih awal.
- **Mod Cikgu**: tampal senarai kata mana-mana subjek (`kata=maksud`, huruf a-z, 3-10 huruf, maks 60; huruf beraksen dinormalkan, duplikat dibuang) -> pautan `#kata=...` (base64url JSON, UTF-8 selamat). Murid membuka pautan terus ke permainan; panjang petak mengikut kata; tekaan tidak disemak kamus; "Kata seterusnya". Pautan rosak diabaikan.
- Clawd ketam oren (SVG sendiri, 4 mood + papan tulis di menu), ikon SVG, bunyi Web Audio sintesis (ketik, petak, menang, kalah, ralat; butang senyap), `prefers-reduced-motion`.

## Ujian dan bukti (semua lulus)
| Ujian | Hasil |
|---|---|
| `node uji/logik.mjs` | 38/38: penilaian petak (7 kes huruf berulang dikira tangan), kata harian deterministik dan semua kata berbeza dalam satu kitaran, semalam hujung bulan/tahun, integriti data (5 huruf, tiada duplikat, makna, jawapan ⊂ kata sah, ≥150, senarai hitam), cikgu hurai/pautan pusingan penuh termasuk Unicode, pautan rosak/berbahaya, teks kongsi |
| `node uji/main-auto.mjs telefon` (375x667 @2x, ketuk papan kekunci skrin) dan `desktop` (1366x768, papan kekunci fizikal) | menu, BM harian (kata pendek, bukan kata, 2 cubaan salah, petunjuk, menang, kongsi, statistik, muat semula pulih), Latihan kalah (X/6, kata didedahkan) + Latihan lagi, ID (mesej, arti, latihan), Mod Cikgu (jana pautan, murid buka dalam halaman baharu, tekaan bebas kamus, menang, kata seterusnya, Cuba main), pautan rosak; tiada skrol mendatar, sasaran sentuh butang >= 44px, 0 ralat konsol/sumber hilang |

Bukti: `bukti/auto-telefon-*.png`, `bukti/auto-desktop-*.png`, laporan `bukti/auto-laporan-telefon.md`, `auto-laporan-desktop.md`. Lihat dahulu: `auto-telefon-03-dua-cubaan-petunjuk.png`, `04-hasil-menang.png`, `07-hasil-kalah.png`, `10-cikgu.png`, `12-murid-hasil.png`.

## Masih perlu dimainkan manusia / catatan jujur
- Kekunci huruf di telefon 375px lebar 30px (tinggi 46px), piawai papan kekunci 10 lajur; butang lain semua >= 44px. Rasa ketukan dan bunyi sebenar belum didengar (headless).
- Hanya kata 5 huruf untuk BM/ID (mod cikgu 3-10). Prompt asal minta 5-7 huruf; diubah ikut arahan baharu. Kesukaran murid dan ketepatan makna perlu disemak guru (terutama sebutan Indonesia vs Melayu pada senarai ID).
- Senarai kata sah ialah ~460/~410, bukan kamus penuh: kata sah yang murid taip mungkin ditolak. Tambah di `js/data.js` (X_MS / X_ID).
- Kata Hari Ini guna tarikh peranti; tiada deploy, tiada zip (ikut arahan: tulis dalam folder ini sahaja).
