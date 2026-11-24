# CLAUDE.md — repo konten medsos Auzan Hasfi

Environment cloud: selalu **"Konten"** (bukan "Default"). Kunci Repliz/Zernio ada sebagai network secret di sana; panggil tool lewat `docs/sop-medsos/alat/mcp-call.sh` kalau tool `mcp__repliz__*` tidak tersedia (lihat SOP umum bagian 0.A).

Folder SOP ada di `docs/sop-medsos/`. Sebelum tugas media sosial apa pun:

1. Baca `docs/sop-medsos/SOP-KONTEN-MEDSOS-AUZAN.md` (akun, link, aturan umum, thread, otomasi komen).
2. Kalau tugasnya upload/posting VIDEO: baca dan ikuti `docs/sop-medsos/SOP-VIDEO-UPLOAD.md` dari langkah 0 sampai 8.
3. Kalau tugasnya thread Threads: SOP C / SOP D di file umum + `lampiran/panduan-thread/` + `lampiran/afiq-asyraf/`.
4. Contoh hasil yang sudah terbit: `lampiran/contoh-posting-terbit.md`, `lampiran/contoh-caption-video/`.
5. Bank Konten (2.000+ thread BM/ID): https://bank-konten-auzan.netlify.app — data lokalnya di `lampiran/bank-konten/`.

Aturan inti:
- Jawab user dalam Bahasa Indonesia. Konten Malaysia = Bahasa Melayu, Indonesia = Bahasa Indonesia.
- Posting SELALU lewat Repliz; file video/gambar dititip di Zernio (presigned URL). Kunci API hanya di network secret environment, tidak pernah ditulis di repo atau chat.
- User bicara jam WIB; Repliz `scheduleAt` = UTC (WIB − 7).
- Langsung upload tanpa file TXT, kecuali user minta lihat dulu.
- Hashtag persis dari user; kalau user bilang "sama seperti SOP": `#fyp #malaysia #cikgu #reel #reels`. Caption berdasarkan isi konten.
- Threads video: file kompres 720p, TANPA `topic`.
- Setelah posting: cek status sampai `success`, lapor dalam tabel.
- Setiap selesai, tambah baris riwayat di SOP-VIDEO-UPLOAD.md bagian 9 (video) atau `lampiran/panduan-thread/TERBIT.json` (thread), lalu commit.
