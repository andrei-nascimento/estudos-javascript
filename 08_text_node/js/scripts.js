let pSemTexto = document.getElementById("sem-texto"); //Não precisa colocar # antes do valor pois chama pelo id

let texto = document.createTextNode("Inserir este texto"); //Cria um texto para variável "texto"

pSemTexto.appendChild(texto); //Inserindo o texto (.appendChild) em um elemento já criado no código, no caso, "sem-texto"