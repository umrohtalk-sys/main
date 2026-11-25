---
name: feedback-versioned-filenames
description: "User wants every deliverable file timestamped and uniquely named, never overwritten"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 6aff7044-7278-40a1-854f-4081a92bb85e
  modified: 2026-08-25T13:46:49.033Z
---

Every file/deliverable sent to the user (zips, docs, exports, any project output) must use the naming format:

`{project-name}-{YYYYMMDD}-{HHMM}-{short-description}.{ext}`

- Get the real current timestamp via `date "+%Y%m%d-%H%M"` (don't guess/hardcode it).
- `short-description` is 2-4 words, hyphen-separated, summarizing what changed in that revision (e.g. `login-wajib`, `tambah-kuiz`, `fix-warna`).
- Never reuse a prior filename and never overwrite/delete a previous revision's file — each revision gets its own file so the user can always go back to an earlier version.
- Applies to every project, not just one specific app.

**Why:** User was confused when multiple revisions of `guru-claude-app.zip` used the identical filename, silently overwriting each other — they couldn't tell which version they had or find older ones. They explicitly asked (2026-08-25) for a permanent system: always-different filenames, always including a timestamp.

**How to apply:** Before calling SendUserFile (or any time a file is handed to the user), rename/copy the deliverable to this format first via Bash, then send that path. This is a standing rule for this user across all projects and sessions, not a one-off request.
