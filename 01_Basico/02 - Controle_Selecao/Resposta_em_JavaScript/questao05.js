// Em javaScript: No lugar do if utilizamos a função sort, e por curiosidade usamos a função slice para clonar a lista de numeros, nesse caso não queria alterar o valor original de numeros)
const numero1 = parseInt(prompt("Digite um número: "))
const numero2 = parseInt(prompt("Digite um número: "))
const numero3 = parseInt(prompt("Digite um número: "))
const numeros = [numero1, numero2, numero3]
const clonado = numeros.slice().sort((a, b) => b - a)
console.log(`${clonado[0]},${clonado[1]},${clonado[2]}`)
console.log(numeros)