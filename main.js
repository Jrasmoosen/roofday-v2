// Nav
function toggleMenu(){
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Sticky CTA
window.addEventListener('scroll',function(){
  var s=document.getElementById('stickyCta');
  if(s)s.classList[window.scrollY>400?'add':'remove']('visible');
});

// Calculator
var calcVol=500000;
function fmt(n){return n>=1000000?'$'+(n/1000000).toFixed(1).replace(/\.0$/,'')+'M':'$'+n.toLocaleString('en-US',{maximumFractionDigits:0});}
function fmtV(v){return v>=1000000?'$'+(v/1000000)+'M':'$'+(v/1000)+'K';}
function setVol(el,amt){
  document.querySelectorAll('.vol').forEach(function(b){b.classList.remove('active');});
  el.classList.add('active');
  calcVol=amt;
  calcUpdate();
}
function calcUpdate(){
  var sl=document.getElementById('rateSlider');
  if(!sl)return;
  var pct=parseFloat(sl.value),sav=calcVol*(pct/100);
  var f=((pct-3)/12)*100;
  sl.style.background='linear-gradient(to right,#c2874d '+f+'%,#1e1e1c '+f+'%)';
  document.getElementById('rateVal').textContent=pct+'%';
  document.getElementById('resAmt').textContent=fmt(sav);
  document.getElementById('resFormula').textContent=fmtV(calcVol)+' \u00d7 '+pct+'% = '+fmt(sav);
  document.getElementById('resSub').innerHTML='That\'s <strong>'+fmt(sav)+'</strong> back in your pocket \u2014 just for buying what you already buy.';
}
document.addEventListener('DOMContentLoaded',function(){calcUpdate();});
