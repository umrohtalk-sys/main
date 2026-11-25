# Analisa lengkap copywriting Threads @muhd.afiq.asyraf
Data: 200 postingan = 98 thread, 30 Sep – 20 Nov 2026 (±7 minggu), diambil via Apify 21 Nov 2026.
Fail sokongan dalam folder ini: `semua-copywriting.md` (semua teks, ikut thread), `semua-copywriting.txt` (teks polos), `semua-postingan.csv` (angka per postingan), `data-mentah.json`.
Angka = postingan pertama thread: like / reply / repost / share. Waktu = MYT.

> Catatan data: scraper hanya mengambil **postingan pertama + maksimal 3 sambungan** setiap thread. Thread 6–7 bahagian di profil kelihatan 4 bahagian sahaja di sini.

---

## 1. Gambaran besar
| Ukuran | Nilai |
|---|---|
| Kekerapan | ±2 thread sehari (98 thread / 51 hari) |
| Like median | 30 (separuh postingan di bawah 30) |
| Like purata | 202 (ditarik naik oleh beberapa viral) |
| Thread 1.000+ like | 4 (3172, 2102, 1467, 1161) |
| Postingan beremoji | 4 dari 200 |
| Hashtag | 0 |
| Thread bernombor "1. 2. 3." | 45 dari 98 |

**Maksudnya:** akaun ini hidup dari *beberapa* thread viral yang ditulis dengan formula sama, bukan dari setiap postingan. Sebahagian besar postingan harian (ucapan, rezeki, repost, video lucu) dapat 0–30 like dan itu normal; fungsinya menjaga akaun aktif dan "manusiawi".

## 2. Lima formula hook yang terbukti (dari 25 thread teratas)

### A. Larangan — "BERHENTI/JANGAN minta AI '[perintah malas]'."  ★ paling konsisten
14 thread · median **210** like · purata 490 · share purata **181** (tertinggi)
- 2102 · "BERHENTI minta Gemini Notebook 'hasilkan infografik'." → "Cikgu-cikgu boleh guna framework prompt ini…"
- 1467 · "BERHENTI minta Gemini NotebookLM 'hasilkan slide'."
- 1161 · "Korang yang student itu jangan guna … untuk buat nota dan ringkasan saja."
- 805 · "Berhenti minta AI 'hasilkan infografik.' Guna 5 prompt ini…"
- 323 · "Berhenti minta AI hasilkan game. Guna 4 prompt ini … Gemini Canvas."
- 308 · "JANGAN sekadar minta … 'buat video tentang [TOPIK]'."

Rangka: `BERHENTI minta [tool] "[perintah umum]".` ⏎ `[Golongan] boleh guna framework prompt ini untuk hasilkan [hasil] yang lebih kemas dan cantik.`
Kenapa jalan: menegur kebiasaan yang *semua orang* buat (rasa tersentil), perintah dalam tanda petik = pembaca nampak dirinya, janji ada cara lebih baik di bawah.

### B. Soalan follower — "BANG, MACAM MANA NAK …?"  (HURUF BESAR)
- 932 · "BANG, MACAM MANA NAK BUAT GAME BELAJAR MACAM ORANG LAIN BUAT ITU?" → "Senang saja. Ini saya sharekan cara paling mudah dan percuma."
- 735 · "BANG, MACAM MANA NAK BUAT SLIDE WOW GUNA GEMINI NOTEBOOKLM TAPI …?"
- 370 · "BANG, MACAM MANA NAK BUAT 100 SLIDE GUNA GEMINI NOTEBOOK?" → "Meh saya kongsikan caranya."

Kenapa jalan: hook ditulis *dalam suara pembaca* (gaya DM/komen), jadi terasa soalan sebenar; jawapan baris kedua sentiasa pendek dan meyakinkan ("Senang saja.").
> Pembetulan analisa awal: HURUF BESAR bukan masalah. Yang lemah ialah HURUF BESAR jenis "KESILAPAN/NAK HASILKAN OUTPUT…" (4–21 like). HURUF BESAR jenis "BANG, …?" dan "KHAS UNTUK …" kuat.

