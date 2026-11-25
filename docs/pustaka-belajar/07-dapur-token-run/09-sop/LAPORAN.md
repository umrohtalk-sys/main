# Laporan: pustaka SOP EduGame Labs

Dibuat 21 Nov 2026 (20261121-1407). Read-only terhadap memori; semua tulisan hanya di folder ini.

## Isi folder
- sop-video-reel.md, sop-video-belah-dua.md, sop-video-peta.md
- sop-landing-page-3-bahasa.md
- sop-game-web.md, sop-app-pwa.md, sop-carousel-ig.md
- sop-thread-threads.md, sop-deploy-netlify.md, sop-automation-komen-zernio.md
- sop-qa-kontak-video.md (tambahan: QA video dipakai semua SOP video)
- ide-skill.md (10 skill baru, urut dampak)
- aturan-ringkas.md (40 aturan dari memori)

## Sumber yang dibaca
- MEMORY.md (203 baris; baris 201 sampai 203 dipotong di pembacaan awal, dicek manual)
- 20 feedback_*.md dan 10 reference_*.md dibaca penuh
- project_*.md (277 file): hanya baris "How to apply", "Why", dan catatan terkait lewat grep, plus beberapa file kunci dibaca utuh (zernio, lp 3 bahasa, video belah dua, peta, damai murid, bahasa output, skill studio video, carousel)
- CLAUDE.md folder app matematika (sudah ada di konteks)
- references/opus-video-repos/README.md (bagian atas)

## Temuan penting
1. **Deploy dari folder induk berbahaya.** Memori mencatat folder `app matematika` berisi banyak project klien. Setiap SOP deploy mengulang larangan ini.
2. **Pembagian repliz vs zernio.** Repliz untuk posting; Zernio untuk automation komen dan titip file. SOP memisahkannya; jangan campur.
3. **Tempo narasi vs model.** Tempo santai memakai `eleven_turbo_v2_5` dengan speed 0.9 dan jeda. Daud `eleven_v4_turbo` hampir mengabaikan `speed`, jadi naskahnya harus dipadatkan. SOP menyebut keduanya; pilih sesuai model yang dipakai project.
4. **Aturan Downloads vs reveal.** Aturan `mv` ke Downloads dan `open -R` konsisten, tidak ada konflik.
5. **Ukuran file.** Netlify: di bawah 24 MB (batas praktis). Video: sekitar 25 MB untuk permintaan user; Threads: sekitar 7 MB untuk 90 detik (720p).
6. **Dua tempat aturan Netlify.** feedback_netlify_ready_output menyebut seret ke app.netlify.com/drop; reference_netlify_deploy_mcp memakai npx dari MCP. Keduanya dicatat di SOP deploy.

## Keterbatasan
- Tidak semua project memuat "How to apply" (211 dari 277 file); project yang tidak memuatnya hanya dibaca sebagian lewat grep.
- Angka kredit ElevenLabs dan biaya Rupiah dicatat sebagai rujukan lama, bukan tarif terkini.
- Ide skill belum diuji; nama file pendukung adalah usulan, bukan skrip yang sudah ada kecuali yang disebut di memori (mis. `main-uji.mjs`, `tambah_jeda.py`, `cap.mjs`, `_redirects` pola).
- Beberapa SOP bergantung pada skill dan skrip yang berada di folder project lama; jalur tepatnya perlu dicek saat dipakai.

## Lokasi
/Users/auzanhasfi/Downloads/dapur-token-jalan-20261121-1403/09-sop/
