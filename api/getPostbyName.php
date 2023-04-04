<?php
  header('Content-Type:application/json;charset=UTF-8');
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods:GET,POST');
  header('Access-Control-Allow-Headers: *');

  if($_SERVER['REQUEST_METHOD'] == 'GET'){
    require "connectDB.php";

    $Name = $_GET["Name"];
    $sql = "SELECT * from Task WHERE Name='$Name'";
    $result = $conn->query($sql);
    $a=array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          $b=array("ID"=>$row["ID"],"title"=>$row["Title"],"content"=>$row["Content"]);
          array_push($a,$b);
        }
    }
    echo json_encode($a);
    $conn->close();
  }
?>
