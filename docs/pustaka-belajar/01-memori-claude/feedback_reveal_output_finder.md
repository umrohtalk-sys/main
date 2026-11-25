---
name: feedback-reveal-output-finder
description: "After every generated deliverable, open its location in Finder and give clickable links to it"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 57dd7130-2629-42a2-9876-df6f92b5faf3
  modified: 2026-10-04T04:00:05.566Z
---

At the end of every task that produces output (folder, MP4, zip, HTML, image), run `open -R "<path>"` so Finder pops up with the file selected, and also give clickable `file://` links plus the plain path in the reply.

**Why:** 2026-10-04 the user asked "mana foldernya biar saya klik lgsg nongol" after only getting text paths, and asked for this on every future output.
**How to apply:** use Bash `open -R` (the reveal_path tool refuses paths outside the session folders, e.g. ~/Downloads). Do it for each deliverable, not for scratch files. See [[feedback_versioned_filenames]].
