<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulação de Strings</title>
</head>
<body>
   <h1>
       Neste documento, encontra-se manipulaçoes de strings.
   </h1>
   <style>
       h1{
           text-align: center;
           color: red;
       }
   </style>
<?php
    //Função empty -> irá retornar true se a função for vazia
    echo empty("");
    echo ("<br>");
    var_dump(empty("gugao<br>"));

    //strlen -> Retorna o tamanho da string
    $text1 = "KLMKLEGÇLG <br>";
    echo ("<br>");
    echo ("A quantidade de caracteres nessa string é: ").strlen($text1);

    //strpos - Retorna a posição da primeira ocorrência de uma string
    $texto = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)";
    echo ("<br>");
    var_dump(strpos($texto,'a'));
    echo ("<br>");
    var_dump(strpos($texto,'b'));
    echo ("<br>");
    var_dump(strpos($texto,'c'));
    echo ("<br>");
    var_dump(strpos($texto,'d'));
    echo ("<br>");
    var_dump(strpos($texto,'e'));
    echo ("<br>");
    var_dump(strpos($texto,'f'));
    echo ("<br>");
    var_dump(strpos($texto,'g'));
    echo ("<br>");
    var_dump(strpos($texto,'h'));
    echo ("<br>");
    var_dump(strpos($texto,'i'));
    echo ("<br>");
    var_dump(strpos($texto,'j'));
    echo ("<br>");
    var_dump(strpos($texto,'k'));
    echo ("<br>");
    var_dump(strpos($texto,'l'));
    echo ("<br>");
    var_dump(strpos($texto,'m'));
    echo ("<br>");
    var_dump(strpos($texto,'n'));
    echo ("<br>");
    var_dump(strpos($texto,'o'));
    echo ("<br>");
    var_dump(strpos($texto,'p'));
    echo ("<br>");
    var_dump(strpos($texto,'q'));
    echo ("<br>");
    var_dump(strpos($texto,'r'));
    echo ("<br>");
    var_dump(strpos($texto,'s'));
    echo ("<br>");
    var_dump(strpos($texto,'t'));
    echo ("<br>");
    var_dump(strpos($texto,'u'));
    echo ("<br>");
    var_dump(strpos($texto,'v'));
    echo ("<br>");
    var_dump(strpos($texto,'w'));
    echo ("<br>");
    var_dump(strpos($texto,'x'));
    echo ("<br>");
    var_dump(strpos($texto,'y'));
    echo ("<br>");
    var_dump(strpos($texto,'z'));
    echo ("<br><br><br>");
    
    //substr -> Retorna parte de uma string
    $texto1 = "Ola Mundo";

    echo substr( $texto1, 1).'<br>';
    echo substr( $texto1, 0, 3).'<br>';
    echo substr( $texto1, 4, 5).'<br>';

    //explode -> Divide uma string em outras strings, usando um separador

    echo "<pre>";
    print_r(explode('/', '06/11/1974'));
    echo "<pre><br>";

    echo "<pre>";
    print_r(explode(':', '15:26:07'));
    echo "<pre><br>";

    $result = print_r(explode(':', '15:25:78:98'), true);
    echo $result;

    //implode -> Divide uma string em outras string, usando um separador
    echo "<pre>";
    print_r(implode('/', array('06', '11', '1974')));
    echo "<pre><br>";

    echo "<pre>";
    print_r(implode(':', array('15', '26', '07')));
    echo "<pre><br>";

    //str_split -> Converte uma string para um array

    echo "<pre>";
    print_r(str_split('Fluminense'));
    echo "<pre><br>";

    echo "<pre>";
    print_r(str_split('Fluminense', 2));
    echo "<pre><br>";

    //str_replace -> Substitui todas as ocorrências de determinada string por uma outra string de substituição

    $texto2 = 'Olá Mundo';

    echo str_replace('Mundo', 'Amigos', $texto2).'<br>';

    $texto3 = 'Bombeiro';

    echo str_replace('o', 'a', $texto3, $qtdTrocas).'<br>';

    echo $qtdTrocas.'<br>'.'<br>'.'<br>'.'<br>';

    //str_pad -> Preenche uma string de certo tamanho com outra string

    echo str_pad('Juca', 10).'<br>';
    echo str_pad('Juca', 10, '-=').'<br>';
    echo str_pad('Juca', 10, '-=', STR_PAD_LEFT).'<br>';
    echo str_pad('Juca', 10, '-=', STR_PAD_BOTH).'<br>';
    echo str_pad('Juca', 10, '-=', STR_PAD_RIGHT).'<br>';

    ?>
    </style>
</body>
</html>