let numero = parseInt(prompt("Digite um número inteiro para verificar se é primo: "));
var count = 0
if (numero <= 1) {
    console.log(`O número ${numero} não é primo`);
} else {
    for (let i = 2; i <= Math.floor(Math.sqrt(numero)); i++) {
        if (numero % i == 0) {
            count++
            console.log(`O número ${numero} não é primo, ele é divisível por: `, end=" ");
            for (let j = 1; j <= numero; j++) {
                if (numero % j == 0) {
                    console.log(`${j}`, end=",");
                }
            }
            break;
        }
    }
    if (count == 0 ) {
        console.log(`O número ${numero} é primo`);
    }
}
