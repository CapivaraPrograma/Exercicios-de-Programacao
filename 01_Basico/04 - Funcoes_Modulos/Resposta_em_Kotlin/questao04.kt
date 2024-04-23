val Desconto = 15

fun exibir_caracteristicas_produto(preco_original: Double): Pair<Double, Double> {
    val valor_desconto = preco_original * Desconto / 100
    val preco_desconto = preco_original - valor_desconto
    return Pair(valor_desconto, preco_desconto)
}

fun main() {
    println("Digite o valor do produto: ")
    val produto = readLine()!!.toDouble()
    val (desconto_reais, preco_final) = exibir_caracteristicas_produto(produto)

    println("Preço original:               R$ $produto")
    println("Desconto em porcentagem:     ${Desconto}%")
    println("Valor do desconto:           R$ $desconto_reais reais")
    println("Preço com o desconto:        R$ $preco_final reais")
}