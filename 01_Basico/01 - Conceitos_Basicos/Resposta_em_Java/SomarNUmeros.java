import java.util.Scanner; // Importa a classe Scanner da biblioteca java.util para ler a entrada do usuário

public class SomarNUmeros {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // Cria um objeto Scanner para ler a entrada do usuário
        
        System.out.print("Digite um número: "); // Exibe uma mensagem pedindo o um número
        int numero1 = scanner.nextInt(); // Lê a linha digitada pelo usuário e armazena na variável como int
        System.out.print("Digite outro número: "); // Exibe uma mensagem pedindo um número
        int numero2 = scanner.nextInt(); // Lê a linha digitada pelo usuário e armazena na variável como int
        int soma = numero1 + numero2; // Realiza a soma dos 2 números
        System.out.println("A soma de: " + numero1 + " e " + numero2 + " é soma: " + soma); // Exibe uma mensagem de boas-vindas usando o nome fornecido
        
        scanner.close(); // Fecha o objeto Scanner para liberar os recursos
    }
}