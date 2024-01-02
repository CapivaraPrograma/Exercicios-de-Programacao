fun main(){
var horas_trabalhadas = 10
var valor_hora = 5
var salario = (horas_trabalhadas * valor_hora)
var desconto_sindicato = (salario * 3) / 100
var desconto_fgts = (salario * 11) / 100
var imposto_renda = 0


when (true) {
    (salario > 900 && salario <= 1500) -> imposto_renda = (salario * 5) / 100
    (salario > 1500 && salario <= 2500) -> imposto_renda = (salario * 10) / 100
    (salario > 2500) -> imposto_renda = (salario * 20) / 100
    else -> 0
    
}

var total_desconto =  imposto_renda + desconto_fgts + desconto_sindicato

println("Salário Bruto:            R$ $salario")
println("(-) IR                    R$ $imposto_renda")
println("(-) FGTS                  R$ $desconto_fgts")
println("(-) Sindicato:            R$ $desconto_sindicato")
println("Total de descontos:       R$ $total_desconto")
println("Salário Liquido:          R$ ${ salario - total_desconto}")  
}