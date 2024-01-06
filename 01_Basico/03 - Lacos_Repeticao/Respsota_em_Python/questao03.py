import os

# Variáveis Criadas:
nome, idade, salario, sexo, estado_civil = "", 0, 0, "idef", "idef"

while True:
    if len(nome) < 3:
        nome = input("Digite seu nome (O nome deve ter mais de 3 dígitos): ")
        if len(nome) < 3:
            os.system("cls")
            print("Opção inválida, o nome deve ter mais de 3 dígitos")
            continue

    if idade <= 0 or idade > 150:
        idade = int(input("Digite sua idade: "))
        if idade <= 0 or idade > 150:
            os.system("cls")
            print("Opção inválida, a idade dever ser maior 0 e menor que 150.")
            continue

    if salario <= 0:
        os.system("cls")
        print("Opção inválida, o salário deve ser maior que 0")
        salario = float(input("Digite seu salário: "))
        continue

    if sexo[0].upper() !="M" and sexo[0].upper() != "F":
        os.system("cls")
        print("Opção inválda, o sexo dever ser Masculino ou Feminino.")
        sexo = input("Digite seu sexo: [M]asculino ou [F]eminino: ")
        continue

    if estado_civil[0].upper() != "C" and estado_civil[0].upper() != "S" and \
        estado_civil[0].upper() != "D" and estado_civil[0].upper() != "V":
        os.system("cls")
        print("Opção inválida, o estado civil deve ser: C]asado, [S]oldeiro, [D]ivorciado ou [V]iuvo.")

        estado_civil = input("Digite seu estádo civil: [C]asado, [S]oldeiro, [D]ivorciado, [V]iuvo: ")
        continue

    break
print(f"Olá {nome}, sua idade é {idade}, seu sexo é {sexo}, seu estado civil é {estado_civil}")