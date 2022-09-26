let lista = document.createElement('ul'); //Cria uma lista não ordenada e armazena na variável "lista"

for(i = 0; i < 5; i++) { //Cria um loop que se repete 5x
    
    let item = document.createElement('li'); //Cria um item (li) e armazena na variável "item"

    let texto = document.createTextNode('texto lista' + i); //Cria um texto e armazena na variável "texto"
    
    item.appendChild(texto); //Define o texto "texto lista" na variável item onde está o "li"

    lista.appendChild(item); //Define o item "li" na variável lista (ul) 
}

let container = document.getElementById('container-principal'); //Seleciona a div "container-principal" e armazena na variável container

container.appendChild(lista); //Insere a lista dentro do container "container-principal"