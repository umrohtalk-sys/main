# Audit LP EduGame Labs (S7 Pelatih Funnel)

Tarikh audit: 21 Nov 2026. Kaedah: `curl -sL` ke setiap URL (kod HTTP, saiz, masa), parsing HTML untuk title, meta description, h1, jumlah tautan, dan tautan unik. Semua permintaan hanya GET, tiada borang dihantar, tiada tindakan di automation.

## 1. Ringkasan status

| LP | Bahasa | HTTP | Saiz | Masa | Title (aksara) | Meta desc (aksara) | H1 | Tautan (unik) |
|---|---|---|---|---|---|---|---|---|
| lptoolsid (Prompt Generator) | /id | 200 | 74.457 B | 1,73 s | 52 | 176 | 1 | 25 (6) |
| lptoolsid | /ms | 200 | 75.147 B | 1,33 s | ~54 | 191 | 1 | 25 (6) |
| lptoolsid | /en | 200 | 74.749 B | 1,20 s | ~64 | 199 | 1 | 25 (6) |
| lpindo (Masterclass AI) | /id | 200 | 252.169 B | 1,97 s | ~103 | 285 | 1 | 15 (1) |
| lpindo | /ms | 200 | 242.497 B | 2,01 s | ~100 | 291 | 1 | 15 (1) |
| lpindo | /en | 200 | 240.541 B | 1,45 s | ~107 | 276 | 1 | 15 (1) |
| lpvideo (Prompt Video) | /id | 200 | 26.245 B | 1,15 s | 47 | 177 | 1 | 11 (0 luar) |
| lpvideo | /ms | 200 | 26.390 B | 1,00 s | ~50 | 166 | 1 | 11 (0 luar) |
| lpvideo | /en | 200 | 26.431 B | 0,80 s | ~62 | 155 | 1 | 11 (0 luar) |
| mentoring1on1 | /id | 200 | 146.509 B | 1,58 s | 21 | 124 | 1 | 11 (0 luar) |
| mentoring1on1 | /ms | 200 | 147.907 B | 1,19 s | 21 | 120 | 1 | 11 (0 luar) |
| mentoring1on1 | /en | 200 | 146.559 B | 2,12 s | 21 | 120 | 1 | 11 (0 luar) |
| demoprompt (Galeri Prompt) | /id, /ms, /en | 200 | 24.289 B (/id) | 1,34 s | 37 | 136 | 0 (kosong) | 11 (7) |

Semua 13 halaman utama menjawab 200. Viewport meta ada di semua halaman. Semua gambar pada LP mempunyai atribut alt.

Nota: `/ms` dan `/en` demoprompt, serta `/ms` dan `/en` untuk setiap LP, juga berstatus 200 (lihat bahagian 3).

## 2. Masalah yang dijumpai

Diurutkan mengikut keutamaan untuk funnel.

**P1 - perlu diputuskan sebelum kempen Hari Guru**

1. **Angka lpindo tidak sama antara bahasa.** Versi /id menyebut "54 modul, 434 pelajaran". Versi /ms dan /en menyebut "30 modul, 242 pelajaran". Pengunjung ID dan MS/EN akan melihat dua klaim kandungan yang berbeza. Sahkan jumlah sebenar, kemudian seragamkan.
2. **Checkout lpindo berbeza mengikut bahasa.** /id menuju ke `auzan-hasfi.myr.id` (5 tautan). /ms dan /en menuju ke `kliqoo.com/product/masterclass-panduan-ai-guna-educator-dcdgx`. Ini mungkin disengaja, tetapi perlu disahkan.
3. **Harga lpindo tidak konsisten dalam satu halaman.** /id memaparkan Rp 49.000, Rp 55.000 dan Rp 99.000 (kemungkinan harga coret). /ms memaparkan RM 15, RM 19 dan RM 39. /en memaparkan USD 4, USD 5 dan USD 9. Pastikan hanya satu harga aktif yang kelihatan, atau tanda harga coret dengan jelas.
4. **lptoolsid /id memuat tautan ke Masterclass.** Dua tautan `myr.id/pl/masterclass-...?iframe=true` berada dalam halaman Prompt Generator. Ini menyebabkan pengunjung ID keluar dari funnel PG. Lptoolsid /ms dan /en tidak memuat tautan ini; kedua-duanya menuju ke kliqoo.
5. **Dua LP tidak punya pautan beli statik.** lpvideo dan mentoring memakai `href="#"` untuk semua CTA beli atau WhatsApp dalam HTML. Tautan sebenar diisi oleh JavaScript (`js/lp.js` untuk lpvideo, `pasangWa()` untuk mentoring). Jika JS dimatikan atau gagal dimuat, tombol tidak berfungsi. Fail JS yang dirujuk semuanya 200. Klik sebenar belum diuji di pelayar.

