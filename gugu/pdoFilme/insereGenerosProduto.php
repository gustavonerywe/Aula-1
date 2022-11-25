<?php
    require_once "conexao.php";

    $generos = array(
        array('id'=>1, 'descricao'=>'Ação'),
        array('id'=>2, 'descricao'=>'Animação'),
        array('id'=>3, 'descricao'=>'Ficção Científica'),
        array('id'=>4, 'descricao'=>'Terror'),
        array('id'=>5, 'descricao'=>'Drama'),

    );
    echo "<pre>";
    print_r($generos);
    echo "</pre>";

    $filmes = array(
      //array('descricao'=>'Alface', 'preco'=>5.99, 'estoque'=>8),
      array('titulo'=>'El Camino', 'imdb'=>9.5, 'genero_id'=>5),
      array('titulo'=>'Adão Negro', 'imdb'=>4.2, 'genero_id'=>1),
      array('titulo'=>'Ratatouille', 'imdb'=>8.5, 'genero_id'=>2),
      array('titulo'=>'Interestelar', 'imdb'=>9.5, 'genero_id'=>3),
      array('titulo'=>'Telefone Preto', 'imdb'=>8.5, 'genero_id'=>4),
      array('titulo'=>'Bob Esponja', 'imdb'=>7.5, 'genero_id'=>2),
      array('titulo'=>'Anabelle', 'imdb'=>7.5, 'genero_id'=>4),
      array('titulo'=>'A Vida Depois', 'imdb'=>6.5, 'genero_id'=>5),
      array('titulo'=>'Sorria', 'imdb'=>5.5, 'genero_id'=>4),
      array('titulo'=>'Men', 'imdb'=>8.5, 'genero_id'=>4)
    );

?>