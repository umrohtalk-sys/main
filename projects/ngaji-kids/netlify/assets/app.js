/* NGAJI KIDS — aplikasi satu halaman (tanpa build). Rute memakai hash: #cari, #guru-<id>, #akun, dst. */
(function () {
  const D = window.NK_DATA, A = window.ART, ic = A.i;
  const app = document.getElementById("app");
  const st = { me: null, favs: new Set(), subjects: [], filter: {} };

  // ---------- util ----------
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const seed = (id) => [...String(id)].reduce((a, c) => a + c.charCodeAt(0), 0);
  const initial = (n) => String(n || "?").replace(/^Ustadz(ah)?\s+/i, "").trim().charAt(0).toUpperCase();
  const modeLabel = { offline: "Tatap muka", online: "Online" };
  const roleLabel = { parent: "Orang tua", teacher: "Pengajar", admin: "Admin" };
  const go = (h) => { if (location.hash.slice(1) === h) render(); else location.hash = h; };
  const tagColor = (s) => ["Iqra", "Tahsin", "Tahfidz", "Tajwid", "Bahasa Arab", "Doa Harian", "Adab & Akhlak"].indexOf(s) % 4;

  function toast(text, kind = "ok") {
    const el = document.createElement("div");
    el.className = "toast " + kind; el.setAttribute("role", "status"); el.textContent = text;
    $("#toasts").appendChild(el);
    setTimeout(() => el.classList.add("out"), 2800); setTimeout(() => el.remove(), 3300);
  }
  // Dialog buatan sendiri (alert/prompt bawaan browser diganti agar konsisten di HP)
  function modal(html, onMount) {
    const wrap = document.createElement("div");
    wrap.className = "modal-wrap";
    wrap.innerHTML = `<div class="modal" role="dialog" aria-modal="true"><button class="x" data-close aria-label="Tutup">${ic("x")}</button>${html}</div>`;
    document.body.appendChild(wrap);
    const close = () => { wrap.classList.add("out"); setTimeout(() => wrap.remove(), 200); };
    wrap.addEventListener("click", (e) => { if (e.target === wrap || e.target.closest("[data-close]")) close(); });
    document.addEventListener("keydown", function k(e) { if (e.key === "Escape") { close(); document.removeEventListener("keydown", k); } });
    onMount && onMount(wrap, close);
    const f = wrap.querySelector("input,textarea,button:not(.x)"); f && f.focus();
    return close;
  }

  const avatarHTML = (t, cls = "") => t.photo_url
    ? `<img class="av ${cls}" src="${esc(t.photo_url)}" alt="Foto ${esc(t.full_name)}" loading="lazy">`
    : `<span class="av ${cls}" role="img" aria-label="${esc(t.full_name)}">${A.avatar(t.gender, seed(t.id))}</span>`;
  const verBadge = (t) => t.verified ? `<span class="badge ver" title="Dokumen sudah diperiksa admin">${ic("shield", 14)} Terverifikasi</span>` : "";
  const tags = (arr) => (arr || []).map((s) => `<span class="tag t${tagColor(s)}">${esc(s)}</span>`).join("");

  function teacherCard(t) {
    const fav = st.favs.has(t.id);
    return `<article class="tcard">
      <div class="tc-top">
        <div class="tc-arch">${avatarHTML(t)}</div>
        <div class="tc-chips">${(t.mode || []).map((m) => `<span class="chip">${modeLabel[m] || esc(m)}</span>`).join("")}</div>
        <button class="fav ${fav ? "on" : ""}" data-fav="${esc(t.id)}" aria-pressed="${fav}" aria-label="${fav ? "Hapus dari favorit" : "Simpan ke favorit"}">${ic("heart", 18)}</button>
      </div>
      <div class="tc-body">
        <h3>${esc(t.full_name)}</h3>
        <p class="loc">${ic("pin", 15)} ${t.district ? esc(t.district) + ", " : ""}${esc(t.city)}</p>
        ${verBadge(t)}
        <div class="tags">${tags(t.subjects)}</div>
        <dl class="mini"><div><dt>Usia murid</dt><dd>${esc(t.age_range || "—")}</dd></div><div><dt>Biaya</dt><dd>${esc(t.fee_note || "Dibicarakan")}</dd></div></dl>
      </div>
      <div class="tc-foot">
        <span class="who">${t.gender === "P" ? "Ustadzah" : t.gender === "L" ? "Ustadz" : "Pengajar"}</span>
        <a class="btn sm" href="#guru-${esc(t.id)}">Lihat profil ${ic("arrow", 16)}</a>
      </div>
    </article>`;
  }

  // ---------- halaman ----------
  const V = {};

  V.beranda = async () => {
    const list = await D.teachers();
    const count = (s) => list.filter((t) => (t.subjects || []).includes(s)).length;
    const subj = st.subjects.length ? st.subjects.map((s) => s.name) : ["Iqra", "Tahsin", "Tahfidz", "Tajwid", "Bahasa Arab"];
    const DESC = { "Iqra": "Mengenal huruf hijaiyah dari nol", "Tahsin": "Memperbaiki bacaan dan makhraj", "Tahfidz": "Menghafal Al-Qur'an bertahap", "Tajwid": "Hukum bacaan yang benar", "Bahasa Arab": "Kosakata dan percakapan dasar", "Doa Harian": "Doa pendek untuk sehari-hari", "Adab & Akhlak": "Sopan santun ala Rasulullah ﷺ" };
    const cities = [...new Set(list.map((t) => t.city))].slice(0, 6);
    return `
    <section class="hero pattern">
      <div class="wrap hero-grid">
        <div class="hero-copy">
          <p class="bismillah" lang="ar" dir="rtl">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
          <h1>Yuk, mengaji jadi <mark>seru</mark> bareng ustadz &amp; ustadzah pilihan!</h1>
          <p class="lead">Temukan guru ngaji yang sabar dan ramah anak di kotamu. Baca profilnya, lalu hubungi langsung lewat WhatsApp. Tanpa biaya platform.</p>
          <form class="searchbar" id="heroSearch" role="search">
            <label class="sb-field">${ic("pin", 18)}<span class="sr">Kota</span><input id="hs-kota" name="kota" placeholder="Kota atau kecamatan" autocomplete="address-level2"></label>
            <label class="sb-field">${ic("book", 18)}<span class="sr">Jenis belajar</span>
              <select id="hs-mapel" name="mapel"><option value="">Semua jenis</option>${subj.map((s) => `<option>${esc(s)}</option>`).join("")}</select></label>
            <button class="btn" type="submit">${ic("search", 18)} Cari guru</button>
          </form>
          ${cities.length ? `<div class="quick"><span>Populer:</span>${cities.map((c) => `<button class="chip ghost" data-city="${esc(c)}">${esc(c)}</button>`).join("")}</div>` : ""}
        </div>
        <div class="hero-visual">
          ${A.hero()}
          <div class="float-note n1">${ic("check", 16)} <b>${list.length}</b> pengajar siap mengajar</div>
          <div class="float-note n2">Gratis, tanpa biaya platform</div>
        </div>
      </div>
    </section>

    <section class="ayat wrap">
      <p class="ar" lang="ar" dir="rtl">اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ</p>
      <p class="tr">“Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan.” <span>QS. Al-‘Alaq: 1</span></p>
    </section>

    <section class="wrap" id="jenis">
      <div class="panel pattern">
        <div class="panel-head"><h2>Mau belajar apa hari ini?</h2><p>Pilih jenis belajar, kami tampilkan pengajarnya.</p></div>
        <div class="stickers">
          ${subj.map((s, i) => `<button class="sticker s${i % 4}" data-mapel="${esc(s)}">
            <span class="clipwrap">${A.clip}</span>
            <span class="st-ic">${A.icon(s)}</span>
            <b>${esc(s)}</b><small>${esc(DESC[s] || "")}</small>
            <span class="count">${count(s)} pengajar</span>
          </button>`).join("")}
        </div>
      </div>
    </section>

    <section class="wrap sec">
      <div class="sec-head"><h2>Guru pilihan</h2><a class="btn ghost sm" href="#cari">Semua guru ${ic("arrow", 16)}</a></div>
      <div class="grid3">${list.slice(0, 3).map(teacherCard).join("") || `<div class="empty">Belum ada pengajar yang tampil. Jadilah yang pertama mendaftar.</div>`}</div>
    </section>

    <section class="wrap sec" id="cara">
      <div class="sec-head"><h2>Tiga langkah menemukan guru</h2></div>
      <ol class="steps">
        <li>${A.starBadge("١")}<h3>Cari guru</h3><p>Pilih kota, jenis belajar, ustadz atau ustadzah, tatap muka atau online.</p></li>
        <li>${A.starBadge("٢")}<h3>Kenali profilnya</h3><p>Baca pendidikan, pengalaman, sanad atau ijazah, jadwal, dan usia murid.</p></li>
        <li>${A.starBadge("٣")}<h3>Ngobrol lewat WhatsApp</h3><p>Sepakati jadwal, tempat, dan biaya langsung dengan pengajar.</p></li>
      </ol>
    </section>

    <section class="band">
      <div class="wrap band-grid">
        <div>
          <span class="pill">Untuk pengajar</span>
          <h2>Mengajar ngaji? Tampilkan profilmu, <mark>gratis</mark>.</h2>
          <ul class="checks">
            <li>${ic("check", 18)} Profil rapi berisi pendidikan, sanad, dan jadwal</li>
            <li>${ic("check", 18)} Nomor WhatsApp hanya terlihat oleh orang tua yang sudah masuk</li>
            <li>${ic("check", 18)} Badge Terverifikasi setelah admin memeriksa ijazah</li>
          </ul>
          <a class="btn dark" href="#daftar-pengajar">Daftar sebagai pengajar ${ic("arrow", 18)}</a>
        </div>
        <div class="band-art">${A.mascot("band-mascot")}</div>
      </div>
    </section>

    <section class="wrap sec">
      <div class="safety">
        <span class="safety-ic">${ic("shield", 28)}</span>
        <div><h2>Keselamatan anak nomor satu</h2>
        <p>Pertemuan pertama sebaiknya didampingi orang tua atau di tempat umum. Minta pengajar menunjukkan ijazah atau sanad, dan jangan mengirim uang sebelum kesepakatan jelas. Setiap profil punya tombol laporkan.</p></div>
      </div>
    </section>

    <section class="wrap sec" id="faq">
      <div class="sec-head"><h2>Pertanyaan yang sering ditanyakan</h2></div>
      <div class="faq">
        ${[
          ["Berapa biaya memakai NGAJI KIDS?", "Gratis untuk orang tua dan pengajar. NGAJI KIDS tidak memproses pembayaran. Biaya belajar disepakati langsung dengan pengajar."],
          ["Bagaimana cara menghubungi pengajar?", "Masuk atau buat akun orang tua, buka profil pengajar, lalu tekan Hubungi lewat WhatsApp. Nomor tidak ditampilkan di halaman publik."],
          ["Apa arti badge Terverifikasi?", "Admin sudah memeriksa dokumen ijazah atau sanad yang dikirim pengajar. Badge ini bukan jaminan mutu, jadi orang tua tetap perlu menilai sendiri."],
          ["Apakah data anak saya diminta?", "Tidak. Kami tidak meminta nama, foto, atau data pribadi anak. Akun dibuat oleh orang tua atau wali."],
          ["Saya pengajar. Kapan profil saya tampil?", "Setelah Anda melengkapi profil dan admin menyetujuinya. Status persetujuan terlihat di halaman Profil pengajar."],
        ].map(([q, a]) => `<details><summary>${esc(q)}<span class="plus">${ic("plus", 18)}</span></summary><p>${esc(a)}</p></details>`).join("")}
      </div>
    </section>

    <section class="wrap sec">
      <div class="cta pattern">
        <div><p class="ar small" lang="ar" dir="rtl">رَبِّ زِدْنِي عِلْمًا</p><h2>Mulai perjalanan mengaji si kecil hari ini</h2></div>
        <form class="cta-form" id="ctaSearch"><label class="sr" for="cta-kota">Kota</label><input id="cta-kota" placeholder="Ketik kotamu"><button class="btn gold" type="submit" aria-label="Cari">${ic("arrow", 20)}</button></form>
      </div>
    </section>`;
  };

  V.cari = async () => {
    const f = st.filter;
    const list = await D.teachers(f);
    const subj = st.subjects.map((s) => s.name);
    const seg = (name, opts) => `<div class="seg" role="group" aria-label="${name}">${opts.map(([v, l]) => `<button type="button" class="${(f[name] || "") === v ? "on" : ""}" data-seg="${name}" data-v="${v}">${l}</button>`).join("")}</div>`;
    return `<main class="wrap page">
      <div class="page-head"><h1>Cari guru ngaji</h1><p class="muted">${list.length} pengajar ditemukan${f.kota ? ` di sekitar <b>${esc(f.kota)}</b>` : ""}${f.mapel ? ` untuk <b>${esc(f.mapel)}</b>` : ""}.</p></div>
      <form class="filters" id="filters" role="search">
        <label class="sb-field">${ic("search", 18)}<span class="sr">Nama</span><input id="f-nama" name="nama" placeholder="Nama guru" value="${esc(f.nama)}"></label>
        <label class="sb-field">${ic("pin", 18)}<span class="sr">Kota</span><input id="f-kota" name="kota" placeholder="Kota / kecamatan" value="${esc(f.kota)}"></label>
        <button class="btn">Terapkan</button>
      </form>
      <div class="filter-row">
        <div class="chips-scroll" role="group" aria-label="Jenis belajar">
          <button class="chip ${!f.mapel ? "on" : ""}" data-mapelf="">Semua</button>
          ${subj.map((s) => `<button class="chip ${f.mapel === s ? "on" : ""}" data-mapelf="${esc(s)}">${esc(s)}</button>`).join("")}
        </div>
        <div class="segs">${seg("gender", [["", "Semua"], ["L", "Ustadz"], ["P", "Ustadzah"]])}${seg("mode", [["", "Semua"], ["offline", "Tatap muka"], ["online", "Online"]])}</div>
      </div>
      <div class="grid3">${list.map(teacherCard).join("")}</div>
      ${list.length ? "" : `<div class="empty">${A.mascot("empty-mascot")}<h3>Belum ada pengajar yang cocok</h3><p>Coba ubah kota, jenis belajar, atau pilih “Semua”.</p><button class="btn ghost" data-act="reset-filter">Hapus semua filter</button></div>`}
    </main>`;
  };

  V.guru = async (id) => {
    const t = await D.teacher(id);
    if (!t) return `<main class="wrap page"><div class="empty">${A.mascot("empty-mascot")}<h3>Profil tidak ditemukan</h3><p>Profil mungkin belum disetujui atau sudah disembunyikan.</p><a class="btn" href="#cari">Kembali ke pencarian</a></div></main>`;
    const fav = st.favs.has(t.id);
    const rows = [["Mengajar", (t.subjects || []).join(", ")], ["Jadwal", t.schedule], ["Usia murid", t.age_range], ["Mode", (t.mode || []).map((m) => modeLabel[m]).join(" dan ")], ["Pendidikan", t.education], ["Pengalaman", t.experience], ["Sanad atau ijazah", t.sanad], ["Biaya", t.fee_note]];
    return `<main class="wrap page">
      <a class="back" href="#cari">← Kembali ke pencarian</a>
      <div class="profile">
        <aside class="p-side">
          <div class="p-arch pattern">${avatarHTML(t, "lg")}</div>
          <h1>${esc(t.full_name)}</h1>
          <p class="loc">${ic("pin", 16)} ${t.district ? esc(t.district) + ", " : ""}${esc(t.city)}</p>
          <div class="p-badges">${verBadge(t)}${(t.mode || []).map((m) => `<span class="chip">${modeLabel[m]}</span>`).join("")}</div>
          <div class="tags">${tags(t.subjects)}</div>
          <div class="p-actions">
            <button class="btn wa" data-act="wa" data-id="${esc(t.id)}" data-name="${esc(t.full_name)}">${ic("wa", 20)} Hubungi lewat WhatsApp</button>
            <div class="row2">
              <button class="btn ghost" data-fav="${esc(t.id)}" aria-pressed="${fav}">${ic("heart", 18)} ${fav ? "Tersimpan" : "Simpan"}</button>
              <button class="btn ghost" data-act="lapor" data-id="${esc(t.id)}">${ic("flag", 18)} Laporkan</button>
            </div>
          </div>
        </aside>
        <section class="p-main">
          <div class="card"><h2>Cara mengajar</h2><p class="bio">${esc(t.bio || "Pengajar belum menulis deskripsi.")}</p></div>
          <div class="card"><h2>Detail</h2><dl class="info">${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v || "—")}</dd></div>`).join("")}</dl></div>
          <div class="safety sm"><span class="safety-ic">${ic("shield", 22)}</span><p><b>Tips keamanan.</b> Pertemuan pertama sebaiknya didampingi orang tua atau di tempat umum. Minta pengajar menunjukkan ijazah atau sanad. Badge Terverifikasi bukan jaminan mutu.</p></div>
        </section>
      </div>
      <div class="sticky-cta"><button class="btn wa" data-act="wa" data-id="${esc(t.id)}" data-name="${esc(t.full_name)}">${ic("wa", 20)} Hubungi lewat WhatsApp</button></div>
    </main>`;
  };

  function authShell(inner) {
    return `<main class="auth">
      <div class="auth-art pattern">
        <div>${A.mascot("auth-mascot")}
        <p class="ar" lang="ar" dir="rtl">طَلَبُ الْعِلْمِ فَرِيْضَةٌ عَلَى كُلِّ مُسْلِمٍ</p>
        <p class="tr">“Menuntut ilmu itu wajib atas setiap muslim.” <span>HR. Ibnu Majah</span></p></div>
      </div>
      <div class="auth-form">${inner}</div>
    </main>`;
  }

  V.masuk = async (mode = "masuk", peran = "parent") => {
    if (st.me && mode !== "lupa") { go("akun"); return ""; }
    const title = { masuk: "Assalamu’alaikum!", daftar: "Buat akun baru", lupa: "Atur ulang kata sandi" }[mode];
    const sub = { masuk: "Masuk untuk menghubungi pengajar dan menyimpan favorit.", daftar: "Gratis. Pilih peran Anda terlebih dahulu.", lupa: "Kami kirim tautan atur ulang ke email Anda." }[mode];
    const demo = D.mode === "demo" && mode === "masuk" ? `
      <div class="demo-box"><p><b>Mode demo.</b> Coba langsung dengan akun contoh:</p>
      ${D.demoAccounts.map((a) => `<button class="demo-acc" data-demo="${a.id}"><b>${a.label}</b><small>${a.desc}</small>${ic("arrow", 18)}</button>`).join("")}</div>` : "";
    return authShell(`
      ${mode !== "lupa" ? `<div class="tabs" role="tablist"><a role="tab" class="${mode === "masuk" ? "on" : ""}" href="#masuk">Masuk</a><a role="tab" class="${mode === "daftar" ? "on" : ""}" href="#daftar">Daftar</a></div>` : ""}
      <h1>${title}</h1><p class="muted">${sub}</p>
      <form id="authForm" class="form" data-mode="${mode}" novalidate>
        ${mode === "daftar" ? `
          <fieldset class="roles"><legend>Saya adalah</legend>
            <label class="role"><input type="radio" name="peran" value="parent" ${peran === "parent" ? "checked" : ""}><span><b>Orang tua / wali</b><small>Mencari guru ngaji untuk anak</small></span></label>
            <label class="role"><input type="radio" name="peran" value="teacher" ${peran === "teacher" ? "checked" : ""}><span><b>Pengajar</b><small>Ustadz atau ustadzah</small></span></label>
          </fieldset>
          <label class="fld"><span>Nama lengkap</span><input id="a-nama" name="nama" autocomplete="name" required></label>` : ""}
        <label class="fld"><span>Email</span><input id="a-email" name="email" type="email" autocomplete="email" required></label>
        ${mode !== "lupa" ? `<label class="fld"><span>Kata sandi</span><span class="pw"><input id="a-pw" name="password" type="password" minlength="8" autocomplete="${mode === "daftar" ? "new-password" : "current-password"}" placeholder="Minimal 8 karakter" required><button type="button" class="eye" data-act="pw" aria-label="Lihat kata sandi">${ic("eye", 18)}</button></span></label>` : ""}
        ${mode === "daftar" ? `<label class="check"><input id="a-consent" type="checkbox" required> <span>Saya berusia 18 tahun ke atas dan setuju dengan <a href="#privasi">Kebijakan Privasi</a> dan <a href="#syarat">Syarat Penggunaan</a>.</span></label>` : ""}
        <button class="btn block" type="submit">${mode === "masuk" ? "Masuk" : mode === "daftar" ? "Buat akun" : "Kirim tautan"}</button>
        <p class="msg" role="status"></p>
      </form>
      <div class="auth-links">${mode === "masuk" ? `<a href="#lupa">Lupa kata sandi?</a>` : `<a href="#masuk">Sudah punya akun? Masuk</a>`}</div>
      ${demo}`);
  };
  V.daftar = () => V.masuk("daftar");
  V["daftar-pengajar"] = () => V.masuk("daftar", "teacher");
  V.lupa = () => V.masuk("lupa");

  V["atur-sandi"] = async () => {
    let ok = false; try { ok = sessionStorage.getItem("nk-recovery") === "1"; } catch {}
    if (!ok && D.mode !== "demo") return authShell(`<h1>Kata sandi baru</h1><p class="muted">Buka halaman ini dari tautan di email atur ulang kata sandi.</p><a class="btn" href="#lupa">Minta tautan baru</a>`);
    return authShell(`<h1>Kata sandi baru</h1><form id="pwForm" class="form"><label class="fld"><span>Kata sandi baru</span><input id="np" name="password" type="password" minlength="8" autocomplete="new-password" required></label><button class="btn block">Simpan</button><p class="msg" role="status"></p></form>`);
  };

  function dashShell(active, inner) {
    const r = st.me.role;
    const items = [["akun", "user", "Akun saya"], ["favorit", "heart", "Guru favorit"]];
    if (r === "teacher") items.splice(1, 0, ["profil", "edit", "Profil pengajar"]);
    if (r === "admin") items.push(["admin", "grid", "Panel admin"]);
    return `<main class="wrap dash">
      <nav class="dash-nav" aria-label="Menu akun">
        <div class="dash-me">${A.logo(36)}<div><b>${esc(st.me.full_name)}</b><small>${roleLabel[r]}</small></div></div>
        ${items.map(([h, i, l]) => `<a href="#${h}" class="${active === h ? "on" : ""}">${ic(i, 18)} ${l}</a>`).join("")}
        <button class="out" data-act="logout">${ic("out", 18)} Keluar</button>
        <div class="dash-card pattern">${A.mascot("dash-mascot")}<p>“Sebaik-baik kalian adalah yang belajar Al-Qur'an dan mengajarkannya.”<small>HR. Bukhari</small></p></div>
      </nav>
      <section class="dash-main">${inner}</section>
    </main>`;
  }
  const needLogin = () => { go("masuk"); return ""; };

  V.akun = async () => {
    if (!st.me) return needLogin();
    const m = st.me;
    const tp = m.role === "teacher" ? await D.myTeacher() : null;
    return dashShell("akun", `
      <div class="dash-head"><h1>Ahlan, ${esc(m.full_name.split(" ")[0])}!</h1><p class="muted">Hanya Anda yang dapat melihat dan mengubah data akun ini.</p></div>
      ${m.role === "teacher" ? `<div class="status-card ${tp ? tp.status : "none"}">
        <div><b>${!tp ? "Profil pengajar belum dibuat" : tp.status === "approved" ? "Profil tampil di pencarian" : tp.status === "rejected" ? "Profil ditolak admin" : "Menunggu verifikasi admin"}</b>
        <small>${!tp ? "Buat profil agar orang tua bisa menemukan Anda." : "Lengkapi profil agar orang tua lebih yakin."}</small></div>
        <a class="btn sm" href="#profil">${tp ? "Edit profil" : "Buat profil"}</a></div>` : ""}
      <div class="cards2">
        <form class="card form" id="nameForm"><h2>Data akun</h2>
          <p class="kv"><span>Peran</span><b>${roleLabel[m.role]}</b></p><p class="kv"><span>Email</span><b>${esc(m.email)}</b></p>
          <label class="fld"><span>Nama</span><input id="ak-nama" name="nama" value="${esc(m.full_name)}" required></label>
          <button class="btn">Simpan nama</button></form>
        <form class="card form" id="pwForm"><h2>Ganti kata sandi</h2>
          <label class="fld"><span>Kata sandi baru</span><input id="ak-pw" name="password" type="password" minlength="8" autocomplete="new-password" required></label>
          <button class="btn ghost">Ganti kata sandi</button><p class="msg" role="status"></p></form>
      </div>
      <div class="card danger-zone"><h2>Hapus akun</h2><p class="muted">Profil, foto, dokumen, dan favorit Anda akan dihapus permanen dan tidak bisa dikembalikan.</p>
        <button class="btn danger" data-act="hapus-akun">${ic("trash", 18)} Hapus akun saya</button></div>
      ${D.mode === "demo" ? `<p class="muted small">Mode demo: <button class="linkbtn" data-act="reset-demo">kembalikan data contoh</button>.</p>` : ""}`);
  };

  V.favorit = async () => {
    if (!st.me) return needLogin();
    const list = await D.favTeachers();
    return dashShell("favorit", `<div class="dash-head"><h1>Guru favorit</h1><p class="muted">Pengajar yang Anda simpan untuk dihubungi nanti.</p></div>
      <div class="grid2">${list.map(teacherCard).join("")}</div>
      ${list.length ? "" : `<div class="empty">${A.mascot("empty-mascot")}<h3>Belum ada guru favorit</h3><p>Tekan ikon hati di kartu pengajar untuk menyimpannya.</p><a class="btn" href="#cari">Cari guru</a></div>`}`);
  };

  V.profil = async () => {
    if (!st.me) return needLogin();
    if (st.me.role !== "teacher") return dashShell("profil", `<div class="empty"><h3>Halaman ini untuk pengajar</h3><p>Akun Anda terdaftar sebagai ${roleLabel[st.me.role]}.</p></div>`);
    const t = await D.myTeacher();
    if (!t) return dashShell("profil", `<div class="dash-head"><h1>Buat profil pengajar</h1><p class="muted">Mulai dari kota tempat Anda mengajar. Detail lain bisa dilengkapi setelahnya.</p></div>
      <form class="card form narrow" id="createForm"><label class="fld"><span>Kota tempat mengajar</span><input id="c-kota" name="city" required placeholder="mis. Jakarta Selatan"></label><button class="btn">Buat profil</button><p class="msg" role="status"></p></form>`);
    const fields = ["photo_url", "gender", "city", "district", "bio", "education", "experience", "sanad", "schedule", "age_range", "whatsapp", "document_url"];
    const done = fields.filter((k) => t[k]).length + ((t.mode || []).length ? 1 : 0) + (t.subject_ids.length ? 1 : 0);
    const pct = Math.round((done / (fields.length + 2)) * 100);
    const v = (k) => esc(t[k] ?? "");
    const fld = (k, l, ph = "", type = "text") => `<label class="fld"><span>${l}</span><input id="p-${k}" name="${k}" type="${type}" value="${v(k)}" placeholder="${ph}"></label>`;
    const statusTxt = t.status === "approved" ? "Tampil di pencarian" : t.status === "rejected" ? "Ditolak admin" : "Menunggu verifikasi";
    return dashShell("profil", `
      <div class="dash-head"><h1>Profil pengajar</h1>
        <div class="progress-card"><div class="ring" style="--p:${pct}"><b>${pct}%</b></div><div><b>Kelengkapan profil</b><small>Status: <span class="st ${t.status}">${statusTxt}</span>${t.verified ? " · Terverifikasi" : ""}</small></div>
        ${t.status === "approved" ? `<a class="btn ghost sm" href="#guru-${esc(t.id)}">Lihat profil publik</a>` : ""}</div></div>
      <form id="profilForm" class="pform">
        <div class="card"><h2>Foto dan identitas</h2>
          <div class="photo-row"><div class="p-arch sm pattern" id="photoPrev">${avatarHTML({ ...t, full_name: st.me.full_name }, "lg")}</div>
            <label class="upload">${ic("upload", 20)}<span><b>Unggah foto</b><small>JPG/PNG/WebP, maks 2 MB. Wajah jelas, berpakaian sopan.</small></span><input id="p-photo" name="photo" type="file" accept="image/jpeg,image/png,image/webp"></label></div>
          <div class="fgrid">
            <label class="fld"><span>Jenis kelamin</span><select id="p-gender" name="gender"><option value="">Pilih</option><option value="L" ${t.gender === "L" ? "selected" : ""}>Laki-laki (Ustadz)</option><option value="P" ${t.gender === "P" ? "selected" : ""}>Perempuan (Ustadzah)</option></select></label>
            ${fld("city", "Kota", "Jakarta Selatan")}${fld("district", "Kecamatan", "Tebet")}${fld("age_range", "Usia murid", "4–12 tahun")}
          </div></div>
        <div class="card"><h2>Yang diajarkan</h2>
          <div class="chipset">${st.subjects.map((s) => `<label class="pick"><input type="checkbox" name="subj" value="${s.id}" ${t.subject_ids.includes(s.id) ? "checked" : ""}><span>${A.icon(s.name)}${esc(s.name)}</span></label>`).join("")}</div>
          <h3 class="sub">Mode mengajar</h3>
          <div class="chipset">${["offline", "online"].map((m) => `<label class="pick"><input type="checkbox" name="mode" value="${m}" ${(t.mode || []).includes(m) ? "checked" : ""}><span>${modeLabel[m]}</span></label>`).join("")}</div></div>
        <div class="card"><h2>Latar belakang</h2><div class="fgrid">
          ${fld("education", "Pendidikan", "S1 PAI / Pondok ...")}${fld("experience", "Pengalaman", "5 tahun di TPQ ...")}${fld("sanad", "Sanad atau ijazah", "Syahadah Metode Ummi")}${fld("schedule", "Jadwal tersedia", "Senin–Jumat ba'da Ashar")}${fld("fee_note", "Catatan biaya", "Dibicarakan langsung")}</div>
          <label class="fld"><span>Cara Anda mengajar anak</span><textarea id="p-bio" name="bio" rows="4" placeholder="Ceritakan metode dan suasana belajar Anda">${v("bio")}</textarea></label></div>
        <div class="card"><h2>Kontak <small class="muted">(hanya terlihat oleh pengguna yang sudah masuk)</small></h2><div class="fgrid">
          ${fld("whatsapp", "WhatsApp", "6281234567890", "tel")}${fld("email", "Email kontak (opsional)", "", "email")}${fld("social_url", "Media sosial (opsional)", "https://instagram.com/...", "url")}</div></div>
        <div class="card"><h2>Dokumen verifikasi</h2>
          <label class="upload">${ic("doc", 20)}<span><b>${t.document_url ? "Ganti dokumen" : "Unggah ijazah atau sanad"}</b><small>Gambar atau PDF, maks 5 MB. Hanya dilihat admin, tidak pernah ditampilkan ke publik.</small></span><input id="p-doc" name="doc" type="file" accept="image/jpeg,image/png,image/webp,application/pdf"></label>
          ${t.document_url ? `<p class="muted small">${ic("check", 14)} Dokumen sudah terunggah.</p>` : ""}</div>
        <div class="savebar"><span class="msg" role="status"></span><button class="btn">Simpan profil</button></div>
      </form>`);
  };

  V.admin = async () => {
    if (!st.me) return needLogin();
    if (st.me.role !== "admin") return dashShell("admin", `<div class="empty"><h3>Halaman ini hanya untuk admin</h3></div>`);
    const [s, pend, reps] = await Promise.all([D.adminStats(), D.pending(), D.reports()]);
    return dashShell("admin", `
      <div class="dash-head"><h1>Panel admin</h1><p class="muted">Persetujuan pengajar dan laporan ditegakkan oleh aturan database, bukan hanya halaman ini.</p></div>
      <div class="stats">
        <div class="stat s0"><b>${s.pending}</b><span>Menunggu verifikasi</span></div>
        <div class="stat s1"><b>${s.approved}</b><span>Pengajar tampil</span></div>
        <div class="stat s2"><b>${s.reports}</b><span>Laporan terbuka</span></div>
        <div class="stat s3"><b>${s.users}</b><span>Akun terdaftar</span></div>
      </div>
      <h2 class="sec-t">Menunggu verifikasi</h2>
      ${pend.length ? pend.map((t) => `<div class="card arow">
        ${avatarHTML(t)}<div class="arow-body"><b>${esc(t.full_name)}</b><small>${t.district ? esc(t.district) + ", " : ""}${esc(t.city)}</small>
        <p>${esc(t.bio || "Belum ada deskripsi.")}</p><p class="muted small">Pendidikan: ${esc(t.education || "—")} · Sanad: ${esc(t.sanad || "—")}</p></div>
        <div class="arow-act">
          ${t.document_url ? `<button class="btn ghost sm" data-act="doc" data-path="${esc(t.document_url)}">${ic("doc", 16)} Dokumen</button>` : `<span class="muted small">Tanpa dokumen</span>`}
          <button class="btn sm" data-act="approve" data-id="${esc(t.id)}">Setujui</button>
          <button class="btn gold sm" data-act="verify" data-id="${esc(t.id)}">Setujui + Terverifikasi</button>
          <button class="btn danger sm" data-act="reject" data-id="${esc(t.id)}">Tolak</button></div></div>`).join("") : `<div class="card muted">Tidak ada pendaftar baru.</div>`}
      <h2 class="sec-t">Laporan terbuka</h2>
      ${reps.length ? reps.map((r) => `<div class="card arow">
        <span class="safety-ic">${ic("flag", 22)}</span><div class="arow-body"><b>${esc(r.teacher_name || "Profil")}</b><small>${new Date(r.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</small><p>${esc(r.reason)}</p></div>
        <div class="arow-act"><a class="btn ghost sm" href="#guru-${esc(r.teacher_id)}">Lihat profil</a>
          <button class="btn danger sm" data-act="hide" data-id="${esc(r.teacher_id)}" data-rid="${esc(r.id)}">Sembunyikan profil</button>
          <button class="btn ghost sm" data-act="close-report" data-rid="${esc(r.id)}">Tutup laporan</button></div></div>`).join("") : `<div class="card muted">Tidak ada laporan.</div>`}`);
  };

  let legalCache = null;
  async function legalMD() {
    if (legalCache) return legalCache;
    if (window.NK_LEGAL_MD) return (legalCache = window.NK_LEGAL_MD);
    try { legalCache = await (await fetch("content/hukum.md", { cache: "no-cache" })).text(); } catch { legalCache = ""; }
    return legalCache;
  }
  async function legal(from, to, title, other) {
    const md = await legalMD();
    const a = md.indexOf(from), b = md.indexOf(to);
    const body = a < 0 ? "" : md.slice(a, b > a ? b : undefined).split("\n").slice(1);
    const inline = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\[([^\]]+)\]/g, '<mark class="todo" title="Perlu dilengkapi">[$1]</mark>');
    let html = "", list = [], toc = [];
    const flush = () => { if (list.length) { html += `<ul>${list.map((x) => `<li>${inline(x)}</li>`).join("")}</ul>`; list = []; } };
    body.forEach((l) => {
      if (l.startsWith("- ")) return list.push(l.slice(2));
      flush();
      if (l.startsWith("### ")) { const id = "s" + toc.length; toc.push([id, l.slice(4)]); html += `<h2 id="${id}">${inline(l.slice(4))}</h2>`; }
      else if (l.trim()) html += `<p>${inline(l)}</p>`;
    });
    flush();
    const intro = md.split("\n## ")[0].trim();
    return `<main class="wrap page legal">
      <div class="legal-head pattern"><h1>${title}</h1><p>${inline(intro && !intro.startsWith("##") ? intro : "")}</p><a class="chip" href="#${other[0]}">${other[1]} →</a></div>
      <div class="legal-grid">
        <nav class="toc" aria-label="Daftar isi">${toc.map(([id, t]) => `<a href="#${id}" data-scroll="${id}">${esc(t)}</a>`).join("")}</nav>
        <article class="prose">${html || "<p>Isi halaman ini belum diisi.</p>"}</article>
      </div></main>`;
  }
  V.privasi = () => legal("## Bagian A", "## Bagian B", "Kebijakan Privasi", ["syarat", "Syarat Penggunaan"]);
  V.syarat = () => legal("## Bagian B", "## Bagian C", "Syarat Penggunaan", ["privasi", "Kebijakan Privasi"]);

  // ---------- aksi ----------
  async function hubungi(id, name) {
    if (!st.me) { toast("Masuk dulu untuk melihat kontak pengajar.", "info"); return go("masuk"); }
    const c = await D.contact(id);
    const wa = String(c?.whatsapp || "").replace(/\D/g, "").replace(/^0/, "62");
    if (!wa) return toast("Pengajar belum mencantumkan WhatsApp.", "err");
    const text = encodeURIComponent(`Assalamu’alaikum ${name}, saya orang tua dari NGAJI KIDS. Saya ingin menanyakan jadwal mengaji untuk anak saya.`);
    modal(`<h2>Hubungi ${esc(name)}</h2>
      <p class="muted">Pesan pembuka sudah kami siapkan. Percakapan berlangsung di WhatsApp, di luar NGAJI KIDS.</p>
      <p class="kv"><span>WhatsApp</span><b class="mono">+${esc(wa)}</b></p>
      ${c.email ? `<p class="kv"><span>Email</span><b>${esc(c.email)}</b></p>` : ""}
      <a class="btn wa block" href="https://wa.me/${esc(wa)}?text=${text}" target="_blank" rel="noopener">${ic("wa", 20)} Buka WhatsApp</a>
      <button class="btn ghost block" data-copy="+${esc(wa)}">Salin nomor</button>`, (w) => {
      w.querySelector("[data-copy]").addEventListener("click", (e) => {
        navigator.clipboard?.writeText(e.currentTarget.dataset.copy).then(() => toast("Nomor disalin."), () => toast("Salin manual: " + e.currentTarget.dataset.copy, "info"));
      });
    });
  }
  function lapor(id) {
    if (!st.me) { toast("Masuk dulu untuk melaporkan profil.", "info"); return go("masuk"); }
    modal(`<h2>Laporkan profil</h2><p class="muted">Admin akan meninjau laporan Anda. Identitas pelapor tidak ditampilkan ke pengajar.</p>
      <form id="repForm" class="form"><div class="chipset">${["Informasi palsu", "Perilaku tidak pantas", "Nomor tidak aktif", "Penipuan"].map((r) => `<button type="button" class="chip" data-r="${r}">${r}</button>`).join("")}</div>
      <label class="fld"><span>Alasan</span><textarea id="rep-reason" rows="3" required></textarea></label><button class="btn danger block">Kirim laporan</button></form>`, (w, close) => {
      w.querySelectorAll("[data-r]").forEach((b) => b.addEventListener("click", () => { w.querySelector("textarea").value = b.dataset.r + ". "; w.querySelector("textarea").focus(); }));
      w.querySelector("form").addEventListener("submit", async (e) => {
        e.preventDefault();
        const reason = w.querySelector("textarea").value.trim(); if (!reason) return;
        const r = await D.report(id, reason);
        close(); toast(r.error ? "Laporan gagal dikirim." : "Laporan diterima. Jazakallahu khairan.", r.error ? "err" : "ok");
      });
    });
  }
  function hapusAkun() {
    modal(`<h2>Hapus akun permanen?</h2><p class="muted">Ketik <b>HAPUS</b> untuk konfirmasi. Tindakan ini tidak bisa dibatalkan.</p>
      <form class="form"><input id="del-confirm" autocomplete="off" placeholder="HAPUS"><button class="btn danger block">Hapus akun saya</button><p class="msg" role="status"></p></form>`, (w, close) => {
      w.querySelector("form").addEventListener("submit", async (e) => {
        e.preventDefault();
        if (w.querySelector("input").value.trim() !== "HAPUS") return (w.querySelector(".msg").textContent = "Ketik HAPUS dengan huruf besar.");
        const r = await D.deleteAccount();
        if (r.error) return (w.querySelector(".msg").textContent = r.error);
        close(); st.me = null; toast("Akun dihapus. Semoga Allah memudahkan urusan Anda."); go("beranda");
      });
    });
  }

  document.addEventListener("click", async (e) => {
    const t = e.target.closest("[data-fav],[data-act],[data-mapel],[data-city],[data-mapelf],[data-seg],[data-demo],[data-scroll]");
    if (!t) return;
    const d = t.dataset;
    if (d.scroll) { e.preventDefault(); document.getElementById(d.scroll)?.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    if (d.fav) {
      if (!st.me) { toast("Masuk dulu untuk menyimpan favorit.", "info"); return go("masuk"); }
      const on = !st.favs.has(d.fav);
      const r = await D.toggleFav(d.fav, on);
      if (r && r.error) return toast("Gagal menyimpan favorit.", "err");
      on ? st.favs.add(d.fav) : st.favs.delete(d.fav);
      toast(on ? "Disimpan ke favorit." : "Dihapus dari favorit.");
      return render(true);
    }
    if (d.mapel !== undefined && t.classList.contains("sticker")) { st.filter = { mapel: d.mapel }; return go("cari"); }
    if (d.city) { st.filter = { kota: d.city }; return go("cari"); }
    if (d.mapelf !== undefined) { st.filter.mapel = d.mapelf; return render(true); }
    if (d.seg) { st.filter[d.seg] = d.v; return render(true); }
    if (d.demo) { await D.demoLogin(d.demo); return; }
    const act = d.act;
    if (act === "wa") return hubungi(d.id, d.name);
    if (act === "lapor") return lapor(d.id);
    if (act === "logout") { await D.signOut(); toast("Sampai jumpa. Fii amanillah!"); return go("beranda"); }
    if (act === "hapus-akun") return hapusAkun();
    if (act === "reset-demo") { await D.resetDemo(); toast("Data contoh dikembalikan."); return go("beranda"); }
    if (act === "reset-filter") { st.filter = {}; return render(true); }
    if (act === "menu") return document.body.classList.toggle("menu-open");
    if (act === "pw") { const inp = t.parentElement.querySelector("input"); inp.type = inp.type === "password" ? "text" : "password"; return; }
    if (act === "doc") {
      const url = await D.docLink(d.path);
      if (!url) return toast(D.mode === "demo" ? "Mode demo: dokumen contoh tidak tersedia." : "Dokumen tidak bisa dibuka.", "info");
      return modal(`<h2>Dokumen verifikasi</h2><p class="muted">Tautan berlaku 5 menit.</p><a class="btn block" href="${esc(url)}" target="_blank" rel="noopener">Buka dokumen</a>`);
    }
    const adminAct = { approve: { status: "approved" }, verify: { status: "approved", verified: true }, reject: { status: "rejected" } }[act];
    if (adminAct) { const r = await D.setTeacher(d.id, adminAct); toast(r.error ? r.error : act === "reject" ? "Pendaftar ditolak." : "Pengajar disetujui.", r.error ? "err" : "ok"); return render(true); }
    if (act === "hide") { await D.setTeacher(d.id, { status: "rejected" }); await D.closeReport(d.rid); toast("Profil disembunyikan."); return render(true); }
    if (act === "close-report") { await D.closeReport(d.rid); toast("Laporan ditutup."); return render(true); }
  });

  document.addEventListener("submit", async (e) => {
    const f = e.target, id = f.id;
    const known = ["heroSearch", "ctaSearch", "filters", "authForm", "pwForm", "nameForm", "createForm", "profilForm"];
    if (!known.includes(id)) return;
    e.preventDefault();
    const fd = new FormData(f), msg = f.querySelector(".msg");
    const say = (t) => { if (msg) msg.textContent = t; };
    const btn = f.querySelector("button[type=submit],button:not([type])");
    if (id === "heroSearch") { st.filter = { kota: fd.get("kota").trim(), mapel: fd.get("mapel") }; return go("cari"); }
    if (id === "ctaSearch") { st.filter = { kota: $("#cta-kota").value.trim() }; return go("cari"); }
    if (id === "filters") { Object.assign(st.filter, { nama: fd.get("nama").trim(), kota: fd.get("kota").trim() }); return render(true); }
    btn && (btn.disabled = true);
    try {
      if (id === "authForm") {
        const mode = f.dataset.mode, email = String(fd.get("email") || "").trim(), password = String(fd.get("password") || "");
        if (!f.checkValidity()) { f.reportValidity(); return; }
        if (mode === "lupa") { await D.resetPassword(email); return say("Jika email terdaftar, tautan atur ulang sudah dikirim. Cek kotak masuk Anda."); }
        if (mode === "masuk") { const r = await D.signIn(email, password); if (r.error) return say(r.error); toast("Assalamu’alaikum, selamat datang!"); return; }
        const role = fd.get("peran") || "parent";
        pendingRoute = role === "teacher" ? "profil" : "akun";
        const r = await D.signUp({ email, password, name: String(fd.get("nama")).trim(), role });
        if (r.error) return say(r.error);
        if (r.needsConfirm) return say("Akun dibuat. Cek email Anda untuk konfirmasi, lalu masuk.");
        toast("Akun berhasil dibuat. Barakallahu fiik!");
        return;
      }
      if (id === "pwForm") {
        const r = await D.updatePassword(String(fd.get("password")));
        if (r.error) return say(r.error);
        try { sessionStorage.removeItem("nk-recovery"); } catch {}
        f.reset(); toast("Kata sandi diganti."); if (location.hash === "#atur-sandi") go("akun"); return;
      }
      if (id === "nameForm") { const r = await D.updateName(String(fd.get("nama")).trim()); if (!r.error) st.me.full_name = String(fd.get("nama")).trim(); toast(r.error ? "Gagal menyimpan." : "Nama disimpan.", r.error ? "err" : "ok"); return render(true); }
      if (id === "createForm") {
        try { await D.createTeacher(String(fd.get("city")).trim()); toast("Profil dibuat. Lengkapi detailnya ya."); return render(true); }
        catch (err) { return say("Gagal: " + err.message); }
      }
      if (id === "profilForm") {
        const t = await D.myTeacher();
        const patch = {};
        ["gender", "city", "district", "bio", "education", "experience", "sanad", "schedule", "age_range", "whatsapp", "email", "social_url", "fee_note"].forEach((k) => (patch[k] = String(fd.get(k) ?? "").trim() || null));
        if (!patch.city) return say("Kota wajib diisi.");
        if (patch.whatsapp) patch.whatsapp = patch.whatsapp.replace(/\D/g, "").replace(/^0/, "62");
        patch.mode = fd.getAll("mode");
        const photo = fd.get("photo"), doc = fd.get("doc");
        if (photo && photo.size) {
          if (photo.size > 2 * 1024 * 1024) return say("Foto maksimal 2 MB.");
          say("Mengunggah foto…"); const u = await D.upload("photos", photo, "foto");
          if (u.error) return say("Foto gagal diunggah: " + u.error); patch.photo_url = u.url;
        }
        if (doc && doc.size) {
          if (doc.size > 5 * 1024 * 1024) return say("Dokumen maksimal 5 MB.");
          say("Mengunggah dokumen…"); const u = await D.upload("documents", doc, "ijazah");
          if (u.error) return say("Dokumen gagal diunggah: " + u.error); patch.document_url = u.path;
        }
        const r = await D.saveTeacher(t.id, patch, fd.getAll("subj").map(Number));
        if (r.error) return say("Gagal menyimpan: " + r.error);
        toast("Profil tersimpan. Barakallahu fiik!"); return render(true);
      }
    } finally { btn && (btn.disabled = false); }
  });

  document.addEventListener("change", (e) => {
    if (e.target.id === "p-photo" && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      $("#photoPrev").innerHTML = `<img class="av lg" src="${url}" alt="Pratinjau foto">`;
    }
    if (e.target.type === "file") {
      const s = e.target.closest(".upload")?.querySelector("small");
      if (s && e.target.files[0]) s.textContent = "Dipilih: " + e.target.files[0].name;
    }
  });

  // ---------- kerangka & router ----------
  function chrome(route) {
    const r = route.split("-")[0];
    const logged = !!st.me;
    $("#navlinks").innerHTML = `
      <a href="#cari" class="${r === "cari" ? "on" : ""}">Cari guru</a>
      <a href="#beranda" data-jump="jenis">Jenis belajar</a>
      <a href="#beranda" data-jump="cara">Cara kerja</a>
      ${logged ? "" : `<a href="#daftar-pengajar">Jadi pengajar</a>`}
      ${st.me?.role === "admin" ? `<a href="#admin" class="${r === "admin" ? "on" : ""}">Admin</a>` : ""}`;
    $("#navcta").innerHTML = logged
      ? `<a class="btn sm" href="#akun">${ic("user", 16)} ${esc(st.me.full_name.split(" ")[0])}</a>`
      : `<a class="btn ghost sm hide-sm" href="#daftar">Daftar</a><a class="btn sm" href="#masuk">Masuk</a>`;
    const tab = (h, i, l, on) => `<a href="#${h}" class="${on ? "on" : ""}">${ic(i, 22)}<span>${l}</span></a>`;
    $("#tabbar").innerHTML = tab("beranda", "home", "Beranda", r === "beranda") + tab("cari", "search", "Cari", r === "cari" || r === "guru") +
      tab("favorit", "heart", "Favorit", r === "favorit") + tab(logged ? "akun" : "masuk", "user", logged ? "Akun" : "Masuk", ["akun", "profil", "admin", "masuk", "daftar"].includes(r));
    $("#demoflag").hidden = D.mode !== "demo";
  }

  let pendingRoute = null, renderSeq = 0, jumpTo = null;
  async function render(keepScroll) {
    const seq = ++renderSeq;
    let h = decodeURIComponent(location.hash.slice(1)) || "beranda";
    if (/^s\d+$/.test(h)) return; // anchor daftar isi halaman hukum
    let view, arg;
    if (h.startsWith("guru-")) { view = V.guru; arg = h.slice(5); }
    else view = V[h] || V.beranda;
    chrome(h);
    document.body.classList.remove("menu-open");
    if (!keepScroll) app.classList.add("loading");
    const y = scrollY;
    let html;
    try { html = await view(arg); } catch (err) { console.error(err); html = `<main class="wrap page"><div class="empty"><h3>Terjadi kendala</h3><p>${esc(err.message)}</p><button class="btn" onclick="location.reload()">Muat ulang</button></div></main>`; }
    if (seq !== renderSeq || html === "") return;
    app.innerHTML = html;
    app.classList.remove("loading");
    const titles = { cari: "Cari guru", masuk: "Masuk", daftar: "Daftar", akun: "Akun saya", profil: "Profil pengajar", admin: "Panel admin", favorit: "Guru favorit", privasi: "Kebijakan Privasi", syarat: "Syarat Penggunaan" };
    document.title = (titles[h] ? titles[h] + " · " : "") + "NGAJI KIDS";
    if (jumpTo) { document.getElementById(jumpTo)?.scrollIntoView({ block: "start" }); jumpTo = null; }
    else if (keepScroll) scrollTo(0, y); else scrollTo(0, 0);
  }

  document.addEventListener("click", (e) => {
    const j = e.target.closest("[data-jump]");
    if (!j) return;
    if ((location.hash.slice(1) || "beranda") === "beranda") { e.preventDefault(); document.getElementById(j.dataset.jump)?.scrollIntoView({ behavior: "smooth" }); }
    else jumpTo = j.dataset.jump;
  }, true);

  async function refreshMe() {
    st.me = (await D.session()) ? await D.me() : null;
    st.favs = st.me ? await D.favIds() : new Set();
  }

  async function start() {
    $("#brand").innerHTML = A.logo(38) + `<span>NGAJI<b>KIDS</b></span>`;
    st.subjects = await D.subjects();
    await refreshMe();
    D.onAuth(async () => {
      const was = st.me?.id;
      await refreshMe();
      const h = location.hash.slice(1);
      if (st.me && st.me.id !== was && ["masuk", "daftar", "daftar-pengajar", ""].includes(h)) { const r = pendingRoute || "akun"; pendingRoute = null; return go(r); }
      pendingRoute = null;
      render(true);
    });
    addEventListener("hashchange", () => render());
    render();
  }
  start();
})();
