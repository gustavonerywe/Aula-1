fetch("../controller/generoListar.php")
    .then(function(resposta){
        if(! resposta.ok===true){
            let msg = resposta.status + " - " + resposta.statusText
            document.querySelector('#msgErro').textContent =  msg
        }else
            return resposta.json();
    })
    .then(function(respostaJSON){
        if(respostaJSON.erro===false){
            cbSucessoListarGenero(respostaJSON)
        }
        else
            document.querySelector('#msgErro').textContent = respostaJSON.msgErro
    })
    .catch(function(erro){
        document.querySelector('#msgErro').textContent = erro
    })

    function cbSucessoListarGenero(respostaJSON){
        montarTabela(respostaJSON.dados);
    }

    function montarTabela(dados){
        for (const i in dados){
            let genero = dados[i]
            const $tr = document.createElement('tr')
            criarTDePendurar($tr, genero.id, false);
            criarTDePendurar($tr, genero.descricao, false)
            let links = "<a href=generoFormBuscar.html?id="+genero.id+">[Editar]</a>"
            links+= "<a href=# >[Excluir]</a>"
            criarTDePendurar($tr, links, true)
            document.querySelector('tbody').appendChild($tr)
        }
    }

    const $corpoTabela = document.querySelector('tbody')
    $corpoTabela.addEventListener('click', function(event){
        let link = event.target;
        let generoAExcluir = obterValorDaColunaId(link);
        if(generoAExcluir>0){
            excluirGenero(generoAExcluir);
        }else
            document.querySelector('$msgErro').textContent = "valor inválido para exclusão"
    });

    function obterValorDaColunaId(link){
        if(link.textContent === "[Excluir]"){
            let coluna = link.parentNode;
            let linha = coluna.parentNode;
            let idText = linha.firstChild;
            return parseInt(idText.textContent)
        }
        return null
    }

    function criarTDePendurar(noPai, informacao, ehHtml){
        let td = document.createElement('td')
        if(ehHtml)
            td.innerHTML = informacao
        else 
            td.textContent = informacao
        noPai.appendChild(td);
    }
