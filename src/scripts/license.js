// ── LICENCIA: modal de aceptación obligatoria ──
// LICENSE_VERSION y el estado inicial (clase 'lic-ok' en <html>) los fija el
// script del <head> de index.html. Este archivo va primero en el bundle para
// que el modal siempre tenga sus handlers, aunque otro script fallara.
(function(){
  var root=document.documentElement;
  var modal=document.getElementById('lic');
  var title=document.getElementById('lic-t');
  var chk=document.getElementById('lic-chk');
  var yes=document.getElementById('lic-yes');
  var no=document.getElementById('lic-no');
  var msg=document.getElementById('lic-msg');
  var open=!root.classList.contains('lic-ok');
  var locked=[];

  if(!open)return;

  // el resto de la app queda inerte (sin foco ni lector de pantalla) mientras el modal está abierto
  Array.prototype.forEach.call(document.body.children,function(el){
    if(el!==modal&&el.tagName!=='SCRIPT'){el.inert=true;locked.push(el);}
  });

  chk.checked=false;
  yes.disabled=true;
  title.focus();

  chk.addEventListener('change',function(){yes.disabled=!chk.checked;});

  yes.addEventListener('click',function(){
    if(!chk.checked)return;
    try{
      localStorage.setItem('arq_license',JSON.stringify({version:LICENSE_VERSION,acceptedAt:new Date().toISOString()}));
    }catch(e){}
    open=false;
    locked.forEach(function(el){el.inert=false;});
    root.classList.add('lic-ok');
  });

  no.addEventListener('click',function(){
    msg.textContent='';
    setTimeout(function(){msg.textContent='Para usar la app tenés que aceptar la licencia.';},30);
  });

  function focusables(){
    return Array.prototype.filter.call(
      modal.querySelectorAll('a[href],button:not([disabled]),input:not([disabled])'),
      function(el){return el.offsetParent!==null;}
    );
  }

  document.addEventListener('keydown',function(e){
    if(!open)return;
    if(e.key==='Escape'){e.preventDefault();e.stopPropagation();return;}
    if(e.key!=='Tab')return;
    var f=focusables();
    if(!f.length)return;
    var first=f[0],last=f[f.length-1],a=document.activeElement;
    if(e.shiftKey&&(a===first||a===title||!modal.contains(a))){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&(a===last||!modal.contains(a))){e.preventDefault();first.focus();}
  },true);

  document.addEventListener('focusin',function(e){
    if(open&&!modal.contains(e.target))title.focus();
  });
})();
