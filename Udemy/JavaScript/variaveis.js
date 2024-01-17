/* NÃO POSSO REDEFINIDIR A VARIÁVEL(ex: NOMES), POIS JÁ ESTÁ SENDO UTILIZADA:
let nomes;
ISSO FAZ O CÓDIGO PARAR.
*/

/* 
- VARIÁVEIS PRECISAM TER NOMES SIGNIFICATIVOS, NÃO PODE SER ALGO ALEATÓRIO.
- NÃO POSSO INICIAR A VARIÁVEL COM NÚMEROS
- NOMES DE VARIÁVEIS NÃO PODEM CONTER ESPAÇOS OU TRAÇOS
- UTILIZAMOS camelCase, EX: let nomeCompletoDoCliente
- AS VARIÁVEIS SÃO CASE-SENSITIVE, MAIÚSCULA E MINUSCULA FAZEM DIFERENÇA
- NÃO POSSO CRIAR VARIÁVEIS COM PALAVRAS RESERVADAS A TECNOLOGIA
*/

console.log ("Criando variáveis no JS");

let nome = `Gustavo`;

console.log (nome, "nasceu em 1984");
console.log ("Em 2000", nome, "conheceu Maria");
console.log (nome, "casou-se com Maria em 2012");
console.log ("Maria teve 1 filho com", nome, "em 2015");
console.log ("O filho de", nome, "se chama Eduardo \n");


let nomes; //Variável declarada
nomes = "Vitória"; //Defini a variável
console.log (nomes);
nomes = "Maria"; //Redefini a variável, não é uma boa prática.
console.log (nomes);

