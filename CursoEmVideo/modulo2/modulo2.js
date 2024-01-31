/* 
Conhecendo o DOM.
O que é?
Document Object Model, conjunto de objetos dentro do navegador que
vai dar acesso aos componentes

Como usar?

Árvore DOM:
raiz - window
location - url, pagina principal, paginas clicaveis
document - documento atual
history - histórico de navegação do site
html - head (meta, title, link) e body (h1, p, div)

Manipulando o DOM:

let p1 = window.document.getElementsByTagName('p')[0];
window.document.write('esta escrito nas estrelas' + p1.innerText);
p1.style.color = 'pink';

let corpo = window.document.body
corpo.style.background = 'orange';

let botao = window.document.querySelector('a');
botao.style.color = 'red';

let titulo = window.document.querySelector('h1');
titulo.style.fontSize = '10px';

let subtitulo = window.document.querySelector('h2');
subtitulo.style.color = 'black';

let p2 = window.document.getElementsByTagName('p')[1];
p2.style.color = 'purple';

let subtitulo2 = window.document.querySelector('h3');
subtitulo2.style.color = 'green';

let p3 = window.document.getElementsByTagName('p')[2];
p3.style.color = 'brown';

*/

/*
Eventos DOM

Tudo o que possa acontecer com o elemento, ex:

mouse - mouseenter, mousemove, mousedown, mouseup, click, mouseout



Funções

let area = window.document.getElementById('area');
area.addEventListener('click', clicar);
area.addEventListener('mouseenter', entrar);
area.addEventListener('mouseout', sair);

function clicar() {
    area.innerText = 'Clicou';
    area.style.background = 'pink';
}

function entrar() {
    area.innerText = 'Entrou';
}

function sair() {
    area.innerText = 'Saiu';
    area.style.background = '#94f865';
}

*/

function somar() {
    let texto1 = window.document.getElementById('numero1');
    let texto2 = window.document.getElementById('numero2');
    let resposta = window.document.querySelector('p');
    let numero1 = Number(texto1.value);
    let numero2 = Number(texto2.value);
    let soma = numero1 + numero2;
    resposta.innerHTML = 5
}