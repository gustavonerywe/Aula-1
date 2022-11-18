<?php
    require_once "conexao.php";

    $comandoSql="SELECT * FROM user ORDER BY login";

    try{
        $retorno = $conexao->query($comandoSql);
        $usuarios = $retorno->fetchAll(PDO::FETCH_ASSOC);
        echo "<pre>";
        //var_dump($usuarios);
        print_r($usuarios);
        echo "</pre>";
        echo "<hr>";
        echo "Percorrendo o resultado (\$usuarios)... com o FOR <br>";
        for($i=0; $i<count($usuarios); $i++){
            echo "Id: {$usuarios[$i]['id']}<br>";
            echo "Login: {$usuarios[$i]['login']}<br>";
        }
        echo "<hr>";
        echo "Percorrendo o resultado (\$usuarios)... com o FOREACH";
        echo "<br>";
        foreach($usuarios as $u){
            echo "Id: {$u['id']}<br>";
            echo "Login: {$u['login']}<br>";
        }
        echo "<hr>";

        echo "Percorrendo o resultado (\$usuarios)... com o FOREACH com CHAVE e VALOR";
        echo "<br>";
        foreach($usuarios as $u){
            foreach($u as $key => $value){
                echo "{$key} : {$value}";
            }
            echo "<br>";
        }
        echo "<hr>";
        echo "Consulta ok.<br>";
    }catch(PDOException $e){
        echo "Erro ao tentar consultar.".$e->getMessage()."<br>";
    }
?>