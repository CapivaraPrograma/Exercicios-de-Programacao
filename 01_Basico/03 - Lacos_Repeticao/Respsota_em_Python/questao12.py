produto_num = 1
total = 0

while True:
    print("**" * 20)
    print("Para encerrar essa compra digite 0")
    produto = float(input(f"Digite o valor do produto {produto_num}: "))
    produto_num += 1
    total += produto
    if produto == 0:
        print(f"Sua conta é: {total}")
        dinheiro = float(input("Insira o valor em dinheiro: "))
        troco = dinheiro - total
        print("**" * 20)
        print("Nota Fiscal")
        print(
            f"Total:            R${total}\n"
            f"Dinheiro:         R${dinheiro}\n"
            f"Troco:            R${troco}")
        encerrar = input("Deseja fechar o caixa ? S/N: ")
        produto_num = 1
        total = 0
        if encerrar[0].lower() == "s":
            break