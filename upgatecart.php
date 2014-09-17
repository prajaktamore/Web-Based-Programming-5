<?php

ini_set('display_errors', 1);

$con=mysqli_connect("bigyellowcat.cs.binghamton.edu","more","more7755","more");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }


$sXml = file_get_contents('php://input'); 

$xmlDoc = new DOMDocument();
    $xmlDoc->loadXML($sXml);
	
$x=$xmlDoc->getElementsByTagName('userinfo');
	
$a=$x->item(0)->getElementsByTagName('tooltype')
->item(0)->childNodes->item(0)->nodeValue;
$b=$x->item(0)->getElementsByTagName('toolname')
->item(0)->childNodes->item(0)->nodeValue;
$c=$x->item(0)->getElementsByTagName('companyname')
->item(0)->childNodes->item(0)->nodeValue;
$d=$x->item(0)->getElementsByTagName('toolcount')
->item(0)->childNodes->item(0)->nodeValue;
$e=$x->item(0)->getElementsByTagName('user')
->item(0)->childNodes->item(0)->nodeValue;
$f=$x->item(0)->getElementsByTagName('dob')
->item(0)->childNodes->item(0)->nodeValue;
$g=$x->item(0)->getElementsByTagName('usertype')
->item(0)->childNodes->item(0)->nodeValue;


	$sql = "UPDATE cart SET itemcount='$d' WHERE tooltype ='$a' AND toolname = '$b' AND cname = '$c' AND user= '$e' AND dob= '$f' AND usertype= '$g'";

	if (!mysqli_query($con,$sql))
	  {
	  die('Error: ' . mysqli_error($con));
	  }
	  
	/* commit transaction */
	if (!mysqli_commit($con)) {
		print("Transaction commit failed\n");
		exit();
	}

	echo "1 record added";
mysqli_close($con);
?> 
