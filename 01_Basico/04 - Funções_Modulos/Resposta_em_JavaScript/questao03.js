// Forma 01, forma simples e feita na mão
function verificar_frase(frase, letra){
    var contador = 0
    let tamanho = frase.length
    for (i = 0; i < tamanho ; i++){
        if (letra == frase[i]) {
            contador++
        }
    }
    return `A letra '${letra}' aparece na frase '${frase}', um total de ${contador}`
}

//Aqui estamos recebendo os valores de a e b que serão o posteriormente os valores dos parametros da função

let a = prompt("Digite uma frase: ")
let b = prompt("Digite uma letra: ")

//Aqui chamamos a função, perceba que os atributos dos parametros "frase" e "letra" são respectivamente "a" e "b"
let primeiro_teste = verificar_frase(a, b)

console.log(primeiro_teste)
