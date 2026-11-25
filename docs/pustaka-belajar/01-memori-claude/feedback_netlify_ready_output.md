---
name: feedback-netlify-ready-output
description: "User wants every generated web project delivered as an output that's easy to drag-and-drop deploy to Netlify"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 6aff7044-7278-40a1-854f-4081a92bb85e
  modified: 2026-08-25T13:48:15.757Z
---

Whenever building/generating a web app, landing page, or any browser-based deliverable, the output must default to a **plain static folder that can be dragged straight into https://app.netlify.com/drop** with zero extra steps.

Concretely, that means:
- No build step, no `npm install`, no bundler required to run it — plain HTML/CSS/JS files that work as-is when served statically.
- Split into a real folder structure (`index.html`, `css/`, `js/`, `img/`, etc.) rather than one giant single-file HTML, once the project has grown past a quick prototype — matches [[feedback_versioned_filenames]] in spirit: organized, not a dumped blob.
- Include a `netlify.toml` in the folder root (basic `[build] publish = "."` plus sane cache headers) so Netlify's defaults just work.
- Include a short README.txt/README.md in the folder with the literal drag-and-drop steps (open app.netlify.com/drop, drag the folder, get the link) — the user is not a web dev and re-asks this each time, so it must be spelled out per project, not assumed.
- Zip the whole folder for delivery, but the folder itself (once unzipped) must be upload-ready without the user editing anything first, unless a config file (like an API key placeholder) genuinely requires their input — in which case call that out explicitly and put it in one obvious place (e.g. a `config.js` at the top of `js/`).

**Why:** User (2026-08-25) explicitly asked that every generated file default to this — they repeatedly deploy these apps themselves via Netlify's drag-and-drop and have no interest in build tooling or servers.

**How to apply:** Default to this structure for any new web deliverable without being asked each time. If a requirement genuinely needs a backend/build step (e.g. real auth needing a server, a framework the user specifically requested), flag that tradeoff explicitly rather than silently deviating from the static/no-build default.
