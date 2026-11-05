// Membuat satu file HTML mandiri (mode demo) untuk pratinjau Claude Artifact.
// Pakai: node tools/build-artifact.mjs [output.html]
import fs from "node:fs";
import path from "node:path";
const root = path.join(path.dirname(new URL(import.meta.url).pathname), "..", "netlify");
const r = (p) => fs.readFileSync(path.join(root, p), "utf8");
const out = process.argv[2] || path.join(root, "..", "prototipe-artifact.html");
const html = r("index.html");
const body = html.slice(html.indexOf("<body>") + 6, html.indexOf("<!-- 1. Isi kunci"));
const font = html.match(/<link rel="stylesheet" href="https:\/\/fonts[^>]+>/)[0];
const js = (s) => s.replace(/<\/script/gi, "<\\/script");
const page = `<title>NGAJI KIDS</title>
<meta name="claude:viewport-fit-sides" content="cover">
${font}
<style>${r("assets/style.css")}</style>
${body}
<script>window.NGAJI_CONFIG = {}; window.NK_LEGAL_MD = ${JSON.stringify(r("content/hukum.md"))};</script>
<script>${js(r("assets/art.js"))}</script>
<script>${js(r("assets/data-demo.js"))}</script>
<script>${js(r("assets/app.js"))}</script>
`;
fs.writeFileSync(out, page);
console.log("OK", out, (page.length / 1024).toFixed(0) + " KB");
