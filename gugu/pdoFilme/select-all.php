<?php

require_once "conexao.php";

try{
    $stmt = $conexao->prepare("SELECT * FROM filme LIMIT 1");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo 'ID: '.$row->id.' - ';
            echo 'Título: '.$row->titulo.' - ';
            echo 'IMBD: '.$row->imdb.'. ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}

try{
    $stmt = $conexao->prepare("SELECT * FROM genero WHERE id = 5");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo 'Descrição do gênero -> '.$row->descricao; ' . ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}

try{
    $stmt = $conexao->prepare("SELECT * FROM filme WHERE id = 3");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo "<br>";
            echo 'ID: '.$row->id.' - ';
            echo 'Título: '.$row->titulo.' - ';
            echo 'IMBD: '.$row->imdb.'. ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}

try{
    $stmt = $conexao->prepare("SELECT * FROM genero WHERE id = 1");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo 'Descrição do gênero -> '.$row->descricao; ' . ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}

try{
    $stmt = $conexao->prepare("SELECT * FROM filme WHERE id = 4");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo "<br>";
            echo 'ID: '.$row->id.' - ';
            echo 'Título: '.$row->titulo.' - ';
            echo 'IMBD: '.$row->imdb.'. ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}

try{
    $stmt = $conexao->prepare("SELECT * FROM genero WHERE id = 2");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo 'Descrição do gênero -> '.$row->descricao; ' . ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}

try{
    $stmt = $conexao->prepare("SELECT * FROM filme WHERE id = 5");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo "<br>";
            echo 'ID: '.$row->id.' - ';
            echo 'Título: '.$row->titulo.' - ';
            echo 'IMBD: '.$row->imdb.'. ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}

try{
    $stmt = $conexao->prepare("SELECT * FROM genero WHERE id = 3");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo 'Descrição do gênero -> '.$row->descricao; ' . ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}

try{
    $stmt = $conexao->prepare("SELECT * FROM filme WHERE id = 6");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo "<br>";
            echo 'ID: '.$row->id.' - ';
            echo 'Título: '.$row->titulo.' - ';
            echo 'IMBD: '.$row->imdb.'. ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}

try{
    $stmt = $conexao->prepare("SELECT * FROM genero WHERE id = 4");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo 'Descrição do gênero -> '.$row->descricao; ' . ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}


try{
    $stmt = $conexao->prepare("SELECT * FROM filme WHERE id = 7");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo "<br>";
            echo 'ID: '.$row->id.' - ';
            echo 'Título: '.$row->titulo.' - ';
            echo 'IMBD: '.$row->imdb.'. ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}

try{
    $stmt = $conexao->prepare("SELECT * FROM genero WHERE id = 2");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo 'Descrição do gênero -> '.$row->descricao; ' . ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}


try{
    $stmt = $conexao->prepare("SELECT * FROM filme WHERE id = 8");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo "<br>";
            echo 'ID: '.$row->id.' - ';
            echo 'Título: '.$row->titulo.' - ';
            echo 'IMBD: '.$row->imdb.'. ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}

try{
    $stmt = $conexao->prepare("SELECT * FROM genero WHERE id = 4");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo 'Descrição do gênero -> '.$row->descricao; ' . ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}

try{
    $stmt = $conexao->prepare("SELECT * FROM filme WHERE id = 10");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo "<br>";
            echo 'ID: '.$row->id.' - ';
            echo 'Título: '.$row->titulo.' - ';
            echo 'IMBD: '.$row->imdb.'. ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}

try{
    $stmt = $conexao->prepare("SELECT * FROM genero WHERE id = 4");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo 'Descrição do gênero -> '.$row->descricao; ' . ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}

try{
    $stmt = $conexao->prepare("SELECT * FROM filme WHERE id = 11");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo "<br>";
            echo 'ID: '.$row->id.' - ';
            echo 'Título: '.$row->titulo.' - ';
            echo 'IMBD: '.$row->imdb.'. ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}

try{
    $stmt = $conexao->prepare("SELECT * FROM genero WHERE id = 4");
    $stmt->execute();
    if($stmt){
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            echo 'Descrição do gênero -> '.$row->descricao; ' . ';
        }
    }
}catch(PDOException $e){
    echo "Um erro ocorreu.".$e->getMessage()."<br>";
}
?>