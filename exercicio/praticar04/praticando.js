var mercado={
    vendas: [100,300,400],
    impos: [200,100]
}

function calcula(n){
    for(var value of n){
        var total=0;
       total +=value;
    }
     return total;
}
function soma(){
    const ven=calcula(mercado.vendas);
    const imp=calcula(mercado.impos);
    const subtra=ven-imp;
    var men="Negativo";
    if (subtra>=0) {
        men="Positivio"
    }
    console.log(`Seu saldo é ${men} e está ${subtra}R$`);
}
soma()