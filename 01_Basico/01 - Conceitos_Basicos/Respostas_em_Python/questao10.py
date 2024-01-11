import math
tamanho_metros = float(input("Digite o tamanho em metros quadrados: "))
valorLata = 80.0
quantidadeLitros = tamanho_metros  / 3
latas = quantidadeLitros / 18.0
valor = math.ceil(latas) * 80
print(f"A quantidade usada sera de:    {latas:.2f} latas")
print(f"Você vai precisar comprar:     {math.ceil(latas)} latas")
print(f"O valor gasto sera:            R${valor} reais")
