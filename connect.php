<?php
$servername = "localhost";
$username = "qmbescom_user";
$password = "Y~G01}}KRqc(";
$database = "qmbescom_1";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
echo "connected";


if (! $conn ) {
    die( 'Could not connect: '  .  mysql_error ());
}

?>
