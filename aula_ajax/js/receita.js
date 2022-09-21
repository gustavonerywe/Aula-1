//criar o objeto XMLHttpRequest
let xhttp = new XMLHttpRequest()

let url = "https://rafaelescalfoni.github.io/desenv_web/receitas.json"

let criaLista = lista => {
   /* let items = ""
    lista.forEach(item =>{
        items += `<li>${item}</li>`
    })
    return items
    */
   return lista.reduce(function(elementos, item){
       return elementos + `<li>${item}</li>`
   }, "")
}

let criaPrato = prato =>{
    return `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Receitas</title>
    <script src="./js/receita.js" defer></script>
</head >
<body>
    <h1>Receitas de Arroz</h1>
    <section class="receitas">
        <div class="receita">
            <img src="${prato.foto}" alt=${prato.nome}
            <h3>Título da receita</h3>
            <p class="descricao">${prato.descricao}</p>
            <div class="ingrediente">
                <ul>
                   ${criaLista(prato.ingredientes)}
                </ul>
            </div>
            <div class="preparo">
                <ol>
                    <li>Passo 1</li>
                    <li>Passo 2</li>
                    <li>Passo 3</li>
                </ol>

            </div>

        </div>

    </section>
</body>
</html>` }
//evento ao alterar o estado da requisição
xhttp.onreadystatechange = function(){
    //recebeu uma resposta (readyStat == 4)
    //estado de resposta é sucesso (status == 200)
    if(this.readyState == 4 && xhttp.status == 200){
        console.log(this.responseText)
        let receitas = JSON.parse(this.responseText)
        let secao = document.querySelector(".receitas")
        receitas.forEach(prato => {
            secao.innerHTML += criaPrato(prato)
        })
    }
}

//prepara a requisição
//configurar o objeto AJAX
// Parâmetro 1. verbo GET
// Parâmetro 2. caminho (URL)
// Parâmetro 3. tipo de requisição - assíncrona (true), síncrona (false).
xhttp.open("GET", url, true)

//envia a requisição
xhttp.send()