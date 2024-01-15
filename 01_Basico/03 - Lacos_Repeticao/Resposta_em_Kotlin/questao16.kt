fun main() {
    println("Digite o salário inicial: ")
    var salario_inicial = readLine()!!.toDouble()
    print("Digite o tempo de serviço (em anos): ")
    var tempo_servico = readLine()!!.toInt()

    var aumento_percentual = 1.5
    var aumento_absoluto = salario_inicial * aumento_percentual / 100
    var salario_atual = salario_inicial + aumento_absoluto

    for (i in 2 .. tempo_servico) {
        aumento_percentual *= 2
        aumento_absoluto = salario_atual * aumento_percentual / 100
        salario_atual += aumento_absoluto
    }

    println("O salário atual do funcionário é R$ ${salario_atual}")
}
