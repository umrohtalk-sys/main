# 09 — Persiapan Teknis Mentoring

Cetak atau buka di HP, centang sebelum berangkat / sebelum Zoom dibuka. Detail rundown ada di [SOP 03](03-SOP-PELAKSANAAN-SESI.md).

## A. Mentoring di cafe Jember

### H-1
- [ ] Cafe dipilih: Wi-Fi stabil (uji kecepatan, unggah ≥10 Mbps), colokan dekat meja, tidak terlalu bising di jam sesi
- [ ] Meja cukup untuk **duduk bersebelahan** dan 2 laptop (grup: meja panjang / gabung meja); kalau perlu reservasi
- [ ] Cafe buka minimal 1 jam setelah sesi selesai
- [ ] Link Google Maps cafe dikirim ke peserta
- [ ] Contoh karya bidang peserta dan prompt sudah diuji di akun latihan
- [ ] Link alat paket siap: Prompt Generator / PG Video / app Fundamental
- [ ] Folder hasil peserta sudah dibuat (`sh folder-peserta/buat-folder-peserta.sh "Nama"`)

### Tas mentor
- [ ] Laptop + charger
- [ ] **Extension kabel / terminal colokan** (3 lubang)
- [ ] **Hotspot cadangan**: HP + kuota ≥10 GB atau modem MiFi
- [ ] **Headset** (untuk tunjukkan video bersuara tanpa mengganggu)
- [ ] Power bank + kabel data
- [ ] Mouse cadangan
- [ ] Flashdisk: portofolio, workbook PDF, bahan contoh
- [ ] Workbook cetak (1 per peserta) + pulpen
- [ ] Kartu QR: LP, portofolio, QRIS
- [ ] Daftar hadir cetak (`administrasi/daftar-hadir.html`)

### 30 menit sebelum sesi
- [ ] Datang lebih awal, pilih meja, cek colokan
- [ ] Sambungkan ke Wi-Fi cafe dan buka claude.ai + app.netlify.com (pastikan tidak diblokir)
- [ ] Hotspot cadangan dinyalakan & diuji
- [ ] Portofolio terbuka di tab untuk demo

## B. Mentoring lewat Zoom

### H-1
- [ ] **Link Zoom** dibuat (ID + kode) dan dikirim ke peserta; durasi rapat cukup (akun gratis Zoom membatasi durasi; siapkan akun berbayar atau link Google Meet cadangan)
- [ ] Opsi "Allow participants to share screen" aktif
- [ ] **Folder materi** siap di laptop: workbook PDF, portofolio, prompt contoh, folder hasil peserta
- [ ] Panduan kendala teknis (bagian C) dikirim ke peserta

### 15 menit sebelum sesi
- [ ] **Tes screen sharing** sendiri (bagikan jendela Chrome, bukan seluruh layar → notifikasi pribadi tidak terlihat)
- [ ] **Tes audio & mikrofon** (Settings → Audio → Test speaker / Test mic), headset terpasang
- [ ] Kamera, cahaya, latar rapi
- [ ] Notifikasi laptop & HP dimatikan (mode Jangan Ganggu)
- [ ] Buka ruang Zoom 10 menit lebih awal

### Selama sesi
- [ ] Peserta yang share screen selama praktik; mentor share hanya saat demo
- [ ] Istirahat 5 menit tiap ±60 menit
- [ ] Rekam **hanya bila peserta setuju** (lihat [kebijakan rekaman](10-KEBIJAKAN-PROGRAM.md#4-rekaman-sesi))

## C. Panduan kendala teknis untuk peserta (kirim H-1)

| Kendala | Coba ini |
|---|---|
| Tidak bisa share screen di Zoom | Klik **Share Screen** → pilih jendela Chrome → Share. Mac: System Settings → Privacy & Security → Screen Recording → izinkan Zoom, lalu buka ulang Zoom |
| Suara tidak terdengar / mic tidak masuk | Klik panah di tombol Mute → pilih speaker & mic yang benar → **Test Speaker & Microphone**. Coba keluar-masuk lagi ke rapat |
| Suara bergema | Pakai headset/earphone; matikan mic saat tidak bicara |
| Internet putus-putus | Matikan video; pindah dekat router atau pakai hotspot HP; tutup aplikasi lain yang mengunduh |
| Tidak bisa login Claude | Cek email (kode masuk dikirim ke email); coba browser lain (Chrome/Edge); matikan VPN |
| Artifact tidak muncul di Claude | Settings → aktifkan **code execution & file creation**; buka chat baru |
| "Usage limit" / batas pemakaian Claude | Tunggu reset (bergulir ±5 jam). Lanjutkan bagian lain dulu; mentor punya rencana cadangan |
| File HTML tidak bisa dibuka | Klik kanan file → Open with → Chrome |
| Netlify: halaman kosong | Pastikan nama file `index.html` dan ada langsung di folder yang diseret |
| Laptop lambat | Tutup tab dan aplikasi lain; restart laptop sebelum sesi |
| Benar-benar macet | Kirim tangkapan layar ke WA mentor; sesi bisa lanjut via share screen mentor |
