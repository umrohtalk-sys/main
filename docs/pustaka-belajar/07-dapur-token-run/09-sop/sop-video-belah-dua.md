# SOP: Video belah dua (perbandingan dua sisi)

**Kapan dipakai:** perbandingan dua hal dalam satu layar. Contoh: Jember vs Banyuwangi, Cikgu lelaki vs perempuan, RON95 vs Pertalite, ID vs MY, MyKad vs KTP, ayah hantar adik. Format potret 9:16, panel kiri dan kanan atau atas dan bawah.

## Input yang dibutuhkan
- Dua sisi yang dibanding, dengan 3 sampai 6 fakta atau adegan per sisi.
- Sumber data (contoh: UMK 2026, DOSM, QS). Fakta yang tidak ada sumber ditandai jelas atau dibuang.
- Bahasa dan suara: ID memakai Putra (`eleven_v4_turbo`, language id, speed 1.1). BM memakai Daud.
- Ada tidaknya bunyi. Video tanpa suara (SFX sahaja) juga pernah dibuat untuk ayah hantar adik.

## Langkah
1. Cari folder belah dua terdekat di indeks (`index_video_project.md`), salin folder itu. Contoh rujukan: `video-jember-vs-banyuwangi`, `video-kata-id-vs-my`, `video-beban-cikgu-lelaki-perempuan`.
2. Tulis naskah. Satu fakta per kalimat pendek. Durasi 1 sampai 1.5 menit untuk versi potret.
3. Susun dua panel dengan wipe per adegan. Header kiri dan kanan berwarna berbeda, dengan label "VS" di tengah.
4. Kartu fakta muncul di panel. Takarir karaoke 4 kata di pita gelap bawah. Takarir WAJIB ada pada video infografik.
5. Narasi: kirim sebagai satu paragraf, lalu tambah jeda napas 0.7 detik di antara bagian (`tambah_jeda.py`). Cap waktu untuk sorot kata takarir.
6. Pastikan kata kunci di takarir dan judul sama dengan naskah.
7. Cover judul 0 sampai 3 detik: judul dengan kata pemancing berwarna aksen.
8. Cek contact sheet (lihat sop-qa-kontak-video.md), lalu render.
9. Serah ke `~/Downloads/` dengan nama bertimestamp. Bila platform Threads, kompres ke 720x1280 (lihat sop-thread-threads.md).

## Aturan wajib
- Takarir tidak menutupi angka atau ikon utama.
- Panel tidak saling menutup. Jaga margin.
- Kalau video dibuat dari remake rujukan, gaya diganti. Jangan salin 90 persen visual orang lain tanpa izin, dan jangan salin sumber teks.
- Suara tidak dipercepat untuk muat. Padatkan naskah, bukan atempo.
- Bila memakai data, tulis sumber di akhir video atau di caption.

## Checklist QA
- [ ] Dua sisi punya jumlah fakta seimbang
- [ ] Angka benar dan sumbernya ada
- [ ] Takarir karaoke sinkron dengan suara
- [ ] Tidak ada tulisan yang menutupi objek utama
- [ ] Cover judul hilang di detik 3
- [ ] Bunyi tidak terpotong, jeda natural
- [ ] Nama file bertimestamp, di Downloads

## Kesalahan yang pernah terjadi
- Video belah dua pernah mencampur gaya enjin 3D dan infografik. User meminta infografik flat, bukan jalur hitam atas dan bawah.
- Cover besar warna hitam ditolak user. Cover harus mengikuti sampul IG studio biru.
- Versi suara Daud dengan pemotongan jeda membuat suara terdengar patah.

## Sumber
Memori: project video-jember-vs-banyuwangi, video-kata-id-vs-my, video-beban-cikgu-lelaki-perempuan, video-ayah-hantar-adik, video-tegur-marah-vs-bimbing. Feedback: gaya-infografik-tanpa-jalur, judul-cover-pembuka, tulisan-tidak-menutupi, video-tidak-tersendat.
