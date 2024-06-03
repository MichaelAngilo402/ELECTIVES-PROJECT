<?php 

include 'db_config.php';

session_start();

if (isset($_POST['submit'])){

    $entid = $_POST['entry-id'];
    $studid = $_POST['student-id'];
    $enttype = $_POST['entry-type'];

}

$conn->close();





