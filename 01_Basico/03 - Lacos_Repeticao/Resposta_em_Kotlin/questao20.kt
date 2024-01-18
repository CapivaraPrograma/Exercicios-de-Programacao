fun main() {
    while (true) {
        println("Especificação        Código       Preço\n")
        println("Cachorro Quente        100       R$ 1,20\n")
        println("Bauru Simples          101       R$ 1,30\n")
        println("Bauru com ovo          102       R$ 1,50\n")
        println("Hambúrguer             103       R$ 1,20\n")
        println("Cheeseburguer          104       R$ 1,30\n")
        println("Refrigerante           105       R$ 1,00\n")

        println("Digite o código do produto desejado: ")
        var pedido_cliente = readLine()!!.toInt()
        var pedido = ""
        var qtd_pedido = 0
        var valor: Double = 0.0
        if (pedido_cliente == 100) {
            pedido = "Cachorro Quente"
            println("Quantos $pedido você deseja: ")
            qtd_pedido = readLine()!!.toInt()
            valor = 1.20 * qtd_pedido
        }else if (pedido_cliente == 101) {
            pedido = "Bauru Simples"
            println("Quantos $pedido você deseja: ")
            qtd_pedido = readLine()!!.toInt()
            valor = 1.30 * qtd_pedido
        }else if (pedido_cliente == 102) {
            pedido = "Bauru com ovo"
            println("Quantos $pedido você deseja: ")
            qtd_pedido = readLine()!!.toInt()
            valor = 1.50 * qtd_pedido
        }else if (pedido_cliente == 103) {
            pedido = "Hambúrguer"
            println("Quantos $pedido você deseja: ")
            qtd_pedido = readLine()!!.toInt()
            valor = 1.20 * qtd_pedido
        }else if (pedido_cliente == 104) {
            pedido = "Cheeseburguer"
            println("Quantos $pedido você deseja: ")
            qtd_pedido = readLine()!!.toInt()
            valor = 1.30 * qtd_pedido
        }else if (pedido_cliente == 105) {
            pedido = "Refrigerante"
            println("Quantos $pedido você deseja: ")
            qtd_pedido = readLine()!!.toInt()
            valor = 1.00 * qtd_pedido
        }
        println("Você pediu $pedido, a quantidade é $qtd_pedido o valor é $valor")
        break
    }
}