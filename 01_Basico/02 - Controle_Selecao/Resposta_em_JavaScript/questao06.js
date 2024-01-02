const salarioAtual = 100
let aumento = 0

switch (true){
    case salarioAtual <= 280: 
        aumento = (salarioAtual * 20) / 100
        break
    case salarioAtual > 280 && salarioAtual < 700:
        aumento = (salarioAtual * 15) / 100
        break
    case salarioAtual >= 700 && salarioAtual < 1500:
         aumento = (salarioAtual * 10) / 100
        break
    case salarioAtual >= 1500:
        aumento = (salarioAtual * 5) / 100
    default:
        console.log("Opção invalida")
}
console.log(salarioAtual + aumento)