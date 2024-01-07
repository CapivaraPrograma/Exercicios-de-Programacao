fun main(){
    println("Digite um número inteiro entre 1 e 10)
    var numero = readLine()!!.toInt()

    if (numero > 0 && numero < 11) {
        println("Adição")
        for (step in 1..10) {
            var adi = numero + step
            println("$numero + $step: $adi")
        }

        println("Subtração")
        for (step in 1..10) {
            var sub = numero - step
            println("$numero - $step: $sub")
        }

        println("\nMultiplicação")
        for (step in 1..10) {
            var mult = numero * step
            println("$numero * $step: $mult")
        }

        println("\nDivisão")
        for (step in 1..10) {
            var div = numero / step
            println("$numero / $step: $div")
        }
    }
}