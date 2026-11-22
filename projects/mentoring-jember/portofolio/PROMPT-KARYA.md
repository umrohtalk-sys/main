# Prompt di balik setiap karya portofolio

Tunjukkan prompt ini ke calon peserta: "Ini yang aku ketik ke Claude. Di sesi, kamu menulis versi untuk bidangmu sendiri." Semua mengikuti rumus 4 bagian **Peran · Tujuan · Isi · Format** (Modul 0.2). Setelah prompt pertama, hasilnya dirapikan lewat 3–6 revisi kecil (Modul 0.4).

## 1. Kuis Pecahan Kelas 4
```
PERAN  : Kamu guru SD kreatif yang pandai membuat game belajar.
TUJUAN : Buatkan game kuis pecahan untuk murid kelas 4 supaya mereka latihan sambil bermain di HP.
ISI    : - 10 soal pilihan ganda (4 opsi), 3 soal bergambar pizza/lingkaran yang diwarnai
         - murid menulis nama dulu; tiap benar 10 poin
         - bunyi berbeda untuk benar/salah, tampilkan jawaban yang benar kalau salah
         - akhir: bintang 1–3, pesan semangat, papan skor 5 terbaik (tersimpan di HP)
FORMAT : Satu file HTML, bahasa Indonesia, tombol besar, cocok dibuka di HP.
```
Revisi: "Warna latar krem, tombol jawaban 2 kolom." · "Tambah progress bar di atas." · "Soal 8 ganti cerita kue dipotong 6."

## 2. Hitung Pupuk Jagung
```
PERAN  : Kamu penyuluh pertanian yang membuat alat sederhana untuk petani.
TUJUAN : Buatkan kalkulator pupuk jagung supaya petani tahu kebutuhan pupuk sesuai luas lahannya.
ISI    : - input luas: hektare, m², atau bahu (1 bahu ≈ 0,7 ha), tombol cepat ¼, ½, 1, 2 ha
         - takaran per hektare BISA DIUBAH (contoh awal: Urea 350, Phonska 300, ZA 100 kg/ha)
         - hasil dalam kg dan jumlah karung 50 kg
         - jadwal: pupuk dasar, susulan 21–25 HST, susulan 40–45 HST
         - catatan: angka hanya contoh, ikuti anjuran PPL; tombol kirim hasil ke WhatsApp
FORMAT : Satu file HTML, huruf besar, warna hijau, mudah dibaca orang tua di HP.
```

## 3. Website Kopi Kita
```
PERAN  : Kamu desainer web untuk usaha kuliner kecil.
TUJUAN : Buatkan website satu halaman untuk cafe "Kopi Kita" di Kaliwates, Jember, supaya pelanggan bisa lihat menu dan pesan lewat WhatsApp.
ISI    : - menu 3 kategori (Kopi, Non-kopi, Makanan) dengan harga [daftar]
         - tombol "+ Tambah", keranjang melayang, tombol "Pesan via WhatsApp" ke 62xxxx berisi daftar pesanan & total
         - bagian: hero, menu, keunggulan, testimoni, lokasi & jam buka
FORMAT : Satu file HTML, gaya hangat cokelat-krem, huruf serif untuk judul, nyaman di HP.
```

## 4. Website Baby Spa Bunda
```
PERAN  : Kamu admin praktik bidan yang membuat halaman booking.
TUJUAN : Buatkan website layanan baby spa & homecare supaya bunda bisa booking jadwal lewat WhatsApp.
ISI    : - 4 layanan dengan durasi & harga [daftar]
         - pilih hari (6 hari ke depan) dan jam; jam penuh tidak bisa dipilih
         - isi nama bunda, nama & usia bayi, tempat (klinik / homecare)
         - tanya jawab singkat TANPA saran medis; arahkan ke tenaga kesehatan bila bayi sakit
FORMAT : Satu file HTML, warna pink-mint lembut, sudut bulat, ramah HP.
```

## 5. Video 3 Cara Hemat Pupuk
```
PERAN  : Kamu animator video edukasi pertanian.
TUJUAN : Buatkan animasi vertikal 15 detik untuk TikTok/Reels supaya petani tertarik menghemat pupuk.
ISI    : - 0–3 dtk hook: "Pupuk mahal? 3 cara hemat tanpa kurangi hasil" + ilustrasi jagung
         - 3–12 dtk: 3 tips (hitung sesuai luas, bagi 3 kali, benamkan ke tanah), tiap tips 3 detik dengan animasi
         - 12–15 dtk ajakan: "Simpan & bagikan ke kelompok tanimu · Ketik TANI"
FORMAT : HTML Canvas 1080×1920, huruf tebal besar, warna hijau-kuning; sediakan fungsi gambar(t) supaya bisa direkam per frame jadi MP4.
```
Merekam jadi MP4: rekam layar pratinjau (OBS / perekam bawaan), atau seperti di folder ini: Playwright mengambil 450 frame lalu `ffmpeg -framerate 30 -i f%04d.jpg -pix_fmt yuv420p tips-pupuk.mp4`.

## 6. Carousel 5 App untuk Guru
```
PERAN  : Kamu desainer konten Instagram edukasi.
TUJUAN : Buatkan carousel 8 slide untuk guru Jember supaya tertarik membuat app kelas dengan Claude.
ISI    : cover (judul + kata "sendiri" disorot) → masalah → 5 app (kuis, roda nama, timer, flashcard, web kelas) masing-masing dengan mockup HP → ajakan "Komentar MAU"
FORMAT : Satu HTML berisi 8 <section> berukuran 1080×1350, huruf Outfit, warna krem-oranye-hitam, nomor slide di pojok.
```
Unduh PNG: tangkapan layar per slide (atau minta Claude menambahkan tombol unduh per slide).
