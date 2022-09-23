// function soma(...valores){
//   let res =0;
//   for (const v of valores) {
//    res+=v;
    
//   }
//   return res
// }
// console.log(soma(10,5,4));
var person={nome:"maick",idade:15,sexo:"masculinon"};
var person2={nome:"maick",idade:15,sexo:"masculinon",altura:1.56,cor:"preto"};
var soma={...person,...person2}
console.log(soma);