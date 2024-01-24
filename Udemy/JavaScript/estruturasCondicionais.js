/*
Entre 0 e 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/
/*
*** ELSE sempre precisa de um IF antes.
Posso ter vários ELSE IF nas checagens.
Só posso ter um else sozinho na checagem.
Podemos usar condições omitindo else if, podendo ser if e else ou apenas if.
*/

/* 
const hora = 24;

if (hora >= 0 && hora <= 11) {
    console.log ('Bom dia!');

} else if (hora >= 12 && hora <=17) {
    console.log ('Boa tarde!');

} else if (hora >=18 && hora <=23) {
    console.log ('Boa noite!');

} else {
    console.log ('Olá! Seja bem vindo.');
}

const tenhoDinheiro = false;

if (tenhoDinheiro) {
    console.log ('Vou sair de casa.');
} else {
    console.log ('Não vou sair de casa.');
}
*/

const numero = 21;

if (numero >= 0 && numero <= 5) {
    console.log ('O número está entre 0 e 5.');
} else if (numero > 5 && numero <=15) {
    console.log ('O número está entre 6 e 15');
} else if (numero > 16 && numero <=20) {
    console.log ('O número está entre 16 e 20');
} else {
    console.log ('O número não está entre 0 e 20');
}
