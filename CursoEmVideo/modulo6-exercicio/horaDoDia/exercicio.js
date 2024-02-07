function carregar() {
    let msg = window.document.querySelector(".msg");
    let img = window.document.querySelector(".imagem");
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#fbae88'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#ea7d22'

    } else {
        img.src = 'noite.png'
        document.body.style.background = '#294761'
    }
}
