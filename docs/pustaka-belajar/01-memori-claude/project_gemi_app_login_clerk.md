---
name: project-gemi-app-login-clerk
description: App gemi 38 modul + login Clerk (folder gemi-app-20261028-1845-login-clerk), LIVE gemiapp.edugamelabs.com, siteId d8f49567
metadata:
  type: project
---
28 Okt 2026: salinan gemi-app-20260925-0438-modul-video-opus + `js/clerk-auth.js` (instance clerk.edugamelabs.com sama dgn Prompt Generator/AIMC, pk_live). Skrin kunci BM/ID di dalam .phone; selepas masuk profil Clerk disalin ke S.akaun lalu lanjutMasuk(); "Log keluar" juga Clerk.signOut(). Log masuk mock lama di skrin welcome masih ada dalam kod tapi dilangkau.
LIVE https://gemiapp.edugamelabs.com (Netlify site legendary-snickerdoodle-d4c800, id d8f49567-d862-41e7-b07a-acbd9a5959a2). Deploy dari salinan bersih (tanpa _build/_sumber/_analisa) di scratchpad. sw.js VERSI gemi-v11-login-clerk-20261028-1845.
**How to apply:** uji di localhost guna `?uji=1` (Clerk tolak localhost). Naikkan VERSI sw.js setiap ubah. Halaman pembeli: [[project-gemi-halaman-akses]].

## 28 Okt 2026 19:30 — perbaikan cache (TERKINI, LIVE)
Folder `gemi-app-20261028-1930-perbaiki-cache/`. Punca "error + banyak coding" selepas log masuk: SW lama (v3, cache-first JS/CSS) menyaji app.js/styles.css lama bercampur fail baharu → ralat render + bait PNG tampil sebagai teks. Baiki: semua `css/js` dalam index.html ber-`?v=20261028-1930` (naikkan bila ubah), sw.js kini network-first untuk HTML/JS/CSS (cache-first hanya gambar), pwa.js muat semula sekali bila SW baharu ambil alih. Diuji: v3→v12 dan v11→v12 (telefon), live tanpa ralat.
