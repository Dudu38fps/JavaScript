var xhr = new XMLHttpRequest()

var documento = {
    "userId": 1000,
    "id": 10,
    "title": "O GOAT",
    "body": "Ele é imparável, gostoso, lindo, tudo que deseja ele consegue, tudo que ele faz é com excelência. Esse sou EU"
}

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4){
        console.log(xhr)
    }
}

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts")

xhr.send(documento)