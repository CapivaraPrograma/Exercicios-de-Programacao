fun main(){
    println("Primeira versão em for range: ")
    for (numero in 1..50 step 2)
    println(numero)
    
    println("Segunda versão em while: ")
    var contador = 1
    while (contador < 50){
        println(contador)
        contador += 2
    }
}