console.log (`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

console.log ("Destinos possíveis:");
//console.log (salvador, saoPaulo, rioDeJaneiro);
//quando temos muitas variáveis sobre o mesmo assunto, fica muito complicado, praticamente impossível.
//então como fazer listas de forma correta? Utilizando o seguinte comando.

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push (`Curitiba`) //adiciona um item na lista

listaDeDestinos.splice (1,1);

console.log (listaDeDestinos);

console.log (listaDeDestinos[1]);
