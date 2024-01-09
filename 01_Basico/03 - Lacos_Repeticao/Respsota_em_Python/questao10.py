qtd_pessoa = int(input("Quantas pessoas tem na turma: "))
soma_idades = 0
pessoa = 1
for i in range(1,qtd_pessoa + 1):
    idade = int(input(f"Digite a idade da {pessoa}º pessoa: "))
    soma_idades += idade
    pessoa += 1

media = soma_idades / qtd_pessoa
if media >=0 and media <= 25:
    turma = "jovem"
elif media > 25 and media <= 60:
    turma = "adulta"
else:
    turma = "idosa"

print(f"A media de idade é {media}, por tanto a turma é {turma}")