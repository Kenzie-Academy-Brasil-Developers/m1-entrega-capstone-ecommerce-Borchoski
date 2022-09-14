let ul = document.querySelector("ul")
let ulCarrinho = document.getElementById("ulCarrinho")
let valorCarrinho = document.getElementById("valor")
let quantidadeCarrinho = document.getElementById("quantidade")

function criarCards(lista){
    for(let i = 0; i < lista.length; i++){
        let li = document.createElement("li")
        let figure = document.createElement("figure")
        let img = document.createElement("img")
        let section = document.createElement("section")
        let p1 = document.createElement("p")
        let h3 = document.createElement("h3")
        let p2 = document.createElement("p")
        let h4 = document.createElement("h4")
        let but = document.createElement("button")
        img.src = lista[i].img
        p1.innerText = lista[i].tag
        h3.innerText = lista[i].nameItem
        p2.innerText = lista[i].description
        h4.innerText = `R$ ${lista[i].value}`
        but.innerText = "Adicionar ao carrinho"
        figure.appendChild(img)
        section.append(p1, h3, p2, h4, but)
        li.append(figure, section)
        p1.classList.add("depart")
        ul.appendChild(li)
        but.classList.add("butprodutos")
        but.id = lista[i].id
    }
}
criarCards(data)

let botoesProduto = document.getElementsByClassName("butprodutos")

for(let i = 0; i < botoesProduto.length; i++){
    let botao = botoesProduto[i]

    let valor = 0
    let quantidade = 0

    botao.addEventListener("click", function(event){
        let elemento = event.target
        let id = parseInt(elemento.id)
        let card = procuraObjeto(id)
        if(!card){
            alert("Produto não encontrado.")
        }else{
            insereCarrinho(card)
            
        }
    })
}

function procuraObjeto(id){
    for(let j = 0; j < data.length; j++){
        let card = data[j]
        if(card.id === id){
            return card
        }
    }
    return false
}

function insereCarrinho(card){
    
    let li = document.createElement("li")
    let figure = document.createElement("figure")
    let img = document.createElement("img")
    let section = document.createElement("section")
    let h5 = document.createElement("h5")
    let h6 = document.createElement("h6")
    let but = document.createElement("button")
    img.src = card.img
    h5.innerText = card.nameItem
    h6.innerText = `R$ ${card.value}`
    but.innerText = "Remover produto"
    figure.appendChild(img)
    section.append(h5, h6, but)
    li.append(figure, section)
    ulCarrinho.appendChild(li)

    quantidade ++
    
    
    but.addEventListener("click", function(event){
        let li = event.path[2]
        li.remove()
    })
}

