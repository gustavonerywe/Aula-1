let xhttp = new XMLHttpRequest();
let url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";

//Criação de Elenco
let = createCast = filme => {
    /*let items = ""
    filme.forEach(item =>{
        items += `<li>${item}</li>`
    })
    return items
    */
   return filme.elenco.reduce(function(elementos, item){
    return elementos + `<li>${item}</li>`
   }, "")
}

//Criação de Opinião
let = createOpinion = filme => {
    /*let items = ""
    filme.forEach(item =>{
        items += `<li>${item}</li>`
    })
    return items
    */
    return filme.opinioes.reduce(function(elementos, item){
     return elementos + `<li>${item}</li`
    }, "")
    }
    

//Criação de títulos


//Procurar títulos

//Criação de Gêneros
let createGenre = filme => {
    /*let items = ""
    filme.forEach(item =>{
        items += `<li>${item}</li>`
    })
    return items
    */
   return filme.generos.reduce(function(elementos, item){
    return elementos + `<li>${item}</li>`
   }, "")
} 

//Criação da Apresentação
let createPresentation = filme =>{
    return `
    <div class="filme">
    <img src="${filme.figura}" alt="${filme.titulo}">
    <h3>${filme.titulo}</h3>
    <p class="descricao">${filme.resumo}</p>
    <div class="genero">
        <ul>
            ${createGenre(filme)}
        </ul>
    </div>
    <div class="elenco">
        <ul>
            ${createCast(filme)} 
        </ul>
    </div>
    <div class="titulos semelhantes">
            ${createOpinion(filme)}
    </div>
    
</div> `
}

//evento ao alterar o estado da requisição
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && xhttp.status == 200){
        console.log(this.responseText)
        let filmes = JSON.parse(this.responseText)
        let section = document.querySelector(".filmes")
        filmes.forEach(filmes => {
            console.log(filmes)
            section.innerHTML += createPresentation(filmes)
        })
    }
}
                                                                                                                

//Preparação da Requisição
xhttp.open("GET", url, true)

//Envio da Requisição
xhttp.send()