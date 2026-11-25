---
name: trieye-glassmorphic
description: TriEye Pro/Self (ophthalmic triage, Hospital Al-Sultan Abdullah UiTM) remixed to glassmorphic style after Ada/Travexa references; Vercel folder
metadata:
  type: project
---
Source app: ~/Downloads/ophthalmic-triaging-tool (staff index.html + patient/ PWA + api/oncall.js for Vercel Blob). Remix 2026-10-04 in ~/Downloads/ophthalmic-triaging-tool-20261004-0923-glassmorphic: all styling lives in assets/trieye-glass.css (shared by both pages), content/logic unchanged, SW caches bumped (v46-glass / v32-glass). Footer has a giant "Hospital Al-Sultan Abdullah" watermark. LIVE on Netlify 2026-10-04 at trieye-glass-hasa.netlify.app (siteId 372d22b7-5168-4fd3-80c9-92116dc458a7); api/oncall.js only works on Vercel, so on-call roster is empty on Netlify.

**Why:** user asked to remix only the style (navy palette + TriEye logo kept), never the clinical content.
**How to apply:** future revisions edit the CSS file first; bump CACHE_NAME in both sw.js when assets change. See [[feedback_versioned_filenames]].
