let tamanhoMetros = parseFloat(prompt("Digite o tamanho em metros quadrados: "))
let valorLata = 80.0
let quantidadeLitros = tamanhoMetros  / 3
let latas = quantidadeLitros / 18.0
let valor = Math.ceil(latas) * 80
console.log(`A quantidade usada sera de:    ${latas.toFixed(2)} latas`)
console.log(`Você vai precisar comprar:     ${Math.ceil(latas)} latas`)
console.log(`O valor gasto sera:            R$${valor} reais`)