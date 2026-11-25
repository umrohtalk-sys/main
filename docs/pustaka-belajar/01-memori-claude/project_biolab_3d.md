---
name: biolab-3d
description: "BioLab 3D Life Lab — biology version of BrainEye Vision Lab (cell, DNA/chromatin, helicase, neuron), EN+BM, dark/light, LIVE biolab-3d-life-lab.netlify.app"
metadata:
  node_type: memory
  type: project
  originSessionId: 56ae3ae7-901d-447c-bf01-a61a018b4e09
  modified: 2026-10-08T13:44:06.533Z
---

2026-10-08: ~/Downloads/biolab-3d-20261008-1958-life-lab-en-ms, Netlify site id 19085789-f3e5-4a90-816a-4324de9abf41 (LIVE biolab-3d-life-lab.netlify.app). Built from 5 user poster refs (chromatin, animal cell exploded, DNA helicase, neuron, living cell "city"), for Malaysian college students.
New engine (js/engine.js, per-mesh explode = organelle tower) + procedural models js/models/{cell,dna,helicase,neuron}.js; lesson structure js/content.js; all text in js/i18n/en.js + ms.js (same keys). URL params ?lang=ms&theme=light. Local preview launch.json "biolab-3d" port 8841.

**Why:** user wanted [[braineye-vision-lab]]'s 3D approach reused but for biology, bilingual, night/day mode.
**How to apply:** redeploy from that folder with the same site id; text edits go in both i18n files.
