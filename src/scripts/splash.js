// ── SPLASH ──
function hideSplash(){
  var s=document.getElementById('splash');
  s.classList.add('out');
  setTimeout(function(){s.style.display='none';},650);
}
