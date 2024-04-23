var Desconto = 15
function exibir_desconto(preco_original){
    valor_desconto = preco_original * Desconto / 100
    return valor_desconto
}

function exibir_valor_final(preco_descontado) {
    preco_desconto = preco_original - exibir_desconto(desconto)
    return preco_desconto
}

let produto = 1000
let desconto_reais = exibir_desconto(produto)
let preco_final = exibir_valor_final(desconto_reais)
console.log(`Preço original:                    ${produto}
Desconto em porcentagem:           ${Desconto}%
Valor do desconto:              R$ ${desconto_reais} reais
Preço com o desconto:           R$ ${preco_final}`)
