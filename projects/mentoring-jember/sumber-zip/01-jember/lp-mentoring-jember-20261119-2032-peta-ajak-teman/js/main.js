/* LP Mentoring 1-on-1 Jember. Interaksi LP: WhatsApp, Si Bulat, chat hero, langkah sesi melekat, paket, peti rahasia, tema, reveal & timbangan. Isi ada di js/data.js. */
(function(){
'use strict';
var D=window.LP;
var RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};

/* ---------- WhatsApp ---------- */
function waLink(t){ return 'https://wa.me/'+D.WA+'?text='+encodeURIComponent(t); }
function pasangWa(root){ $$('[data-wa]',root).forEach(function(a){ if(a.dataset.wa==='Umum') a.href=waLink(D.pesanUmum); }); }

/* ---------- Si Bulat ---------- */
var SB_PAL={orange:{b:'#F05323',i:'#5E1B08'},mango:{b:'#F8A81B',i:'#7A4A00'},green:{b:'#12946A',i:'#06412E'},purple:{b:'#8B7BE8',i:'#2E2470'}};
var SB_BENTUK={blob:'<path d="M104 12 C156 6 192 50 186 100 C180 152 146 190 96 188 C46 186 10 148 12 96 C14 46 52 18 104 12 Z" fill="{B}"/>',round:'<circle cx="100" cy="100" r="88" fill="{B}"/>'};
var SB_MUKA={happy:['<path d="M58 84 Q74 66 90 84"/><path d="M110 84 Q126 66 142 84"/>','<path d="M52 100 Q100 154 148 100"/>'],
  wink:['<path d="M60 88 Q75 71 90 88"/><path d="M124 84 L124 84" stroke-width="17"/>','<path d="M58 106 Q100 144 142 106"/>'],
  thinking:['<path d="M76 82 L76 82" stroke-width="17"/><path d="M124 82 L124 82" stroke-width="17"/>','<path d="M86 116 Q99 125 113 119"/>'],
  cheer:['<path d="M56 82 Q74 62 92 82"/><path d="M108 82 Q126 62 144 82"/>','<path d="M62 102 Q100 152 138 102 Z" fill="{I}" stroke="none"/>'],
  oops:['<path d="M72 80 L72 80" stroke-width="16"/><path d="M128 80 L128 80" stroke-width="16"/>','<path d="M78 122 Q88 110 100 122 Q112 134 122 122" stroke-width="6"/>']};
function sbSVG(pose,bentuk,warna){
  var p=SB_PAL[warna]||SB_PAL.orange,m=SB_MUKA[pose]||SB_MUKA.happy,I=p.i;
  var h='<svg viewBox="-12 -12 224 224" aria-hidden="true" focusable="false">'+(SB_BENTUK[bentuk]||SB_BENTUK.blob).replace('{B}',p.b);
  h+='<g fill="'+I+'" opacity=".16"><ellipse cx="46" cy="110" rx="13" ry="8"/><ellipse cx="154" cy="110" rx="13" ry="8"/></g>';
  h+='<g class="sb-muka" stroke="'+I+'" stroke-width="7" stroke-linecap="round" fill="none"><g class="sb-mata">'+m[0]+'</g><g class="sb-mulut">'+m[1].replace('{I}',I)+'</g></g>';
  if(pose==='thinking') h+='<text x="158" y="42" font-size="42" font-family="Outfit,system-ui,sans-serif" font-weight="700" fill="'+I+'" opacity=".65">?</text>';
  if(pose==='cheer') h+='<g fill="'+I+'" opacity=".55"><path d="M22 24 L27 38 L41 43 L27 48 L22 62 L17 48 L3 43 L17 38 Z"/><path d="M180 18 L184 28 L194 32 L184 36 L180 46 L176 36 L166 32 L176 28 Z"/></g>';
  return h+'</svg>';
}
function lukisSB(el,pose){ if(pose) el.dataset.sb=pose; el.innerHTML=sbSVG(el.dataset.sb,el.dataset.b,el.dataset.w); }
function semuaSB(root){ $$('.sb',root).forEach(function(el){lukisSB(el)}); }
semuaSB();
setInterval(function(){ $$('.sb').forEach(function(el){ if(Math.random()<.4){el.classList.add('kedip');setTimeout(function(){el.classList.remove('kedip')},260)} }) },2600);
document.addEventListener('pointermove',function(e){
  $$('.sb').forEach(function(el){
    var r=el.getBoundingClientRect(); if(r.bottom<0||r.top>innerHeight) return;
    var dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2),d=Math.max(1,Math.hypot(dx,dy)),k=Math.min(8,d/40),m=el.querySelector('.sb-muka'); if(!m) return;
    m.style.setProperty('--lx',(dx/d*k).toFixed(1)+'px'); m.style.setProperty('--ly',(dy/d*k*.7).toFixed(1)+'px');
  });
},{passive:true});

