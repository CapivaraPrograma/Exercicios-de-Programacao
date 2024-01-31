def converter_para_farenheit(valor_celsius):
    saida_farenheit = valor_celsius * 1.8 + 32
    return saida_farenheit

def converter_para_celsius(valor_farenheit):
    saida_celsius = (valor_farenheit - 32) / 1.8
    return saida_celsius

def opcao_media(tipo_media):
    unidade_atual = "Farenheit(°F)"
    if tipo_media[0].upper() == "C":
        return converter_para_celsius(valor_temperatura)
    
    return converter_para_farenheit(valor_temperatura)
    
    
    
medida_escolhida = input("A unidade de medida está em Celsius(°C) ou Farenheit(°F):")
valor_temperatura = float(input("Digite o valor da temperatura: "))
print(f"O valor da medida convertido é: {opcao_media(medida_escolhida)}")