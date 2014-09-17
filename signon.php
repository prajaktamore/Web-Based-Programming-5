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

$a=$x->item(0)->getElementsByTagName('username')
->item(0)->childNodes->item(0)->nodeValue;
$b=$x->item(0)->getElementsByTagName('password')
->item(0)->childNodes->item(0)->nodeValue;
$c=$x->item(0)->getElementsByTagName('address')
->item(0)->childNodes->item(0)->nodeValue;
$d=$x->item(0)->getElementsByTagName('city')
->item(0)->childNodes->item(0)->nodeValue;
$e=$x->item(0)->getElementsByTagName('state')
->item(0)->childNodes->item(0)->nodeValue;
$f=$x->item(0)->getElementsByTagName('country')
->item(0)->childNodes->item(0)->nodeValue;
$g=$x->item(0)->getElementsByTagName('postcode')
->item(0)->childNodes->item(0)->nodeValue;
$h=$x->item(0)->getElementsByTagName('dob')
->item(0)->childNodes->item(0)->nodeValue;
$i=$x->item(0)->getElementsByTagName('email')
->item(0)->childNodes->item(0)->nodeValue;
$j=$x->item(0)->getElementsByTagName('selecttype')
->item(0)->childNodes->item(0)->nodeValue;

		
$k=$x->item(0)->getElementsByTagName('namecard')
->item(0)->childNodes->item(0)->nodeValue;
$l=$x->item(0)->getElementsByTagName('cardnumber')
->item(0)->childNodes->item(0)->nodeValue;
$m=$x->item(0)->getElementsByTagName('secure')
->item(0)->childNodes->item(0)->nodeValue;
$n=$x->item(0)->getElementsByTagName('doi')
->item(0)->childNodes->item(0)->nodeValue;
$o=$x->item(0)->getElementsByTagName('doe')
->item(0)->childNodes->item(0)->nodeValue;
$p=$x->item(0)->getElementsByTagName('cardType')
->item(0)->childNodes->item(0)->nodeValue;
$q=$x->item(0)->getElementsByTagName('paytype')
->item(0)->childNodes->item(0)->nodeValue;

$r=$x->item(0)->getElementsByTagName('phone')
->item(0)->childNodes->item(0)->nodeValue;
 
  
	$sql="INSERT INTO user (username,password,address,city,state,country,pincode,dob,phoneno,email,usertype,namecard,cardnumber,secure,doi,doe,cardtype,paytype)
	VALUES
	('$a','$b','$c','$d','$e','$f','$g','$h','$r','$i','$j','$k','$l','$m','$n','$o','$p','$q')";

	
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