# Ide skill Claude Code baru (urut dampak)

Skill yang SUDAH ada dan tidak diulang di sini: studio-game-web, video-tipografi-suara, studio-video-edukasi (produk jual), canvas-film-studio, remotion-*, clerk-*, artifact-*.

---

## 1. posting-medsos-repliz
- **Pemicu:** "upload video ke IG/TikTok/Threads/LinkedIn/Pinterest", "jadwalkan posting", "posting ke semua akun", "kompres untuk Threads".
- **Langkah:** cek ukuran dan format per platform; kompres hanya untuk Threads (720x1280, yuv420p, crf 27, maxrate 2500k, AAC 128k, faststart); hos fail lewat presigned URL Zernio bila storage Repliz kosong; tulis caption berbeda per akun; `create_schedule`; cek status unggah; ringkas hasil per akun.
- **File pendukung:** `kompres-threads.sh`, `profil-akun.json` (id akun Repliz dan nama), `template-caption.md`, `cek-status.md`.
- **Dampak:** dipakai hampir setiap video. Banyak kegagalan berulang (storage 402, Threads gagal ukuran).

## 2. automasi-komen-zernio
- **Pemicu:** "buat automation komen", "kata kunci komen kirim link", "balas komen DM", "cek log automation".
- **Langkah:** cek automation aktif; tentukan match exact atau every_comment; matikan typo tolerance; isi maks 5 variasi DM; link di teks; balasan after_dm; uji dari akun lain; cek log sebelum balas manual.
- **File pendukung:** `daftar-kata-kunci.tsv`, `variasi-dm-bm.json`, `cek-log.py`, `uji-dari-akun-lain.md`.
- **Dampak:** dipakai tiap reel baru. Ada 4 automation aktif dan risiko dobel balasan.

## 3. video-narasi-elevenlabs
- **Pemicu:** "narasi BM", "suara Daud", "suara Putra", "ElevenLabs", "tambah jeda napas", "kredit ElevenLabs".
- **Langkah:** kirim naskah sebagai satu paragraf; model `eleven_v4_turbo`; speed sesuai model (v2_5 bisa diatur speed, v4 hampir abaikan speed, padatkan naskah); simpan cap waktu `/with-timestamps`; tambah jeda 0.3 sampai 0.7 s; jana whoosh unik per video; laporkan kredit dan Rupiah.
- **File pendukung:** `tts.py`, `tambah_jeda.py`, `suara_halus.py`, `cek-kredit.py` (GET /v1/usage/character-stats), `daftar-suara.md`.
- **Dampak:** setiap video bersuara. Mencegah suara patah dan biaya membengkak.

## 4. qa-kontak-video
- **Pemicu:** "cek frame", "contact sheet", "sebelum render", "cek tulisan menutupi".
- **Langkah:** buat contact sheet frame 0 (cover judul), frame tiap adegan, cek area kosong untuk takarir, cek frame identik berurutan (target di bawah 1%), cek ejaan, cek ukuran dan bitrate.
- **File pendukung:** `kontak.py`, `cek-identik.py`, `zona-aman.json` per gaya.
- **Dampak:** mencegah penolakan visual berulang (teks menutupi, cover hitam, gerak macet).

## 5. serah-keluaran-downloads
- **Pemicu:** setiap selesai membuat file hasil akhir (MP4, zip, HTML, PNG, folder).
- **Langkah:** nama `{project}-{YYYYMMDD}-{HHMM}-{ringkas}` dengan `date`; `mv` atau salin ke `~/Downloads/` (tidak timpa); `open -R`; beri path lengkap dan link file://; hapus master besar setelah versi kecil lolos cek; catat di daftar.
- **File pendukung:** `serah.sh <file> <kata>`, `daftar-pindah.tsv`.
- **Dampak:** dipakai di setiap tugas. Mencegah file hilang dan timpa.

## 6. deploy-netlify-aman
- **Pemicu:** "deploy", "publikasikan ke Netlify", "link untuk klien", "drag ke netlify".
- **Langkah:** salin ke folder bersih di scratchpad; buang `_sumber`, `.netlify`, `node_modules`, `.kunci`; cek ukuran di bawah 24 MB; buat situs baru dulu bila perlu (`create-new-project`); deploy dari dalam folder itu; hapus zip deploy gagal; uji URL.
- **File pendukung:** `bersihkan-untuk-deploy.sh`, `cek-ukuran.sh`, `README-seret.txt`, `netlify.toml` standar.
- **Dampak:** mencegah kebocoran folder klien dan kegagalan 500 atau 404.

## 7. lp-tiga-bahasa
- **Pemicu:** "LP 3 bahasa", "ID MS EN", "satu situs geo", "redirect negara".
- **Langkah:** struktur `/id/ /ms/ /en/` + aset bersama; `_redirects` berdasarkan negara; `bahasa.js`; uji `curl -sI -H "Cookie: nf_country=MY"`; mata wang per bahasa; cek WA dan checkout.
- **File pendukung:** `_redirects.template`, `bahasa.js`, `uji-geo.sh`, `tr.py` (ekstrak teks dan kamus).
- **Dampak:** empat LP sudah memakai pola ini; mengurangi salah bahasa.

## 8. pwa-sw-versi
- **Pemicu:** "ubah app PWA", "tambah modul/section app", "cache kenapa tidak berubah", "service worker".
- **Langkah:** naikkan VERSI di `sw.js` setiap ubah; unregister service worker dan hapus cache untuk uji lokal; sediakan `?uji=1` untuk Clerk; pastikan flag uji `false` sebelum deploy; jangan sentuh Clerk; sumber jana dipakai, jangan sunting file hasil jana.
- **File pendukung:** `bump-sw.sh`, `reset-cache.js` (untuk konsol), `cek-flag-uji.sh`.
- **Dampak:** banyak app berbasis PWA. Mengurangi kebingungan "kenapa tidak berubah".

## 9. carousel-ig-bina
- **Pemicu:** "carousel IG", "cover feed 4:5", "slaid BM", "sampul reels".
- **Langkah:** tanya carousel atau cover; salin folder terdekat; isi data saja; maks 2 font; ikon SVG; auto-fit; ekspor PNG 4:5; cek kontras dan terpotong grid.
- **File pendukung:** `template-data.js`, `ekspor.mjs`, `srv.py` (POST lokal), `jenis-slaid.md`.
- **Dampak:** carousel adalah konten rutin. Mencegah cover terpotong dan gaya tidak konsisten.

## 10. thread-threads-beza-akun
- **Pemicu:** "thread Threads", "posting ke semua akun Threads", "caption singkat", "pratonton TXT".
- **Langkah:** draf berbeda per akun; singkat (1 sampai 2 ayat bila diminta); thread berantai dengan replies[] delay 0; pratonton TXT hanya untuk thread dan bila diminta; ringkas status per akun.
- **File pendukung:** `draf-per-akun.md`, `cek-duplikat.py` (bandingkan kesamaan teks antar akun).
- **Dampak:** mencegah duplikat yang terlihat spam. Melengkapi skill nomor 1.

---

Catatan: skill 1 dan 10 bisa digabung menjadi satu skill "posting-medsos" bila ingin satu pintu. Urutan di atas memisahkannya supaya jelas.