/* ---------- hero: percakapan sesi ---------- */
var CHAT=D.CHAT;
var ci=0,detik=14*60+32;
function chatSeterusnya(){
  var box=$('#chatHero'); if(!box) return;
  if(ci>=CHAT.length){ ci=0; box.innerHTML=''; }
  var c=CHAT[ci++];
  if(c[0]==='m'){ var t=document.createElement('div'); t.className='bub m taip'; t.innerHTML='<i></i><i></i><i></i>'; box.appendChild(t); setTimeout(function(){ t.className='bub m'; t.textContent=c[1]; },900); }
  else { var b=document.createElement('div'); b.className='bub u'; b.textContent=c[1]; box.appendChild(b); }
  while(box.children.length>3) box.removeChild(box.firstChild);
}
chatSeterusnya(); chatSeterusnya();
if(!RM){ setInterval(chatSeterusnya,2600); setInterval(function(){ detik++; var h=Math.floor(detik/3600),m=Math.floor(detik/60)%60,s=detik%60; $('#masaSesi').textContent=[h,m,s].map(function(x){return String(x).padStart(2,'0')}).join(':'); },1000); }

/* ---------- langkah sesi ---------- */
var LANGKAH=D.LANGKAH;
var sl=$('#senaraiLangkah');
LANGKAH.forEach(function(L,i){
  var d=document.createElement('div'); d.className='langkah'; d.dataset.i=i;
  d.innerHTML='<span class="no">0'+(i+1)+'</span><h3>'+L.h+'</h3><ul>'+L.p.map(function(p){return '<li><span class="ic"><i data-lucide="'+p[0]+'"></i></span><span>'+p[1]+'</span></li>'}).join('')+'</ul><div class="zoom-m"><div class="kongsi"><div class="kongsi-isi">'+L.s.replace(/<div class="kod" data-taip="([^"]*)"><\/div>/,function(_,t){return '<div class="kod">'+t.replace(/\\n/g,'\n')+'</div>'})+'</div></div></div>';
  sl.appendChild(d);
});
var kini=-1,taipT=null;
function tunjukLangkah(i){
  if(i===kini) return; kini=i; var L=LANGKAH[i],k=$('#kongsi');
  $$('.langkah',sl).forEach(function(d,j){d.classList.toggle('on',j===i)});
  $('#zoomLb').textContent='LANGKAH '+(i+1)+' / 6';
  $$('#titikL i').forEach(function(t,j){t.classList.toggle('on',j===i)});
  $('#tMentor').classList.toggle('bercakap',L.m==='tMentor'); $('#tAnda').classList.toggle('bercakap',L.m==='tAnda');
  lukisSB($('#tAnda .sb'),L.sb);
  k.innerHTML='<div class="kongsi-isi">'+L.s+'</div>'; ikon(k);
  clearInterval(taipT);
  var kd=$('[data-taip]',k);
  if(kd){ var t=kd.dataset.taip.replace(/\\n/g,'\n'),n=0; if(RM){kd.textContent=t;} else taipT=setInterval(function(){ n+=2; kd.innerHTML=t.slice(0,n).replace(/&/g,'&amp;').replace(/</g,'&lt;')+'<span class="k"></span>'; if(n>=t.length) clearInterval(taipT); },35); }
}
tunjukLangkah(0);

