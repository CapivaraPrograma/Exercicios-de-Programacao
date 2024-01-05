    const deseja_sacar = parseFloat(prompt("Valor desejado de saque: [10 - 600]: "));
    let valor_saque = deseja_sacar;

    if (valor_saque < 10 || valor_saque > 600) {
        console.log("Esse valor não é permitido");
    } else {
        const nota_cem = Math.floor(valor_saque / 100);
        valor_saque -= nota_cem * 100;
        const nota_cinquenta = Math.floor(valor_saque / 50);
        valor_saque -= nota_cinquenta * 50;
        const nota_dez = Math.floor(valor_saque / 10);
        valor_saque -= nota_dez * 10;
        const nota_cinco = Math.floor(valor_saque / 5);
        valor_saque -= nota_cinco * 5;
        const moeda_um = valor_saque;

        console.log(`Para sacar R$ ${deseja_sacar}, você receberá ${nota_cem} nota(s) de cem, ${nota_cinquenta} nota(s) de cinquenta, ${nota_dez} nota(s) de dez, ${nota_cinco} nota(s) de cinco e ${moeda_um} moeda(s) de um real.`);
    }