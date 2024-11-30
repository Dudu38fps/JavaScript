var texto = "Eduardo Feliciano junto com Jamilly Pelegrino, criamos um canal do Youtube. Esse canal será sobre nossa rotina e hobbies que fazemos no dia a dia."

var nome = /[A-Z][a-z]{1,}\s[A-Z][a-z]{1,}/g

let r = texto.match(nome)

console.log(r)

var t = "envie um e-mail para este endereço: boxshadow22@gmail.com"

var email = /([a-zA-Z0-9]{2,})@([a-z]{2,})(\.[a-z]{2,})(\.[a-z]{2,})?/g

var res = t.match(email)

console.log(res)