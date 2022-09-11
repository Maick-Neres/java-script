var ano;
var entrada;   
var idade; 
var res;
var imgs;


function start(){
    var obj=document.getElementById("btn").addEventListener("click",loading);
}
function check(){
    var sexo=document.getElementsByName("rasc");
     idade= ano-Number(entrada.value);
    var genero=""
    imgs=document.createElement('img');
    imgs.setAttribute('id','foto');

   if(sexo[0].checked){
    genero= "Homen"
     if(idade>=0 && idade<=10){
       imgs.setAttribute('src','foto-bebe-m.png');
    }else if(idade<=30){
        imgs.setAttribute('src','foto-jovem-m.png');
    }else if(idade<=50){
        imgs.setAttribute('src','foto-adulto-m.png');
    }else{
        imgs.setAttribute('src','foto-idoso-m.png');
    }
   }else{
    genero="Mulher"
    if(idade>=0 && idade<=10){
        imgs.setAttribute('src','foto-bebe-f.png');
     }else if(idade<=30){
         imgs.setAttribute('src','foto-jovem-f.png');
     }else if(idade<=50){
         imgs.setAttribute('src','foto-adulto-f.png');
     }else{
         imgs.setAttribute('src','foto-idoso-f.png');
     }
   } 
  
   res.style.textAlign="center"
   res.innerHTML=`Um ${genero} de ${idade} anos`
   res.appendChild(imgs);
}
function loading(){
    var data=new Date();
    ano=data.getFullYear();
    entrada=document.getElementById("txtano");
    res=document.querySelector("div#res");

    if(entrada.value.length == 0|| Number(entrada.value>ano)){
        alert("[ERRO!!] Verifique o ano de nascimento e tente novamente");
        return false;
    }else{
        check();
       
     return true;
    }
}
window.addEventListener("load",start)
