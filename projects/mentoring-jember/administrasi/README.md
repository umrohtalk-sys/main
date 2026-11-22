# Administrasi Peserta

Semua form berbentuk satu file HTML: buka di Chrome (laptop atau HP), kirim link/file ke peserta, jawaban kembali lewat WhatsApp. Tidak ada server dan tidak ada data yang tersimpan di luar perangkat peserta (cocok dengan prinsip UU PDP). Kalau nanti diunggah ke Netlify, cukup bagikan linknya.

| # | Kebutuhan | File | Kapan |
|---|---|---|---|
| 1 | Form pendaftaran peserta | `form-pra-mentoring.html` bagian **A** | Setelah DP |
| 2 | Form identifikasi kebutuhan | `form-pra-mentoring.html` bagian **B** | Setelah DP, paling lambat H-3 |
| 3 | Form pilihan materi | `form-pra-mentoring.html` bagian **C** | Sama |
| 4 | Template konfirmasi pembayaran | `kuitansi.html` + pesan §1 di bawah | Saat uang diterima |
| 5 | Template konfirmasi jadwal | pesan §2 di bawah | Saat jadwal dikunci |
| 6 | Checklist persiapan laptop peserta | `form-pra-mentoring.html` bagian **D** + pesan §3 | H-3 dan H-1 |
| 7 | Daftar kehadiran | `daftar-hadir.html` (cetak A4 lanskap) | Hari H |
| 8 | Form evaluasi setelah mentoring | `form-evaluasi.html` | H+0 malam / H+1 |

> Tiga pertanyaan inti sebelum sesi ada di bagian B: **(1) sudah sejauh mana mengenal AI, (2) ingin belajar apa / masalah apa, (3) karya apa yang ingin dibawa pulang.** Jangan mulai menyiapkan materi custom sebelum tiga jawaban ini masuk.

**Isi otomatis lewat link:** `form-pra-mentoring.html?nama=Rina&paket=Builder&tgl=2026-11-28`

---

## Template pesan WhatsApp

### §1 Konfirmasi pembayaran
```
Halo Kak [Nama], pembayaran sudah aku terima ✅

🧾 No. [MCJ-KW-2026-001]
📦 [Paket Builder] · [1] orang
💳 Diterima: Rp[125.000] via [QRIS] · [24 Nov 2026]
⏳ Sisa: Rp[125.000] (dilunasi sebelum sesi mulai)

Bukti pembayaran terlampir (PDF). Jadwal Kakak sudah aku kunci 🙌
Langkah berikutnya: isi form pra-mentoring ±5 menit ya → [link form]
```

### §2 Konfirmasi jadwal
```
Jadwal mentoring Kakak sudah fix ya 🙌

📅 [Sabtu, 28 November 2026]
⏰ [09.00–12.00 WIB] (±3 jam)
📍 [Nama cafe, alamat + link Google Maps]  /  💻 Zoom: [link] · ID [..] · kode [..]
📦 [Paket Builder] · Modul utama: [App]
🎯 Target karya: [game kuis pecahan kelas 4]

Mohon isi form pra-mentoring paling lambat [Rabu, 25 Nov]: [link]
Reschedule gratis 1× kalau kabar ≥24 jam sebelumnya.
```

### §3 Pengingat H-1 + checklist laptop
```
Halo Kak [Nama], besok kita mentoring ya 😊
⏰ [09.00] · 📍 [cafe / link Zoom]

Checklist sebelum berangkat:
☐ Laptop + charger (HP saja tidak cukup)
☐ Login claude.ai di Chrome/Edge sudah berhasil
☐ Settings Claude → fitur "code execution & file creation" aktif
☐ Akun Netlify sudah dibuat (app.netlify.com)
☐ Bahan di laptop: [daftar soal / menu / foto / logo]
☐ Kuota HP untuk hotspot cadangan
☐ (Zoom) headset/earphone + aplikasi Zoom terpasang
☐ Usahakan tidak memakai Claude berat-berat hari ini, biar kuota gratisnya penuh besok

Kalau ada yang belum bisa, santai, kita bereskan di 10 menit pertama 👍
```

### §4 Setelah sesi (H+0 malam)
```
Terima kasih Kak [Nama], hari ini keren! 🎉
Karya: [link]
Folder hasil sesi (materi, prompt, blueprint, panduan Netlify, rencana belajar): [link/zip]
Sertifikat apresiasi terlampir.

Boleh minta 2 menit isi evaluasi? → [link form evaluasi]
Masa tanya jawab WA paket [Builder]: sampai [tanggal] (lihat kebijakan dukungan).
```

### §5 Reschedule
```
Siap Kak, jadwal aku pindahkan. Pilihan baru:
A. [hari, tgl, jam, tempat]
B. [hari, tgl, jam, Zoom]
DP tetap berlaku, tidak ada biaya tambahan (reschedule ke-1).
```
