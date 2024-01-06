// Variáveis Criadas:
var nome = ""; // Inicialização correta
var idade = 0; // Inicialização correta
var salario = 0; // Inicialização correta
var sexo = "ind"; // Inicialização correta
var estado_civil = "ind"; // Inicialização correta

while (true) {
    if (nome.length < 3) { // Corrigido: Verifica se o nome tem mais de 3 caracteres
        nome = prompt("Digite seu nome (O nome deve ter mais de 3 dígitos): ");
        if (nome.length < 3){
        console.log("Opção inválida, o nome deve ter mais de 3 dígitos");
        continue;
        }
    }

    if (idade <= 0 || idade > 150) {
        idade = parseInt(prompt("Digite sua idade: ")); // Corrigido: Usar parseInt para converter a entrada para um número inteiro
        if (idade <= 0 || idade > 150) {
            console.log("Opção inválida, a idade deve ser maior que 0 e menor que 150.");
            continue;
        }
    }

    if (salario <= 0) {
        salario = parseFloat(prompt("Digite seu salário: ")); // Corrigido: Usar parseFloat para converter a entrada para um número decimal
        if (salario <= 0) {
            console.log("Opção inválida, o salário deve ser maior que 0");
            continue;
        }
    }
        
    if (sexo[0].toUpperCase() !== "M" && sexo[0].toUpperCase() !== "F") { 
        // Corrigido: Usar toUpperCase() para comparar maiúsculas/minúsculas
        sexo = prompt("Digite seu sexo: [M]asculino ou [F]eminino: ");
        if (sexo[0].toUpperCase() !== "M" && sexo[0].toUpperCase() !== "F"){
        console.log("Opção inválida, o sexo deve ser Masculino ou Feminino.");
        continue;
        }
    }

    if (!["C", "S", "D", "V"].includes(estado_civil[0].toUpperCase())) { 
        // Corrigido: Verificar se o estado civil está em um conjunto válido
        estado_civil = prompt("Digite seu estado civil: [C]asado, [S]olteiro, [D]ivorciado, [V]iúvo: ");
        if (!["C", "S", "D", "V"].includes(estado_civil[0].toUpperCase())) {
        console.log("Opção inválida, o estado civil deve ser: Casado, Solteiro, Divorciado ou Viúvo.");
        continue;
        }
    }

    break; // Saímos do loop quando todas as informações são válidas
}

console.log(`Olá ${nome}, sua idade é ${idade}, seu sexo é ${sexo} e seu estado civil é ${estado_civil}.`);
