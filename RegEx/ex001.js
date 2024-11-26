// RegEx

// Serve para identificar caracteres em texto 
// Validar se um padrão de caractere existe
// Extrair toda vez que encontrar o padrão
// Achar um padrão e trocar por outro


let texto = "olá Mundo"
let reg = /Mundo/g;

let r = texto.match(reg)

console.log(r)

let text = "Este é meu email: ddubr37@gmail.com"

let email = /([a-z0-9]{2,})@([a-z0-9]{2,})(\.[a-z]{2,})(\.[a-z]{2,})?/g

let res = email.exec(text)

console.log(res)

let num = "Esse é o meu número: 21 99454-3521"

let n = /\d{2}\s\d{4,5}[-]\d{4}/g

let re = n.exec(num)

console.log(re)


