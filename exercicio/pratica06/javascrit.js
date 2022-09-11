// function callback(){
//     let botao=document.getElementById("btn");
//     botao.addEventListener("click",tabuada);
// }
// function tabuada(){
//     let n1=document.getElementById("impu");
//     let n2;
//     let n3;
// }
// window.addEventListener("load",callback);

var y=5
var sinal= "/";


















const b=10
for(let c=0;c<=b;c++){
    if(sinal.includes("*")){
 console.log(y+sinal+c+"= "+c*y);
    }else if(sinal.includes("/")){
        console.log(y+sinal+c+"= "+ c/y);
    }else if(sinal.includes("+")){
        console.log(y+sinal+c+"= "+(c+y));
    }else if(sinal.includes("-")){
        console.log(`${y}${sinal}${c}=${y-c}`);
    }else{
        b=0
        console.log("[ERRO]...tente novamente.")
    }
   
}
