let codigoMaA = 0
let codigoMeA = 0
let codigoMaG = 0
let codigoMeG = 0
let maior_altura = -100
let menor_altura = 1000
let mais_gordo = -1000
let menos_gordo = 1000
let alturaClientes = 0
let gorduraClientes = 0 
let numeroClientes = 0

while (true) {
    cliente = parseInt(prompt("Digite seu código: "))
    // Verificar se acabou os clientes
    if (cliente == 0){
        break
    }

    peso = parseFloat(prompt("Digite seu peso: "))
    altura = parseFloat(prompt("Digite sua altura: "))
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
mediaAltura = alturaClientes / numeroClientes
mediaPeso = gorduraClientes / numeroClientes
console.log(`O código do cliente com maior altura é ${codigoMaA} sua altura é: ${maior_altura}`)
console.log(`O código do cliente com menor altura é ${codigoMeA} sua altura é: ${menor_altura}`)
console.log(`O código do cliente mais gordo é: ${codigoMaG} seu peso é ${mais_gordo} `)
console.log(`O código do cliente menos gordo é: ${codigoMeG} seu peso é ${menos_gordo} `)
console.log(`A média de altura dos clientes é: ${mediaAltura.tofixed(2)}`)
console.log(`A média de peso dos clientes é: ${mediaPeso.tofixed(2)}`)