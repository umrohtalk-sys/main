---
name: project-ui-kit-pemula-nocode
description: "UI kit dwibahasa (MS/ID) untuk app Panduan Claude AI untuk Pemula, live di ui-kit-pemula-nocode.netlify.app"
metadata: 
  node_type: memory
  type: project
  originSessionId: 84f7a1f2-e6e7-4e43-aa7c-1fb1435d01cd
  modified: 2026-09-04T15:32:18.464Z
---

Folder `app matematika` berisi dua build app "Panduan Claude AI untuk Pemula" yang identik strukturnya, beda bahasa saja: `app-pemula-nocode-ms-*` (Bahasa Melayu) dan `app-pemula-nocode-id-*` (Bahasa Indonesia, plus `clerk-auth.js` untuk login). Sejak 2026-09-04 isinya 9 modul (menambah Modul 09 "PWA" — lihat paragraf di bawah) + 3 koleksi panduan.

Kedua app ini live sebagai custom domain Netlify: ID di https://aimasterclassid.edugamelabs.com (site id `79c1248d-ec66-49fe-baf5-9e779bef90da`, nama project `delightful-ganache-65717b`), MS di https://aimasterclass.edugamelabs.com (site id `f4f139ba-db95-4ee0-9a62-f4f985e69c43`, nama project `coruscating-baklava-121962`). Deploy pakai alur di [[reference-netlify-deploy-mcp]] — panggil `deploy-site` dengan siteId di atas (site sudah ada, jangan bikin baru), lalu jalankan perintah `npx @netlify/mcp` dari dalam folder app masing-masing.

**Modul 09 (PWA):** 2026-09-04 ditambahkan modul baru "Aplikasi Ini Sebenarnya Apa? (PWA)" di kedua app (10 pelajaran + 8 soal kuis), menjelaskan bahwa app-app di kelas ini pada akhirnya adalah Progressive Web App — diringkas dari dua file referensi user (`Pengenalan_PWA_untuk_Guru_ID.txt` / `_Cikgu_MS.txt`) dan ditulis ulang jadi format blok `p/h/tip/list/code` yang sudah dipakai modul-modul lain di `js/data-modules.js`, supaya visual hierarchy-nya konsisten otomatis (kartu tip berwarna, list dengan icon chip, code block dengan tombol salin). Tambahkan juga `MODTAG[8]='Teknologi'` di `js/ui-strings.js` masing-masing app (dan `TINTS` MS ditambah satu entri karena sebelumnya cuma 8). Hati-hati: `iconFor()` di `js/icons.js` mencocokkan kata kunci di label+teks list/tip untuk pilih icon otomatis — kata seperti "salah" bisa ke-match ke aturan "close" (X) walau konteksnya positif, jadi kalau icon-nya terasa janggal, tambahkan `"ic":"nama-icon"` eksplisit di block-nya.

**Login Clerk ditambahkan ke app MS + bug produksi di app ID diperbaiki (2026-09-04):** App MS awalnya tidak pernah punya `js/clerk-auth.js` maupun script tag Clerk di `index.html` — jadi disalin dari app ID (kunci publishable sama, `pk_live_Y2xlcmsuZWR1Z2FtZWxhYnMuY29tJA`, domain `clerk.edugamelabs.com`), teks `AUTHSTR` diterjemahkan ke Melayu, dan hunk auth-gating di `js/app.js` (variabel `locked`, banner kunci di onboarding, `authCardHTML()` di Profil, redirect paksa ke onboard kalau belum login, handler `authin/authup/authout`) disalin persis dari app ID via diff manual — HANYA hunk auth yang disalin, teks berbahasa lain di app.js (mis. "kuis dicuba" vs "kuis dicoba") sengaja TIDAK disentuh karena itu variasi bahasa yang independen.

Saat proses ini ketahuan app ID sendiri sebenarnya SUDAH error total kalau tombol "Masuk"/"Daftar akun" ditekan: `Clerk.openSignIn()` selalu lempar `"Clerk was not loaded with Ui components"`. Root cause (ditemukan dengan curl+grep isi bundle `clerk.browser.js` yang sebenarnya): sejak `@clerk/clerk-js@6`, komponen UI (SignIn/SignUp) dipisah jadi package terpisah (`@clerk/ui`) yang di-load lewat script tag kedua dan set `window.__internal_ClerkUICtor` — tapi ctor itu HARUS dioper ke pemanggilan **pertama** `Clerk.load({clerkUICtor: window.__internal_ClerkUICtor})`; kalau dipanggil `Clerk.load()` tanpa argumen (yang terjadi di `js/clerk-auth.js` versi lama), field privat internal Clerk yang menyimpan komponen UI (`#eR`) tidak pernah ke-set, dan panggilan `.load()` berikutnya dengan argumen pun percuma karena method itu di-guard `if(!this.loaded)`. Fix-nya satu baris di `boot()` kedua app: `Clerk.load({ clerkUICtor: window.__internal_ClerkUICtor })`. Sudah diverifikasi live di kedua domain (modal Sign In benar-benar muncul).

**Cara verifikasi Clerk di app ini:** JANGAN test di `localhost`/`file://` — publishable key `pk_live_...` ini hanya mengizinkan origin yang terdaftar (custom domain-nya), jadi dari localhost `Clerk.load()` sendiri gagal dengan `api_response_error` (400), beda sama sekali dari bug UI-components di atas. Test harus langsung di domain production (`aimasterclassid.edugamelabs.com` / `aimasterclass.edugamelabs.com`) via `window.Clerk.openSignIn({})` di javascript_tool lalu screenshot.

UI kit-nya dibuat 2026-09-03 sebagai satu halaman statik terpisah (`ui-kit-pemula-nocode-bilingual-20260903-1420/`), live di https://ui-kit-pemula-nocode.netlify.app (site id 9326ce0e-e0d4-41bc-a3e2-2adfc10ecfd2). Satu link, tombol switch MS/ID di topbar mengganti seluruh halaman.

**Why:** User minta UI kit lengkap (bukan skeleton) dengan penjelasan detail tiap screen, gaya mengikuti referensi `BioLab UI Kit.dc.html` — kanvas dokumentasi lebar, section bernomor "01 — Foundations", kartu putih border tipis, caption mono.

**How to apply:** Kit-nya me-render 12 screen live di dalam bingkai telepon 390×844 memakai `js/icons.js` dan `js/mascot.js` yang disalin apa adanya dari app, jadi kalau app berubah salin ulang dua file itu. Teks dwibahasa disimpan sebagai objek `{ms, id}` dan di-resolve lewat `t()`. Lihat juga [[feedback-versioned-filenames]] dan [[feedback-netlify-ready-output]].
