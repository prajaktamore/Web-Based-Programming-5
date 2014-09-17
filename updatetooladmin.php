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

$a=$x->item(0)->getElementsByTagName('a')
->item(0)->childNodes->item(0)->nodeValue;
$b=$x->item(0)->getElementsByTagName('b')
->item(0)->childNodes->item(0)->nodeValue;
$c=$x->item(0)->getElementsByTagName('c')
->item(0)->childNodes->item(0)->nodeValue;
$d=$x->item(0)->getElementsByTagName('d')
->item(0)->childNodes->item(0)->nodeValue;
$e=$x->item(0)->getElementsByTagName('e')
->item(0)->childNodes->item(0)->nodeValue;
$f=$x->item(0)->getElementsByTagName('f')
->item(0)->childNodes->item(0)->nodeValue;
$g=$x->item(0)->getElementsByTagName('g')
->item(0)->childNodes->item(0)->nodeValue;
$h=$x->item(0)->getElementsByTagName('h')
->item(0)->childNodes->item(0)->nodeValue;
$i=$x->item(0)->getElementsByTagName('i')
->item(0)->childNodes->item(0)->nodeValue;

$k = date('Y-m-d');

$sql = 	$sql="UPDATE tool SET noofcopies = '$e',version= '$i',caddress = '$f',sysreq = '$g',detail = '$d',cost = '$h',lastupdate = '$k' WHERE 
tooltype ='$a' AND toolname = '$b' AND companyname = '$c' ";


if (!mysqli_query($con,$sql))
	  {
	  die('Error: ' . mysqli_error($con));
	  }
	echo "1 record UPDATED";
	
	/* commit transaction */
	if (!mysqli_commit($con)) {
		print("Transaction commit failed\n");
		exit();
	}

	
mysqli_close($con);
?> 