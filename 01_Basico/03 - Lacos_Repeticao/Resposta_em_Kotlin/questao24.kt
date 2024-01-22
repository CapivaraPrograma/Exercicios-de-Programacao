fun main() {
    println("Digite um número inteiro: ")
    var numero = readLine()!!.toInt()
    var numeroInvertido = 0
    var alteraNumero: Int = numero
    while(alteraNumero > 0) {
        var digito = alteraNumero % 10
        numeroInvertido = numeroInvertido * 10 + digito
        alteraNumero = alteraNumero / 10
    }
    println("O numero ${numero} invertido é o numero ${numeroInvertido}")
}