function converter_para_farenheit(valor_celsius) {
    saida_farenheit = valor_celsius * 1.8 + 32
    return saida_farenheit
}

function converter_para_celsius(valor_farenheit) {
    saida_celsius = (valor_farenheit - 32) / 1.8
    return saida_celsius
}

function opcao_media(tipo_media) {
    if (tipo_media[0].toUpperCase() == "C") {
        return `O valor da medida convertido de °F para °C é ${converter_para_celsius(valor_temperatura)}`
    }
    return `O valor da medida convertido de °C para °F é ${converter_para_farenheit(valor_temperatura)}`
}
    
    
    
medida_escolhida = prompt("A unidade de medida está em Celsius(°C) ou Farenheit(°F):")
valor_temperatura = parseFloat(prompt("Digite o valor da temperatura: "))

console.log(opcao_media(medida_escolhida))