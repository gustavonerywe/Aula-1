const $btnEnviar = document.querySelector('#enviar')
$btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    let genero = {
        "descricao": document.querySelector('#descricao').value
    }
    let configMetodo = {
        method: "POST",
        body: JSON.stringify(genero),
        headers: {"Content-Type":"application/json;charset=UTF-8"}
    }
    //fetch enviando o genero a ser inserido
    fetch("../controller/generoInserir.php", configMetodo)
        .then(function(resposta){
            if(!resposta.ok===true){
                let msg = resposta.status + " - " + resposta.statusText
                document.querySelector("#msgErro").textContent = msg
            }
            else
                return resposta.json();
        })
        .then(function(respostaJSON){
            if(respostaJSON.erro===false)
                cbSucessoInserirGenero(respostaJSON);
            else
                document.querySelector("#msgErro").textContent = respostaJSON.msgErro;
        })
        .catch(function(erro){
            document.querySelector('#msgSucesso').textContent = erro
        })
})

function cbSucessoInserirGenero(respostaJSON){
    document.querySelector("#msgSucesso").textContent = respostaJSON.msgSucesso
    setTimeout(function(){
        window.location.href = "../view/generos.html"
    },3500)
}
