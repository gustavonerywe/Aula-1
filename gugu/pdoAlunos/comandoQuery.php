<?php
	require_once "conexao.php";
    //SELECT fetchAll()
    /*$comandoSql="SELECT * FROM user";

    try{
        $retorno = $conexao->query($comandoSql);
        $usuarios = $retorno->fetchAll();
        echo "<pre>";
        var_dump($usuarios);
        echo "</pre>";
        echo "<hr>";
        echo "Acessando a posição 0 pelo nome das colunas....<br>";
        echo "Id: {$usuarios[0]['id']} - login: {$usuarios[0]['login']}<br>";
        echo "<hr>";
        echo "Acessando a posição 0 pelo índice das colunas....<br>";
        echo "Id: {$usuarios[0][0]} - login: {$usuarios[0][1]}<br>";
        echo "Consulta ok.<br>";
    }catch(PDOException $e){
        echo "Erro ao tentar consultar.".$e->getMessage()."<br>";
    }*/
    //SELECT com fetchAll turbinado
    $comandoSql="SELECT * FROM user";

    try{
        $retorno = $conexao->query($comandoSql);
        $usuarios = $retorno->fetchAll(PDO::FETCH_ASSOC);
        echo "<pre>";
        var_dump($usuarios);
        echo "</pre>";
        echo "<hr>";
        echo "Acessando a posição 0 pelo nome das colunas....<br>";
        echo "Id: {$usuarios[0]['id']} - login: {$usuarios[0]['login']}<br>";
        //echo "Id: {$usuarios[0]->id} - login: {$usuarios[0]->login}<br>";
        /*echo "<hr>";
        echo "Acessando a posição 0 pelo índice das colunas....<br>";
        echo "Id: {$usuarios[0][0]} - login: {$usuarios[0][1]}<br>";*/
        echo "Consulta ok.<br>";
    }catch(PDOException $e){
        echo "Erro ao tentar consultar.".$e->getMessage()."<br>";
    }

?>