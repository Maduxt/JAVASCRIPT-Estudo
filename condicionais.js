console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log (" \n Destinos possíveis:");
console.log (listaDeDestinos);
const idadeComprador = 14;
const estaAcompanhada = true;
const temPassagemComprada = true;


if (idadeComprador >=18 || estaAcompanhada == true) {
        console.log(" \n Boa viagem!");
        listaDeDestinos.splice (1,2);
}else {
            console.log ("Não é maior de idade e não está acompanhado, não é possível a compra")
}


console.log("Embarque: \n \n");
if(idadeComprador >=18 || estaAcompanhada == true && temPassagemComprada) {
    console.log("Boa Viagem!!")
}else {
    console.log("Você não pode embarcar.")
}

console.log (listaDeDestinos);
