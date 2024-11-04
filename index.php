<?php
$requested_url= $_SERVER['REQUEST_URI'];
// echo $requested_url;
$content= file_get_contents('views/main.php');
echo $content;
exit();