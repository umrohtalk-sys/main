# Brief game: Kedai Pantas / Warung Cepat (satu halaman)

- **Matlamat belajar:** selepas main, murid boleh menjumlah harga barang, mengira diskaun peratus mudah, dan mengira baki/kembalian dengan syiling dan not dalam RM atau Rp.
- **Pemain:** murid SD Tahun 4 hingga 6 (Malaysia) / kelas 4 hingga 6 SD (Indonesia).
- **Bahasa:** BM (RM, kedai runcit) dan ID (Rp, warung); butang tukar di menu. Barang dan harga ikut negara (Nasi lemak vs Tempe, dsb).
- **Gelung main:** pelanggan masuk dengan pesanan -> ketik barang di rak (beg + jumlah) -> (Tahap 3) pilih jumlah selepas diskaun -> ketik wang pelanggan untuk menerima -> ketik syiling/not hingga baki tepat -> Beri baki -> pelanggan pergi, kombo naik.
- **Menang / kalah:** 3 nyawa (hati). Pelanggan yang kehabisan sabar pergi = hilang 1 nyawa. Nyawa 0 = kalah (0 bintang). Habis semua pelanggan = menang. Bintang: 1 = habis; 2 = skor >= pelanggan x 180; 3 = skor >= pelanggan x 250.
- **Skor:** (100 + sehingga 100 ikut baki sabar) x pengganda kombo (1.0 hingga 2.0). Kombo naik bila tanpa silap dan masih sabar >= 35%. Ada silap = skor x 0.6, kombo reset, masa sabar -2.5 s.
- **Tahap:** T1 satu jenis barang (6 pelanggan, sabar 30 s); T2 dua atau tiga jenis (8 pelanggan, 26 s); T3 diskaun 10/20/25/50% (10 pelanggan, 22 s).
- **Tahap ketelitian:** standard (tanpa ujian logik berasingan; ketat_untuk: tiada).
- **Gaya:** kaunter kayu lembut, latar krim, palet biru Si Bulat + oren/hijau aksen. Maskot ORIGINAL: Si Bulat (bulatan biru bermata, dilukis SVG sendiri). Pelanggan dilukis SVG sendiri. Ikon barang dan wang SVG, tiada emoji.
- **Aset sebenar:** tiada fail luar; semua SVG/CSS/Web Audio. Hanya Google Fonts (pilihan; ada fallback).
- **Tidak boleh:** salin game kedai komersial, logo jenama, data peribadi, pautan luar.

## Skrin dan keadaan
1. Menu: pilih bahasa, 3 kad tahap (bintang terbaik), togol bunyi.
2. Main: fasa `barang` -> `diskaun` (T3) -> `terima` -> `baki`; keadaan sampingan: oops (silap), pelanggan marah/pergi, jeda.
3. Hasil: menang (1-3 bintang) atau kalah; Main semula / Tahap seterusnya / Menu.

## Senario ujian
1. Menang: tahap 1 dengan taps sebenar (bot) hingga 3 bintang.
2. Silap: pilih barang salah, baki salah (lebih/kurang), diskaun salah, kemudian betul.
3. Kalah: biar 3 pelanggan pergi (masa dipercepat).
4. Ulang: Main semula dari hasil. Tukar bahasa ID: Rp + barang warung.
5. Semak: tiada skrol mendatar, sasaran sentuh >= 44 px, telefon 375/390 px + desktop.
