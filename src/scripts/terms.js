// ── TÉRMINOS DE USO ──
// El estado inicial (modal visible u oculto) lo fija el script del <head>
// leyendo localStorage 'terms_accepted', para que no haya parpadeo.
function acceptTerms(){
  try{localStorage.setItem('terms_accepted','true');}catch(e){}
  document.documentElement.classList.add('tok');
}
function declineTerms(){
  document.getElementById('terms-ask').classList.add('hide');
  document.getElementById('terms-block').classList.remove('hide');
}
function retryTerms(){
  document.getElementById('terms-block').classList.add('hide');
  document.getElementById('terms-ask').classList.remove('hide');
}
