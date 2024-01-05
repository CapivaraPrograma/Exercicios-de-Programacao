deseja_sacar = float(input("Valor desejado de saque: [10 - 600]: "))
valor_saque = deseja_sacar
if valor_saque < 10 or valor_saque > 600:
    print("Esse valor não é permitido")
else:
    nota_cem = int(valor_saque / 100)
    valor_saque = valor_saque - (nota_cem * 100)
    nota_cinquenta = int(valor_saque / 50)
    valor_saque = valor_saque - (nota_cinquenta * 50)
    nota_dez = int(valor_saque / 10)
    valor_saque = valor_saque - (nota_dez * 10)
    nota_cinco = int(valor_saque / 5)
    valor_saque = valor_saque - (nota_cinco * 5)
    moeda_um = valor_saque
    print(f"Para sacar  R$ {deseja_sacar}, você recebera {nota_cem} nota(s) de cem, {nota_cinquenta} nota(s) de cinquenta,"
          f"{nota_dez} nota(s) de dez, {nota_cinco} nota(s) de cinco e {moeda_um} moeda(s) de um real.")