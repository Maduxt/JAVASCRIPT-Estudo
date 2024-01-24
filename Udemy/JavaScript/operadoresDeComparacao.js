/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
= atribuição
== igualdade (valor) - não recomendável
=== igualdade estrita (valor e tipo)
!= diferente (valor) - não recomendável
!== diferente estrito (valor e tipo)
*/

const comparacaoMaior = 10 > 5;
console.log (comparacaoMaior);

const maiorOu = 10 >= 11;
console.log (maiorOu);

const comparacaoMenor = 10 < 11;
console.log (comparacaoMenor);

const menorOu = 10 <= 11;
console.log (menorOu);

//também não é recomendado pq ele converte sozinho os tipos string e number. assim como !=
const numero1 = 20;
const numero2 = '21';
const comparacaoIgualdade = numero1 == numero2;
console.log (comparacaoIgualdade);

//o correto seria: assim como !==
const num1 = 20;
const num2 = '20'; // mesmo que seja o mesmo número, por ser uma string os valores não são iguais, pois um é number e o outro string.
const comparacaoIgualdadeRestrita = num1 === num2;
console.log (comparacaoIgualdadeRestrita);