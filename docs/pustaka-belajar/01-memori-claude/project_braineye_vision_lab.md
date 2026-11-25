---
name: braineye-vision-lab
description: "BrainEye 3D Vision Lab (EN) — procedural high-detail 3D eye + BodyParts3D brain, LIVE braineye-3d-vision-lab.netlify.app"
metadata:
  node_type: memory
  type: project
  originSessionId: 65a73f25-9473-4042-b33a-dd7b74e57d2a
  modified: 2026-10-05T22:22:16.091Z
---

2026-10-06: ~/Downloads/braineye-3d-20261006-0437-vision-lab-en, Netlify site id c1ceb79f-7e68-47cd-8e63-22737535d150 (LIVE). Remake of [[braineye-3d]] from 8 user reference posters (exploded eye, cross-section, anatomy guide, visual pathway, brain processing, amazing facts).
5 chapters: Explore (exploded/cut/muscles/lids), Anatomy guide 12 steps, Pathway (lesion lab, PLR), Brain (streams/areas/disorders), Wonders; quiz each. English only.
js/hero.js = procedural eye (cut mode rotates root -90° z so nerve lies on cut plane; explode trims shells to cups via drawRange), js/micro.js = Retina Lab, js/content.js = all text, js/atlas.js+pathway.js = BodyParts3D (models/vision.* from tools/extract-vision.py, adds cortex gyri). Local preview: launch.json "braineye-vision-lab" port 8831.

**Why:** user wanted the old atlas code reused but far more detailed, explodable like the posters, step-by-step lessons.
**How to apply:** redeploy from that folder with the same site id; text edits go in content.js.
