const $formAluno = document.querySelector('form');
$formAluno.addEventListener('submit', (e)=>{
    //prevenindo o comportamento padrão do (e)
    //o (e) vai representar o elemento do formulário
    e.preventDefault();
    //extrair os dados do formulário e criar um objeto literal aluno
    let aluno = {
        nome: document.querySelector("#nome").value,
        nota1: parseFloat(document.querySelector("#nota1").value),   
        nota2: parseFloat(document.querySelector("#nota2").value)
    };
    //fazer requisição ajax/ajaj com XmlHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "processaAluno.php");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(aluno));
    //Monitorar mudanças de etados
    xhr.onreadystatechange = function(){
        console.log("Estado atual...",xhr.readyState);
        if(xhr.readyState === 4){
            if(xhr.status === 200 || xhr.status === 304){
                console.log(xhr.responseText)
                alunoJSON = JSON.parse(xhr.responseText);
                console.log(alunoJSON)
                preencherSpans(alunoJSON);
            }
            else{
                limparSpans();
                let msgErro = xhr.status+' - '+xhr.statusText
                document.querySelector("#erro").textContent = msgErro
            }
        }
    }
});//Fim do addEventListener

function limparSpans(){
    document.querySelector("#dados").textContent="";
    document.querySelector("#alunoNome").textContent="";
    document.querySelector("#alunoMedia").textContent="";
    document.querySelector("#alunoGrau").textContent="";
}
//textContent serve para mostrar o conteúdo de texto, diferentemente do innerHTML que interpreta as TAGS. Ou seja, o textContent não interpreta as tags

function preencherSpans(aluno){
    document.querySelector("#dados").textContent="Informações do aluno";
    document.querySelector("#alunoNome").textContent="Nome: " + aluno.nome;
    document.querySelector("#alunoMedia").textContent="Média: " + aluno.media;
    document.querySelector("#alunoGrau").textContent="Grau: " + aluno.grau;
}
