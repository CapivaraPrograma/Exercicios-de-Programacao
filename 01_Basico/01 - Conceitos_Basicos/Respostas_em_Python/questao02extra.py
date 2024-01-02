numero_inteiro1 = int(input("Digite um número inteiro: "))
numero_inteiro2 = int(input("Digite um número inteiro: "))
print(f"O primeiro: {numero_inteiro1}\nO segundo é: {numero_inteiro2}")
print("Invertendo...")

numero_inteiro1, numero_inteiro2 = numero_inteiro2, numero_inteiro1
print(f"O primeiro: {numero_inteiro1}\nO segundo é: {numero_inteiro2}")