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
$c=$x->item(0)->getElementsByTagName('noofcopies')
->item(0)->childNodes->item(0)->nodeValue;
$d=$x->item(0)->getElementsByTagName('companyname')
->item(0)->childNodes->item(0)->nodeValue;
$e=$x->item(0)->getElementsByTagName('version')
->item(0)->childNodes->item(0)->nodeValue;
$f=$x->item(0)->getElementsByTagName('image')
->item(0)->childNodes->item(0)->nodeValue;
$g=$x->item(0)->getElementsByTagName('caddress')
->item(0)->childNodes->item(0)->nodeValue;
$h=$x->item(0)->getElementsByTagName('sysreq')
->item(0)->childNodes->item(0)->nodeValue;
$i=$x->item(0)->getElementsByTagName('detail')
->item(0)->childNodes->item(0)->nodeValue;
$j=$x->item(0)->getElementsByTagName('cost')
->item(0)->childNodes->item(0)->nodeValue;

$k = date('Y-m-d');

	$sql="INSERT INTO tool (tooltype,toolname,noofcopies,companyname,version,image,caddress,sysreq,detail,cost,lastupdate)
	VALUES
	('$a','$b','$c','$d','$e','$f','$g','$h','$i','$j','$k')";

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
