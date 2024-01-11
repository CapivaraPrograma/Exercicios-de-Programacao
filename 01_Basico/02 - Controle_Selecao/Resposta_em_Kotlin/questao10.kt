fun main() {
    val opcaoCompra = readLine()!!.toInt()
    var valorAlimento = 0.0
    var valorCombustivel = 0.0

    if (opcaoCompra == 1 || opcaoCompra == 2) {
        print("Quais alimentos deseja comprar:\n 1 - Maçã\n 2 - Banana\n 3 - Melancia: ")
        val comprar_alimentos = readLine()!!.toInt()
        if (comprar_alimentos == 1) {
            print("Quantas maçãs você quer comprar: ")
            val qtdComprada = readLine()!!.toInt()
            if (qtdComprada < 5) {
                valorAlimento = qtdComprada * 2.50
            } else {
                valorAlimento = qtdComprada * 2.20
            }
        }
        if (comprar_alimentos == 2) {
            print("Quantas bananas você quer comprar: ")
            val qtdComprada = readLine()!!.toInt()
            if (qtdComprada < 5) {
                valorAlimento = qtdComprada * 1.80
            } else {
                valorAlimento = qtdComprada * 1.50
            }
        }
        if (comprar_alimentos == 3) {
            print("Quantas melancias você quer comprar: ")
            val qtdComprada = readLine()!!.toInt()
            if (qtdComprada < 5) {
                valorAlimento = qtdComprada * 3.0
            } else {
                valorAlimento = qtdComprada * 2.70
            }
        }
    }

    if (opcaoCompra == 1 || opcaoCompra == 3) {
        print("Qual combustível deseja comprar:\n 1 - Álcool\n 2 - Gasolina: ")
        val comprar_combustível = readLine()!!.toInt()
        if (comprar_combustível == 1) {
            print("Quantos litros de Álcool você quer comprar: ")
            val qtdCompradaCombustivel = readLine()!!.toInt()
            if (qtdCompradaCombustivel < 20) {
                valorCombustivel = qtdCompradaCombustivel * 1.90
            } else {
                valorCombustivel = (qtdCompradaCombustivel * 1.90) - (qtdCompradaCombustivel * 1.90 * 3) / 100
            }
        }

        if (comprar_combustível == 2) {
            print("Quantos litros de Gasolina você quer comprar: ")
            val qtdCompradaCombustivel = readLine()!!.toInt()
            if (qtdCompradaCombustivel < 5) {
                valorCombustivel = qtdCompradaCombustivel * 3.50
            } else {
                valorCombustivel = qtdCompradaCombustivel * 3.35
            }
        }
    }

    print("A compra foi feita no cartão do posto: S/N")
    val finalizar_compra = readLine()!!.toString()
    val somaCompra = valorAlimento + valorCombustivel
    val valorFinal = if (finalizar_compra[0].toUpperCase() == "S") {
    val desconto = (somaCompra * 5) / 100
    somaCompra - desconto
} else {
    somaCompra
}


    println("Valor total da compra: R$ ${valorAlimento + valorCombustivel}")

    println("Tipo de produto comprado: $opcaoCompra")
    println("Quantidade de produtos comprados: $qtdComprada")
    println("Preço total dos alimentos: R$ $valorAlimento")
    println()
    println("Tipo de combustível comprado: $opcaoCompra")
    println("Quantidade de combustível comprado: $qtdCompradaCombustivel litros")
    println("Preço total do combustível: R$ $valorCombustivel")
    println()
    println("Preço total da compra: R$ ${valorCombustivel + valorAlimento}")
    println("Desconto de 5% (pagamento com cartão do posto): R$ $desconto")
    println()
    println("Valor a ser pago pelo cliente: R$", valorFinal)
}


