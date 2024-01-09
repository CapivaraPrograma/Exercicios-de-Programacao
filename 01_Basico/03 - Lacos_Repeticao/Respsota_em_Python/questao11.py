qtd_quadrinhos = int(input("Quantos quadrinhos você possue ? "))
i = 1
total_gasto = 0
while i <= qtd_quadrinhos:
    valor_quadrinho = float(input(f"Digite o valor do {i}º quadrinho: "))
    total_gasto += valor_quadrinho
    i += 1

print(f"O valor total gasto em quadrinhos é de:      R${total_gasto}")