function Contar() {
    var pri = document.getElementById('inicio').value
    var ult = document.getElementById('fim').value 
    var pass = document.getElementById('passo').value

    var res = document.getElementById('res')

    res.innerHTML = 'contando...'

    if (pri.length == 0 || ult.length == 0 || pass.length == 0) {
        res.innerHTML = 'Impossível contar abestado !'
    } else {

    var i = Number(pri)
    var f = Number(ult)
    var p = Number(pass)
    if (i < f ) {
    for (var c = i; c <= f; c += p ) {
        res.innerHTML += `${c} \u{1f449} `
    }
    
} else {
    for (var c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1f449}`
    }
    
}
res.innerHTML += `\u{1f3c1}`
}
}