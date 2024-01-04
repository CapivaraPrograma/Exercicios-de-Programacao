pergunta1 = input("Você telefonou para a vitima ? [S]im ou [N]ão")
pergunta2 = input("Você este no local do crime? [S]im ou [N]ão")
pergunta3 = input("Você mora perto da vítima ? [S]im ou [N]ão")
pergunta4 = input("Você devia para a vítima? [S]im ou [N]ão")
pergunta5 = input("Você já trabalhou com a vítima ?  [S]im ou [N]ão")
nivel_suspeito = 0

if pergunta1[0].upper() == "S":
    nivel_suspeito += 1
if pergunta2[0].upper() == "S":
    nivel_suspeito += 1
if pergunta3[0].upper() == "S":
    nivel_suspeito += 1
if pergunta4[0].upper() == "S":
    nivel_suspeito += 1
if pergunta5[0].upper() == "S":
    nivel_suspeito += 1
    
if nivel_suspeito == 2:
    print("Suspeito")
elif nivel_suspeito == 3 or nivel_suspeito == 4:
    print("Cúmplice")
elif nivel_suspeito == 5:
    print("Assassino")
else:
    print("Inocente")
