alert(2+3);
var a = 2;
var b = 3;
var c = a+b;
alert("Total da soma de a+b = " + c)

var nome;
nome = prompt("Qual seu Nome?")
alert("Olá, " + nome)

var nota1 = 8;
var nota2 = 7;
var media = (nota1+nota2)/2;
if(media >=7){
    alert("Aprovado");
}
else{
    alert("Reprovado");
}

var sair = confirm("Confirm ir para a página do Google Tradutor?");
if(sair == 1){
    window.location = "https://www.google.com/search?q=google+tradutor&oq=&aqs=chrome.2.69i59i450l8.355888283j0j15&sourceid=chrome&ie=UTF-8&safe=active&ssui=on";
}

var repete = 1;
while(repete <=3){
    alert("Mensagem: " + repete);
    repete = repete + 1;
}
var inicio = 2;
var fim = 100;
var todosPares = "Números Pares";
while(inicio <=fim){
    todosPares = todosPares + inicio + ";";
    inicio = inicio + 2;
}
alert(todosPares);