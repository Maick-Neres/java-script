function carregar(){
   var data=new Date();
   var hor=data.getHours();
   var msg=document.getElementById("msg").innerHTML=("Agora são "+hor+" horas.")
   var img=document.getElementById("imagem");
   if(hor >=0 && hor<12){
      // Bom dia!
   }else if(hor >=12 && hor<=18){
      // Boa tarde!
   }else{
      // boa noite
   }
   
}
carregar()

// function relogio(){
//    var data=new Date()
//    var hor=data.getHours();
//    var min=data.getMinutes();
//    var seg=data.getSeconds();
//    var horas=hor+":"+min+":"+seg
//    document.getElementById("dv1").innerHTML=(horas);
   
  
// }
// var tempo=setInterval(relogio,1000);


