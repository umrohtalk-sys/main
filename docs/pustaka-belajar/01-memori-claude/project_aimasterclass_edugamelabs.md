---
name: project-aimasterclass-edugamelabs
description: Dua site AI Masterclass (MS & ID) di edugamelabs.com — sumber folder lokal & site ID Netlify-nya
metadata:
  type: project
---

App "Panduan Claude AI untuk Pemula" tayang di dua domain, dan folder sumbernya TIDAK bernama aimasterclass:

- `aimasterclass.edugamelabs.com` (Bahasa Melayu) → siteId `f4f139ba-db95-4ee0-9a62-f4f985e69c43` (nama Netlify: coruscating-baklava-121962). Sumber: `app-pemula-nocode-ms-*`
- `aimasterclassid.edugamelabs.com` (Bahasa Indonesia) → siteId `79c1248d-ec66-49fe-baf5-9e779bef90da` (nama Netlify: delightful-ganache-65717b). Sumber: `app-pemula-nocode-id-*`

Catatan: `.netlify/state.json` di folder `app-pemula-nocode-*` versi lama menunjuk site LAIN, jadi siteId harus selalu dilewatkan eksplisit saat deploy.

Struktur konten: modul ada di `js/data-modules.js` (`var MODULES = [...]`, tiap modul punya num/title/sub/mins/lessons[]/quiz[]; blok bertipe p, h, list, tip, code + `ic` dari `js/icons.js`). Setiap tambah modul baru, `MODTAG` di `js/ui-strings.js` wajib ditambah satu label.

**Why:** nama folder dan nama site Netlify sama sekali tidak menyerupai nama domainnya, jadi mudah tersesat mencarinya.
**How to apply:** untuk update konten, salin folder ke versi bertanggal baru (lihat [[feedback-versioned-filenames]]), ubah hanya file data/strings — jangan sentuh Clerk (`js/clerk-auth.js`, script Clerk di `index.html`) — lalu deploy pakai [[reference-netlify-deploy-mcp]] dengan siteId di atas.

## Fitur tambahan (5 September 2026)
Sejak folder `app-pemula-nocode-*-20260905-0120-cert-skin-pwa`, app punya:
- **Sertifikat**: `js/certificate.js` — digambar langsung ke `<canvas>` 2000x1414 lalu diekspor JPEG q0.95 (tajam, tidak blur). Syarat: SEMUA pelajaran + SEMUA kuis modul selesai (`certAllDone()`).
- **Skin karakter**: `js/skins.js` — 8 avatar "Kawaii Faces" (lingkaran hitam + bentuk warna + wajah garis). Tersimpan di `S.skin` (localStorage). Gate-nya di `render()`, bukan di `enterApp()`, supaya `js/clerk-auth.js` tidak perlu disentuh.
- **PWA**: `manifest.webmanifest` + `sw.js` + `icons/*.png` + `js/pwa.js` (panduan install Android/iOS). SW: network-first untuk js/css (supaya deploy langsung terlihat), cache-first untuk ikon, dan **tidak menyentuh request cross-origin** supaya Clerk aman.
- **Umpan balik**: `rewardPop()` di `js/app.js` — karakter + confetti setelah tiap pelajaran selesai.

**Ikon PWA dibuat tanpa library**: render SVG lewat headless Chrome ke PNG —
`"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --screenshot=out.png --window-size=512,512 file.html`
(rsvg/inkscape/imagemagick/cairosvg tidak terpasang di mesin ini.)

**Catatan uji**: Browser pane bawaan TIDAK bisa mendaftarkan service worker (selalu "unknown error when fetching the script") dan animasi CSS di elemen yang disuntik bisa membeku di 0%. Keduanya normal — verifikasi PWA harus dilakukan di URL HTTPS Netlify setelah deploy.


## Rombakan UI ke bahasa layout ASAS (5 September 2026)
Folder `app-pemula-nocode-{id,ms}-20260905-1136-asas-redesign` — lapisan paparan ditulis semula
mengikut UI Kit ASAS Komputer. **Belum di-deploy** atas permintaan pengguna.

- Token & primitif kit ada di **`js/uikit.js` (fail BARU)**: `UK.*` (warna), `ukCTA/ukChip/ukGauge/ukSegs/ukRow/ukHero/ukSheetOpen/ukKicker/ukBack/ukStat/ukBar/ukTile/ukSectionH/ukMascotNote`. Semua skrin memanggil primitif ini — ubah rupa di sini, bukan di tiap skrin.
- Fon bertukar ke **Manrope + DM Mono** (dulu Space Grotesk + Space Mono); `ACCENT` diselaraskan ke `#F05323` dan `INK` ke `#191512` supaya sama tepat dengan palet maskot.
- `screenSkin()` + `setChrome()` di `js/app.js` yang menukar warna bingkai telefon, bar status dan latar bar tab ikut skrin (skrin gelap: home & quiz).
- Kunci UI baharu di `js/ui-strings.js`: `tabHome, tabBank, doneCap, quizCap, progressCap, pickOne`.
- **Tidak disentuh** (permintaan pengguna): kolaj kover `scrOnboard`, `favicon.svg`, simbol `#claudeMark`, `js/mascot.js`, `js/data-modules.js` dan semua fail data.
- Skrip transformasi disimpan sebagai artifact pratonton: `pemula-nocode-redesign-preview-20260905.html` (19 skrin x 2 bahasa, HTML sebenar dijana dari kod app dalam sandbox Node).

