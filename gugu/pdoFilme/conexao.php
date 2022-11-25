<?php
    $dsn = 'mysql:hosto=localhost;cine2=;charset=utf8';
    $usuario = 'root';
    $senha = '';
    $conexao = null;
    try{
        $conexao = new PDO($dsn, $usuario, $senha);
        $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Conexão estabelecida.<br>";
        echo "<pre>";
        print_r($conexao);
        echo "</pre>";
    }catch(PDOException $e){
        echo "Conexão não estabelecida.<br>";
        echo "<pre>";
        print_r($e);
        echo "</pre>";
    }

?>