numero = int(input("Digite um número inteiro para verificar se é primo: "))
if numero <= 1:
    print(f"O número {numero} não é primo")
else:
    for i in range(2, int(numero**0.5)+1):
        if numero % i == 0:
            print(f"O número {numero} não é primo, ele é divisível por:",end=" ")
            for i in range(1, int(numero**0.5)+1):
                if numero % i == 0:
                    print(f"{i}",end=",")
            break
    else:
        print(f"O número {numero} é primo")


# Esse comando poderia ser feito de uma forma melhor utilizando listas porém ainda não podemos utilizar listas nesse módulo.
'''
numero = int(input("Digite um número inteiro para verificar se é primo: "))
divisores = []
for i in range(1, int(numero**0.5)+1):
    if numero % i == 0:
        divisores.append(i)
if len(divisores) == 0:
    print(f"O número {numero} é primo.")
else:
    print(f"O número {numero} não é primo, seus divisores também são: {divisores} e {numero}")
'''