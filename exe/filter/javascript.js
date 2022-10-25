
const dv2_S=document.querySelector(".secundaria");
const caixa=["BMW","Ferrari","FIAT","AUDI","TOYOTA","HONDA","MCLAREN","CHEVROLET"];
const bnt_seleciondo=document.getElementById("selecionado");
const btn_remover=document.getElementById("remover");
const bnt_adicionar_antes=document.getElementById("bnt-adicionar-antes");
const bnt_adicionar_depois=document.getElementById("bnt-adicionar-depois");
const nome=document.getElementById("nomeCurso");



let indice=0;
const criarNovoCurso=(curso)=>{
  const novo=document.createElement("div")
  novo.setAttribute("id","c"+indice)
  novo.innerHTML=curso;

  const radios=document.createElement("input")
  radios.setAttribute("type","radio")
  radios.setAttribute("name", "radios")
  novo.appendChild(radios)
  return novo
}
caixa.map((el)=>{
  const evt=criarNovoCurso(el);
  dv2_S.appendChild(evt);
  indice++
})

const radioSel=()=>{
  const todosRadios=[...document.querySelectorAll("input[type=radio]")];
  const radiosSelecionado=todosRadios.filter((ele)=>{
    return ele.checked;
  })
  return radiosSelecionado[0]
}


bnt_seleciondo.addEventListener("click",(evt)=>{
  const rs=radioSel()
  
  try{
    const cursoSelecio=rs.parentNode.textContent
  alert("Curso selecionado: " + cursoSelecio)
  }catch(ERRO){
    alert("Selecione uma marca")
  }
// const cursoSelecio=radiosSelecionado.parentNode.parentNode.firstChild.textContent
  // console.log(todosRadios);
  // console.log(radiosSelecionado)
  // console.log(cursoSelecio)

})
btn_remover.addEventListener("click",(evt)=>{
  const rs=radioSel()
  if(rs!=undefined){
  const cursoSelecio=rs.parentNode
  cursoSelecio.remove()
  }else{
    alert("Selecione uma marca")
  }
 

})

bnt_adicionar_antes.addEventListener("click",(evt)=>{
  const rs=radioSel()
  try{
    if(nome.value!=""){
    const cursoSelecio=rs.parentNode
    console.log(cursoSelecio)
    const novoCurso=criarNovoCurso(nome.value);
    dv2_S.insertBefore( novoCurso,cursoSelecio);
    }else{
      alert("Digite o nome")
    }
  }catch(ERRO){
    alert("Selecione uma marca")
  }
})

bnt_adicionar_depois.addEventListener("click",(evt)=>{
  const rs=radioSel()
  try{
    if(nome.value!=""){
    const cursoSelecio=rs.parentNode
    console.log(cursoSelecio)
    const novoCurso=criarNovoCurso(nome.value);
    dv2_S.insertBefore( novoCurso,cursoSelecio.nextSibling);
    }else{
      alert("Digite o nome")
    }
  }catch(ERRO){
    alert("Selecione uma marca")
  }
})