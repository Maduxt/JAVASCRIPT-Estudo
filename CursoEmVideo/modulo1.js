/*
window.alert('Olá, mundo!');
window.prompt('Qual é o seu nome?');
window.confirm('Você está gostando do curso?') 
*/

// = recebe / null = nulo

/* 
identificadores de variáveis:
- podem começar com letra, $ ou_, pode usar letras E números
- não podem começar com números, não podem ser palavras reservadas (function, var, etc), não pode usar espaços.
* podemos usar acentos e símbolos, mas isso NÃO É UMA BOA PRÁTICA. evite usar.
*/

/* 
maiúsculas e minúsculas importam e tem diferença.
variáveis devem ter nomes coerentes.
*/

/*
let n = 45.6;
let s = 'texto';
let nl = null;
let ar = ['Bianca', 'Vanessa', 'Cássia'];
let a = 
console.log(typeof(n));
console.log(typeof(s));
console.log(typeof(nl));
console.log(typeof(ar));
console.log(typeof(a));
*/

/* let nome = window.prompt('Digite seu nome:');
let show = window.alert(`É um grande prazer te conhecer, ${nome}!`);
*/

/*
window.alert('Iremos fazer uma soma!');
let numero1 = Number(window.prompt('Digite um número'));
let numero2 = Number(window.prompt('Digite outro número'));
let soma = numero1 + numero2;
window.alert(`A soma dos valores é ${soma}`);
*/

/*
let s = 'JavaScript';
console.log('Eu estou aprendendo s'); // não aparece a variável.
console.log('Eu estou aprendendo' + s); // esse tipo de concatenação não é muito utilizado
console.log(`Eu estou aprendendo ${s}`); // essa é a forma mais atual e 'fácil'
*/

/* 
para formatar strings:
s.lenght        // quantos indices tem a string
s.toUpperCase() // letra maiúscula
s.toLowerCase() // letra minúscula
*/

/*
let nome = window.prompt('Qual é o seu nome?');
document.write(`Olá ${nome}! Seu nome tem ${nome.length} índices.`);
document.write(`Seu nome em letras maiúsculas fica ${nome.toUpperCase()}.`);
document.write(`Seu nome em letras minúsculas fica ${nome.toLowerCase()}.`);
*/

/*
let numero = 1678.9;
console.log(`${numero.toFixed(2)}`);
console.log(`${numero.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
console.log(`${numero.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})}`);
console.log(`${numero.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})}`);
*/

/* Operadores:
- aritméticos - +, -, *, /, %(potência) e **
ORDEM DE RESOLUÇÃO: (), **, *, /, % E +, -.
- atribuição - ??? me perdi, é normal nessa parte?

let numero1 = 31;
let numero2 = 25;
let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;
let potencia = numero1 % numero2;
let elevado = numero1 ** numero2;
let conta = numero1 / numero2 + numero1;
console.log(`${soma} ${subtracao}`);
console.log(`${multiplicacao} ${divisao}`);
console.log(`${potencia} ${elevado}`);
console.log(`${conta}`);
*/



/*
Operadores
- relacionais - 
- lógicos - 
- ternário - 
*/

