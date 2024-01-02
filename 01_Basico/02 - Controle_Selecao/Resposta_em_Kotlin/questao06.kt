fun main(){
var salarioAtual = 300
var aumento = 0
when(true){
    (salarioAtual <= 280) -> aumento = (salarioAtual * 20) / 100
    (salarioAtual > 280 && salarioAtual < 700) -> aumento = (salarioAtual * 15) / 100
	(salarioAtual >= 700 && salarioAtual < 1500) -> aumento = (salarioAtual * 10) / 100
    (salarioAtual >= 1500) -> aumento = (salarioAtual * 5) / 100
    else -> {print("Opção inválida")}
}
print(salarioAtual + aumento)
}