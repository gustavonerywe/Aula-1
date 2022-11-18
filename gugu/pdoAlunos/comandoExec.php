<?php
	require_once "conexao.php";
  
  //CREATE

  
    /* $comandoSql = "CREATE TABLE IF NOT EXISTS 
    user(id INT AUTO_INCREMENT PRIMARY KEY,
    login CHAR(6) NOT NULL, senha CHAR(6) NOT NULL)ENGINE=INNODB";

    try{
        $return = $conexao->exec($comandoSql);
        echo "Tabela criada (ou já existia) com sucesso! {$return}<br>";
    }catch(PDOException $e){
        echo "Erro ao tentar criar tabela.".$e->getMessage()."<br>";
    } */



    //INSERT 



   /*$comandoSql = "INSERT INTO user VALUES(1, 'rafael', '123456'), (2, 'renata', '123457'), (3, 'gustavo', '123586'), (4, 'vitor', '15487')"; 
   
    try{
        $return = $conexao->exec($comandoSql);
        echo "Foram inseridos {$return}<br>";
    }catch(PDOException $e){
        echo "Erro ao tentar inserir.".$e->getMessage()."<br>";
    } */

   /* $comandoSql = "UPDATE user set login = 'gugu' WHERE login='gustav'"; 
   
    try{
        $return = $conexao->exec($comandoSql);
        echo "Foram alterados {$return}<br>";
    }catch(PDOException $e){
        echo "Erro ao tentar alterar.".$e->getMessage()."<br>";
    } */



    //DELETE

    $comandoSql = "DELETE FROM user WHERE login='vitor'"; 
   
    try{
        $return = $conexao->exec($comandoSql);
        echo "Foram deletados {$return}<br>";
    }catch(PDOException $e){
        echo "Erro ao tentar deletar.".$e->getMessage()."<br>";
    } 

?>