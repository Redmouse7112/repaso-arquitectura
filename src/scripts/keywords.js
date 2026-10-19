// ── PALABRAS CLAVE (modo oral: respuesta escrita) ──
// Extrae conceptos clave del campo "a" de una pregunta de Q y los busca en lo que escribió el usuario.
// JavaScript puro: normalización de texto (minúsculas, sin acentos), sin IA ni librerías.
var KW_MIN=3, KW_MAX=8;
var KW_SKIP={};
'tambien cuando porque siguiente mediante durante despues siempre dentro traves pueden tienen siendo ejemplo ejemplos'.split(' ').forEach(function(w){KW_SKIP[w]=1;});
var KW_SMALL={};
'de del la las el los un una unos unas al en y o a con por para que se su sus es'.split(' ').forEach(function(w){KW_SMALL[w]=1;});
// títulos de sección que van en <strong> pero no son conceptos de la respuesta
var KW_HEAD=/^(ventajas?|desventajas?|ejemplos?|caracteristicas|funciones? principales?|tipos|problemas|analogia|estructura|comparacion|funcionamiento|propiedades|reglas generales|sus niveles|por funcion|por conexion|principales organismos|estandares mas importantes|conceptos clave|capas de defensa|tecnologias|componentes|elementos principales|relacion entre ambos|limitacion conocida|dos variantes|ataques de red|evolucion|principio|unidades de medida|representacion segun|conversion|sin pipeline|con pipeline|justificacion|el patron|como funciona|que es)(?![a-z0-9])/;
var kwDf=null;

// minúsculas y sin acentos, conservando la longitud (para poder mapear posiciones al texto original)
function kwNorm(s){
  var o='';
  for(var i=0;i<s.length;i++)o+=s.charAt(i).normalize('NFD').charAt(0);
  return o.toLowerCase();
}
function kwWords(s){return kwNorm(s).split(/[^a-z0-9]+/).filter(Boolean);}
function kwPlain(html){return html.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();}
function kwEsc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function kwDfInit(){
  kwDf={};
  Q.forEach(function(q){
    var seen={};
    kwWords(kwPlain(q.a)).forEach(function(w){if(!seen[w]){seen[w]=1;kwDf[w]=(kwDf[w]||0)+1;}});
  });
}
// tokens de una frase: sin conectores ni dígitos sueltos
function kwToks(phrase){
  return kwWords(phrase).filter(function(w){return !KW_SMALL[w]&&w.length>1;});
}
// palabras con su forma original (para mostrarlas con acentos)
function kwWordsO(s){
  var o=[];
  s.split(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+/).forEach(function(w){if(w)o.push({o:w,n:kwNorm(w)});});
  return o;
}

// → [{label, alts:[[tokens]], needles:[{s,ext}]}]
function extractKW(q){
  if(!kwDf)kwDfInit();
  var out=[],keys={},covered={};
  function mark(toks){toks.forEach(function(t){covered[t]=1;});}
  function push(c){
    var k=kwNorm(c.label);
    if(keys[k]||out.length>=KW_MAX)return false;
    keys[k]=1;out.push(c);return true;
  }
  var text=kwPlain(q.a);

  // 1) términos en <strong>
  var re=/<strong>([\s\S]*?)<\/strong>/g,m;
  while((m=re.exec(q.a))){
    var t=kwPlain(m[1]).replace(/[\s:;,.]+$/,'').replace(/^\d+\.\s+/,'').trim();
    if(t.length<2||t.length>60||/\?/.test(t)||t.split(' ').length>6)continue;
    if(KW_HEAD.test(kwNorm(t)))continue;
    var pm=t.match(/^(.*?)\s*\(([^)]*)\)\s*(.*)$/);
    var main=pm?(pm[1]+' '+pm[3]).trim():t, par=pm?pm[2].trim():'';
    if(!main){main=par;par='';}
    var alts=[kwToks(main)];
    if(!alts[0].length)continue;
    if(par){var pt=kwToks(par);if(pt.length)alts.push(pt);}
    // texto a resaltar: cada pedazo tal como aparece en la respuesta
    var pieces=pm?[pm[1],pm[2],pm[3].replace(/^[\s—–-]+/,'')]:[t];
    var needles=[];
    pieces.forEach(function(x){
      x=x.trim();
      if(x.length>=2)needles.push({s:kwNorm(x).replace(/\s+/g,' '),ext:false});
    });
    if(push({label:t,alts:alts,needles:needles}))alts.forEach(mark);
  }
  // 2) siglas (2+ mayúsculas seguidas)
  var are=/(^|[^A-Za-zÁÉÍÓÚÑáéíóúñ0-9])([A-ZÁÉÍÓÚÑ]{2,})(?![A-Za-zÁÉÍÓÚÑáéíóúñ0-9])/g;
  while((m=are.exec(text))){
    var a=kwNorm(m[2]);
    if(covered[a])continue;
    if(push({label:m[2],alts:[[a]],needles:[{s:a,ext:false,exact:true}]}))covered[a]=1;
  }
  // 3) números y años
  var nre=/(^|[^A-Za-zÁÉÍÓÚÑáéíóúñ0-9])(\d{2,})(?![A-Za-zÁÉÍÓÚÑáéíóúñ0-9])/g;
  while((m=nre.exec(text))){
    if(covered[m[2]])continue;
    if(push({label:m[2],alts:[[m[2]]],needles:[{s:m[2],ext:false,exact:true}]}))covered[m[2]]=1;
  }
  // 4) palabras largas (>6 letras), las menos comunes en todo Q primero
  function words(min){
    var seen={},list=[];
    kwWordsO(text).forEach(function(x,i){
      var w=x.n;
      if(w.length<min||/\d/.test(w)||KW_SKIP[w]||covered[w]||seen[w]||KW_SMALL[w])return;
      seen[w]=1;list.push({w:w,o:x.o.toLowerCase()===x.o?x.o:x.o.charAt(0)+x.o.slice(1).toLowerCase(),i:i});
    });
    list.sort(function(x,y){return (kwDf[x.w]||0)-(kwDf[y.w]||0)||x.i-y.i;});
    return list;
  }
  function addWords(list,upTo){
    list.forEach(function(x){
      if(out.length>=upTo)return;
      if(push({label:x.o,alts:[[x.w]],needles:[{s:x.w,ext:true}]}))covered[x.w]=1;
    });
  }
  addWords(words(7),KW_MAX);
  // respaldo: si quedaron menos de KW_MIN, se agregan palabras de 5-6 letras
  if(out.length<KW_MIN)addWords(words(5),KW_MIN);
  return out;
}

