fun main(){
    var dia_atual = 2

when(true){
    (dia_atual == 1) -> print("Dia: Domingo")   
    (dia_atual == 2) -> print("Dia: Segunda")
    (dia_atual == 3) -> print("Dia: Terça")
	(dia_atual == 4) -> print("Dia: Quarta")
    (dia_atual == 5) -> print("Dia: Quinta")
    (dia_atual == 6) -> print("Dia: Sexta")
    (dia_atual == 7) -> print("Dia: Sábado")
    else -> print("Opção Inválida")
}
}