@file:JvmName("JDoodle")
fun main() {
    // Variáveis Criadas
    var total_votos = 0
    var candidato_01 = 0
    var candidato_02 = 0
    var candidato_03 = 0
    var candidato_04 = 0
    var voto_nulo = 0
    var voto_branco = 0

    while (true){
        println("Opções\n1 - Jose\n2 - João\n3 - Maria\n4 - Paula\n5 - Nulo\n6 - Branco\nEscolha uma opçaõ para votar: ")
        var voto = readLine()!!
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
        
        println("Alguem ainda vai votar: [S]im ou [N]ão: ")
        var encerar = readLine()!!
        if (encerar == "nao") {
            break
        }
    }

    var porcenVN = voto_nulo * 100 / total_votos
    var porcenVB = voto_branco * 100 / total_votos

    println("O candidato Jose (1): Recebeu ${candidato_01} votos")
    println("O candidato João (2): Recebeu ${candidato_02} votos")
    println("O candidato Maria (3): Recebeu ${candidato_03} votos")
    println("O candidato Paula (4): Recebeu ${candidato_01} votos")
    println("O total de votos nulos: ${voto_nulo}")
    println("O total de votos embranco: ${voto_branco}")
    println("A porcentagem de votos em nulos é: ${porcenVN}%")
    println("A porcentagem de votos em branco é: ${porcenVB}%")
    println("O total foi: ${total_votos}")
}