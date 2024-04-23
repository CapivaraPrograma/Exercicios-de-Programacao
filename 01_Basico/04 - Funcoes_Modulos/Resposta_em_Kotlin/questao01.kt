fun elevaAoQuadrado(numero: Int): Int {
    return numero * numero
}

fun main() {
    println("Digite um número para elevar ao quadrado")
    val numero = readLine()!!.toInt()
    val quadradoDeNove = elevaAoQuadrado(numero)
    println("O quadrado de $numero é: $quadradoDeNove")
}
