fun main () {
var codigoMaA = 0
var codigoMeA = 0
var codigoMaG = 0
var codigoMeG = 0
var maior_altura = -100f
var menor_altura = 1000f
var mais_gordo = -1000f
var menos_gordo = 1000f
var alturaClientes = 0f
var gorduraClientes = 0f 
var numeroClientes = 0

while (true) {
    println("Digite seu código: ")
    var cliente = readLine()!!.toInt()

    // Verificar se acabou os clientes
    if (cliente == 0){
        break
    }

    println("Digite seu peso: ")
    var peso = readLine()!!.toFloat()
    println("Digite sua altura: ")
    var altura = readLine()!!.toFloat()
    alturaClientes += altura
    gorduraClientes += peso
    numeroClientes++
    

    // Verificar Tamanho
    if (peso > mais_gordo) {
        codigoMaG = cliente
        mais_gordo = peso
    }else if (peso < menos_gordo) {
        codigoMeG = cliente
        menos_gordo = peso
    }

    // Verificar altura
    if (altura > maior_altura) {
        codigoMaA = cliente
        maior_altura = altura
    }else if (altura < menor_altura) {
        codigoMeA = cliente
        menor_altura = altura
    }
}
var mediaAltura = alturaClientes / numeroClientes
var mediaPeso = gorduraClientes / numeroClientes
println("O código do cliente com maior altura é ${codigoMaA} sua altura é: ${maior_altura}")
println("O código do cliente com menor altura é ${codigoMeA} sua altura é: ${menor_altura}")
println("O código do cliente mais gordo é: ${codigoMaG} seu peso é ${mais_gordo} ")
println("O código do cliente menos gordo é: ${codigoMeG} seu peso é ${menos_gordo} ")
println("A média de altura dos clientes é: ${mediaAltura}")
println("A média de peso dos clientes é: ${mediaPeso}")
}