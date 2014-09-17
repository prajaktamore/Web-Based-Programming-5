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

$sql = "DELETE FROM tool WHERE tooltype = '$a' AND toolname = '$b' AND companyname= '$c'";

if (!mysqli_query($con,$sql))
	  {
	  die('Error: ' . mysqli_error($con));
	  }
	echo "1 record deleted";
	
	/* commit transaction */
	if (!mysqli_commit($con)) {
		print("Transaction commit failed\n");
		exit();
	}

	
mysqli_close($con);
?> 