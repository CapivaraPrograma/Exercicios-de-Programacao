horas_trabalhadas = float(input("Digie o total de horas trabalhas no mês: "))
valor_hora = float(input("Digite o valor da hora trabalhada: "))
salario = (horas_trabalhadas * valor_hora)
desconto_sindicato = (salario * 3) / 100
desconto_fgts = (salario * 11) / 100
imposto_renda = 0

if salario <= 900:
    imposto_renda = 0
elif salario > 900 and salario <= 1500:
    imposto_renda = (salario * 5) / 100
elif salario > 1500 and salario <= 2500:
    imposto_renda = (salario * 10) / 100
elif salario > 2500:
    imposto_renda = (salario * 20) / 100
    
total_desconto =  imposto_renda + desconto_fgts + desconto_sindicato
print(
    f"Salário Bruto:            R$ {salario}\n"
    f"(-) IR                    R$ {imposto_renda:2}\n"
    f"(-) FGTS                  R$ {desconto_fgts:2}\n"
    f"(-) Sindicato:            R$ {desconto_sindicato:2}\n"
    f"Total de descontos:       R$ {total_desconto:2}\n"
    f"Salário Liquido:          R$ { salario - total_desconto:2}"
    )