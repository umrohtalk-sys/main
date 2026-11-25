# Laporan: video kit B (versi Indonesia, Hari Guru, kalender, carousel)

Dibuat 21 Nov 2026. Sumber: `_data/reels-ringkas.json` (53 reel, diurut views). Semua berkas tertulis di folder ini saja.

## Isi folder

| Berkas | Isi |
|---|---|
| `versi-indonesia.md` | 10 reel MY terlaris diadaptasi ke guru Indonesia: judul cover, hook, 5 babak, CTA |
| `hari-guru-25nov.md` | 3 naskah video, 3 caption IG, 2 thread, 1 ucapan untuk cikgu Malaysia |
| `kalender-8-minggu.md` | 23 Nov 2026 - 17 Jan 2027, 56 hari, tiap hari 1 reel IG + 1 post Threads |
| `carousel-thread.md` | 10 reel teratas: masing-masing 1 carousel 8 slaid + 1 thread 5-7 post |
| `bank-konten-items.json` | 95 item dengan skema yang diminta |

## Verifikasi yang sudah dijalankan

- JSON valid (jq) dan 95 item: 10 versi Indonesia, 9 Hari Guru, 56 kalender, 20 carousel/thread.
- Setiap item hanya punya kunci skema yang diminta. Nilai `platform`, `format`, `pilar`, `bahasa`, dan `cta` semua dalam daftar yang diizinkan.
- Kalender: 56 tanggal berurutan dari Senin 23 Nov 2026 sampai Minggu 17 Jan 2027. Tanggal 25 Nov 2026 memang Rabu.
- Semua post Threads dan thread di bawah 450 aksara (diperiksa per post).
- Pilar kalender: perbandingan-negara 7 + karier-cikgu 15 = 22 (39%), curhat-cikgu 17 (30%), produk-jembatan 11 (20%), tips-ai 6 (11%). Target 40/30/20/10 didekati, bukan tepat.
- Tidak ada soal atau kuiz yang dibuat.

## Yang perlu dicek sebelum posting

1. **Naskah video tidak dibaca.** Adaptasi dan slaid dibuat dari caption dan judul reel, tanpa takarir atau screenshot. Caption reel 6 ("Murid dengan reaksi tercepat") dan reel 7 hampir kosong, jadi babaknya tebakan dari judul. Reel 2 juga pendek. Bandingkan dengan video asli.
2. **CTA dan DM.** Mapping keyword mengikuti memori automation Zernio: GAME dan PROMPT ke demoprompt, VIDEO dan TOOLS ke lpvideo, NAK ke lptoolsmy. Masterclass (lpindo) belum punya keyword. Automation saat ini hanya mengirim DM Bahasa Melayu, jadi komen kata kunci dari penonton Indonesia akan menerima DM Melayu. Sebelum CTA di `versi-indonesia.md` dan kalender Indonesia dipakai, perlu automation dengan teks DM Indonesia.
3. **Tarikh cuti ditandai [SAHKAN].** Cuti akhir tahun dan awal sesi 2027 untuk Malaysia, serta libur semester dan semester genap untuk Indonesia, belum saya pastikan dari kalender resmi. Tarikh Thaipusam 2027 juga perlu disahkan.
4. **Hari Guru Malaysia.** Tertulis 16 Mei. Sahkan sebelum posting ucapan.
5. **Fakta Indonesia.** Istilah seperti TPG, PPG, NIDN, Dapodik, dana BOS, PPPK, dan Kurikulum Merdeka dipakai secara umum. Angka gaji sengaja tidak ditulis. Cek aturan terbaru sebelum memakai detail sertifikasi atau syarat dosen.
6. **Kisah Cikgu Aina versi Indonesia** adalah ilustrasi, bukan orang nyata. Ganti dengan kisah asli jika ada, dan tanpa klaim sebagai kisah nyata.
7. **Peringkat kampus ASEAN** (versi 10) tidak memakai angka dari reel MY. Ambil angka QS edisi terbaru untuk Indonesia.

## Catatan teknis JSON

- `tanggal` hanya ada di item kalender (56 item). Item lain tidak punya `tanggal`.
- Thread dipisah dengan `\n---\n` di `isi`.
- `tags` diambil dari hashtag di caption untuk caption IG, dan disusun manual untuk item lain.
- `pilar` tidak memakai `game-app`.
- `ig-posts-90hari.json` tidak dipakai karena tidak diminta.
