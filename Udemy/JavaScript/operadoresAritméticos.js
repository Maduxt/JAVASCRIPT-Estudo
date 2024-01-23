//Operadores Aritméticos, de atribuição e incremento

/* Aritméticos: 
+ faz adição e concatenação
- subtração
/ divisão
* multiplicação 
** potenciação
% resto da divisão
É executado na seguinte ordem: (), **, *, /, %, + e -.
*/

/*
Incremento ++
Decremento --
*/

/*
parseInt faz a conversão de números inteiros
parseFloat faz a conversão de números com decimais
number você indica que é um número
Infinity é quando faz um número divido por 0
*/

let num1 = 5;
const num2 = 10;
console.log (num1++ * num2);

let contador = 3;
contador +=2;
contador *=2;
console.log (contador);

//função Math

let numero1 = 9;
// let numero2 = Math.floor (numero1); arredonda pra cima
// let numero2 = Math.ceil (numero1); //arredonda pra baixo
// let numero2 = Math.round (numero1); //arredonda para o mais próximo
// console.log (Math.max (1,2,3,56,74,124,564,355)); mostra o maior numero e min mostra o menor.
console.log (Math.random () * (10 - 5) + 5); //mostra números aleatórios entre 10 e 5.

//raiz quadrada =
console.log (numero1 ** 0.5); // o numero elevado ** a 0.5 mostra a raiz quadrada.