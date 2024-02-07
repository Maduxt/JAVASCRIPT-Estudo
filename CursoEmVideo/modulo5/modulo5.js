/* let numeros = [8, 7, 6, 5];
numeros.push(9)
console.log(`variável inteira normal ${numeros}`);
console.log(`Nosso vetor tem ${numeros.length} posições.`);
console.log(`Vamos mostrar a posição 3 que é o num ${numeros[3]}.`);
console.log(`Para deixar os números em ordem crescente ${numeros.sort()}.`);
let valores = [0, 1, 2, 3, 4, 5];

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

let nomes = [3, 5, 7, 9];

for(let pos=0; pos <nomes.length; pos++) {
    console.log(nomes[pos]);
}

let num = [1, 2, 3, 4, 5];

for (let pos in num) {
    console.log(num[pos]);
}

let numb = [6, 9, 7, 8, 5, 4];

for(let pos in numb) {
    console.log(numb[pos]);
}

funções (function):
padrões - rotinas - funções

function ação(parametros) {
    retorno de resultado
}
ação(5) - vai para o parametro e volta pra ação 

function parimp(n) {
    if (n%2==0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}   

let resultado = parimp(4)

console.log(resultado);

function idade(i) {
    if (i >=18) {
        return 'Você é maior de idade'
    } else {
        return 'Você é menor de idade, acesso negado.'
    }
}

let testado = idade(60)

console.log(testado)

function linguagem(l) {
    if (l = 'Português') {
        return 'Você é Brasileiro'
    } else {
        return 'Você é estrangeiro'
    }
}

let nacionalidade = linguagem('romano');
console.log(nacionalidade)
*/