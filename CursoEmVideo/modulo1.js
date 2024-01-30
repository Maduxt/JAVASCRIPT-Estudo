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
- atribuição - ex: 
let x = 8
x = x++ ou x = x--

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
- relacionais - > maior, < menor, >= maior ou igual que, <= menor ou igual que,
== igual, != diferente, === identico (tipo e valor), !== (tipo e valor)
- lógicos - ! negação, && conjunção (e) e || disjunção (ou)
- ternário - 

let num1 = 5
let num2 = 8
console.log(num1==num2);
console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);
console.log(num1!=num2);

let idade = '18'
let preco = 18
console.log(idade===18);
console.log(idade==18);
console.log(idade!=preco);
console.log(idade!==preco);

console.log(true&&true&&false);
console.log(true&&true);

console.log(true||false);
console.log(true||true);
console.log (false||false);

console.log(!true);
console.log(!false);

let usuario = 'Felipe'
let senha = 1234
const login = usuario == 'Felipe' && senha == 1234;
console.log(login);

const ou = usuario == 'Felipe' || senha == 1234;
console.log(ou);

const erro = usuario == 'Julio' && senha == 345;
console.log(erro);

let idade  = 12;
console.log(idade >=14 && idade<=18);

let estado = 'PR';
console.log(estado=='RJ' || estado=='PR');

let salario = 1540;
sexo = 'F';
console.log(salario==1540 && sexo !='M');

let vizinho = 'chato';
console.log(vizinho != 'legal' || vizinho != 'bacana');

let crianca = 8
console.log(crianca <= 12);

let adulto = 16
console.log(adulto >= 18);
*/