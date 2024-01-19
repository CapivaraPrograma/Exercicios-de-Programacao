let numero_alunos = 0
let maior_nota = -10
let menor_nota = 10
let melhor_aluno = 0
let pior_aluno = 0
var total_pontos = 0
let aluno = "esperando"
let professor = "esperando"

while(true) {
    let usuario = prompt("Para sair digite [S]air\nDigite o tipo de usuário [P]rofessor ou [A]luno:")
    var pontos = 0
    if (usuario[0].toUpperCase() == "A") {
        questao_1 = prompt("Digite qual a resposta da questão um: ")
        questao_2 = prompt("Digite qual a resposta da questão dois: ")
        questao_3 = prompt("Digite qual a resposta da questão três: ")
        questao_4 = prompt("Digite qual a resposta da questão quatro: ")
        questao_5 = prompt("Digite qual a resposta da questão cinco: ")
        questao_6 = prompt("Digite qual a resposta da questão seis: ")
        questao_7 = prompt("Digite qual a resposta da questão sete: ")
        questao_8 = prompt("Digite qual a resposta da questão oito: ")
        questao_9 = prompt("Digite qual a resposta da questão nove: ")
        questao_10 = prompt("Digite qual a resposta da questão dez: ")
        aluno = "notas recebidas"
        numero_alunos++  
    }else if (usuario[0].toUpperCase() == "P") {
        gabarito_1 = prompt("Digite qual o gabarito da questão um: ")
        gabarito_2 = prompt("Digite qual o gabarito da questão dois: ")
        gabarito_3 = prompt("Digite qual o gabarito da questão três: ")
        gabarito_4 = prompt("Digite qual o gabarito da questão quatro: ")
        gabarito_5 = prompt("Digite qual o gabarito da questão cinco: ")
        gabarito_6 = prompt("Digite qual o gabarito da questão seis: ")
        gabarito_7 = prompt("Digite qual o gabarito da questão sete: ")
        gabarito_8 = prompt("Digite qual o gabarito da questão oito: ")
        gabarito_9 = prompt("Digite qual o gabarito da questão nove: ")
        gabarito_10 = prompt("Digite qual o gabarito da questão dez: ")
        professor = "gabarito recebido"
    }else if(usuario[0].toUpperCase() == "S") {
        break
    }

    if ((aluno == "notas recebidas") && (professor == "gabarito recebido")) {
        if (questao_1 == gabarito_1){
            pontos++
        }
        if (questao_2 == gabarito_2){
            pontos++
        }
        if (questao_3 == gabarito_3){
            pontos++
        }
        if (questao_4 == gabarito_4){
            pontos++
        }
        if (questao_5 == gabarito_5){
            pontos++
        }
        if (questao_6 == gabarito_6){
            pontos++
        }
        if (questao_7 == gabarito_7){
            pontos++
        }
        if (questao_8 == gabarito_8){
            pontos++
        }
        if (questao_9 == gabarito_9){
            pontos++
        }
        if (questao_10 == gabarito_10){
            pontos++
        }
        total_pontos += pontos
        if (pontos > maior_nota) {
        maior_nota = pontos
        melhor_aluno = numero_alunos
        }else if (pontos < menor_nota) {
        menor_nota = pontos
        pior_aluno = numero_alunos
        }
    }
}
let media = total_pontos / 10 * numero_alunos
console.log(`O maior acerto é ${maior_nota} do aluno número ${melhor_aluno}`)
console.log(`O menor acerto é ${menor_nota} do aluno número ${pior_aluno}`)
console.log(`O total de alunos é ${numero_alunos}`)
console.log(`A media dos alunos na prova é de: ${media}`)