/* ---------- paket ---------- */
var pg=$('#pakejGrid');
D.PAKET.forEach(function(p){
  var d=document.createElement('div'); d.className='pk r'+(p.pop?' pop':'');
  var li=function(x,plus){return '<li'+(plus?' class="plus"':'')+'><span class="ic"><i data-lucide="'+(plus?'plus':'check')+'"></i></span><span>'+x+'</span></li>'};
  var href=p.checkout||waLink(D.pesanPaket(p.nama,p.harga));
  d.innerHTML=(p.pop?'<span class="tag-pop">Paling lengkap</span>':'')+'<small class="nm">'+p.label+'</small><h3>'+p.nama+'</h3>'+
    '<div class="harga"><b>'+p.harga+'</b><span>sekali bayar</span></div><p class="untuk">'+p.untuk+'</p>'+
    '<ul>'+p.isi.map(function(x){return li(x)}).join('')+(p.plus||[]).map(function(x){return li(x,1)}).join('')+'</ul>'+
    '<p class="hasil">'+p.hasil+'</p>'+
    '<a class="btn '+(p.pop?'btn-a':'btn-wa')+'" data-paket="'+p.id+'" href="'+href+'" target="_blank" rel="noopener">Pilih '+p.nama.replace('Paket ','')+' · '+p.harga+'</a>';
  pg.appendChild(d);
});
pasangWa();

/* ---------- hasil: angka berjalan, video main saat terlihat, carousel jalan tanpa putus ---------- */
function fmt(n){ return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,'.'); }
function hitung(el){
  var ke=+el.dataset.ke,plus=el.dataset.plus||'',t0=null,dur=1800;
  if(RM){ el.textContent=fmt(ke)+plus; return; }
  function f(t){ if(!t0) t0=t; var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,4); el.textContent=fmt(ke*e)+(p===1?plus:''); if(p<1) requestAnimationFrame(f); }
  requestAnimationFrame(f);
}
$$('.jalur').forEach(function(j){ var n=j.children.length; j.innerHTML+=j.innerHTML; $$('img',j).slice(n).forEach(function(i){i.alt='';i.setAttribute('aria-hidden','true')}); });
if('IntersectionObserver' in window){
  var ioA=new IntersectionObserver(function(es){es.forEach(function(e){ if(!e.isIntersecting) return; var st=e.target.closest('.stat'); if(st) st.classList.add('jalan'); hitung(e.target); ioA.unobserve(e.target); })},{threshold:.6});
  $$('.angka[data-ke]').forEach(function(a){ ioA.observe(a); });
  var ioV=new IntersectionObserver(function(es){es.forEach(function(e){ var v=e.target;
    if(e.isIntersecting){ if(!v.getAttribute('src')) v.src=v.dataset.src; if(!RM){ var pr=v.play(); if(pr&&pr.catch) pr.catch(function(){}); } } else v.pause(); })},{threshold:.5});
  $$('#vidwall video').forEach(function(v){ ioV.observe(v); });
} else { $$('.angka[data-ke]').forEach(hitung); $$('#vidwall video').forEach(function(v){v.src=v.dataset.src}); }

/* ---------- peti rahasia ---------- */
var petiEl=$('#peti'); if(petiEl) petiEl.addEventListener('click',function(e){
  var b=e.target.closest('.peti'); if(!b) return;
  var on=!b.classList.contains('buka'); b.classList.toggle('buka',on);
  var k=$('.kunci',b); k.innerHTML='<i data-lucide="'+(on?'lock-open':'lock')+'"></i>'; ikon(k);
  var l=$('.lbl',b); l.innerHTML=on?'<i data-lucide="calendar-check"></i>Dibuka penuh di sesi':'<i data-lucide="eye"></i>Intip'; ikon(l);
});

/* ---------- ikon ---------- */
function ikon(root){
  if(!window.lucide) return;
  lucide.createIcons({attrs:{'stroke-width':1.9}});
  $$('svg.lucide > *',root||document).forEach(function(p){
    if(p.style.getPropertyValue('--L')||!p.getTotalLength) return;
    try{ var L=p.getTotalLength(); if(L>0) p.style.setProperty('--L',(L+1).toFixed(1)); }catch(e){}
  });
}
ikon();

