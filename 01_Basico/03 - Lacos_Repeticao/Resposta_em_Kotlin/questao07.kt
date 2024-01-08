fun main() {
    println("Digite um número para usar na sequência de fibonacci")
    var numero = readLine()!!.toInt()
    var ultimo = 1
    var penultimo = 1

    if (numero == 1 || numero == 2) {
        println("1")
    } else {
        var count = 3
        while (count <= numero) {
            println("Você está no termo: $count")
            var termo = ultimo + penultimo
            penultimo = ultimo
            ultimo = termo
            count += 1
            println(termo)
        }
    }
}
