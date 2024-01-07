var numero = 9
var ultimo = 1
var penultimo = 1

if (numero == 1 || numero == 2){
    console.log("1")
}else{
    var count=3
    while (count <= numero){
        console.log(`Você está no termo: ${count}`)
        var termo = ultimo + penultimo
        penultimo = ultimo
        ultimo = termo
        count += 1
        console.log(termo)
    }
}