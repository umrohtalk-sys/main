# LAPORAN — Gemi Gabung Nombor / Gemi Gabung Angka

Konsep #2 "Gabung Nombor" (`02-riset-game-remake/top10-prompt.md`), dibina semula sebagai game ORIGINAL. Tahap ketelitian: **standard** (+ enjin logik diuji ketat). Siap, tanpa build, boleh seret ke Netlify Drop.

## Apa yang ada
- Folder: `~/Downloads/dapur-token-jalan-20261121-1403/11-game-gabung-nombor/` — `index.html`, `css/gaya.css`, `js/` (logic, data, i18n, maskot, audio, game), `uji/`, `bukti/`, `brief-game.md`, `netlify.toml`, `README.txt`.
- **Mekanik** (hanya "gabung jubin sama dengan meluncur" diambil): papan 4×4 (3×3 pada tahap tolak terakhir). Sapu (telefon) atau anak panah/WASD (desktop). Dua jubin SAMA bergabung ikut operasi tahap:
  - Tambah: a+a (sasaran soalan "8 + 8 = ?" → jubin 16, "12+12", "24+24")
  - Tolak: a−a = 0, pasangan hilang; sasaran padam 7–9 pasang ("5 − 5 = ?")
  - Darab: a×a (4×4→16, 9×9→81, 16×16→256)
  - 9 tahap (3 per operasi), bahagi TIDAK dimasukkan (permintaan: tambah/tolak/darab).
- Soalan menjadi sasaran; setiap gabungan memaparkan persamaan ("3 × 3 = 9") di gelembung Gemi.
- Skor + rantai (gabungan serentak 1.5×, gerak berturut-turut menambah pengganda), bintang 1–3 ikut langkah (par), had langkah, "Buat asal" 3 kali, Ulang, kunci tahap berurutan, terbaik + bintang disimpan dalam localStorage (try/catch).
- Animasi: jubin meluncur, pop kenyal pada hasil gabung, letupan zarah, "+skor" terbang, papan berkilau ketika rantai, goyang bila gerak buntu, bintang muncul bergilir.
- Bunyi Web Audio sintesis: nada naik mengikut rantai (skala pentatonik), bunyi berbeza ikut operasi, menang/kalah, butang senyap.
- Dwibahasa BM/ID (butang di menu + bar atas setiap skrin; "Tolak" ↔ "Kurang", "Darab" ↔ "Kali", dsb.).
- Gemi: kucing oren dilukis sendiri dalam SVG, 4 mood (senang, gembira, oops, fikir), bereaksi kepada sebab-akibat. Semua ikon SVG; tiada emoji, tiada CDN/font luar.
- Layout 375 px: papan skala ikut `svh`, sasaran sentuh ≥ 44 px (semakan main-uji: tiada amaran), layout dua lajur pada ≥ 860 px.

## Ujian dan bukti (semuanya lulus)
| Ujian | Hasil |
|---|---|
| `node uji/logik.mjs` | 15/15: peraturan tiga operasi, [2,2,2,2]→[4,4], [3,3,3] tolak, menang/kalah, papan penuh, gerak tak sah tak dikira, klik berganda selepas tamat, undo, bintang, 9 tahap boleh dimenangi bot |
| `main-uji.mjs` (skill) senario `uji/senario.json`: menu→BM→peta (tahap terkunci)→tahap 1→kekunci→Ulang; tukar ID/BM di tengah main | lulus, telefon 390×844 + desktop 1366×768, 0 ralat konsol, 0 fail hilang |
| `node uji/main-auto.mjs telefon` / `desktop` | pemain automatik sebenar: telefon guna **sapu sentuh**, desktop guna **kekunci**; main kesemua 9 tahap (menang semua), peta 27/27 bintang terbuka, laluan kalah (papan penuh/langkah habis), Ulang, Buat asal, tukar ID, simpanan selepas muat semula, tiada skrol mendatar, 0 ralat |

Bukti: `bukti/auto-telefon-*.png` (375×667 @2x), `bukti/auto-desktop-*.png`, `bukti/asas-bm-*`, `bukti/tukar-id-*`, laporan `bukti/auto-laporan-telefon.md`, `auto-laporan-desktop.md`, `laporan.md`. Cadangan lihat dahulu: `auto-telefon-03-gabung-letupan.png` (animasi gabung), `04-hasil-tahap1.png`, `06-peta-bintang.png`, `08-hasil-kalah.png`, `auto-desktop-07-tahap-darab-sukar.png`.

Imbangan tahap dikalibrasi dengan bot Monte Carlo (`uji/sim.mjs`): bot menang semua tahap; pemain rawak menang tahap awal tetapi hampir tidak pernah menang tambah-3 (48).

## Masih perlu dimainkan manusia
- Rasa sapu pada telefon sebenar (ambang 24 px) dan bunyi sebenar (ujian headless tidak boleh dengar; kod bunyi tiada ralat).
- Kesukaran untuk murid sebenar: tahap tolak terasa mudah bagi pemain mahir; par/had langkah mudah ditala dalam `js/data.js`.
- Soalan ialah "a ○ a" sahaja (mengikut peraturan jubin sama); soalan bentuk "buat 24 daripada 3, 4, 8" dalam prompt asal tidak dilaksanakan kerana memerlukan gabungan jubin berbeza.
- Tiada deploy dibuat; tiada zip dalam ~/Downloads (hanya tulis dalam folder ini, ikut arahan).
