<?php
$requested_url= $_SERVER['REQUEST_URI'];
// echo $requested_url;
$content= file_get_contents('views/main.php');
echo $content;
$timezone = new DateTimeZone('Indian/Antananarivo');
$date = new DateTime('now', $timezone);
echo $date->format('Y-m-d H:i:s');
exit();