# Brief game (satu halaman) — Gemi Gabung Nombor / Gemi Gabung Angka

- **Matlamat belajar:** selepas main, murid lebih lancar mengenal hasil tambah, tolak dan darab nombor sama (a+a, a−a, a×a) dan melihat persamaannya pada setiap gabungan.
- **Pemain:** murid SD Tahun 4–6 hingga SMP/Tingkatan 1 (MY + ID).
- **Bahasa:** BM dan ID, butang tukar di menu dan di bar atas setiap skrin (disimpan dalam localStorage).
- **Gelung main:** baca soalan sasaran ("8 + 8 = ?") → sapu / anak panah / WASD luncurkan semua jubin → dua jubin sama bergabung ikut operasi tahap → persamaan muncul di gelembung Gemi → capai jubin jawapan (atau padam N pasang) sebelum langkah habis.
- **Menang / kalah:** menang bila sasaran dicapai; kalah bila langkah habis atau papan penuh tanpa gerakan. Bintang ikut langkah (par), skor naik dengan rantai gabungan. "Buat asal" 3 kali setiap tahap.
- **Tahap ketelitian:** `standard` (+ senario menang/kalah/ulang/tukar bahasa, sentuhan 44 px); ketat untuk enjin logik (`uji/logik.mjs`).
- **Tahap kandungan:** Tambah 3, Tolak 3, Darab 3 (bahagi tidak dimasukkan; lihat LAPORAN). Papan 4×4, tahap tolak terakhir 3×3.
- **Gaya:** latar gelap lembut navy, jubin warna ikut nilai, ikon SVG (tiada emoji). Maskot **Gemi**, kucing oren dilukis sendiri dalam SVG (`js/maskot.js`) dengan 4 mood.
- **Aset sebenar:** tiada (semua dijana: SVG, Web Audio). Tiada pautan luar, tiada font luar.
- **Mekanik diambil daripada rujukan:** hanya "gabung jubin sama dengan meluncur". Nama, rupa, nilai jubin dan peraturan sasaran adalah milik sendiri.
- **Tidak boleh:** salin game komersial, data peribadi murid, iklan.

## Senario ujian
1. Menu → BM → peta → tahap 1 → gerak papan kekunci → Ulang (`uji/senario.json`, main-uji)
2. Tukar ID, tukar ID↔BM di tengah permainan (`uji/senario.json`)
3. Main penuh 9 tahap (sapu sentuh di telefon, kekunci di desktop), kalah, ulang, buat asal, bahasa ID, simpanan (`uji/main-auto.mjs`)
