import java.util.Scanner; // Importa a classe Scanner da biblioteca java.util para ler a entrada do usuário

public class PerguntarNome { // Declaração da classe principal do programa

    public static void main(String[] args) { // Método principal onde a execução do programa começa
        Scanner scanner = new Scanner(System.in); // Cria um objeto Scanner para ler a entrada do usuário
        
        System.out.print("Qual é o seu nome? "); // Exibe uma mensagem pedindo o nome do usuário
        String nome = scanner.nextLine(); // Lê a linha digitada pelo usuário e armazena na variável 'nome'
        
        System.out.println("Olá, " + nome + ". Seja bem-vindo!"); // Exibe uma mensagem de boas-vindas usando o nome fornecido
        
        scanner.close(); // Fecha o objeto Scanner para liberar os recursos
    }
}
