fun main() {
    val produto = 100f
    val porcentagem_desconto = 20f
    val desconto = (produto * porcentagem_desconto) / 100
    println("O valor original:		R$ $produto")
  	println("Desconto ganho:			R$  $desconto")
    println("O valor com desconto é:		R$  ${produto - desconto}")
}