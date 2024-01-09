fun main(){
    println("Quantas pessoas tem na turma: ")
var qtd_pessoa = readLine()!!.toInt()
var soma_idades = 0
var pessoa = 1

for (i in 1 .. qtd_pessoa) {
    println("Digite a idade da ${pessoa}º pessoa: ")
    var idade = readLine()!!.toInt()
    soma_idades += idade
    pessoa++
}

var media = soma_idades / qtd_pessoa
var turma = " "
if (media >=0 && media <= 25) {
    turma = "jovem"
}else if(media > 25 && media <= 60){
    turma = "adulta"
}else{
    turma = "idosa"
}
println("A media de idade é ${media}, por tanto a turma é ${turma}")
}