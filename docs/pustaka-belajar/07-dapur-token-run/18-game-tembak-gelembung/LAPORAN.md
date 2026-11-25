# LAPORAN — Clawd Letus Gelembung / Clawd Letus Gelembung

Konsep #4 "Tembak Gelembung Jawapan" (`02-riset-game-remake/top10-prompt.md`), dibina semula sebagai game ORIGINAL. Tahap ketelitian: **standard** (+ ujian logik enjin). Statik HTML/CSS/JS, tanpa build, boleh seret ke Netlify Drop. Folder: `~/Downloads/dapur-token-jalan-20261121-1403/18-game-tembak-gelembung/`.

## Mekanik
- Soalan dijana di atas ("7 + 5 = ?"). Murid membidik Clawd (ketam oren, SVG sendiri) lalu menembak **mutiara** ke kelompok gelembung berlabel nombor. Mutiara memantul pada dinding; garis bidik titik-titik menunjukkan pantulan dan gelembung yang akan terkena.
- **Betul:** gelembung pecah, gelembung bernilai sama yang bersebelahan pecah berantai, gelembung yang tidak bergantung lagi jatuh. Skor = 10/gelembung + bonus berantai + 15/gelembung jatuh + 20 pantulan, didarab kombo (hingga ×3). Soalan baharu dijana daripada gelembung yang benar-benar boleh dicapai (disahkan dengan simulasi tembakan), jadi tidak pernah buntu.
- **Salah:** gelembung bergoyang, satu baris baharu muncul di atas (kelompok turun selangkah), kombo putus, Clawd "oops". Ditambah baris turun berkala (pengatur masa makin laju mengikut tahap). Kalah bila gelembung mencecah garis bahaya.
- 7 tahap: Tambah ≤10, Tambah ≤30, Tolak, Darab 2–5, Darab 2–9, Campuran, Cabaran (~55 soalan, semua dijana). Bintang 1–3 ikut jawapan salah. Kunci tahap berurutan; skor terbaik + bintang dalam localStorage (try/catch).
- Dwibahasa BM/ID (butang di menu dan bar atas; "Tolak"↔"Kurang", "Darab"↔"Kali"), bunyi Web Audio sintesis (tembak, pantul, letus naik nada mengikut kombo, jatuh, salah, menang/kalah, butang senyap), semua ikon SVG (tiada emoji), tiada CDN/font luar.
- Sentuh: seret untuk membidik, lepas untuk menembak (telefon); tetikus (gerak + klik) atau anak panah + Ruang (desktop). `touch-action:none` pada kanvas. Layout 375 px, stage skala ikut ruang, butang ≥ 44 px.
- Original: hanya idea "tembak gelembung berlabel jawapan" diambil. Mutiara tidak melekat/tidak padan warna; peraturan, rupa, nama dan Clawd milik sendiri.

## Ujian dan bukti (semuanya lulus)
| Ujian | Hasil |
|---|---|
| `node uji/logik.mjs` | 28/28: soalan betul secara aritmetik untuk setiap nilai setiap tahap, grid selang-seli 7/6, simulasi + pantulan dinding, berantai, jatuh, pemadatan baris, garis bahaya, 210 grid rawak sentiasa menghasilkan soalan boleh dicapai |
| `main-uji.mjs` (skill) `uji/senario.json`: menu→BM→peta→tahap 1→menang→Ulang; tukar ID/BM | lulus, telefon 390×844 + desktop 1366×768, 0 ralat konsol, 0 fail hilang |
| `node uji/main-auto.mjs` telefon (**sentuh sebenar**) dan desktop (**tetikus sebenar**) | 31/31 semakan setiap peranti: tahap 2 terkunci, bidik, tembak salah (baris bertambah), laluan kalah, Ulang, menang kesemua 7 tahap melalui "Seterusnya" (55 tembakan betul, kombo ×10), peta 7 tahap terbuka, simpanan selepas muat semula, bahasa ID, tukar bahasa di tengah main, tiada skrol mendatar, 0 ralat |

Bukti: `bukti/auto-telefon-*.png` (375×667 @2x) dan `bukti/auto-desktop-*.png`; laporan `bukti/auto-laporan-telefon.md`, `auto-laporan-desktop.md`, `laporan.md`. Cadangan lihat dahulu: `auto-telefon-04-membidik.png` (garis bidik), `05-tembak-salah.png`, `08-kombo-x3.png`, `07-pantulan-betul.png`, `06-hasil-kalah.png`, `11-menang-tahap7.png`, `10-tahap6-mula.png`, `13-peta-id.png`.

## Masih perlu dimainkan manusia
- Rasa membidik dengan jari di telefon sebenar dan bunyi sebenar (headless tidak boleh dengar; kod bunyi tiada ralat).
- Kesukaran sebenar: bot memenangi semua tahap tanpa salah (bidik sempurna), jadi imbangan pengatur masa baris dan garis bahaya perlu dicuba murid. Nilai mudah ditala dalam `js/data.js` (`rowEvery`, `rows`, `target`).
- Tiada pembahagi; tiada deploy; tiada zip (hanya tulis dalam folder ini, ikut arahan).
