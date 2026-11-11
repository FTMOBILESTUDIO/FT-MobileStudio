(function(){
  var h=document.querySelector('header'),hero=document.querySelector('.hero');
  function onScroll(){var lim=hero?hero.offsetHeight-72:10;h.classList.toggle('solid',window.scrollY>lim)}
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  var els=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.12});
    els.forEach(function(el,i){el.style.transitionDelay=(el.dataset.d||0)+'ms';io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('on')})}
  document.querySelectorAll('.card').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--x',e.clientX-r.left+'px');c.style.setProperty('--y',e.clientY-r.top+'px')})});
  var logo=document.querySelector('header .logo');
  if(logo&&logo.getAttribute('href')==='#top'){logo.addEventListener('click',function(e){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})})}
})();
