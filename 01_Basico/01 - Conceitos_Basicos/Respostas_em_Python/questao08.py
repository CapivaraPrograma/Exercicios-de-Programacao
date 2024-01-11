Vf = float(input('Qual o valor final que você deseja obter:  '))
i = float(input('Qual vai ser a rentabilidade: '))
i = i / 100
meses = int(input('Quantos meses? '))
vi = Vf / (i+1)**meses
print('Valor inicial {:.2f}'.format(vi))