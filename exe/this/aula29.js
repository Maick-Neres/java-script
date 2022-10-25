function aluno(nome,nota){
  this.nome=nome
  this.nota=nota

this.dados_anonimo=function(){
  setTimeout(function(){
  console.log(this.nome)
  console.log(this.nota)

  },1000)
}

this.arrow=function(){
  setTimeout(()=>{
  console.log(this.nome)
  console.log(this.nota)

  },3000)
}

}
const al1=new aluno("Maick","10");
al1.dados_anonimo();
al1.arrow();