# 04 — Materi Mentoring Claude 1-on-1 (detail per subbab)

> Diturunkan dari kisi-kisi resmi (6 modul, 34 subbab) di `sumber-zip/01-jember/materi-mentoring-claude-jember-20261119-2127-kisi-kisi/`. Dokumen ini menambahkan: tujuan, durasi, langkah mengajar, latihan, prompt contoh per minat, dan rubrik.
>
> Alur: **Modul 0 wajib** → pilih **satu modul karya** (1 App / 2 Website / 3 Video / 4 Carousel) per sesi → **Modul 5** di penutup.

---

## Modul 0 · Dasar — Kenalan dengan Claude (±35 menit)
**Tujuan:** peserta bisa menulis prompt yang menghasilkan *karya*, bukan sekadar jawaban. **Alat:** App Fundamental.

| Sub | Durasi | Yang diajarkan | Latihan |
|---|---|---|---|
| 0.1 Akun & tampilan | 5' | Daftar di claude.ai, versi gratis vs Pro (Pro ±US$20/bulan; App Store ID ±Rp349.000/bulan, harga berubah — cek claude.com/pricing). Kolom chat, lampiran (maks. 20 file/chat), riwayat, Projects (akun gratis maks. 5 project) | Buka chat baru, ganti nama chat |
| 0.2 Rumus prompt 4 bagian | 10' | **Peran · Tujuan · Isi · Format** | Tulis 1 prompt pakai rumus |
| 0.3 Artifacts | 7' | Hasil tampil & bisa dicoba di layar. Di akun gratis aktifkan *code execution & file creation* di Settings | Minta Claude membuat kartu ucapan interaktif |
| 0.4 Revisi bertahap | 5' | Satu perubahan per pesan; sebut bagian yang diubah ("tombol hijau di bawah judul") | 3 revisi kecil |
| 0.5 Lampirkan bahan | 4' | Foto, PDF, daftar soal, menu → hasil sesuai data sendiri | Lampirkan 1 file bahan |
| 0.6 Cek hasil & batas | 4' | Claude bisa salah: cek fakta, angka, dosis/takaran; kapan buka chat baru (chat terlalu panjang, hasil mulai kacau); batas pemakaian bergulir | Temukan 1 kesalahan sengaja |

**Template rumus 4 bagian (dibagikan ke semua peserta):**
```
PERAN   : Kamu adalah [ahli/peran], membantu [siapa aku].
TUJUAN  : Buatkan [jenis karya] untuk [siapa pengguna] supaya [hasil yang diinginkan].
ISI     : - [data 1]  - [data 2]  - [aturan khusus]
FORMAT  : [app satu file HTML / halaman web / naskah 30 detik / 8 slide carousel],
          bahasa Indonesia sederhana, cocok dibuka di HP.
```

**Contoh per minat (0.2):**
- *Guru:* "Kamu guru SD kreatif. Buatkan game kuis pecahan kelas 4 untuk murid, supaya mereka latihan sambil bermain. Isi: 10 soal pilihan ganda, ada skor, suara benar/salah, nama murid di awal. Format: satu file HTML, bahasa Indonesia, cocok di HP."
- *UMKM:* "Kamu desainer menu cafe. Buatkan menu digital 'Kopi Kita Jember' supaya pelanggan bisa memilih lalu pesan lewat WhatsApp 62xxxx. Isi: [daftar menu & harga]. Format: satu halaman HTML, warna cokelat krem, tombol besar."
- *Petani:* "Kamu penyuluh pertanian. Buatkan kalkulator pupuk jagung: input luas lahan (ha), keluaran takaran Urea, Phonska, ZA dan jadwal pemupukan. Gunakan takaran anjuran yang aku lampirkan. Format: app HTML, huruf besar."
- *Bidan:* "Kamu admin praktik bidan. Buatkan halaman layanan 'Baby Spa Bunda': daftar layanan, harga, pilih jadwal, tombol booking WhatsApp. Tidak memberi saran medis. Format: HTML ramah HP."
- *Mahasiswa:* "Kamu web designer. Buatkan portofolio satu halaman untuk mahasiswa [prodi] UNEJ: profil, 3 proyek, keahlian, kontak. Format: HTML modern, mode gelap."
- *Kreator:* "Kamu penulis naskah TikTok edukasi. Buatkan 5 ide video 30 detik tentang [topik] dengan hook 3 detik pertama."

**Catatan keamanan untuk bidang kesehatan & pertanian:** angka medis, dosis, dan takaran pupuk **harus dari sumber resmi** (buku KIA, anjuran dinas/penyuluh, label produk) yang dilampirkan; Claude hanya menyusun tampilan.

---

## Modul 1 · App — Bikin app tanpa coding (±70 menit)
**Hasil:** satu app online, link siap dibagikan. **Alat:** Prompt Generator app.

