let valor_divida = parseFloat(prompt("Digite o valor da dívida: "))
let valor_crescimento = 0
let parcela = 0
let divida = valor_divida
console.log("Valor da Dívida      Valor dos Juros         Quantidade de Parcelas        Valor da Parcela")

for (i = 0; i < 13; i += 3){
    if (i == 0) {
        parcela = i + 1
        var juros = 0
        var valor_parcela = valor_divida
    }else{
        juros = divida * (10 + 5 * valor_crescimento) / 100
        parcela = i
        divida += juros
        valor_crescimento += 1
        valor_parcela = divida / parcela
    }
    console.log(`R$ ${divida.toFixed(2).padEnd(20)}\t\$ ${juros.toFixed(2).padEnd(20)}\t\t${parcela.toString().padEnd(20)}R$ ${valor_parcela.toFixed(2).padEnd(20)}`)
}