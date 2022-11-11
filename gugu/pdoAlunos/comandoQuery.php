<?php
	require_once "conexao.php";
   
    //SELECT COM O fetchALL();

    $comandoSql = "SELECT * FROM user"; 
   
    try{
        $return = $conexao->query($comandoSql);
        $usuario = $return->fetchAll();
        echo "<pre>";
        var_dump($usuario);
        echo "</pre>";
        echo "<hr>";
        echo "Acessando a posição 0 pelo nome das colunas...<br>";
        echo "Id: {$usuario[0]['id']} - login: {$usuario[0]['login']}<br>";
        echo "<hr>";
        echo "Acessando a posição 0 pelo índice das colunas...<br>";
        echo "Id: {$usuario[0][0]} - login: {$usuario[0][0]}<br>";
        echo "Consulta efetuada com sucesso! {$return}<br>";
    }catch(PDOException $e){
        echo "Erro ao tentar consultar.".$e->getMessage()."<br>";
    } 




    //SELECT COM fetchALL() turbinado



   /* $comandoSql = "SELECT * FROM user"; 
   
    try{
        $return = $conexao->query($comandoSql);
        $usuario = $return->fetchAll(PDO::FETCH_ASSOC);
        echo "<pre>";
        var_dump($usuario);
        echo "</pre>";
        echo "<hr>";
        echo "Acessando a posição 0 pelo nome das colunas...<br>";
        echo "Id: {$usuario[0]['id']} - login: {$usuario[0]['login']}<br>";
        echo "<hr>";
        echo "Acessando a posição 0 pelo índice das colunas...<br>";
        echo "Id: {$usuario[0][0]} - login: {$usuario[0][0]}<br>"
        echo "Consulta efetuada com sucesso! {$return}<br>";
    }catch(PDOException $e){
        echo "Erro ao tentar consultar.".$e->getMessage()."<br>";
    } */

    
?>