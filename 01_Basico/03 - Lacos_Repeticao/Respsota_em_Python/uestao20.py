while True:
    print(f"Especificação        Código       Preço\n"
        f"Cachorro Quente        100       R$ 1,20\n"
        f"Bauru Simples          101       R$ 1,30\n"
        f"Bauru com ovo          102       R$ 1,50\n"
        f"Hambúrguer             103       R$ 1,20\n"
        f"Cheeseburguer          104       R$ 1,30\n"
        f"Refrigerante           105       R$ 1,00\n")

    pedido_cliente = int(input("Digite o código do produto desejado: "))
    if pedido_cliente == 100:
        pedido = "Cachorro Quente"
        qtd_pedido = int(input(f"Quantos {pedido} você deseja: "))
        valor = 1.20 * qtd_pedido
    elif pedido_cliente == 101:
        pedido = "Bauru Simples"
        qtd_pedido = int(input(f"Quantos {pedido} você deseja: "))
        valor = 1.30 * qtd_pedido
    elif pedido_cliente == 102:
        pedido = "Bauru com ovo"
        qtd_pedido = int(input(f"Quantos {pedido} você deseja: "))
        valor = 1.50 * qtd_pedido
    elif pedido_cliente == 103:
        pedido = "Hambúrguer"
        qtd_pedido = int(input(f"Quantos {pedido} você deseja: "))
        valor = 1.20 * qtd_pedido
    elif pedido_cliente == 104:
        pedido = "Cheeseburguer"
        qtd_pedido = int(input(f"Quantos {pedido} você deseja: "))
        valor = 1.30 * qtd_pedido
    elif pedido_cliente == 105:
        pedido = "Refrigerante"
        qtd_pedido = int(input(f"Quantos {pedido} você deseja: "))
        valor = 1.00 * qtd_pedido
    break
        
print(f"Você pediu {pedido}, a quantidade é {qtd_pedido} o valor é {valor * qtd_pedido}")