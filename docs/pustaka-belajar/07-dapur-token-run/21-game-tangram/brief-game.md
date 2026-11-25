# Brief game (satu halaman) — Gemi Tangram

- **Matlamat belajar:** murid melihat bahawa keseluruhan bentuk boleh dipecahkan kepada pecahan luas (1/4, 1/8, 1/16), mengenal segi tiga/segi empat sama/segi empat selari, dan melatih putaran 45° serta pantulan (balik) kepingan.
- **Pemain:** murid SD Tahun 3–6 / SMP awal (MY + ID).
- **Bahasa:** BM dan ID, butang tukar di menu dan bar atas setiap skrin (disimpan dalam localStorage).
- **Gelung main:** pilih siluet → seret 7 kepingan ke siluet → ketik kepingan terpilih / butang Putar (45°) / Balik → kepingan melekat bila bentuk + putaran + kedudukan betul (klik bunyi, pecahan muncul di gelembung Gemi) → bila lengkap, setiap kepingan bercahaya dengan label "1/8 daripada keseluruhan" → kad hasil (bintang + jadual pecahan + jumlah = 1).
- **Menang / kalah:** tiada kalah (bebas tekanan); bintang 1–3 ikut masa (par setiap siluet) dan petunjuk: bintang = 3 − (lewat par) − (lewat 2×par) − min(2, petunjuk), minimum 1.
- **Tahap:** 13 siluet bertema Malaysia/Indonesia (ketupat, rumah, perahu, wau/layang-layang, kucing, rumah gadang, gunung, rumah panggung, ayam, ikan, menara, burung, pokok kelapa). Tahap awal: sebahagian kepingan sudah terpasang, garis dalam siluet kelihatan, kepingan bermula dalam putaran betul. Tahap akhir: tiada kepingan awal, tiada garis dalam, kepingan diputar/dibalikkan rawak.
- **Petunjuk:** kelipkan slot dan kepingan sepadan (menolak bintang, petunjuk berulang pada slot sama tidak ditolak lagi).
- **Tahap ketelitian:** `standard` (+ enjin padanan diuji ketat: `uji/logik.mjs`).
- **Gaya:** latar putih krim, kepingan warna lembut, ikon SVG (tiada emoji). Maskot **Gemi**, kucing oren dilukis sendiri dalam SVG (`js/maskot.js`, 4 mood). Bunyi Web Audio sintesis; tiada CDN/font luar.
- **Aset sebenar:** tiada (semuanya dijana).
- **ORIGINAL:** tujuh kepingan geometri ialah bentuk matematik umum; siluet dijana sendiri oleh `uji/jana-siluet.mjs` (carian susunan berpandu), bukan set tangram komersial.
- **Tidak boleh:** salin game/siluet komersial, data peribadi murid, iklan.

## Senario ujian
1. Menu → BM → peta → siluet 1 → petunjuk → ulang → selesai (`uji/senario.json`, main-uji skill)
2. Tukar ID/BM di tengah main (`uji/senario.json`)
3. Main penuh 13 siluet dengan seret sentuh/tetikus sebenar, putar/balik, "hampir", petunjuk, bintang 3/2/1, Ulang, tukar ID, simpanan selepas muat semula (`uji/main-auto.mjs`)
4. Logik geometri & data (`uji/logik.mjs`)
