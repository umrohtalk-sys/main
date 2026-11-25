---
name: project-cpns-kemenag
description: App CPNS Kemenag — klon struktur app Akidah, folder cpns-kemenag, situs Netlify cpns-kemenag.netlify.app
metadata:
  type: project
---

App **CPNS Kemenag** (folder `cpns-kemenag/`) dibuat 1 September 2026 sebagai klon
struktur 1:1 dari app Akidah (`akidah/`) — layar, komponen, dan UI Kit identik,
hanya materi yang diganti jadi TWK/TIU/TKP/struktur Kemenag/SKB dalam Bahasa Indonesia.

Situs Netlify: `cpns-kemenag` · https://cpns-kemenag.netlify.app
siteId `86930257-8b46-4799-92f6-6f2801142548`

**Why:** kalau diminta ubah salah satu app, perubahan struktural biasanya perlu
diterapkan ke keduanya agar tetap sinkron.

**How to apply:** patch bug layout di `akidah/` dan `cpns-kemenag/` sekaligus;
regenerasi UI Kit lewat skrip generator (bukan edit manual file .dc.html).
Deploy ikut [[reference-netlify-deploy-mcp]].
