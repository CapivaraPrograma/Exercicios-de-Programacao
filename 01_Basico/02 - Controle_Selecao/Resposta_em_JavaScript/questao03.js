function resultadoAluno (nota1, nota2){
    let media_notas = (nota1 + nota2) / 2
    final = media_notas >= 7 ? "aprovado" : "reprovado"
    return final
}
console.log(resultadoAluno(5,5))