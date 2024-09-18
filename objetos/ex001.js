let nome = 'João'
let idade = 14
let cidade = 'São Paulo'

console.log(`Dados do Cidadão = Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`)

//Trabalhando com objetos

let cidadao = {
    nome:'Eduardo',
    idade: 19,
    cidade:'Rio de Janeiro',
    profissao:'Programador'
}

console.log(`Dados do Cidadão = Nome: ${cidadao.nome}, Idade: ${cidadao.idade}, Cidade: ${cidadao.cidade}, Profissão: ${cidadao.profissao}.`)

let numeros = {
    maior: 1000,
    menor: -100,
    meio: 400,
    secundário: 38,
}

console.log(`soma: ${numeros.secundário + numeros.menor}, subtração: ${numeros.meio - numeros.maior}, multiplicação: ${numeros.maior * numeros.meio}. `)