<?php
  header('Content-Type:application/json;charset=UTF-8');
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods:GET,POST,DELETE');
  header('Access-Control-Allow-Headers: *');

  if($_SERVER['REQUEST_METHOD'] == 'DELETE'){
    require "connectDB.php";
    $input = file_get_contents('php://input');
    $input=json_decode($input);

    $ID = $input->ID;

    $sql = "DELETE FROM Task WHERE ID=$ID";
    $result = $conn->query($sql);
    $conn->close();
  }
?>


