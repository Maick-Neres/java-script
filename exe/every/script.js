const parray=document.getElementById("array") ;
const bnt=document.getElementById("bntPesquisar");
const res=document.getElementById("resultado");

const elementos=[18,32,18,20,20]
parray.innerHTML="["+elementos+"]";

bnt.addEventListener("click",(evt)=>{ 
  // no mesmo esquema passa -se uma function para o  every
    const ever=elementos.every((e,i,a)=>{
      // também o (e) elemnto (i) o indeci e (a) o array;
      if(e<18){
        res.innerHTML="Array não conforme na posição "+Number(i+1);
      }
       return e>=18;
    })
    if(ever){
      res.innerHTML="OK"
    }
    console.log(ever);

})


