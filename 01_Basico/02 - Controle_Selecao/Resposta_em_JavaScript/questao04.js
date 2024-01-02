var horario = prompt("Em quam horário você estuda ?\n[M]- matutino\n[V] - vespertino\n[N] - noturno\nreposta: ")
switch(horario[0].toUpperCase()){
    case "M":
        console.log("Bom dia")
        break
    case "V":
        console.log("Boa tarde")
    case "N":
        console.log("Boa noite")
        break
    default:
        console.log("Opção inválida")
}