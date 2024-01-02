let numero1 = parseInt(prompt("Digite um número inteiro: "))
let numero2 = parseInt(prompt("Digite um número inteiro: "))
let numero3 = parseFloat(prompt("Digite um número real: "))
let a = (numero1 * 2) * (numero2 / 2)
let b = (numero1 * 3) + numero3
let c = numero3 ** 3
console.log(`A resposta do item a é: ${a}.\nA resposta do item b é: ${b}.\nA resposta do item c é ${c.toFixed(3)}.`) 
//perceba que o .toFixed(3) define as casas que aparecem após a vírgula.