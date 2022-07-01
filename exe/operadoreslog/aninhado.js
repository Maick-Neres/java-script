var nota =8
var res = 'Aprovado'
if(nota >=7){
    if(nota >9){
     res += 'com nota louvor'
      }else{
         res += " nota normal"
      }
}else if (nota >=4){
    res = 'recuperação'
}else{
    var res ='reprovado'
    if(nota >=2){
        res +=' por nota baixa'
    }else{
     res += 'com louvor'
    }
}
console.log(res)