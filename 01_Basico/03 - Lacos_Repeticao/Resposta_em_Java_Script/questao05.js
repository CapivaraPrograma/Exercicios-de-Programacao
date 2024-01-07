let numero_1 = parseInt(prompt("Digite um número inteiro: "))
let numero_2 = parseInt(prompt("Digite um número: "))
let maior = numero_1 < numero_2 ? numero_2 : numero_1
let menor = numero_1 > numero_2 ? numero_2 : numero_1

for (var cont = menor; cont <= maior; cont++){
  console.log(cont)
}

console.log("A soma desses números é: ${soma}")