/* 
- date é uma função construtora, todas começam com a primeira letra maiuscula. As datas são contadas por milésimos de segundos.
- 59 segundos é o maximo, passou ja vai pro proximo minuto, 999 milésimos é o máximo, passou disso vai pro próximo segundo, assim por diante.
- os meses começam no 0 caso o formato seja com (,) 0-11. Caso o formato seja '00-00-00' os meses seguem a ordem normal 1-12.
*/

const data = new Date(); //manda como: ano, mes, dia, hora, minuto, segundo, milesimo.
console.log (data.toString());

console.log ('Dia', data.getDate());
console.log ('Mês', data.getMonth() +1);
console.log ('Ano', data.getFullYear());
console.log ('Hora', data.getHours());
console.log ('Minuto', data.getMinutes());
console.log ('Segundo', data.getSeconds());
console.log ('Milisegundo', data.getMilliseconds());
console.log ('Dia da semana', data.getDay()); //0 domingo - 6 sábado.

console.log (Date.now()); //Vai pegar os milésimos de segundo da data 0 até hoje.

function colocarZero (num) {
    return num >= 10 ? num :`0${num}`
}

function formataData (datas) {
    const dia = colocarZero(datas.getDate());
    const mes = colocarZero(datas.getMonth() + 1);
    const hora = colocarZero(datas.getHours());
    const minutos = colocarZero(datas.getMinutes());
    const segundos = colocarZero(datas.getSeconds());
    const milisegundos = colocarZero(datas.getMilliseconds());
    const ano = colocarZero(datas.getFullYear());
    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}:${milisegundos}`;
}

const datas = new Date();
const dataBrasil = formataData(datas);
console.log (dataBrasil);