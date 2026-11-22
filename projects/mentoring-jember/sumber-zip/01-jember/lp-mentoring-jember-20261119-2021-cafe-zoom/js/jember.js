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
