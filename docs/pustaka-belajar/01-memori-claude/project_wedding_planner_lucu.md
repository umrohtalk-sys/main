---
name: project-wedding-planner-lucu
description: Wedding planner app (Indonesian) in Cipta RBT visual style; folder, artifact, and how it was built
metadata:
  type: project
---

Wedding planner app, content modeled on a TikTok "Sahabat Wedding" screenshot (Dashboard, Peta Persiapan, Alur Pernikahan, Budget, Hadiah, Tamu, Akad & Resepsi, Seserahan, Akun) but styled with the Cipta RBT visual language (2.5px #3E63C7 outline, solid shadow, Fredoka + Nunito, square mascot with pink cheeks; pink #FF7BB0 as primary).

- Latest folder: `wedding-planner-lucu-20260928-2050-afi-virda-tanggal-custom/` (couple Afi & Virda — user wrote "Firda pakai V"; wedding date left empty, set from the countdown card or Akun). Previous: `wedding-planner-lucu-20260928-2042-gaya-rbt/` (index.html, css/, js/data.js, js/app.js, netlify.toml, README.txt) + zip of the same name. Not deployed yet.
- Artifact: https://claude.ai/artifact/MBANcg2D7EJJmroxBR1pFj — single-file bundle (CSS/JS inlined) built from the folder with a small Python script in scratchpad.
- Sample data (Afi & Virda, date empty, Jember) lives in js/data.js; state is saved in localStorage key `wedding-planner-afi-virda-v1`.
- Local preview: launch.json entry `wedding-planner-lucu` (node serve.mjs on port 8871; python http.server fails with PermissionError here).

Related: [[project-rbt-app-preview]], [[feedback-netlify-ready-output]], [[feedback-versioned-filenames]]
