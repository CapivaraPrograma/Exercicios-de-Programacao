while True:
    nome = input("Digite seu nome: ")
    idade = int(input("Digite sua idade: "))
    salario = float(input("Digite seu salário: "))
    sexo = input("Digite seu sexo: [M]asculino ou [F]eminino: ")
    estado_civil = input("Digite seu estádo civil: [C]asado, [S]oldeiro, [D]ivorciado, [V]iuvo: ")
    
    valido_nome = len(nome) > 3
    valido_idade = idade > 0 and idade < 150
    valido_salario = salario > 0
    valido_sexo = sexo[0].upper() =="M" or sexo[0].upper() == "F"
    valido_estado_civil =   estado_civil[0].upper() == "C" or estado_civil[0].upper() == "S" or \
                            estado_civil[0].upper() == "D" or estado_civil[0].upper() == "V"
    
    if valido_nome and  valido_idade and valido_salario and valido_sexo and valido_estado_civil:
        print("Tudo certo")
        break
    else:
        print("Opção inválida")