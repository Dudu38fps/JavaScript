function Resultado() {
    var num = document.getElementById('numero').value
    var tab = document.getElementById('tabuada')

    if (num.length == 0) {
        window.alert('Digite um número')

    }else {
        var n = Number(num)
        tab.innerHTML = ''

        for (var c = 1;c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}