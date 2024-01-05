fun main(){
    val deseja_sacar = 100
    var valor_saque = deseja_sacar
    
    if (valor_saque > 100){
        print("Esse valor não é permitido")
    }else{
    val nota_cem: Int = (valor_saque / 100)
    valor_saque = valor_saque - (nota_cem * 100)
    val nota_cinquenta: Int = (valor_saque / 50)
    valor_saque = valor_saque - (nota_cinquenta * 50)
    val nota_dez: Int = (valor_saque / 10)
    valor_saque = valor_saque - (nota_dez * 10)
    val nota_cinco: Int = (valor_saque / 5)
    valor_saque = valor_saque - (nota_cinco * 5)
    val moeda_um = valor_saque
    
    print("Para sacar  R$ $deseja_sacar, você recebera:\n$nota_cem nota(s) de cem $nota_cinquenta nota(s) de cinquenta, ")
    print("$nota_dez nota(s) de dez, $nota_cinco nota(s) de cinco e $moeda_um moeda(s) de um real.")
    }
}