# Variáveis Criadas
total_votos = 0
candidato_01 = 0
candidato_02 = 0
candidato_03 = 0
candidato_04 = 0
voto_nulo = 0
voto_branco = 0

while True:
    voto = input("Opções\n1 - Jose\n2 - João\n3 - Maria\n4 - Paula\n5 - Nulo\n6 - Branco\nEscolha uma opçaõ para votar: ")
    total_votos += 1

    if voto == "1":
        candidato_01 += 1
    elif voto == "2":
        candidato_02 += 1
    elif voto == "3":
        candidato_03 += 1
    elif voto == "4":
        candidato_04 += 1
    elif voto == "5":
        voto_nulo += 1
    elif voto == "6":
        voto_branco += 1
    
    encerar = input("Alguem ainda vai votar: [S]im ou [N]ão: ")
    if encerar[0].upper() == "N":
        break

porcenVN = voto_nulo * 100 / total_votos
porcenVB = voto_branco * 100 / total_votos

print(f"O candidato Jose (1): Recebeu {candidato_01} votos")
print(f"O candidato João (2): Recebeu {candidato_02} votos")
print(f"O candidato Maria (3): Recebeu {candidato_03} votos")
print(f"O candidato Paula (4): Recebeu {candidato_01} votos")
print(f"O total de votos nulos: {voto_nulo}")
print(f"O total de votos embranco: {voto_branco}")
print(f"A porcentagem de votos em nulos é: {porcenVN}%")
print(f"A porcentagem de votos em branco é: {porcenVB}%")
print(f"O total foi: {total_votos}")







        