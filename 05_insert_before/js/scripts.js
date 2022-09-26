let novoElemento = document.createElement("p"); //Nova tag/elemento que quero criar
let texto = document.createTextNode("Algum texto"); //Cria a anotação e guarda na variável "texto"

novoElemento.appendChild(texto); //Inclui um valor na tag "p", no caso, "Algum texto" 

let elementoAlvo = document.querySelector("#titulo-principal"); //Tag/Elemento que está ABAIXO da onde quero criar
let elementoPai = document.querySelector("#container-principal"); //Tag/Elemento que está ACIMA da onde quero criar

elementoPai.insertBefore(novoElemento, elementoAlvo); //Incluindo nova tag "p" no elemento antes de "elementoAlvo" e depois de "elementoPai"


//EXERMPLO DE NÓ DE TEXTO