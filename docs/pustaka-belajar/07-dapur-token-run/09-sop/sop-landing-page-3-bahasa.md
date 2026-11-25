# SOP: Landing page 3 bahasa (ID, MS, EN) dalam satu situs

**Kapan dipakai:** landing page produk yang dijual ke Indonesia, Malaysia, dan pembeli luar negeri. Contoh: LP Tools (Prompt Generator), LP Fundamental (Masterclass AI), LP Prompt Video, LP Mentoring.

## Input yang dibutuhkan
- Nama produk, harga per bahasa (sudah disetujui user), mata wang per bahasa.
- Nomor WhatsApp atau tautan pembelian (Kliqoo untuk Malaysia; Mayar untuk checkout).
- Tangkapan layar app atau produk. Skrin ID dan skrin MS boleh berbeda.
- Maskot dan palet brand project (ikut palet dan maskot project masing-masing).

## Langkah
1. Salin folder LP terakhir yang LIVE, ganti nama dengan stempel waktu, mis. `lp-{produk}-3bahasa-{YYYYMMDD}-{HHMM}-{ringkas}`.
2. Pastikan struktur: root berisi aset bersama. Folder `/id/`, `/ms/`, `/en/` berisi HTML dan aset bahasa. `bahasa.js` menyediakan pemilih ID, MS, EN di header (di HP jadi tombol "EN ▾").
3. `_redirects`: `/` ke bahasa berdasarkan negara. Indonesia ke `/id/`. Malaysia dan Brunei ke `/ms/`. Lainnya termasuk Singapura ke `/en/`. Parameter `?lang=xx` lama diarahkan ke `/xx/`.
4. Aturan `/xx/* /:splat 200` mengisi file yang tidak ada di folder bahasa dari root.
5. Teks: edit HTML atau file sumber (gen.mjs / jana.py). EN dibuat dari terjemahan; catat sumber terjemahan.
6. Harga dan mata wang: ID Rupiah, MS Ringgit, EN USD. Tulis konversi jujur, mis. "billed in MYR (RM 29 ≈ USD 7)" bila pembayaran lewat Kliqoo.
7. Uji geo (sebelum deploy): `curl -sI -H "Cookie: nf_country=MY" <url>/`. Cek juga ID dan EN.
8. Deploy: folder bersih dengan `netlify.toml` dan README (lihat sop-deploy-netlify.md). Jangan deploy dari folder induk.
9. Setelah LIVE, cek ketiga bahasa di HP dan desktop, serta tautan WA dan checkout.

## Aturan wajib
- Jangan tulis testimoni, rating, atau jaminan palsu.
- Jangan tulis domain atau ikon yang sudah dibuang user (footer tanpa domain aimasterclass, tanpa ikon roket).
- Klaim hanya yang terbukti di app atau LP live.
- Jam layanan, alamat, dan nomor yang belum dikonfirmasi ditandai sebagai placeholder, jangan diisi sendiri.
- Tidak ada emoji pada tampilan. Ikon garis.

## Checklist QA
- [ ] `/` mengarahkan ke bahasa yang benar untuk ID, MY, SG, dan lainnya
- [ ] Pemilih bahasa berfungsi di HP dan desktop
- [ ] Tidak ada teks ID tersisa di folder MS atau EN
- [ ] Harga dan mata wang sesuai per bahasa
- [ ] Tautan WA, checkout, dan akses ahli berfungsi
- [ ] Ukuran folder di bawah batas unggah Netlify (sekitar 24 MB aman)
- [ ] Nama folder bertimestamp, di Downloads, `open -R`

## Kesalahan yang pernah terjadi
- Sumber jana lama belum punya EN. Versi EN dibuat dengan menerjemahkan HTML. Revisi berikutnya harus mengedit HTML di folder 3 bahasa, atau menerjemahkan ulang.
- Tombol Mayar tertimpa CSS. Perbaikan lewat `a.mayar-button.btn` di checkout.css.
- Footer domain dan ikon roket ditolak user dan harus dibuang di kedua LP.
- Salinan lama masih menyimpan mp4 yang hilang saat bersih-bersih; cuplikan harus disalin ulang.
- Nama situs Netlify tidak mirip domain. Catat siteId di README agar tidak tersesat.
- lptoolsmy dan lpmalay kini hanya mengarah (302) ke versi ID. Jangan deploy ulang ke situs lama tanpa cek.

## Sumber
Memori: project lp-3bahasa-satu-situs, lp-ilmu-jadi-produk, lp-prompt-video-ms, lp-indo-source-code, lp-tools, kontak-wa-geo. Feedback: netlify-ready-output, output-folder, ikon-elegan.
