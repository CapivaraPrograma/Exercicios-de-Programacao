# Modulo Básico - Controle de Seleção

 1 - Questão: Crie um programa que peça dois números ao usuário.Em seguida, você vai mostrar a soma, subtração, multiplicação, divisão, exponenciação e resto da divisão do primeiro número pelo segundo.
 
 2 - Questão: Faça um programa que pergunte ao usuário quanto de dinheiro ele tem e em seguida diga quantos litros de combustível ele pode comprar e quantos kilometros o carro consegue andar com este tanto de combustível.

 3 - Questão: Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar: *A mensagem **"Aprovado"**, se a média alcançada for maior ou igual a sete, ou a mensagem **"Reprovado"**, se a média for menor do que sete.*

 4 - Questão: Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem *"Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!"*, conforme o caso.

 5 - Questão: Faça um Programa que leia três números e mostre-os em ordem decrescente.

 6 - Questão: Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
   
    salários até R$ 280,00 (incluindo)    : aumento de 20%
    salários entre R$ 280,00 e R$ 700,00  : aumento de 15%
    salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
    salários de R$ 1500,00 em diante      : aumento de 5%

7 - Questão: Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

    Desconto do IR:
    Salário Bruto até 900 (inclusive) - isento
    Salário Bruto até 1500 (inclusive) - desconto de 5%
    Salário Bruto até 2500 (inclusive) - desconto de 10%
    Salário Bruto acima de 2500 - desconto de 20% 
    
   Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.
  
    Salário Bruto: (5 * 220)        : R$ 1100,00
    (-) IR (5%)                     : R$   55,00 
    (-) INSS ( 10%)                 : R$  110,00
    FGTS (11%)                      : R$  121,00
    Total de descontos              : R$  165,00
    Salário Liquido                 : R$  935,00

8 - Questão: Faça um programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. *As notas disponíveis serão as de **1, 5, 10, 50 e 100 reais**. O valor **mínimo é de 10 reais** e o **máximo de 600 reais***. O programa não deve se preocupar com a quantidade de notas existentes na máquina.

    Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
    Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.

9 - Questão: Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    
    "Telefonou para a vítima? [S]im ou [N]ão"
    "Esteve no local do crime? [S]im ou [N]ão"
    "Mora perto da vítima? [S]im ou [N]ão"
    "Devia para a vítima? [S]im ou [N]ão"
    "Já trabalhou com a vítima? [S]im ou [N]ão"
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. * Se a pessoa responder positivamente a 2º questões ela deve ser classificada como **"Suspeita"**, entre 3º e 4º como **"Cúmplice"** e 5º como **"Assassino"**. Caso contrário, ele será classificado como "Inocente" *.

10 - Questão: Um posto está vendendo diversos produtos com a seguinte tabela de preços:
    
    Alimentos          1 Unidade         Acima de 5 Unidades
    Banana          R$ 2,50 por Kg         R$ 2,20 por Kg
    Maçã            R$ 1,80 por Kg         R$ 1,50 por Kg
    Melancia        R$ 3,00 por kg         R$ 2,70 por kg
    
    Combústivel     Até 20 litros        Acima de 20 litros     
    Álcool:         R$ 1,90                desconto de 3%
    Gasolina:       R$ 2,50                desconto de 5%
    
    Se a compra for feita no cartão do posto o cliente receberá ainda um desconto de 5% sobre o total a compra.
   
Levando em consideração que cada cliente poderá levar *apenas um dos tipos de de cada produto*, porém não há limites para a quantidade de cada produto por cliente. Escreva um algoritmo que leia: *a quantidade e tipo de cada produto (codificado da seguinte forma: X-xproduto, Y-yproduto), o número de alimentos e litros vendidos, calcule o valor a ser pago pelo cliente e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de produtos comprados, preço total, tipo de pagamento, valor do desconto e valor a pagar*. 
