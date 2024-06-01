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

// Get POST data
$entry_id = $_POST['entry-id'];
$student_id = $_POST['student-id'];
$entry_type = $_POST['entry-type'];
$location_name = $_POST['location'];
$college_name = $_POST['college-name'];
$department_name = $_POST['department-name'];

// Prepare statements
$conn->begin_transaction();

try {
    // Check if student exists, if not insert
    $stmt = $conn->prepare("SELECT student_name FROM students WHERE student_id = ?");
    $stmt->bind_param("s", $student_id);
    $stmt->execute();
    $stmt->store_result();
    if ($stmt->num_rows == 0) {
        $student_name = 'Unknown';
        $stmt = $conn->prepare("INSERT INTO students (student_id, student_name) VALUES (?, ?)");
        $stmt->bind_param("ss", $student_id, $student_name);
        $stmt->execute();
    } else {
        $stmt->bind_result($student_name);
        $stmt->fetch();
    }
    $stmt->close();

    // Check if location exists, if not insert
    $stmt = $conn->prepare("SELECT location_id FROM locations WHERE location_name = ?");
    $stmt->bind_param("s", $location_name);
    $stmt->execute();
    $stmt->store_result();
    if ($stmt->num_rows == 0) {
        $stmt = $conn->prepare("INSERT INTO locations (location_name) VALUES (?)");
        $stmt->bind_param("s", $location_name);
        $stmt->execute();
    }
    $stmt->close();

    // Check if college exists, if not insert
    $stmt = $conn->prepare("SELECT college_id FROM colleges WHERE college_name = ?");
    $stmt->bind_param("s", $college_name);
    $stmt->execute();
    $stmt->store_result();
    if ($stmt->num_rows == 0) {
        $stmt = $conn->prepare("INSERT INTO colleges (college_name) VALUES (?)");
        $stmt->bind_param("s", $college_name);
        $stmt->execute();
    }
    $stmt->close();

    // Check if department exists, if not insert
    $stmt = $conn->prepare("SELECT department_id FROM departments WHERE department_name = ?");
    $stmt->bind_param("s", $department_name);
    $stmt->execute();
    $stmt->store_result();
    if ($stmt->num_rows == 0) {
        $stmt = $conn->prepare("INSERT INTO departments (department_name) VALUES (?)");
        $stmt->bind_param("s", $department_name);
        $stmt->execute();
    }
    $stmt->close();

    // Insert entry log with the actual values, including entry_id
    $stmt = $conn->prepare("INSERT INTO entry_logs (entry_id, student_id, student_name, entry_type, location, college_name, department_name) VALUES (?,?,?,?,?,?,?)");
    $stmt->bind_param("sssssss", $entry_id, $student_id, $student_name, $entry_type, $location_name, $college_name, $department_name);
    $stmt->execute();

    $conn->commit();
    echo "New record created successfully";
} catch (Exception $e) {
    $conn->rollback();
    echo "Error: ". $e->getMessage();
}

$conn->close();
?>
