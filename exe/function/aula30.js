/*function soma (x1,x2){
   var res= x1 +x2;
  console.log(res)
}
soma(1,3);*/

/*
function soma2(n1,n2){
    return n1+ n2;
}
console.log(soma(4,3));*/


var numeros =new Array(1,2,3);
function media(nums){
    var tam = nums.length;
    var soma = 0
    for(var i=0;i<tam;i++){
        soma+=nums[i];
    }
    return Math.round(soma/tam);
}
console.log(media(numeros));

/*
var numero =[1,2,3,4,5,6,7,8,9];
function media2(nums){
    var tam =numeros.length;
    soma = 0;
    for(i=0;i<tam;i++){
        soma+=nums[i]
    }
    return soma/tam
}console.log(media)*/