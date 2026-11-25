# SOP: Deploy ke Netlify (folder statik)

**Kapan dipakai:** setiap deliverable web (app, game, LP, PWA, carousel HTML) yang perlu dipublikasikan.

## Input yang dibutuhkan
- Folder statik yang sudah siap (tanpa build).
- Nama situs Netlify (atau izin membuat situs baru).
- Persetujuan user untuk deploy. Deploy hanya bila diminta.

## Langkah
1. Pastikan folder adalah folder bersih: `index.html`, `css/`, `js/`, `img/`, `netlify.toml`, `README.txt`. Tidak ada `_sumber/`, `.netlify/`, `node_modules/`, `.kunci/`, atau video master.
2. `netlify.toml` memuat `[build] publish = "."` dan header cache.
3. README memuat langkah seret ke app.netlify.com/drop: buka, seret folder, dapatkan link.
4. Cek ukuran: `zip -qr /tmp/x.zip . && ls -l` (gunakan scratchpad untuk file sementara). Jika lebih dari 24 MB, kompres video (crf 31 sampai 32), buang aset yang tidak dipakai (mis. screenshot README).
5. Untuk situs baru: buat proyek dulu lewat `netlify-project-services-updater` operasi `create-new-project` dengan `name` (huruf kecil, tanda hubung). Catat siteId.
6. Deploy lewat MCP: `deploy-site` dengan siteId, lalu jalankan perintah `npx -y @netlify/mcp@latest --site-id <id> --proxy-path <url>` dari DALAM folder yang akan dideploy. Proxy-path memakai token sekali pakai; ambil yang baru setiap deploy.
7. Hapus file `deploy-<angka>-<uuid>.zip` yang tertinggal dari deploy gagal sebelum mencoba lagi.
8. Uji URL: buka, cek ketiga bahasa bila ada, cek geo redirect, cek HP.
9. Laporkan URL dan siteId ke user.

## Aturan wajib
- JANGAN menjalankan npx dari folder induk `app matematika`. Folder itu berisi banyak project klien. Jika dijalankan dari sana, semuanya ikut publik. Gunakan salinan bersih di scratchpad atau pindah folder dulu.
- Kunci dan token tidak masuk ke folder deploy.
- Env var rahasia: `manage-env-vars` dengan `envVarIsSecret:true` membalas "upserted" tetapi tidak tersimpan. Simpan non-secret (context all, scope all), cek dengan getAllEnvVars, lalu deploy ulang.
- Function di `netlify/functions` dibangun oleh deploy MCP.
- Flag uji (`uji=1`, `false` untuk login) dikembalikan sebelum deploy produksi.
- Revisi = folder bertimestamp baru yang di-deploy ke siteId yang sama bila user minta.

## Checklist QA
- [ ] Folder bersih, tanpa `_sumber/`, `.netlify/`, `node_modules/`
- [ ] Ukuran di bawah 24 MB
- [ ] Deploy dijalankan dari dalam folder app, bukan folder induk
- [ ] URL bisa diakses, halaman utama tidak 404
- [ ] Tidak ada flag uji aktif
- [ ] Deploy gagal sudah dibersihkan dari zip sisa

## Kesalahan yang pernah terjadi
- Deploy dari folder induk berisi banyak project klien. Risiko kebocoran besar. Dilarang.
- Deploy tanpa siteId mengembalikan `--site-id undefined` dan gagal 404.
- Upload 29 MB gagal 500. 24 MB berhasil (17 Okt 2026). Folder 22 MB kemudian juga gagal 500; berhasil setelah deploy dari salinan bersih.
- Upload gagal "fetch failed" saat internet lambat (sekitar 120 KB/s). Tunggu koneksi.
- Env var secret tidak tersimpan (getAllEnvVars kosong).
- Flag `false` untuk login lupa dikembalikan. Semua pengguna masuk tanpa akun.
- Zip sisa deploy gagal ikut ter-zip dan membuat ukuran dobel.
- Netlify drag-and-drop dan MCP sama-sama dipakai. Untuk user yang tidak paham teknik, selalu sediakan langkah drag-and-drop di README.

## Sumber
Memori: reference-netlify-deploy-mcp, feedback-netlify-ready-output, project-lp-3bahasa-satu-situs, project-lp-akses-prompt-generator, project-prompt-generator-demo.
