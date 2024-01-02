let km_por_litro = parseFloat(prompt("Km por litro: "))
let valor_do_litro = parseFloat(prompt("Valor litro: "))
let qtd_dinheiro = parseFloat(prompt("Valor disponivel em R$: "))
let qtd_litros_comprada = qtd_dinheiro / valor_do_litro
let distancia_maxima = qtd_litros_comprada * km_por_litro
console.log(`Pelo valor de R$ ${qtd_dinheiro} é possível comprar ${qtd_litros_comprada} L. O carro pode percorrer: ${distancia_maxima} km`)