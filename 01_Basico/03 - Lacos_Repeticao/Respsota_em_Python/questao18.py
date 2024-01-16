valor_divida = float(input("Digite o valor da dívida: "))
valor_crescimento = 0
parcela = 0
print("Valor da Dívida      Valor dos Juros         Quantidade de Parcelas        Valor da Parcela")

for i in range(0,13 , 3):
    if i == 0:
        divida = valor_divida
        parcela = i + 1
        juros = 0
        valor_parcela = valor_divida
    else:
        juros = valor_divida * (10 + 5 * valor_crescimento) / 100
        parcela = i
        divida = valor_divida + juros
        valor_crescimento += 1
        valor_parcela = divida / parcela

    
    print(f"    R$ {divida:.2f}                R$ {juros:>6.2f}                  {parcela:<2}                   R${valor_parcela:.2f}")

    
    