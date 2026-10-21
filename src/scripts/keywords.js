// ── CONCEPTOS CLAVE (modo oral: respuesta escrita) ──
// Los conceptos son las frases cortas que van en <strong> dentro del campo "a" de cada pregunta de Q.
// Se buscan en lo que escribió el usuario sin importar mayúsculas ni acentos, aceptando que las
// palabras de la frase aparezcan separadas (hasta KW_GAP palabras de más) y sinónimos básicos.
// JavaScript puro, sin IA ni librerías.
var KW_MIN=3, KW_MAX=8, KW_GAP=5;
var KW_SMALL={};
'de del la las el los un una unos unas al en y o a con por para que se su sus es'.split(' ').forEach(function(w){KW_SMALL[w]=1;});
// títulos de sección que van en <strong> pero no son conceptos de la respuesta
var KW_HEAD=/^(ventajas?|desventajas?|ejemplos?|caracteristicas|funcion(es)? principal(es)?|tecnicas principales|es el|tipos|problemas|analogia|estructura|comparacion|funcionamiento|propiedades|reglas generales|sus niveles|por funcion|por conexion|principales organismos|estandares mas importantes|conceptos clave|capas de defensa|tecnologias|componentes|elementos principales|relacion entre ambos|limitacion conocida|dos variantes|ataques de red|evolucion|principio|unidades de medida|representacion segun|conversion|sin pipeline|con pipeline|justificacion|el patron|como funciona|que es)(?![a-z0-9])/;
// sinónimos básicos: cada regla lleva a una misma forma canónica
var KW_SYN=[
  [/^(extremadamente|altamente|muy)$/,'muy'],
  [/^distribu/,'distribu'],
  [/^(nodo|dispositivo|equipo)s?$/,'nodo'],
  [/^(central|centrales|centralizad[oa]s?|centralizacion)$/,'central'],
  [/^(computador[a]?|ordenador|pc)(es|s)?$/,'computador'],
  [/^fall[oa]s?$/,'fallo'],
  [/^(sin|no)$/,'sin']
];

// equivalencias entre frases (se aplican a la frase del concepto y al texto del usuario)
var KW_PHRASE=[
  ['paginas? web','www'], ['world wide web','www'],
  ['departamento de defensa','darpa'],
  ['sistema de nombres( de dominio)?','dns'],
  ['era movil','eramovil'], ['smartphones?|celulares?|telefonos? (moviles|celulares)','eramovil']
].map(function(p){return [new RegExp(' ('+p[0]+')(?= )','g'),' '+p[1]];});
// nombres propios: si un concepto contiene uno, alcanza con que el usuario nombre a esa persona/entidad
// (si el concepto nombra a dos, con una basta).
// all: palabras del concepto que la identifican; user: palabras que, solas, la nombran (incluye variantes mal escritas)
var KW_NAMES={
  cerf:{all:['vint','cerf'],user:['cerf','vint']},
  berners:{all:['tim','berners','lee'],user:['berners']},
  kahn:{all:['bob','kahn','hakn'],user:['kahn','hakn']},
  darpa:{all:['darpa'],user:['darpa']},
  cern:{all:['cern'],user:['cern']},
  intel:{all:['intel'],user:['intel']},
  ibm:{all:['ibm'],user:['ibm']}
};

// minúsculas y sin acentos, conservando la longitud (para poder mapear posiciones al texto original)
function kwNorm(s){
  var o='';
  for(var i=0;i<s.length;i++)o+=s.charAt(i).normalize('NFD').charAt(0);
  return o.toLowerCase();
}
function kwWords(s){
  var t=' '+kwNorm(s).replace(/[^a-z0-9]+/g,' ').trim()+' ';
  KW_PHRASE.forEach(function(p){t=t.replace(p[0],p[1]);});
  return t.split(' ').filter(Boolean);
}
function kwPlain(html){return html.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();}
function kwEsc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
// tokens de una frase: sin conectores ni dígitos sueltos
function kwToks(phrase){
  return kwWords(phrase).filter(function(w){return !KW_SMALL[w]&&w.length>1;});
}
// forma canónica de una palabra: sinónimos y plural simple
function kwCanon(w){
  for(var i=0;i<KW_SYN.length;i++)if(KW_SYN[i][0].test(w))return KW_SYN[i][1];
  if(w.length>7&&/mente$/.test(w))return w.slice(0,-5);
  if(w.length>4&&/es$/.test(w))return w.slice(0,-2);
  if(w.length>3&&/s$/.test(w))return w.slice(0,-1);
  return w;
}
function kwSame(c,u){
  if(c===u)return true;
  if(/^\d+$/.test(c)||c.length<5||u.length<5)return false;
  return u.indexOf(c)===0||(c.indexOf(u)===0&&c.length-u.length<=3);
}

