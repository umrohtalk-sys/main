/* Mode SUPABASE: aktif jika config.js berisi URL dan anon key.
   Semua pembatasan akses ditegakkan oleh Row Level Security di database (lihat folder supabase/),
   bukan oleh kode di browser ini. */
(function () {
  const cfg = window.NGAJI_CONFIG || {};
  if (!cfg.supabaseUrl || !cfg.supabaseAnonKey || !window.supabase) return;

  const sb = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey, {
    auth: { flowType: "pkce", persistSession: true, detectSessionInUrl: true },
  });
  const base = () => location.origin + location.pathname;
  const msg = (e) => (e ? { error: e.message || String(e) } : {});
  const uid = async () => (await sb.auth.getUser()).data.user?.id || null;

  window.NK_DATA = {
    mode: "supabase",
    client: sb,
    async session() { return (await sb.auth.getSession()).data.session; },
    onAuth(cb) {
      sb.auth.onAuthStateChange((ev) => {
        if (ev === "PASSWORD_RECOVERY") { try { sessionStorage.setItem("nk-recovery", "1"); } catch {} location.hash = "atur-sandi"; }
        cb(ev);
      });
    },
    async signIn(email, password) {
      const { error } = await sb.auth.signInWithPassword({ email, password });
      return error ? { error: "Email atau kata sandi salah." } : {};
    },
    async signUp({ email, password, name, role }) {
      const { data, error } = await sb.auth.signUp({
        email, password,
        options: { emailRedirectTo: base() + "#akun", data: { full_name: name, role, consent_at: new Date().toISOString() } },
      });
      if (error) return msg(error);
      return { needsConfirm: !data.session };
    },
    async resetPassword(email) {
      await sb.auth.resetPasswordForEmail(email, { redirectTo: base() + "#atur-sandi" });
      return {}; // sengaja tidak membocorkan apakah email terdaftar
    },
    async updatePassword(password) { return msg((await sb.auth.updateUser({ password })).error); },
    async signOut() { await sb.auth.signOut(); },
    async me() {
      const { data: { user } } = await sb.auth.getUser();
      if (!user) return null;
      const { data } = await sb.from("profiles").select("full_name,role").eq("id", user.id).single();
      return { id: user.id, email: user.email, full_name: data?.full_name || "", role: data?.role || "parent" };
    },
    async updateName(full_name) { return msg((await sb.from("profiles").update({ full_name }).eq("id", await uid())).error); },
    async subjects() { return (await sb.from("subjects").select("*").order("id")).data || []; },
    async teachers(f = {}) {
      let q = sb.from("public_teachers").select("*").order("verified", { ascending: false }).limit(200);
      if (f.kota) q = q.or(`city.ilike.%${f.kota.replace(/[,()%]/g, " ")}%,district.ilike.%${f.kota.replace(/[,()%]/g, " ")}%`);
      if (f.nama) q = q.ilike("full_name", `%${f.nama}%`);
      if (f.mapel) q = q.contains("subjects", [f.mapel]);
      if (f.mode) q = q.contains("mode", [f.mode]);
      if (f.gender) q = q.eq("gender", f.gender);
      return (await q).data || [];
    },
    async teacher(id) { return (await sb.from("public_teachers").select("*").eq("id", id).maybeSingle()).data; },
    async contact(id) { return (await sb.rpc("get_contact", { tid: id })).data?.[0] || null; },
    async report(teacher_id, reason) { return msg((await sb.from("reports").insert({ teacher_id, reporter_id: await uid(), reason })).error); },
    async favIds() {
      const id = await uid(); if (!id) return new Set();
      const { data } = await sb.from("favorites").select("teacher_id").eq("parent_id", id);
      return new Set((data || []).map((x) => x.teacher_id));
    },
    async toggleFav(teacher_id, on) {
      const parent_id = await uid();
      const r = on ? await sb.from("favorites").insert({ parent_id, teacher_id })
                   : await sb.from("favorites").delete().eq("parent_id", parent_id).eq("teacher_id", teacher_id);
      return msg(r.error);
    },
    async favTeachers() {
      const ids = [...(await this.favIds())];
      if (!ids.length) return [];
      return (await sb.from("public_teachers").select("*").in("id", ids)).data || [];
    },
    async myTeacher() {
      const { data } = await sb.from("teacher_profiles").select("*").eq("user_id", await uid()).maybeSingle();
      if (!data) return null;
      const { data: ts } = await sb.from("teacher_subjects").select("subject_id").eq("teacher_id", data.id);
      return { ...data, subject_ids: (ts || []).map((x) => x.subject_id) };
    },
    async createTeacher(city) {
      const { error } = await sb.from("teacher_profiles").insert({ user_id: await uid(), city });
      if (error) throw error;
      return this.myTeacher();
    },
    async saveTeacher(id, patch, subjectIds) {
      const { error } = await sb.from("teacher_profiles").update(patch).eq("id", id);
      if (error) return msg(error);
      await sb.from("teacher_subjects").delete().eq("teacher_id", id);
      if (subjectIds.length) {
        const r = await sb.from("teacher_subjects").insert(subjectIds.map((subject_id) => ({ teacher_id: id, subject_id })));
        if (r.error) return msg(r.error);
      }
      return {};
    },
    // Berkas disimpan di {uid}/nama.ext — aturan Storage hanya mengizinkan pemilik menulis foldernya sendiri.
    async upload(bucket, file, name) {
      const ext = (file.name.split(".").pop() || "bin").toLowerCase();
      const path = `${await uid()}/${name}.${ext}`;
      const { error } = await sb.storage.from(bucket).upload(path, file, { upsert: true, contentType: file.type });
      if (error) return { error: error.message };
      const url = bucket === "photos" ? sb.storage.from("photos").getPublicUrl(path).data.publicUrl + "?v=" + Date.now() : null;
      return { path, url };
    },
    async pending() {
      const { data } = await sb.from("teacher_profiles")
        .select("id,city,district,bio,sanad,education,experience,document_url,photo_url,gender,status,verified,created_at,profiles(full_name)")
        .eq("status", "pending").order("created_at");
      return (data || []).map((t) => ({ ...t, full_name: t.profiles?.full_name || "Tanpa nama" }));
    },
    async setTeacher(id, patch) { return msg((await sb.from("teacher_profiles").update(patch).eq("id", id)).error); },
    async docLink(path) { return (await sb.storage.from("documents").createSignedUrl(path, 300)).data?.signedUrl || null; },
    async reports() {
      const { data } = await sb.from("reports")
        .select("id,teacher_id,reason,created_at,teacher_profiles(profiles(full_name))")
        .eq("status", "open").order("created_at");
      return (data || []).map((r) => ({ ...r, teacher_name: r.teacher_profiles?.profiles?.full_name }));
    },
    async closeReport(id) { return msg((await sb.from("reports").update({ status: "closed" }).eq("id", id)).error); },
    async adminStats() {
      const c = async (q) => (await q).count || 0;
      return {
        approved: await c(sb.from("teacher_profiles").select("id", { count: "exact", head: true }).eq("status", "approved")),
        pending: await c(sb.from("teacher_profiles").select("id", { count: "exact", head: true }).eq("status", "pending")),
        reports: await c(sb.from("reports").select("id", { count: "exact", head: true }).eq("status", "open")),
        users: await c(sb.from("profiles").select("id", { count: "exact", head: true })),
      };
    },
    // Hapus akun tanpa server: hapus file sendiri di Storage, lalu panggil fungsi delete_my_account (04_netlify_statis.sql).
    async deleteAccount() {
      const id = await uid(); if (!id) return { error: "Belum masuk" };
      for (const bucket of ["photos", "documents"]) {
        const { data: files } = await sb.storage.from(bucket).list(id);
        if (files?.length) await sb.storage.from(bucket).remove(files.map((f) => `${id}/${f.name}`));
      }
      const { error } = await sb.rpc("delete_my_account");
      if (error) return msg(error);
      await sb.auth.signOut();
      return {};
    },
  };
})();