| Sub | Durasi | Langkah mengajar | Tanda berhasil |
|---|---|---|---|
| 1.1 Pilih app dari masalah | 8' | Tanya: "Kegiatan apa yang kamu ulang tiap minggu?" → pilih dari 5 pola: kuis, kalkulator, booking, katalog, kartu member | Satu kalimat masalah + pola app |
| 1.2 Prompt dari Prompt Generator | 10' | Isi jenis app, data, bahasa → salin prompt (Paket Praktik: pakai template prompt umum) | Prompt lengkap tertempel |
| 1.3 Coba di Artifact | 12' | Uji seperti pengguna: klik semua tombol, isi salah, ulang | Daftar 3 hal yang perlu diperbaiki |
| 1.4 Rapikan tampilan & fitur | 20' | Revisi bertahap: warna, logo (lampirkan), suara, papan skor, tombol WA (`https://wa.me/62...?text=...`) | Fitur sesuai target |
| 1.5 Enak di HP | 8' | Minta: huruf ≥16px, tombol ≥44px, tidak terpotong; uji dengan mode HP di browser | Tampil baik di HP sendiri |
| 1.6 Unduh & online | 12' | Unduh file HTML → app.netlify.com/drop → seret folder → ganti nama situs (Site settings) → buka di HP | Link `nama.netlify.app` |

**Ide app per minat:** Guru — kuis, roda nama acak, timer kelas, absensi QR sederhana · Petani — kalkulator pupuk, jadwal tanam, catatan panen · UMKM — menu + pesan WA, kartu stempel member, kalkulator HPP · Bidan — booking, pengingat imunisasi (dari jadwal resmi), kalkulator HPL dari HPHT · Mahasiswa — alat hitung IPK, flashcard, to-do · Kreator — kuis kepribadian, generator ide.

**Latihan rumah:** ubah app jadi versi kedua (mis. kuis bab lain) tanpa bantuan mentor.

---

## Modul 2 · Website — usaha & profil (±70 menit)
**Hasil:** website online dengan tombol WhatsApp berfungsi. **Alat:** Prompt Generator app & website.

| Sub | Durasi | Isi |
|---|---|---|
| 2.1 Susunan halaman yang menjual | 8' | Urutan: Judul utama (janji hasil) → Layanan/produk → Bukti (foto, testimoni) → Harga → Tanya jawab → Kontak/WA → Lokasi |
| 2.2 Tulis isi bareng Claude | 15' | Beri data usaha (nama, layanan, harga, keunggulan, alamat). Minta: "bahasa sederhana, jujur, tanpa kata 'terbaik/nomor 1'" |
| 2.3 Desain rapi | 12' | Pilih 1 gaya (minimalis/hangat/modern), 2 warna merek, 1 huruf; minta versi HP dulu |
| 2.4 Tombol WA, peta, foto | 12' | Tombol WA pesan otomatis; sematkan Google Maps (Bagikan → Sematkan peta); galeri foto terkompres |
| 2.5 Online dengan nama sendiri | 13' | Netlify drop → ganti nama situs; domain sendiri opsional (beli domain → atur DNS) |
| 2.6 Ubah isi tanpa coding | 10' | Lampirkan file HTML ke Claude: "Ganti harga es kopi jadi 17rb, sisanya jangan diubah" → deploy ulang (ingat: tiap deploy produksi memakai kredit Netlify) |

**Checklist website layak:** judul jelas dalam 5 detik · nomor/tombol WA berfungsi · harga atau "mulai dari" · foto asli · alamat/area layanan · cepat dibuka di HP.

---

## Modul 3 · Video — animasi untuk Reels & TikTok (±70 menit)
**Hasil:** satu video vertikal 9:16 siap unggah. **Alat:** Prompt Generator Video (49 gaya, Paket All in).

| Sub | Durasi | Isi |
|---|---|---|
| 3.1 Ide & hook 3 detik | 10' | Rumus hook: *angka* ("3 tanda…"), *salah kaprah* ("Ternyata otak kita bukan cuma 10%"), *pertanyaan* ("Kenapa pupukmu boros?"), *before/after* |
| 3.2 Naskah singkat | 10' | 30–60 detik: Hook (3") → Masalah (5") → Isi 3 poin (15–40") → Ajakan (5"). ±2–2,5 kata/detik |
| 3.3 Pilih gaya video | 5' | Tipografi kinetik, infografik, karakter, peta, 3D sederhana |
| 3.4 Claude membuat animasi | 25' | Tempel prompt gaya + naskah → pratinjau Artifact → revisi per adegan ("adegan 2 terlalu cepat, tahan 2 detik") |
| 3.5 Takarir & suara | 10' | Huruf besar, maks. 2 baris, kontras; narasi suara sendiri atau text-to-speech; musik pelan opsional (pakai musik bebas lisensi/fitur musik platform) |
| 3.6 Rekam jadi MP4 9:16 | 10' | Rekam layar pratinjau (OBS / perekam layar bawaan) ukuran 1080×1920, atau ekspor bila alat menyediakan; potong awal/akhir di CapCut |

