# Brief game (satu halaman) — Susun Syiling / Susun Koin

- **Matlamat belajar:** selepas main, murid boleh menyusun gabungan syiling untuk mencapai nilai wang yang tepat (RM dan sen / Rupiah), dan menyedari baki yang tinggal.
- **Pemain:** murid SD Tahun 4–6 (MY) / kelas 4–6 SD (ID). Mudah → sukar (8 tahap).
- **Bahasa:** BM dan ID, butang tukar di menu dan semasa main. Mata wang: RM + sen (BM), Rp (ID).
- **Gelung main:** setiap tong ada nilai sasaran (cth RM 2.50). Ketuk satu syiling dalam dulang, ketuk tong untuk menuang. Jumlah tepat = tong penuh, hilang, mata bertambah, kombo. Terlebih = tong kosong semula dan nyawa -1. Dulang ada slot terhad; "Tukar" menggantikan syiling yang tidak berguna (-5 mata).
- **Menang / kalah:** tiap tahap ada sasaran tong dan had masa 36–40 saat. Masa habis = -1 nyawa, ulang tahap. 5 nyawa. Habis 8 tahap = menang. Bintang akhir ikut nyawa tinggal (1–3).
- **Tahap ketelitian:** standard — ketat_untuk: [] 
- **Gaya:** latar krim, Clawd (ketam oren, SVG sendiri), tong kayu, syiling berwarna mengikut nilai. Tiada emoji; ikon SVG.
- **Aset sebenar:** TIADA. Semua dilukis dengan SVG/CSS, bunyi disintesis Web Audio.
- **Mesti ada:** butang 44 px+, muat 375 px tanpa skrol mendatar, skor setempat (localStorage try/catch), bunyi bisu, tiada teks bertindih.
- **Tidak boleh:** salin nama/aset/reka bentuk game komersial, pautan luar, data peribadi, iklan.

## Tahap
| T | tong | slot | syiling | sasaran | masa |
|---|---|---|---|---|---|
| 1 | 2 | 5 | 10, 20, 50 sen | 4 tong | 40s |
| 2 | 2 | 5 | sama, 2–3 syiling/tong | 5 | 40s |
| 3 | 3 | 5 | + 5 sen | 5 | 40s |
| 4 | 3 | 4 | 3 syiling/tong | 6 | 40s |
| 5 | 3 | 4 | 10 sen–RM1 | 6 | 38s |
| 6 | 4 | 4 | semua | 7 | 38s |
| 7 | 4 | 3 | semua | 8 | 36s |
| 8 | 4 | 3 | semua | 8 | 36s |

## Senario ujian (uji/senario.json)
1. menang-bm: menu → BM → klik cadang (ketuk syiling, ketuk tong) → selesaikan 8 tahap → hasil menang
2. kalah-id: ID → terlebih sampai nyawa 0 → hasil kalah → main semula
3. tukar-bahasa: ID → mula → tukar ke BM semasa main → RM → muat semula, bahasa kekal
4. masa-dan-tukar: pilih/nyahpilih, butang Tukar, masa habis = -1 nyawa
