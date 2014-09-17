<?php

ini_set('display_errors', 1);

$con=mysqli_connect("bigyellowcat.cs.binghamton.edu","more","more7755","more");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$result = mysqli_query($con,"SELECT * FROM tool");

$tooltype = array();
$toolname = array();
$noofcopies = array();
$companyname = array();
$version = array();
$image = array();
$caddress = array();
$sysreq = array();
$cost = array();
$detail = array();
$lastupdate = array();


	while($row = mysqli_fetch_array($result))
  {      
	$tooltype[] = $row['tooltype'];
	$toolname[] = $row['toolname'];
	$noofcopies[] = $row['noofcopies'];
	$companyname[] = $row['companyname'];
	$version[] = $row['version'];
	$image[] = $row['image'];
	$caddress[] = $row['caddress'];
	$sysreq[] = $row['sysreq'];
	$cost[] = $row['cost'];
	$detail[] = $row['detail'];
    $lastupdate[] = $row['lastupdate'];
  }

 echo json_encode(array_map(null, $tooltype ,$toolname ,$noofcopies ,$companyname,$version ,$image ,$caddress ,$sysreq ,$cost,$detail,$lastupdate));

  mysqli_close($con);
?>