const numero = parseInt(prompt("Digite um número inteiro: "))
let numeroInvertido = 0
let alterarNumero = numero
while (alterarNumero > 0) {
    digito = alterarNumero % 10
    numeroInvertido = numeroInvertido * 10 + digito
    alterarNumero  = parseInt(alterarNumero / 10)
    
}

console.log(`O número ${numero} invertido é ${numeroInvertido}`)