/* NGAJI KIDS — ilustrasi SVG (tanpa file gambar eksternal).
   Semua warna memakai variabel CSS agar ikut tema terang/gelap. */
(function () {
  // Bintang delapan (khatam) — motif geometri Islam
  function star8(cx, cy, R, r) {
    const pts = [];
    for (let i = 0; i < 16; i++) {
      const a = (Math.PI / 8) * i - Math.PI / 2;
      const rad = i % 2 ? r : R;
      pts.push((cx + rad * Math.cos(a)).toFixed(2) + "," + (cy + rad * Math.sin(a)).toFixed(2));
    }
    return pts.join(" ");
  }

  const logo = (size = 40) => `
<svg width="${size}" height="${size}" viewBox="0 0 48 48" aria-hidden="true">
  <polygon points="${star8(24, 24, 23, 18.5)}" fill="var(--emerald)"/>
  <path d="M27.5 11.5a11 11 0 1 0 8.5 18 9 9 0 1 1-8.5-18z" fill="var(--gold)"/>
  <path d="M13 31.5c3.5-1.6 7-1.6 11 .4 4-2 7.5-2 11-.4v3.2c-3.5-1.6-7-1.6-11 .4-4-2-7.5-2-11-.4z" fill="var(--lime)"/>
</svg>`;

  // Maskot: Si Hilal (bulan sabit) membaca Al-Qur'an di atas rehal
  const mascot = (cls = "") => `
<svg class="${cls}" viewBox="0 0 220 220" aria-hidden="true">
  <defs>
    <mask id="hilalMask"><rect width="220" height="220" fill="#fff"/><circle cx="142" cy="74" r="64" fill="#000"/></mask>
    <linearGradient id="hilalG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFD877"/><stop offset="1" stop-color="#F0A92A"/></linearGradient>
  </defs>
  <circle cx="108" cy="100" r="80" fill="url(#hilalG)" mask="url(#hilalMask)"/>
  <ellipse cx="62" cy="96" rx="6" ry="8" fill="#2b1a05"/>
  <ellipse cx="84" cy="112" rx="6" ry="8" fill="#2b1a05"/>
  <circle cx="60" cy="93" r="2" fill="#fff"/><circle cx="82" cy="109" r="2" fill="#fff"/>
  <path d="M60 130q12 12 26 2" stroke="#2b1a05" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  <ellipse cx="48" cy="118" rx="8" ry="5" fill="#FF8FA3" opacity=".7"/>
  <ellipse cx="96" cy="138" rx="7" ry="4.5" fill="#FF8FA3" opacity=".7"/>
  <!-- rehal -->
  <path d="M58 206l64-44M162 206l-64-44" stroke="#8A5A2B" stroke-width="10" stroke-linecap="round"/>
  <!-- mushaf terbuka -->
  <path d="M60 150q50-18 50 6v34q-26-16-50-4z" fill="#fff"/>
  <path d="M160 150q-50-18-50 6v34q26-16 50-4z" fill="#fff"/>
  <path d="M60 150v36q24-12 50 4 26-16 50-4v-36" fill="none" stroke="var(--emerald)" stroke-width="5" stroke-linejoin="round"/>
  <path d="M70 162q16-6 30 0M70 172q16-6 30 0M120 162q16-6 30 0M120 172q16-6 30 0" stroke="#9cc9b3" stroke-width="3" fill="none" stroke-linecap="round"/>
  <polygon points="${star8(196, 34, 12, 6)}" fill="var(--lime)"/>
  <polygon points="${star8(26, 40, 7, 3.5)}" fill="var(--gold)"/>
</svg>`;

  // Ilustrasi hero: jendela mihrab, lentera, dan Si Hilal
  function hero() {
    let tiles = "";
    for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++)
      tiles += `<polygon points="${star8(40 + x * 64 + (y % 2) * 32, 60 + y * 64, 20, 15)}"/>`;
    return `
<svg class="hero-art" viewBox="0 0 520 560" role="img" aria-label="Ilustrasi Si Hilal membaca Al-Qur'an di bawah jendela masjid">
  <defs>
    <clipPath id="archClip"><path d="M50 560V250a210 210 0 0 1 420 0v310z"/></clipPath>
    <linearGradient id="archG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#13785A"/><stop offset="1" stop-color="#0A4A37"/></linearGradient>
  </defs>
  <path d="M-10 470C80 380 180 520 300 430S480 300 540 360" stroke="var(--lime)" stroke-width="64" fill="none" stroke-linecap="round"/>
  <path d="M30 560V250a230 230 0 0 1 460 0v310z" fill="var(--gold)"/>
  <path d="M50 560V250a210 210 0 0 1 420 0v310z" fill="url(#archG)"/>
  <g clip-path="url(#archClip)" fill="none" stroke="#2FA57A" stroke-width="2" opacity=".55">${tiles}</g>
  <g clip-path="url(#archClip)">
    <circle cx="260" cy="300" r="150" fill="#1C8F69" opacity=".35"/>
    <g class="lantern l1">
      <line x1="150" y1="40" x2="150" y2="130" stroke="#F5C04A" stroke-width="3"/>
      <path d="M134 130h32l6 14-6 44h-32l-6-44z" fill="#F5C04A"/>
      <path d="M140 146h20l-3 34h-14z" fill="#FFF3C4"/>
      <path d="M138 188h24l-12 16z" fill="#F5C04A"/>
    </g>
    <g class="lantern l2">
      <line x1="370" y1="40" x2="370" y2="100" stroke="#F5C04A" stroke-width="3"/>
      <path d="M356 100h28l5 12-5 38h-28l-5-38z" fill="#F5C04A"/>
      <path d="M361 114h18l-3 28h-12z" fill="#FFF3C4"/>
      <path d="M359 150h22l-11 14z" fill="#F5C04A"/>
    </g>
    <g transform="translate(130 250) scale(1.2)">${mascot().replace(/^\s*<svg[^>]*>|<\/svg>\s*$/g, "")}</g>
  </g>
  <polygon points="${star8(470, 90, 18, 8)}" fill="var(--lime)"/>
  <polygon points="${star8(40, 170, 11, 5)}" fill="var(--gold)"/>
  <polygon points="${star8(500, 250, 8, 4)}" fill="var(--gold)"/>
</svg>`;
  }

  // Avatar ilustrasi untuk pengajar tanpa foto: peci untuk ustadz, kerudung untuk ustadzah
  const AV_BG = ["#FFE08A", "#C9F0D8", "#D9CCFF", "#FFC9D6", "#BFE3FF", "#FFD9B0"];
  const HIJAB = ["#5B3FA8", "#0E5E45", "#D9486E", "#1D6FB8", "#B9721D", "#6C7A2B"];
  function avatar(gender, seed = 0) {
    const bg = AV_BG[seed % AV_BG.length], hj = HIJAB[(seed * 7 + 3) % HIJAB.length];
    const skin = ["#F6CFA8", "#E8B88E", "#D9A27A", "#F1C49C"][seed % 4];
    const face = `
      <ellipse cx="60" cy="62" rx="22" ry="24" fill="${skin}"/>
      <ellipse cx="52" cy="62" rx="2.6" ry="3.4" fill="#2b1a05"/><ellipse cx="68" cy="62" rx="2.6" ry="3.4" fill="#2b1a05"/>
      <path d="M53 73q7 6 14 0" stroke="#2b1a05" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <ellipse cx="46" cy="70" rx="4" ry="2.5" fill="#FF8FA3" opacity=".6"/><ellipse cx="74" cy="70" rx="4" ry="2.5" fill="#FF8FA3" opacity=".6"/>`;
    const body = gender === "P"
      ? `<path d="M60 26c-24 0-34 18-34 38 0 14 4 22 8 28H86c4-6 8-14 8-28 0-20-10-38-34-38z" fill="${hj}"/>
         <path d="M14 124q4-38 46-38t46 38z" fill="${hj}"/>${face}
         <path d="M37 58q2-24 23-24t23 24q-6-14-23-14t-23 14z" fill="${hj}"/>`
      : `<path d="M14 124q4-36 46-36t46 36z" fill="#FDFBF5"/>
         <path d="M52 88l8 12 8-12" fill="none" stroke="#C9B98F" stroke-width="3"/>
         <rect x="53" y="80" width="14" height="10" fill="${skin}"/>
         <ellipse cx="37" cy="64" rx="4" ry="6" fill="${skin}"/><ellipse cx="83" cy="64" rx="4" ry="6" fill="${skin}"/>${face}
         <path d="M40 44q0-14 20-14t20 14v4H40z" fill="#1F2A2E"/>
         <rect x="40" y="44" width="40" height="5" fill="#33454B"/>
         <path d="M46 80q14 10 28 0q-2 8-14 9q-12-1-14-9z" fill="#3a2a1a" opacity=".55"/>`;
    return `<svg viewBox="0 0 120 120" aria-hidden="true"><rect width="120" height="120" fill="${bg}"/>${body}</svg>`;
  }

  // Ikon jenis ajaran
  const ICON = {
    "Iqra": `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M6 16q13-6 26 2v36q-13-8-26-2z" fill="#3BB37E"/><path d="M58 16q-13-6-26 2v36q13-8 26-2z" fill="#2B9A6A"/><path d="M10 19q10-4 20 2v28q-10-6-20-2z" fill="#fff"/><path d="M54 19q-10-4-20 2v28q10-6 20-2z" fill="#fff"/><text x="20" y="38" font-family="Amiri,serif" font-size="16" text-anchor="middle" fill="#0E5E45">ا</text><text x="44" y="38" font-family="Amiri,serif" font-size="16" text-anchor="middle" fill="#0E5E45">ب</text></svg>`,
    "Tahsin": `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 14h40a8 8 0 0 1 8 8v18a8 8 0 0 1-8 8H26l-12 10v-10H8a8 8 0 0 1-8-8V22a8 8 0 0 1 8-8z" fill="#7C5CE0" transform="translate(4 0)"/><path d="M20 30q4-8 8 0t8 0 8 0" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
    "Tahfidz": `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 56S6 40 6 22a13 13 0 0 1 26-3 13 13 0 0 1 26 3c0 18-26 34-26 34z" fill="#FF6F91"/><polygon points="${star8(32, 28, 11, 5)}" fill="#FFE08A"/></svg>`,
    "Tajwid": `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="4" y="10" width="26" height="22" rx="6" fill="#2FB36F"/><rect x="34" y="10" width="26" height="22" rx="6" fill="#3D8BFD"/><rect x="4" y="36" width="26" height="22" rx="6" fill="#F0503C"/><rect x="34" y="36" width="26" height="22" rx="6" fill="#F5B82E"/><text x="17" y="28" font-family="Amiri,serif" font-size="15" text-anchor="middle" fill="#fff">نّ</text><text x="47" y="28" font-family="Amiri,serif" font-size="15" text-anchor="middle" fill="#fff">قْ</text><text x="17" y="54" font-family="Amiri,serif" font-size="15" text-anchor="middle" fill="#fff">آ</text><text x="47" y="54" font-family="Amiri,serif" font-size="15" text-anchor="middle" fill="#fff">مّ</text></svg>`,
    "Bahasa Arab": `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="2" y="8" width="40" height="28" rx="10" fill="#F5B82E"/><path d="M10 36l-2 10 10-10z" fill="#F5B82E"/><rect x="22" y="28" width="40" height="26" rx="10" fill="#0E8A62"/><path d="M54 54l2 8-10-8z" fill="#0E8A62"/><text x="22" y="28" font-family="Amiri,serif" font-size="15" text-anchor="middle" fill="#4a3000">أهلا</text><text x="42" y="47" font-family="Amiri,serif" font-size="14" text-anchor="middle" fill="#fff">شكرا</text></svg>`,
    "Doa Harian": `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="30" r="20" fill="none" stroke="#8A5A2B" stroke-width="3" stroke-dasharray="0.1 7.2" stroke-linecap="round" style="stroke-width:7"/><path d="M32 50v8" stroke="#8A5A2B" stroke-width="4" stroke-linecap="round"/><circle cx="32" cy="60" r="3" fill="#F5B82E"/><path d="M38 20a10 10 0 1 0 4 14 8 8 0 1 1-4-14z" fill="#F5B82E"/></svg>`,
    "Adab & Akhlak": `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="26" fill="#C8EE5A"/><path d="M20 28a4 4 0 0 1 8 0M36 28a4 4 0 0 1 8 0" stroke="#0E5E45" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M20 38q12 12 24 0" stroke="#0E5E45" stroke-width="4" fill="none" stroke-linecap="round"/><polygon points="${star8(52, 12, 9, 4)}" fill="#F5B82E"/></svg>`,
  };
  const icon = (name) => ICON[name] || `<svg viewBox="0 0 64 64" aria-hidden="true"><polygon points="${star8(32, 32, 28, 20)}" fill="#3BB37E"/></svg>`;

  const clip = `<svg class="clip" viewBox="0 0 24 56" aria-hidden="true"><path d="M8 50V12a5 5 0 0 1 10 0v34a8 8 0 0 1-16 0V16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`;
  const starBadge = (txt) => `<span class="starbadge"><svg viewBox="0 0 60 60" aria-hidden="true"><polygon points="${star8(30, 30, 29, 22)}"/></svg><b>${txt}</b></span>`;

  // Ikon garis kecil untuk UI
  const P = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    home: '<path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    pin: '<path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<path d="m5 12 5 5 9-10"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
    flag: '<path d="M5 21V4M5 4h12l-2 4 2 4H5"/>',
    wa: '<path d="M4 20l1.3-3.9A8 8 0 1 1 8 19.1z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.4-2-1-1 .8a4 4 0 0 1-2.1-2.1l.8-1-1-2z"/>',
    out: '<path d="M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4M10 16l-4-4 4-4M6 12h10"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 13h6M9 17h6"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  };
  const i = (name, size = 20) => `<svg class="ic" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ""}</svg>`;

  window.ART = { star8, logo, mascot, hero, avatar, icon, clip, starBadge, i };
})();
