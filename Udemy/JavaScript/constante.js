/* 
- CONSTANTES PRECISAM TER NOMES SIGNIFICATIVOS, NÃO PODE SER ALGO ALEATÓRIO.
- NÃO POSSO INICIAR A CONSTANTE COM NÚMEROS
- NOMES DE CONSTANTES NÃO PODEM CONTER ESPAÇOS OU TRAÇOS
- UTILIZAMOS camelCase, EX: let nomeCompletoDoCliente
- AS CONSTANTES SÃO CASE-SENSITIVE, MAIÚSCULA E MINUSCULA FAZEM DIFERENÇA
- NÃO UTILIZE VAR, UTILIZE CONST
- NÃO POSSO CRIAR CONSTANTES COM PALAVRAS RESERVADAS A TECNOLOGIA
- NÃO POSSO MODIFICAR O VALOR DE UMA CONSTANTE
*/

const nomes = "João";
console.log (nomes, "casou-se com Maria em 1980 \n");

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log (typeof primeiroNumero);

//exercício.

const nome = "Luiz Otávio";
const sobrenome = "Miranda";
let idade = 30;
let peso = 84;
const alturaEmMt = 1.8;
let indiceMassaCorporal = peso / (alturaEmMt * alturaEmMt);
let anoNascimento = 2024 - idade;

console.log (`${nome} ${sobrenome} tem ${idade} anos, nasceu em ${anoNascimento}, pesa ${peso} kg, tem ${alturaEmMt}, de altura e seu IMC é de ${indiceMassaCorporal}`);