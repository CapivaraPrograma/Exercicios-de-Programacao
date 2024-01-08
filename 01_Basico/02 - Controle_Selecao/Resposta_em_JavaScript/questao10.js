var opcao_compra = prompt("Quais produtos deseja comprar:\n 1 - Alimentos e Compuntível\n 2 - Apenas Alimentos\n 3 - Apenas Compuntível\nEscolha uma opção:")

if (opcao_compra == "1" || "2"){
    var comprar_alimentos = prompt("Quais alimentos deseja comprar:\n 1 - Maçã\n 2 - Banana\n3 - Melancia")
}
   
    if (comprar_alimentos == "1") {
       var qtd_comprada = parseInt(prompt("Quantas maçãs você quer comprar: "))
        if (qtd_comprada < 5) {
            valor_alimento = qtd_comprada * 2.50
        }else{
            valor_alimento = qtd_comprada * 2.20
        }        
    }else if (comprar_alimentos == "2") {
        var qtd_comprada = parseInt(prompt("Quantas bananas você quer comprar: "))
        if (qtd_comprada < 5) {
            valor_alimento = qtd_comprada * 1.80
        }else{
            valor_alimento = qtd_comprada * 1.50
        }
    }
    if (comprar_alimentos == "3") {
        var qtd_comprada = parseInt(prompt("Quantas melancias você quer comprar: "))
        if (qtd_comprada < 5) {
            valor_alimento = qtd_comprada * 3.0
        }else{
            valor_alimento = qtd_comprada * 2.70
        }
    }

if (opcao_compra == "1" && "2") {
    var comprar_combustível = parseInt(prompt("Quail cumbustível deseja comprar:\n 1 - Álcool\n 2 - Gasolina"))
    if (comprar_combustível == "1") {
        var qtd_comprada_combustivel = parseInt(prompt("Quantas litros de Álcool você quer comprar: "))
        if (qtd_comprada_combustivel < 20){
            var valor_cumbustivel = qtd_comprada_combustivel * 1.90
        }else{
            var valor_cumbustivel = (qtd_comprada_combustivel *1.90) - (qtd_comprada_combustivel *1,90 * 3) / 100 
        }
    }
}

    if (comprar_combustível == "2") {
        qtd_comprada_combustivel = parseInt(prompt("Quantas litros de Gasolina você quer comprar: "))
        if (qtd_comprada_combustivel < 5) {
            valor_cumbustivel = qtd_comprada_combustivel * 3.50
        }else{
            valor_cumbustivel = (qtd_comprada_combustivel * 3.50) - (qtd_comprada_combustivel * 3.50 * 3) / 100
        }
    }
            
var soma_compra = valor_cumbustivel + valor_alimento
var finalizar_compra = prompt("A compra foi feita no cartão do posto: S/N: ")

if (finalizar_compra[0].toUpperCase() == "S") {
    var desconto = (soma_compra * 5) /100
    var valor_final = soma_compra - desconto
}else{
   var valor_final = soma_compra
}

console.log("Tipo de produto comprado:", opcao_compra)
console.log("Quantidade de produtos comprados:", qtd_comprada)
console.log("Preço total dos alimentos: R$", valor_alimento)
console.log()
console.log("Tipo de combustível comprado:", opcao_compra)
console.log("Quantidade de combustível comprado:", qtd_comprada_combustivel, "litros")
console.log("Preço total do combustível: R$", valor_cumbustivel)
console.log()
console.log("Preço total da compra: R$", soma_compra)
console.log("Desconto de 5% (pagamento com cartão do posto): R$", desconto)
console.log()
console.log("Valor a ser pago pelo cliente: R$", valor_final)