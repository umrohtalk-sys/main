# LAPORAN: Kedai Pantas / Warung Cepat

Game edukasi web ORIGINAL berdasarkan konsep "Kedai Pantas" (bahagian 6, `02-riset-game-remake/top10-prompt.md`). Dibina dengan skill `studio-game-web`, tahap **standard**.

## Folder
`~/Downloads/dapur-token-jalan-20261121-1403/12-game-kedai-pantas/`
- `index.html`, `css/gaya.css`, `js/` (`data.js`, `i18n.js`, `seni.js`, `bunyi.js`, `game.js`), `favicon.svg`, `netlify.toml`, `README.txt` (statik, tanpa build, boleh seret ke Netlify Drop)
- `brief-game.md` (brief satu halaman), `uji/` (`senario.json`, `main-penuh.mjs`), `bukti/` (tangkapan skrin + `laporan.md` + `laporan-bot.md`)

## Apa yang dibina
- **Gelung**: pelanggan masuk dengan pesanan (gelembung ucapan) -> ketik barang di rak (beg + jumlah langsung) -> Tahap 3: pilih jumlah selepas diskaun -> ketik wang pelanggan untuk menerimanya -> ketik syiling/not hingga baki tepat -> Beri baki.
- **Pemasa sabar** (bar di bawah pelanggan, wajah pelanggan bertukar marah). Sabar habis = pelanggan pergi, hilang 1 daripada 3 nyawa. Silap = masa sabar -2.5 s, kombo reset, petunjuk "terlalu banyak / belum cukup".
- **Kombo & skor**: (100 + hingga 100 ikut baki sabar) x pengganda kombo 1.0 hingga 2.0. Bintang: 1 = habis, 2 = skor >= pelanggan x 180, 3 = >= x 250; kalah = 0.
- **3 tahap**: T1 satu jenis barang (6 pelanggan, sabar 30 s); T2 dua/tiga jenis (8, 26 s); T3 diskaun 10/20/25/50% (10, 22 s). Rekod bintang + skor terbaik di localStorage (try/catch).
- **Dwibahasa**: butang BM / ID. BM = RM + sen, kedai runcit, Nasi lemak; ID = Rp, warung, Tempe, istilah "kembalian/uang". Denominasi syiling dan not ikut negara.
- **Maskot Si Bulat** (bulatan biru bermata, topi kecil kuning) dilukis sendiri dalam SVG dengan 4 mood (tenang, gembira, oops, sorak) yang bereaksi kepada betul/silap. 6 rupa pelanggan (termasuk bertudung dan berpeci), 9 ikon barang, syiling dan not, ikon UI: semua SVG sendiri, tiada emoji.
- **Bunyi Web Audio** sintesis (ketik, koin, betul, kombo, silap, loceng masuk, pergi, menang, kalah) + togol senyap.
- **Reka bentuk**: butang >= 44 px, jeda (juga auto bila tab disembunyikan), `prefers-reduced-motion`, desktop dua lajur (>= 900 px).
- Penjana pesanan dijamin baki positif dan kelipatan unit (10 sen / Rp 500), diskaun hanya bila jumlah selepas diskaun bulat; diuji 300 pesanan x 3 tahap x 2 negara.

## Ujian dan bukti (semua lulus)
1. `main-uji.mjs` skill (390x844 + 1366x768): menu BM, kalah ID tahap 3 (nyawa 0), menang tahap 1 (nyawa 3). Tiada ralat konsol, tiada skrol mendatar, tiada fail hilang, tiada sasaran sentuh < 44 px.
2. `uji/main-penuh.mjs`: bot **mengetik sebenar** pada telefon 390x844, telefon 375x667 dan desktop 1366x768:
   - T1 BM dengan silap sengaja (barang salah, baki kurang, baki lebih) kemudian betul sehingga 6/6 dilayan, 3 bintang.
   - Tukar bahasa ke ID; T3 dengan diskaun (pilihan salah lalu betul), 10/10 dilayan, 3 bintang.
   - Main semula (skor reset), kalah (masa dipercepat, 3 pelanggan pergi, 0 bintang), kembali ke menu, jeda/sambung.
   - Semakan susun atur setiap fasa: tiada tindih gelembung/maskot/penanda, panel tidak terpotong, tiada skrol mendatar. Semua LULUS (lihat `bukti/laporan-bot.md`).
3. Bukti paling berguna (dalam `bukti/`): `bot-telefon390-t1-bm-01-barang.png`, `bot-telefon390-t3-id-03-diskaun.png`, `bot-telefon375-t3-id-07-baki.png`, `bot-desktop-t3-id-07-baki.png`, `bot-telefon390-t3-id-09-hasil.png`, `bot-telefon390-menu-bm.png`.

Masalah yang ditemui dan dibaiki semasa ujian: gelembung bertindih papan nama di telefon (papan disembunyikan < 900 px); butang "Beri baki" melimpah keluar skrin (lebar flex); gradien SVG Si Bulat pudar kerana id berganda dalam menu tersembunyi (id unik); ruang kosong di telefon tinggi (adegan fleksibel).

## Perlu dimainkan oleh manusia
- Rasa seronok dan kesukaran sebenar murid Tahun 4-6 (bot sentiasa pantas; ambang 180/250 per pelanggan dan sabar 22-30 s belum diuji dengan kanak-kanak).
- Kejelasan istilah diskaun peratus dan bunyi pada peranti sebenar (autoplay perlu ketikan pertama; sudah dikendalikan).
- Tiada deploy dilakukan (tidak diminta). Fon Google Fonts pilihan; ada fallback sistem.
