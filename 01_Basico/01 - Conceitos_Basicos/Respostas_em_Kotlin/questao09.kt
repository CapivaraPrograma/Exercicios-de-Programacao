fun main () {
    println("Qual o ganho por hora: ")
    var ganho_hora = readLine()!!.toDouble()
    println("Total de horas trabalhadas no mês: ")
    var horas_trabalhadas = readLine()!!.toDouble()
    var salario_bruto = ganho_hora * horas_trabalhadas
    var imposto = salario_bruto * 10 / 100
    var inss = salario_bruto * 8 / 100
    var sindicato = salario_bruto * 5 / 100
    var salario_liquido = salario_bruto - imposto - inss - sindicato

println("Salário bruto:             R$${salario_bruto}")
println("- IR (11%):                R$${imposto}")
println("- INSS (8%):               R$${inss}")
println("- Sindicato (5%):          R$${sindicato}")
println("Salário liquido:           R$${salario_liquido}")
}