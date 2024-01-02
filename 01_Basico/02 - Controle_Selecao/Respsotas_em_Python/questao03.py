def resultado_aluno(nota1, nota2):
    media_notas = (nota1 + nota2) / 2
    final = "aprovado" if (media_notas >= 7) else "reprovado"
    return final

print(resultado_aluno(9,9))