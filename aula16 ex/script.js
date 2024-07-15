var num = document.getElementById('num')
var tela = document.getElementById('tela')
var res = document.getElementById('res')

let valores = []

function inTela(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Adicionar() {
    if (num.value >= 1 && num.value <=100 && !inTela(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O número ${num.value} foi adicionado.`
        tela.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('O número já foi adicionado ou inválido')
    }

    num.value = ''
    num.focus()
    
}

function Verificar() {
    if (valores.length == 0) {
        window.alert('Não há nenhum valor para verificar!')
    }else {
        res.innerHTML = ''
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
            
            if (valores[pos] < menor) 
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `Temos um total de ${total} números cadastrados <br>`
        res.innerHTML += `O maior número é o ${maior} <br>`
        res.innerHTML += `O menor numero é o ${menor} <br>`
        res.innerHTML += `A soma dos valores é ${soma} <br>`
        res.innerHTML += `A Média dos valores é ${media}`




    }
}
