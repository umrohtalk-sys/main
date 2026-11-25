---
name: project-lp-claude-pemula
description: "LP Claude untuk Pemula MS/ID (lpmalay/lpindo.edugamelabs.com) — kini dijana dari _build-lp-pemula-gemi/gen.py, layout gaya gemi + maskot Si Bulat"
metadata:
  node_type: memory
  type: project
  originSessionId: afbff795-1d14-4821-b99e-6ec9c570b815
  modified: 2026-09-25T21:21:13.154Z
---

LP penjualan app "Panduan Claude AI untuk Pemula". Live:
- MS → https://lpmalay.edugamelabs.com (Netlify dapper-frangollo-d76e60, siteId 60e78d2c-6f13-41ad-906b-0bfd46e05e86), beli di kliqoo, RM15
- ID → https://lpindo.edugamelabs.com (Netlify rad-gecko-1221fd, siteId 93707aa2-4f08-47f9-a8ad-36942f620406), beli di myr.id, Rp 55.000, "100+ terjual" + toast aktiviti tiap 10 s (teks generik, tanpa nama rekaan)

Sejak 2026-09-26 (folder `claude-pemula-landing-20260926-0413-layout-gemi/{ms,id}`) halaman DIJANA: `python3 _build-lp-pemula-gemi/gen.py <folder-output>` daripada `content_ms.py` / `content_id.py` + `style.css` + `app.js` (semua dimasukkan sebaris; satu index.html). Skrin app hidup diambil daripada LP lama `claude-pemula-landing-3bahasa-20260829`, ikon dari Flexline `~/Downloads/SVG icon pack untuk Claude Code/icons.json`. Preview: launch.json `lp-pemula-gemi` port 8841.

Layout ikut [[project-gemi-landing-app]] (hero HP + maskot "Tekan saya", bar tab terapung + teman bercakap ikut seksyen, kad terbalik, laluan bermaskot, grid modul bertapis, demo XP) tetapi palet Claude pemula (krim/clay #D97757/dakwat, Outfit + Plus Jakarta). Maskot = Si Bulat dari js/mascot.js app (disalin ke app.js, mata dipisah untuk kelip).
Seksyen baharu disorot: MS = "Bina Video dengan Claude Opus" (6 modul/30 pelajaran, [[project-aimc-section-video-opus]]); ID = "Jual Produk Digital ke Malaysia" (25 modul/197 pelajaran, [[project-aimc-section-jual-malaysia]]).

**Why:** user minta isi tak diubah banyak, hanya layout + maskot + sorotan materi baharu; mobile tak boleh "keseser" (html/body overflow-x hidden, touch-action pan-y pinch-zoom, diuji 0 elemen terkeluar pada 320px).
**How to apply:** ubah teks di content_*.py lalu jana semula ke folder bertarikh baharu; deploy dari DALAM folder ms/ atau id/ ([[reference-netlify-deploy-mcp]]). Statistik teras LP (10 modul/34 pelajaran) masih angka lama — app sebenar kini 11 modul/173 pelajaran/74 kuiz.

**Revisi ID 2026-09-26 09:09** (`claude-pemula-landing-20260926-0909-id-fokus-bikin-app/id`, live lpindo): user mahu fokus BIKIN APP. Seksyen utama kini `#bikin` — builder 9 langkah (Modul 11 workflow + contoh "Misi Matematik", viz per langkah, mini game, Master Prompt boleh salin, checklist). Malaysia diturunkan jadi kad kecil `bonus` dengan butang buka/tutup (`#mini-panel`). Kandungan di `C['feat']` (kind='build') & `C['bonus']` dalam content_id.py. MS tidak diubah (masih folder -0413). gen.py menjana kedua-dua bahasa — deploy hanya yang diminta.

**Revisi ID 2026-09-26 09:20** (`-0920-id-mobile-premium`, live lpindo): tajuk kini serif **Newsreader 500** (aksen italic) + Manrope untuk tajuk kecil (Outfit dibuang, "kurang bold, lebih premium"); telefon ≤640px: maskot dikecilkan (hero 62px dll), tab bawah ikon sahaja (aria-label), notif pembelian kecil 11.5px. style.css dikongsi — MS akan ikut gaya ini bila dijana semula (MS live masih versi -0413).

**09:23 — font dikembalikan ke Outfit** (user: serif Newsreader "kaku banget"). Live lpindo = `-0923-id-font-lama`: font lama + perubahan mobile 09:20 (maskot kecil, tab ikon, notif kecil). Jangan tukar font tajuk tanpa diminta.
