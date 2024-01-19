fun main () {
    var numero_alunos = 0
    var maior_nota = -10
    var menor_nota = 10
    var melhor_aluno = 0
    var pior_aluno = 0
    var total_pontos = 0
    var aluno = " "
    var professor = " "

    println("Digite qual o gabarito da questão um: ")
    var gabarito_1 = readLine()!!
    println("Digite qual o gabarito da questão dois: ")
    var gabarito_2 = readLine()!!
    println("Digite qual o gabarito da questão três: ")
    var gabarito_3 = readLine()!!
    println("Digite qual o gabarito da questão quatro: ")
    var gabarito_4 = readLine()!!
    println("Digite qual o gabarito da questão cinco: ")
    var gabarito_5 = readLine()!!
    println("Digite qual o gabarito da questão seis: ")
    var gabarito_6 = readLine()!!
    println("Digite qual o gabarito da questão sete: ")
    var gabarito_7 = readLine()!!
    println("Digite qual o gabarito da questão oito: ")
    var gabarito_8 = readLine()!!
    println("Digite qual o gabarito da questão nove: ")
    var gabarito_9 = readLine()!!
    println("Digite qual o gabarito da questão dez: ")
    var gabarito_10 = readLine()!!
    professor = "gabarito recebido"

    while(true) {
        println("Digite o tipo de usuário [A]luno ou para sair digite [S]air:")
        var usuario = readLine()!!
        var pontos = 0
        if ('A' == usuario[0].uppercaseChar()) {
            println("Digite qual a resposta da questão um: ")
            var questao_1 = readLine()!!
            println("Digite qual a resposta da questão dois: ")
            var questao_2 = readLine()!!
            println("Digite qual a resposta da questão três: ")
            var questao_3 = readLine()!!
            println("Digite qual a resposta da questão quatro: ")
            var questao_4 = readLine()!!
            println(("Digite qual a resposta da questão cinco: "))
            var questao_5 = readLine()!!
            println("Digite qual a resposta da questão seis: ")
            var questao_6 = readLine()!!
            println("Digite qual a resposta da questão sete: ")
            var questao_7 = readLine()!!
            println("Digite qual a resposta da questão oito: ")
            var questao_8 = readLine()!!
            println("Digite qual a resposta da questão nove: ")
            var questao_9 = readLine()!!
            println("Digite qual a resposta da questão dez: ")
            var questao_10 = readLine()!!
            aluno = "notas recebidas"
            numero_alunos++
            if ((aluno == "notas recebidas") && (professor == "gabarito recebido")) {
                if (questao_1 == gabarito_1) {
                    pontos++
                }
                if (questao_2 == gabarito_2) {
                    pontos++
                }
                if (questao_3 == gabarito_3) {
                    pontos++
                }
                if (questao_4 == gabarito_4) {
                    pontos++
                }
                if (questao_5 == gabarito_5) {
                    pontos++
                }
                if (questao_6 == gabarito_6) {
                    pontos++
                }
                if (questao_7 == gabarito_7) {
                    pontos++
                }
                if (questao_8 == gabarito_8) {
                    pontos++
                }
                if (questao_9 == gabarito_9) {
                    pontos++
                }
                if (questao_10 == gabarito_10) {
                    pontos++
                }
                total_pontos += pontos
                if (pontos > maior_nota) {
                    maior_nota = pontos
                    melhor_aluno = numero_alunos
                } else if (pontos < menor_nota) {
                    menor_nota = pontos
                    pior_aluno = numero_alunos
                }
            }
        } else {
            break
        }

    }
        var media = (total_pontos / (10.0 * numero_alunos)).toFloat()
        println("O maior acerto é ${maior_nota} do aluno número ${melhor_aluno}")
        println("O menor acerto é ${menor_nota} do aluno número ${pior_aluno}")
        println("O total de alunos é ${numero_alunos}")
        println("A media dos alunos na prova é de: ${media}")
}