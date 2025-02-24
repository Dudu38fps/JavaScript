var xhr = new XMLHttpRequest()
var documento;

xhr.responseType = "json"
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200){
        documento =xhr.response
        console.log(documento)
    }
}

xhr.open("GET","https://jsonplaceholder.typicode.com/posts/1")

xhr.send()
