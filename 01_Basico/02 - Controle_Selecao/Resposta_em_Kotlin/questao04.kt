fun main(){
val horario = "m"
    when(horario[0].uppercase()){
        "M" -> print("Bom dia")
        "V" -> print("Boa tarde")
        "N" -> print("Boa noite")
        else -> {
            print("Opção inválida")
        }
    }
}