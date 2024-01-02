var numero_inteiro1 = parseInt(prompt("Digite um número inteiro: "))
var numero_inteiro2 = parseInt(prompt("Digite um número inteiro: "))
console.log(`primeiro: ${numero_inteiro1}\nsegundo: ${numero_inteiro2}`)
console.log("Invertendo...");

[numero_inteiro1, numero_inteiro2] = [numero_inteiro2, numero_inteiro1];
console.log(`primeiro: ${numero_inteiro1}\nsegundo: ${numero_inteiro2}`)