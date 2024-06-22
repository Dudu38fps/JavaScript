function Enviar() {
    var nome = document.getElementById('enome').value
    var sexo = document.querySelector('input[name=sexo]:checked').getAttribute('value')
    var peso = document.getElementById('epeso').value
    var altura = document.querySelector('input[name=altura]:checked').getAttribute('value')
    var res = document.getElementById('res')

    res.innerHTML = `O usuário ${nome}, do sexo ${sexo}, pesa ${peso} e tem ${altura} estatura.`
    
}