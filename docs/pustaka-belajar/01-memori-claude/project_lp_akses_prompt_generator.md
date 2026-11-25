---
name: project-lp-akses-prompt-generator
description: LP akses pembeli Prompt Generator (terima kasih + demo animasi + link generator.edugamelabs.com + disclaimer Clerk/Google), terkini -20261025-1819-link-di-bawah-netlify, output folder Netlify saja (tanpa GitHub)
metadata:
  type: project
---
Dibuat 25 Okt 2026. Folder `lp-akses-prompt-generator-20261025-1806-animasi-terima-kasih/` (index.html + css/dasar|hero|bagian + js/ikon|demo|halaman). Teks disclaimer diambil dari ~/Downloads/"🔒 AKSES KHUSUS PEMBELI.txt"; gaya + Si Bulat dari [[project-prompt-generator-game]]. Tombol akses aktif setelah centang "tidak akan saya sebarkan". `LINK_AKSES` di js/halaman.js. noindex. Localhost: launch.json "lp-akses-prompt-generator" port 8960.

Repo: user minta repo GitHub BARU terpisah dari prompt-generator (nama usulan `lp-akses-prompt-generator`, private). Commit lokal 651b3a8 sudah ada; repo belum dibuat karena gh tidak terpasang, Chrome extension tak tersambung, pane belum login GitHub.

**How to apply:** setelah repo ada: `git remote add origin git@github.com:auzanhasfi/lp-akses-prompt-generator.git && git push -u origin main` (kalau DNS menolak, pakai trik HostName IP di [[project-prompt-generator-game]]). Pane browser membekukan animasi/rAF: cek tampilan pakai Chrome headless.

## Revisi 25 Okt 2026 18:19 — TERKINI
Folder `lp-akses-prompt-generator-20261025-1819-link-di-bawah-netlify/`. User: output folder Netlify saja (GitHub dibatalkan); link akses dipindah ke PALING BAWAH supaya pembeli lihat fitur dulu; URL generator.edugamelabs.com TIDAK ditampilkan di mana pun (href baru dipasang setelah centang). Urutan: hero → fitur → galeri → aturan → cara masuk → akses. Pil melayang "Gulir ke bawah untuk link akses" hilang saat bagian akses terlihat. launch.json port 8960 kini menunjuk folder ini.

## Deploy 28 Okt 2026
User minta folder versi -1806-animasi-terima-kasih (BUKAN -1819) yang di-push. LIVE di https://akses-prompt-generator.netlify.app (siteId 23554a82-4a99-4813-8134-06e5f3965ce3). Deploy dari salinan bersih di scratchpad tanpa .git.
