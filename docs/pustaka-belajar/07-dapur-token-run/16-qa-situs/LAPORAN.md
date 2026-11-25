# LAPORAN Sistem S9 QA (read-only, 21 Nov 2026)

Cakupan: 38 URL unik dari memori proyek + katalog.json (katalog tidak punya URL baru; ditambah root generator.edugamelabs.com). Tidak ada perubahan kode, deploy, login, atau isi form.

Hasil ringkas:
- Down/404: 0. Semua 38 URL HTTP 200.
- Lambat >3 s (curl, pemuatan pertama): prompt-video-ms.netlify.app 8.4 s, lpindo 8.0 s, prompt-generator-edukasi-ms.netlify.app 7.8 s, demoprompt 5.9 s. Ulangan 3x: lpindo 4.2/3.3/1.3 s, lpmalay 4.8/2.2/1.5 s, prompt-generator-edukasi-ms 2.3/2.1/1.3 s, prompt-video-ms 1.7/1.4/1.1 s, demoprompt 5.4 s lalu instan, lpvideo 0.9/0.2/0.4 s. Pola: lambat di hit pertama (edge dingin / redirect geo), bukan konsisten.
- Chrome HP (cache dingin) paling lambat: lpvideo 28 s, demoprompt 18 s, gemi-prompt-library 13 s, generator 9 s, aimasterclass 8 s. Perlu cek aset berat/video di HP.
- Error konsol: hanya favicon.ico 404 di preview.edugamelabs.com (HP). 24 situs lain bersih di HP dan desktop.
- Overflow horizontal HP: 0. CTA href kosong: 0.
- Catatan: lpmalay dan lptoolsmy dialihkan ke host ID dari IP pemeriksa; itu geo-redirect, bukan error.

Metode: curl -sL (kode, waktu, ukuran, URL akhir, judul); Chrome headless via puppeteer-core (dari /Users/auzanhasfi/Downloads/gemi-app-experience/_render/node_modules) pada 25 URL penting, 390x844 dan 1280x800, tunggu load + 3 s, tangkap console error, request gagal/4xx, overflow, tautan CTA kosong.

Keterbatasan: waktu muat Chrome HP dijalankan berurutan pada cache dingin dan memuat WebGL software, jadi lebih pesimis dari perangkat nyata. Game (Clawd dkk.) hanya diuji layar awal, tidak dimainkan. 13 URL tidak diambil tangkapan layar.

File: index.html (galeri), QA.md (masalah urut prioritas), urls.json (data), shots/ (50 jpg).
