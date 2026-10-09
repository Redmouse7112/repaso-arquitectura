// ── QUIZ ──
var qMode='flash', qFilt=['all'], qTime=30;
var qQ=[], qI=0, qSc={ok:0,mid:0,no:0}, qFl=[];
var qTmr=null, qLeft=0;

function buildQzPills(){
  var f=document.getElementById('qz-pils');
  f.innerHTML='<div class="pill on" onclick="pickF(\'all\',this)" data-cat="all">Todas</div>';
  CATS.forEach(function(c){
    if(Q.some(function(q){return q.cat===c.id;}))
      f.innerHTML+='<div class="pill" onclick="pickF(\''+c.id+'\',this)" data-cat="'+c.id+'">'+c.label+'</div>';
  });
}
function pickM(m,el){
  qMode=m;
  document.querySelectorAll('.mc').forEach(function(c){c.classList.remove('on');});
  el.classList.add('on');
}
function pickF(cat,el){
  if(cat==='all'){
    qFilt=['all'];
    document.querySelectorAll('#qz-pils .pill').forEach(function(p){p.classList.remove('on');});
    el.classList.add('on');
  } else {
    var ap=document.querySelector('#qz-pils .pill[data-cat="all"]');
    ap.classList.remove('on');
    qFilt=qFilt.filter(function(f){return f!=='all';});
    if(el.classList.contains('on')){
      el.classList.remove('on');
      qFilt=qFilt.filter(function(f){return f!==cat;});
      if(!qFilt.length){qFilt=['all'];ap.classList.add('on');}
    } else {
      el.classList.add('on');
      qFilt.push(cat);
    }
  }
}
function pickT(t,el){
  qTime=t;
  document.querySelectorAll('#qz-time .pill').forEach(function(p){p.classList.remove('on');});
  el.classList.add('on');
}
function startQz(wk){
  var pool=Q.slice();
  if(wk){
    var wids=Object.keys(fails).filter(function(k){return fails[k]>0;});
    pool=pool.filter(function(q){return wids.indexOf(q.id)>=0;});
    if(!pool.length){alert('No tenés preguntas falladas aún.');return;}
  } else if(qMode==='weak'){
    var wids=Object.keys(fails).filter(function(k){return fails[k]>0;});
    pool=pool.filter(function(q){return wids.indexOf(q.id)>=0;});
    if(!pool.length){alert('No tenés preguntas falladas aún.');return;}
  } else if(qFilt.indexOf('all')<0){
    pool=pool.filter(function(q){return qFilt.indexOf(q.cat)>=0;});
  }
  qQ=pool.sort(function(){return Math.random()-.5;});
  qI=0;qSc={ok:0,mid:0,no:0};qFl=[];
  document.getElementById('qz-set').classList.add('hide');
  document.getElementById('qz-res').classList.add('hide');
  document.getElementById('qz-run').classList.remove('hide');
  showQzQ();
}
function fmt(s){return Math.floor(s/60)+':'+(('0'+(s%60)).slice(-2));}
function showQzQ(){
  if(qI>=qQ.length){endQz();return;}
  var q=qQ[qI];
  document.getElementById('qz-c').textContent=(qI+1)+'/'+qQ.length;
  document.getElementById('qz-pb').style.width=(qI/qQ.length*100)+'%';
  document.getElementById('qz-cat').textContent=q.catLabel;
  document.getElementById('qz-q').textContent=q.q;
  var a=document.getElementById('qz-ans');
  a.innerHTML='<p>'+q.a+(q.tip?'<br><br><em style="color:var(--acc)">💡 '+q.tip+'</em>':'')+'</p>';
  a.classList.remove('on');
  document.getElementById('qz-rvb').classList.remove('hide');
  document.getElementById('qz-sb').classList.add('hide');
  clearInterval(qTmr);
  var tmr=document.getElementById('qz-tmr');
  if((qMode==='oral'||qMode==='rand')&&qTime>0){
    tmr.classList.remove('hide','red');qLeft=qTime;tmr.textContent=fmt(qLeft);
    qTmr=setInterval(function(){
      qLeft--;tmr.textContent=fmt(qLeft);
      if(qLeft<=5)tmr.classList.add('red');
      if(qLeft<=0){clearInterval(qTmr);revQ();}
    },1000);
  } else tmr.classList.add('hide');
}
function revQ(){
  clearInterval(qTmr);
  document.getElementById('qz-ans').classList.add('on');
  document.getElementById('qz-rvb').classList.add('hide');
  document.getElementById('qz-sb').classList.remove('hide');
  document.getElementById('qz-tmr').classList.add('hide');
}
function scQ(r){
  var q=qQ[qI];qSc[r]++;
  if(r==='no'){qFl.push(q.id);fails[q.id]=(fails[q.id]||0)+1;}
  qI++;showQzQ();
}
function endQz(){
  clearInterval(qTmr);
  document.getElementById('qz-run').classList.add('hide');
  var tot=qQ.length,pct=Math.round(((qSc.ok+qSc.mid*.5)/tot)*100);
  var col=pct>=70?'var(--grn)':pct>=50?'var(--yel)':'var(--red)';
  document.getElementById('qz-cir').style.background='conic-gradient('+col+' 0% '+pct+'%,var(--brd) 0%)';
  document.getElementById('qz-pct').textContent=pct+'%';
  var g,s;
  if(pct>=90){g='¡Excelente!';s='Estás listo para el oral 💪';}
  else if(pct>=70){g='Muy bien';s='Repasá las falladas y listo';}
  else if(pct>=50){g='Bien';s='Todavía hay margen para mejorar';}
  else{g='A repasar';s='Concentrate en los temas fallados';}
  document.getElementById('qz-grd').textContent=g;
  document.getElementById('qz-sub').textContent=s;
  document.getElementById('qz-ok').textContent=qSc.ok;
  document.getElementById('qz-md').textContent=qSc.mid;
  document.getElementById('qz-no').textContent=qSc.no;
  var wl=document.getElementById('qz-wl');
  if(qFl.length){
    var h='<div class="sec" style="margin-top:0">A repasar</div>';
    qFl.forEach(function(id){var q=Q.find(function(x){return x.id===id;});h+='<div class="wi"><strong>'+q.catLabel+'</strong>'+q.q+'</div>';});
    wl.innerHTML=h;
    document.getElementById('qz-rw').classList.remove('hide');
  } else {wl.innerHTML='';document.getElementById('qz-rw').classList.add('hide');}
  saveSes(pct,qSc.ok,qSc.mid,qSc.no,tot,qMode);
  document.getElementById('qz-res').classList.remove('hide');
}
function retryQz(){document.getElementById('qz-res').classList.add('hide');startQz();}
function retryWk(){document.getElementById('qz-res').classList.add('hide');startQz(true);}
function exitQz(){clearInterval(qTmr);document.getElementById('qz-run').classList.add('hide');document.getElementById('qz-set').classList.remove('hide');}
function backQz(){document.getElementById('qz-res').classList.add('hide');document.getElementById('qz-set').classList.remove('hide');}
