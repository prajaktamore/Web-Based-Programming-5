<?php

ini_set('display_errors', 1);

$con=mysqli_connect("bigyellowcat.cs.binghamton.edu","more","more7755","more");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$result = mysqli_query($con,"SELECT username,password,usertype FROM user");

$username = array();
$password = array();
$usertype = array();
      
	$username[] = $row[0];
	$password[] = $row[1];
	$usertype[] = $row[2];
  
 echo json_encode(array_map(null, $username,$password,$usertype));

  // Close the database connection
  mysqli_close($con);
?>