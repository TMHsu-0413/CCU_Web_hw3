<?php

$servername="127.0.0.1";
$username="root";
$password="root";
$dbname="611410086";


$conn = mysqli_connect($servername, $username, $password,$dbname);

if($conn->connect_error){
  die("Connection failed" . $conn->connect_error);
}
echo "Connection success";

?>
