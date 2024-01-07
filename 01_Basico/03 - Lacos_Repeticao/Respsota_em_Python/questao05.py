numero_1 = int(input("Digite um número: "))
numero_2 = int(input("Digite um número: "))
soma = 0
maior = numero_1 if (numero_1 > numero_2) else numero_2
menor = numero_1 if (numero_1 < numero_2) else numero_2

for i in range(menor,maior+1):
    soma += i
    print(i)

print(f"A soma dos número é {soma}")




