---
name: braineye-3d
description: BrainEye 3D eye atlas (EN/BM) remade from github.com/ashemag/human-atlas, LIVE braineye-3d-eye-atlas.netlify.app, artifact 2ocok5g8QM9aMine3h5ohh
metadata:
  type: project
---
2026-10-05: ~/Downloads/braineye-3d-20261005-2030-eye-atlas-en-ms (static, no build; three 0.159 via importmap jsDelivr). 146 BodyParts3D meshes extracted by tools/extract-eye.py from a human-atlas clone (re-centred, cm, cleaned FJ1340/FJ1337 stray triangles). js/scene.js = port of human-atlas scene.tsx + eyeball pivots (gaze), style texture (selected/signal/lesion/dim), overlay paths. js/lessons.js: Module 1 gaze (normal, cn6L, inoR, cn3L), Module 5 visual (onR, chi, tractL, occL) + fields, eyeball tour. Netlify site id 87aa4065-4f09-4c6a-9837-5e7e767dfe77. Artifact uses models/eye.b64.txt (artifacts refuse .bin); loader falls back to it.

**Why:** user wanted human-atlas 3D code reused (not rewritten) and focused on the eye in the BrainEye concept, EN + Malay, Netlify folder + artifact.
**How to apply:** CN VI, nuclei, MLF, FEF route and optic radiation are not in BodyParts3D, drawn schematic; keep that label. Credits in ATTRIBUTION.md (CC BY 4.0 + MIT). Related [[braineye-glass]].
