let grupoA = 0
let grupoB = 0
let grupoC = 0
let grupoD = 0
let continuar = true
while (continuar) {
    let numero = parseInt(prompt("Para encerrar digite um número negaito\nDigite um número inteiro: "))

   switch(true){
    case (numero < 0):
        continuar = false
        break
   
    case (numero > 0 && numero <= 25):
        grupoA++
        break
    
    case (numero > 25 && numero <= 50):
        grupoB++
        break
        
    case (numero > 50 && numero <= 75):
        grupoC++
        break

    case (numero > 75 && numero <= 100):
        grupoD++
        break
    
    default:
        console.log("Opção inválida o número deve ser um inteiro entre 0 e 100")
   }
}
console.log(`Total de número que estão entre 0-25: ${grupoA}`)
console.log(`Total de número que estão entre 26-50: ${grupoB}`)
console.log(`Total de número que estão entre 51-75: ${grupoC}`)
console.log(`Total de número que estão entre 76-100: ${grupoD}`)

