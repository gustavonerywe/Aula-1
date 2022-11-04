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
   fetch("processaALuno.php",{
    method: "POST",
    body: JSON.stringify(aluno),
    headers: {
        "Content-Type":"application/json;"
    }
   })
   .then(resposta =>{
    console.log(resposta);
    if(resposta.ok!==true){
        limparSpans();
         let msgErro = resposta.status+" - "+resposta.statusText
        document.querySelector("#erro").textContent = msgErro
    }
    return resposta;
   })
   .then(resposta => resposta.json())
   .then(aluno =>{
    preencherSpans(aluno);
   })
   .catch(erro => console.log("Deu merda...", erro));
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

