# Laporan S7 Pelatih Funnel (EduGame Labs)

Tarikh: 21 Nov 2026. Lokasi output: `/Users/auzanhasfi/Downloads/dapur-token-jalan-20261121-1403/06-funnel/`

## Apa yang dibuat

| Fail | Isi |
|---|---|
| AUDIT-LP.md | Audit 4 LP x 3 bahasa (13 halaman termasuk demo). Kod HTTP, saiz, masa, title, meta description, h1, jumlah tautan, status tautan internal dan luar. |
| headline-ab.md | 5 headline dan 1 subjudul alternatif bagi setiap LP dalam ID, MS dan EN, dengan alasan. |
| dm-indonesia.md | Untuk GAME, VIDEO dan TOOLS: 1 teks utama dan 5 variasi Bahasa Indonesia, semua di bawah 300 aksara, plus 6 balasan publik "cek DM". |
| wa-followup.md | 7 pesan (hari 0, 1, 2, 4, 7, 10, 14) untuk setiap aliran: peminat PG dan peminat LP Video, dalam ID dan MS (28 pesan). |
| lp-hari-guru/ | LP statik Hari Guru Nasional (index.html, css/style.css, js/app.js). Ikon SVG inline, tanpa emoji, hitung mundur ke 25 Nov 2026 23:59 WIB, CTA WhatsApp ke wa.me/6285704973827. |
| ebook-30-prompt-game.md | 30 prompt game kelas BM, 80 hingga 92 perkataan setiap prompt, mekanik berbeza, dengan kurungan [KELAS], [MATA PELAJARAN], [TOPIK] untuk diisi guru. |
| tangga-harga.md | Usulan alur Demo -> PG Pro -> Video -> Mentoring, dan 2 bundel usulan (belum wujud). |
| LAPORAN.md | Fail ini. |

## Masalah utama yang perlu diputuskan

1. **Angka lpindo tidak konsisten.** /id menyebut 54 modul dan 434 pelajaran. /ms dan /en menyebut 30 modul dan 242 pelajaran.
2. **Harga lpindo bercampur dalam satu halaman.** Contoh: Rp 49.000, Rp 55.000 dan Rp 99.000 dalam /id. Pastikan harga aktif sahaja yang dipaparkan.
3. **Checkout lpindo berbeza mengikut bahasa.** /id ke myr.id, /ms dan /en ke kliqoo.
4. **Lptoolsid /id memuat tautan ke Masterclass (myr.id)** dalam halaman Prompt Generator.
5. **CTA lpvideo dan mentoring berbentuk `href="#"` dalam HTML.** Tautan sebenar diisi oleh JavaScript (`js/lp.js` dan `pasangWa()`). Ini berfungsi jika JS aktif. Klik sebenar belum diuji di pelayar.
6. **TOOLS dipetakan ke lpvideo mengikut arahan.** Jika TOOLS dimaksudkan untuk alat atau Prompt Generator, sasarannya mungkin perlu ditukar ke lptoolsid.
7. **Bundel dan harga bundel (Rp 149.000) adalah usulan.** Ia tidak wujud di mana-mana LP dan tidak dimasukkan ke LP Hari Guru.
8. **Harga mentoring tidak seragam antara bahasa** (Rp 350.000 / RM 67 dan RM 104 / USD 25). Sahkan pakej.

Masalah SEO dan kualiti (title lpindo lebih 100 aksara, meta description melebihi 160 aksara, demoprompt tanpa h1, emoji dalam markup lpindo /id) dicatat dalam AUDIT-LP.md.

## Yang tidak dilakukan

- Tiada deploy ke Netlify atau mana-mana hosting.
- Tiada perubahan pada automation Zernio atau mana-mana automation lain.
- Tiada mesej dihantar (WhatsApp, DM, atau balasan publik).
- Tiada perubahan pada mana-mana LP yang sedia ada.
- Tiada borang dihantar. Semua permintaan ke LP ialah GET.

## Semakan yang dibuat

- Semua 13 halaman LP dan demo menjawab 200. Aset lokal (css dan js) pada /id/ juga 200.
- Semua anchor dalam halaman LP wujud.
- Tautan luar yang diperiksa menjawab 200. Permintaan pertama ke kliqoo PG tamat masa dan berjaya pada percubaan kedua.
- `js/app.js` lulus `node --check`. Fail css dan js yang dirujuk wujud, dan anchor `#atas` sah. Tautan luar pada LP Hari Guru (wa.me, lptoolsid, lpvideo) belum diperiksa statusnya, dan LP belum dibuka di pelayar.
- Tiada emoji dalam fail LP Hari Guru.
- Semua DM di bawah 300 aksara (dimaksimumkan 193).

## Langkah seterusnya (jika pemilik mahu)

1. Sahkan angka lpindo dan harga aktif, kemudian kemas kini LP.
2. Uji klik CTA lpvideo dan mentoring dalam pelayar.
3. Tentukan sasaran TOOLS dalam automation.
4. Semak LP Hari Guru di pelayar mudah alih sebelum muat naik ke Netlify Drop.
