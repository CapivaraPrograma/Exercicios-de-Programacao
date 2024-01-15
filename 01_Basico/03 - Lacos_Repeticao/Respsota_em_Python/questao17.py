
numero_cidades = int(input("Digite o número de cidades: "))
maior_indice_acidentes = -1000
menor_indice_acidentes = 1000
total_veiculos = 0
cidade_maior = ""
cidade_menor = ""
cidades_poucos_veiculos = 0
acidentes_poucos_veiculos = 0

for i in range(1, numero_cidades + 1):
    cidade = input("Digite o nome da cidade: ")
    numero_veiculos = int(input(f"Digite o número de veículos da cidade {cidade}: "))
    total_veiculos += numero_veiculos
    numero_acidentes = int(input(f"Digite o número de acidentes: "))
    
    if numero_acidentes > maior_indice_acidentes:
        maior_indice_acidentes = numero_acidentes
        cidade_maior = cidade
    elif numero_acidentes < menor_indice_acidentes:
        menor_indice_acidentes = numero_acidentes
        cidade_menor = cidade
    
    if numero_veiculos < 2000:
        cidades_poucos_veiculos += numero_veiculos
        acidentes_poucos_veiculos += numero_acidentes

        

media_veiculos = total_veiculos / numero_cidades
media_poucos_veiculos = acidentes_poucos_veiculos / cidades_poucos_veiculos

print(f"O maior indice de acidente é da cidade {cidade_maior} com {maior_indice_acidentes} acidentes")
print(f"O menor indice de acidente é da cidade {cidade_menor} com {menor_indice_acidentes} acidentes")
print(f"A media de veículos das cidades é de : {media_veiculos}")

if cidades_poucos_veiculos > 0:
    print(f"A media de acidades em cidades com menos de 2000 veículos é: {media_poucos_veiculos}")