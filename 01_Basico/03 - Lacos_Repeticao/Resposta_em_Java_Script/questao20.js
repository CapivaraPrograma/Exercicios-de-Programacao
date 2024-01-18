while (true) {
        console.log("Especificação        Código       Preço\n")
        console.log("Cachorro Quente        100       R$ 1,20\n")
        console.log("Bauru Simples          101       R$ 1,30\n")
        console.log("Bauru com ovo          102       R$ 1,50\n")
        console.log("Hambúrguer             103       R$ 1,20\n")
        console.log("Cheeseburguer          104       R$ 1,30\n")
        console.log("Refrigerante           105       R$ 1,00\n")

        var pedido_cliente = parseInt(prompt(("Digite o código dosejado: ")))
        var qtd_pedido = 0
        var valor = 0.0
        if (pedido_cliente == 100) {
            pedido = "Cachorro Quente"
            qtd_pedido = parseInt(prompt(`Quantos ${pedido} você deseja: `))   
            valor = 1.20 * qtd_pedido
        }else if (pedido_cliente == 101) {
            pedido = "Bauru Simples"
            qtd_pedido = parseInt(prompt((`Quantos ${pedido} você deseja: `)))
            valor = 1.30 * qtd_pedido
        }else if (pedido_cliente == 102) {
            pedido = "Bauru com ovo"
            qtd_pedido = parseInt(prompt((`Quantos ${pedido} você deseja: `)))
            valor = 1.20 * qtd_pedido
        }else if (pedido_cliente == 104) {
            pedido = "Cheeseburguer"
            qtd_pedido = parseInt(prompt((`Quantos ${pedido} você deseja: `)))
            valor = 1.30 * qtd_pedido
        }else if (pedido_cliente == 105) {
            pedido = "Refrigerante"
            qtd_pedido = parseInt(prompt((`Quantos ${pedido} você deseja: `)))
            valor = 1.00 * qtd_pedido
        }
        console.log(`Você pediu ${pedido}, a quantidade é ${qtd_pedido} o valor é ${valor}`)
        break
}