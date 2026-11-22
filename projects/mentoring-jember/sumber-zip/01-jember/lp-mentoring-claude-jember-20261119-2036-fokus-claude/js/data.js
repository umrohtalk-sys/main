/* Semua isi yang sering diubah ada di sini: nomor WA, paket & harga, chat hero, enam langkah sesi, pilihan minat. */
window.LP = {
  WA: '6285704973827',
  WA_TAMPIL: '+62 857-0497-3827',
  pesanUmum: 'Halo Kak Auzan, saya dari Jember dan tertarik mentoring Claude 1-on-1. Boleh dijelaskan paketnya?',
  pesanPaket: function (nama, harga) {
    return 'Halo Kak Auzan, saya dari Jember mau ambil ' + nama + ' (' + harga + ') mentoring Claude 1-on-1. Minat saya di bidang: ... Enaknya ketemu di cafe atau Zoom, dan kapan jadwalnya?';
  },

  /* Harga Jember: Rp 200.000 / 250.000 / 300.000 per orang. Harga grup (ajak teman) hanya lewat DM WhatsApp.
     Kalau nanti ada link checkout (Mayar/Kliqoo), isi "checkout"; tombol otomatis pindah ke link itu. */
  PAKET: [
    { id: 'praktik', nama: 'Paket Praktik', label: 'Mentoring + bonus', harga: 'Rp 200.000', checkout: '',
      untuk: 'Untuk yang ingin mulai memakai Claude dan langsung menghasilkan karya pertama.',
      isi: ['Mentoring Claude 1-on-1 di cafe Jember atau Zoom', 'Materi disusun sesuai minat & bidangmu', 'Praktik app, website, video atau carousel', 'Gratis: akses app Fundamental (Claude dari nol)', 'Gratis: kumpulan prompt Claude sesuai niche-mu'],
      hasil: 'Proyek pertamamu jadi di sesi.' },
    { id: 'builder', nama: 'Paket Builder', label: 'Praktik + Prompt Generator', harga: 'Rp 250.000', checkout: '',
      untuk: 'Untuk yang ingin terus bikin app dan website sendiri dengan Claude setelah sesi.',
      isi: ['Semua isi Paket Praktik'],
      plus: ['Akses Prompt Generator app & website', 'Puluhan template app, game dan website', 'Dipandu sampai karyamu online di HP'],
      hasil: 'Pulang membawa alat untuk proyek berikutnya.' },
    { id: 'allin', nama: 'Paket All in', label: 'Semua di atas + video', harga: 'Rp 300.000', checkout: '', pop: true,
      untuk: 'Untuk yang ingin memakai Claude secara lengkap: app, website, video dan carousel.',
      isi: ['Semua isi Paket Builder'],
      plus: ['Akses Prompt Generator Video (49 gaya)', 'Praktik video & carousel promosi dengan Claude', 'Prioritas tanya jawab lewat WhatsApp'],
      hasil: 'Karya jadi, video & carousel promosinya juga.' }
  ],

  CHAT: [
    ['u', 'Kak, aku guru SD di Jember. Claude bisa bantu apa?'],
    ['m', 'Banyak: game kuis, web kelas, video, carousel.'],
    ['u', 'Mulai dari game kuis pecahan kelas 4, ya?'],
    ['m', 'Siap. Ketik di Claude, game-nya langsung jadi.'],
    ['u', 'Sekalian carousel buat grup wali murid!']
  ],

  /* Pilihan minat: isi kartu HP + daftar praktik di bagian "Materi ikut minatmu". */
  MINAT: [
    { id: 'edukasi', nama: 'Edukasi', ikon: 'graduation-cap', siapa: 'Guru, dosen, tentor, pemilik bimbel',
      app: 'Kuis Pecahan Kelas 4', sub: 'Game kuis untuk murid', baris: [['gamepad-2', 'Main: 10 soal'], ['trophy', 'Papan skor kelas'], ['link', 'Satu link untuk murid']], tombol: 'Mulai main',
      praktik: [['smartphone','App','game kuis dari materi pelajaranmu'],['globe','Website','halaman kelas berisi materi dan tugas'],['clapperboard','Video','animasi penjelasan materi untuk Reels / TikTok'],['layout-template','Carousel','ringkasan materi untuk grup wali murid']] },
    { id: 'tani', nama: 'Pertanian', ikon: 'sprout', siapa: 'Petani, penyuluh, toko pertanian, kelompok tani',
      app: 'Hitung Pupuk Jagung', sub: 'Kalkulator untuk petani', baris: [['ruler', 'Luas lahan: 0,5 ha'], ['flask-conical', 'Urea · Phonska · ZA'], ['calendar-days', 'Jadwal pemupukan']], tombol: 'Hitung sekarang',
      praktik: [['smartphone','App','kalkulator pupuk dan takaran per luas lahan'],['globe','Website','profil kelompok tani atau toko pertanian'],['clapperboard','Video','edukasi tani dengan huruf besar, mudah dipahami'],['layout-template','Carousel','jadwal tanam & tips pemupukan']] },
    { id: 'tekno', nama: 'Teknologi', ikon: 'cpu', siapa: 'Mahasiswa IT, freelancer, staf kantor',
      app: 'Portofolio Saya', sub: 'Web profil + proyek', baris: [['layout-dashboard', 'Halaman proyek'], ['workflow', 'Alat otomatisasi kerja'], ['globe', 'Online di Netlify']], tombol: 'Lihat proyek',
      praktik: [['smartphone','App','alat kecil untuk mempercepat kerja harian'],['globe','Website','portofolio atau company profile'],['clapperboard','Video','demo produk dan tutorial singkat'],['layout-template','Carousel','konten jualan jasa bikin app ke klien']] },
    { id: 'umkm', nama: 'UMKM & kuliner', ikon: 'store', siapa: 'Warung, cafe, laundry, toko online',
      app: 'Menu Kopi Kita', sub: 'Menu digital + pesan', baris: [['coffee', 'Es kopi susu · 15rb'], ['cake-slice', 'Roti bakar · 12rb'], ['shopping-bag', 'Keranjang: 2 item']], tombol: 'Pesan via WhatsApp',
      praktik: [['smartphone','App','kartu member & stempel pelanggan'],['globe','Website','menu atau katalog dengan tombol pesan WA'],['clapperboard','Video','promosi produk tanpa tampil di kamera'],['layout-template','Carousel','promo mingguan dan testimoni pelanggan']] },
    { id: 'sehat', nama: 'Kesehatan', ikon: 'heart-pulse', siapa: 'Bidan, perawat, klinik, homecare',
      app: 'Baby Spa Bunda', sub: 'Pilih layanan', baris: [['baby', 'Pijat bayi'], ['house', 'Homecare nifas'], ['calendar-check', 'Pilih jadwal']], tombol: 'Booking via WhatsApp',
      praktik: [['smartphone','App','layanan & booking langsung ke WhatsApp'],['globe','Website','profil praktik dan daftar layanan'],['clapperboard','Video','edukasi kesehatan yang aman'],['layout-template','Carousel','tips untuk pasien dan keluarga']] },
    { id: 'konten', nama: 'Konten kreator', ikon: 'clapperboard', siapa: 'Kreator, admin medsos, affiliate',
      app: 'Video Edukasi', sub: 'Dari ide ke video', baris: [['lightbulb', 'Ide: 3 tips hemat'], ['captions', 'Naskah + takarir'], ['smartphone', 'Format 9:16']], tombol: 'Buat video',
      praktik: [['smartphone','App','kuis atau filter interaktif untuk followers'],['globe','Website','link in bio dan halaman produk affiliate'],['clapperboard','Video','animasi tanpa tampil wajah'],['layout-template','Carousel','bank ide supaya konten tidak macet']] }
  ],

  LANGKAH: [
    { h: 'Kenali minat dan tujuanmu', m: 'tMentor', sb: 'thinking',
      p: [['compass', 'Bidangmu: edukasi, pertanian, teknologi, UMKM, atau lainnya'], ['target', 'Mau app, website, video atau carousel dulu'], ['list-checks', 'Target proyek yang jadi di akhir sesi']],
      s: '<span class="ks-tj">Diagnosis</span><p class="ks-h">Target sesi hari ini</p><div class="cek"><div><span class="ic"><i data-lucide="check"></i></span>Minat: edukasi · guru SD</div><div><span class="ic"><i data-lucide="check"></i></span>Masalah: murid cepat bosan</div><div><span class="ic"><i data-lucide="check"></i></span>Proyek: game kuis pecahan</div><div><span class="ic"><i data-lucide="check"></i></span>Hasil: link game jadi hari ini</div></div>' },
    { h: 'Susun materi khusus untukmu', m: 'tMentor', sb: 'happy',
      p: [['puzzle', 'Contoh dan latihan diambil dari bidangmu sendiri'], ['layers', 'Mulai dari yang paling kamu butuhkan'], ['lightbulb', 'Ide proyek lanjutan untuk dikerjakan di rumah']],
      s: '<span class="ks-tj">Materi custom</span><p class="ks-h">Dari minat ke proyek</p><div class="alir"><span>Edukasi</span><span class="pa"><i data-lucide="chevron-right"></i></span><span class="k">Game kuis</span><span class="pa"><i data-lucide="chevron-right"></i></span><span>LKPD</span><span class="pa"><i data-lucide="chevron-right"></i></span><span>Video materi</span></div><div class="mangga"><span class="ic"><i data-lucide="sparkles"></i></span>Petani dapat contoh petani, guru dapat contoh guru</div>' },
    { h: 'Praktik langsung di Claude', m: 'tAnda', sb: 'happy',
      p: [['laptop', 'Kamu yang mengetik, aku dampingi di sebelahmu'], ['message-square-code', 'Kamu mengetik di Claude, pakai prompt siap isi'], ['eye', 'Langsung lihat hasilnya di layar']],
      s: '<span class="ks-tj">Praktik</span><p class="ks-h">Prompt pertamamu</p><div class="kod" data-taip="Buat game kuis pecahan kelas 4.\\n10 soal, ada skor dan suara.\\nBahasa Indonesia, cocok untuk HP."></div><div class="mini-game"><i></i><i></i><i></i><i></i></div>' },
    { h: 'Tanya apa saja, saat itu juga', m: 'tAnda', sb: 'wink',
      p: [['message-circle', 'Bingung di satu langkah? Langsung ditanyakan'], ['wrench', 'Error dibetulkan bareng, bukan ditinggal'], ['layout-template', 'Lanjut ke video & carousel promosi']],
      s: '<span class="ks-tj">Tanya jawab</span><p class="ks-h">Tanya apa saja</p><div class="cc"><div class="bub u">Bisa sekalian carousel promosinya?</div><div class="bub m">Bisa. Minta Claude bikin 10 slide dari isi app tadi.</div><div class="bub u">Videonya juga bisa dari Claude?</div></div>' },
    { h: 'Jadikan bisa dibuka di HP', m: 'tMentor', sb: 'happy',
      p: [['upload-cloud', 'Unggah ke internet, gratis'], ['smartphone', 'Cek tampilannya di HP-mu'], ['link', 'Satu link untuk dibagikan']],
      s: '<span class="ks-tj">Online</span><p class="ks-h">Dari laptop ke HP</p><div class="alir"><span>File jadi</span><span class="pa"><i data-lucide="chevron-right"></i></span><span>Seret ke Netlify</span><span class="pa"><i data-lucide="chevron-right"></i></span><span class="k">Link jadi</span><span class="pa"><i data-lucide="chevron-right"></i></span><span>Buka di HP</span></div><div class="mangga"><span class="ic"><i data-lucide="link"></i></span>Link siap dibagikan ke murid, pelanggan atau klien</div>' },
    { h: 'Bawa pulang hasilnya', m: 'tAnda', sb: 'cheer',
      p: [['package-check', 'Proyek yang sudah online hari itu juga'], ['file-text', 'Prompt yang dipakai, untuk diulang sendiri'], ['route', 'Rencana proyek berikutnya']],
      s: '<span class="ks-tj">Selesai</span><p class="ks-h">Yang kamu bawa pulang</p><div class="fail"><div><span class="ic"><i data-lucide="gamepad-2"></i></span>Game kuis · sudah online</div><div><span class="ic"><i data-lucide="layout-template"></i></span>Carousel promosi · siap unggah</div><div><span class="ic"><i data-lucide="wand-sparkles"></i></span>Akses alat sesuai paket</div><div><span class="ic"><i data-lucide="route"></i></span>Rencana proyek berikutnya</div></div>' }
  ]
};
