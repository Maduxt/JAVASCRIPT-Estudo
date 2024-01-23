//\\colocando duas barras uma é o escape e a outra aparece no TextDecoder, ex:

console.log ("Esse é um \\texto");
            //01234567
let string = 'Um texto'

console.log (string [5]);

console.log (string.charAt(7));

//FORMAS DE CONCATENAÇÃO
console.log (string.concat(' ','em', ' ', 'um',' ','lindo', ' ','dia.')); //péssima
console.log (string + ' em um lindo dia.');
console.log (`${string} em um lindo dia.`);

//pesquisar por um índice:
console.log (string.indexOf('texto'));
//aqui ele procura do começo, quando aparece -1 ele não encontrou onde começa o índice.
console.log (string.lastIndexOf('o'));
//aqui ele procura de trás pra frente.

//para substituir.
let ratoRoeu = "O rato roeu a roupa do rei de roma.";
console.log(ratoRoeu.replace (/r/g, '4'));
console.log(ratoRoeu.length);
console.log (ratoRoeu.slice (2,6)); //corta os índices indicados, nessa cortou rato.
//posso colocar números negativos também, ex:
console.log (ratoRoeu.slice(-5)); //cortou roma..

//maiuscula e minuscula
console.log(ratoRoeu.toUpperCase());
console.log(ratoRoeu.toLowerCase());