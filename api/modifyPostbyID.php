<?php
  header('Content-Type:application/json;charset=UTF-8');
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods:GET,POST,PUT');
  header('Access-Control-Allow-Headers: *');

  if($_SERVER['REQUEST_METHOD'] == 'PUT'){
    require "connectDB.php";

    $input = file_get_contents('php://input');
    $input=json_decode($input);

    $id = $input->ID;
    $title = $input->title;
    $content = $input->content;

    $sql = "UPDATE Task SET Title='$title',Content='$content',upd=CURRENT_TIMESTAMP WHERE ID = $id";
    $result = $conn->query($sql);
    $conn->close();
  }
?>


