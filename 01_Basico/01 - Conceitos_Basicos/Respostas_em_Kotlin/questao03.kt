fun main(){
    val valorRaioDoCirculo = 5
 	val pi = 3.14
    val areaDoCirculo = pi * (valorRaioDoCirculo * valorRaioDoCirculo)
    println("O valor da área do círculo é: $areaDoCirculo")
    
    // outra forma é assim
    val areaDoCirculo2 = pi * Math.pow(valorRaioDoCirculo.toDouble(), 2.0)

    // Formata a saída para exibir apenas dois números após a casa decimal
    val areaFormatada = String.format("%.2f", areaDoCirculo2)
    println("O valor da área do círculo é: $areaFormatada")
    
    // Formata a saída para exibir apenas dois números após a casa decimal dentro do println
    println("O valor da área do círculo é: %.2f".format(areaDoCirculo2))
}