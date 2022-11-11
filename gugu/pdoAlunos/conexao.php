<?php
	$dsn = 'mysql:host=localhost;dbname=test;charset=utf8';
    $usuario = 'root';
    $senha = '';
    $conexao = null;
    try{
        //$conexao recebe uma conexão com uma base de dados específica
         $conexao = new PDO($dsn, $usuario, $senha);
         $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
         echo "Conexão efetuada com sucesso!<br>";
         echo "<pre>";
         print_r($conexao);
         echo "</pre>";
    }catch(PDOException $e){
        echo "Erro ao conectar com o banco de dados.".$e->getMessage();
        echo "<pre>";
        print_r($e);
        echo "</pre>";
    }
    
?>