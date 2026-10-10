// ── NAV ──
var SCREENS=['repaso','quiz','examen','stats'];

function go(name,el){
  document.querySelectorAll('.scr').forEach(function(s){s.classList.remove('on');});
  document.querySelectorAll('.nb').forEach(function(b){b.classList.remove('on');});
  document.getElementById('s-'+name).classList.add('on');
  if(!el) el=document.querySelectorAll('.nb')[SCREENS.indexOf(name)];
  el.classList.add('on');
  if(name==='stats') renderStats();
}

// swipe horizontal entre pantallas (repaso ↔ quiz ↔ examen ↔ stats)
var SWIPE_IGNORE='#lic, .fc, .opt, .mc, .pill, .tab, button, input, textarea, select, a';
function initScreenSwipe(){
  swipeH(document.body, function(){ // swipe izquierda → siguiente pantalla
    changeScreen(1);
  }, function(){ // swipe derecha → pantalla anterior
    changeScreen(-1);
  }, SWIPE_IGNORE);
}
function changeScreen(dir){
  var cur=document.querySelector('.scr.on').id.replace('s-','');
  var i=SCREENS.indexOf(cur)+dir;
  if(i<0||i>=SCREENS.length)return;
  go(SCREENS[i]);
}
