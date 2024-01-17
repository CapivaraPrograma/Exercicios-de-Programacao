@file:JvmName("JDoodle")
fun main() {
    println("Digite o valor da dívida: ")
    var valor_divida = readLine()!!.toFloat()
    var valor_crescimento = 0
    var divida = valor_divida
    var juros = 0f
    var valor_parcela = valor_divida
    var parcela = 0
    println("Valor da Dívida      Valor dos Juros         Quantidade de Parcelas        Valor da Parcela")

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
        println("R$ ${divida}       R$ ${juros}       ${parcela}                       R$ ${valor_parcela}")
    }
}