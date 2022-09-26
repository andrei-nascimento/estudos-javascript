let novoElemento = document.createElement("p"); //Nova tag/elemento que quero criar
let texto = document.createTextNode("Algum texto"); //Cria a anotação e guarda na variável "texto"

novoElemento.appendChild(texto); //Inclui um valor na tag "p", no caso, "Algum texto" 

let heading = document.querySelector('#titulo-principal'); //Define a variável "heading" como "titulo-principal"
let paiHeading = heading.parentNode; ////Referencía quem é o pai/quem está acima da onde quero mexer (.parentNode), e guarda na variável "paiHeading"

paiHeading.replaceChild(novoElemento, heading); //Trocou "Algum titulo" por "Algum texto" - (Novo elemento e antigo elemento em parênteses)

//Repõe um antigo elemento no DOM, com um novo.