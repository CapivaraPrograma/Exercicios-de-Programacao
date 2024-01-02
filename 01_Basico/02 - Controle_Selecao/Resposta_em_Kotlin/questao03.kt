fun main () {
 fun resultadoAluno(nota1: Int, nota2: Int): String{
    var media_notas = (nota1 + nota2) / 2
    var final = if(media_notas >= 7) "aprovado" else "reprovado"
    return final
 }
 println(resultadoAluno(7,6))
}