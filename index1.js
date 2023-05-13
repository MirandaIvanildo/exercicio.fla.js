//1 Primeiro Exercicio, Hora de codar:   Escreva um programa em
// que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.


//var numero1 = prompt("Digite o primeiro número:");
//var numero2 = prompt("Digite o segundo número:");


//numero1 = parseFloat(numero1);
//numero2 = parseFloat(numero2);


//if (numero1 > numero2) {
  //  alert("O maior número é: " + numero1);
//} else if (numero2 > numero1) {
  //  alert("O maior número é: " + numero2);
//} else {
  //  alert("Os números são iguais!");
//}






// Segundo Exercicio, hora de codar:  
//Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero

//let valor = parseFloat(prompt("Digite um valor:"));
//if (valor > 0) {
  //console.log("O valor informado é positivo.");
//} else if (valor < 0) {
  //console.log("O valor informado é negativo.");
//} else {
  //console.log("O valor informado é zero.");
//}






// Terceiro exercicio, hora de codar:
//Faça um programa para ler 3 
//valores (considere que não serão informados valores iguais) e escrever o maior deles.

//let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
//let valor2 = parseFloat(prompt("Digite o segundo valor:"));
//let valor3 = parseFloat(prompt("Digite o terceiro valor:"));

//let maior = valor1;

//if (valor2 > maior) {
  //maior = valor2;
//}

//if (valor3 > maior) {
  //maior = valor3;
//}

//console.log("O maior valor é: " + maior);







// Quarto exercicio hora de codar:
//Faça um programa que leia 6 valores informados pelo usuário, calcule, 
//exiba os números informados e escreva a média aritmética desses valores lidos.

//let valores = [];
//let soma = 0;

//for (let i = 1; i <= 6; i++) {
  //let valor = parseFloat(prompt("Digite o valor " + i + ":"));
  //valores.push(valor);
  //soma += valor;
//}

//let media = soma / valores.length;

//console.log("Valores informados: " + valores.join(", "));
//console.log("Média aritmética: " + media.toFixed(2));







// Exercicio 6 
// Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, 
//o último e o maior de todos eles (considere que todos os números informados serão diferentes)

//let valores = [];

//for (let i = 1; i <= 4; i++) {
  //let valor = parseFloat(prompt("Digite o valor " + i + ":"));
  //valores.push(valor);
//}

//let primeiroValor = valores[0];
//let ultimoValor = valores[valores.length - 1];
//let maiorValor = Math.max(...valores);

//console.log("Primeiro valor: " + primeiroValor);
//console.log("Último valor: " + ultimoValor);
//console.log("Maior valor: " + maiorValor);






// Exercicio 6:
//Escreva um programa que calcule a média de quatro números informados pelo usuário, 
//mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário 
//receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente


//let numeros = [];
//let soma = 0;

//for (let i = 1; i <= 4; i++) {
  //let numero = parseFloat(prompt("Digite o número " + i + ":"));

  //if (numero > 0 && numero < 10) {
    //numeros.push(numero);
    //soma += numero;
  //} else {
    //console.log("Número inválido. Tente novamente.");
    //break;
  //}
//}

//if (numeros.length === 4) {
  //let media = soma / numeros.length;

  //if (media > 5) {
    //console.log("Você passou no teste!");
  //} else {
    //console.log("Tente novamente.");
  //}
//}










// Exercicio 9
//Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem
// que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

//let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
//let anoAtual = new Date().getFullYear();
//let idade = anoAtual - anoNascimento;

//if (idade >= 16) {
  //console.log("Você poderá votar este ano.");
//} else {
  //console.log("Você não poderá votar este ano.");
//}







// Exercicio 10 hora de codar
// Tendo como entrada a altura e o sexo (codificado da
// seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que 
//calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:


//let altura = parseFloat(prompt("Digite a altura (em metros):"));
//let sexo = parseInt(prompt("Digite o sexo (1 para feminino, 2 para masculino):"));

//let pesoIdeal;

//if (sexo === 1) { // Feminino
  //pesoIdeal = (altura - 100) * 0.85;
//} else if (sexo === 2) { // Masculino
  //pesoIdeal = (altura - 100) * 0.9;
//} else {
  //console.log("Opção de sexo inválida.");
//}

//if (pesoIdeal) {
  //console.log("O peso ideal é: " + pesoIdeal.toFixed(2) + " kg.");
//}






let valor1 = parseInt(prompt("Digite o primeiro valor:"));
let valor2 = parseInt(prompt("Digite o segundo valor:"));
let operacao = parseInt(prompt("Selecione a operação:\n1. Adição\n2. Subtração\n3. Divisão\n4. Multiplicação"));

let resultado;

if (operacao === 1) {
  resultado = valor1 + valor2;
} else if (operacao === 2) {
  resultado = valor1 - valor2;
} else if (operacao === 3) {
  resultado = valor1 / valor2;
} else if (operacao === 4) {
  resultado = valor1 * valor2;
} else {
  console.log("Operação inválida.");
}

if (resultado !== undefined) {
  console.log("O resultado da operação é: " + resultado);
}



