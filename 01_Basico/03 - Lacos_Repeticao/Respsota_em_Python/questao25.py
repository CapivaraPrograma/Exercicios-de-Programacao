numero = int(input("Digite um número inteiro para imprimira sua sequência: "))
primerio_numero = 1
segundo_numero =1
soma = 0

for i in range(1,numero + 1):
    sequencia = primerio_numero / segundo_numero
    print(f"A divisão de {primerio_numero} / {segundo_numero} é: {sequencia:.2f}", end=". ")
    primerio_numero += 1
    segundo_numero +=2
    soma += sequencia

print(f"\nA soma da sequência é {soma:.2f}")