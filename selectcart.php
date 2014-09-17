<?php

ini_set('display_errors', 1);

$con=mysqli_connect("bigyellowcat.cs.binghamton.edu","more","more7755","more");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$result = mysqli_query($con,"SELECT * FROM cart");

$tooltype = array();
$toolname = array();
$itemcount = array();
$cname = array();
$user = array();
$dob = array();
$usertype = array();

	while($row = mysqli_fetch_array($result))
  {      
	$tooltype[] = $row['tooltype'];
	$toolname[] = $row['toolname'];
	$itemcount[] = $row['itemcount'];
	$cname[] = $row['cname'];
	$user[] = $row['user'];
	$dob[] = $row['dob'];
	$usertype[] = $row['usertype'];
  }

 echo json_encode(array_map(null, $tooltype ,$toolname ,$itemcount ,$cname,$user ,$dob ,$usertype));

  mysqli_close($con);
?>