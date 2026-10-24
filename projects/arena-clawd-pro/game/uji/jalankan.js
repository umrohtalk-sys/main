// node uji/jalankan.js <folder game> (server lokal di port 8765 dari akar repo) · menjalankan uji/senario.json di HP 390x844 dan desktop 1280x800, menyimpan tangkapan ke bukti/
const { chromium } = require('playwright'); const fs = require('fs');
const DIR = process.argv[2], BASE = 'http://127.0.0.1:8765/' + DIR + '/';
(async () => {
  const sc = JSON.parse(fs.readFileSync(DIR + '/uji/senario.json', 'utf8')), b = await chromium.launch(), rep = [];
  for (const vp of [['hp', 390, 844], ['desktop', 1280, 800]]) for (const s of sc) {
    const p = await b.newPage({ viewport: { width: vp[1], height: vp[2] } }), errs = [];
    p.on('pageerror', e => errs.push(e.message));
    let ok = true;
    for (const st of s.langkah) {
      try {
        if (st.buka) { await p.goto(BASE + st.buka); await p.waitForTimeout(500); }
        else if (st.tunggu) await p.waitForTimeout(st.tunggu);
        else if (st.klik) await p.click(st.klik);
        else if (st.nilai) await p.evaluate(st.nilai);
        else if (st.jangka) { if (!(await p.evaluate(st.jangka))) { ok = false; rep.push(`GAGAL ${vp[0]} ${s.nama}: ${st.jangka}`); } }
        else if (st.tangkap) await p.screenshot({ path: `${DIR}/bukti/${s.nama}-${vp[0]}-${st.tangkap}.png` });
      } catch (e) { ok = false; rep.push(`GALAT ${vp[0]} ${s.nama}: ${e.message.split('\n')[0]}`); }
    }
    if (errs.length) { ok = false; rep.push(`JS ${vp[0]} ${s.nama}: ${errs.join(' | ')}`); }
    rep.push(`${ok ? 'LULUS' : 'GAGAL'} · ${vp[0]} ${vp[1]}×${vp[2]} · ${s.nama}`);
    await p.close();
  }
  // sampul 960x600
  const p = await b.newPage({ viewport: { width: 1100, height: 760 } });
  await p.goto(BASE + 'index.html'); await p.waitForTimeout(500); await p.click('[data-uji=mula]');
  await p.evaluate("window.__game.gerak(0.7,-0.7), window.__game.langkah(3.6), window.__game.gerak(0,0), window.__game.langkah(13), window.__game.xp(700), window.__game.skill(1), window.__game.langkah(0.12)");
  await p.waitForTimeout(150); await (await p.$('.stage')).screenshot({ path: '' + DIR + '/bukti/sampul-mentah.png' });
  await b.close();
  console.log(rep.join('\n'));
  fs.writeFileSync(DIR + '/bukti/laporan.md', '# Laporan uji main otomatis Arena Clawd Pro\n\nDijalankan dengan Chromium headless (Playwright) dari `uji/senario.json`, di HP 390×844 dan desktop 1280×800.\n\n' + rep.map(r => '- ' + r).join('\n') + '\n');
})();
