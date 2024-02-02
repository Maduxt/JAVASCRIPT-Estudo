/* 
Condições em JS
if e else

let velocidade = 70
console.log(`A velocidade desse carro é ${velocidade}km/h`);
if (velocidade >= 60) {
    console.log(`Você ultrapassou a velocidade permitida, multado.`);
}
console.log('Utilize o cinto de segurança e dirija com cuidado!');


let pais = 'Brasil';
console.log(`O país de origem é ${pais}`);
if (pais == 'Brasil') {
    console.log(`Você é Brasileiro`);
} else {
    console.log('Você é estrangeiro');
}

agora no HTML

function calcular() {
    let velocidade = window.document.querySelector('input.velocidade');
    let resposta = window.document.querySelector('p.resposta');
    let valor = Number(velocidade.value);
    resposta.innerHTML = `<p>Sua velocidade atual é ${valor}km/h</p>`;
    if (valor > 60) {
        resposta.innerHTML += '<p>Você ultrapassou o limite de velocidade, você foi multado.</p>';
    }
    resposta.innerHTML += '<p>Dirija com cuidado, utilize o cinto de segurança.</p>';
} 


function nacionalidade() {
    let pais = window.document.querySelector('input.pais');
    let resposta = window.document.querySelector('p.resposta');
    let naturalidade = String(pais.value);
    resposta.innerHTML = `O seu país de origem é ${naturalidade}`;
    if (naturalidade == 'Brasil') {
        resposta.innerHTML += '<p>Você é Brasileiro!</p>'
    } else {
        resposta.innerHTML += '<p>Você é estrangeiro!</p>';
    }
}

let idade = 60
console.log(`Você tem ${idade} anos`);
if (idade < 16) {
    console.log('Menor de idade - não pode votar');
} else if (idade < 18 || idade > 65) {
    console.log ('Seu voto é opcional');
} else {
    console.log('Voto obrigatório');
}


let agora = new Date();
let hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas.`);

if (hora >= 6 && hora <=12) {
    console.log(`Bom dia! Agora são ${hora} horas.`); 
} else if (hora >= 12) {
    console.log(`Boa tarde! Agora são ${hora} horas.`);
} else if (hora > 18) {
    console.log(`Boa noite! Agora são ${hora} horas. Seu expediente já acabou e é hora de descansar.`)
} else {
    console.log(`Boa madrugada! Agora são ${hora} horas.`);
}

let agora = new Date();
let diaSemana = agora.getDay();

switch(diaSemana) {
    case 0:
        console.log('Domingo');
        break
    case 1:
        console.log('Segunda');
        break
    case 2:
        console.log('Terça');
        break
        case 3:
            console.log('Quarta');
            break
            case 4:
                console.log('Quinta');
                break
                case 5:
                    console.log('Sexta');
                    break
                    case 6:
                        console.log('Sábado');
                        break
                        default:
                            console.log('ERRO');
        break
    }

    console.log(diaSemana);
    */