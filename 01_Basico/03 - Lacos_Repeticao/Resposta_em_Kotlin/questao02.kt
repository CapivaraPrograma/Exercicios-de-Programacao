fun main(){
    while(true){
        val nomeUsuario = "Paulo"
        val senhaUsuario = "123"
        if(nomeUsuario != senhaUsuario){
            println("O usuário e a senha são válidos")
            break
        }else{
            println("Usuário e senha invalidos")
        }
    }
}