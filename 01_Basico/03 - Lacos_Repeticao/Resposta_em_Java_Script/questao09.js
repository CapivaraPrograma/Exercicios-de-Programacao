const numero = parseInt(prompt("Digite um número inteiro para verificar se é primo: "));
if (numero <= 1) {
    console.log(`O número ${numero} não é primo`);
} else {
    for (let i = 2; i <= Math.floor(Math.sqrt(numero)); i++) {
        if (numero % i === 0) {
            let divisores = "";
            for (let j = 1; j <= Math.floor(Math.sqrt(numero)); j++) {
                if (numero % j === 0) {
                    divisores += `${j}, `;
                }
            }
            console.log(`O número ${numero} não é primo, ele é divisível por: ${divisores}`);
            return;
        }
    }
    console.log(`O número ${numero} é primo`);
}
