# 07 — Template, Formulir & Tracker

## 1. Tracker lead (`tracker-leads.csv`)
Buka di Google Sheets/Excel (File → Import). Satu baris = satu orang. Kolom:

| Kolom | Isi |
|---|---|
| tanggal_masuk | YYYY-MM-DD |
| nama, no_wa | (data pribadi — jangan dibagikan) |
| sumber | tiktok / ig / wa_story / grup_wa / referral:[nama] / komunitas:[nama] / iklan |
| bidang | guru / mahasiswa / umkm / petani / bidan / kreator / lain |
| kecamatan | mis. Sumbersari, Ambulu |
| ingin_bikin | app / website / video / carousel |
| pengalaman | belum / pernah |
| label | Lead Baru / Tertarik / Pilih Jadwal / Terjadwal / Alumni / Dingin |
| paket | praktik / builder / allin |
| jumlah_orang | 1–5 |
| harga_deal | angka rupiah per orang |
| bayar | belum / dp / lunas |
| tanggal_sesi, tempat | tanggal & cafe/zoom |
| karya_link | link hasil |
| testimoni | belum / sudah (+link) |
| izin_publikasi | ya / tidak |
| upgrade, referral_dari | ya/tidak, nama |
| catatan_mentor | skor kualitas & perbaikan |

**Rekap mingguan (rumus Google Sheets, kolom sesuaikan):**
- Lead minggu ini: `=COUNTIFS(A:A,">="&TODAY()-7)`
- Closing rate: `=COUNTIF(M:M,"lunas")/(COUNTA(B:B)-1)`
- Pendapatan: `=SUMIFS(L:L,M:M,"lunas")` × jumlah_orang (atau buat kolom total)

## 2. Formulir pra-sesi (kirim H-3, bisa via Google Form atau chat)
1. Nama & panggilan
2. Bidang/pekerjaan, nama sekolah/usaha (opsional)
3. Satu masalah yang paling ingin diselesaikan
4. Karya yang ingin jadi di sesi (app/web/video/carousel) + contoh yang disukai (link)
5. Bahan yang akan dibawa (daftar soal, menu, foto, logo, data)
6. Laptop: Windows/Mac/Chromebook? Sudah punya akun Claude & Netlify?
7. Kebutuhan khusus (aksesibilitas, waktu sholat, dll.)

## 3. Lembar "Rencana 3 karya berikutnya"
```
Nama: ______________   Tanggal sesi: ________   Paket: ________
Karya hari ini: _______________________ Link: __________________

Karya 1: __________________  Untuk: __________  Target selesai: ____
Karya 2: __________________  Untuk: __________  Target selesai: ____
Karya 3: __________________  Untuk: __________  Target selesai: ____

Prompt andalanku (rumus 4 bagian):
PERAN  : ___________________________________________
TUJUAN : ___________________________________________
ISI    : ___________________________________________
FORMAT : ___________________________________________

Kalau macet: kirim tangkapan layar + pertanyaan ke WA +62 857-0497-3827
```

## 4. Permintaan testimoni (H+3)
> Kak [Nama], terima kasih sudah ikut mentoring 🙏 Boleh bantu 4 pertanyaan singkat (boleh voice note)?
> 1. Sebelum ikut, apa yang bikin Kakak ragu/kesulitan?
> 2. Apa yang Kakak buat di sesi, dan dipakai untuk apa?
> 3. Bagian sesi yang paling membantu?
> 4. Untuk siapa Kakak rekomendasikan mentoring ini?
> Boleh aku tampilkan jawaban + nama depan + karya Kakak di LP/medsos? (Ya / Ya tanpa nama / Tidak)

**Format tampil di LP:** "[Nama depan], [bidang] dari [kecamatan] — '[kutipan 1–2 kalimat]' · Karya: [link]".

## 5. Formulir umpan balik (skala 1–5)
1. Materi sesuai bidangku · 2. Aku yang mengetik sendiri · 3. Penjelasan mudah dipahami · 4. Karya jadi di sesi · 5. Tempat/Zoom nyaman · 6. Seberapa mungkin merekomendasikan (0–10) · 7. Saran perbaikan (teks).

## 6. Persetujuan & pengelolaan data (UU PDP)
Kirim sebelum/di awal sesi, cukup dibalas "Setuju":
> Data Kakak (nama, nomor WA, bahan & karya sesi) hanya dipakai untuk menjalankan mentoring dan dukungan setelahnya. Foto/karya/testimoni hanya ditampilkan di medsos/LP **jika Kakak setuju**. Kakak bisa minta data dihapus kapan saja lewat chat ini.

Aturan internal:
- Tracker disimpan di akun pribadi berkata sandi + verifikasi 2 langkah; jangan dibagikan.
- Hapus bahan peserta dari laptop mentor setelah 30 hari kecuali diminta disimpan.
- Login peserta di laptop mentor wajib logout setelah sesi.
- Rekaman Zoom hanya dengan izin, dikirim ke peserta saja.

## 7. Bank karya contoh (isi saat ada)
| Bidang | Karya | Link | Izin |
|---|---|---|---|
| Guru | Kuis pecahan kelas 4 | | |
| UMKM | Menu Kopi Kita + WA | | |
| Petani | Hitung pupuk jagung | | |
| Bidan | Baby Spa Bunda booking | | |
| Mahasiswa | Portofolio | | |
| Kreator | Video edukasi 9:16 | `sumber-zip/01-jember/...materi-video-edukasi/assets/hasil/` | milik sendiri |

## 8. Sertifikat/kenang-kenangan (opsional)
Minta Claude: "Buatkan sertifikat apresiasi HTML A4 landscape: 'Telah menyelesaikan Mentoring Claude 1-on-1 · Jember', nama [..], karya [..], tanggal [..], tanda tangan Auzan Hasfi · EduGame Labs." Sebut sebagai **sertifikat apresiasi**, bukan sertifikat resmi/terakreditasi.