function kwTokHit(t,ut){
  if(t.length<=3||/^\d+$/.test(t))return !!ut.set[t];
  return ut.arr.some(function(u){
    return u.indexOf(t)===0||(u.length>=5&&t.indexOf(u)===0&&t.length-u.length<=3);
  });
}
function kwHit(c,ut){
  return c.alts.some(function(toks){
    var n=toks.length,need=n<=2?n:Math.ceil(n*0.6),got=0;
    toks.forEach(function(t){if(kwTokHit(t,ut))got++;});
    return got>=need;
  });
}
// → {kws:[{label,found,needles}], found, total}
function checkWritten(q,userText){
  var arr=kwWords(userText),set={};
  arr.forEach(function(w){set[w]=1;});
  var ut={arr:arr,set:set},found=0;
  var kws=extractKW(q).map(function(c){
    var f=kwHit(c,ut);
    if(f)found++;
    return {label:c.label,found:f,needles:c.needles};
  });
  return {kws:kws,found:found,total:kws.length};
}

// Devuelve el HTML de la respuesta con los conceptos faltantes envueltos en <mark class="miss">
function kwHighlight(html,kws){
  var needles=[];
  kws.forEach(function(k){if(!k.found)k.needles.forEach(function(n){if(n.s)needles.push(n);});});
  var box=document.createElement('div');
  box.innerHTML=html;
  if(!needles.length)return box.innerHTML;
  var nodes=[],w=document.createTreeWalker(box,NodeFilter.SHOW_TEXT,null,false),n;
  while((n=w.nextNode()))nodes.push(n);
  var isW=function(c){return /[a-z0-9]/.test(c);};
  nodes.forEach(function(node){
    var norm=kwNorm(node.data),ranges=[];
    needles.forEach(function(nd){
      var from=0,i;
      while((i=norm.indexOf(nd.s,from))>=0){
        var end=i+nd.s.length;
        from=end;
        if(i>0&&isW(norm.charAt(i-1)))continue;
        if(nd.exact&&end<norm.length&&isW(norm.charAt(end)))continue;
        if(nd.ext)while(end<norm.length&&isW(norm.charAt(end)))end++;
        ranges.push([i,end]);
      }
    });
    if(!ranges.length)return;
    ranges.sort(function(a,b){return a[0]-b[0]||b[1]-a[1];});
    var merged=[];
    ranges.forEach(function(r){
      var last=merged[merged.length-1];
      if(last&&r[0]<=last[1])last[1]=Math.max(last[1],r[1]);else merged.push(r.slice());
    });
    var frag=document.createDocumentFragment(),pos=0,d=node.data;
    merged.forEach(function(r){
      if(r[0]>pos)frag.appendChild(document.createTextNode(d.slice(pos,r[0])));
      var mk=document.createElement('mark');
      mk.className='miss';
      mk.textContent=d.slice(r[0],r[1]);
      frag.appendChild(mk);
      pos=r[1];
    });
    if(pos<d.length)frag.appendChild(document.createTextNode(d.slice(pos)));
    node.parentNode.replaceChild(frag,node);
  });
  return box.innerHTML;
}
