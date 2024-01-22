numero = int(input("Digite um número inteiro: "))
numero_invertido = 0
numero_dividido = numero

while numero_dividido > 0:
    digito = numero_dividido % 10
    numero_invertido = numero_invertido * 10 + digito
    numero_dividido //= 10

print(f"O número {numero} invertido fica {numero_invertido}")