# QA situs live EduGame Labs (21 Nov 2026, read-only)

38 URL unik dicek (curl) dan 25 di antaranya dibuka di Chrome headless (HP 390x844 + desktop 1280x800). Tanpa login, tanpa isi form.

## P1. Down / 404

Tidak ada. Semua 38 URL menjawab HTTP 200.

## P2. Lambat (>3 s)

Waktu curl, satu kali dan diulang 3x untuk yang lambat. Pemuatan pertama sering lambat (cold edge / redirect geo), pengulangan jauh lebih cepat.

- https://prompt-video-ms.netlify.app : 8.4 s (curl pertama; ulangan lihat LAPORAN.md)
- https://lpindo.edugamelabs.com : 8.0 s (curl pertama; ulangan lihat LAPORAN.md)
- https://prompt-generator-edukasi-ms.netlify.app : 7.8 s (curl pertama; ulangan lihat LAPORAN.md)
- https://demoprompt.edugamelabs.com : 5.9 s (curl pertama; ulangan lihat LAPORAN.md)

Waktu event load di Chrome (HP, cache dingin, termasuk aset berat):

- https://lpvideo.edugamelabs.com : 28.0 s
- https://demoprompt.edugamelabs.com : 18.4 s
- https://gemi-prompt-library.netlify.app : 12.8 s
- https://generator.edugamelabs.com : 9.0 s
- https://aimasterclass.edugamelabs.com : 8.3 s
- https://generator.edugamelabs.com/prompt-video/ : 7.1 s
- https://english-kita.netlify.app : 6.1 s
- https://lpindo.edugamelabs.com : 5.0 s
- https://mentoring-claude-jember.netlify.app : 4.7 s
- https://gemiapp.edugamelabs.com : 4.5 s
- https://lptoolsid.edugamelabs.com : 4.1 s
- https://galeri-prompt-video.netlify.app : 3.5 s
- https://gemi-akses-ahli.netlify.app : 3.3 s
- https://preview.edugamelabs.com/kertas-tinta/games/liga-stik-pro/ : 3.1 s

Catatan: lpvideo.edugamelabs.com 28 s di Chrome HP padahal curl HTML hanya 1,2 s dan ulangan 0,2-0,9 s; kemungkinan video/aset besar tertahan sebelum event load. Perlu dicek lazy-load video di HP.

## P3. Error konsol / permintaan gagal

- https://preview.edugamelabs.com (hp): ['Failed to load resource: the server responded with a status of 404 ()'] ['404 https://preview.edugamelabs.com/favicon.ico']

Di luar itu, 24 dari 25 situs bersih: nol error konsol, nol permintaan gagal di HP dan desktop. Yang di atas hanya favicon 404 (kosmetik).

## P4. Layout pecah di HP

Tidak ada overflow horizontal di 25 situs pada lebar 390 px (scrollWidth <= lebar viewport). Pemeriksaan visual penuh tetap lewat galeri index.html; tes ini otomatis.

## P5. Tautan CTA kosong

Tidak ditemukan tautan CTA dengan href kosong, "#" atau javascript: pada 25 situs (heuristik: tautan bertuliskan beli/daftar/WA/akses/mulai dll). Tombol berbasis JavaScript tidak diuji klik.

## Catatan lain

- Redirect geo/alias: lpmalay.edugamelabs.com -> lpindo.edugamelabs.com/id/; lptoolsmy.edugamelabs.com -> lptoolsid.edugamelabs.com/id/; prompt-generator-edukasi-ms.netlify.app -> lptoolsid.edugamelabs.com/id/. lpmalay dan lptoolsmy ke host ID kemungkinan karena geo IP pemeriksa (Indonesia); bukan error.
- generator.edugamelabs.com/prompt-video/ dan root generator mengembalikan ukuran HTML sama (4807 B) tetapi judul berbeda: kemungkinan HTML disajikan sama lalu judul diubah JS. Cek bila ingin SEO terpisah.
- Di curl, demoprompt dialihkan ke /id?geo=1 (5,9 s pertama).
- 13 URL lain tidak di-screenshot (hanya status/judul): kido, cpns-kemenag, gudang-konten, prompt-*-netlify, riset-*, ui-kit, galeri/mentoring-konten-bidan alias, dll.
