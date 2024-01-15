let salario_inicial = 1000
let tempo_servico = 2

let aumento_percentual = 1.5
let aumento_absoluto = salario_inicial * aumento_percentual / 100
let salario_atual = salario_inicial + aumento_absoluto

for (i = 2; i <= tempo_servico; i++ ) {
    aumento_percentual *= 2
    aumento_absoluto = salario_atual * aumento_percentual / 100
    salario_atual += aumento_absoluto
}

console.log(`O salário atual do funcionário é R$ ${salario_atual}`)
