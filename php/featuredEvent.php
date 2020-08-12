<?php

require_once('../../connect.php');

$query = "SELECT * FROM Events WHERE elementId = 'featuredEvent'";
$result = mysqli_query($conn, $query);
$eventObj;

while($row = mysqli_fetch_array($result)){
	$eventObj->name = $row["name"];
	$eventObj->imgURL = $row["imgURL"];
	$eventObj->description = $row["description"];
	$eventObj->dateNTime = $row["dateNTime"];
	$eventObj->fbLink = $row["fbLink"];
	$eventObj->elementId = $row["elementId"];
}

echo json_encode($eventObj);

$conn->close();
?>