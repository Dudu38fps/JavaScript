const padrao_email = /([a-zA-Z0-9]{2,})@([a-z]{2,})(\.[a-zA-Z0-9]{2,})?/g

const padrao_numero = /^\(\d{2}\) \d{5}-\d{4}$/g

function validarEmail(email){
    return padrao_email.test(email)

}

function validarNumero(numero) {
    return padrao_numero.test(numero)

}

function Enviar() {
    const email = document.getElementById("Email").value
    const numero = document.getElementById("Numero").value
    const res = document.getElementById("res")

    let mensagem = ""

    if (validarEmail(email)){
        mensagem += "<p> E-mail válido!</p>"
    } else {
        mensagem += "<p>E-mail inválido, certifique que o formato do e-mail está certo.</p>"
    }

    if (validarNumero(numero)) {
        mensagem += "<p> Número válido!</p>"
    } else {
        mensagem += "<p> Número inválido, certifique que o número foi digitado no formato correto.</p>"
    }

    if (validarEmail(email) == 0 || validarNumero(numero) == 0) {
        mensagem = "<p> Digite o E-mail e o Número.</p>"
    }

   res.innerHTML = mensagem
}