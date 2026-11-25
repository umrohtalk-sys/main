# Laporan: Bank Konten

Dibuat: 21 Nov 2026. Folder: `07-bank-konten/` (index.html, css/style.css, js/app.js, js/ikon.js, data/seed.js, README.md).

## Selesai
- Tiga tampilan (Daftar, Papan seret-lepas + tombol pindah, Kalender bulan), filter 6 dimensi, cari, urut, statistik status dan platform (klik untuk menyaring).
- Editor panel samping: hitungan caption IG (2.200) dan hashtag (30), penyusun thread (500 per post, tambah/hapus/urut), salin caption/per post/semua, pratinjau IG dan Threads, duplikat, hapus.
- localStorage dalam try/catch, gabung seed berdasarkan id, ekspor/impor JSON, ekspor CSV (BOM UTF-8).
- Tema terang/gelap (prefers-color-scheme + [data-theme]), UI Indonesia/Melayu, ikon SVG inline, tanpa emoji.
- Seed: 40 item (BM dan ID, 7 pilar, semua status, beberapa bertanggal, 3 thread).

## Diuji
- `node --check js/app.js` lulus.
- Headless Chrome: 36 kartu pertama tampil tanpa galat; dengan 1.040 item uji: papan, kalender, editor, penyusun thread, tambah post dan simpan berjalan; tidak ada scroll horizontal di lebar 375px (iframe).
- Tidak diuji: seret-lepas dengan mouse sungguhan (tombol pindah diuji lewat kode), clipboard di peramban nyata, tampilan layar sentuh asli.

## Catatan
- Font Google Fonts (Fraunces, Plus Jakarta Sans) butuh internet; ada fallback sistem.
- Angka dan sumber di seed (gaji, PISA) hanya contoh draf; verifikasi sebelum tayang.
- Seed tidak mengubah item yang sudah diedit pengguna; untuk memaksa, hapus data situs di peramban.
