var pergunta1 = prompt("Você telefonou para a vítima? [S]im ou [N]ão: ");
var pergunta2 = prompt("Você esteve no local do crime? [S]im ou [N]ão: ");
var pergunta3 = prompt("Você mora perto da vítima? [S]im ou [N]ão: ");
var pergunta4 = prompt("Você devia para a vítima? [S]im ou [N]ão: ");
var pergunta5 = prompt("Você já trabalhou com a vítima? [S]im ou [N]ão: ");

let nivel_suspeito = 0;

if (pergunta1[0].toUpperCase() == "S"){
    nivel_suspeito += 1;
}
if (pergunta2[0].toUpperCase() == "S"){
    nivel_suspeito += 1;
}
if (pergunta3[0].toUpperCase() == "S"){
    nivel_suspeito += 1;
}
if (pergunta4[0].toUpperCase() == "S"){
    nivel_suspeito += 1;
}
if (pergunta5[0].toUpperCase() == "S"){
    nivel_suspeito += 1;
}

switch(nivel_suspeito){
    case 2:
        console.log("Suspeito");
        break;
    case 3:
    case 4:
        console.log("Cúmplice");
        break;
    case 5:
        console.log("Assassino");
        break;
    default:
        console.log("Inocente");
}
