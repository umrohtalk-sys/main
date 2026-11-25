---
name: braineye-glass
description: BrainEye Studio (UiTM neuro-ophthalmology lab) redesigned to glass + mascot blues, new animated SVG mascots Brainy & Peek-e
metadata:
  type: project
---
2026-10-04: source ~/Downloads/braineye-studio (single-file static app, Vercel braineye.vercel.app, AGENTS.md rules: bump CACHE in sw.js, no reword of medical content, check 390px). Redesign in ~/Downloads/braineye-studio-20261004-1340-glass-biru-maskot: overrides in `<style id="glass">`, mascot SVG from ~/Downloads/mascots_01a105a0-…svg split into animatable groups (script in scratchpad maskot.py, groups .brainy/.peeke, .pup/.m-iris gaze, .m-lid blink), interaction script last in index.html, icons re-rendered blue Peek-e, sw cache braineye-v17-glass. Preview LIVE 2026-10-04 at braineye-glass-preview.netlify.app (siteId 9f6fb39e-2279-43b0-96e4-2e4cedd287e3); production stays on Vercel.

**Why:** user wanted glassmorphism in the mascot SVG's blues, nicer fonts, mascots that move and react to clicks, click effects everywhere.
**How to apply:** topbar sticky only ≥881px (on phones it hid the diagram); keep clinical colours (signal/lesion/tract vars) untouched. Related: [[trieye-glassmorphic]].

Update 2026-10-04 14:00: light/dark switch added in ~/Downloads/braineye-studio-20261004-1356-glass-dark-light (button `[data-theme-toggle]` in hero + top bar, saved as localStorage `be-theme`, applied before paint in the NG head script, circular View Transition reveal, sw cache braineye-v18-dark-light). Pushed to the same Netlify preview on 2026-10-04.
