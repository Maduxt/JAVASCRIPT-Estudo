/*
Operadores lógicos
&& -> AND -> todas as expressões precisam ser verdadeiras, ele retorna o valor falso.
|| -> OR -> apenas uma expressão precisa ser verdadeira para retornar true
! -> NOT -> nega a expressão, por ex: false vira true, com 2 !! volta a ser false.
*/

const expressaoAnd = true && true && false;
console.log (expressaoAnd);

const expressaoOr = true || false;
console.log (expressaoOr);

console.log (!false);

//exemplo de uso:

const usuario = 'Luiz'; //vindo de um form que o usuário digitou
const senha = '1339cjd'; //vindo de um form que o usuário digitou

const vaiLogar = usuario == 'Luiz' && senha == '1234'; //se tiver algo errado ele não loga
console.log(vaiLogar);

/* COM &&:
Ele retornará o valor FALSO, se não tiver valor falso ele retorna o último valor vddr.
Alguns valores são avaliados em falsos (FALSY) em JS. Ex:
false
'' "" ``
0
null / undefined
NaN
*/

console.log ('Luiz' && 0 && 'Maria'); //retorna falso por causa do 0
console.log ('Maria' && 'Luiz'); //retorna true pq nao tem nenhum FALSY

function falaOi () {
    return "Oi";
}


let executarFuncao = 'Fernanda';
console.log (executarFuncao && falaOi());

/* COM ||:
Ele retornará o valor VERDADEIRO MESMO, não o valor falso.
*/

console.log (0 || false || 'Luiz Otávio' || true); //retorna o primeiro valor verdadeiro

//ex do professor.
const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; //por ser uma string podemos escrever o que quisermos, não sera falsy.
const d = false;
const e = NaN;

console.log (a || b || c || d || e);
