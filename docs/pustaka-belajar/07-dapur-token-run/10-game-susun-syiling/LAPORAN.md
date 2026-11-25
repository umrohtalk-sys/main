# LAPORAN — Susun Syiling / Susun Koin

Tahap ketelitian: **standard** (brief satu halaman, 4 senario, semak keterbacaan & sentuhan 44 px). Game ORIGINAL berdasarkan konsep #1 dalam top10-prompt.md; tiada aset/nama komersial disalin.

## Isi folder
`index.html`, `css/gaya.css`, `js/` (data, i18n, audio, seni, game), `uji/senario.json`, `bukti/` (33 fail: 32 PNG + laporan.md), `brief-game.md`, `netlify.toml`, `README.txt`. Statik, tanpa build; seret ke Netlify Drop.
Satu penyimpangan daripada prompt asal konsep: pecah beberapa fail (ikut arahan tugas), bukan satu index.html tunggal.

## Apa yang dibina
- 8 tahap mudah → sukar: 2 tong/5 slot/3 syiling → 4 tong/3 slot/5 denominasi; had masa 36–40s; sasaran 4–8 tong.
- Ketuk syiling → ketuk tong. Tepat = tong penuh (+100, kombo +25 setiap rantai); terlebih = tong kosong, -1 nyawa (5 nyawa); butang Tukar (-5 mata); masa habis = -1 nyawa dan ulang tahap; bonus masa; bintang tahap (1–3) dan bintang akhir ikut nyawa.
- Dwibahasa BM/ID (menu + semasa main, disimpan): RM + sen (RM 0.60) / Rp (Rp 300).
- Clawd ketam oren SVG sendiri, 3 mood (biasa, gembira, oops) bereaksi pada sebab-akibat. Ikon SVG, tiada emoji. Syiling SVG berwarna ikut nilai.
- Bunyi Web Audio sintesis (denting naik nada ikut kombo, bunyi salah, tahap siap, menang/kalah) + butang bisu. Papan skor 10 teratas dalam localStorage (try/catch).
- Penjana tong menjamin sentiasa boleh diselesaikan (syiling dibekal dari "pelan" tong; Tukar sentiasa beri syiling yang muat sesuatu tong).

## Ujian automatik (main-uji.mjs, telefon 390x844 + desktop 1366x768)
Keputusan akhir: **semua senario lulus, tiada ralat konsol, tiada fail hilang, tiada skrol mendatar, tiada sasaran sentuh < 44 px** (`bukti/laporan.md`).
| Senario | Apa disemak | Hasil |
|---|---|---|
| menang-bm | klik sebenar syiling+tong, selesai 8 tahap, hasil menang | lulus; skor 9515, 3 bintang |
| kalah-id | terlebih sampai nyawa 0, skrin kalah, main semula reset | lulus |
| tukar-bahasa | ID -> Rp, tukar ke BM semasa main -> RM, bahasa kekal selepas muat semula | lulus |
| masa-dan-tukar | ketuk tong tanpa pilih, pilih/nyahpilih, Tukar, masa habis -1 nyawa + ulang tahap | lulus |

Pembetulan semasa ujian: satu langkah ujian saya silap (bilangan klik ganjil), dibetulkan dan dijalankan semula; papan skor mula-mula memaparkan bintang kosong sebagai penuh, dibetulkan CSS.

## Tangkapan skrin utama (`bukti/`)
- `menang-bm-telefon-01-menu.png`, `...-02-tahap1.png`, `...-03-syiling-dipilih.png`, `...-05-hasil-menang.png`
- `menang-bm-desktop-04-tuang.png` (animasi tuang + tong terisi)
- `kalah-id-telefon-02-terlebih.png`, `kalah-id-desktop-03-hasil-kalah.png`
- `tukar-bahasa-*-01-rupiah.png` / `02-ringgit.png`, `masa-dan-tukar-*-03-masa-habis.png`

## Belum / perlu manusia
- Laporan penuh dijalankan sebelum dua perubahan CSS kecil terakhir (papan skor bintang); hanya senario kalah-id dijalankan semula selepasnya. Jalankan semula suite penuh sebelum jual.
- Penyolver automatik tidak menguji rasa seronok, kesukaran sebenar atau kelajuan murid; had masa dan sasaran tong perlu ditala selepas dimainkan murid Tahun 4–6.
- Hanya tangkapan skrin dilihat untuk 7 daripada 32 gambar; selebihnya lulus semakan automatik tetapi belum dilihat satu-satu (terutama tahap 5–8 dengan 4 tong dan 3 slot).
- Ketuk-ketuk sahaja (tiada seret). Bunyi tidak dapat didengar dalam ujian headless. Belum diuji pada peranti sebenar atau pembaca skrin; PWA/offline tiada. Mata wang ID guna Rp 50 sebagai syiling terkecil (nilai sejarah).
- Tiada deploy dan tiada zip dibuat (arahan: tulis hanya di folder ini).
