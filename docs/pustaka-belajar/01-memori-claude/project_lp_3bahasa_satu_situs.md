---
name: project-lp-3bahasa-satu-situs
description: "4 LP (Tools, Fundamental, Prompt Video, Mentoring) digabung jadi satu situs Netlify per LP dengan /id /ms /en + bahasa ikut negara — LIVE 11 Nov 2026"
metadata:
  node_type: memory
  type: project
  originSessionId: b9b500fd-f98e-4b1d-bbb5-6fb288d57d05
  modified: 2026-11-11T12:13:13.065Z
---

11 Nov 2026, semua LIVE. Pola sama dengan demoprompt: `/` → `_redirects` Country (id → /id/, my,bn → /ms/, lainnya termasuk SG → /en/); `?lang=xx` lama → /xx/. Aset dipakai bersama di root, aturan `/xx/* /:splat 200` (tidak dipaksa) mengisi file yang tidak ada di folder bahasa. `bahasa.js` = pemilih ID·MS·EN di header (di HP jadi tombol "EN ▾").

- Tools (Prompt Generator) → https://lptoolsid.edugamelabs.com (site 863ee805). lptoolsmy (21e7747d) kini cuma 302 ke lptoolsid.
- Fundamental (Masterclass AI) → https://lpindo.edugamelabs.com (93707aa2), aset per folder bahasa (skrin ID ≠ MS). lpmalay (60e78d2c) kini 302 ke lpindo.
- Prompt Video → https://prompt-video-ms.netlify.app (b86ac04c), js/{config,gaya,lp}.js per folder bahasa.
- Mentoring → https://mentoring1on1.edugamelabs.com (075bf425, juga mentoring-auzan.netlify.app).

Folder ~/Downloads/lp-{tools,fundamental,prompt-video,mentoring}-3bahasa-20261111-1857-id-ms-en. EN dibuat dengan menerjemahkan HTML jadi versi MS (alat tr.py: ekstrak potongan teks → kamus terjemahan → pasang balik); sumber jana lama (jana.py, rakit.mjs) BELUM punya EN, jadi revisi berikutnya: edit HTML di folder 3bahasa ini, atau terjemahkan ulang.
Harga DISETUJUI user 11 Nov: Prompt Video ID Rp 99.000, Mentoring ID Rp 350.000 (keduanya via WhatsApp). Mata uang ikut bahasa (11 Nov, permintaan user): ID Rupiah, MS Ringgit, EN USD — Tools USD 7, Fundamental USD 4 (ilustrasi produk USD 5/9), Video USD 7, Mentoring USD 25. Kliqoo tetap menagih RM, jadi EN Tools/Fundamental menulis "billed in MYR (RM 29 ≈ USD 7)". Video & Mentoring EN bayar via WA dengan teks USD. Video promo, gambar produk dan app Masterclass tetap berbahasa Melayu/Indonesia.

**Why:** user mau satu link per LP, bahasa otomatis ikut IP seperti demoprompt.
**How to apply:** uji geo `curl -sI -H "Cookie: nf_country=MY" <url>/`. Lihat [[project-kontak-wa-geo]] [[project-prompt-generator-demo]].