// personas/entidades (KW_NAMES) que nombra un concepto
function kwNames(alts){
  var out=[];
  Object.keys(KW_NAMES).forEach(function(g){
    var hit=alts.some(function(toks){return toks.some(function(t){return KW_NAMES[g].all.indexOf(t)>=0;});});
    if(hit)out.push(g);
  });
  return out;
}
// → [{label, alts:[[tokens]], needles:[{s}], names:[grupos]}]
function extractKW(q){
  var out=[],keys={};
  function push(c){
    var k=kwNorm(c.label);
    if(keys[k]||out.length>=KW_MAX)return false;
    keys[k]=1;out.push(c);return true;
  }
  var text=kwPlain(q.a),m;
  // 1) frases cortas en <strong>
  var re=/<strong[^>]*>([\s\S]*?)<\/strong>/g;
  while((m=re.exec(q.a))){
    var t=kwPlain(m[1]).replace(/[\s:;,.]+$/,'').replace(/^\d+\.\s+/,'').trim();
    if(t.length<2||t.length>60||/\?/.test(t)||KW_HEAD.test(kwNorm(t)))continue;
    var pm=t.match(/^(.*?)\s*\(([^)]*)\)\s*(.*)$/);
    var main=pm?(pm[1]+' '+pm[3]).trim():t, par=pm?pm[2].trim():'';
    if(!main){main=par;par='';}
    var alts=[kwToks(main)];
    if(!alts[0].length||alts[0].length>4)continue;
    if(par){var pt=kwToks(par);if(pt.length&&pt.length<=4)alts.push(pt);}
    // texto a resaltar: cada pedazo tal como aparece en la respuesta
    var pieces=pm?[pm[1],pm[2],pm[3].replace(/^[\s—–-]+/,'')]:[t];
    var needles=[];
    pieces.forEach(function(x){
      x=x.trim();
      if(x.length>=2)needles.push({s:kwNorm(x).replace(/\s+/g,' ')});
    });
    push({label:t,alts:alts,needles:needles,names:kwNames(alts)});
  }
  // respaldo (si la respuesta tiene menos de KW_MIN frases): siglas y cifras
  if(out.length<KW_MIN){
    var fb=/(^|[^A-Za-zÁÉÍÓÚÑáéíóúñ0-9])([A-ZÁÉÍÓÚÑ]{2,}|\d{2,})(?![A-Za-zÁÉÍÓÚÑáéíóúñ0-9])/g;
    while((m=fb.exec(text))){
      if(out.length>=KW_MIN)break;
      push({label:m[2],alts:[[kwNorm(m[2])]],needles:[{s:kwNorm(m[2]),exact:true}]});
    }
  }
  return out;
}

// ¿Aparecen las palabras de la frase (o sus equivalentes) dentro de una ventana de n+KW_GAP palabras?
// Frases de 4 palabras toleran que falte una; las más cortas deben estar completas.
function kwWindow(toks,uc){
  var n=toks.length,cc=toks.map(kwCanon),span=n+KW_GAP,need=n>=4?n-1:n;
  var hit=function(w,k){return w.some(function(u){return kwSame(cc[k],u);});};
  if(n===1)return hit(uc,0);
  for(var i=0;i<uc.length;i++){
    var win=uc.slice(i,i+span),got=0;
    for(var k=0;k<n;k++)if(hit(win,k))got++;
    if(got>=need)return true;
  }
  return false;
}
// → {kws:[{label,found,needles}], found, total}
function checkWritten(q,userText){
  var uc=kwWords(userText).map(kwCanon),found=0;
  var kws=extractKW(q).map(function(c){
    var f=c.alts.some(function(toks){return kwWindow(toks,uc);})
      ||(c.names&&c.names.some(function(g){
        return KW_NAMES[g].user.some(function(u){return uc.indexOf(kwCanon(u))>=0;});
      }));
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

// Versión condensada de una respuesta: hasta `max` puntos de lista con <strong>; sin lista, las 2 primeras oraciones
function condenseA(html,max){
  var box=document.createElement('div');
  box.innerHTML=html;
  var lis=[].slice.call(box.querySelectorAll('li')).filter(function(li){return li.querySelector('strong');});
  var out;
  if(lis.length){
    out='<ul>'+lis.slice(0,max).map(function(li){return '<li>'+li.innerHTML+'</li>';}).join('')+'</ul>';
  } else {
    var t=html.replace(/<br\s*\/?>/gi,' ').replace(/<strong[^>]*>/gi,'<strong>').replace(/<(?!\/?strong>)[^>]*>/g,' ').replace(/\s+/g,' ').trim();
    var ss=t.match(/[^.!?]+[.!?]+(\s|$)/g)||[t];
    out='<div>'+ss.slice(0,2).join('').trim()+'</div>';
  }
  box.innerHTML=out; // cierra etiquetas que haya cortado el recorte
  return box.innerHTML;
}
