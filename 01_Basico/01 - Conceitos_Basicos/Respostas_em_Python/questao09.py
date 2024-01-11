ganho_hora = float(input("Qual o ganho por hora: "))
horas_trabalhadas = float(input("Total de horas trabalhadas no mês: "))
salario_bruto = ganho_hora * horas_trabalhadas
imposto = salario_bruto * 10 / 100
inss = (salario_bruto * 8 / 100)
sindicato = (salario_bruto * 5 / 100)
salario_liquido = salario_bruto - imposto - inss - sindicato

print(f"Salário bruto:          R${salario_bruto}\n"
      f"- IR (11%):             R${imposto}\n"
      f"- INSS (8%):            R${inss}\n"
      f"- Sindicato (5%):       R${sindicato}\n"
      f"Salário liquido:        R${salario_liquido}\n")