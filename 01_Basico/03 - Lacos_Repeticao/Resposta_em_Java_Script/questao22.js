while (true){
    var nome = prompt("Digite seu nome: ")
    var salto1 = parseFloat(prompt("Digite a altura do salto: "))
    var salto2 = parseFloat(prompt("Digite a altura do salto: "))
    var salto3 = parseFloat(prompt("Digite a altura do salto :"))
    var salto4 = parseFloat(prompt("Digite a altura do salto: "))
    var salto5 = parseFloat(prompt("Digite a altura do salto: "))
    
    var maior_salto = salto1
    var menor_salto = salto1
    
    if (salto2 > maior_salto) {
        maior_salto = salto2
    }else if (salto2 < menor_salto) {
        menor_salto = salto2
    }

    if (salto3 > maior_salto) {
        maior_salto = salto3
    }else if (salto3 < menor_salto) {
        menor_salto = salto3
    }
    
    if (salto4 > maior_salto) {
        maior_salto = salto4
    }else if (salto4 < menor_salto) {
        menor_salto = salto4
    }

    if (salto5 > maior_salto) {
        maior_salto = salto5
    }else if (salto5 < menor_salto) {
        menor_salto = salto5
    }
    
    media = (salto1 + salto2 + salto3 + salto4 + salto5 - maior_salto - menor_salto) / 5
    break
}

console.log(`\nAtleta: ${nome}`)
console.log(`Primeiro salto:${salto1}m`)
console.log(`Segundo salto:${salto2}m`)
console.log(`Terceiro salto:${salto3}m`)
console.log(`Quarto salto:${salto4}m`)
console.log(`Quinto salto:${salto5}m`)
console.log(`\nMelhor salto: ${maior_salto}m`)
console.log(`Pior salto: ${menor_salto}m`)
console.log(`Média dos demais saltos: ${media}m`)
console.log(`\nResultado final\n${nome}: ${media}m`)