fun main() {
    var maior = -1000
var menor = 1000
    while (true) {
        println("Digite um número entre 0 e 1000:")
        var valor = readLine()!!
        if (valor == "parar") {
            break
        }else{
            var numero: Int = valor.toInt()
            if (numero > maior){
                maior = numero
            }else {
                if (numero < menor) {
                    menor = numero
                }
            }
        }
    }
    println("O maior número é $maior e o menor número é $menor")
}