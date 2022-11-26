<?php
     require_once "conexao.php";

     $comandoSql = "DELETE FROM filme WHERE id = 9";
 
     try{
        $stmt = $conexao->prepare($comandoSql);
        $stmt->execute();
        echo "<br>";
        echo "Dado deletado.";
     }catch(PDOException $e){
         echo "Erro ao tentar deletar".$e->getMessage()."<br>";
     };
?>