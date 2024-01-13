// Variáveis Criadas
let total_votos = 0
let candidato_01 = 0
let candidato_02 = 0
let candidato_03 = 0
let candidato_04 = 0
let voto_nulo = 0
let voto_branco = 0

while (true){
    let voto = prompt("Opções\n1 - Jose\n2 - João\n3 - Maria\n4 - Paula\n5 - Nulo\n6 - Branco\nEscolha uma opçaõ para votar: ")
    total_votos++

    if (voto == "1") {
        candidato_01++
    }else if (voto == "2") {
        candidato_02++
    }else if (voto == "3") {
        candidato_03++
    }else if (voto == "4") {
        candidato_04++
    }else if (voto == "5") {
        voto_nulo++
    }else if (voto == "6") {
        voto_branco++
    }
    
    let encerar = prompt("Alguem ainda vai votar: [S]im ou [N]ão: ")
    if (encerar[0].toUpperCase() == "N") {
        break
    }
}

let porcenVN = voto_nulo * 100 / total_votos
let porcenVB = voto_branco * 100 / total_votos

console.log(`O candidato Jose (1): Recebeu ${candidato_01} votos`)
console.log(`candidato João (2): Recebeu ${candidato_02} votos`)
console.log(`candidato Maria (3): Recebeu ${candidato_03} votos`)
console.log(`candidato Paula (4): Recebeu ${candidato_01} votos`)
console.log(`total de votos nulos: ${voto_nulo}`)
console.log(`total de votos embranco: ${voto_branco}`)
console.log(`A porcentagem de votos em nulos é: ${porcenVN}%`)
console.log(`A porcentagem de votos em branco é: ${porcenVB}%`)
console.log(`total foi: ${total_votos}`)