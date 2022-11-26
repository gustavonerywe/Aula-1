<?php
     $dsn = 'mysql:host=localhost;dbname=cine2;charset=utf8';
     $usuario = 'root';
     $senha = '';
     $conexao = null;
     try{
         $conexao = new PDO($dsn, $usuario, $senha);
         $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
         echo "Conexão estabelecida.<br>";
     }catch(PDOException $e){
         echo "Conexão não estabelecida.<br>";
     }
?>