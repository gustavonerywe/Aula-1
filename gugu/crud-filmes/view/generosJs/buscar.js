//Ao carregar a página
window.onload = function(){
    //Pgue o parâmetro id contido na query string da url
    let qs = window.location.search.replace('?', '');
    let parametrosBuscar = qs.split('=');
    let id = parametrosBuscar[1];
    buscarGenero(id)
}
//Busca um gênero com base no id recuperado na queryString
function buscarGenero(id){
    //fetch enviando o id do genero a ser recuperado
    fetch("../controller/generoBuscar.php?id="+id+"")
        .then(function(resposta){
            if(!resposta.ok===true){
                let msg = resposta.status + " - " + resposta.statusText
                document.querySelector('#msgErro').textContent = msg
            }
            else
                return resposta.json();
        })
        .then(function(respostaJSON){
            if(respostaJSON.erro===false){
                cbSucessoBuscarGenero(respostaJSON);
                document.querySelector('#msgSucesso').textContent = respostaJSON.msgSucesso
                setTimeout(function(){
                    document.querySelector("#msgSucesso").textContent = "";
                }, 2500)
            }else
                document.querySelector('#msgSucesso').textContent = respostaJSON.msgErro;
        })
        .catch(function(erro){
            document.querySelector('#msgSucesso').textContent = erro;
        })
}

function cbSucessoBuscarGenero(respostaJSON){
    let genero = respostaJSON.dados;

    document.querySelector('#id').value = genero.id;
    document.querySelector("#descricao").value = genero.descricao;
}