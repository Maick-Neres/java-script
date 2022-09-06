
//acrencentar valores ultiliza o (num{3}) para criar mais um espaço e assim colocar o valor
//num.push(7)colocar na ultilma posição sem especificar
//(num.length)não tem parentes no JS.não é um método é um atribulto.Sua finalidade é mostrar quantas posiçoes tem 
//(num.sort()) coloca todos os elementos em ordem crencente 1 2 3 4 5...  

/*
let num = [1,7,6,9,8]
num.push(5)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length}posições`)
console.log( `o primeiro vetor do vetor é ${num[0]}`)*/

var f = [1,2,4,5,3,6]
f.sort()
for(var d = 0;d < f.length;d = d+1){
    console.log(`o valor ${d} tem ${f[d]}`)
}