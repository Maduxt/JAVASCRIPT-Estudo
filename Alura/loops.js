console.log("Trabalhando com loops");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
console.log (" \n Destinos possíveis:");
console.log (listaDeDestinos);

const idadeComprador = 14;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

const podeComprar = idadeComprador >=18 || estaAcompanhada == true;

let contador = 0;
while (contador <3) {
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe.");
    }else {

        
        console.log("Destino não existe.");
    }
    contador += 1;
}
