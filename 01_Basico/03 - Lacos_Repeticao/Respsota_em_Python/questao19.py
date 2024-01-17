grupoA = 0
grupoB = 0
grupoC = 0
grupoD = 0

while (True):
    numero = int(input("Para encerrar digite um número negaito\nDigite um número inteiro: "))

    if numero < 0:
        break
    elif numero > 0 and numero <= 25:
        grupoA += 1
    elif numero > 25 and numero <= 50:
        grupoB += 1
    elif numero > 50 and numero <= 75:
        grupoC += 1
    elif numero > 75 and numero <= 100:
        grupoD += 1
    else:
        print("Opção inválida o número deve ser um inteiro entre 0 e 100") 
    
print(f"Total de número que estão entre 0-25: {grupoA}")
print(f"Total de número que estão entre 26-50: {grupoB}")
print(f"Total de número que estão entre 51-75: {grupoC}")
print(f"Total de número que estão entre 76-100: {grupoD}")
