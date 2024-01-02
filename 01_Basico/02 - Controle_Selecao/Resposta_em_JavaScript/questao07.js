const horas_trabalhadas = parseFloat(prompt("Total de horas trabalhas: "))
const valor_hora = parseFloat(prompt("Valor hora trabalhada: "))
const salario = (horas_trabalhadas * valor_hora)
const desconto_sindicato = (salario * 3) / 100
const desconto_fgts = (salario * 11) / 100
let imposto_renda = 0

switch (true){
    case salario > 900 && salario <= 1500:
        imposto_renda = (salario * 5) / 100
        break
    case salario > 1500 && salario <= 2500:
        imposto_renda = (salario * 10) / 100
        break
    case salario > 2500:
        imposto_renda = (salario * 20) / 100
        break
}

const total_desconto =  imposto_renda + desconto_fgts + desconto_sindicato

console.log(`Salário Bruto:             R$ ${salario.toFixed(2)}`)
console.log(`(-) IR                     R$ ${imposto_renda.toFixed(2)}`)
console.log(`(-) FGTS                   R$ ${desconto_fgts.toFixed(2)}`)
console.log(`(-) Sindicato:             R$ ${desconto_sindicato.toFixed(2)}`)
console.log(`Total de descontos:        R$ ${total_desconto.toFixed(2)}`)
console.log(`Salário Liquido:           R$ ${(salario - total_desconto).toFixed(2)}`)