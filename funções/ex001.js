// São trechos de código que só é executado quando chamado //

// função void 

var valor = 10
function incremento() {
    valor++
}
incremento()
console.log(valor)

//Função com Parâmetro

function pessoa(nome) {
    console.log(nome)
}

pessoa('Eduardo')

function numeros(numero1, numero2) {
    var soma = numero1 + numero2
    console.log(soma)
}

numeros(10, 30)

// função return

    function calculo(numero1, numero2, numero3){

    var soma = numero1 + numero2 * numero3

    return soma
    }

    var total = calculo(39, 10 , 3)

    console.log(total)

// função arrow 

var cal = (num1, num2) => num1 * num2 

var total = cal(19,22)
console.log(total)
