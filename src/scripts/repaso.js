// ── REPASO (flashcards) ──
var rSt = JSON.parse(localStorage.getItem('ar')||'{}');

function buildTabs(){
  var t=document.getElementById('r-tabs');
  t.innerHTML='<div class="tab on" onclick="filtR(\'all\',this)">Todas</div>';
  CATS.forEach(function(c){
    if(Q.some(function(q){return q.cat===c.id;}))
      t.innerHTML+='<div class="tab" onclick="filtR(\''+c.id+'\',this)">'+c.label+'</div>';
  });
  t.innerHTML+='<div class="tab" onclick="filtR(\'weak\',this)">⚠️ A repasar</div>';
}
function buildCards(){
  var c=document.getElementById('r-cards');
  c.innerHTML='';
  var html='';
  CATS.forEach(function(cat){
    var qs=Q.filter(function(q){return q.cat===cat.id;});
    if(!qs.length)return;
    html+='<div class="sec" data-sec="'+cat.id+'">'+cat.label+'</div>';
    qs.forEach(function(q){
      html+='<div class="fc" data-cat="'+q.cat+'" id="fc-'+q.id+'">'
        +'<div class="fcq" onclick="togFC(\''+q.id+'\')">'
        +'<div><div class="ql">'+q.catLabel+'</div><div class="qt">'+q.q+'</div></div>'
        +'<div class="arr">▼</div></div>'
        +'<div class="fca"><div class="al">Respuesta</div>'
        +'<div class="at">'+q.a+(q.tip?'<div class="tip"><strong>💡 Tip:</strong> '+q.tip+'</div>':'')+'</div>'
        +'<div class="vd">'
        +'<button class="bok" onclick="markR(\''+q.id+'\',\'ok\')">✓ La sabía</button>'
        +'<button class="bno" onclick="markR(\''+q.id+'\',\'no\')">✗ A repasar</button>'
        +'</div></div></div>';
    });
  });
  c.innerHTML=html;
  document.getElementById('r-tot').textContent=Q.length;
  Object.keys(rSt).forEach(function(id){
    if(document.getElementById('fc-'+id))setBadge(id,rSt[id]);
    else delete rSt[id];
  });
  updR();
  attachFlashcardSwipe();
}
function togFC(id){document.getElementById('fc-'+id).classList.toggle('open');}
function setBadge(id,res){
  var fc=document.getElementById('fc-'+id);
  var old=fc.querySelector('.bdg'); if(old)old.remove();
  var b=document.createElement('div');
  b.className='bdg bdg-'+res;
  b.textContent=res==='ok'?'✓ La sabía':'✗ A repasar';
  fc.querySelector('.fca').appendChild(b);
}
function markR(id,res){
  rSt[id]=res;
  localStorage.setItem('ar',JSON.stringify(rSt));
  setBadge(id,res);
  updR();
}
function resetR(){
  if(!confirm('¿Reiniciar el progreso del repaso?'))return;
  rSt={};
  localStorage.removeItem('ar');
  document.querySelectorAll('#r-cards .bdg').forEach(function(b){b.remove();});
  updR();
  var on=document.querySelector('#r-tabs .tab.on');
  if(on)on.click();
}
function updR(){
  var ok=0,fl=0;
  Object.values(rSt).forEach(function(v){if(v==='ok')ok++;else fl++;});
  var an=ok+fl;
  document.getElementById('r-ok').textContent=ok;
  document.getElementById('r-fl').textContent=fl;
  document.getElementById('r-pb').style.width=(an/Q.length*100)+'%';
  document.getElementById('r-pl').textContent=an+' / '+Q.length+' respondidas';
}
function filtR(cat,el){
  document.querySelectorAll('#r-tabs .tab').forEach(function(t){t.classList.remove('on');});
  el.classList.add('on');
  document.querySelectorAll('#r-cards .fc').forEach(function(c){
    if(cat==='all')c.classList.remove('hide');
    else if(cat==='weak')c.classList.toggle('hide',rSt[c.id.replace('fc-','')]!=='no');
    else c.classList.toggle('hide',c.dataset.cat!==cat);
  });
  document.querySelectorAll('#r-cards .sec').forEach(function(s){
    s.style.display=cat==='all'?'':'none';
  });
}

// swipe horizontal sobre una flashcard cerrada = revelar/ocultar respuesta
function attachFlashcardSwipe(){
  document.querySelectorAll('#r-cards .fc').forEach(function(fc){
    swipeH(fc, function(){ fc.classList.add('open'); }, function(){ fc.classList.remove('open'); });
  });
}
