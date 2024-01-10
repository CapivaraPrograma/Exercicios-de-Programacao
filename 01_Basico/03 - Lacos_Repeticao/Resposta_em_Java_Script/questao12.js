let valor = 0;

while (true) {
    console.log("*".repeat(40));
    console.log("Para encerrar a compra digite 0");
    console.log("*".repeat(40));
    let produto = parseInt(prompt(`Digite o valor do produto ${valor + 1}: `));
    valor += produto;

    if (produto == 0) {
        console.log(`O valor total é:       R$${valor}`);
        let pagamento = parseFloat(prompt("Digite o valor que deseja pagar: "));
        let troco = pagamento - valor;
        console.log("*".repeat(40));
        console.log("Nota fiscal");
        console.log(`Total da Compra:       R$${valor}`);
        console.log(`Valor do pagamento:    R$${pagamento}`);
        console.log(`Troco:                 R$${troco}`);

        let fecharCaixa = prompt("Deseja fechar o caixa? S/N: ");
        if (fecharCaixa[0].toUpperCase() == "S") {
            break;
        }
        valor = 0;
    }
}
