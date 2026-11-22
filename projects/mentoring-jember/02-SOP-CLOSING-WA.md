# SOP 02 — Closing lewat WhatsApp

> Nomor: +62 857-0497-3827 (WhatsApp Business app). Semua tombol LP membuka WA dengan pesan pra-isi (lihat `sumber-zip/01-jember/...materi-video-edukasi/js/data.js`).

## 1. Persiapan akun WhatsApp Business (sekali saja)

| Fitur | Isi |
|---|---|
| Profil bisnis | Nama: "Mentoring Claude Jember · Auzan" · Kategori: Pendidikan · Alamat: Jember · Jam: 07.00–21.00 · Link: LP |
| Pesan sambutan | "Halo, terima kasih sudah chat Mentoring Claude Jember 🙌 Boleh tahu nama dan bidangmu (guru, mahasiswa, UMKM, petani, bidan, kreator, lainnya)?" |
| Pesan di luar jam | "Terima kasih! Aku balas mulai jam 07.00 ya. Sambil menunggu, lihat materi lengkap: [link]/materi.html" |
| Katalog | 3 item: Paket Praktik Rp200.000, Builder Rp250.000, All in Rp300.000 (foto = gambar struk harga dari LP) |
| Label | lihat §2 |
| Balasan cepat (`/`) | lihat §3, simpan dengan pintasan |

> Catatan aturan: aturan "jendela layanan 24 jam" Meta hanya berlaku untuk **WhatsApp Business Platform/API** (pesan bebas hanya dalam 24 jam sejak pesan terakhir pelanggan; di luar itu wajib template yang disetujui, dan ada perubahan biaya mulai Okt 2026). Untuk **aplikasi WhatsApp Business biasa** aturan itu tidak berlaku, tetapi follow-up tetap harus sopan dan jarang (maks. 4 pesan tanpa balasan, lihat §5). Pesan siaran (broadcast) hanya sampai ke kontak yang menyimpan nomor kita.

## 2. Label (status lead)

| Label | Warna | Artinya | Langkah berikutnya |
|---|---|---|---|
| 🟦 Lead Baru | Biru | Chat masuk, belum didiagnosis | Langkah §4.1–4.2 |
| 🟨 Tertarik | Kuning | Sudah tahu paket, belum pilih jadwal | Follow-up §5 |
| 🟧 Pilih Jadwal | Oranye | Sudah pilih paket & tanggal | Kirim info pembayaran |
| 🟩 Terjadwal (DP/Lunas) | Hijau | Sudah bayar | SOP 03 checklist |
| 🟪 Alumni | Ungu | Sudah ikut sesi | Testimoni, upsell, referral |
| ⬜ Dingin | Abu | 4 follow-up tanpa balasan | Masuk siaran bulanan saja |
| 👥 Grup | — | Datang ≥2 orang | Pakai tabel harga grup internal |

## 3. Balasan cepat (salin ke WA Business)

### `/sapa` — balasan pertama
> Halo Kak [Nama], terima kasih sudah chat 🙏 Aku Auzan, mentor Claude di Jember.
> Biar materinya pas, boleh cerita singkat:
> 1. Kakak di bidang apa? (guru / mahasiswa / UMKM / petani / bidan / kreator / lainnya)
> 2. Paling ingin bikin apa dulu: app, website, video, atau carousel?
> 3. Sudah pernah pakai Claude atau belum?

### `/rekom-praktik`
> Dari cerita Kakak, aku sarankan **Paket Praktik Rp200.000**. Di sesi kita langsung bikin [karya] sampai jadi dan online, ditambah materi custom bidang [bidang], kumpulan prompt umum, dan panduan app Fundamental untuk mengulang di rumah.
> Mau ketemu di cafe (sekitar Sumbersari/Kaliwates/Patrang) atau Zoom?

