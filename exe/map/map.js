let produto= new Map ([
  ["01",["Mouse","R$15"]],
  ["02",["Teclado","R$16"]],
  ["03",["Monitor","R$45"]],
  ["04",["Cpu","R$78"]]
])

// for(p of produto){
//   console.log(p[1])
// }

// function info(chaves,valores){
//   console.log(chaves, valores)
// }
// produto.forEach(info);

console.log(produto.has("04") ? "ok" :"n")