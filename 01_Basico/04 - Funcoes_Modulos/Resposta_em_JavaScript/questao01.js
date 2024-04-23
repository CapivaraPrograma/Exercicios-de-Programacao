function quadroNumero (numero){
    var quadrado = numero ** 2
    return quadrado
}

numero = parseInt(prompt("Digite um número inteiro: "))
console.log(`O quadro do ${numero} é : ${quadroNumero(numero)}`)