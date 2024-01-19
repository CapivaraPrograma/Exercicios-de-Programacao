numero_alunos = 0
maior_nota = -10
menor_nota = 10
melhor_aluno = 0
pior_aluno = 0
total_pontos = 0
while(True):
    usuario = input("Para sair digite [S]air\nDigite o tipo de usuário [P]rofessor ou [A]luno:")
    aluno = "esperando"
    pontos = 0
    if usuario[0].upper() == "A":
        questao_1 = input("Digite qual a resposta da questão um: ")
        questao_2 = input("Digite qual a resposta da questão dois: ")
        questao_3 = input("Digite qual a resposta da questão três: ")
        questao_4 = input("Digite qual a resposta da questão quatro: ")
        questao_5 = input("Digite qual a resposta da questão cinco: ")
        questao_6 = input("Digite qual a resposta da questão seis: ")
        questao_7 = input("Digite qual a resposta da questão sete: ")
        questao_8 = input("Digite qual a resposta da questão oito: ")
        questao_9 = input("Digite qual a resposta da questão nove: ")
        questao_10 = input("Digite qual a resposta da questão dez: ")
        aluno = "notas recebidas"
        numero_alunos += 1  
    elif usuario[0].upper() == "P":
        gabarito_1 = input("Digite qual o gabarito da questão um: ")
        gabarito_2 = input("Digite qual o gabarito da questão dois: ")
        gabarito_3 = input("Digite qual o gabarito da questão três: ")
        gabarito_4 = input("Digite qual o gabarito da questão quatro: ")
        gabarito_5 = input("Digite qual o gabarito da questão cinco: ")
        gabarito_6 = input("Digite qual o gabarito da questão seis: ")
        gabarito_7 = input("Digite qual o gabarito da questão sete: ")
        gabarito_8 = input("Digite qual o gabarito da questão oito: ")
        gabarito_9 = input("Digite qual o gabarito da questão nove: ")
        gabarito_10 = input("Digite qual o gabarito da questão dez: ")
    elif usuario[0].upper() == "S":
        break
    
    if aluno == "notas recebidas":
        if questao_1 == gabarito_1:
            pontos += 1
        if questao_2 == gabarito_2:
            pontos += 1
        if questao_3 == gabarito_3:
            pontos += 1
        if questao_4 == gabarito_4:
            pontos += 1
        if questao_5 == gabarito_5:
            pontos += 1
        if questao_6 == gabarito_6:
            pontos += 1
        if questao_7 == gabarito_7:
            pontos += 1
        if questao_8 == gabarito_8:
            pontos += 1
        if questao_9 == gabarito_9:
            pontos += 1
        if questao_10 == gabarito_10:
            pontos += 1
        total_pontos += pontos
    
    media = total_pontos / 10 * numero_alunos
    if pontos > maior_nota:
        maior_nota = pontos
        melhor_aluno = numero_alunos
    elif pontos < menor_nota:
        menor_nota = pontos
        pior_aluno = numero_alunos

print(f"O maior acerto é {maior_nota} do aluno número {melhor_aluno}")
print(f"O menor acerto é {menor_nota} do aluno número {pior_aluno}")
print(f"O total de alunos é {numero_alunos}")
print(f"A media dos alunos na prova é de: {media}")

        
        