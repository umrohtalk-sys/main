---
name: trieye-pokki
description: TriEye Pro + Self remake in Pokki layout / Aptivo colours / chunky duotone icons, BM+EN PWA, live trieye-pokki-hasa.netlify.app
metadata:
  type: project
---
Remake on 2026-10-07 from the user's Excalidraw board, which has three references: Pokki = UI/UX, Aptivo = colours, an icon board = icons.
- Folder: ~/Downloads/trieye-pokki-20261007-2005-bm-en. Pro is at `/`, Self at `/patient/`; both share `assets/`.
- LIVE at trieye-pokki-hasa.netlify.app (siteId 2979c40e-bd71-4300-9e7c-e9cd8df752a6).
- Clinical data in `assets/data.js` is generated verbatim from the original ~/Downloads/ophthalmic-triaging-tool. SELF_TEXT holds the 5 patient-worded questions.
- BM translations: `assets/ms.js`, keyed by the English string.
- The service worker VERSION in both sw.js files must be bumped whenever files change.
- Excalidraw share links (#json=id,key) can be decrypted with AES-GCM + inflate. Images come from firebasestorage `files/shareLinks/<id>/<fileId>` and are data URLs inside.

**Why:** the user wanted the layout to match the references 100%, but the clinical content must stay the department's original.
**How to apply:** for revisions, edit app.js/trieye.css; never reword data.js. See [[trieye-glassmorphic]] for the earlier remix.
