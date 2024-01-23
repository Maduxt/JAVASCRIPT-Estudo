//posso alterar itens dentro dos objetos

/* const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 20
};

console.log(pessoa1.nome);
*/

function criaPessoa (nome, sobrenome, idade) {
    return {
    nome, sobrenome, idade
    }
};

const pessoa1 = criaPessoa ('Maria', 'Polli', 20);
const pessoa2 = criaPessoa ('Reginaldo', 'Rossi', 80);
console.log (pessoa1, pessoa2);

const pessoa3 = {
    nome: 'Robertinho',
    sobrenome: 'Guaraná',
    idade: 60,

    fala () {
        console.log (`${this.nome} ${this.sobrenome} está falando oi.`);
    },
}

pessoa3.fala ();