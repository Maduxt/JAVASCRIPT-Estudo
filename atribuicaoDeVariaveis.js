console.log ("Trabalhando com atribuição de variáveis");

let nome = "Maria";
const sobrenome = "Polli";
//PARA COLOCAR ESPAÇO PODEMOS UTILIZAR ,
console.log (nome,  sobrenome);

//OU PODEMOS UTILIZAR "  "

console.log (nome + " " + sobrenome);

//chamando variaveis sem , +, etc

console.log (`Meu nome é ${nome} ${sobrenome}`);

//sobrescrevendo variavel

nome = nome + sobrenome;

console.log (nome);

//CONST NÃO VARIA, NÃO PODE SER SOBRESCRITA.
//JÁ O LET É VARIÁVEL, PODE SER SOBRESCRITA E MUDADA.


//A VARIAVEL E A ATRIBUIÇÃO SÃO DUAS OPERAÇÕES DISTINTAS, EX:

let idade;
idade = 20;
idade = idade +1;

console.log (idade);