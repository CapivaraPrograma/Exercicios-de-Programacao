numero = parseInt(prompt("Digite um número entre 1 e 10 para ver sua tabuada: "))

if (numero > 0 && numero < 11) {
    console.log("Adição")
    for ( step = 1; step <11; step++) {
        var adi = numero + step
        console.log(`${numero} + ${step}: ${adi}`)
    }

    console.log("Subtração")
    for ( step = 1; step <11; step++) {
        var sub = numero - step
        console.log(`${numero} - ${step}: ${sub}`)
    }

    console.log("\nMultiplicação")
    for ( step = 1; step <11; step++) {
        var mult = numero * step
        console.log(`${numero} x ${step}: ${mult}`)
    }

    console.log("\nDivisão")
    for ( step = 1; step <11; step++) {
        var div = numero / step
        console.log(`${numero} / ${step}: ${div.toFixed(2)}`)
    }
}