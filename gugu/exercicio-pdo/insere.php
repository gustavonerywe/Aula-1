<?php
    require_once "conexao.php";

    $produtos = array(
        array('descricao'=>'Salsicha', 'preco'=>4.99, 'estoque'=>6),
        array('descricao'=>'Alface', 'preco'=>5.99, 'estoque'=>8),
        array('descricao'=>'Iogurte', 'preco'=>2.99, 'estoque'=>12),
        array('descricao'=>'Cerveja', 'preco'=>6.99, 'estoque'=>10),
        array('descricao'=>'Lasanha', 'preco'=>12.99, 'estoque'=>4),
        array('descricao'=>'Biscoito', 'preco'=>3.99, 'estoque'=>24),
        array('descricao'=>'Picanha', 'preco'=>61.99, 'estoque'=>8),
        array('descricao'=>'Pizza', 'preco'=>10.99, 'estoque'=>13),
        array('descricao'=>'Arroz', 'preco'=>7.99, 'estoque'=>22),
        array('descricao'=>'Geleia de uva', 'preco'=>2.99, 'estoque'=>19)
    );
    echo "<pre>";
    print_r($produtos);
    echo "</pre>";
    $comandoSql = "INSERT INTO produto(descricao, preco, estoque)";

    try{
        foreach($produtos as $p){
            $return = $conexao->exec($comandoSql."VALUES('$p[descricao]', $p[preco], $p[estoque])");
        }
        echo "Dado inserido. {$return}";
    }catch(PDOException $e){
        echo "Erro ao tentar inserir.".$e->getMessage()."<br>";
    }
?>