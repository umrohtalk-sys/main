# LAPORAN — Menara Si Bulat / Menara Si Bulat (konsep #10 Jangkaan Tumpukan)

Game ORIGINAL, tahap **standard** (+ enjin logik diuji ketat), statik tanpa build, siap seret ke Netlify Drop. Hanya idea "jatuhkan blok, potong lebihan" diambil daripada konsep rujukan.

## Apa yang ada
- Folder: `~/Downloads/dapur-token-jalan-20261121-1403/23-game-jangkaan-tumpukan/` — `index.html`, `css/gaya.css`, `js/` (logic, data, i18n, maskot, audio, game), `uji/`, `bukti/`, `brief-game.md`, `netlify.toml`, `README.txt`.
- **Mekanik:** blok bergayut (tali) berayun; ketik kanvas / butang Jatuhkan / Space. Bahagian terkeluar dipotong dan jatuh berputar; menara menyempit. Pembaris berskala (cm/m) di tepi, garis sasaran putus-putus beranotasi, lebar pada blok dan HUD ("Tinggi 0,4 m / 0,6 m", "Lebar blok 95 cm").
- **Tahap sasaran ukuran:** 8 tahap, 0,6 → 2,0 m (6–20 lapisan × 10 cm); "Lebar blok mesti ≥ 30–40 cm" (kalah bila lebih sempit). Kelajuan, lebar awal, toleransi bertambah sukar (`js/data.js`).
- **Tepat sempurna:** ≤ 4→2,5 cm: bonus skor berganda ikut kombo, kilat + zarah, kombo 2+ memulihkan 5 cm lebar.
- Kamera naik lembut, skor, 1–3 bintang (ikut bilangan tepat sempurna), kunci tahap berurutan, rekod terbaik dalam localStorage (try/catch).
- Bunyi Web Audio sintesis (jatuh, potong, nada naik ikut kombo, menang, kalah, butang senyap). Ikon SVG, tiada emoji/CDN/font luar.
- Si Bulat (bulatan biru + topi pembina) dilukis sendiri pada Canvas 2D, 4 mood, menunggang blok dan bereaksi (sempurna → gembira, potong besar → oops).
- BM/ID (butang di menu & bar atas): Tahap/Level, blok/balok, ketik/ketuk, "harus", dll.
- Layout 375 px: semua butang ≥ 44 px (disemak), tiada skrol mendatar; desktop ruang tengah.

## Ujian dan bukti (semua lulus)
| Ujian | Hasil |
|---|---|
| `node uji/logik.mjs` | 26/26: potong kiri/kanan, perfect, miss, kombo pulih, bintang, skor, format m; tiap tahap boleh dimenangi sempurna dan pemain ofset 45% pasti kalah |
| `node uji/main-auto.mjs telefon` | ketukan **sentuh sebenar** pada butang: tahap 2 terkunci, potongan (120→95→75 cm), tepat sempurna, menang 8 tahap via "Seterusnya", peta 8/8 terbuka, kalah (terlalu sempit) + alasan, Ulang, kelajuan penuh tanpa bantuan, bahasa ID, simpanan selepas muat semula, 0 ralat konsol |
| `node uji/main-auto.mjs desktop` | sama dengan kekunci Space, 1366×768 |

Bukti: `bukti/auto-telefon-*.png` (375×667 @2x), `bukti/auto-desktop-*.png`, `bukti/auto-laporan-*.md`. Lihat dahulu: `*-04-potong.png`, `*-08-tengah-tahap8.png`, `*-10-peta-bintang.png`, `*-11-kalah.png`.

## Masih perlu dimainkan manusia / catatan jujur
- Bot ujian meletakkan blok berayun pada ofset yang dikehendaki (`__game.sejajarkan`) lalu mengetik dengan input sebenar; masa ayunan sebenar hanya diuji dengan ketukan tanpa bantuan (lapisan naik, tiada ralat), bukan ketepatan manusia. Kesukaran tahap 5–8 (toleransi 3–2,5 cm) perlu dirasa murid; boleh ditala di `js/data.js`.
- Kes "terlepas langsung" (miss) ditutup oleh `logik.mjs`, tetapi hampir mustahil berlaku dalam permainan (julat ayunan sentiasa bertindih menara) sehingga tidak dilalui senario UI.
- Bunyi tidak dapat didengar dalam ujian headless (kod tiada ralat). Anggaran (soalan angka) tiada; unsur anggaran ialah membaca pembaris/sasaran sebelum mengetik.
- Tiada deploy, tiada zip; hanya menulis dalam folder ini.
