let qtd_pessoa = parseInt(prompt("Quantas pessoas tem na turma: "))
let soma_idades = 0
var pessoa = 1

for (i= 0; i<= qtd_pessoa; 1) {
    let idade = parseInt(prompt(`Digite a idade da ${pessoa}º pessoa: `))
    soma_idades += idade
    i++
    pessoa++
}

var media = soma_idades / qtd_pessoa

if (media >=0 && media <= 25) {
    turma = "jovem"
}else if(media > 25 && media <= 60){
    turma = "adulta"
}else{
    turma = "idosa"
}
console.log(`A media de idade é ${media}, por tanto a turma é ${turma}`)