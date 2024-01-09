let qtd_quadrinhos = parseInt(prompt("Quantos quadrinhos você possue: "))
let i = 1
let total_gasto = 0.0
while (i <= qtd_quadrinhos) {
    let valor_quadrinho = parseFloat(prompt(`Digite o valor do ${i}º quadrinho: `))
    total_gasto += valor_quadrinho
    i++
}   

console.log(`O valor total gasto em quadrinhos é de:      R$${total_gasto}`)