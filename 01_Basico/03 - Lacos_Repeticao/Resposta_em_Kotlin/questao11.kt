fun main(){
    println("Quantos quadrinhos você possue ?")
    var qtd_quadrinhos = readLine()!!.toInt()
    var i = 1
    var total_gasto = 0.0f
    while (i <= qtd_quadrinhos) {
        println("Digite o valor do ${i}º quadrinho: ")
        var valor_quadrinho = readLine()!!.toFloat()
        total_gasto += valor_quadrinho
        i += 1
    }   

    println("O valor total gasto em quadrinhos é de:      R$${total_gasto}")
}