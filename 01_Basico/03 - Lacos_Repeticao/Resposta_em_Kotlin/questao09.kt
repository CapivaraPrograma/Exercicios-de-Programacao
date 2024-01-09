fun main(){
println("Digite um número inteiro para verificar se é primo: ")
var numero: Int = readLine()!!.toInt()

if (numero <= 1) {
    println("O número $numero não é primo")
} else {
    var divisores = ""
    for (i in 2..(numero / 2)) {
        if (numero % i == 0) {
            divisores += "$i, "
        }
    }
    if (divisores.isNotEmpty()) {
        divisores = divisores.substring(0, divisores.length - 2)
        println("O número $numero não é primo, ele é divisível por: $divisores")
    } else {
        println("O número $numero é primo")
    }
}
}