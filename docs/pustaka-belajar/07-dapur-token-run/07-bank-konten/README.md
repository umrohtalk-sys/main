# Bank Konten (EduGame Labs)

Web app statis: satu tempat untuk judul dan draf konten Instagram dan Threads. Tanpa build.

## Pakai
- Seret folder ini ke Netlify Drop, atau buka `index.html` langsung.
- Tiga tampilan: Daftar, Papan (seret kartu antar kolom status, atau tombol panah), Kalender (item bertanggal; tekan + di hari untuk item baru).
- Klik kartu untuk membuka editor. IG: hitungan aksara caption (2.200) dan hashtag (30). Threads: penyusun thread, tiap post punya hitungan (500), bisa tambah, hapus, urut.
- Salin: caption IG lengkap (hook + isi + "Komen CTA" + hashtag), per post, atau semua thread.
- Data tersimpan di localStorage peramban. Cadangkan lewat Ekspor JSON, pindahkan lewat Impor JSON, atau Ekspor CSV.
- Tombol ID/MS mengganti bahasa antarmuka; ikon bulan/matahari mengganti tema.

## Menambah seed
Edit `data/seed.js`, tambah objek ke array `window.SEED` dengan `id` unik:

```js
{id:"s041", judul:"...", platform:"ig|threads|keduanya", format:"reel|carousel|thread|post",
 pilar:"perbandingan-negara|karier-cikgu|curhat-cikgu|produk-jembatan|tips-ai|game-app|lain",
 bahasa:"ms|id", hook:"...", isi:"... (thread: post dipisah \n---\n)", cta:"GAME|VIDEO|TOOLS|PROMPT|NAK|",
 tags:["a","b"], sumber:"", tanggal:"2026-12-01", status:"ide|draf|siap|terbit"}
```
`dibuat`/`diubah` opsional. Item seed digabung dengan simpanan berdasarkan `id`; versi yang sudah diedit pengguna menang, dan item seed yang dihapus pengguna tetap tersembunyi. Seed ratusan hingga ribuan item aman: daftar dirender bertahap (36 per halaman, tombol Muat lebih), papan 25 per kolom.
