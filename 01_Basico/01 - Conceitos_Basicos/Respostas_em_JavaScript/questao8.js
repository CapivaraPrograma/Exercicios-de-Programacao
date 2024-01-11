let vf = parseFloat(prompt("Qual valor final que você deseja obter: "))
let i = parseInt(prompt("Qual vai ser a rentabilidade: "))
let j = i / 100
let m = 1 + j
let meses = parseInt(prompt("Qantos meses ? "))
let vi = vf / m ** meses

console.log(vi)