**Why:** rombakan ini menyentuh HAMPIR SEMUA fail paparan sekaligus — kalau perlu diulang atau diperbaiki, mula dari `js/uikit.js`, bukan dari mencari-cari inline style.
**How to apply:** untuk deploy, guna [[reference-netlify-deploy-mcp]] dengan siteId di atas; folder redesign ini pengganti penuh folder `-cert-skin-pwa`, bukan tambahan.


### Saklar MOD UJI (login dimatikan)
Kunci Clerk `pk_live_...` terikat pada domain `clerk.edugamelabs.com`, jadi `Clerk.load()`
SELALU gagal (HTTP 400 `api_response_error`) di `localhost` / URL preview mana pun —
`AUTH.ready` kekal false dan butang "Mulai" cuma flash "Sedang bersiap…". Ini berlaku pada
folder ASAL juga, bukan kesan rombakan UI.

Penyelesaian di folder `*-asas-redesign`: **satu baris dalam `index.html`**
`var AUTH_DISABLED = true;`
- `true`  → skrip Clerk TIDAK dimuatkan langsung; `AUTH.user` jadi tetamu tempatan; kad Profil papar "MOD UJI".
- `false` → skrip Clerk disuntik semula oleh loader inline di `index.html`; kelakuan asal pulih.

`js/clerk-auth.js` ada helper `authOff()` dan guard dalam `initClerkAuth`, `authSignIn/Up/Out`, `authCardHTML`.
Skrip: `testmode.py on|off <folder...>` (dalam scratchpad sesi).

**Why:** senang tersilap sangka login rosak sebab rombakan UI — sebenarnya sekatan domain Clerk.
**How to apply:** WAJIB tukar balik ke `false` sebelum deploy ke Netlify, kalau tidak semua pengguna masuk tanpa akaun dan XP tidak tersimpan merentas peranti.


### Ikon plump + pas keselesaan membaca (5 September 2026)
`js/plump.js` (fail BARU) — 74 ikon dua-tona gaya "plump flat": 36 diadaptasi daripada set rujukan
pengguna, ~38 lagi dilukis mengikut gaya sama. viewBox 48x48, tiga tona `{L}/{M}/{D}`.

- `plumpSVG(nama,{size,tone})`, `plumpChip(...)`, `plumpFor(teks,fallback)`, `plumpForItem(label,teks,fallback)`.
- **Aturan yang mesti dikekalkan:** ikon PLUMP untuk makna (tajuk h, tip, butir senarai, kepala materi);
  ikon GARIS NIPIS (`js/icons.js`) untuk kawalan (panah, tutup, kembali, bar tab) supaya kekal tajam kecil.
- `PLUMP_RULES` WAJIB pakai sempadan perkataan `\b`. Tanpa itu "be**lak**ang" padan dengan "elak"
  dan blok CONTEXT dapat ikon ✗. `plumpForItem` padan LABEL dahulu, barulah teks.
- Keselesaan baca: teks badan 16px/1.72 warna `UK.read` #332D26 (kontras 12.3:1 atas krim).
- Kad tip guna `UK.tipBg` **#D33F17** (bukan #F05323) dengan teks PUTIH — oren asal cuma 4.43:1,
  yang ini 4.67:1 dan lulus AA. Jangan tukar balik ke #F05323 tanpa menggelapkan teks.

**Skrip binaan kini dalam repo: `_build/`** (`redesign.py` → `testmode.py` → `polish.py`, plus
`uikit.js`, `plump.js`, `mkplump.py`, `export.js`, `checkrefs.js`). Urutan itu WAJIB, dan setiap kali
dijalankan mesti bermula daripada salinan bersih folder `*-cert-skin-pwa` (patch tidak idempoten).
`checkrefs.js` merender SEMUA 804 blok materi + 15 skrin x 3 keadaan — guna sebelum setiap publish.

**Why:** dulu skrip ini disimpan dalam scratchpad sesi dan HILANG antara giliran, terpaksa ditulis semula.
**How to apply:** `node _build/export.js '{"id":"<folder>","ms":"<folder>"}' _build/screens.json` menjana
HTML sebenar setiap skrin untuk artifact pratonton.
