fun main() {
    var nome = "nd" // Inicialização correta
    var idade = 0 // Inicialização correta
    var salario = 0.0 // Inicialização correta
    var sexo = "ind" // Inicialização correta
    var estado_civil = "ind" // Inicialização correta

    while (true) {
        if (nome.length < 3) {
            nome = "lucas"
            if (nome.length < 3) {
                println("Opção inválida, o nome deve ter mais de 3 dígitos")
                continue
            }
        }

        if (idade <= 0 || idade > 150) {
            println("Digite sua idade: ")
            idade = 22
            if (idade <= 0 || idade > 150) {
                println("Opção inválida, a idade deve ser maior que 0 e menor que 150.")
                continue
            }
        }

        if (salario <= 0) {
            println("Digite seu salário: ")
            salario = 200.0
            if (salario <= 0) {
                println("Opção inválida, o salário deve ser maior que 0")
                continue
            }
        }

        if (sexo[0].toUpperCase() != 'M' && sexo[0].toUpperCase() != 'F') {
            
            println("Digite seu sexo: [M]asculino ou [F]eminino: ")
            sexo = "Masculino"
            if (sexo[0] != 'M' && sexo[0] != 'F') {
                println("Opção inválida, o sexo deve ser Masculino ou Feminino.")
                continue
            }
        }

        if (!setOf('C', 'S', 'D', 'V').contains(estado_civil[0].uppercaseChar())) {
            println("Digite seu estado civil: [C]asado, [S]olteiro, [D]ivorciado, [V]iúvo: ")
            estado_civil = "solteiro"
            if (!setOf('C', 'S', 'D', 'V').contains(estado_civil[0].uppercaseChar())) {
                println("Opção inválida, o estado civil deve ser Casado, Solteiro, Divorciado ou Viúvo.")
                continue
            }
        }
        println("olá $nome, sua idade é $idade, seu salário é $salario, seu sexo é $sexo e você é $estado_civil")
		break
    }
}