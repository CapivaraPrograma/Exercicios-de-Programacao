while True:
    numero_tabuada = int(input("Digite o número para realizar sua tabuáda: "))
    numero_inicial = int(input("Digite o número pelo qual a tabuada vai começar: "))
    numero_final = int(input("Digite o número no qual a tabua vai encerrar: "))

    if numero_inicial > numero_final:
        print("Opção inválida, o número final deve ser maior que o inicial: ")
        continue
    else:
        for i in range(numero_inicial, numero_final + 1):
            print(f"A soma de {numero_tabuada} + {i} é: {numero_tabuada + i}")    