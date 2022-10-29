const parray=document.getElementById("array") ;
const text=document.getElementById("text_pesquisar");
const bnt=document.getElementById("bntPesquisar");
const res=document.getElementById("resultado");

const elementos=[10,5,8,6,54,"HTML","JS","CSS"]
parray.innerHTML="["+elementos+"]";

bnt.addEventListener("click",(evt)=>{ 
    res.innerHTML="Valor não encontrado"
  const ret =elementos.find((e,i,a)=>{
 
   if(e.toString().toUpperCase()==text.value.toString().toUpperCase()){
    res.innerHTML="encontrado " +e+" na posição "+Number(i+1);
    return e
   }
  })

})