### `/rekom-builder`
> Kalau Kakak mau terus bikin app/website sendiri setelah sesi, **Paket Builder Rp250.000** paling hemat: semua isi Praktik + **Prompt Generator akses selamanya**. Bayar sekali, dipakai seterusnya — kalau dipakai untuk 50 karya, cuma Rp5.000 per karya.

### `/rekom-allin`
> Kakak butuh promosi juga, jadi **Paket All in Rp300.000** paling cocok: semua isi Builder + **Prompt Generator Video (49 gaya)** + praktik video & carousel + prioritas tanya jawab WA.

### `/jadwal`
> Aku ada dua slot terdekat:
> A. [Hari, tgl] jam [09.00–12.00] di [cafe]
> B. [Hari, tgl] jam [19.00–22.00] via Zoom
> Kakak pilih A atau B? (Atau sebut waktu lain, aku sesuaikan.)

### `/bayar`
> Siap, aku kunci jadwal **[tgl, jam, tempat]** untuk **[paket]**.
> Untuk mengunci slot, mohon DP 50% (Rp[...]) atau lunas ke:
> • QRIS (gambar terlampir) / • Transfer [Bank] [No. rek] a.n. [Nama]
> Kirim bukti transfer di chat ini ya. Sisa dibayar di hari sesi sebelum mulai.

### `/konfirmasi`
> Terima kasih Kak [Nama], pembayaran sudah aku terima ✅
> 📅 [Hari, tgl] · ⏰ [jam] · 📍 [cafe + link Maps / link Zoom]
> 📦 [Paket]
> Persiapan (wajib, ±15 menit):
> 1. Bawa laptop + charger (HP saja tidak cukup)
> 2. Buat akun Claude di claude.ai pakai email Kakak, lalu login di laptop
> 3. Buat akun Netlify (gratis) pakai email yang sama
> 4. Siapkan bahan: [contoh: daftar soal / menu & harga / foto produk / logo]
> 5. Usahakan **tidak memakai Claude berat-berat** beberapa jam sebelum sesi supaya kuota gratisnya masih penuh
> H-1 aku ingatkan lagi ya 🙌

### `/grup`
> Wah asyik, datang [n] orang! Untuk [n] orang harga per orangnya jadi lebih murah: [harga dari tabel internal]. Masing-masing bawa laptop sendiri dan tetap dapat alat sesuai paket. Mau aku kunci untuk tanggal berapa?

## 4. Alur percakapan (langkah demi langkah)

1. **Sapa ≤15 menit** → `/sapa`. Label: Lead Baru.
2. **Diagnosis** (dari 3 jawaban): catat di tracker kolom `bidang`, `ingin_bikin`, `pengalaman`.
3. **Contoh karya** sesuai bidang: kirim 1 link/video karya mirip (bank karya: lihat SOP 07 §7). Tanpa ini, rekomendasi terasa jualan.
4. **Rekomendasi satu paket** (bukan tiga):
   - Pemula, hanya ingin coba → Praktik
   - Ingin bikin app/web berkali-kali, guru dengan banyak kelas, mahasiswa freelance → Builder
   - UMKM/bidan/kreator yang butuh promosi rutin → All in
   Label: Tertarik.
5. **Tawarkan 2 jadwal** → `/jadwal`. Label: Pilih Jadwal.
6. **Pembayaran** → `/bayar`.
7. **Konfirmasi** → `/konfirmasi`. Label: Terjadwal. Masukkan ke kalender (Google Calendar) dengan pengingat H-1 19.00.

## 5. Urutan follow-up (kalau tidak membalas)

| Kapan | Pesan |
|---|---|
| +1 hari | "Kak [Nama], aku kirim contoh [karya bidangnya] yang dibuat di sesi minggu lalu: [link]. Kalau mau yang seperti ini, tinggal pilih jadwal ya 🙂" |
| +3 hari | "Slot cafe minggu ini tinggal [hari]. Kalau Kakak lebih nyaman Zoom malam, juga bisa." *(hanya jika benar)* |
| +7 hari | "Boleh tahu yang bikin Kakak masih ragu? Harga, waktu, atau takut belum bisa? Biar aku bantu cari jalannya." |
| +14 hari | "Aku tutup dulu chatnya ya Kak. Kapan pun siap, ketik **MULAI** dan kita atur jadwalnya. Semangat!" → label Dingin |

