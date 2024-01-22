var numero = parseInt(prompt("Digite um número inteiro: "))
var primerio_numero = 1
var segundo_numero =1
var soma = 0

for (i = 1; i <= numero; i++) {
    sequencia = primerio_numero / segundo_numero
    console.log(`A divisão de ${primerio_numero} / ${segundo_numero} é: ${sequencia.toFixed(2)}`)
    primerio_numero += 1
    segundo_numero +=2
    soma += sequencia
}

console.log(`\nA soma da sequência é ${soma.toFixed(2)}`)