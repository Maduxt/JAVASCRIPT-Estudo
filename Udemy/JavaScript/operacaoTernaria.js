// (condição) ? 'valor de verdadeiro' : 'valor para falso' isso é um operador ternário. Ex:

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Você é um usuário VIP' : 'Você ainda não é um usuário VIP';

console.log(nivelUsuario);

//dessa forma facilita o código e não é preciso ficar utilizando if e else, ex:

 if (pontuacaoUsuario >=1000) {
    console.log ('você é um usuário VIP');
} else {
    console.log ('Você ainda não é um usuário VIP')
}