### C. Khas untuk golongan — "KHAS UNTUK [GOLONGAN]"
- 692 · "KHAS UNTUK LECTURER" → framework prompt infografik
- 612 · "KHAS UNTUK MEREKA YANG KERJA PEJABAT" → framework yang sama

Teknik: **satu kandungan, dipakai semula untuk golongan berbeza** (cikgu → lecturer → orang pejabat). Formula yang sudah viral diulang dengan audiens baru.

### D. "Sebenarnya kita boleh …" — guna tersembunyi  ★ viral tertinggi
- **3172** · "Sebenarnya kita boleh guna Gemini Notebook aka NotebookLM untuk ubah slide lama jadi slide baru tanpa ubah kandungan slide." ⏎ "Ini caranya:"
- 323 · "Ramai lagi tak tahu yang kita sekarang boleh gunakan Gemini untuk hasilkan lagu AI…" ⏎ "Meh saya kongsikan caranya."

Kenapa jalan: kegunaan *spesifik dan tak dijangka* (slide lama → slide baru) + menyelesaikan kerja sebenar orang. Baris kedua "Ini caranya:" memaksa buka thread.

### E. Hasil + masa — "[Hasil] macam ini sekarang boleh buat dalam [X] minit saja."
- 532 · "Video macam ini sekarang kita boleh buat dalam masa 10 minit saja. Cara dia:" + 3 langkah
- 405 · "Mudah saja nak buat game macam ini sekarang." + 2 langkah
- 299 · "…tak perlu spend masa berjam-jam buat slide … Tak sampai 10 minit…"
- 160 · "2 minit saja chat dengan chatgpt work, siap slaid kemas macam ini."
Selalu disertai gambar/video hasil.

### F. Shortcut prompt bergambar (pendek)
- 800 · "Bolehlah cuba guna shortcut prompt ini dekat ChatGPT ya." (1 postingan + gambar)
- 356 · "Bolehlah guna shortcut prompt ini dalam ChatGPT. Selamat mencuba."
Teks hampir kosong; nilai ada pada **gambar senarai prompt** yang orang simpan.

## 3. Struktur badan thread (4 bahagian)
| Bilangan bahagian | Thread | Like median |
|---|---|---|
| 1 | 56 | 17.5 |
| 2 | 11 | 38 |
| 4 (penuh) | 29 | **308** |

Thread panjang ≈ **17× lebih baik** daripada postingan tunggal. Corak bahagian:
1. **Hook** (1–2 ayat) + janji ("Ini caranya:", "Guna 5 prompt ini…"). Tiada isi; isi disimpan.
2. **"1. Tetapkan ini dalam prompt:"** + senarai `+ Topik / + Audiens / + Objektif / + Kandungan / + Struktur / + Visual / + Bahasa` → framework yang boleh disimpan.
3. **"2. [Jenis]"** (contoh: "Infografik peta minda", "Slaid pengajaran harian") + prompt/gambar.
4. **"3. [Jenis lain]"** … dan seterusnya; penutup "Selamat mencuba."

Setiap sambungan bermula dengan **nombor + label pendek**, kemudian 1–4 ayat pendek dipisah baris kosong. Prompt dalam tanda petik, kerap dalam **English**, dengan `[topic]`.

## 4. Kategori yang lemah (elak atau guna sebagai pengisi)
| Jenis | Like median |
|---|---|
| Jualan / "tengok bio" / link | **10** |
| Sapa golongan tanpa larangan ("Kepada cikgu-cikgu, ini cara…") | 29 |
| Senarai "KESILAPAN" HURUF BESAR | 4–5 |
| Ucapan, rezeki, "Done update ✅", video lucu, repost | 0–2 |

Jualan beliau berjalan kerana **aliran tip percuma** membawa orang ke bio, bukan kerana postingan jualan itu sendiri. Nisbahnya kira-kira 8 jualan : 90 kandungan.

