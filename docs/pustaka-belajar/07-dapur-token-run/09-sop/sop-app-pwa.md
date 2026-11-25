# SOP: App PWA (aplikasi web untuk HP, dipasang dari browser)

**Kapan dipakai:** app belajar, app klinik atau ERM, app panduan (mis. Bidan Virda Care, JawiKu, Grammo, Doktor Komuniti, jejak. Sejarah). Bentuk statik, tanpa build, siap Netlify.

## Input yang dibutuhkan
- Pengguna sasaran dan bahasa (BM, ID, EN). Malay dulu, English kedua bila diminta.
- Palet dan logo brand. Bila user menyerahkan referensi gaya, ikuti gaya itu, tetapi palet mengikut brand project (bukan sekadar meniru referensi).
- Isi: materi, modul, data. Sumber yang sah.
- Ada tidaknya login (Clerk). Clerk tidak boleh diubah bila sudah berfungsi.

## Langkah
1. Buat folder bertimestamp: `{app}-{YYYYMMDD}-{HHMM}-{ringkas}/`. Statik: `index.html`, `css/`, `js/` dipecah per bahagian (mis. `teras.js`, `skrin-utama.js`, `skrin-belajar.js`), `img/`, `sw.js`, `manifest.json`, `netlify.toml`, `README.txt`.
2. Isi konten di file data (`content.js`, `data.js`). Teks UI di file strings. Jangan menyunting file hasil jana (mis. `data-builder.js`) secara langsung; edit sumbernya dan jana ulang.
3. Pasang manifest dan service worker. Simpan VERSI di `sw.js`.
4. Uji lokal: unregister service worker dan hapus cache dulu (cache-first menyembunyikan CSS lama). Tambah `?uji=1` bila Clerk menolak localhost.
5. Uji telefon 390 lebar dan desktop. Skrol tidak boleh mendatar.
6. Ambil tangkapan skrin per skrin (`cap.mjs`) untuk video atau bukti, bila diperlukan.
7. Serah ke `~/Downloads/` dan deploy (lihat sop-deploy-netlify.md). Deploy hanya bila diminta.

## Aturan wajib
- Naikkan VERSI `sw.js` setiap kali ada perubahan berkas.
- Jangan sentuh Clerk (`js/clerk-auth.js`, script Clerk di `index.html`) bila tidak diminta.
- Tidak ada emoji, gunakan ikon SVG garis, warna solid, judul serif bila sesuai.
- Tanpa testimoni, rating, atau janji palsu.
- Jam layanan, harga, alamat, dan nomor yang belum dikonfirmasi pemilik ditandai sebagai placeholder.
- Kunci API tidak ditulis di folder project yang ikut zip.

## Checklist QA
- [ ] VERSI sw.js naik
- [ ] Setelah cache dibersihkan, CSS dan JS terbaru tampil
- [ ] Telefon dan desktop tidak ada skrol mendatar
- [ ] Teks ID, MS, EN tidak tercampur
- [ ] Clerk tidak rosak (login dan XP tersimpan merentas peranti bila diaktifkan)
- [ ] Flag uji (`?uji=1` atau sejenisnya) DIMATIKAN sebelum deploy produksi
- [ ] Folder di bawah 24 MB (lihat sop-deploy-netlify.md)

## Kesalahan yang pernah terjadi
- Login disangka rosak akibat rombakan UI, padahal sekatan domain Clerk. Clerk menolak localhost dengan HTTP 400.
- Flag uji lupa dikembalikan ke `false`. Semua pengguna masuk tanpa akaun dan XP tidak tersimpan.
- Stale CSS muncul saat uji kerana sw.js tidak dinaikkan versinya.
- html2canvas merosakkan box-shadow blur besar. Gunakan bayangan datar.
- Skrip di scratchpad hilang antara giliran. Simpan skrip di folder project.
- Unduhan JPEG tidak berjalan di Artifact (sandbox), modal hanya menampilkan gambar untuk disimpan manual. Di Netlify tombol unduh berfungsi.

## Sumber
Memori: project-bidan-virda-care-app, project-braineye-belajar-mata, project-grammo-grammar-app, project-jawiku-belajar-jawi, project-doktor-komuniti-my, project-jejak-sejarah-malaysia, project-fa-jagung, project-ghanias-jahit-brand. Feedback: netlify-ready-output, ikon-elegan, output-folder, versioned-filenames.
