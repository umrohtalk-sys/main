# LAPORAN: Bulat Rebut Wilayah / Bulat Rebut Wilayah

Konsep #5 "Rebut Wilayah" (`02-riset-game-remake/top10-prompt.md`, bahagian itu sahaja) dibina semula sebagai game ORIGINAL. Tahap ketelitian: **standard** (+ enjin logik diuji ketat). Siap, statik HTML/CSS/JS tanpa build, boleh seret ke Netlify Drop. Gaya kerja dan struktur mengikut `11-game-gabung-nombor/`.

## Apa yang ada
- Folder: `~/Downloads/dapur-token-jalan-20261121-1403/19-game-rebut-wilayah/` dengan `index.html`, `css/gaya.css`, `js/` (logic, data, i18n, seni, audio, game), `uji/` (logik, bot, main-auto, senario), `bukti/`, `brief-game.md`, `netlify.toml`, `README.txt`.
- **Mekanik** (hanya "lukis laluan keluar, tutup kawasan, capai peratus" diambil): grid 20x20. Si Bulat bergerak sendiri satu petak setiap 105 ms; sapu (telefon) atau anak panah/WASD (desktop). Di atas kawasan biru ia bebas; keluar ke petak kosong melukis ekor kuning; kembali ke kawasan biru menutup lelaran: **ruang kosong yang tiada kutu menjadi milik**. Tidak boleh berpatah 180 semasa melukis.
- **Sasaran tepat dalam julat:** setiap tahap ada julat (cth 60%-63%). Capai julat = menang. Tawanan yang membuat peratus melebihi had **dibatalkan** (tiada nyawa hilang, mesej "Terlebih!") jadi pemain mesti merancang kawasan kecil; tawanan 1 petak sentiasa mungkin (ekor pendek), jadi tidak pernah buntu.
- **Matematik pada skrin:** sasaran dipapar sebagai peratus, pecahan bertingkat (3/5), perpuluhan (0.6 papan; koma pada ID) atau jumlah (1/4 + 1/5, 0.35 + 1/4), dengan setara ("= 60% = 0.6"). Peratus semasa sentiasa dipapar bersama pecahan ringkas dan perpuluhan ("47% = 47/100 = 0.47"), bar dengan julat hijau dan penanda, "Kurang N% lagi". Skrin hasil menunjukkan pengiraan ("1/4 + 1/5 = 5/20 + 4/20 = 9/20 = 45%").
- **10 tahap:** 25%, 40%, 1/2, 0.3, 3/5, 55%, 1/4+1/5, 0.7, 3/4, 0.35+1/4. Batu penghalang, 1-4 musuh: kutu bola (pantul serong) dan kutu pemburu (mengejar kepala). Tahap terkunci berurutan.
- **Skor, bintang, simpanan:** skor ikut % ditawan + bonus ruang tertutup + bonus nyawa; bintang 3/2/1 ikut nyawa hilang (0/1/2+); terbaik + bintang + bahasa + bunyi disimpan dalam localStorage (try/catch).
- **Maskot:** Si Bulat (bulatan biru bermata) dan kutu peronda dilukis sendiri dengan Canvas 2D (`js/seni.js`): 4 mood (senang, gembira, oops, fikir), mata mengikut arah gerak, bereaksi kepada tawan/terlebih/dipotong.
- **Bunyi Web Audio sintesis:** keluar, ekor (nada naik ikut panjang), tawan (arpeggio lebih panjang ikut luas), terlebih, dipotong, menang, kalah, klik; butang senyap.
- **Dwibahasa BM/ID** (butang di menu dan bar atas; "Tawan/Rebut", "Kawasan/Wilayah", "Tahap/Level").
- Semua ikon SVG; tiada emoji, CDN atau font luar. Layout 375 px (kanvas disesuaikan ikut ruang), dua lajur pada >= 860 px, sasaran sentuh >= 44 px.
- Nama dan rupa ialah milik sendiri; tidak meniru game .io komersial.

