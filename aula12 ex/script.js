function carregar () {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Dia
        foto.src = 'imagens/manha.jpg'
        document.body.style.background = 'lightgreen'
    } else if (hora >= 12 && hora < 18) {
        //Tarde
        foto.src = 'imagens/tarde.jpg'
        document.body.style.background = 'lightorange'
    } else {
        //Noite
        foto.src = 'imagens/noite.jpg'
        document.body.style.background = 'darkblue'
    }
}
