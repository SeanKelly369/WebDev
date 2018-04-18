<?php
	$db = mysqli_connect('localhost', 'root', 'bollux39', 'cs230');

	if (isset($_POST['username_check'])) {
		$username = $_POST['username'];

		$sql = "SELECT * FROM reg WHERE username='$username'";
		$results = mysqli_query($db, $sql);

		if (mysqli_num_rows($results) > 0) {
			echo "taken";
		}else{
			echo 'not_taken';
		}
		error_log(print_r($username, TRUE));
		exit();
	}

	if (isset($_POST['fullName_check'])) {
		$fullName = $_POST['fullName'];

		$sql = "SELECT * FROM reg WHERE fullName='$fullName'";
		$results = mysqli_query($db, $sql);

		if (mysqli_num_rows($results) > 0) {
			echo "taken";
		}else{
			echo 'not_taken';
		}
		exit();
	}

	if (isset($_POST['save'])) {
		$username = $_POST['username'];
		$fullName = $_POST['fullName'];
		$userPassword = $_POST['userPassword'];

		$sql = "SELECT * FROM reg WHERE username='$username'";
		$results = mysqli_query($db, $sql);

		if (mysqli_num_rows($results) > 0) {
			echo "exists";
			exit();
		}else{
			$query = "INSERT INTO reg (username, fullName, userPassword)
					VALUES ('$username', '$fullName', '".md5($userPassword)."')";
			$results = mysqli_query($db, $query);
			echo 'Saved!';
			exit();
		}
	}

?>
