<?php
    require_once "conexao.php";

    $comandoSqlOne = "UPDATE produto SET preco = 3.50 WHERE id = 3";
    $comandoSqlTwo = "UPDATE produto SET preco = 65.99 WHERE id = 7";

    try{
        $conexao->exec($comandoSqlOne);
        $conexao->exec($comandoSqlTwo);
    }catch(PDOException $e){
        echo "Erro ao tentar atualizar".$e->getMessage()."<br>";
    };
?>