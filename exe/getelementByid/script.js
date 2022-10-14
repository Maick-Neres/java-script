const div=document.querySelector(".caixa");
div.addEventListener("click",()=>{
  console.log("clico");
})

const todos=[...document.querySelectorAll(".c1")];
todos.map((e)=>{

e.addEventListener("click",(evt)=>{
 evt.stopPropagation();
})

})









