<?php
    require_once "conexao.php";

    $comandoSql = "SELECT * FROM produto LIMIT 1";

    try{
        $return = $conexao->query($comandoSql);
    $product = $return->fetchAll(PDO::FETCH_ASSOC);
    echo "Id: {$products[0]['id']}";
    echo "Descricao: {$products[0]['descricao']}";
    echo "Preco: {$products[0]['preco']}";
    echo "Estoque: {$products[0]['estoque']}";

    echo "Consulta ok!";
    }catch(PDOException $e){
        echo "Erro ao tentar consultar.".$e.getMessage()."<br>";
    }
?>