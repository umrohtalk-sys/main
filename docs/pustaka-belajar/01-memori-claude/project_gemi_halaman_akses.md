---
name: gemi-halaman-akses
description: Halaman akses ahli gemi (BM) untuk pembeli — folder gemi-akses-20260926-0343-halaman-akses, artifact ADAaQ5S, LINK_AKSES masih kosong, belum deploy
metadata:
  type: project
---
Dibina 2026-09-26. Halaman ringkas selepas beli: apa itu gemi + butang akses di tengah + amaran "jangan kongsi" (akses app dikawal Clerk, hanya e-mel pembeli). Folder `gemi-akses-20260926-0343-halaman-akses/`, artifact https://claude.ai/artifact/ADAaQ5S57mp4V4A6YpD9Cn, preview launch.json "gemi-akses" port 8798. Dijana `node _sumber/gen.mjs` (akses.css + akses.js); maskot SVG sebaris dari [[project-gemi-landing-app]] folder -maskot-baru (id gradient diberi awalan per maskot). noindex (meta + robots.txt + X-Robots-Tag).

**Why:** user mahu halaman khusus pembeli, gaya gemi dengan maskot, tanpa penjelasan lain.
**How to apply:** `LINK_AKSES` dalam gen.mjs masih `#akses` — tunggu URL app gemi yang dilindungi Clerk. Belum deploy; deploy hanya bila diminta.

## 28 Okt 2026 — LIVE
Folder terkini `gemi-akses-20261028-1850-link-gemiapp/` (LINK_AKSES = https://gemiapp.edugamelabs.com). LIVE https://gemi-akses-ahli.netlify.app (siteId d03c1b7b-f64b-47d7-81c4-867573b92d59). App gemi kini berlogin Clerk — lihat [[project-gemi-app-login-clerk]].
