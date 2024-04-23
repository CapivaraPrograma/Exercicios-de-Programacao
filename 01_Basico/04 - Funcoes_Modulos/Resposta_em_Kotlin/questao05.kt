fun converter_para_farenheit(valor_celsius: Double): Double {
    var saida_farenheit = valor_celsius * 1.8 + 32
    return saida_farenheit
}

fun converter_para_celsius(valor_farenheit: Double): Double {
    var saida_celsius = (valor_farenheit - 32) / 1.8
    return saida_celsius
}

fun opcao_media(tipo_media: String, temperatura: Double): String {
    if (tipo_media[0].uppercaseChar() == 'C') {
        return "O valor da medida convertido de °F para °C é ${converter_para_celsius(temperatura)}"
    }
    return "O valor da medida convertido de °C para °F é ${converter_para_farenheit(temperatura)}"
}

    
fun main() {   
println("A unidade de medida está em Celsius(°C) ou Farenheit(°F):")
var medida_escolhida = readLine()!!
println("Digite o valor da temperatura: ")
var valor_temperatura = readLine()!!.toDouble()

print(opcao_media(medida_escolhida, valor_temperatura))
}