# SOP: QA video (contact sheet dan cek frame)

**Kapan dipakai:** sebelum render final semua video (reel, belah dua, peta, explainer). Wajib, bukan opsional.

## Input yang dibutuhkan
- Draf render atau sheet frame dari enjin project.
- Daftar adegan dengan waktu mulai dan selesai.
- Zona aman takarir per gaya (area kosong dari tokoh dan aksi).

## Langkah
1. Render sheet untuk frame 0, frame judul (0 sampai 3 detik), dan titik tengah tiap adegan (`render.py sheet t1,t2 nama`).
2. Cek frame 0: judul sudah terbaca, tidak ada sudut kosong, kata pemancing berwarna aksen.
3. Cek takarir: berada di zona aman, tidak menutupi tokoh, label, atau gameplay.
4. Cek adegan: tidak ada tabrakan teks, tidak ada frame kosong, tidak ada angka yang terpotong.
5. Ukur frame identik berurutan (`cek-identik`). Target di bawah 1 persen. Lebih dari itu berarti gerak macet, perbaiki kamera (linear, bukan ease-in-out per shot).
6. Cek audio: tidak ada jeda keras, tidak ada atempo yang membuat suara patah. Pastikan speed dan jeda sesuai aturan tempo santai.
7. Cek ukuran dan bitrate sesuai target platform.
8. Hanya setelah lolos, render final MP4.

## Aturan wajib
- Jangan render final sebelum contact sheet dicek.
- Setiap revisi cek ulang frame yang berubah.
- Tidak ada whoosh yang sama dengan video sebelumnya.

## Checklist QA
- [ ] Frame 0 memuat judul
- [ ] Judul hilang setelah 2 sampai 3 detik
- [ ] Takarir di zona aman
- [ ] Tidak ada tabrakan teks
- [ ] Frame identik di bawah 1 persen
- [ ] Audio tidak patah
- [ ] Ukuran sesuai target

## Kesalahan yang pernah terjadi
- Judul menetap di atas gameplay. Dilarang.
- Kamera ease-in-out menghentikan gerak di ujung setiap shot (195 frame identik).
- Takarir menutupi tokoh di video selfie bidan. Zona aman dihitung ulang (x < 470, y < 535 pada video itu).
- Pane tersembunyi menjeda requestAnimationFrame. Render dan pratinjau bisa tampak salah bila diuji di tab tersembunyi.
- Render pertama 0.7 fps karena Mac dibebani. Gunakan optimizeForSpeed dan encoder hardware bila perlu.

## Sumber
Memori: feedback-judul-cover-pembuka, feedback-tulisan-tidak-menutupi, feedback-video-tidak-tersendat, feedback-tempo-santai, project-bau-mulut-skinlyfe-mix-motion (talking head, zona aman), project-video-jember-vs-banyuwangi (takarir), project-video-bahasa-melayu-5-negara (render dan sheet).
