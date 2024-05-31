<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tupstudententry";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO entry_logs (entry_id, student_id, entry_type, location, college_name, department_name) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $entry_id, $student_id, $entry_type, $location, $college_name, $department_name);

// Set parameters and execute
$entry_id = $_POST['entry-id'];
$student_id = $_POST['student-id'];
$entry_type = $_POST['entry-type'];
$location = $_POST['location'];
$college_name = $_POST['college-name'];
$department_name = $_POST['department-name'];

if ($stmt->execute()) {
  echo "New record created successfully";
} else {
  echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
