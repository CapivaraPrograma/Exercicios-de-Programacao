
codigoMaA = 0
codigoMeA = 0
codigoMaG = 0
codigoMeG = 0
maior_altura = -1000
menor_altura = 1000
mais_gordo = -1000
menos_gordo = 1000
alturaClientes = 0
gorduraClientes = 0 
numeroClientes = 0

while True:
    cliente = int(input("Digite seu código: "))

    # Verificar se acabou os clientes
    if cliente == 0:
        break

    peso = float(input("Digite seu peso: "))
    altura = float(input("Digite sua altura: "))
    alturaClientes += altura
    gorduraClientes += peso
    numeroClientes += 1    

    # Verificar Tamanho
    if peso > mais_gordo:
        codigoMaG = cliente
        mais_gordo = peso
    elif peso < menos_gordo:
        codigoMeG = cliente
        menos_gordo = peso

    # Verificar altura
    if altura > maior_altura: 
        codigoMaA = cliente
        maior_altura = altura
    elif altura < menor_altura:
        codigoMeA = cliente
        menor_altura = altura
    
mediaAltura = alturaClientes / numeroClientes
mediaPeso = gorduraClientes / numeroClientes
print(f"O código do cliente com maior altura é {codigoMaA} sua altura é: {maior_altura}")
print(f"O código do cliente com menor altura é {codigoMeA} sua altura é: {menor_altura}")
print(f"O código do cliente mais gordo é: {codigoMaG} seu peso é {mais_gordo} ")
print(f"O código do cliente menos gordo é: {codigoMeG} seu peso é {menos_gordo} ")
print(f"A média de altura dos clientes é: {mediaAltura:.2f}")
print(f"A média de peso dos clientes é: {mediaPeso:.2f}")
