const preco_original = parseFloat(prompt("Digite o valor do produto: "))
let porcentagem_descontobc
desconto = (preco_original * porcentagem_desconto) / 100

console.log(`O valor origiam:           R$${preco_original}`)
console.log(`Desconto  ganho:           R$${porcentagem_desconto}`)
console.log(`O valor com desconto é:    R$${preco_original - desconto}`)