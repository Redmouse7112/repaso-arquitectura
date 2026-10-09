// ── SWIPE HELPER (touch + mouse, para navegación y flashcards) ──
function swipeH(el, onLeft, onRight, ignoreSelector){
  var sx=0, sy=0, tracking=false;
  el.addEventListener('pointerdown', function(e){
    if(ignoreSelector && e.target.closest(ignoreSelector)) return;
    tracking=true; sx=e.clientX; sy=e.clientY;
  });
  el.addEventListener('pointerup', function(e){
    if(!tracking) return;
    tracking=false;
    var dx=e.clientX-sx, dy=e.clientY-sy;
    if(Math.abs(dx)>50 && Math.abs(dx)>Math.abs(dy)*1.5){
      if(dx<0) onLeft(); else onRight();
    }
  });
  el.addEventListener('pointercancel', function(){ tracking=false; });
}

// ── INIT ──
buildTabs();
buildCards();
buildQzPills();
buildExPills();
document.getElementById('ex-tot').textContent=EQ.length;
renderStats();
initScreenSwipe();

// ── INSTALAR PWA ──
var deferredInstall=null;
function setInstallVisible(v){document.getElementById('inst-wrap').classList.toggle('hide',!v);}
window.addEventListener('beforeinstallprompt',function(e){
  e.preventDefault();
  deferredInstall=e;
  setInstallVisible(true);
});
function installApp(){
  if(!deferredInstall)return;
  var ev=deferredInstall;
  deferredInstall=null;
  setInstallVisible(false);
  ev.prompt();
}
window.addEventListener('appinstalled',function(){
  deferredInstall=null;
  setInstallVisible(false);
});

if('serviceWorker' in navigator){
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('./sw.js').catch(function(){});
  });
}
