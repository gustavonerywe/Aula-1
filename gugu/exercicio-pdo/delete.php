<?php
    require_once "conexao.php";

    $comandoSql = "DELETE FROM produto WHERE id = 1";

    try{
       $return = $conexao->exec($comandoSql);
    }catch(PDOException $e){
        echo "Erro ao tentar deletar".$e->getMessage()."<br>";
    };
?>