function carregar () {
    var msg = document.getElementById('msg')
    var fot = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Dia
        img.src = 'imagens/manha.jpg'
    } else if (hora >= 12 && hora < 18) {
        //Tarde
        img.src = 'imagens/tarde.jpg'
    } else {
        //Noite
        img.src = 'imagens/noite.jpg'
    }
}
