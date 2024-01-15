
let numero_cidades = parseInt(prompt("Digite o número de cidades: "))
let maior_indice_acidentes = -1000
let menor_indice_acidentes = 1000
let total_veiculos = 0
let cidade_maior = ""
let cidade_menor = ""
let cidades_poucos_veiculos = 0
let acidentes_poucos_veiculos = 0
let poucos_veiculos = 0


for (i = 1; i < numero_cidades + 1; i++){
    let cidade = prompt("Digite o nome da cidade: ")
    let numero_veiculos = parseInt(prompt(`Digite o número de veículos da cidade ${cidade}: `))
    total_veiculos += numero_veiculos
    var numero_acidentes = parseInt(prompt(`Digite o número de acidentes da cidade ${cidade}: `))
    
    if (numero_acidentes > maior_indice_acidentes){
        maior_indice_acidentes = numero_acidentes
        cidade_maior = cidade
    }else if (numero_acidentes < menor_indice_acidentes) {
        menor_indice_acidentes = numero_acidentes
        cidade_menor = cidade
    }

    if (numero_veiculos < 2000) {
        cidades_poucos_veiculos += numero_veiculos
        acidentes_poucos_veiculos += numero_acidentes
    }
}
    

        

let media_veiculos = total_veiculos / numero_cidades
let media_poucos_veiculos = acidentes_poucos_veiculos / cidades_poucos_veiculos

console.log(`O maior indice de acidente é da cidade ${cidade_maior} com ${maior_indice_acidentes} acidentes`)
console.log(`O menor indice de acidente é da cidade ${cidade_menor} com ${menor_indice_acidentes} acidentes`)
console.log(`A média de veículos das cidades é de : ${media_veiculos}`)
if (cidades_poucos_veiculos > 0) {
    console.log(`A media de acidades em cidades com menos de 2000 veículos é: ${media_poucos_veiculos}`)
}