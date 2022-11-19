<?php
    require_once "conexao.php";

    try{
        $return = $conexao->query("SELECT * FROM produto LIMIT 1");
        if($return){
            while($row = $return->fetch(PDO::FETCH_OBJ)){
                echo 'ID: '.$row->id.' - ';
                echo 'Descrição: '.$row->descricao.' , ';
                echo 'Preço: '.$row->preco.' , ';
                echo 'Estoque: '.$row->estoque.'.';
            }
        }
    }catch(PDOException $e){
        echo "Um erro ocorreu.".$e.getMessage()."<br>";
    }
?>