// Em kotlin: Utilizamos a função sorted, e depois a reverse para deixar em ordem decrescente e to para criar uma copia da lista, sem alterar a lista original
fun main(){
val numero1 = 50
val numero2 = 80
val numero3 = 60
val teste = mutableListOf<Int>(numero1, numero2, numero3)
var numeros = teste.toMutableList()
println(numeros.sorted().reversed())
print(teste)
}

// Outra forma com Controle de seleção:
fun main(){
   val nota1 = 10
   val nota2 = 4
   val nota3 = 2
   var maior = nota1
   var meio =  nota1
   var menor = nota1
    
  if (maior < nota2){
      maior = nota2
  }else{
      meio = nota2
      menor = nota2
  }
  if (maior < nota3){
      meio = maior
      maior = nota3
  }
  if (maior > nota3 && meio < nota3){
      meio = nota3
  }
  if (meio > nota3){
      menor = nota3
  }
  println("A maior nota é $maior, a nota do meio é $meio, a menor nota é $menor")   
}