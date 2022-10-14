
var tmp;

function muda() {
  var dv1=document.getElementById("dv1");
let r=Math.floor(Math.random()*255);
let g=Math.floor(Math.random()*255);
let b=Math.floor(Math.random()*255);
dv1.style.backgroundColor="rgb(" + r + "," + g + "," + b+")";

}

tmp=setInterval(muda,2000);