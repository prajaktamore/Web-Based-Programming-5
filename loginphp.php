<?php

ini_set('display_errors', 1);

$con=mysqli_connect("bigyellowcat.cs.binghamton.edu","more","more7755","more");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$result = mysqli_query($con,"SELECT * FROM user");


$username = array();
$password = array();
$address = array();
$city = array();
$state= array();
$country= array();
$pincode= array();
$dob= array();
$phoneno= array();
$secure= array();
$doi= array();
$doe= array();
$cardtype= array();
$paytype= array();
$namecard= array();
$cardnumber= array();
$email= array();
$usertype= array();

	while($row = mysqli_fetch_array($result))
  {      
		$username[] = $row['username'];
		$password[] = $row['password'];
		$address[] = $row['address'];
		$city[] = $row['city'];
		$state[] = $row['state'];
		$country[] = $row['country'];
		$pincode[] = $row['pincode'];
		$dob[] = $row['dob'];
		$phoneno[] = $row['phoneno'];
		$secure[] = $row['secure'];
		$doi[] = $row['doi'];
		$doe[] = $row['doe'];
		$cardtype[] = $row['cardtype'];
		$paytype[] = $row['paytype'];
		$namecard[] = $row['namecard'];
		$cardnumber[] = $row['cardnumber'];
		$email[] = $row['email'];
		$usertype[] = $row['usertype'];
	}

	echo json_encode(array_map(null,  $username,  $password,  $address,  $city,  $state,  $country,  $pincode,  $dob,  $phoneno,  $secure,  $doi,  $doe,  $cardtype, $paytype,  $namecard,  $cardnumber,  $email,  $usertype));

  // Close the database connection
  mysqli_close($con);
?>