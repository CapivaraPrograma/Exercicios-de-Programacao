km_por_litro = float(input("Km por litro: "))
valor_do_litro = float(input("Valor litro: "))
qtd_dinheiro = float(input("Valor disponivel em R$: "))
qtd_litros_comprada = qtd_dinheiro / valor_do_litro
distancia_maxima = qtd_litros_comprada * km_por_litro
print(f"Pelo valor de R$ {qtd_dinheiro} é possível comprar {qtd_litros_comprada} L. O carro pode percorrer: {distancia_maxima} km")