const parray=document.getElementById("array") ;
const bnt=document.getElementById("bntPesquisar");
const res=document.getElementById("resultado");

const elementos=[10,12,10,14,11,19]
parray.innerHTML="["+elementos+"]";

bnt.addEventListener("click",(evt)=>{ 
  // no mesmo esquema passa -se uma function para o  some
    const ever=elementos.some((e,i,a)=>{
      // também o (e) elemnto (i) o indeci e (a) o array;
      if(e<18){
        res.innerHTML="Array não conforme na posição "+Number(i+1);
      }else{
         res.innerHTML="OK, na posição "+ Number(i+1);
      }
       return e>=18;
    })
    // if(ever){
     
    // }
    // console.log(ever);

})


