/* Currying
Técnica de transformação de uma função que recebe múltiplos parâmetros de forma que ela pode ser chamada como uma cadeia de funções que recebem um parâmetro cada, ou seja em vez de criar uma função só com todos os parâmetros, pode criar mais funções com parâmetros separados

*/

// Função normal

function pessoa(nome,idade) {
    let nomeidade = `Meu nome é ${nome}, minha idade é ${idade}`

    return nomeidade
}

var humano = pessoa('Luana', 3)

console.log(humano)

// Currying

function pessoal(nome) {
    return function (idade) {
        return `Meu nome é ${nome} e minha idade é ${idade}`
    }
}

var feminino = pessoal('Leticia')
var masculino = pessoal('Eduardo')
console.log(feminino(22))
console.log(masculino(19))