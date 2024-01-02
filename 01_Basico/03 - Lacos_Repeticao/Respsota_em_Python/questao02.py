while True:
    nome_usuario = input("Digite o nome do usuário: ")
    senha_usuario = input("Digite a senha do usuário: ")
    if nome_usuario != senha_usuario:
        print("A senha e o usuário são válidos.")
        break
    else:
        print("Senha e usuário inválidos.")