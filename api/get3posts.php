<?php
  header('Content-Type:application/json;charset=UTF-8');
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods:GET,POST');
  header('Access-Control-Allow-Headers: *');

  if($_SERVER['REQUEST_METHOD'] == 'GET'){
    require "connectDB.php";

    $sql = "SELECT Title,Content from Task ORDER BY upd DESC LIMIT 3";
    $result = $conn->query($sql);
    $a=array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          $b=array("Title"=>$row["Title"],"Content"=>$row["Content"]);
          array_push($a,$b);
        }
    }
    echo json_encode($a);
    $conn->close();
  }
?>
