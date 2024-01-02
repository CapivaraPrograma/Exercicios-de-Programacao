# Em python: No lugar do if utilizamos a função sorted, nesse caso apenas criamos uma lista organizada por sorted de forma reversa.
numero1 = int(input("Digite um número: "))
numero2 = int(input("Digite um número: "))
numero3 = int(input("Digite um número: "))
numeros_ordenados = sorted([numero1, numero2, numero3], reverse=True)
print(f"{numeros_ordenados[0]=},{numeros_ordenados[1]=},{numeros_ordenados[2]=}")