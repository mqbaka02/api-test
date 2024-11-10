<?php
header('Access-Control-Allow-Origin: http://localhost:4000'); // Replace with your frontend's origin
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Allow necessary methods
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Allow necessary headers


$requested_uri= $_SERVER['REQUEST_URI'];
// echo $requested_uri;
// exit();
if($requested_uri=== '/') {
    echo "Hello world.";
} else if ($requested_uri=== '/time') {
    // echo time();
    $timezone = new DateTimeZone('Indian/Antananarivo');
    $date = new DateTime('now', $timezone);
    echo $date->format('Y-m-d H:i:s');
    // echo date('Y-m-d H:i:s', time());
} else if ($requested_uri=== '/hello') {
    $data= json_decode(file_get_contents('php://input'), true);
    $data_stringed= 'Hello ' . $data['name'] . ', you are ' . $data['age'] . ' years old and you are from ' . $data['city'] . '.';
    echo $data_stringed;
}

