fun main(){
    var grupoA = 0
    var grupoB = 0
    var grupoC = 0
    var grupoD = 0
    var continuar = true
    while (continuar) {
        println("Para encerrar digite um número negaito\nDigite um número inteiro: ")
        var numero = readLine()!!.toInt()

    when (true) {
        (numero < 0) -> continuar = false
        (numero > 0 && numero <= 25) -> grupoA++
        (numero > 25 && numero <= 50) -> grupoB++
        (numero > 50 && numero <= 75) -> grupoC++
        (numero > 75 && numero <= 100) -> grupoD++
        else -> println("Opção inválida o número deve ser um inteiro entre 0 e 100") 
        }
    }
    println("Total de número que estão entre 0-25: $grupoA")
    println("Total de número que estão entre 26-50: $grupoB")
    println("Total de número que estão entre 51-75: $grupoC")
    println("Total de número que estão entre 76-100: $grupoD")
}