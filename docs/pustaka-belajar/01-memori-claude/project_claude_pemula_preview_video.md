---
name: project-claude-pemula-preview-video
description: Video preview 45s ID app Panduan Claude AI untuk Pemula + section Jual ke Malaysia — Remotion, tanpa maskot gemi, gaya editorial beda dari Englisha
metadata:
  type: project
---

Pada 24 September 2026 dibuat video preview 45 s potret (ID) untuk app AI Masterclass ID ([[project-aimc-section-jual-malaysia]]), fokus section "Jual Produk Digital ke Malaysia".

- Folder: `app matematika/video-claude-pemula-jual-malaysia-20260924-1942-potret-id` (node_modules = symlink ke proyek gemi-tips, sama seperti [[project-englisha-preview-video]]).
- User minta: TANPA maskot gemi, musik sama dengan preview Englisha, gaya "lebih fresh" — jadi dipakai gaya editorial: blok warna palet app (krem/ink/oranye/ungu/hijau/mango), grid tipis, Space Grotesk + Space Mono, wipe per downbeat, pita ticker, simbol Claude berputar.
- Layar asli ditangkap `_aset/cap.mjs`: blok request ke clerk.edugamelabs (JANGAN filter kata "clerk" saja — itu ikut memblok js/clerk-auth.js), lalu set `AUTH.user={id:'tes'}`.
- Output dikirim: `~/Downloads/claude-pemula-jual-malaysia-preview-<ts>-video-45s-id.mp4`. Belum di-post/deploy.

**Why:** preview app berikutnya kemungkinan minta gaya "beda lagi"; resep & skrip tangkap layar ada di folder ini.
**How to apply:** untuk varian (mis. BM), salin folder bertanggal baru, ganti teks di `src/scenes/Scenes.tsx` dan tangkap ulang layar dari folder app versi bahasa itu.
