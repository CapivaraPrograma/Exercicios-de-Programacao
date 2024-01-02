salarioAtual = float(input("Digite o seu salário atual: "))
aumento = 0
if   salarioAtual <= 280: 
        aumento = (salarioAtual * 20) / 100
elif salarioAtual > 280 and salarioAtual < 700:
        aumento = (salarioAtual * 15) / 100
elif salarioAtual >= 700 and salarioAtual < 1500:
         aumento = (salarioAtual * 10) / 100
elif salarioAtual >= 1500:
        aumento = (salarioAtual * 5) / 100
else:
    print("Opção invalida")

print(salarioAtual + aumento)