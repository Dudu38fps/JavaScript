// RegEx


let texto = "olá Mundo"
let reg = /Mundo/g;

let r = texto.match(reg)

console.log(r)

let text = "Este é meu email: ddubr37@gmail.com"

let email = /([a-z0-9]{2,})@([a-z0-9]{2,})(\.[a-z]{2,})(\.[a-z]{2,})?/g

let res = email.exec(text)

console.log(res)

let number = 'Meu número é (21) 99454-3521'

let n = //g