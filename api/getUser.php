<?php
  header('Content-Type:application/json;charset=UTF-8');
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods:GET,POST');
  header('Access-Control-Allow-Headers: *');

  if($_SERVER['REQUEST_METHOD'] == 'GET'){
    require "connectDB.php";
    $sql = "SELECT * FROM User";
    $result = $conn->query($sql);
    $a=array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          $b=array("Name"=>$row["Name"],"ID"=>$row["ID"]);
          array_push($a,$b);
        }
    }
    echo json_encode($a);
    $conn->close();
  }
?>
