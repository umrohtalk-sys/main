/* Pilih bahasa ID · MS · EN (11 Nov 2026). Satu situs, tiga folder: /id/ /ms/ /en/.
   Pengunjung yang membuka "/" diarahkan ikut negara oleh _redirects (Netlify).
   Di HP (<=560px) jadi tombol ringkas "EN ▾" yang membuka daftar. */
(function () {
  var s = document.currentScript, cur = (document.documentElement.lang || 'id').slice(0, 2);
  var L = [['id', 'ID', 'Bahasa Indonesia'], ['ms', 'MS', 'Bahasa Melayu'], ['en', 'EN', 'English']];
  var st = document.createElement('style');
  st.textContent =
    '.bhs-pil{position:relative;flex:none;margin-left:auto;z-index:9990;font:600 12px/1 system-ui,-apple-system,"Segoe UI",sans-serif;letter-spacing:.02em}' +
    '.bhs-pil.bhs-tetap{position:fixed;top:calc(10px + env(safe-area-inset-top));right:10px}' +
    '.bhs-list{display:inline-flex;gap:2px;padding:3px;border-radius:999px;background:rgba(255,255,255,.95);border:1px solid rgba(0,0,0,.08);box-shadow:0 2px 10px rgba(0,0,0,.10)}' +
    '.bhs-list a{display:block;padding:6px 9px;border-radius:999px;color:#4a4540;text-decoration:none}' +
    '.bhs-list a:hover{background:rgba(0,0,0,.06)}.bhs-list a[aria-current]{background:#191512;color:#fff}' +
    '.bhs-btn{display:none;align-items:center;gap:4px;height:34px;padding:0 10px;border-radius:999px;border:1px solid rgba(0,0,0,.12);background:rgba(255,255,255,.95);color:#191512;font:inherit;cursor:pointer}' +
    '.bhs-btn svg{width:12px;height:12px}' +
    '@media (max-width:560px){.bhs-btn{display:inline-flex}.bhs-list{display:none;position:absolute;right:0;top:calc(100% + 6px);flex-direction:column;border-radius:14px;padding:4px;min-width:190px}' +
    '.bhs-pil.buka .bhs-list{display:flex}.bhs-list a{border-radius:10px;padding:10px 12px;font-size:13px;white-space:nowrap}.bhs-list a::after{content:attr(title);font-weight:400;margin-left:8px;opacity:.7}}';
  document.head.appendChild(st);
  function pasang() {
    var nav = document.createElement('nav');
    nav.className = 'bhs-pil'; nav.setAttribute('aria-label', cur === 'en' ? 'Language' : 'Bahasa');
    var b = document.createElement('button'); b.type = 'button'; b.className = 'bhs-btn'; b.setAttribute('aria-expanded', 'false');
    b.innerHTML = cur.toUpperCase() + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
    b.setAttribute('aria-label', cur === 'en' ? 'Change language' : 'Ganti bahasa');
    b.addEventListener('click', function (e) { e.stopPropagation(); var o = nav.classList.toggle('buka'); b.setAttribute('aria-expanded', o ? 'true' : 'false'); });
    document.addEventListener('click', function () { nav.classList.remove('buka'); b.setAttribute('aria-expanded', 'false'); });
    var list = document.createElement('div'); list.className = 'bhs-list';
    L.forEach(function (x) {
      var a = document.createElement('a'); a.href = '/' + x[0] + '/' + location.search.replace(/[?&]geo=1/, '') + location.hash;
      a.textContent = x[1]; a.title = x[2]; a.hreflang = x[0];
      if (x[0] === cur) a.setAttribute('aria-current', 'true');
      a.addEventListener('click', function () { try { localStorage.setItem('bahasa', x[0]); } catch (e) {} if (window.clarity) window.clarity('event', 'ganti_bahasa_' + x[0]); });
      list.appendChild(a);
    });
    nav.appendChild(b); nav.appendChild(list);
    var sb = s && s.getAttribute('data-sebelum'), t = s && s.getAttribute('data-tempat');
    var el = sb ? document.querySelector(sb) : t && document.querySelector(t);
    if (el && sb) el.parentNode.insertBefore(nav, el);
    else if (el) el.appendChild(nav);
    else { nav.classList.add('bhs-tetap'); document.body.appendChild(nav); }
  }
  if (document.body) pasang(); else document.addEventListener('DOMContentLoaded', pasang);
})();
