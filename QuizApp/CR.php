 <?php
 $servername = "localhost";
 $username = "harry";
 $password = "";
 $dbname = "webdev";
 ini_set('display_errors', 1);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection=
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// prepare and bind
if($_POST['action'] == 'Submit'){
	$stmt = $conn->prepare("INSERT INTO Assignment4_Quiz (Name, Attempt, Score, dates) VALUES (?, ?, ?, ?)");
$stmt->bind_param("siss", $Name, $Attempt, $Score, $dates);
}
else if($_POST['action'] == 'update'){
	$stmt = $conn ->prepare("UPDATE Assignment4_Quiz
SET Name = ?, Attempt = ?, Score = ?, dates = ?
WHERE id = ?;");
$stmt->bind_param("sisis", $Name, $Attempt, $Score, $dates);
$id = $_POST['id'];
}

// set parameters and execute
$Name      = $_POST['Name'];
$Attempt   = $_POST['Attempt'];
$Score     = $_POST['Score'];
$dates     = $_POST['dates'];
$stmt->execute();

echo "New records created successfully";
header('location: app.php');

$stmt->close();
$conn->close();
?>
