fun main() {
    var pergunta1 = "sim"
    var pergunta2 = "sim"
    var pergunta3 = "sim"
    var pergunta4 = "sim"
    var pergunta5 = "sim"

    var nivel_suspeito = 0

    if (pergunta1[0].uppercaseChar() == 'S'){
        nivel_suspeito += 1
    }
    if (pergunta2[0].uppercaseChar() == 'S'){
        nivel_suspeito += 1
    }
    if (pergunta3[0].uppercaseChar() == 'S'){
        nivel_suspeito += 1
    }
    if (pergunta4[0].uppercaseChar() == 'S'){
        nivel_suspeito += 1
    }
    if (pergunta5[0].uppercaseChar() == 'S'){
        nivel_suspeito += 1
    }

    when(nivel_suspeito){
        2 -> println("Suspeito")
        3, 4 -> println("Cúmplice")
        5 -> println("Assassino")
        else -> println("Inocente")
    }
}
