# Brief game (satu halaman): Bulat Rebut Wilayah

- **Matlamat belajar:** murid menukar antara peratus, pecahan dan perpuluhan (25% = 1/4 = 0.25; 3/5 = 60% = 0.6; 1/4 + 1/5 = 45%) dan menganggar luas kawasan sebagai bahagian daripada keseluruhan papan.
- **Pemain:** murid SD Tahun 5-6 hingga SMP/Tingkatan 1-2 (MY + ID).
- **Bahasa:** BM dan ID, butang tukar di menu dan bar atas setiap skrin; titik perpuluhan (BM) / koma (ID).
- **Gelung main:** baca sasaran ("Tawan 3/5 papan" = 60%) -> sapu / anak panah gerakkan Si Bulat -> keluar dari kawasan biru, lukis ekor -> kembali ke kawasan biru -> ruang yang tiada kutu menjadi milik -> peratus + pecahan setara dikemas kini -> capai julat tepat.
- **Menang / kalah:** menang bila peratus (dibundar) berada dalam julat tepat (cth 60%-63%). Tawanan yang melampaui had dibatalkan (tanpa hukuman nyawa) supaya pemain merancang kawasan kecil. Kalah bila 3 nyawa habis (ekor dipotong kutu peronda atau terlanggar ekor sendiri). Bintang ikut nyawa hilang (0 = 3 bintang).
- **Tahap ketelitian:** `standard` (+ senario menang/kalah/ulang/terlebih/tukar bahasa/simpanan, sentuhan 44 px, 375 px); `ketat` untuk enjin logik (`uji/logik.mjs`).
- **Tahap kandungan:** 10 tahap, peta 20x20, sasaran: peratus (25, 40, 55), pecahan (1/2, 3/5, 3/4), perpuluhan (0.3, 0.7), jumlah (1/4 + 1/5, 0.35 + 1/4). Julat 4 mata peratus pada tahap 1-6, 3 mata pada tahap 7-10. Kutu bola (pantul serong) dan kutu pemburu (mengejar), batu penghalang, 1 hingga 4 musuh.
- **Gaya:** peta kartun lembut (kertas krim, kawasan biru berpetak), butang besar. Maskot **Si Bulat** (bulatan biru bermata) dan kutu peronda dilukis sendiri dengan Canvas 2D (`js/seni.js`); semua ikon SVG, tiada emoji.
- **Aset sebenar:** tiada (semua dijana: Canvas, SVG, Web Audio). Tiada CDN, tiada font luar.
- **Mekanik diambil daripada rujukan:** hanya "lukis laluan keluar, tutup kawasan, capai peratus sasaran". Nama, rupa, peraturan julat tepat, pembatalan terlebih dan kutu peronda adalah milik sendiri. Tidak meniru game .io komersial.
- **Tidak boleh:** salin game komersial, data peribadi murid, iklan.

## Senario ujian
1. `uji/senario.json` (main-uji skill): menu -> BM -> peta (tahap 2 terkunci) -> tahap 1 -> melukis ekor -> Ulang; tukar ID/BM di tengah main.
2. `uji/main-auto.mjs` (telefon: sapu sentuh, desktop: kekunci): tahap 1 masa nyata; kemudian jam maya `?uji=1` untuk semua tahap 2-10, terlebih dibatalkan, ekor dipotong x3 -> kalah -> Ulang, langgar ekor sendiri, jeda, tukar ID, perpuluhan titik/koma, simpanan selepas muat semula, semakan layout.
3. `uji/logik.mjs`: 42 semakan enjin.
