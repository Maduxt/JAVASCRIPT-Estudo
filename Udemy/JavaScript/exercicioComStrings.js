const nome = prompt ('Digite seu nome completo:');
        
document.body.innerHTML += `Seu nome é: ${nome} <br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} índices <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${nome.indexOf('a')} <br />`;
document.body.innerHTML += `Qual o último índice da letra a no seu nome? ${nome.lastIndexOf('a')} <br />`;
document.body.innerHTML += `As últimas três letras do seu nome são: ${nome.slice (-3)} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split (' ')} <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase ()} <br />`;
document.body.innerHTML += `Seu nome com letras minusculas: ${nome.toLowerCase ()} <br />`;