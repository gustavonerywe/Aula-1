<?php

require_once "conexao.php";

try{
    $stmt = $conexao->prepare("SELECT * FROM filme LIMIT 1");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo 'ID: '.$row->id.' - ';
            echo 'Título: '.$row->titulo.' - ';
            echo 'IMBD: '.$row->imdb.'. ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}

try{
    $stmt = $conexao->prepare("SELECT * FROM genero LIMIT 1");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo 'Descrição do gênero -> '.$row->descricao; ' . ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}


?>