## 5. Bahasa & nada
- **Kata ganti:** "kita" (90×) paling banyak → pembaca dan penulis satu pasukan. "korang" (32×) untuk menyapa, "saya" (35×) untuk berkongsi. "Anda" hampir tiada (1×, itupun dalam prompt).
- **Kata kerja utama:** buat, hasilkan, minta, guna, upload, tetapkan, jana.
- **Kata janji:** mudah (37×), "tak perlu" (10×), minit (11×), pantas, siap, senang saja, percuma.
- **Penanda lisan Malaysia:** meh, saja, pun, dah, kat, lepas itu, "Mudahkan?", "Betul tak?", "ya".
- **Campur English** untuk istilah: slide, prompt, features, custom instruction, beginner, newbie, explore, share, framework.
- **Nama tool selalu ditulis lengkap + nama lain:** "Gemini Notebook aka NotebookLM" — memudahkan carian dan pembaca yang kenal salah satu nama.
- **Panjang hook:** median **10 perkataan** baris pertama.
- **Penutup:** "Selamat mencuba." (8×), "Save dan kongsikan biar lebih ramai newbie tahu ya."
- **Tiada emoji, tiada hashtag**; gaya bersih, nampak seperti nota kawan, bukan iklan.

## 6. Topik yang paling diminati
Kata kunci terbanyak: **slide (76), prompt (73), Gemini/NotebookLM (53), infografik (25), video (25), game (20), ChatGPT (26)**.
Tiga topik pembawa viral: slide, infografik, NotebookLM. Game belajar (932, 405, 323) ialah topik keempat yang sedang naik.

## 7. Masa & hari posting
| Jam MYT | Thread | Like median |
|---|---|---|
| 06–10 | 17 | 2–35 |
| **11** | 17 | 83 |
| **12** | 13 | **254** |
| **13** | 6 | 146 |
| 14–18 | 18 | 5–50 |
| 19–20 | 24 | 12–19 |

Hari terbaik: **Isnin** (median 121), kemudian Khamis (52). Sabtu & Ahad paling lemah (14–17).
Semua 1.000+ like jatuh pada **11:00–12:30 tengah hari**. Postingan malam kebanyakannya kandungan ringan.

## 8. Rangka kerja salin-guna untuk Auzan
**Jadual seminggu (meniru nisbah beliau):**
- Isnin/Khamis 12:00 → thread **Larangan** atau **Sebenarnya kita boleh…** (4 bahagian + framework + prompt)
- Selasa/Rabu 12:00 → **BANG, MACAM MANA NAK …?** atau **KHAS UNTUK [golongan]** (guna semula thread viral untuk golongan baharu)
- Petang/malam → postingan ringan 1 baris + gambar hasil ("[X] macam ini siap tak sampai 5 minit.")
- 1 kali seminggu → jualan lembut, *selepas* thread viral, link di bahagian terakhir sahaja.

**Templat BM (topik Auzan):**
1. `BERHENTI minta AI "buatkan kuiz".` ⏎ `Cikgu-cikgu boleh guna prompt ini untuk terus dapat game kuiz yang murid boleh main dalam kelas.`
   - `1. Tetapkan ini dalam prompt:` + Subjek / + Tahun / + Jenis game / + Bilangan soalan / + Bahasa
   - `2. Game lumba jawab` + prompt
   - `3. Game teka gambar` + prompt · penutup "Selamat mencuba."
2. `BANG, MACAM MANA NAK BUAT GAME MACAM ANGRY BIRDS TAPI ADA SOALAN MATEMATIK?` ⏎ `Senang saja. Meh saya kongsikan caranya.`
3. `Sebenarnya kita boleh guna Claude untuk ubah lembaran kerja lama jadi game yang murid boleh main.` ⏎ `Ini caranya:`
4. `KHAS UNTUK CIKGU PRASEKOLAH` (kemudian ulang: KHAS UNTUK LECTURER, KHAS UNTUK IBU BAPA)
5. `Game macam ini sekarang boleh siap dalam 5 minit saja. Cara dia:` + 3 langkah + video hasil

**Versi Indonesia:** korang → kalian, nak → mau, tak → nggak, cikgu → guru, "Selamat mencuba" → "Selamat mencoba", "BANG, MACAM MANA NAK…" → "KAK, GIMANA CARANYA…".

## 9. Kedudukan pesaing
Beliau jual "Master Prompt Code" + Ezzy Slide & Carousel AI, sasaran cikgu/student/lecturer, tetapi postingan game beliau masih jenis "cara buat" umum. Kelebihan Auzan untuk dibezakan: game **siap main** (demo link), **soalan guru sendiri**, 29+ templat game, dwibahasa BM/ID.
