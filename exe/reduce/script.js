const parray=document.getElementById("array") ;
const bnt=document.getElementById("btn_reduce");
const res=document.getElementById("resultado");

const elementos=[1,2,3,4,5]
let ant=[];
let atu=[];
let dobro=[];
parray.innerHTML="["+elementos+"]";

bnt.addEventListener("click",(evt)=>{ 
 res.innerHTML=elementos.reduce((ante,atua,pos)=>{
  // dobro.push(elementos[0]*2);Para pegar o primeiro elemento[];
  ant.push(ante);
  atu.push(atua);
  dobro.push(atua*2)
    return ante+atua
  })
  res.innerHTML+="<br>Vaor Anterior: "+ant+"<br>Valor atual "+atu+"<br> Dobro: "+dobro;
})


