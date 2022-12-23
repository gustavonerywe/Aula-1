<?php
    require_once("../model/conexao.php");
    $generoPost = file_get_contents('php://input');
    $generoMatriz = json_decode($generoPost, true);
    $descricao = (isset($generoMatriz["descricao"]) && $generoMatriz["descricao"] != null) ?  strtoupper($generoMatriz["descricao"]) : "";

    $resposta["erro"] = false;$resposta["dados"] = null;
    $resposta["msgErro"] = "";$resposta["msgSucesso"] = "";
    if($descricao != ""){
        try {
            $sql = "INSERT INTO generos(descricao) VALUES(?)";
            $stmt = $conexao->prepare($sql);
            $stmt->bindParam(1, $descricao);
            $stmt->execute();
            $resposta["msgSucesso"] = "{$stmt->rowCount()} genero inserido com sucesso! o id inserido foi {$conexao->lastInsertId()}";
        }catch(PDOException $e){
            $resposta["erro"] = true;
            $resposta["msgErro"] = "Erro ao listar generos ".$e->getMessage();
    }finally{
        echo json_encode($resposta);
    }
    }
?>