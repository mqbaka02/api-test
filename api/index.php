<?php
header('Access-Control-Allow-Origin: http://localhost:4000'); // Replace with your frontend's origin
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Allow necessary methods
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Allow necessary headers


$requested_uri= $_SERVER['REQUEST_URI'];
if($requested_uri=== '/') {
    echo "Hello world.";
} else if ($requested_uri=== '/time') {
    // echo time();
    echo date('Y-m-d H:i:s', time());
}