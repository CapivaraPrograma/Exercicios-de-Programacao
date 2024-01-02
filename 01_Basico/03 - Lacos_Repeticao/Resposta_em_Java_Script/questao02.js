while(true){
    let nomeDoUsuario = prompt("Digite o nome de usuário: ")
    let senhaDoUsuario = prompt("Digite a senha do usuário")
    if (nomeDoUsuario != senhaDoUsuario){
        console.log("O usuário e a senha são válidos")
        break
    }else{
        console.log("Usuário e senha não podem ser iguais: ")
    }
}