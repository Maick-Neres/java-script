            
function start(){
    var obj=document.getElementById("btn").addEventListener("click",loading);
}
function loading(){
    var data=new Date();
    var ano=data.getFullYear();
 
    var entrada=document.getElementById("txtano");
    var res=document.querySelector("div#res");

    if(entrada.value.length == 0|| Number(entrada.value>ano)){
        alert("[ERRO!] Verifique o ano de nascimento e tente novamente")
    }else{
        var sexo=document.getElementsByName("rasc");
        var idade= ano-Number(entrada.value);
       var genero=""
       
       if(sexo[0].Checked){
        genero= "Homen"
       }
       res.style.textAlign="center"
       res.innerHTML=`Detectamos ${genero} de ${idade} anos`
    }
}
window.addEventListener("load",start)
