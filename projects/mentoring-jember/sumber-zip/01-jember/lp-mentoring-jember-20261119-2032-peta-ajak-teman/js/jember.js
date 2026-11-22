/* Bagian khusus LP Jember: tab "pilih minat" (HP contoh + daftar praktik) dan tombol salin nomor WA. Isi di js/data.js. */
(function(){
'use strict';
var D=window.LP;
var $=function(s,r){return (r||document).querySelector(s)};
function ikon(){ if(window.lucide) lucide.createIcons({attrs:{'stroke-width':1.9}}); }
function waLink(t){ return 'https://wa.me/'+D.WA+'?text='+encodeURIComponent(t); }

var tab=$('#minatTab'),hp=$('#minatHp'),isi=$('#minatIsi'),aktif=0,auto=null;
D.MINAT.forEach(function(m,i){
  var b=document.createElement('button'); b.type='button'; b.className='mt-b'; b.setAttribute('role','tab'); b.id='minat-'+m.id;
  b.innerHTML='<span class="ic"><i data-lucide="'+m.ikon+'"></i></span>'+m.nama;
  b.addEventListener('click',function(){ pilih(i); clearInterval(auto); });
  tab.appendChild(b);
});
function pilih(i){
  aktif=i; var m=D.MINAT[i];
  Array.prototype.forEach.call(tab.children,function(b,j){ b.classList.toggle('on',j===i); b.setAttribute('aria-selected',j===i); });
  hp.innerHTML='<b>'+m.app+'</b><small>'+m.sub+'</small>'+m.baris.map(function(r){return '<div class="hp-r"><span class="ic"><i data-lucide="'+r[0]+'"></i></span>'+r[1]+'</div>'}).join('')+'<div class="hp-t">'+m.tombol+'</div>';
  isi.innerHTML='<small class="mi-siapa">'+m.siapa+'</small><h3>Minat '+m.nama.toLowerCase()+': yang kita praktikkan</h3><ul>'+
    m.praktik.map(function(p){return '<li><span class="ic"><i data-lucide="check"></i></span><span>'+p+'</span></li>'}).join('')+'</ul>'+
    '<a class="btn btn-wa mi-bt" href="'+waLink('Halo Kak Auzan, saya dari Jember. Minat saya di bidang '+m.nama.toLowerCase()+'. Bisa mentoring 1-on-1 untuk bikin '+m.app.toLowerCase()+' atau yang mirip?')+'" target="_blank" rel="noopener">Tanya materi '+m.nama.toLowerCase()+'<span class="ic"><i data-lucide="arrow-right"></i></span></a>';
  hp.parentNode.classList.remove('ganti'); void hp.offsetWidth; hp.parentNode.classList.add('ganti');
  ikon();
}
pilih(0);
var RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!RM) auto=setInterval(function(){ pilih((aktif+1)%D.MINAT.length); },4200);

/* salin nomor WA */
var toast=$('#toast'),tt=null;
function tunjuk(t){ toast.lastElementChild.textContent=t; toast.classList.add('on'); clearTimeout(tt); tt=setTimeout(function(){toast.classList.remove('on')},2200); }
document.addEventListener('click',function(e){
  var b=e.target.closest('[data-salin]'); if(!b) return;
  var no=D.WA_TAMPIL;
  try{ navigator.clipboard.writeText(no).then(function(){tunjuk('Nomor WhatsApp disalin')},function(){tunjuk('WhatsApp: '+no)}); }
  catch(err){ tunjuk('WhatsApp: '+no); }
});
})();

/* ---------- peta Jember ---------- */
(function(){
var D=window.LP,kad=document.getElementById('petaKad'); if(!kad) return;
function wa(t){ return 'https://wa.me/'+D.WA+'?text='+encodeURIComponent(t); }
function ikon(){ if(window.lucide) lucide.createIcons({attrs:{'stroke-width':1.9}}); }
function tunjuk(g){
  document.querySelectorAll('.pin-k,.pin-l').forEach(function(x){x.classList.toggle('on',x===g)});
  var n=g.dataset.n,kota=g.classList.contains('pin-k');
  kad.innerHTML='<small>'+(kota?'Jember kota · tatap muka':'Kecamatan '+n+' · online')+'</small><h4>'+n+'</h4><p>'+(kota?g.dataset.d+' Kita pilih cafe yang paling dekat denganmu.':'Sesi lewat Zoom dari rumah, sekolah atau kantor. Kalau sedang ke kota, bisa juga ketemu di cafe.')+'</p>'+
    '<a class="btn btn-wa" target="_blank" rel="noopener" href="'+wa('Halo Kak Auzan, saya dari '+n+', Jember. Mau mentoring 1-on-1 '+(kota?'ketemu di cafe':'lewat Zoom')+'. Kapan jadwalnya?')+'"><span class="ic"><i data-lucide="'+(kota?'coffee':'video')+'"></i></span>'+(kota?'Atur ketemu di cafe':'Atur sesi Zoom')+'</a>';
  ikon();
}
document.querySelectorAll('.pin-k,.pin-l').forEach(function(g){
  g.addEventListener('click',function(){tunjuk(g)});
  g.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){e.preventDefault();tunjuk(g)} });
});
tunjuk(document.querySelector('.pin-k'));
var pt=document.getElementById('peta');
if('IntersectionObserver' in window){ var io=new IntersectionObserver(function(es){ if(es[0].isIntersecting){ pt.classList.add('jalan'); io.disconnect(); } },{threshold:.3}); io.observe(pt); } else pt.classList.add('jalan');
})();

/* ---------- ajak teman ---------- */
(function(){
var D=window.LP,pilih=document.getElementById('grupPilih'); if(!pilih) return;
var meja=document.getElementById('grupMeja'),hasil=document.getElementById('grupHasil');
function wa(t){ return 'https://wa.me/'+D.WA+'?text='+encodeURIComponent(t); }
function ikon(){ if(window.lucide) lucide.createIcons({attrs:{'stroke-width':1.9}}); }
function set(n){
  Array.prototype.forEach.call(pilih.children,function(b){ var on=+b.dataset.n===n; b.classList.toggle('on',on); b.setAttribute('aria-checked',on); });
  var h='';
  for(var i=0;i<n;i++) h+='<span class="kursi" style="--i:'+i+'"><i data-lucide="user-round"></i></span>';
  h+='<span class="mentor-k"><img src="assets/auzan-hasfi.jpg" alt=""></span>';
  meja.innerHTML=h;
  if(n===1){
    hasil.innerHTML='<b>Harga normal</b><p>Rp 200.000 / Rp 250.000 / Rp 300.000 sesuai paket. Ajak satu teman saja, harga per orang sudah turun.</p>';
  } else {
    hasil.innerHTML='<b>'+n+' orang · harga per orang lebih murah</b><p>'+(n>=4?'Makin ramai, makin hemat. ':'')+'Harga khusus grup hanya lewat DM WhatsApp.</p>'+
      '<a class="btn btn-wa" target="_blank" rel="noopener" href="'+wa('Halo Kak Auzan, kami '+n+' orang dari Jember mau mentoring bareng. Paket yang diminati: ... Berapa harga khusus grupnya?')+'"><span class="ic"><i data-lucide="users"></i></span>Tanya harga grup via DM</a>';
  }
  ikon();
}
pilih.addEventListener('click',function(e){ var b=e.target.closest('button'); if(b) set(+b.dataset.n); });
set(2);
})();
