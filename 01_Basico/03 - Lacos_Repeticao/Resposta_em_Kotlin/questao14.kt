fun main () {
    while (true){
    println("Digite um número para exibir sua tabuada")
    var numero_tabuada = readLine()!!.toInt()
    println("Digite o número inicial ")
    var numero_inicial = readLine()!!.toInt()
    println("Digite o número finl: ")
    var numero_final = readLine()!!.toInt()

    if (numero_inicial > numero_final) {
        println("Opção inválida, o número final deve ser maior que o inicial: ")
        continue
    }else{}
        for (i in numero_inicial .. numero_final){
            println("A soma de ${numero_tabuada} + ${i} é: ${numero_tabuada + i}")
        }
    break
    }
}