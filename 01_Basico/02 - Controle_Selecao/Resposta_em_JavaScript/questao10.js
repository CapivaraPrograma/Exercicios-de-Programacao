let opcaoCompra = prompt("Quais produtos deseja comprar:\n 1 - Alimentos e Combustível\n 2 - Apenas Alimentos\n 3 - Apenas Combustível\nEscolha uma opção:")

let valorAlimento = 0
let valorCombustivel = 0

if (opcaoCompra == "1" || opcaoCompra == "2") {
    let comprar_alimentos = prompt("Quais alimentos deseja comprar:\n 1 - Maçã\n 2 - Banana\n 3 - Melancia: ")
    if (comprar_alimentos == "1") {
        var qtdComprada = parseInt(prompt("Quantas maçãs você quer comprar: "))
        if (qtdComprada < 5) {
            valorAlimento = qtdComprada * 2.50
        }else{
            valorAlimento = qtdComprada * 2.20
        }
    }
    if (comprar_alimentos == "2") {
        var qtdComprada = parseInt(prompt("Quantas bananas você quer comprar: "))
        if (qtdComprada < 5) {
            valorAlimento = qtdComprada * 1.80
        }else{
            valorAlimento = qtdComprada * 1.50
        }
    }
    if (comprar_alimentos == "3") {
        var qtdComprada = parseInt(prompt("Quantas melancias você quer comprar: "))
        if (qtdComprada < 5) {
            valorAlimento = qtdComprada * 3.0
        }else{
            valorAlimento = qtdComprada * 2.70
        }
    }
}
       

if (opcaoCompra == "1" || opcaoCompra == "3") {
    let comprar_combustível = prompt("Qual combustível deseja comprar:\n 1 - Álcool\n 2 - Gasolina: ")
    if (comprar_combustível == "1") {
        var qtdCompradaCombustivel = parseInt(prompt("Quantos litros de Álcool você quer comprar: "))
        if (qtdCompradaCombustivel < 20) {
            valorCombustivel = qtdCompradaCombustivel * 1.90
        }else{
            valorCombustivel = (qtdCompradaCombustivel *1.90) - (qtdCompradaCombustivel *1.90 * 3) / 100
        }
    }

    if (comprar_combustível == "2") {
        var qtdCompradaCombustivel = parseInt(prompt("Quantos litros de Gasolina você quer comprar: "))
        if (qtdCompradaCombustivel < 5) {
            valorCombustivel = qtdCompradaCombustivel * 3.50
        }else{
            valorCombustivel = qtdCompradaCombustivel * 3.35
        }
    }
}

let finalizar_compra = prompt("A compra foi feita no cartão do posto: S/N")
let somaCompra = valorAlimento + valorCombustivel
if (finalizar_compra[0].toUpperCase() == "S") {
    var desconto = (somaCompra * 5) /100
    var valorFinal = somaCompra - desconto
}else{
    var valorFinal = somaCompra
}

console.log("Tipo de produto comprado:", opcaoCompra)
console.log("Quantidade de produtos comprados:", qtdComprada)
console.log("Preço total dos alimentos: R$", valorAlimento)
console.log()
console.log("Tipo de combustível comprado:", opcaoCompra)
console.log("Quantidade de combustível comprado:", qtdCompradaCombustivel, "litros")
console.log("Preço total do combustível: R$", valorCombustivel)
console.log()
console.log("Preço total da compra: R$", valorCombustivel + valorAlimento)
console.log("Desconto de 5% (pagamento com cartão do posto): R$", desconto)
console.log()
console.log("Valor a ser pago pelo cliente: R$", valorFinal)