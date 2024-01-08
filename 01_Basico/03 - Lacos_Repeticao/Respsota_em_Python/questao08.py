maior = -1000
menor = 1000
while True:
    valor = input("\nSe deseja parar digite 'parar'\nDigite um número entre 0 e 1000: ")
    
    if (valor == "parar"):

        break
    else:
        numero = int(valor)
        if (numero > maior):
            maior = numero
        else:
            if (numero < menor):
                menor = numero
            
print(f"O maior número é {maior} e o menor número é {menor}")