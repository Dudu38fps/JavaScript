function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('eano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Erro, verifique os dados!')
    } else {
        var fsex = document.getElementsByName('esex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bebe.homem.jpg')
            } else if (idade < 21 ) {
                //jovem
                img.setAttribute('src', 'imagens/jovem.homem.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/adulto.homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.homem.jpg')
            }
        } else if (fsex[1].checked) {
        genero = 'mulher'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'imagens/bebe.mulher.jpg')
        } else if (idade < 21 ) {
            //jovem
            img.setAttribute('src', 'imagens/jovem.mulher.jpg')
        } else if (idade < 60) {
            //adulto
            img.setAttribute('src', 'imagens/adulto.mulher.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'imagens/idoso.mulher.jpg')
        }
        
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
} 
}
