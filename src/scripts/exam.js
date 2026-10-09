// ── EXAMEN ──
var eQ=[], eI=0, eOk=0, eRes=[];
var eQty=10, eFilt=['all'];
var curOpts=[], curCorrect=0;

function buildExPills(){
  var f=document.getElementById('ex-pils');
  f.innerHTML='<div class="pill on" onclick="pickEF(\'all\',this)" data-cat="all">Todas</div>';
  CATS.forEach(function(c){
    if(EQ.some(function(q){return q.cat===c.label;}))
      f.innerHTML+='<div class="pill" onclick="pickEF(\''+c.id+'\',this)" data-cat="'+c.id+'">'+c.label+'</div>';
  });
}
function pickEF(cat,el){
  if(cat==='all'){
    eFilt=['all'];
    document.querySelectorAll('#ex-pils .pill').forEach(function(p){p.classList.remove('on');});
    el.classList.add('on');
  } else {
    var ap=document.querySelector('#ex-pils .pill[data-cat="all"]');
    ap.classList.remove('on');
    eFilt=eFilt.filter(function(f){return f!=='all';});
    if(el.classList.contains('on')){
      el.classList.remove('on');
      eFilt=eFilt.filter(function(f){return f!==cat;});
      if(!eFilt.length){eFilt=['all'];ap.classList.add('on');}
    } else {
      el.classList.add('on');
      eFilt.push(cat);
    }
  }
}
function pickEQ(n,el){
  eQty=n;
  document.querySelectorAll('#ex-set .pills .pill[onclick^="pickEQ"]').forEach(function(p){p.classList.remove('on');});
  el.classList.add('on');
}
function startEx(){
  var pool=EQ.slice();
  if(eFilt.indexOf('all')<0){
    var labels=eFilt.map(function(id){return CATS.find(function(c){return c.id===id;}).label;});
    pool=pool.filter(function(q){return labels.indexOf(q.cat)>=0;});
    if(!pool.length){alert('No hay preguntas de examen para los temas elegidos.');return;}
  }
  pool=pool.sort(function(){return Math.random()-.5;});
  eQ=eQty>0?pool.slice(0,eQty):pool;
  eI=0;eOk=0;eRes=[];
  document.getElementById('ex-set').classList.add('hide');
  document.getElementById('ex-res').classList.remove('on');
  document.getElementById('ex-qw').classList.add('on');
  showExQ();
}
function showExQ(){
  if(eI>=eQ.length){endEx();return;}
  var q=eQ[eI];
  document.getElementById('ex-num').textContent=(eI+1)+'/'+eQ.length;
  document.getElementById('ex-pb').style.width=(eI/eQ.length*100)+'%';
  document.getElementById('ex-cat').textContent=q.cat;
  var dlbl={'facil':'★ Fácil','media':'★★ Media','dificil':'★★★ Difícil'};
  var dcls={'facil':'diff diff-facil','media':'diff diff-media','dificil':'diff diff-dificil'};
  var dEl=document.getElementById('ex-diff');
  if(dEl){dEl.className=dcls[q.diff]||'diff diff-media';dEl.textContent=dlbl[q.diff]||q.diff;}
  document.getElementById('ex-q').textContent=q.q;
  var order=q.opts.map(function(_,i){return i;}).sort(function(){return Math.random()-.5;});
  curOpts=order.map(function(i){return q.opts[i];});
  curCorrect=order.indexOf(q.correct);
  var L=['A','B','C','D'];
  var h='';
  curOpts.forEach(function(o,i){
    h+='<button class="opt" onclick="pickO('+i+',\''+q.id+'\')">'
      +'<div class="lt">'+L[i]+'</div><div>'+o+'</div></button>';
  });
  document.getElementById('ex-opts').innerHTML=h;
  var fb=document.getElementById('ex-fb');
  fb.className='fb';
  document.getElementById('ex-fbt').textContent='';
  document.getElementById('ex-fbc').innerHTML='';
  document.getElementById('ex-nb').classList.remove('on');
}
function pickO(idx,qid){
  var q=eQ[eI];
  var bs=document.querySelectorAll('.opt');
  bs.forEach(function(b){b.disabled=true;});
  bs[curCorrect].classList.add('cor');
  var ok=idx===curCorrect;
  if(!ok){bs[idx].classList.add('wrg');}
  bs.forEach(function(b,i){if(i!==curCorrect&&i!==idx)b.classList.add('dim');});
  var fb=document.getElementById('ex-fb');
  fb.className='fb on '+(ok?'ok':'no');
  document.getElementById('ex-fbt').textContent=ok?'✓ ¡Correcto!':'✗ Incorrecto';
  document.getElementById('ex-fbc').innerHTML=q.feedback;
  if(ok)eOk++;
  else{fails[qid]=(fails[qid]||0)+1;localStorage.setItem('af',JSON.stringify(fails));}
  var qCat=CATS.find(function(c){return c.label===q.cat;});
  if(qCat)recExamCat(qCat.id,ok);
  eRes.push({q:q.q,cat:q.cat,ok:ok,your:curOpts[idx],ans:curOpts[curCorrect]});
  var nb=document.getElementById('ex-nb');
  nb.textContent=eI+1>=eQ.length?'Ver resultado →':'Siguiente →';
  nb.classList.add('on');
}
function nextEx(){eI++;document.getElementById('ex-nb').classList.remove('on');showExQ();}
function endEx(){
  document.getElementById('ex-qw').classList.remove('on');
  var pct=Math.round(eOk/eQ.length*100);
  var col=pct>=70?'var(--grn)':pct>=50?'var(--yel)':'var(--red)';
  document.getElementById('ex-cir').style.background='conic-gradient('+col+' 0% '+pct+'%,var(--brd) 0%)';
  document.getElementById('ex-pct').textContent=pct+'%';
  var g,s;
  if(pct>=90){g='¡Excelente!';s='Estás listo 💪';}
  else if(pct>=70){g='Aprobado ✓';s='Buen nivel, repasá las falladas';}
  else if(pct>=60){g='Justo';s='En el límite — a reforzar';}
  else{g='Desaprobado';s='Concentrate en los temas fallados';}
  document.getElementById('ex-grd').textContent=g;
  document.getElementById('ex-sub').textContent=s;
  document.getElementById('ex-ok').textContent=eOk;
  document.getElementById('ex-wr').textContent=eQ.length-eOk;
  var rv='<div class="sec" style="margin-top:0">Revisión</div>';
  eRes.forEach(function(r){
    rv+='<div class="rai '+(r.ok?'ok':'no')+'"><div class="raq">'+r.q+'</div>'
      +'<div class="ray'+(r.ok?'':' w')+'">Tu respuesta: '+r.your+'</div>'
      +(r.ok?'':'<div class="rac">✓ Correcta: '+r.ans+'</div>')
      +'</div>';
  });
  document.getElementById('ex-rev').innerHTML=rv;
  saveSes(pct,eOk,0,eQ.length-eOk,eQ.length,'examen');
  document.getElementById('ex-res').classList.add('on');
}
function restartEx(){
  document.getElementById('ex-res').classList.remove('on');
  document.getElementById('ex-set').classList.remove('hide');
}