Aturan: maksimal 4 pesan tanpa balasan; jangan kirim jam 21.00–07.00; jangan mengarang kelangkaan.

## 6. Pembayaran

| Hal | Aturan |
|---|---|
| Metode | QRIS (gratis biaya MDR untuk usaha mikro di transaksi ≤Rp500.000 menurut aturan BI 2026; cek kategori merchant ke penyedia QRIS) atau transfer bank. Opsional nanti: link Mayar/Kliqoo (isi `checkout` di `data.js`, tombol LP otomatis pindah) — biaya Mayar QRIS tercantum 0,7%, cek ulang di dokumen resmi |
| DP | 50% untuk mengunci jadwal; lunas sebelum sesi mulai |
| Reschedule | Gratis 1× bila kabar ≥24 jam sebelumnya |
| Batal oleh peserta | ≥24 jam: DP kembali 100% atau jadi kredit; <24 jam: DP jadi kredit untuk 30 hari |
| Batal oleh mentor | Uang kembali 100% atau jadwal ulang + bonus 30 menit |
| Bukti | Simpan bukti transfer di folder chat + catat di tracker kolom `bayar` |
| Akses alat (Builder/All in) | Diberikan di akhir sesi setelah lunas |

## 7. Menjawab keberatan

| Keberatan | Jawaban |
|---|---|
| "Mahal" | "Bandingkan: kelas umum ratusan ribu tanpa alat dan kadang cuma menonton. Di sini Kakak praktik sendiri sampai karya online, dan pulang bawa alat. Kalau datang berdua, per orang lebih murah." |
| "Bisa belajar sendiri di YouTube" | "Bisa banget, dan aku juga belajar dari sana. Bedanya, tutorial tidak tahu Kakak macet di mana. Di sesi, error dibetulkan saat itu juga, dan contohnya dari bidang Kakak." |
| "Saya gaptek / tidak bisa coding" | "Justru dibuat untuk pemula. Kakak cukup bisa mengetik. Kodenya dibuat Claude, Kakak yang mengarahkan." |
| "Claude kan bayar?" | "Claude ada versi gratis, cukup untuk sesi. Versi Pro (±US$20/bulan, ±Rp350 ribuan) opsional, nanti aku jelaskan kapan perlu." |
| "Tidak punya laptop" | "Sesi butuh laptop. Kalau bisa pinjam, aman. Atau ajak teman yang punya laptop dan datang berdua (harga grup)." |
| "Jauh dari kota" | "Dari Kencong sampai Kalisat bisa lewat Zoom, harganya sama. Cukup laptop dan internet stabil." |
| "Nanti dulu, sibuk" | "Siap. Mau aku kabari slot libur semester (21–31 Des)? Biasanya guru lebih longgar." |
| "Hasilnya pasti jadi?" | "Targetnya satu karya jadi di sesi. Kalau belum selesai, kita lanjutkan lewat WA/Zoom singkat sampai jadi." |

## 8. Upsell & referral (setelah sesi)
- **Upgrade** (H+7): "Praktik → Builder cukup tambah Rp50.000, Prompt Generator aksesnya selamanya." Hanya ditawarkan 1×.
- **Referral** (H+14): "Kalau ada teman yang mau ikut, sebut namamu saat chat. Kamu dapat [bonus], temanmu dapat harga grup walau datang sendiri." *(bonus usulan: 30 menit Zoom tanya jawab atau template carousel tambahan)*.
- **Komunitas/instansi**: "Sekolah/kelompokmu mau pelatihan bareng? Aku bisa buatkan penawaran khusus."
