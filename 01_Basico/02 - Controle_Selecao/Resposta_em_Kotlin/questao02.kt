fun main () {
    val km_por_litro = 20
    val valor_do_litro = 5
    val qtd_dinheiro = 10
    val qtd_litros_comprada = qtd_dinheiro / valor_do_litro
    val distancia_maxima = qtd_litros_comprada * km_por_litro
    print("Pelo valor de R$ $qtd_dinheiro é possível comprar $qtd_litros_comprada L. O carro pode percorrer: $distancia_maxima km")   
}