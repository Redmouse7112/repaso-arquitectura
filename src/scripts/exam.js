// ── EXAMEN ──
var eQ=[], eI=0, eOk=0, eRes=[];
var eQty=10, eFilt=['all'];
var eMode='mc', eSrc='std', eRun='mc'; // modo/origen elegidos y modo de la sesión en curso
var curOpts=[], curCorrect=0;
var eWritten=null; // resultado de la verificación de la pregunta oral en curso

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
function selPill(el,group){
  document.querySelectorAll(group+' .pill').forEach(function(p){
    p.classList.remove('on');p.setAttribute('aria-pressed','false');
  });
  el.classList.add('on');el.setAttribute('aria-pressed','true');
}
function pickEM(mode,el){
  eMode=mode;
  selPill(el,'#ex-mode');
  var oral=mode==='oral';
  // el modo oral usa las tarjetas del Repaso (Q): no aplica el origen estándar/variantes
  document.getElementById('ex-src-wrap').classList.toggle('hide',oral);
  document.getElementById('ex-desc').textContent=oral
    ?'Te preguntan sin opciones: escribí tu respuesta, el sistema cuenta cuántos conceptos clave incluiste y vos te calificás. Al final ves tu nota real.'
    :'Elegís una opción. El sistema te muestra al instante si acertaste. Al final ves tu nota real.';
  document.getElementById('ex-start').textContent=oral?'🎤 Empezar examen oral':'📝 Empezar examen';
}
function pickES(src,el){
  eSrc=src;
  selPill(el,'#ex-src');
}
// pills operables con teclado (Enter / Espacio)
document.addEventListener('keydown',function(e){
  if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('#ex-mode .pill, #ex-src .pill')){
    e.preventDefault();e.target.click();
  }
});
function startEx(){
  var oral=eMode==='oral';
  var pool=oral?Q.slice():eSrc==='var'?EQ_VARIANTS.slice():eSrc==='mix'?EQ.concat(EQ_VARIANTS):EQ.slice();
  if(eFilt.indexOf('all')<0){
    if(oral){
      pool=pool.filter(function(q){return eFilt.indexOf(q.cat)>=0;});
    } else {
      var labels=eFilt.map(function(id){return CATS.find(function(c){return c.id===id;}).label;});
      pool=pool.filter(function(q){return labels.indexOf(q.cat)>=0;});
    }
    if(!pool.length){alert('No hay preguntas de examen para los temas elegidos.');return;}
  }
  pool=pool.sort(function(){return Math.random()-.5;});
  eQ=eQty>0?pool.slice(0,eQty):pool;
  eRun=eMode;
  eI=0;eOk=0;eRes=[];
  document.getElementById('ex-set').classList.add('hide');
  document.getElementById('ex-res').classList.remove('on');
  document.getElementById('ex-qw').classList.add('on');
  showExQ();
}
function showExQ(){
  if(eI>=eQ.length){endEx();return;}
  var q=eQ[eI];
  var oral=eRun==='oral';
  document.getElementById('ex-num').textContent=(eI+1)+'/'+eQ.length;
  document.getElementById('ex-pb').style.width=(eI/eQ.length*100)+'%';
  document.getElementById('ex-cat').textContent=oral?q.catLabel:q.cat;
  var dlbl={'facil':'★ Fácil','media':'★★ Media','dificil':'★★★ Difícil'};
  var dcls={'facil':'diff diff-facil','media':'diff diff-media','dificil':'diff diff-dificil'};
  var dk=oral?oralDiff(q):q.diff;
  var dEl=document.getElementById('ex-diff');
  if(dEl){dEl.className=dcls[dk]||'diff diff-media';dEl.textContent=dlbl[dk]||dk;}
  document.getElementById('ex-q').textContent=q.q;
  var fb=document.getElementById('ex-fb');
  fb.className='fb';
  document.getElementById('ex-fbt').textContent='';
  document.getElementById('ex-fbc').innerHTML='';
  document.getElementById('ex-nb').classList.remove('on');
  document.getElementById('ex-opts').classList.toggle('hide',oral);
  document.getElementById('ex-oral').classList.toggle('hide',!oral);
  if(oral){
    var ta=document.getElementById('ex-txt');
    ta.value='';ta.readOnly=false;
    document.getElementById('ex-ver').classList.remove('hide');
    document.getElementById('ex-oa').style.display='none';
    eWritten=null;
    return;
  }
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
}
// ── modo oral ──
// Q no tiene dificultad: se toma la de la pregunta de examen (EQ o variante) del mismo eje más parecida; si no hay, media.
var oralDiffCache={};
function oralDiff(q){
  if(oralDiffCache[q.id])return oralDiffCache[q.id];
  var want=thToks(q.q+' '+q.a),best='media',bs=0;
  EQ.concat(EQ_VARIANTS).forEach(function(e){
    if(e.cat!==q.catLabel)return;
    var have=thToks(e.q+' '+e.opts[e.correct]+' '+e.feedback),n=0,m=0;
    Object.keys(have).forEach(function(w){m++;if(want[w])n++;});
    var sc=n/Math.sqrt(m+1);
    if(sc>bs){bs=sc;best=e.diff;}
  });
  return (oralDiffCache[q.id]=best);
}
function verifyOral(){
  var q=eQ[eI];
  var ta=document.getElementById('ex-txt');
  var res=checkWritten(q,ta.value);
  eWritten={text:ta.value.trim(),found:res.found,total:res.total};
  ta.readOnly=true;
  document.getElementById('ex-ver').classList.add('hide');
  document.getElementById('ex-ors').textContent='Encontraste '+res.found+' de '+res.total+' conceptos clave';
  var li='';
  res.kws.forEach(function(k){
    li+='<li class="'+(k.found?'y':'n')+'">'+(k.found?'✓ ':'✗ ')+kwEsc(k.label)+'</li>';
  });
  document.getElementById('ex-okw').innerHTML=li;
  document.getElementById('ex-oat').innerHTML=kwHighlight(q.a,res.kws)
    +(q.tip?'<div class="tip"><strong>💡 Tip:</strong> '+q.tip+'</div>':'');
  var a=document.getElementById('ex-oa');
  a.style.display='block';
  a.setAttribute('tabindex','-1');
  a.style.outline='none';
  a.focus({preventScroll:true});
  var nav=document.querySelector('.nav');
  window.scrollTo(0,Math.max(0,a.getBoundingClientRect().top+window.pageYOffset-(nav?nav.offsetHeight:0)-8));
}
function markOral(ok){
  var q=eQ[eI];
  if(ok)eOk++;
  else{fails[q.id]=(fails[q.id]||0)+1;localStorage.setItem('af',JSON.stringify(fails));}
  recExamCat(q.cat,ok);
  eRes.push({id:q.id,q:q.q,cat:q.catLabel,ok:ok,oral:true,item:q,w:eWritten});
  eI++;
  showExQ();
  var w=document.getElementById('ex-qw');
  if(w&&w.scrollIntoView)w.scrollIntoView({block:'nearest'});
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
  eRes.push({id:qid,q:q.q,cat:q.cat,ok:ok,your:curOpts[idx],ans:curOpts[curCorrect],item:q});
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
  eRes.forEach(function(r,i){
    var t=r.ok?null:(r.oral?r.item:findTheory(r.item));
    rv+='<div class="rai '+(r.ok?'ok':'no')+'"><div class="raq">'+r.q+'</div>'
      +(r.oral
        ?'<div class="ray'+(r.ok?'':' w')+'">'+(r.ok?'✓ La sabías':'✗ No la sabías')
          +(r.w?' · '+r.w.found+' de '+r.w.total+' conceptos clave':'')+'</div>'
          +(r.w&&r.w.text?'<div class="ray" style="color:var(--mut);white-space:pre-wrap">Tu respuesta: '+kwEsc(r.w.text.length>240?r.w.text.slice(0,240)+'…':r.w.text)+'</div>':'')
        :'<div class="ray'+(r.ok?'':' w')+'">Tu respuesta: '+r.your+'</div>'
          +(r.ok?'':'<div class="rac">✓ Correcta: '+r.ans+'</div>'))
      +(t?theoryHTML(t,i):'')
      +'</div>';
  });
  document.getElementById('ex-rev').innerHTML=rv;
  saveSes(pct,eOk,0,eQ.length-eOk,eQ.length,'examen');
  document.getElementById('ex-res').classList.add('on');
}
// ── teoría de Repaso para las preguntas falladas ──
// Busca en Q, dentro del mismo eje (cat), la tarjeta con más palabras en común
// (pregunta y respuesta correcta pesan más que el feedback); si ninguna coincide, la primera del eje.
var TH_STOP={};
'para como cual cuales entre desde sobre sino esta este estos estas donde pero porque cada todo todos solo tiene tienen hace puede pueden mismo tambien mas menos muy una uno unos unas del con que por son ser era nodo'.split(' ').forEach(function(w){TH_STOP[w]=1;});
var thDf=null;
function thToks(str){
  var o={};
  str.replace(/<[^>]*>/g,' ').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().split(/[^a-z0-9]+/).forEach(function(w){
    if(w.length>=4&&!TH_STOP[w])o[w]=1;
  });
  return o;
}
function findTheory(e){
  if(!e)return null;
  var c=CATS.find(function(x){return x.label===e.cat;});
  if(!c)return null;
  var pool=Q.filter(function(q){return q.cat===c.id;});
  if(!pool.length)return null;
  if(!thDf){
    thDf={};
    Q.forEach(function(q){Object.keys(thToks(q.q+' '+q.a+' '+(q.tip||''))).forEach(function(w){thDf[w]=(thDf[w]||0)+1;});});
  }
  var want={};
  [[e.q+' '+e.opts[e.correct],2],[e.feedback,1]].forEach(function(p){
    Object.keys(thToks(p[0])).forEach(function(w){want[w]=Math.max(want[w]||0,p[1]);});
  });
  var best=pool[0],bs=0;
  pool.forEach(function(q){
    var tt=thToks(q.q),ta=thToks(q.a+' '+(q.tip||'')),s=0;
    Object.keys(want).forEach(function(w){
      var idf=Math.log((Q.length+1)/((thDf[w]||0)+1))+0.1;
      if(tt[w])s+=3*want[w]*idf;else if(ta[w])s+=want[w]*idf;
    });
    s/=Math.sqrt(Object.keys(ta).length+Object.keys(tt).length+1);
    if(s>bs){bs=s;best=q;}
  });
  return best;
}
function theoryHTML(t,i){
  return '<button type="button" class="rtb" aria-expanded="false" aria-controls="rt-'+i+'" onclick="togTeoria('+i+',this)">📖 Ver teoría</button>'
    +'<div class="fc open rtp hide" id="rt-'+i+'">'
    +'<div class="fcq"><div><div class="ql">'+t.catLabel+'</div><div class="qt">'+t.q+'</div></div></div>'
    +'<div class="fca"><div class="al">Respuesta</div>'
    +'<div class="at">'+t.a+(t.tip?'<div class="tip"><strong>💡 Tip:</strong> '+t.tip+'</div>':'')+'</div></div></div>';
}
function togTeoria(i,btn){
  var closed=document.getElementById('rt-'+i).classList.toggle('hide');
  btn.setAttribute('aria-expanded',closed?'false':'true');
  btn.textContent=closed?'📖 Ver teoría':'📖 Ocultar teoría';
}
function restartEx(){
  document.getElementById('ex-res').classList.remove('on');
  document.getElementById('ex-set').classList.remove('hide');
}
