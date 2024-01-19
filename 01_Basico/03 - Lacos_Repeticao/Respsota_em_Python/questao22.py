while True:
    maior_salto = -100
    menor_salto = 100
    nome = input("Digite seu nome: ")
    salto1 = float(input("Digite a altura do salto: "))
    salto2 = float(input("Digite a altura do salto: "))
    salto3 = float(input("Digite a altura do salto :"))
    salto4 = float(input("Digite a altura do salto: "))
    salto5 = float(input("Digite a altura do salto: "))
    
    if salto1 > maior_salto:
        maior_salto = salto1
    elif salto1 < menor_salto:
        menor_salto = salto1
    
    if salto2 > maior_salto:
        maior_salto = salto2
    elif salto2 < menor_salto:
        menor_salto = salto2
    
    if salto3 > maior_salto:
        maior_salto = salto3
    elif salto1 < menor_salto:
        menor_salto = salto3
    
    if salto4 > maior_salto:
        maior_salto = salto4
    elif salto4 < menor_salto:
        menor_salto = salto4
    
    if salto5 > maior_salto:
        maior_salto = salto1
    elif salto5 < menor_salto:
        menor_salto = salto5
    
    media = (salto1 + salto2 + salto3 + salto4 + salto5 - maior_salto - menor_salto) / 5
    break

print("")
print(f"\nAtleta: {nome}")
print(f"Primeiro salto: {salto1:2}m")
print(f"Segundo salto: {salto2:2}m")
print(f"Terceiro salto: {salto3:2}m")
print(f"Quarto salto: {salto4:2}m")
print(f"Quinto salto: {salto5:2}m")
print(f"\nMelhor salto: {maior_salto}m")
print(f"Pior salto: {menor_salto}m")
print(f"Média dos demais saltos: {media}m ")
print(f"\nResultado final\n{nome}: {media}")