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

function Verificar() {
    if (nomes.length == 0) {
        window.alert('Não há nada para verificar !')
    } else {
        res.innerHTML = ''
        var total = nomes.length
        var primeiro = nomes[0]
        var ultimo = nomes[nomes.length -1]

        res.innerHTML += `Os nomes cadastrados são : <strong>${nomes.join(', ')}</strong> .<br> `
        res.innerHTML += `O total de nomes cadastrados são <strong>${total}</strong> .<br>`
        res.innerHTML += `O primeiro nome cadastrado foi <strong>${primeiro}</strong> .<br>`
        res.innerHTML += `O Último nome cadastrado foi <strong>${ultimo}</strong> .`

    }
}