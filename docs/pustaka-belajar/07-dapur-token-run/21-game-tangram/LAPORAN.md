# LAPORAN — Gemi Tangram

Konsep #8 "Puzzle Tangram" (`02-riset-game-remake/top10-prompt.md`), dibina sebagai game ORIGINAL. Tahap ketelitian: **standard** (+ enjin padanan diuji ketat). Statik HTML/CSS/JS, tanpa build, boleh seret ke Netlify Drop. Rujukan struktur: `11-game-gabung-nombor/`.

## Apa yang ada
- Folder: `~/Downloads/dapur-token-jalan-20261121-1403/21-game-tangram/` — `index.html`, `css/gaya.css`, `js/` (geo, data, i18n, maskot, audio, game), `uji/`, `bukti/`, `brief-game.md`, `netlify.toml`, `README.txt`, `favicon.svg`.
- **Mekanik:** 7 kepingan (2 segi tiga besar, 1 sederhana, 2 kecil, segi empat sama, segi empat selari) diseret dengan sentuh/tetikus. Putar 45° (butang Putar, ketik kepingan terpilih, kekunci R), Balik (butang / F; hanya segi empat selari berbeza bila dibalik), Petunjuk (H). Melekat ke siluet bila bentuk + putaran + kedudukan betul (toleransi 0.62 unit, simetri dikira automatik). Putaran salah di dekat slot → "Hampir! Putar atau balikkan" + Gemi oops.
- **Pecahan:** setiap kepingan melekat memaparkan "Segi tiga kecil = 1/16 daripada keseluruhan" di gelembung Gemi. Bila lengkap, kepingan bercahaya satu demi satu dengan label 1/4, 1/8, 1/16 pada siluet, lalu kad hasil: bintang, jadual pecahan (luas/8) dan "1/4 + 1/4 + 1/8 + 1/8 + 1/8 + 1/16 + 1/16 = 1", ditambah satu fakta (2 kecil = 1 sama, dll).
- **13 siluet** bertema MY/ID: ketupat, rumah, perahu, wau/layang-layang, kucing, rumah gadang, gunung, rumah panggung, ayam, ikan, menara, burung, pokok kelapa. Jana sendiri oleh `uji/jana-siluet.mjs` (carian susunan berpandu: tepi bertemu tepi, tiada tindih, tiada lubang, dipadankan kepada sasaran kasar, IoU 0.74–0.88); `uji/bina-data.mjs` → `js/data.js`. Bukan set tangram komersial.
- **Kesukaran:** tahap 1–6 ada garis dalam siluet + sebahagian kepingan terpasang (4,3,3,2,2,1); tahap 1–3 kepingan bermula dalam putaran betul; tahap 7–13 tanpa garis, tanpa kepingan awal, kepingan diputar/dibalikkan rawak.
- **Bintang** = 3 − (masa > par) − (masa > 2×par) − min(2, petunjuk), minimum 1. Petunjuk berulang pada slot sama tidak ditolak lagi. Bintang, bahasa, bunyi disimpan dalam localStorage (try/catch), tahap dibuka berurutan.
- Dwibahasa BM/ID (butang di menu + bar atas; nama kepingan "Segi tiga…" ↔ "Segitiga…", "Segi empat selari" ↔ "Jajargenjang"), Web Audio sintesis (ambil, putar, balik, klik padanan nada naik, petunjuk, pecahan, menang; butang senyap), Gemi kucing oren SVG sendiri (4 mood), semua ikon SVG (tiada emoji), tiada CDN/font luar. Layout 375 px: papan skala ikut `svh`, butang ≥ 44 px, dua lajur ≥ 860 px.

## Ujian dan bukti (semua lulus)
| Ujian | Hasil |
|---|---|
| `node uji/logik.mjs` | 475/475: luas 8, pecahan = luas/8 jumlah 1, setiap siluet 7 kepingan tepat, tiada tindih, muat zon, padanan (putaran 45° salah ditolak, segi empat selari terbalik ditolak, segi empat sama simetri 90°, jenis lain ditolak), 13/13 siluet boleh diselesaikan, peraturan bintang |
| main-uji skill `uji/senario.json` (telefon 390×844 + desktop 1366×768) | menu→BM→peta (kunci)→siluet 1→petunjuk→Ulang→selesai→kad hasil; tukar ID/BM di tengah main; 0 ralat konsol, 0 fail hilang |
| `node uji/main-auto.mjs telefon` (375×667 @2x, **sentuh**) dan `desktop` (**tetikus**) | 45/45 semakan setiap peranti: main SEBENAR kesemua 13 siluet (ketik pilih → Putar/Balik → seret), uji "hampir", petunjuk, bintang 3/2/1, Seterusnya, Ulang, tukar ID, simpanan selepas muat semula, butang ≥ 44 px, tiada skrol mendatar, 0 ralat |

Bukti: `bukti/auto-telefon-*.png`, `bukti/auto-desktop-*.png`, `bukti/asas-bm-*`, `bukti/tukar-id-*`, laporan `bukti/auto-laporan-telefon.md`, `auto-laporan-desktop.md`, `laporan.md`. Lihat dahulu: `auto-telefon-04-hampir.png`, `auto-telefon-11-sukar-separuh.png`, `auto-telefon-12-hasil-kucing.png`, `auto-telefon-02-peta.png`, `auto-desktop-06-reveal-atau-hasil.png`.

Bug yang ditemui ujian dan sudah dibaiki: label pil bahasa kosong (kunci i18n salah), kepingan awal tidak berwarna (CSS mengatasi atribut fill).

## Masih perlu dimainkan manusia
- Rasa seret dengan jari pada telefon sebenar (kepingan kecil, hit area diperluas 0.5 unit) dan bunyi sebenar (headless tidak boleh dengar).
- Padanan hanya menerima susunan penyelesaian sedia ada; siluet yang boleh disusun secara berbeza (tukar tempat kepingan berbeza jenis) tidak akan melekat; Petunjuk membantu.
- Keserupaan siluet: kucing, wau dan pokok kelapa agak abstrak (tangram hanya 7 kepingan). Nilai sama ada nama sesuai; ganti dengan `node uji/jana-siluet.mjs 5000 <id> uji/x.json <benih>`.
- Imbangan par/kesukaran perlu diuji pada murid sebenar (`uji/bina-data.mjs`, nilai par dan kunci awal).
- Tiada deploy, tiada zip (hanya tulis dalam folder ini, ikut arahan).
