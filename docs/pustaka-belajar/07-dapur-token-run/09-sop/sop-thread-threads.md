# SOP: Thread Threads (berantai, banyak akaun)

**Kapan dipakai:** menulis dan mengunggah thread (teks berantai) atau video ke Threads, untuk beberapa akaun sekaligus. Akaun aktif: @auzan_hasfi, @auzanhasfi, @edugamelabs.id, @bidanvirdaa, @diarymalaysia, dan lain-lain di Repliz.

## Input yang dibutuhkan
- Topik, bahasa (BM atau ID), dan link tujuan (demoprompt, lptools, lpvideo, dsb.).
- Daftar akaun sasaran dan copywriting berbeda untuk tiap akaun.
- Untuk video: fail video asli dari Downloads.

## Langkah
1. Tulis satu draf per akaun. Copy berbeda per akaun (mis. topik "AI Threads" untuk satu akaun, topik "Cikgu" untuk akaun lain). Jangan tampil sebagai duplikat.
2. Thread teks: setiap ayat pendek. Caption video maksimum 1 sampai 2 ayat bila user meminta singkat.
3. Sebelum unggah thread teks: buat pratonton TXT di Downloads (hanya untuk thread, dan hanya bila user mahu pratonton).
4. Untuk video ke Threads: kompres dulu ke 720x1280, yuv420p, crf 27, maxrate 2500k, AAC 128k, faststart. Hasilnya sekitar 7 MB untuk 90 detik. Video asli sering gagal dengan "unexpected error".
5. Jadualkan lewat Repliz (`POST /public/schedule`, type text, replies[] dengan delay 0, scheduleAt sekarang). Untuk video, fail dihos dulu lewat presigned URL Zernio bila storage Repliz kosong.
6. Setelah unggah, simpan ID dan status, laporkan ringkasan per akaun.
7. Jika ada akaun yang gagal, ulang hanya akaun itu dan jelaskan sebabnya.

## Aturan wajib
- Posting video ke IG, TikTok, LinkedIn, Pinterest lewat Repliz. Tidak buat TXT pratonton untuk video. Caption langsung di create_schedule.
- Kompres hanya untuk Threads. Platform lain pakai fail asli.
- Tulis caption yang berbeda antara akaun. Jangan kirim teks sama dua kali.
- Tanpa emoji berlebihan. Tanpa klaim palsu.
- Jadwal dibatalkan bila user minta (mis. Threads video yang gagal dibatalkan).

## Checklist QA
- [ ] Teks tidak terpotong; setiap ayat dalam thread masuk akal bila dibaca terpisah
- [ ] Link benar dan terbuka
- [ ] Copy berbeda untuk setiap akaun
- [ ] Video Threads di bawah ukuran (sekitar 7 MB untuk 90 detik)
- [ ] Status unggah dicek, bukan hanya dijadualkan
- [ ] Ringkasan dikirim ke user

## Kesalahan yang pernah terjadi
- Repliz storage kosong (init_file 402). Fail tidak dapat diunggah dan harus dihos dulu.
- `GET /public/content` di Repliz ditolak 402, sedangkan `POST /public/schedule` untuk thread berantai berhasil walau dokumentasi menyebut Premium+.
- Video Threads gagal walau sudah encode ulang. Berhasil setelah kompres 720x1280 crf 27.
- Caption Threads terlalu panjang. User minta 1 sampai 2 ayat.
- Thread teks dibaca hanya lewat pratonton browser karena modal login menutupi halaman.
- Komen dari akaun sendiri tidak memicu automation (akaun tidak boleh DM dirinya sendiri), jadi tes harus dari akaun lain.

## Sumber
Memori: reference-repliz-mcp, project-artikel-threads-game-edukasi, project-threads-screenshot-extension. Feedback: posting-tanpa-txt, tanpa-transkrip-whisper.
