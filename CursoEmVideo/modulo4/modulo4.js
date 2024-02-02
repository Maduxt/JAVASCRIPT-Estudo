/* 
Estruturas de Repetições
While:
Enquanto for TRUE ele irá repetir até ser FALSE, quando for FALSE ele
para de repetir.

console.log('Tudo bem?');
console.log('Tudo bem?');
console.log('Tudo bem?');
console.log('Tudo bem?');
console.log('Tudo bem?');
console.log('Tudo bem?');
console.log('Tudo bem?');
Precisa ficar reescrevendo o tempo todo.
Agora um código simples com a estrutura de repetições WHILE:

let contador = 1
while (contador <= 6) { //esse número define quantas vezes é executado
    console.log('Tudo bem?');
    contador++
}

let cont = 1
while (cont <= 3) { //esse número define quantas vezes o cod. é executado.
    console.log(`Passo ${cont}`); //assim ele conta até 3, não só repete.
    cont++
}

let pizza = 1
while (pizza <=16) {
    console.log(`Comi a fatia n° ${pizza}`)
    pizza++
}

let rodizio = 1
while (rodizio <=30) {
    console.log(`Nesse rodizio estou comendo ${rodizio} peças de sushi.`)
    rodizio++
}

Existe também a estrutura de repetição com DO - WHILE:
1° executa o bloco e depois testa, se for true também faz looping.

let contador = 1
do {
    console.log(`Passo ${contador}`)
    contador++
} while (contador <=5);


let hamburguer = 1
do {
    console.log(`Comi ${hamburguer} hamburguers`);
    hamburguer++
} while (hamburguer <=4);

let freira = 1
do {
    console.log(`Existem ${freira} freiras nesse convento`);
    freira++
} while (freira <=15);

para FOR é mais simples ainda. Vai ter o inicio, o teste lógico,
incremento e execução, da seguinte forma:
1° mostrando o WHILE e como ele vai dentro do FOR, é a msm coisa.

let c = 1
while (c <= 5) {
    console.log(c);
    c++
}

//O FOR fica assim:
*/

console.log('Começo.');
for (let c = 1; c <= 5; c++) {
    console.log(c);
}
console.log('Finalizou.');
//Ele diminui MUITO o código, facilitando a compreensão e escrita.

