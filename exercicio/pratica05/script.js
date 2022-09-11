var botao="oiii vida"

function contar(){
    let n1=document.getElementById("contade")
    let n2=document.getElementById("contate")
    let n3=document.getElementById("pulando")
    let res=document.getElementById("res");
    
    if(n1.value.length==0 ||n2.value.length==0 ||n3.value.length==0){
        alert("[ERRO]")
    }else{
        res.innerHTML="contando: <br>"
        let one =Number(n1.value);
        let two=Number(n2.value);
        let thee=Number(n3.value);
        if(thee==0){
            alert("Pular inválido, vamos considera P=1")
            thee=1
        }

        if(one<two){
             for(let c=one;c<=two;c+=thee){
            res.innerHTML+=` ${c}`
        }
      
        }else{
            for(let c=one;c>=two;c-=thee){
                res.innerHTML+=` ${c}`

            }
           
        }
         res.innerHTML+=` \u{1F603}`
       
    }


   
 
}


