<?php
    require_once "conexao.php";

    $comandoSql = "UPDATE filme SET imdb = 9.0 WHERE genero_id = 2";
    try{
        $stmt = $conexao->prepare($comandoSql);
        $stmt->execute();
        echo "Dados atualizados.";
    }catch(PDOException $e){
        echo "Erro ao tentar atualizar".$e->getMessage()."<br>";
    };
?>