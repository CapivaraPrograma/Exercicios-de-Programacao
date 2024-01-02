preco_original = float(input("Digite o valor do preço do produto"))
porcentagem_desconto = 20
desconto = (preco_original * porcentagem_desconto) / 100
print(f"Valor original:             R${preco_original}")
print(f"Desconto ganho:             R${desconto}")
print(f"O Valor comm desconto é:    R$ {preco_original - desconto}")