fun main() {
    println("Digite um número inteiro: ")
    var numero_1 = readLine()!!.toInt()
    
    println("Digite um número inteiro: ")
    var numero_2 = readLine()!!.toInt()
    
    var soma = 0

    var maior = if(numero_1 < numero_2) numero_2 else numero_1
    var menor = if(numero_1 > numero_2) numero_2 else numero_1

    for (cont in menor .. maior) {
        soma += cont
        println(cont)
    }

    print("A soma desses números é: $soma)
}