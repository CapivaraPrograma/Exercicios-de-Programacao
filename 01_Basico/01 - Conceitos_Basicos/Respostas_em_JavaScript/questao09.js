let ganho_hora = parseFloat(prompt("Qual o ganho por hora: "))
let horas_trabalhadas = parseFloat(prompt("Total de horas trabalhadas no mês: "))
let salario_bruto = ganho_hora * horas_trabalhadas
let imposto = salario_bruto * 10 / 100
let inss = salario_bruto * 8 / 100
let sindicato = salario_bruto * 5 / 100
let salario_liquido = salario_bruto - imposto - inss - sindicato

console.log(`Salário bruto:             R$${salario_bruto}`)
console.log(`- IR (11%):                R$${imposto}`)
console.log(`- INSS (8%):               R$${inss}`)
console.log(`- Sindicato (5%):          R$${sindicato}`)
console.log(`Salário liquido:           R$${salario_liquido}`)