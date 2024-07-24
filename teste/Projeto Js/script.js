var nome = document.getElementById('nome')
var tela = document.getElementById('tela')
var res = document.getElementById('res')

let nomes = []

function Enviar() {

    let nomevalor = nome.value.trim()

    if (nomevalor !== '' ) {
        nomes.push(nomevalor)
        let item = document.createElement('option')
        item.text = `O nome ${nomevalor} foi adicionado!`
        tela.appendChild(item)

        res.innerHTML = ''

    } else {
        alert('Digite um nome, por favor')
    }

    nome.value = ''
    nome.focus()
}