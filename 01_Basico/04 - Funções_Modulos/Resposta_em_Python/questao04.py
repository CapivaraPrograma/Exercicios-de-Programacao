Desconto = 15
def exibir_caracteristicas_produto(preco_original):
    valor_desconto = preco_original * Desconto / 100
    preco_desconto = preco_original - valor_desconto
    return valor_desconto, preco_desconto


produto = float(input("Digite o valor do produto: "))
desconto_reais, preco_final = exibir_caracteristicas_produto(produto)

print(f"Preço original:     {produto}\n"
      f"Desconto em porcentagem:        {Desconto}%\n"
      f"Valor do desconto:              R$ {desconto_reais} reais\n"
      f"Preço com o desconto:           R$ {preco_final} reais")
