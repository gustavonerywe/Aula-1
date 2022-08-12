<?php
    //Arquivo destino.php

if(! empty($_POST['nome']))
    echo 'Nome: ', $_POST['nome'], '<br>';
if(! empty($_POST['email']))
    echo 'Email: ', $_POST['email'], '<br>';
?>