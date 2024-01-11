fun main(){
    var total = 0.0
    var produtoX = 1

    while (true) {
        println("Para encerrar a compra digite 0\nDigite o valor do produto ${produtoX}º: ")
        var produto = readLine()!!.toFloat()
        total = total + produto
        produtoX++
        
        if (produto == 0f) {
            println("Total da compra:           R$${total}\nQual valor você usara para pagar: ")
            var pagamento = readLine()!!.toFloat()
            var troco = pagamento - total
            println("O total é:     R$$total")
            println("O pagamento é  R$$pagamento")
            println("O troco é:     R$$troco")
        
        println("Deseja continuar S/N: ")
        var continuar = readLine()!!
        if (continuar[0].uppercaseChar() == 'S') {
            break
        }

        }
    }
}
