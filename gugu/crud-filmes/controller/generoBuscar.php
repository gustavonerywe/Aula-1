<?php
   require_once("../model/conexao.php");
   $id = (isset($_GET["id"]) && $_GET["id"]>0) ? $_GET["id"] : null;
   
   $resposta["erro"] = false;$resposta["dados"] = null;
   $resposta["msgErro"] = "";$resposta["msgSucesso"] = "";

   try{
    $sql = "SELECT * FROM generos WHERE id = ?";
    $stmt = $conexao->prepare($sql);
    $stmt->bindParam(1, $id);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $resposta["dados"] = $result[0];
    $resposta["msgSucesso"] = "Genero de id {$id} retornado com sucesso!";
   }catch(PDOException $e){
    $resposta["erro"] = true;
    $resposta["msgErro"] = "Erro ao listar generos ".$e->getMessage();
   }finally{
    echo json_encode($resposta);
   }
?>