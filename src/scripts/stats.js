// ── STATS ──
var hist    = JSON.parse(localStorage.getItem('ah')||'[]');
var fails   = JSON.parse(localStorage.getItem('af')||'{}');
var streak  = +localStorage.getItem('as')||0;
var examCat = JSON.parse(localStorage.getItem('aec')||'{}');

function saveSes(pct,ok,mid,no,tot,mode){
  hist.unshift({pct:pct,ok:ok,mid:mid,no:no,tot:tot,mode:mode,date:new Date().toLocaleDateString('es-AR')});
  if(hist.length>20)hist.pop();
  localStorage.setItem('ah',JSON.stringify(hist));
  streak=pct>=70?streak+1:0;
  localStorage.setItem('as',streak);
  localStorage.setItem('af',JSON.stringify(fails));
}
function recExamCat(catId,ok){
  var s=examCat[catId]||(examCat[catId]={correct:0,total:0});
  s.total++;
  if(ok)s.correct++;
  localStorage.setItem('aec',JSON.stringify(examCat));
}
function renderCatProgress(){
  var el=document.getElementById('st-cat');
  var rows='';
  CATS.forEach(function(c){
    if(!EQ.some(function(q){return q.cat===c.label;}))return;
    var s=examCat[c.id];
    var has=s&&s.total>0;
    var pct=has?Math.round(s.correct/s.total*100):0;
    var col=has?(pct>=70?'var(--grn)':pct>=50?'var(--yel)':'var(--red)'):'var(--mut)';
    rows+='<div class="cpi"><div class="cph"><span class="cpn">'+c.label+'</span>'
      +'<span class="cpp" style="color:'+col+'">'+(has?pct+'%':'Sin datos')+'</span></div>'
      +'<div class="pb"><div class="pf" style="width:'+(has?pct:0)+'%"></div></div></div>';
  });
  el.innerHTML=rows||'<div class="emp"><div class="ei">📈</div><p>Rendí un examen primero</p></div>';
}
function renderEvoChart(){
  var el=document.getElementById('st-evo');
  var pts=hist.filter(function(s){return s.mode==='examen';}).reverse().map(function(s){return s.pct;});
  var n=pts.length;
  if(!n){el.innerHTML='<div class="emp"><div class="ei">📈</div><p>Rendí un examen primero</p></div>';return;}
  var W=320,H=176,L=34,R=14,T=16,B=32,iw=W-L-R,ih=H-T-B,P=16;
  function X(i){return +(n===1?L+iw/2:L+P+(iw-2*P)*i/(n-1)).toFixed(1);}
  function Y(p){return +(T+ih*(1-p/100)).toFixed(1);}
  function col(p){return p>=70?'var(--grn)':p>=50?'var(--yel)':'var(--red)';}
  var s='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Evolución del porcentaje en cada examen">'
    +'<defs><linearGradient id="evg" gradientUnits="userSpaceOnUse" x1="'+L+'" y1="0" x2="'+(W-R)+'" y2="0">'
    +'<stop offset="0" style="stop-color:var(--acc)"/><stop offset="1" style="stop-color:var(--acc2)"/></linearGradient></defs>';
  [0,25,50,75,100].forEach(function(v){
    s+='<line class="cg" x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(v)+'" y2="'+Y(v)+'"/>'
      +'<text class="ct" x="'+(L-6)+'" y="'+(Y(v)+3)+'" text-anchor="end">'+v+'%</text>';
  });
  if(n>1)s+='<polyline class="cl" style="stroke:url(#evg)" points="'+pts.map(function(p,i){return X(i)+','+Y(p);}).join(' ')+'"/>';
  var step=Math.ceil(n/10);
  pts.forEach(function(p,i){
    s+='<circle cx="'+X(i)+'" cy="'+Y(p)+'" r="4" style="fill:'+col(p)+';stroke:var(--card);stroke-width:1.5"/>';
    if(n<=8||i===n-1)s+='<text class="cv" x="'+X(i)+'" y="'+(Y(p)-8)+'">'+p+'%</text>';
    if(i%step===0||i===n-1)s+='<text class="ct" x="'+X(i)+'" y="'+(H-16)+'" text-anchor="middle">'+(i+1)+'</text>';
  });
  s+='<text class="ct" x="'+(L+iw/2)+'" y="'+(H-3)+'" text-anchor="middle">Nº de sesión</text></svg>';
  el.innerHTML='<div class="cht">'+s+'</div>';
}
function renderStats(){
  renderCatProgress();
  renderEvoChart();
  if(!hist.length)return;
  var avg=Math.round(hist.reduce(function(a,s){return a+s.pct;},0)/hist.length);
  document.getElementById('st-avg').textContent=avg+'%';
  document.getElementById('st-ses').textContent=hist.length;
  document.getElementById('st-ans').textContent=hist.reduce(function(a,s){return a+s.tot;},0);
  document.getElementById('st-str').textContent=streak;
  var sf=Object.entries(fails).sort(function(a,b){return b[1]-a[1];}).slice(0,5);
  if(sf.length){
    var wh='';
    sf.forEach(function(e){
      var id=e[0],n=e[1];
      var q=Q.find(function(x){return x.id===id;})||EQ.find(function(x){return x.id===id;});
      if(q)wh+='<div class="wi"><strong>'+(q.catLabel||q.cat)+' · '+(n>1?n+' veces':n+' vez')+'</strong>'+q.q+'</div>';
    });
    document.getElementById('st-wk').innerHTML=wh;
  }
  if(hist.length){
    var hh='';
    hist.slice(0,10).forEach(function(s){
      var col=s.pct>=70?'var(--grn)':s.pct>=50?'var(--yel)':'var(--red)';
      hh+='<div class="hi"><div><div class="hm">'+s.mode+' · '+s.tot+' preguntas</div><div class="hd">'+s.date+'</div></div><div class="hs" style="color:'+col+'">'+s.pct+'%</div></div>';
    });
    document.getElementById('st-hi').innerHTML=hh;
  }
}
function clearAll(){
  if(!confirm('¿Borrar todo el historial?'))return;
  hist=[];fails={};streak=0;examCat={};
  localStorage.removeItem('ah');localStorage.removeItem('af');localStorage.removeItem('as');localStorage.removeItem('aec');
  document.getElementById('st-wk').innerHTML='<div class="emp"><div class="ei">🎯</div><p>Completá un quiz primero</p></div>';
  document.getElementById('st-cat').innerHTML='<div class="emp"><div class="ei">📈</div><p>Rendí un examen primero</p></div>';
  document.getElementById('st-evo').innerHTML='<div class="emp"><div class="ei">📈</div><p>Rendí un examen primero</p></div>';
  document.getElementById('st-hi').innerHTML='<div class="emp"><div class="ei">📋</div><p>Sin sesiones aún</p></div>';
  document.getElementById('st-avg').textContent='—';
  ['st-ses','st-ans','st-str'].forEach(function(id){document.getElementById(id).textContent='0';});
}
