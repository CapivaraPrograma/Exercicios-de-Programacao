def quadroNumero (numero):
    quadrado = numero ** 2
    return quadrado

numero = int(input("Digite um número inteiro: "))
print(f"O quadro do {numero} é : {quadroNumero(numero)}")