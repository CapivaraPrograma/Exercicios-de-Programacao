// Forma 01, forma simples e feita na mão
fun verificar_frase(frase: String, letra: String): Int{
    var contador = 0
    var tamanho = frase.length
    for (i in frase) {
        if (letra == i) {
            contador++
        }
    }
    return "A letra '${letra}' aparece na frase '${frase}', um total de ${contador}"
}

//Aqui estamos recebendo os valores de a e b que serão o posteriormente os valores dos parametros da função

println("Digite uma frase: )
let a = readLine()!!
println("Digite uma letra: )
let b = readLine()!!

//Aqui chamamos a função, perceba que os atributos dos parametros "frase" e "letra" são respectivamente "a" e "b"
var primeiro_teste = verificar_frase(a, b)

println(primeiro_teste)
