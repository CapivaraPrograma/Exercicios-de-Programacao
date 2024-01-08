let maior = -1000
let menor = 1000
while (true) {
    let valor = prompt("Digite um número entre 0 e 1000: ")
    
    if (valor == "parar") {
        break
    }else{
        var numero = parseInt(valor)
        if (numero > maior){
            maior = numero
        }else {
            if (numero < menor) {
                menor = numero
            }
        }
    }
}
console.log(`O maior número é ${maior} e o menor número é ${menor}`)