function Validar(input){
    let regexnome = /^[A-Za-zÀ-Ö0-ö\s]+$/
    return regexnome.test(input)
}


function BuscarProduto() {
    let input = document.getElementById("NomeP").value.trim().toUpperCase()
    let Resultado =document.getElementById("Resultado")

    Resultado.style.display = "Block"

    if (!Validar(input)) {
        Resultado.innerHTML = "Nome inválido!"
        return;
    }

    Resultado.innerHTML = "Buscando..." 

    fetch ("produtos.json")
    .then(Response => Response.json())
    .then(data => {
        let produto = data.find(p => p.nome.toUpperCase() === input)

        if(produto) {
            Resultado.innerHTML = 
             `Produto encontrado! <br>
              Nome:${produto.nome} <br>
              Descrição:${produto["Descrição"]}`;
              
            
        } else {
            Resultado.innerHTML = 'Produto não encontrado'
        }
    })

    .catch(error => {
        Resultado.innerHTML = "Erro ao buscar o produto"
        console.error("Erro ao carregar JSON", error)
    })
}   