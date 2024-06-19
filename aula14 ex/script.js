function Contar() {
    var pri = document.getElementById('inicio').value
    var ult = document.getElementById('fim').value 
    var pass = document.getElementById('passo').value

    var res = document.getElementById('res')

    res.innerHTML = 'contando...'

    if (pri.value.lengh == 0 || ult.value.lengh == 0 || pass.value.lengh == 0) {
        res.innerHTML = 'Impossível contar abestado !'
    } else {

    var i = Number(pri)
    var f = Number(ult)
    var p = Number(pass)
    if (i < f ) {
    for (c = i; c <= f; c += p ) {
        res.innerHTML += `${c} \u{1f449} `
    }
    
} else {
    for (c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1f449}`
    }
    
}
res.innerHTML += `\u{1f3c1}`
}
}