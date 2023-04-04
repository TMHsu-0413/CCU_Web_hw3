<?php
  header('Content-Type:application/json;charset=UTF-8');
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods:GET,POST');
  header('Access-Control-Allow-Headers: *');

  if($_SERVER['REQUEST_METHOD'] == 'POST'){
    require "connectDB.php";
    $input = file_get_contents('php://input');
    $input=json_decode($input);

    $title = $input->title;
    $content = $input->content;
    $name = $input->name;

    $sql = "INSERT INTO Task (Title,Content,Name,upd) VALUES ('$title','$content','$name',CURRENT_TIMESTAMP)";
    $result = $conn->query($sql);
    $conn->close();
  }
?>

