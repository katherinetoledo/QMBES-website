<?php

require_once('../../connect.php');

$query = "SELECT * FROM Events";
$result = mysqli_query($conn, $query);
$eventObj;
$eventArr;
$count = 0;
if($result){
	while($row = mysqli_fetch_array($result)){
	$eventObj->name = $row["name"];
	$eventObj->imgURL = $row["imgURL"];
	$eventObj->dateNTime = $row["dateNTime"];
	$eventObj->fbLink = $row["fbLink"];
	$eventObj->elementId = $row["elementId"];
	$eventArr[$count] = json_encode($eventObj);
	$count = $count + 1;
	}
}


echo json_encode($eventArr);

$conn->close();
?>
