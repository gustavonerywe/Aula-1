<?php
    require_once "conexao.php";
    try{
        $return = $conexao->query("SELECT * FROM produto"); 
        if($return){
            while($row = $return->fetch(PDO::FETCH_OBJ)){
                echo 'ID: '.$row->id.' - ';
                echo 'Descrição: '.$row->descricao.' , ';
                echo 'Preço: '.$row->preco.' , ';
                echo 'Estoque: '.$row->estoque.'.';
                echo '<br>';
            }
           /* $produtos = $return->fetch(PDO::FETCH_OBJ);
            foreach($produtos as $row){
                echo 'ID: '.$row->id.' - ';
                echo 'Descrição: '.$row->descricao.' , ';
                echo 'Preço: '.$row->preco.' , ';
                echo 'Estoque: '.$row->estoque.'.';
                echo '<br>';
            }*/

    }
    }catch(PDOException $e){
        echo "Ocorreu query error".$e->getMessage()."<br>";
    }
?>