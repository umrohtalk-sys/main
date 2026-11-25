# LAPORAN Sistem S8 Studio Jembatan Konten (21 Nov 2026)

Untuk @auzan_hasfi. Semua fail ditulis di folder ini sahaja. Tiada apa-apa disiarkan, dijadualkan atau dihantar melalui Zernio atau Repliz.

## Fail

- `STRUKTUR.md`: formula 70 s (cover 0–3 s, isi topik 3–55 s, jembatan 55–68 s, CTA 68–70 s), 5 pola transisi, peraturan kandungan, jadual CTA, senarai b-roll untuk dirakam.
- `templat/01` hingga `templat/10`: naskah BM penuh, teks layar per babak, shot list demo, CTA, caption IG dengan CTA di baris pertama, thread pendamping (4 post), sumber.
- `bank-konten-items.json`: 20 item (10 reel IG + 10 thread Threads), skema tepat seperti diminta. Disahkan dengan skrip: semua kunci betul, CTA hanya GAME/VIDEO/TOOLS/PROMPT, semua post thread 53 hingga 187 aksara (had 450).
- `ujian-ab.md`: ujian A/B minggu depan, metrik komen minat per 1.000 tayangan, cara kumpul data penuh (bukan sampel 201), saiz sampel dan syarat keputusan.

## Pemetaan topik ke data rapor

Setiap templat bermula dari format yang ada tayangan atau komen minat. Pemilihan topik:
- Perbandingan negara (tayangan terbesar, komen/1k tertinggi): 02, 03, 08.
- Karier cikgu (median tertinggi): 01, 05, 09.
- Curhat cikgu (keluhan 31% sampel): 04, 06, 07, 10.
- CTA: PROMPT 01, 05, 09. VIDEO 02, 07, 10. TOOLS 03, 06. GAME 04, 08.

## Perkara perlu dibuat sebelum tayang

1. **Pemetaan GAME tidak sepadan.** Brief automation menyebut GAME ke demo Prompt Generator. Naskah 04 dan 08 pula menunjukkan game Clawd (Dunia Clawd mod soal guru). Pilihan: (a) sahkan pautan GAME ke gameplay Dunia Clawd, atau (b) tukar CTA 04 dan 08 kepada PROMPT dan kemas kini JSON. Belum dibuat kerana ini keputusan anda.
2. **TOOLS dan VIDEO kedua-duanya ke LP Prompt Video** mengikut brief. Ini bermakna kata kunci TOOLS dan VIDEO tidak boleh dibezakan dari segi landing. Jika mahu landing TOOLS berbeza (contoh lptoolsmy), beritahu saya.
3. **Angka wajib disahkan:**
   - 02: purata guru Thailand (Life Indexed 2025), DG41 RM2,700–3,200 (skala 2026 belum disahkan), kadar tukaran THB belum dicarian.
   - 08: angka masa mengajar Finland belum ada dalam naskah. Babak 2 hanya kerangka. Sahkan dari `03-video-format-juara/negara/08-finland.md` sebelum rakam.
   - 01: syarat tadika dari iklan Maukerja. Syarat rasmi KPM untuk tadika belum dijumpai.
   - 03: angka Korea dirujuk ke fail 05, tidak dimasukkan dalam skrip.
   - 05: "ijazah sarjana" ialah tanda tempat. Sahkan syarat IPG.
   - 09: syarat pengetua/guru besar dari fail 13, sahkan dengan KPM.
4. **Shot list demo** merujuk pautan dalam memori (generator.edugamelabs.com, generator.edugamelabs.com/prompt-video, lpvideo.edugamelabs.com, galeri-prompt-video.netlify.app). Pastikan semua masih hidup sebelum rakam. Dunia Clawd dan Modul Soal Guru perlu rakaman gameplay sebenar.
5. **Hook 04 dan 10 sengaja tanpa angka atau nama negara.** Ini untuk mengelak bait politik dan tuduhan dari rapor.

## Rujukan

- Pada 03-video-format-juara: baca dua fail sahaja sebagai contoh gaya (`negara/01-thailand.md`, `profesi/01-guru-tadika.md`). Untuk senarai judul, hanya baris tajuk (heading) semua fail dibaca. Tiada kandungan lain dipetik.
- Rapor S1 dibaca penuh (`01-s1-analis-konten/RAPOR.md`), juga `komentar-kelompok.json`.
- Rapor tidak mengandungi tayangan per reel untuk Cikgu Aina. Baseline minat produk belum boleh dikira; ambil dari data S1 sebelum mula ujian.

## Had

- Komen dalam rapor ialah sampel 201 dari 10 reel, terbaru dulu. Angka komen minat hanya anggaran. Ujian A/B perlu paginate penuh.
- CTA caption dan akhir video tidak ada rekod pembanding dalam rapor selain Cikgu Aina dan pensyarah. Hipotesis jembatan belum diuji.
- Akaun ini cuma satu. Satu reel viral boleh mengubah bacaan. Gunakan median.
- Thread Threads belum diposting. Akaun Threads perlu Premium/Gold untuk posting melalui Repliz (rujuk memori).

## Langkah seterusnya

1. Putuskan pemetaan GAME (perkara 1 di atas).
2. Sahkan angka dan syarat yang ditanda "sahkan".
3. Rakam b-roll (Prompt Generator, Galeri Prompt Video, LP Prompt Video, Dunia Clawd).
4. Minggu depan jalankan pasangan A/B pertama mengikut `ujian-ab.md`.
