fun main () {
    println("Digite o número de cidades: ")
    var numero_cidades = readLine()!!.toInt()
    var maior_indice_acidentes = -1000
    var menor_indice_acidentes = 1000
    var total_veiculos = 0
    var cidade_maior = ""
    var cidade_menor = ""
    var cidades_poucos_veiculos = 0
    var acidentes_poucos_veiculos = 0

    for (i in 1 ..  numero_cidades ) {
        println("Digite o nome da cidade: ")
        var cidade = readLine()!!
        println("Digite o número de veículos da cidade ${cidade}: ")
        var numero_veiculos = readLine()!!.toInt()
        total_veiculos += numero_veiculos
        println(("Digite o número de acidentes da cidade ${cidade}: "))
        var numero_acidentes = readLine()!!.toInt()
        
        if (numero_acidentes > maior_indice_acidentes) {
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
        

            

    var media_veiculos = total_veiculos / numero_cidades
    var media_poucos_veiculos = acidentes_poucos_veiculos / cidades_poucos_veiculos

    println("O maior indice de acidente é da cidade ${cidade_maior} com ${maior_indice_acidentes} acidentes")
    println("O menor indice de acidente é da cidade ${cidade_menor} com ${menor_indice_acidentes} acidentes")
    println("A média de veículos das cidades é de : ${media_veiculos}")
    if (cidades_poucos_veiculos > 0) {
        println("A media de acidades em cidades com menos de 2000 veículos é: ${media_poucos_veiculos}")
    }
}