**Aturan konten edukasi:** fakta kesehatan/sains dicek ke sumber tepercaya; cantumkan "sumber: …" di caption.

---

## Modul 4 · Carousel — Instagram & TikTok (±70 menit)
**Hasil:** satu set carousel 7–10 slide + caption. **Alat:** template carousel.

| Sub | Durasi | Isi |
|---|---|---|
| 4.1 Cover berhenti scroll | 10' | Judul angka/pertanyaan/janji jujur; maks. 8 kata; visual kontras |
| 4.2 Alur 7–10 slide | 12' | Cover → Masalah → Poin 1…n (satu ide/slide) → Ringkasan → Ajakan (simpan/bagikan/chat) |
| 4.3 Template satu gaya | 15' | Minta Claude membuat template HTML 1080×1350 (rasio 4:5) dengan satu gaya untuk sebulan |
| 4.4 Foto & warna merek | 10' | Foto sendiri atau bank foto bebas pakai; 2 warna merek |
| 4.5 Unduh gambar | 13' | Unduh PNG per slide (fitur unduh di template, atau tangkapan layar ukuran tepat) |
| 4.6 Caption & ajakan | 10' | Caption: kalimat pembuka → 2–3 baris nilai → ajakan → 3–5 tagar lokal (#jember #guruJember #umkmjember) |

---

## Modul 5 · Lanjut — Setelah sesi (±15 menit di penutup)

| Sub | Isi | Hasil |
|---|---|---|
| 5.1 Rencana proyek berikutnya | Isi lembar "3 karya minggu ini" (SOP 07 §3) | 3 target dengan tanggal |
| 5.2 Kalender konten mingguan | Pola sederhana: Senin carousel, Rabu video, Jumat karya/testimoni | Jadwal 1 minggu |
| 5.3 Jual jasa ke UMKM Jember | Contoh paket jasa (usulan, sesuaikan pasar): web menu/profil Rp150–300 ribu, app kartu member Rp200–400 ribu, 8 carousel/bulan Rp200–400 ribu. Cara menawarkan: buat 1 contoh gratis untuk usaha dekat rumah | 1 calon klien |
| 5.4 Tanya lewat WhatsApp | Kirim tangkapan layar + pertanyaan; dibalas sesuai paket (All in prioritas) | — |

---

## Rubrik karya (dipakai di akhir sesi)

| Kriteria | 1 | 3 | 5 |
|---|---|---|---|
| Berfungsi | Banyak error | Jalan dengan sedikit kekurangan | Semua tombol/alur jalan |
| Sesuai tujuan | Tidak jelas untuk siapa | Cukup jelas | Jelas & langsung bisa dipakai |
| Tampilan HP | Terpotong | Bisa dibaca | Nyaman |
| Online/terunduh | Belum | File ada, belum dibagikan | Link/MP4/PNG siap dibagikan |
| Mandiri | Mentor mengetik | Setengah-setengah | Peserta mengetik & bisa menjelaskan prompt |

## Lampiran: kumpulan prompt umum (diberikan di semua paket)
1. **Perbaiki error:** "Ada error: [tempel pesan/jelaskan]. Perbaiki tanpa mengubah bagian lain, lalu tampilkan file lengkap."
2. **Versi HP:** "Buat tampilannya nyaman di HP: huruf minimal 16px, tombol besar, tidak ada yang terpotong."
3. **Tombol WA:** "Tambahkan tombol WhatsApp ke nomor 62xxxx dengan pesan otomatis: '[pesan]'."
4. **Ubah satu bagian:** "Ubah hanya [bagian]. Bagian lain jangan disentuh."
5. **Jelaskan untuk pemula:** "Jelaskan apa yang kamu buat dalam 5 poin untuk orang awam."
6. **Lanjut chat baru:** "Ini file terakhirku [lampirkan]. Lanjutkan dari sini: [permintaan]."
7. **Naskah video:** "Buat naskah 30 detik tentang [topik] untuk [penonton]: hook 3 detik, 3 poin, ajakan."
8. **Carousel:** "Buat 8 slide carousel tentang [topik] untuk [penonton]; tiap slide maks. 20 kata."
9. **Caption:** "Buat 3 pilihan caption pendek + 5 tagar lokal Jember."
10. **Cek fakta:** "Daftar semua klaim fakta di teks ini yang perlu aku cek ke sumber resmi."
