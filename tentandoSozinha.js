console.log ("Primeira tentativa sozinha de usar JS");

const primeiroNome = "Maria";
const segundoNome = "Eduarda";
const nomeCompleto = "Maria Eduarda Polli";

console.log (primeiroNome);
console.log (segundoNome);
console.log (nomeCompleto);

const listaDeCompras = new Array (
    `Morango`,
    `Maracuja`,
    `Chocolate`,
    `Vinho`,
    `Salmão`,
    `Guaraná 0`
);

listaDeCompras.push (`Leite de coco`, `Fermento de pão`);

console.log ("Lista de Compras");
console.log (listaDeCompras);

console.log ("Contas Aritméticas");
const divisao = 7383 / 50;
console.log (divisao);
const multiplicacao = 50 * 8;
console.log (multiplicacao);
const subtracao = 67392 - 37292;
console.log (subtracao);
const adicao = 754 + 579;
console.log (adicao);

//aprendizado até a aula 03 - 02.

//Condicionais:

console.log ("Contribuição do INSS");

const salario = 3500.0

if (salario < 2571.3) {
    console.log ("Aliquota de 9%")
}
else {
    console.log ("Aliquota de 12%")
}
