console.log("teste")
while (true){
    var numero_tabuada = 5
    var numero_inicial = 4
    var numero_final = 7
    
    if (numero_inicial > numero_final) {
        console.log(`Opção inválida, o número final deve ser maior que o inicial: `)
        continue
    }else{
        for (i = numero_inicial; i <= numero_final; i++) {
            console.log(`A soma de ${numero_tabuada} + ${i} é: ${numero_tabuada + i}`)
        }
    }
    break
}