<?php
    //Substitui o $_POST[] tradicional 
    require_once "alunoFunc.php";
    $aluno = file_get_contents('php://input');
    //Transforma JSON em matriz associativa
    $aluno = json_decode($aluno, true);

    $media = obterMedia($aluno["nota1"], $aluno["nota2"]);
    $grau = "";
    preencherGrau($media, $grau);
    $aluno["grau"] = $grau;
    $aluno["media"] = $media;
    
    //Devolvo como JSON
    echo json_encode($aluno);
?>