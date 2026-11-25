# SOP: Automation komen Instagram (Zernio) untuk CTA kata kunci

**Kapan dipakai:** setiap reel atau post IG yang punya CTA "Komen KATA" dan ingin kirim link lewat DM otomatis. Tiap kata kunci punya automation sendiri.

## Input yang dibutuhkan
- Post atau reel target (ID post IG).
- Kata kunci dan variasinya (mis. PROMPT, GAME, NAK, VIDEO, TOOLS).
- Tujuan link untuk tiap kata kunci (mis. demoprompt, lptools, lpvideo).
- Mode ulang: `exact` (kata tepat) atau `every_comment` (setiap komen dapat link).
- Teks DM: 1 teks utama + maksimum 5 variasi (API menolak lebih dari 5).

## Langkah
1. Cek automation yang sudah aktif di Zernio (`posts_list`, `accounts_get`, dan log). Jangan buat duplikat kata kunci.
2. Tentukan `match`: kata yang umum (mis. "video", "nak") pakai `exact` agar tidak kena komen lain ("nak tanya").
3. Typo tolerance DIMATIKAN. Kata "same" pernah ikut kena dari kata "game".
4. Isi teks DM dalam BM (atau bahasa audiens). Link di TEKS, bukan tombol (tombol bisa ditolak untuk non-follower).
5. Atur balasan publik `cek DM` (`after_dm`) supaya audiens tahu DM sudah dikirim.
6. Pilih audiens `any` bila user mau semua orang dapat link. Follow gate dimatikan bila user meminta.
7. Aktifkan `sekali per orang` (repeat_policy once) atau `every_comment` bila user minta setiap komen dapat link.
8. Uji dari akun lain (akun sendiri tidak memicu automation).
9. Pantau log: jumlah DM terkirim, gagal, dan komen lama yang belum dibalas.
10. Untuk komen lama: balas manual dengan private reply 1 kali per komen (batas 7 hari). Cek log dulu supaya tidak dobel.

## Aturan wajib
- Jangan menyunting automation yang sudah berjalan tanpa persetujuan user.
- Kata kunci yang ditulis di CTA video harus sama persis dengan automation.
- Setiap link yang dikirim harus sudah LIVE dan diuji.
- Tidak mengirim pesan di luar kata kunci tanpa izin.
- Komunikasi dan teks DM mengikuti bahasa audiens (BM, lalu ID bila reel ID).
- Tidak ada emoji berlebihan dalam balasan.

## Checklist QA
- [ ] Kata kunci dan variasi ejaan dicakup (prompt/promp/promt/prompts; game/games)
- [ ] `exact` untuk kata umum
- [ ] Tidak ada duplikat automation untuk kata yang sama
- [ ] Link di DM benar dan LIVE
- [ ] Uji dari akun lain berhasil dalam beberapa detik
- [ ] Log dicek setiap minggu; komen lama tidak dibalas dua kali

## Kesalahan yang pernah terjadi
- Typo tolerance membuat komen "same" memicu DM. Dimatikan 7 Nov 2026.
- Kata "video" terlalu umum sehingga semua komen kena. Dibuat exact.
- Automation VIDEO dipaksa every_comment. User minta setiap komen dapat link, termasuk orang yang sama di reel lain (12 Nov).
- Link VIDEO berubah dari promptvideo ke lpvideo (15 Nov). Pastikan link di semua automation diperbarui.
- Komen dari akun @auzan_hasfi sendiri tidak pernah memicu automation. Tes harus dari akun lain.
- Balasan manual ganda terjadi karena lupa cek log. Selalu cek log sebelum membalas manual.
- Batas 5 variasi teks: API menolak lebih dari 5.
- Token akses habis sekitar 5 Jan 2027. Catat tanggal dan perbarui sebelum habis.
- Repliz hanya untuk posting; Zernio untuk automation komen dan titip file. Jangan campur fungsi keduanya.

## Sumber
Memori: project-zernio-ig-automation, reference-repliz-mcp, project-kontak-wa-geo. Feedback: posting-tanpa-txt.
