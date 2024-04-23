fun nome_invertido(nome: String, sobrenome: String): String{
   return ("Olá ${sobrenome}, ${nome}")
}

fun main() {
println("Digite seu nome: ")
var nome = readLine()!!
println("Digite seu sobrenome: ")
var sobrenome = readLine()!!

print(nome_invertido(nome, sobrenome))
}