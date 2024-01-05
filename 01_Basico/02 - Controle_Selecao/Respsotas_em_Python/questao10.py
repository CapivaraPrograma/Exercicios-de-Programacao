opcao_compra = input("Quais produtos deseja comprar:\n 1 - Alimentos e Compuntível\n 2 - Apenas Alimentos\n 3 - Apenas Compuntível\nEscolha uma opção:")

if opcao_compra == "1" or "2":
    comprar_alimentos = input("Quais alimentos deseja comprar:\n 1 - Maçã\n 2 - Banana\n 3 - Melancia")
    if comprar_alimentos == "1":
        qtd_comprada = int(input("Quantas maçãs você quer comprar: "))
        if qtd_comprada < 5:
            valor_alimento = qtd_comprada * 2.50
        else:
            valor_alimento = qtd_comprada * 2.20
    if comprar_alimentos == "2":
        qtd_comprada = int(input("Quantas bananas você quer comprar: "))
        if qtd_comprada < 5:
            valor_alimento = qtd_comprada * 1.80
        else:
            valor_alimento = qtd_comprada * 1.50
    if comprar_alimentos == "3":
        qtd_comprada = int(input("Quantas melancias você quer comprar: "))
        if qtd_comprada < 5:
            valor_alimento = qtd_comprada * 3.0
        else:
            valor_alimento = qtd_comprada * 2.70

if opcao_compra == "1" or "2":
    comprar_combustível = input("Quail cumbustível deseja comprar:\n 1 - Álcool\n 2 - Gasolina")
    if comprar_combustível == "1":
        qtd_comprada_combustivel = int(input("Quantas litros de Álcool você quer comprar: "))
        if qtd_comprada_combustivel < 20:
            valor_cumbustivel = qtd_comprada_combustivel * 1,90
        else:
            valor_cumbustivel = (qtd_comprada_combustivel *1,90) - (qtd_comprada_combustivel *1,90 * 3) / 100 
    if comprar_combustível == "2":
        qtd_comprada_combustivel = int(input("Quantas litros de Gasolina você quer comprar: "))
        if qtd_comprada_combustivel < 5:
            valor_cumbustivel = qtd_comprada_combustivel * 3.50
        else:
            valor_cumbustivel = (qtd_comprada_combustivel * 3.50) - (qtd_comprada_combustivel * 3.50 * 3) / 100
            
soma_compra = valor_cumbustivel + valor_alimento
finalizar_compra = input("A compra foi feita no cartão do posto: S/N")

if finalizar_compra[0].lower() == "s":
    desconto = (soma_compra * 5) /100
    valor_final = soma_compra - desconto
else:
    valor_final = soma_compra
    
print("Tipo de produto comprado:", opcao_compra)
print("Quantidade de produtos comprados:", qtd_comprada)
print("Preço total dos alimentos: R$", valor_alimento)
print()
print("Tipo de combustível comprado:", opcao_compra)
print("Quantidade de combustível comprado:", qtd_comprada_combustivel, "litros")
print("Preço total do combustível: R$", valor_cumbustivel)
print()
print("Preço total da compra: R$", soma_compra)
print("Desconto de 5% (pagamento com cartão do posto): R$", desconto)
print()
print("Valor a ser pago pelo cliente: R$", valor_final)