(function(){
'use strict';

// Viewport fix
(function(){
  var sw=screen.width,vw=Math.max(document.documentElement.clientWidth,window.innerWidth||0);
  var mobile=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if(mobile&&vw>768&&sw<600){
    var m=document.querySelector('meta[name="viewport"]');
    if(m){m.content='width='+sw+',initial-scale=1';window.location.reload()}
  }
})();

document.addEventListener('DOMContentLoaded',function(){
  var html=document.documentElement;

  // ─ Lang toggle ─
  function setLang(l){
    html.setAttribute('data-lang',l);
    document.querySelectorAll('#langBtn').forEach(function(b){b.textContent=l==='ru'?'EN':'RU'});
    // update menu
    document.querySelectorAll('.mmenu a').forEach(function(a){
      var t=a.getAttribute('data-'+l);if(t)a.textContent=t;
    });
  }
  document.getElementById('langBtn').addEventListener('click',function(){
    setLang(html.getAttribute('data-lang')==='ru'?'en':'ru');
  });
  setLang('ru');

  // ─ Menu ─
  var mb=document.getElementById('menuBtn'),mm=document.getElementById('mmenu');
  mb.addEventListener('click',function(){
    mm.classList.toggle('active');mb.classList.toggle('active');
    document.body.style.overflow=mm.classList.contains('active')?'hidden':'';
  });
  mm.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){mm.classList.remove('active');mb.classList.remove('active');document.body.style.overflow=''});
  });

  // ─ Scroll reveal ─
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}
    });
  },{threshold:.15});
  document.querySelectorAll('.s:not(.s-hero)').forEach(function(s){obs.observe(s)});

  // ─ Parallax ─
  var hbg=document.querySelector('.s-hero-bg');
  if(hbg)window.addEventListener('scroll',function(){
    var y=window.pageYOffset;
    if(y<window.innerHeight)hbg.style.transform='translateY('+(y*.15)+'px)';
  },{passive:true});

  // ─ FAQ ─
  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click',function(){
      var p=this.parentElement;
      var a=p.classList.contains('active');
      document.querySelectorAll('.faq-i').forEach(function(f){f.classList.remove('active')});
      if(!a)p.classList.add('active');
    });
  });

  // ─ Youtube modal ─
  var modal=document.getElementById('videoModal');
  function openModal(vid){
    modal.classList.add('active');document.body.style.overflow='hidden';
    var ifr=document.createElement('iframe');
    ifr.src='https://www.youtube.com/embed/'+vid+'?autoplay=1&rel=0&modestbranding=1';
    ifr.allow='autoplay;fullscreen';ifr.setAttribute('allowfullscreen','');
    document.getElementById('ytPlayer').innerHTML='';document.getElementById('ytPlayer').appendChild(ifr);
  }
  function closeModal(){modal.classList.remove('active');document.body.style.overflow='';document.getElementById('ytPlayer').innerHTML=''}
  document.querySelectorAll('.trailer-btn').forEach(function(b){
    b.addEventListener('click',function(){
      var lang=html.getAttribute('data-lang')||'ru';
      var id=this.getAttribute('data-video-'+lang);
      if(id)openModal(id);
    });
  });
  if(modal){
    modal.querySelector('.modal-bg').addEventListener('click',closeModal);
    modal.querySelector('.modal-close').addEventListener('click',closeModal);
    document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal()});
  }

  // ─ Smooth scroll ─
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var t=document.querySelector(this.getAttribute('href'));
      if(t){e.preventDefault();window.scrollTo({top:t.getBoundingClientRect().top+window.pageYOffset-50,behavior:'smooth'})}
    });
  });

  // ─ Header fade ─
  var hdr=document.querySelector('.hdr'),lastY=0;
  window.addEventListener('scroll',function(){
    var y=window.pageYOffset;
    hdr.style.opacity=y>80?(y>lastY?'0':'1'):'1';
    lastY=y;
  },{passive:true});
});
})();
