let novoElemento = document.createElement("p"); //Nova tag/elemento que quero criar
let texto = document.createTextNode("Algum texto"); //Cria a anotação e guarda na variável "texto"

novoElemento.appendChild(texto); //Inclui um valor na tag "p", no caso, "Algum texto" 

let p = document.querySelector("#paragrafo-principal"); //Elemento pai da onde quero mexer
let pai = p.parentNode; //Referencía quem é o pai/quem está acima da onde quero mexer (parentNode), e guarda na variável pai

pai.appendChild(novoElemento); //Cria uma tag "p", com o valor "Algum texto"