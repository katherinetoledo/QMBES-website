<?php

require_once('../../connect.php');

$query = "SELECT * FROM Committee";
$result = mysqli_query($conn, $query);
$committeeObj;
$committeeArr;
$count = 0;
if($result){
	while($row = mysqli_fetch_array($result)){
	$committeeObj->name = $row["name"];
	$committeeObj->position = $row["position"];
	$committeeObj->linkedIn = $row["linkedIn"];
	$committeeObj->img = $row["img"];
	$committeeObj->mail = $row["mail"];
	$committeeArr[$count] = json_encode($committeeObj);
	$count = $count + 1;
	}
}

echo json_encode($committeeArr);

$conn->close();
?>