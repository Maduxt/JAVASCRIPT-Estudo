//coleção de coisas (uma lista)
//os arrays são separados por elementos, não por indice como as strings.

const alunos = ['Maria', 'João', 'Fernanda'];
//alunos [alunos.length] = 'Fábio'; é uma forma de adicionar itens NO FIM
alunos.push ('Vitória'); //para adicionar no final
alunos.unshift ('Virgínia'); //para adicionar no início
alunos.pop; // () para remover itens, no final
alunos.shift; // () para remover do incio
console.log (alunos);
console.log (typeof alunos);
console.log (alunos instanceof Array);