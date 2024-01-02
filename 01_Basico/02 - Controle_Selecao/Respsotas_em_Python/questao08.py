dia_atual = int(input("""Dia da Semana:
    1 - Domingo     5 - Quinta
    2 - Segunda     6 - Sexta
    3 - Terça       7 - Sábado 
    4 - Quarta
    """))

if dia_atual == 1:
    print("Dia: Domingo")
elif dia_atual == 2:
    print("Dia: Segunda")
elif dia_atual == 3:
    print("Dia: Terça")
elif dia_atual == 4:
    print("Dia: Quarta")
elif dia_atual == 5:
    print("Dia: Quinta")
elif dia_atual == 6:
    print("Dia: Sexta")
elif dia_atual == 7:
    print("Dia: Sábado")
else:
    print("Opção Inválida")