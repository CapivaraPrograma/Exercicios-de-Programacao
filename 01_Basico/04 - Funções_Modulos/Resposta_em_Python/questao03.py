# Forma 01, forma simples e feita na mão
def verificar_frase(frase, letra):
    contador = 0
    for i in frase:
        if letra == i:
            contador += 1
    return f"A letra '{letra}' aparece na frase '{frase}', um total de {contador}"

#Aqui estamos recebendo os valores de a e b que serão o posteriormente os valores dos parametros da função
a = input("Digite uma frase: ")
b = input("Digite uma letra: ")

#Aqui chamamos a função, perceba que os atributos dos parametros "frase" e "letra" são respectivamente "a" e "b"
primeiro_teste = verificar_frase(a, b)

print(primeiro_teste)
