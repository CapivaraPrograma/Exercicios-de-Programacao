fun main() {
    var numero_inteiro1 = 5
    var numero_inteiro2 = 10
    println("O primeiro é : $numero_inteiro1\nO segundo é: $numero_inteiro2")
    println("Invertendo...")
    numero_inteiro1 = numero_inteiro2.also { numero_inteiro2 = numero_inteiro1 }
    println("O primeiro é: $numero_inteiro1\nO segundo é: $numero_inteiro2")
}