<?php

require_once('../../connect.php');

$query = "SELECT * FROM Stats WHERE id=1";
$result = mysqli_query($conn, $query);
$statObj;

while($row = mysqli_fetch_assoc($result)){
	$statObj->members = $row["members"];
	$statObj->facebook = $row["facebook"];
	$statObj->outreach = $row["outreach"];
	$statObj->instagram = $row["instagram"];
	$statObj->twitter = $row["twitter"];
}

echo json_encode($statObj);


$conn->close();
?>