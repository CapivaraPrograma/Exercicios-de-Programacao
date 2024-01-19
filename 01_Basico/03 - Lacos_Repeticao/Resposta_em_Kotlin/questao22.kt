fun main() {
    while (true){
    println("Digite seu nome: ")
    var nome = readLine()!!
    println("Digite o valor do salto: ")
    var salto1 = readLine()!!.toFloat()
    println("Digite o valor do salto: ")
    var salto2 = readLine()!!.toFloat()
    println("Digite o valor do salto: ")
    var salto3 = readLine()!!.toFloat()
    println("Digite o valor do salto: ")
    var salto4 = readLine()!!.toFloat()
    println("Digite o valor do salto: ")
    var salto5 = readLine()!!.toFloat()
    
    var maior_salto = salto1
    var menor_salto = salto1
    
    if (salto2 > maior_salto) {
        maior_salto = salto2
    }else if (salto2 < menor_salto) {
        menor_salto = salto2
    }

    if (salto3 > maior_salto) {
        maior_salto = salto3
    }else if (salto3 < menor_salto) {
        menor_salto = salto3
    }
    
    if (salto4 > maior_salto) {
        maior_salto = salto4
    }else if (salto4 < menor_salto) {
        menor_salto = salto4
    }

    if (salto5 > maior_salto) {
        maior_salto = salto5
    }else if (salto5 < menor_salto) {
        menor_salto = salto5
    }
    
    var media = (salto1 + salto2 + salto3 + salto4 + salto5 - maior_salto - menor_salto) / 5

    println("\nAtleta: ${nome}")
    println("Primeiro salto:${salto1}m")
    println("Segundo salto:${salto2}m")
    println("Terceiro salto:${salto3}m")
    println("Quarto salto:${salto4}m")
    println("Quinto salto:${salto5}m")
    println("\nMelhor salto: ${maior_salto}m")
    println("Pior salto: ${menor_salto}m")
    println("Média dos demais saltos: ${media}m")
    println("\nResultado final\n${nome}: ${media}m")
    break
    }
}