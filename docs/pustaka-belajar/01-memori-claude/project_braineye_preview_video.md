---
name: braineye-preview-video
description: BrainEye Belajar Mata preview video 30s portrait BM, remake of 2 Klickpin refs (phone-in-hand build + blob-mascot onboarding), DOM film + own 120 BPM music
metadata:
  type: project
---
2026-10-07: folder ~/Documents/app matematika/video-braineye-belajar-mata-preview-20261007-2046-potret-bm; MP4 copied to ~/Downloads/braineye-belajar-mata-preview-20261007-2046-30s-potret-bm.mp4.
Engine: film.html + main.js (DOM/SVG, frame = fn of t, `__draw(t)`), timeline.js shared with music.mjs (synth 120 BPM F major + SFX → out/musik.wav −14 LUFS). Render: `OUT=x.mp4 node _render/render.mjs mp4` (~50 s), `sheet t1,t2 name` for contact sheets. Live preview: launch.json entry "braineye-preview-video" (node serve on 8871, scratchpad serve-braineye.mjs).
Ref 1 = QuickBasket (blue duotone hand + phone, screens build piece by piece, slide to "chat" screen = Kuiz); Ref 2 = Abode onboarding (white + pale clouds, Dela Gothic One titles, blob friends with white oval eyes, shrink-to-dot/grow). Mascots = real Brainy & Peek-e SVG from [[braineye-belajar-mata]] (parts .pup/.m-lid/.m-arm animated).
**Gotcha:** never set `transform-box:fill-box` on all SVG children — breaks ellipses with rotate(a cx cy) attributes (stray pink dots). Child `visibility:visible` overrides a hidden parent; hide layers with display:none.
