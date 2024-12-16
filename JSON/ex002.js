function BuscarCep() {
    let input = document.getElementById('cep').value


const ajax = new XMLHttpRequest()
ajax.open('GET', 'https://viacep.com.br/ws/'+ input +'/json/')
ajax.send()

ajax.onload = function ( ) {
    document.getElementById('texto').innerHTML = this.responseText
    let obj = JSON.parse(this.responseText)
    let c = obj.cep 
    let bairro = obj.bairro
    let localidade = obj.localidade

    document.getElementById('texto').innerHTML = "cep: " + c + " Bairro: "
+ bairro + " Localidade: " + localidade }
}