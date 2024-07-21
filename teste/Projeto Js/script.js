function Enviar() {
    var nome = document.getElementById('nome')
    var num = document.getElementById('numero').value
    var tela = document.getElementById('tela')
    var res = document.getElementById('res')

    

    var n = Number(num)

    if (n == 0 && nome == 0) {
        window.alert('Digite seu nome e escolha um número')
    }
}