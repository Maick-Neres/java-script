const div1 = document.querySelector("#caixa1")
const cursos =["HTML","CSS","Javascript","PHP","React","Mysql","Reactnative"];



cursos.map((el,chave)=>{
const novoel =document.createElement("div")



novoel.setAttribute("id","c"+Number(chave+1))
novoel.setAttribute("class","curso c")

novoel.innerHTML=el;

const btn_lixeira=document.createElement("img")
btn_lixeira.setAttribute("src","https://cdn.icon-icons.com/icons2/931/PNG/96/delete_remove_bin_icon-icons.com_72400.png")

btn_lixeira.setAttribute("class","icon");
novoel.appendChild(btn_lixeira)

  btn_lixeira.addEventListener("click",(evt)=>{
  div1.removeChild(evt.target.parentNode);
})

div1.appendChild(novoel);

})