/* ---------- tema ---------- */
var akar=document.documentElement,mq=window.matchMedia?matchMedia('(prefers-color-scheme: dark)'):null;
function temaKini(){ return akar.dataset.theme||(mq&&mq.matches?'dark':'light'); }
function paparTema(){ var t=temaKini(); $$('#temaBt span').forEach(function(s){s.classList.toggle('on',s.dataset.m===t)}); $('#temaBt').setAttribute('aria-pressed',t==='dark'); }
try{ var st=localStorage.getItem('mk-jember-tema'); if(st==='dark'||st==='light') akar.dataset.theme=st; }catch(e){}
paparTema(); if(mq&&mq.addEventListener) mq.addEventListener('change',paparTema);
$('#temaBt').addEventListener('click',function(){
  var baru=temaKini()==='dark'?'light':'dark'; akar.classList.add('tukar-tema'); akar.dataset.theme=baru; paparTema();
  setTimeout(function(){akar.classList.remove('tukar-tema')},500); try{localStorage.setItem('mk-jember-tema',baru)}catch(e){}
});

/* ---------- reveal & interaksi skrol ---------- */
var rv=$$('.r');
if('IntersectionObserver' in window && !RM){
  rv.forEach(function(el){ var r=el.getBoundingClientRect(); if(r.top>innerHeight*.95) el.classList.add('pre'); else el.classList.add('lukis'); });
  var io=new IntersectionObserver(function(es){es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.remove('pre'); e.target.classList.add('lukis'); io.unobserve(e.target); } })},{rootMargin:'0px 0px -10% 0px'});
  rv.forEach(function(el){ if(el.classList.contains('pre')) io.observe(el); });
  /* tanda perbandingan muncul satu-satu */
  var iob=new IntersectionObserver(function(es){ if(es[0].isIntersecting){ $$('#banding .tanda .ic').forEach(function(t,i){ t.style.transitionDelay=(i*.06)+'s'; }); $('#banding').classList.add('hidup'); iob.disconnect(); } },{threshold:.3});
  iob.observe($('#banding'));
} else { $('#banding').classList.add('hidup'); }


/* langkah aktif ikut skrol */
var langkahEl=$$('.langkah',sl);
var sek=['minat','ketemu','sesi','hasil','pakej','soalan'].map(function(id){return document.getElementById(id)}),navA=$$('.navb a');
function kemas(){
  var h=document.documentElement; $('#prog').style.setProperty('--p',(h.scrollTop/Math.max(1,h.scrollHeight-innerHeight)).toFixed(4));
  /* timbangan: condong ikut kemajuan skrol bahagian nilai */
  var nl=$('#nilai').getBoundingClientRect(),p=Math.max(0,Math.min(1,(innerHeight*.75-nl.top)/(nl.height*.7)));
  if(RM) p=1;
  var sudut=-12+p*28; $('#rasuk').style.transform='rotate('+sudut.toFixed(2)+'deg)';
  var lawan='rotate('+(-sudut).toFixed(2)+'deg)';
  $('#piringK').style.transform=lawan; $('#piringK').style.transformOrigin='100px 120px';
  $('#piringN').style.transform=lawan; $('#piringN').style.transformOrigin='500px 120px';
  var nb=Math.round(p*5.4);
  $$('.berat').forEach(function(b){b.classList.toggle('on',+b.dataset.b<nb)});
  $$('.ns').forEach(function(b){b.classList.toggle('on',+b.dataset.b===nb-1)});
  /* langkah sesi */
  var a=0; langkahEl.forEach(function(d,i){ if(d.getBoundingClientRect().top<innerHeight*.55) a=i; }); tunjukLangkah(a);
  var k=-1; sek.forEach(function(s,i){ if(s.getBoundingClientRect().top<innerHeight*.4) k=i; }); navA.forEach(function(x,i){x.classList.toggle('on',i===k)});
  $('#waApung').classList.toggle('on',scrollY>innerHeight*.8);
}
addEventListener('scroll',kemas,{passive:true}); addEventListener('resize',kemas); kemas();
})();
