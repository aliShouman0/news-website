<?php
//connection file
header("Access-Control-Allow-Origin: * ");
$host = 'localhost';
$db_user = "root";
$db_pass = null;
$db_name = 'news_db';

//create conx between php file and db
$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);
