fun main () {
    var numero = 5
    var primerio_numero = 1
    var segundo_numero =1
    var soma = 0

    for (i in 1 .. numero step 1) {
        var sequencia = primerio_numero / segundo_numero
        print("A divisão de ${primerio_numero} / ${segundo_numero} é: ${sequencia}. ")
        primerio_numero += 1
        segundo_numero += 2
        soma += sequencia
    }

    println("\nA soma da sequência é ${soma}")
}