var jogo = [];//controle das jogadas com X e O e caixas vazias ;
var tabuleiro = [];//controle dos elemnetos visuais tabuleiro;
var quemjoga = 0//0 vai ser  o jogador e 1 =cpu
var check;//verificar se houve vencedor ou não ;
var jogando = true;//controle de quem ganho e se aparidada ainda esta em andamento;
var nivel = 1;
var jogadaCpu = 1;
var quemComeca = 1;
function cpu() {
  if (jogando) {
    var l, c;
    if (nivel == 1) {
      do {
        l = Math.round(Math.random()*2);
        c = Math.round(Math.random()*2);
      }while (jogo[l][c]!="") ;
        jogo[l][c] = "O";
    }else if(nivel==2){
      if(jogo[0][0]=="O"&&jogo[0][1]=="O"&&jogo[0][2]==""){
        jogo[0][2]="O"
        }else if(jogo[0][0]=="O"&&jogo[0][2]=="O"&&jogo[0][1]==""){
        jogo[0][1]="O"
        }
        }
      check=checkwin();
      if(check!=""){
        alert(check+" venceu")
        jogando=false
       }
      tabuleiroa();
      quemjoga=0;
    
  }
 


}

function checkwin() {
  
  //linhas
  for(var l=0;l<3;l++){
    if ((jogo[l][0]==jogo[l][1])&&(jogo[l][1]==jogo[l][2])) {
      return jogo[l][0];
    }

  //colunas
    for(var c=0;c<3;c++){
      if ((jogo[0][c]==jogo[1][c])&&(jogo[1][c]==jogo[2][c])) {
        return jogo[0][c];
      }
    }
  //diagonas
  if (jogo[0][0]==jogo[1][1]&&jogo[1][1]==jogo[2][2]){
    return jogo[0][0];
  }

  if (jogo[0][2]==jogo[1][1]&&jogo[1][1]==jogo[2][0]){
    return jogo[0][2];
  }
  

  }
   return "";
}

function jogar(p) {

  if ((jogando) && (quemjoga == 0)) {

    switch (p) {
      case 1:
        if (jogo[0][0] == "") {
          jogo[0][0] = "X"
          quemjoga = 1;

        }
        break;
      case 2:
        if (jogo[0][1] == "") {
          jogo[0][1] = "X"
          quemjoga = 1;
        }
        break;
      case 3:

        if (jogo[0][2] == "") {
          jogo[0][2] = "X"
          quemjoga = 1;
        }
        break;
      case 4:

        if (jogo[1][0] == "") {
          jogo[1][0] = "X"
          quemjoga = 1;
        }
        break;
      case 5:

        if (jogo[1][1] == "") {
          jogo[1][1] = "X"
          quemjoga = 1;
        }
        break;
      case 6:

        if (jogo[1][2] == "") {
          jogo[1][2] = "X"
          quemjoga = 1;
        }
        break;
      case 7:

        if (jogo[2][0] == "") {
          jogo[2][0] = "X"
          quemjoga = 1;
        }
        break;
      case 8:

        if (jogo[2][1] == "") {
          jogo[2][1] = "X"
          quemjoga = 1;
        }
        break;
      default: //case 9

        if (jogo[2][2] == "") {
          jogo[2][2] = "X"
          quemjoga = 1;
        }
        break;
    }

    if(quemjoga==1){
    tabuleiroa()
    check=checkwin();
    if(check!=""){
      alert(check+" venceu")
      jogando=false
    }
   
  cpu();
  }
  
  }


}

function tabuleiroa() {
  for (var l = 0; l < 3; l++) {
    for (var c = 0; c < 3; c++) {
      if (jogo[l][c] == "X") {
        tabuleiro[l][c].innerHTML = "X";
        tabuleiro[l][c].style.cursor = "default";
      } else if (jogo[l][c] == "O") {
        tabuleiro[l][c].innerHTML = "O";
        tabuleiro[l][c].style.cursor = "default";
      } else {
        tabuleiro[l][c].innerHTML = "";
        tabuleiro[l][c].style.cursor = "pointer";
      }
    }
  }
}

function inicia() {
  jogando = true;
  jogadaCpu = 1;
  jogo = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  tabuleiro = [
    [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
    [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
    [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
  ]
  tabuleiroa();
  if(quemComeca==1){
    quemComeca=0
    quemjoga=quemComeca
    document.getElementById("msg").innerHTML="Quem começa é: Jogador"

  }else{
    quemComeca=1;
    quemjoga=quemComeca;
    document.getElementById("msg").innerHTML="Quem começa é: CPU"
    cpu();
  }
}
window.addEventListener("load", inicia)