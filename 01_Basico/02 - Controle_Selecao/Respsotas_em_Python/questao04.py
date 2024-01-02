horario = input("Em quam horário você estuda ?\n[M]- matutino\n[V] - vespertino\n[N] - noturno")
# Em pytohn não temos o comando switchcase, porém da para resolver com if 
if horario[0].upper() == "M":
    print("Bom dia")
elif horario[0].upper() == "V":
    print("Bom tarde")
elif horario[0].upper() == "N":
    print("Boa noite")
else:
    print("Opção inválida")
