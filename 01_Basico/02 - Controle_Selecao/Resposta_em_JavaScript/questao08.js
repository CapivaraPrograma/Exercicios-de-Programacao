dia_atual = parseInt(prompt("Dia da Semana:\n1 - Domingo\n2 - Segunda\n3 - Terça\n4 - Quarta\n5 - Quinta\n6 - Sexta\n7 - Sábado\nEsolha uma opção: "))

switch(true){
    case dia_atual == 1:
        console.log("Dia: Domingo")
        break
    case dia_atual == 2:
        console.log("Dia: Segunda")
        break
    case dia_atual == 3:
        console.log("Dia: Terça")
        break
    case dia_atual == 4:
        console.log("Dia: Quarta")
        break
    case dia_atual == 5:
        console.log("Dia: Quinta")
        break
    case dia_atual == 6:
        console.log("Dia: Sexta")
        break
    case dia_atual == 7:
        console.log("Dia: Sábado")
        break
    default:
        console.log("Opção Inválida")
}