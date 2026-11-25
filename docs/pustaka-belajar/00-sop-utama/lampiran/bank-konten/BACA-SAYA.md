# Bank Konten — cara pakai

- Versi online: https://bank-konten-auzan.netlify.app (Netlify siteId f501ce0d-b0f3-463b-a3f0-a85d8cd23118).
- `seed-thread-variasi.js` = 2.000 thread (1.000 BM id `tm####`, 1.000 ID id `ti####`) variasi formula Afiq. Isi thread dipisah `\n---\n` antar post. Tag `variasi-afiq` + `formula-<kunci>`.
- `seed-hasil.js` = 329 item hasil run Dapur Token (ide video, game, app, judul IG/Threads).
- `seed.js` = contoh awal.
- Skema item: judul, platform (ig|threads|keduanya), format, pilar, bahasa, hook, isi, cta, tags, sumber, status.
- Thread yang sudah terbit: lihat `../panduan-thread/TERBIT.json` (id → akun, schedule, tanggal). Tambahkan entri baru setiap kali posting dari bank konten.
- Membaca dari Node: file ini berbentuk `window.X = [...]`; potong sebelum `[` dan `JSON.parse`.
