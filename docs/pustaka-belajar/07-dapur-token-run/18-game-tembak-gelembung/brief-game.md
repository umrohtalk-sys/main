# Brief game (satu halaman) — Clawd Letus Gelembung / Clawd Letus Gelembung

- **Matlamat belajar:** murid makin lancar mengira tambah, tolak dan darab (fakta asas hingga ~50 dan jadual 2–9) dengan mencari JAWAPAN yang betul di antara banyak nombor.
- **Pemain:** murid SD Tahun 3–6 (MY + ID).
- **Bahasa:** BM dan ID; butang tukar di menu dan bar atas, disimpan dalam localStorage.
- **Gelung main:** soalan dijana di atas ("7 + 5 = ?") → bidik Clawd (sentuh & seret di telefon, tetikus/anak panah di desktop) → lepas untuk menembak mutiara; mutiara boleh memantul pada dinding → gelembung betul pecah (gelembung sama bersebelahan pecah berantai, yang tergantung jatuh) → soalan baharu daripada gelembung yang masih boleh dicapai.
- **Salah:** gelembung salah bergoyang, satu baris baharu muncul di atas sehingga kelompok turun selangkah, kombo putus. Ditambah baris turun berkala (pengatur masa) yang makin laju mengikut tahap.
- **Menang / kalah:** menang bila jumlah soalan tahap dijawab; kalah bila gelembung mencecah garis bahaya. Bintang 1–3 ikut bilangan jawapan salah. Skor: kombo (hingga ×3), bonus berantai, bonus jatuh, bonus pantulan.
- **Tahap (7):** Tambah ≤10, Tambah ≤30, Tolak ≤20, Darab 2–5, Darab 2–9, Campuran, Cabaran. Soalan dijana, ~55 soalan semua.
- **Tahap ketelitian:** `standard` + ujian logik enjin (`uji/logik.mjs`).
- **Gaya:** laut lembut, gelembung kaca pastel berlabel nombor, ikon SVG (tiada emoji). Maskot **Clawd**, ketam oren lukisan SVG sendiri dengan 4 mood.
- **Aset sebenar:** tiada. Semua dijana (Canvas, SVG, Web Audio). Tiada CDN/font luar.
- **Mekanik diambil daripada rujukan:** hanya "tembak ke kelompok gelembung berlabel jawapan". Nama, peraturan, rupa dan sistem soalan milik sendiri; bukan salinan game komersial.

## Senario ujian
1. `uji/senario.json` (main-uji skill): menu → BM → peta → tahap 1 → bidik → tembak; tukar ID.
2. `uji/main-auto.mjs`: pemain automatik sebenar (sentuh di telefon, tetikus di desktop): salah, kalah, ulang, menang 7 tahap, bahasa ID, simpanan.
3. `uji/logik.mjs`: soalan betul, kebolehcapaian, berantai, jatuh, pantulan.
