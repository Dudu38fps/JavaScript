function Resultado() {
    var passo1 = document.getElementById('1passo').value
    var passo2 = document.getElementById('2passo').value
    var pular = document.getElementById('pular').value

    var res = document.getElementById('res')

    res.innerHTML = 'Contando...'

    if (passo1.length == 0 || passo2.length == 0 || pular.length == 0) {
        window.alert('Erro, não há como contar')
    } else {
        var p1 = Number(passo1)
        var p2 = Number(passo2)
        var pl = Number(pular)

       if (p1 < p2) {
        for (var c = p1; c <= p2; c += pl) {
            res.innerHTML += `${c} \u{1f449} `
        }
       } else {
        for (var c = p1; c >= p2 ; c -= pl) {
            res.innerHTML += `${c} \u{1f449}`
        }
       }
       res.innerHTML += `\u{1f3c1}`
    }
}