**P2 - SEO dan kejelasan**

6. **Title terlalu panjang untuk lpindo.** Title ~100 hingga ~107 aksara. Sasaran biasa adalah di bawah 60.
7. **Meta description melebihi 160 aksara di semua LP kecuali mentoring dan sebahagian lpvideo.** lpindo: 276 hingga 291. lptoolsid MS/EN: 191 dan 199. lptoolsid ID: 176. lpvideo ID: 177.
8. **Mentoring menggunakan title yang sama di tiga bahasa** ("Mentoring 1-on-1 Auzan Hasfi", 21 aksara). Tidak ada kata kunci produk dalam title.
9. **demoprompt tidak mempunyai h1.** Tajuk halaman hanya dari imej atau CSS. Tambah satu h1 dengan kata kunci galeri prompt.

**P3 - kualiti dan konsistensi visual**

10. **Emoji dalam markup lpindo /id.** Terdapat kira-kira 10 jenis emoji dalam markup (contoh 🚀 🧠 🔥 🎯 🏆). Dasar project meminta ikon elegan, bukan emoji. Semak sama ada ia dekoratif atau teks sebenar.
11. **lptoolsid tidak mempunyai tautan bahasa statik ke /id, /ms, /en.** Penukaran bahasa berlaku melalui `aset/bahasa.js`. Ini tidak menjejaskan SEO sekiranya setiap bahasa mempunyai URL sendiri, tetapi pengguna tanpa JS tidak boleh menukar bahasa. Lpvideo, mentoring dan lpindo mempunyai tautan statik.
12. **Tujuan CTA lptoolsid berbeza mengikut bahasa.** Halaman /id menuju ke WhatsApp dan lpindo, manakala /ms dan /en menuju ke kliqoo. Sahkan ini memang tujuan yang dikehendaki.

## 3. Pemeriksaan tautan

**Tautan internal (status)**

| Sasaran | Status |
|---|---|
| lpvideo.edugamelabs.com/id/, /ms/, /en/, / | 200, 200, 200, 200 |
| mentoring1on1.edugamelabs.com/id/, /ms/, /en/ | 200, 200, 200 |
| lpindo.edugamelabs.com/id/, /ms/, /en/ | 200, 200, 200 |
| lptoolsid.edugamelabs.com/ms/, / | 200, 200 |
| demoprompt.edugamelabs.com/id, /ms, /en | 200, 200, 200 |
| Tautan anchor dalam halaman (#harga, #galeri, #caranya, #mulai, #materi, #manfaat, #pakej, dsb.) | Semua sasaran wujud dalam halaman |
| Aset lokal (css dan js) pada /id/ setiap LP dan demoprompt | 200 |

**Tautan luar (CTA dan sosial)**

| Sasaran | Status | Nota |
|---|---|---|
| wa.me/6285704973827 | 200 | |
| auzan-hasfi.myr.id/pl/masterclass-panduan-ai-untuk-educator | 200 | 2,7 s |
| kliqoo.com/product/masterclass-panduan-ai-guna-educator-dcdgx | 200 | |
| kliqoo.com/product/prompt-generator-for-education-game-and-education-apps-dvdxc | 200 | Permintaan pertama tamat masa (25 s, kod 000). Percubaan kedua 200 dalam 1,9 s. Pantau. |
| instagram.com/p/De89Ivniayu/ | 200 | |
| tiktok.com/@wtmtoday/video/7700904024517725461 | 200 | |
| chatgpt.com, gemini.google.com, claude.ai/new, chat.deepseek.com (demoprompt) | Tidak diperiksa | Pautan luar pihak ketiga. |

Pautan facebook.com/share/r/1Fq4zi7jY8 tidak diperiksa semasa audit.

## 4. Tindakan yang dicadangkan (tidak dilaksanakan)

1. Sahkan jumlah modul dan pelajaran lpindo, kemudian seragamkan ketiga-tiga bahasa.
2. Ujikan CTA lpvideo dan mentoring dalam pelayar dengan JS aktif dan dimatikan.
3. Buang atau ganti tautan myr.id dalam lptoolsid /id jika fokusnya Prompt Generator.
4. Pendekkan title lpindo kepada 60 aksara dan meta description kepada 150 hingga 160 aksara.
5. Tambah h1 ke demoprompt.

Tiada perubahan dibuat pada mana-mana LP. Tiada deploy, tiada perubahan automation, tiada mesej dihantar.
