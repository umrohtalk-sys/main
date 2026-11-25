# SOP: Video peta (dokumenter peta, gaya vintaj)

**Kapan dipakai:** video dokumenter yang memakai peta sebagai tulang belakang cerita. Contoh: bahasa Melayu di lima negara, Petronas tersingkir, Malaysia underrated, Singapura kaya. Gaya rujukan: peta vintaj krem atau hijau, lencana bendera, papan nama, garis penghubung.

## Input yang dibutuhkan
- Naskah 60 sampai 100 detik. Pilih satu dari dua format: potret 4:5 kad di tengah, atau 9:16 penuh.
- Daftar lokasi dengan koordinat atau nama admin-1 (wilayah).
- Sumber peta: Natural Earth (`geo.py`, termasuk admin-1) dan relief Esri World_Shaded_Relief (`_alat/ambil_relief.py`).
- Foto Unsplash atau bendera. Unduh dari Unsplash secara sah (lisensi Unsplash), catat fotografer.
- Suara: Daud M (BM), dengan takarir dwibahasa Melayu + English secara default untuk video BM.

## Langkah
1. Salin folder peta terdekat, mis. `video-bahasa-melayu-20261115-*` atau `video-universiti-asean`. Enjin dari universiti ASEAN dipakai, gayanya diganti.
2. Ambil relief dan batas wilayah (`ambil_relief.py`, `geo.py`). Simpan di folder project, bukan scratchpad.
3. Tulis `data.py` berisi adegan, lokasi, dan lencana. Tag atas seperti "682 ● SRIVIJAYA" untuk penanda tahun.
4. Narasi: naskah sebagai satu paragraf. Daud v4 turbo, speed 1.08, sekitar 166 kata = 74 detik. Tambah jeda di batas kalimat.
5. Wilayah yang disorot diberi bingkai merah gelap. Garis titik penghubung antar lokasi.
6. Transisi antar adegan: wipe atau zoom. Bunyi transisi dijana baru (whoosh unik), jangan pakai file lama.
7. Cover judul 0 sampai 3 detik di atas peta dengan kotak judul putih.
8. Render sheet dulu untuk cek (`render.py sheet t1,t2 nama`), lalu render MP4. Render 60 fps bisa sekitar 14 menit.
9. Bila target sekitar 25 MB: 2-pass x264 2500k, 30 fps, AAC 128k. Master dibuang setelah versi final dicek.
10. Serah ke `~/Downloads/` dengan nama bertimestamp, `open -R`.

## Aturan wajib
- Peta dan label harus akurat. Cek ejaan nama tempat dan tahun.
- Foto dan bendera ada sumber atau lisensi yang jelas.
- Takarir tidak menutupi label wilayah utama.
- Tidak ada klaim yang tidak punya sumber. Bingkai fakta dengan jujur, mis. "Bayangkan...", "menurut kajian..."

## Checklist QA
- [ ] Relief dan batas wilayah muncul, tidak kosong
- [ ] Setiap lokasi bertanda dan ejaannya benar
- [ ] Teks lencana dan papan nama tidak keluar bingkai
- [ ] Takarir dwibahasa sinkron
- [ ] Tidak ada frame identik panjang (gerak macet)
- [ ] Ukuran dan bitrate sesuai target
- [ ] Master dihapus setelah HP versi lolos cek

## Kesalahan yang pernah terjadi
- Render pertama sangat lambat (0.7 fps) karena Mac dibebani sesi lain. Solusi: CDP `captureScreenshot` optimizeForSpeed, komposit PIL alpha_composite, encoder `h264_videotoolbox`.
- Render 115 MB tidak sesuai permintaan user (sekitar 25 MB).
- Kamera ease-in-out per shot membuat gerak macet.

## Sumber
Memori: project video-bahasa-melayu-5-negara, video-malaysia-underrated, video-petronas-tersingkir, video-singapura-kaya, video-universiti-asean. Feedback: video-tidak-tersendat, hapus-master-video, bunyi-transisi-unik, elevenlabs-v4-turbo-daud, tulisan-tidak-menutupi.
