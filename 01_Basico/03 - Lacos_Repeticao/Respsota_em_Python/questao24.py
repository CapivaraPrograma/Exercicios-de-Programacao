def inverte_numero(numero):
    numero_invertido = 0
    while numero > 0:
        digito = numero % 10
        numero_invertido = numero_invertido * 10 + digito
        numero //= 10
    return numero_invertido

numero = int(input("Digite um número inteiro positivo: "))
print(f"O número invertido é {inverte_numero(numero)}.")
