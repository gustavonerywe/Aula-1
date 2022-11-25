<?php
    $dsn = 'mysql:hosto=localhost;dbname=empresa;charset=utf8';
    $usuario = 'root';
    $senha = '';
    $conexao = null;
    try{
        $conexao = new PDO($dsn, $usuario, $senha);
        $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "fofo<br>";
        echo "<pre>";
        print_r($conexao);
        echo "</pre>";
    }catch(PDOException $e){
        echo "Conexão paia :-(<br>";
        echo "<pre>";
        print_r($e);
        echo "</pre>";
    }

?>