## Ujian dan bukti (semuanya lulus pada larian akhir)
| Ujian | Hasil |
|---|---|
| `node uji/logik.mjs` | 42/42: musuh bermula di petak kosong, gelung 11 ekor + 4 ruang = 19 petak, ruang dengan kutu tidak dipenuhi / tanpa kutu dipenuhi, ekor dipotong = nyawa 3->2 dan pemain pulang, langgar ekor sendiri, tiada patah 180, terlebih dibatalkan tanpa hukuman, menang 3 bintang / 2 bintang, 3000 langkah musuh kekal di petak kosong, pecahan ringkas, setiap sasaran pecahan/perpuluhan/jumlah sepadan dengan peratus |
| `main-uji.mjs` (skill) + `uji/senario.json`: menu -> BM -> peta (tahap 2 terkunci) -> tahap 1 -> melukis ekor -> Ulang; tukar ID/BM di tengah main | lulus, telefon 390x844 + desktop 1366x768, 0 ralat konsol, 0 fail hilang |
| `node uji/main-auto.mjs` (telefon 375x667 @2x: **sapu sentuh**; desktop: **kekunci**) | lulus penuh pada kedua-dua peranti (telefon 40 semakan, desktop 40 semakan): tahap 1 dimenangi **masa nyata**; tahap 2-10 dimenangi bot (jam maya `?uji=1`); peta 10 tahap terbuka + bintang; terlebih dibatalkan (kawasan sama, nyawa 3, mesej "Terlebih"); ekor dipotong x3 -> kalah -> Ulang; langgar ekor sendiri; jeda (P) + Teruskan; tukar ID tengah main; tahap 7 papar dua pecahan dan 45%; titik (BM) / koma (ID); simpanan selepas muat semula; tiada skrol mendatar; sasaran sentuh >= 44 px; kanvas penuh dalam skrin |

Bot ujian (`uji/bot.mjs`) mencari gelung U/L, **menyemak ke hadapan dengan enjin sebenar** (musuh pantul), lalu mengikut laluan petak demi petak melalui masukan sebenar (sapu / kekunci). Dalam 20 simulasi Node setiap tahap (tanpa cuba semula) bot menang tahap 1-7 dan 9 sepenuhnya; tahap 6 (kutu pemburu), 8 dan 10 sukar (sekitar 65-85%), jadi imbangan ini sengaja menjadikan tahap akhir mencabar.

Bukti: `bukti/auto-telefon-*.png` (375x667 @2x), `bukti/auto-desktop-*.png`, `bukti/asas-bm-*`, `bukti/tukar-id-*`, laporan `bukti/auto-laporan-telefon.md`, `auto-laporan-desktop.md`, `laporan.md`. Cadangan lihat dahulu: `auto-telefon-04-melukis-ekor.png`, `05-tawan-kilau.png`, `06-hasil-tahap1.png`, `09-peta-bintang.png`, `auto-desktop-12-terlebih-dibatalkan.png`, `13-ekor-dipotong.png`, `14-hasil-kalah.png`, `auto-telefon-10-tahap10-mid-ekor.png`, `17-tahap7-jumlah-pecahan-id.png`. (`auto-*-08-hasil-tahap5/7/10` ialah tangkapan hasil tahap 5, 7, 10.)

## Keputusan reka bentuk yang perlu diketahui
- **Peraturan isian:** kawasan kosong tanpa kutu menjadi milik. Mengurung kutu dalam kotak kecil lalu menutup menjadikan seluruh baki peta milik pemain (strategi sah, tetapi boleh membawa kepada "Terlebih!" dan dibatalkan). Diterangkan dalam teks cara bermain.
- **Tiada masa:** tekanan datang daripada kutu dan julat tepat, bukan jam. Mudah ditambah jika mahu.
- Bot lawan yang merampas kawasan (dalam prompt asal) TIDAK dilaksanakan; diganti kutu peronda yang memotong ekor, mengikut permintaan.
- Tiada soalan kuiz berasingan; sasaran itu sendiri ialah soalan (tukar bentuk pecahan/perpuluhan/peratus).

## Masih perlu dimainkan manusia
- Rasa sapu pada telefon sebenar (ambang 14 px) dan kelajuan 105 ms/petak; bunyi sebenar (ujian headless tidak boleh dengar; kod bunyi tiada ralat).
- Kesukaran untuk murid sebenar: tahap 8 dan 10 (musuh banyak + pemburu) mungkin terlalu sukar bagi sesetengah murid; kelajuan musuh (`v`), julat (`lagi`) dan bilangan musuh mudah ditala dalam `js/data.js`.
- Tiada deploy dibuat; tiada zip dalam ~/Downloads (hanya tulis dalam folder ini, ikut arahan).
