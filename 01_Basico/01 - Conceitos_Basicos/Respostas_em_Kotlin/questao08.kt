fun main() {
    val tamanhoMetros = 162.0 // Alterei para Double
    val valorLata = 80.0 // Alterei para Double
    val quantidadeLitros = tamanhoMetros / 3.0 // Alterei para Double
    val latas = quantidadeLitros / 18.0 // Alterei para Double
    val quantidadeLatas = Math.ceil(latas).toInt()

    println("Você vai precisar de $quantidadeLatas latas e o valor gasto será de R$ ${quantidadeLatas * valorLata}")
}