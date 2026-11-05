/* Mode DEMO: dipakai otomatis jika config.js belum diisi.
   Data contoh disimpan di browser (localStorage) sehingga prototipe bisa dicoba tanpa Supabase.
   Semua nama dan profil di sini adalah CONTOH, bukan orang sungguhan. */
(function () {
  if (window.NK_DATA) return; // Supabase sudah aktif
  const KEY = "nk-demo-v1";
  const SUBJ = ["Iqra", "Tahsin", "Tahfidz", "Tajwid", "Bahasa Arab", "Doa Harian", "Adab & Akhlak"].map((name, i) => ({ id: i + 1, name }));
  const T = (id, user_id, full_name, gender, city, district, subjects, mode, extra) => ({
    id, user_id, full_name, gender, city, district, subjects, mode, status: "approved", verified: true,
    photo_url: null, fee_note: "Dibicarakan langsung", whatsapp: "6281200000000", email: "", social_url: "", document_url: null, ...extra,
  });
  const seed = () => ({
    users: [
      { id: "u-parent", email: "orangtua@contoh.id", full_name: "Bunda Aisyah (contoh)", role: "parent" },
      { id: "u-teacher", email: "pengajar@contoh.id", full_name: "Ustadzah Nur Hasanah (contoh)", role: "teacher" },
      { id: "u-admin", email: "admin@contoh.id", full_name: "Admin NGAJI KIDS", role: "admin" },
    ],
    teachers: [
      T("t1", "u-teacher", "Ustadzah Nur Hasanah (contoh)", "P", "Jakarta Selatan", "Tebet", ["Iqra", "Tajwid", "Doa Harian"], ["offline", "online"], { bio: "Mengajar anak dengan metode bermain dan bernyanyi. Setiap anak punya buku prestasi kecil untuk ditempel bintang.", education: "S1 Pendidikan Agama Islam", experience: "6 tahun di TPA Al-Ikhlas", sanad: "Syahadah Tahsin Metode Ummi", schedule: "Senin–Jumat, 15.00–18.00", age_range: "4–10 tahun" }),
      T("t2", "u-x2", "Ustadz Fadhil Rahman (contoh)", "L", "Bandung", "Coblong", ["Tahfidz", "Tahsin"], ["offline"], { bio: "Hafidz 30 juz. Fokus murojaah yang menyenangkan dan target hafalan yang realistis untuk anak.", education: "Pondok Tahfidz Darul Qur'an", experience: "8 tahun membimbing tahfidz anak", sanad: "Sanad Hafs 'an 'Ashim", schedule: "Sabtu–Ahad, 07.00–11.00", age_range: "7–14 tahun", fee_note: "Mulai Rp150.000/bulan" }),
      T("t3", "u-x3", "Ustadzah Salma Azzahra (contoh)", "P", "Depok", "Beji", ["Bahasa Arab", "Adab & Akhlak"], ["online"], { bio: "Belajar kosakata Arab lewat kartu bergambar dan lagu. Kelas online 30 menit agar anak tetap fokus.", education: "S1 Sastra Arab", experience: "4 tahun guru Bahasa Arab SD", sanad: "-", schedule: "Senin, Rabu, Jumat 19.00–20.30", age_range: "6–12 tahun", verified: false }),
      T("t4", "u-x4", "Ustadz Hamzah Al-Faruq (contoh)", "L", "Surabaya", "Wonokromo", ["Iqra", "Tajwid", "Tahsin"], ["offline", "online"], { bio: "Sabar menghadapi anak yang baru mengenal huruf hijaiyah. Bisa datang ke rumah wilayah Surabaya selatan.", education: "D3 Ilmu Al-Qur'an", experience: "5 tahun ustadz TPQ", sanad: "Syahadah Metode Qiroati", schedule: "Setiap hari ba'da Ashar", age_range: "4–9 tahun" }),
      T("t5", "u-x5", "Ustadzah Khadijah Putri (contoh)", "P", "Yogyakarta", "Depok, Sleman", ["Tahfidz", "Doa Harian", "Adab & Akhlak"], ["offline"], { bio: "Menghafal juz 30 sambil belajar adab sehari-hari. Kelas kecil maksimal 4 anak.", education: "S1 Ilmu Al-Qur'an dan Tafsir", experience: "7 tahun", sanad: "Sanad juz 30", schedule: "Selasa & Kamis 16.00–17.30", age_range: "5–11 tahun" }),
      T("t6", "u-x6", "Ustadz Yusuf Maulana (contoh)", "L", "Bekasi", "Bekasi Barat", ["Tahsin", "Tajwid"], ["online"], { bio: "Kelas online interaktif dengan papan tulis digital. Cocok untuk anak yang sudah lancar Iqra 6.", education: "Ma'had Aly", experience: "3 tahun", sanad: "Syahadah Tahsin Tilawati", schedule: "Senin–Kamis 18.30–20.00", age_range: "8–15 tahun", verified: false }),
      T("t7", "u-x7", "Ustadzah Maryam Lubis (contoh)", "P", "Medan", "Medan Baru", ["Iqra", "Bahasa Arab"], ["offline", "online"], { bio: "Mengajar dengan kartu huruf berwarna dan reward stiker. Ramah untuk anak yang pemalu.", education: "S1 Pendidikan Bahasa Arab", experience: "5 tahun", sanad: "Syahadah Iqra", schedule: "Senin–Sabtu 14.00–17.00", age_range: "4–8 tahun" }),
      T("t8", "u-x8", "Ustadz Ilham Saputra (contoh)", "L", "Makassar", "Panakkukang", ["Tahfidz", "Tajwid"], ["offline"], { bio: "Program hafalan bertahap dengan laporan mingguan untuk orang tua.", education: "Pondok Pesantren Hidayatullah", experience: "6 tahun", sanad: "Sanad 30 juz", schedule: "Ahad 08.00–12.00", age_range: "8–14 tahun" }),
      T("t9", "u-x9", "Ustadzah Hafsah Ramadhani (contoh)", "P", "Bogor", "Bogor Tengah", ["Iqra", "Tahsin"], ["offline"], { bio: "Baru mendaftar, menunggu verifikasi admin.", education: "S1 PAI", experience: "2 tahun", sanad: "-", schedule: "Sabtu pagi", age_range: "4–8 tahun", status: "pending", verified: false, document_url: "u-x9/ijazah.pdf" }),
    ],
    favorites: [],
    reports: [{ id: "r1", teacher_id: "t6", reason: "Contoh laporan: nomor WhatsApp tidak aktif.", status: "open", created_at: new Date(Date.now() - 864e5).toISOString() }],
    sessionUser: null,
  });

  let S;
  try { S = JSON.parse(localStorage.getItem(KEY)) || seed(); } catch { S = seed(); }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} };
  const subs = [];
  const emit = () => subs.forEach((f) => f());
  const wait = (v) => new Promise((r) => setTimeout(() => r(v), 120));
  const uid = () => S.sessionUser;
  const me = () => S.users.find((u) => u.id === uid()) || null;
  const pub = (t) => {
    const { whatsapp, email, social_url, document_url, user_id, status, ...rest } = t;
    const u = S.users.find((x) => x.id === user_id);
    return { ...rest, full_name: u ? u.full_name : t.full_name };
  };

  window.NK_DATA = {
    mode: "demo",
    demoAccounts: [
      { id: "u-parent", label: "Orang tua", desc: "Cari guru, simpan favorit, hubungi lewat WhatsApp" },
      { id: "u-teacher", label: "Pengajar", desc: "Isi profil, unggah foto dan ijazah" },
      { id: "u-admin", label: "Admin", desc: "Setujui pengajar dan tangani laporan" },
    ],
    async demoLogin(id) { S.sessionUser = id; save(); emit(); return wait({}); },
    async resetDemo() { S = seed(); save(); emit(); },
    async session() { const u = me(); return u ? { user: { id: u.id, email: u.email } } : null; },
    onAuth(cb) { subs.push(cb); },
    async signIn(email) {
      const u = S.users.find((x) => x.email === String(email).toLowerCase());
      if (!u) return wait({ error: "Mode demo: gunakan tombol akun contoh di bawah, atau buat akun baru." });
      S.sessionUser = u.id; save(); emit(); return wait({});
    },
    async signUp({ email, name, role }) {
      email = String(email).toLowerCase();
      if (S.users.some((u) => u.email === email)) return wait({ error: "Email ini sudah terdaftar." });
      const u = { id: "u-" + Date.now().toString(36), email, full_name: name, role };
      S.users.push(u); S.sessionUser = u.id; save(); emit(); return wait({});
    },
    async resetPassword() { return wait({}); },
    async updatePassword() { return wait({}); },
    async signOut() { S.sessionUser = null; save(); emit(); },
    async me() { return wait(me()); },
    async updateName(name) {
      const u = me(); if (!u) return { error: "Belum masuk" };
      u.full_name = name; save(); return wait({});
    },
    async subjects() { return wait(SUBJ); },
    async teachers(f = {}) {
      let list = S.teachers.filter((t) => t.status === "approved").map(pub);
      const has = (a, b) => String(a || "").toLowerCase().includes(String(b).toLowerCase());
      if (f.kota) list = list.filter((t) => has(t.city, f.kota) || has(t.district, f.kota));
      if (f.nama) list = list.filter((t) => has(t.full_name, f.nama));
      if (f.mapel) list = list.filter((t) => t.subjects.includes(f.mapel));
      if (f.mode) list = list.filter((t) => t.mode.includes(f.mode));
      if (f.gender) list = list.filter((t) => t.gender === f.gender);
      return wait(list);
    },
    async teacher(id) { const t = S.teachers.find((x) => x.id === id && x.status === "approved"); return wait(t ? pub(t) : null); },
    async contact(id) {
      if (!uid()) return null;
      const t = S.teachers.find((x) => x.id === id && x.status === "approved");
      return wait(t ? { whatsapp: t.whatsapp, email: t.email, social_url: t.social_url } : null);
    },
    async report(teacher_id, reason) {
      S.reports.push({ id: "r" + Date.now(), teacher_id, reason, status: "open", created_at: new Date().toISOString() });
      save(); return wait({});
    },
    async favIds() { return new Set(S.favorites.filter((f) => f.parent_id === uid()).map((f) => f.teacher_id)); },
    async toggleFav(teacher_id, on) {
      S.favorites = S.favorites.filter((f) => !(f.parent_id === uid() && f.teacher_id === teacher_id));
      if (on) S.favorites.push({ parent_id: uid(), teacher_id });
      save(); return wait({});
    },
    async favTeachers() {
      const ids = await this.favIds();
      return wait(S.teachers.filter((t) => ids.has(t.id) && t.status === "approved").map(pub));
    },
    async myTeacher() {
      const t = S.teachers.find((x) => x.user_id === uid());
      if (!t) return wait(null);
      return wait({ ...t, subject_ids: SUBJ.filter((s) => t.subjects.includes(s.name)).map((s) => s.id) });
    },
    async createTeacher(city) {
      const u = me();
      const t = { id: "t" + Date.now(), user_id: u.id, full_name: u.full_name, gender: null, city, district: "", subjects: [], mode: [], status: "pending", verified: false, photo_url: null, fee_note: "Dibicarakan langsung", whatsapp: "", email: "", social_url: "", document_url: null };
      S.teachers.push(t); save();
      return this.myTeacher();
    },
    async saveTeacher(id, patch, subjectIds) {
      const t = S.teachers.find((x) => x.id === id && x.user_id === uid());
      if (!t) return { error: "Profil tidak ditemukan" };
      delete patch.status; delete patch.verified; // sama seperti trigger protect_status di database
      Object.assign(t, patch, { subjects: SUBJ.filter((s) => subjectIds.includes(s.id)).map((s) => s.name) });
      save(); return wait({});
    },
    async upload(bucket, file, name) {
      if (bucket === "photos") {
        const url = await new Promise((r) => { const fr = new FileReader(); fr.onload = () => r(fr.result); fr.readAsDataURL(file); });
        return { path: url, url };
      }
      return { path: `${uid()}/${name}-${file.name}` };
    },
    async pending() {
      return wait(S.teachers.filter((t) => t.status === "pending").map((t) => ({ ...t, full_name: (S.users.find((u) => u.id === t.user_id) || t).full_name })));
    },
    async setTeacher(id, patch) { const t = S.teachers.find((x) => x.id === id); if (t) Object.assign(t, patch); save(); return wait({}); },
    async docLink() { return null; },
    async reports() {
      return wait(S.reports.filter((r) => r.status === "open").map((r) => ({ ...r, teacher_name: (S.teachers.find((t) => t.id === r.teacher_id) || {}).full_name })));
    },
    async closeReport(id) { const r = S.reports.find((x) => x.id === id); if (r) r.status = "closed"; save(); return wait({}); },
    async adminStats() {
      return wait({
        approved: S.teachers.filter((t) => t.status === "approved").length,
        pending: S.teachers.filter((t) => t.status === "pending").length,
        reports: S.reports.filter((r) => r.status === "open").length,
        users: S.users.length,
      });
    },
    async deleteAccount() {
      const u = me(); if (!u) return { error: "Belum masuk" };
      if (u.role === "admin") return { error: "Akun admin tidak bisa dihapus dari sini." };
      S.teachers = S.teachers.filter((t) => t.user_id !== u.id);
      S.favorites = S.favorites.filter((f) => f.parent_id !== u.id);
      S.users = S.users.filter((x) => x.id !== u.id);
      S.sessionUser = null; save(); emit(); return wait({});
    },
  };
})();
