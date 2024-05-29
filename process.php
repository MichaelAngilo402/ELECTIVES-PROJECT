<?php

// Check connection status
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['submit-btn'])) {
    $conn = mysqli_connect('localhost', 'root', '', 'tupstudententry')
 }

$conn->close();
?>
