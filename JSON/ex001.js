/*
JSON

JavaScript Object Notation
Ele basicamente transforma um objeto em texto ou vice e versa.
Usado principalmente para transmitir dados entre sistemas de forma simples.
Usamos JSON por meio de dois métodos:

JSON.parse() = Converte texto no padrão JSON em objetos
JSON.stringify() = Converte objetos em texto no padrão JSON


*/


const celular = {
    marca: "Iphone",
    modelo: "16 pro max",
    ano: 2025


}
// OBJ para Texto
let texto = JSON.stringify(celular)

document.getElementById('area').innerHTML = texto;
//Texto para OBJ
let obj = JSON.parse(texto)

console.log(obj.marca)
