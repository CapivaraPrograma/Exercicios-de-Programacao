fun main() {
    println("Digite o valor da dívida: ")
    var valor_divida = readLine()!!.toFloat()
    var valor_crescimento = 0
    var divida = valor_divida
    var juros: Float
    var valor_parcela: Float
    var parcela: Int
    println("%-20s%-20s%-30s%-20s".format("Valor da Dívida", "Valor dos Juros", "Quantidade de Parcelas", "Valor da Parcela"))

    for (i in 0..12 step 3){
        if (i == 0) {
            parcela = i + 1
            juros = 0f
            valor_parcela = valor_divida
        }else{
            juros = divida * (10 + 5 * valor_crescimento) / 100
            parcela = i
            divida += juros
            valor_crescimento += 1
            valor_parcela = divida / parcela
        }
        println("%-20s%-30s%-20s%-20s".format("R$ %,.2f".format(divida), "R$ %,.2f".format(juros), parcela, "R$ %,.2f".format(valor_parcela)))
    }
}