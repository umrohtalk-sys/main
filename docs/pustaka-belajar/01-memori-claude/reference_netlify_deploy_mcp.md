---
name: reference-netlify-deploy-mcp
description: Cara deploy folder statis ke Netlify di mesin ini (tidak ada netlify CLI / token lokal)
metadata:
  type: reference
---

Mesin ini tidak punya `netlify` CLI maupun `NETLIFY_AUTH_TOKEN`. Deploy lewat MCP Netlify: panggil operasi `deploy-site` dengan siteId — tool itu tidak men-deploy sendiri, tapi mengembalikan perintah `npx -y @netlify/mcp@latest --site-id <id> --proxy-path <url-bertoken>` yang harus dijalankan lewat Bash **dari dalam folder yang mau di-deploy** (proxy-path berisi token sekali pakai, jadi ambil yang baru tiap deploy).

**Why:** perintah itu mengunggah working directory saat itu. Folder `~/Documents/app matematika` berisi puluhan project klien lain — kalau dijalankan dari sana, semuanya ikut publik.
**How to apply:** pindahkan sesi ke folder app (change_directory) atau `cd` ke folder app di perintah Bash yang sama sebelum menjalankan npx. Lihat [[feedback-netlify-ready-output]].

**Site baru:** `deploy-site` tanpa siteId mengembalikan perintah dengan `--site-id undefined`, dan itu gagal `404 Failed to deploy site`. Untuk app baru: panggil dulu `netlify-project-services-updater` operasi `create-new-project` dengan `name` (huruf kecil + tanda hubung) — ia mengembalikan siteId — baru panggil `deploy-site` dengan siteId itu.

**Batas ukuran:** upload lewat proxy MCP gagal `500` kalau zip folder ±29 MB; 24 MB berhasil (17 Okt 2026). Cek dulu `zip -qr /tmp/x.zip . && ls -l`; kalau >24 MB, kompres video (crf 31–32), hapus aset yang tidak dipakai (mis. screenshot README).

**Env var:** `manage-env-vars` dengan `envVarIsSecret:true` membalas "upserted" tapi TIDAK tersimpan (getAllEnvVars kosong) — simpan non-secret (context all, scope all), cek dengan getAllEnvVars, lalu deploy ulang supaya function membaca nilainya. Function di netlify/functions ikut dibangun oleh deploy MCP (ia menjalankan build). Upload gagal "fetch failed" bila internet lambat (±120 KB/s); tunggu koneksi cepat.
- 19 Okt 2026: folder 22 MB tiba-tiba gagal 500 berulang; berhasil setelah deploy dari salinan bersih tanpa `_sumber/` & `.netlify/` (rsync ke scratchpad lalu jalankan npx di sana).
- Deploy yang gagal meninggalkan `deploy-<angka>-<uuid>.zip` di folder yang di-deploy; hapus sebelum mencoba lagi (kalau tidak, ikut ter-zip dan ukurannya dobel).
