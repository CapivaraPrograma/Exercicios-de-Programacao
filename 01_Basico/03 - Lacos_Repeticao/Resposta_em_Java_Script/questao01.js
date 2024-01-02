while(true){
    let nota = parseInt(prompt("Digite um número entre 1 e 10: "))
    if(nota >= 1 && nota <= 10){
        console.log("Número Válido")
        break
    }else{
        console.log("Número invalido")
    }
}