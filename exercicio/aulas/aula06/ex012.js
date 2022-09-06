var agora = new Date()// data do sistema onde estar rodandoo JS
var hora = agora.getHours()//pegar a hora do local onde estar neste caso PC
console.log(`Agora são exatamente ${hora} horas`)
if(hora < 12){
    console.log('Bom dia!!!')
}else if (hora <=18){
    console.log('Boa tarde!!!')
}else {
    console.log('Boa noite!!!')
}