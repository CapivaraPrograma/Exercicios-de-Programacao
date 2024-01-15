salario_inicial = float(input("Digite o salário inicial: "))
tempo_servico = int(input("Digite o tempo de serviço (em anos): "))

aumento_percentual = 1.5
aumento_absoluto = salario_inicial * aumento_percentual / 100
salario_atual = salario_inicial + aumento_absoluto

for i in range(2, tempo_servico + 1):
    aumento_percentual *= 2
    aumento_absoluto = salario_atual * aumento_percentual / 100
    salario_atual += aumento_absoluto

print(f"O salário atual do funcionário é R$ {salario_atual:.2f}")
    