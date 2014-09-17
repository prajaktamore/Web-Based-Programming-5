var toolname;
var tooltype;
var companyname;
var usertype;
var birth;
var count = 0;
var itemcount= 0;
var actualitemcount= 0;


function firstload(){
var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
			tmp = params[i].split('=');
			 document.getElementById("user").value = tmp[1];	
			 
			 toolname =tmp[3];
			 tooltype =tmp[4];
			 companyname =tmp[6];
			 usertype =tmp[2];
			 birth =tmp[5];
				actualitemcount = tmp[7]
		}

}	
function validateform(){
			

		

			var varnameflag=checkName(document.getElementById("namecard").value);
			
			if(varnameflag==false)
			{
					alert("Please enter a valid Name of length greater than 2. Name can only contain alphabets and white space");
					document.getElementById("namecard").select();
					document.getElementById("namecard").focus();
					return false;
			}
			
			
			var varNameCard = /^[a-zA-Z\s]*$/;
			if(!(varNameCard.test(document.getElementById("namecard").value)))
			{
				alert("Please enter a valid Name on Card, Name can only contain alphabets and white spaces");
				document.getElementById("namecard").select();
				document.getElementById("namecard").focus();
				return false;
			}
			
			var varCardNumber = /^\d{16}$/;
			if(!(varCardNumber.test(document.getElementById("cardnumber").value)))
			{
				alert("Please enter a valid Card Number. Valid card number consist of 16 digits");
				document.getElementById("cardnumber").select();
				document.getElementById("cardnumber").focus();
				return false;
			}
			
			var varSecure = /^\d{3}$/;
			if(!(varSecure.test(document.getElementById("secure").value)))
			{
				alert("Please enter a valid secure pin. Valid Secure pin consist of 3 digits");
				document.getElementById("secure").select();
				document.getElementById("secure").focus();
				return false;
			}
			
			var cardType = "";
		if(document.getElementById("visa").checked)
		{
			cardType = "visa";
		}
		else if(document.getElementById("amex").checked)
		{
			cardType = "amex";
		}
		else if(document.getElementById("master").checked)
		{
			cardType = "master";
		}
		
		var paytype = "";
		if(document.getElementById("credit").checked)
		{
			paytype = "credit";
		}
		else if(document.getElementById("debit").checked)
		{
			paytype = "debit";
		}
		else if(document.getElementById("netbank").checked)
		{
			paytype = "netbank";
		}else if(document.getElementById("paypal").checked)
		{
			paytype = "paypal";
		}
		
				var varBirthDate = /^\d{4}-\d{2}-\d{2}$/;
		if(!(varBirthDate.test(document.getElementById("doi").value) && checkDateIssue(document.getElementById("doi").value)))
		{
			alert("Please enter a valid date if issue YYYY/MM/SS (YY - 19|20) and Date Not Greater Than Today.");
			document.getElementById("doi").select();
			document.getElementById("doi").focus();
			return false;
		}
		
				var varBirthDate1 = /^\d{4}-\d{2}-\d{2}$/;
		if(!(varBirthDate1.test(document.getElementById("doe").value) && checkDateExpiry(document.getElementById("doe").value)))
		{
			alert("Please enter a valid date of expiry MM/DD/YYYY (YY - 19|20) and Date Not Greater Than Today.");
			document.getElementById("doe").select();
			document.getElementById("doe").focus();
			return false;
		}
		
		itemcount=checkName(document.getElementById("noi").value);
			
			if(parseInt(itemcount) <= 0)
			{
					alert("Please enter a valid item count you want to checkout. Name can only contain alphabets and white space");
					document.getElementById("namecard").select();
					document.getElementById("namecard").focus();
					return false;
			}
		alert("namecard"+document.getElementById("namecard").value+"cardnumber"+document.getElementById("cardnumber").value+"secure"+document.getElementById("secure").value+ "cardType"+cardType+"paytype"+paytype+"doi"+document.getElementById("doi").value+"doe"+document.getElementById("doe").value);
		
		select_All();

}

function select_All(){
var value;
	$.ajax({
        url: 'checkout.php',
        success: function(response) {
            successCallback(response);
        }
    });

}

function successCallback(responseObj){
     var mydata = JSON.stringify(responseObj);
	 var obj = JSON.parse( responseObj );


var username = new Array();
var password = new Array();
var address = new Array();
var city = new Array();
var state= new Array();
var country= new Array();
var pincode= new Array();
var dob= new Array();
var phoneno= new Array();
var secure= new Array();
var doi= new Array();
var doe= new Array();
var cardtype= new Array();
var paytype= new Array();
var namecard= new Array();
var cardnumber= new Array();
var email= new Array();
var usertype= new Array();
     
	for(var i in obj) {
		username =  obj[i][0];
		password =  obj[i][1];	
		address =  obj[i][2];	
		city =  obj[i][3];	
		state=  obj[i][4];	
		country=  obj[i][5];	
		pincode=  obj[i][6];	
		dob=  obj[i][7];	
		phoneno=  obj[i][8];	
		secure=  obj[i][9];	
		doi=  obj[i][10];	
		doe=  obj[i][11];	
		cardtype=  obj[i][12];	
		paytype=  obj[i][13];	
		namecard=  obj[i][14]; 		
		cardnumber=  obj[i][15];
		email=  obj[i][16];
		usertype= obj[i][17];
	}
	
	 for(var i in obj) {
			if(document.getElementById("user").value == obj[i][0] 
					&& birth == obj[i][7] && "Buyer" == obj[i][17] && parseInt(document.getElementById("noi").value) <= parseInt(actualitemcount))
			{
			
			reducetoolcount(document.getElementById("noi").value);
			
			removecart();
	
			alert("Shopping Successful!! Thank You For Sopping");
		
			url = 'first.html?name=' + encodeURIComponent(document.getElementById("user").value) + 
			 "=dob="+obj[i][7]+"=type=" + "Buyer";
					self.location.href = url;
			}
			
	}
	firstload();	
}


function goomenu(){
	url = 'first.html?name=' + encodeURIComponent(document.getElementById("user").value) + 
			 "=dob="+encodeURIComponent(birth)+"=type=" + "Buyer";
					self.location.href = url;
}

function reducetoolcount(itemcount) {  

  
//creating XMLhttpRequest object  
 var xhr;  
     if (window.XMLHttpRequest) { // Mozilla, Safari, ...  
    xhr = new XMLHttpRequest();  
} else if (window.ActiveXObject) { // IE 8 and older  
    xhr = new ActiveXObject("Microsoft.XMLHTTP");  
} 

//creating the xml string  
    xmlString = "<userinfo>" +  
    "  <tooltype>" + unescape(tooltype) + "</tooltype>" +  
    "  <toolname>" + unescape(toolname) + "</toolname>" +  
    "  <companyname>" + unescape(companyname) + "</companyname>" +  
	"  <itemcount>" + unescape(document.getElementById("noi").value) + "</itemcount>" +
    "</userinfo>";  
  
//alert(data);  
  // Build the URL to connect to  
  var url = "updatetool.php";  
  
  // Open a connection to the server  
  xhr.open("POST", url, true);  
  
  // declaring that the data being sent is in XML format  
  xhr.setRequestHeader("Content-Type", "text/xml");  
  
  // Send the request  
  xhr.send(xmlString);  
}  

function removecart(){
 
//creating XMLhttpRequest object  
 var xhr;  
     if (window.XMLHttpRequest) { // Mozilla, Safari, ...  
    xhr = new XMLHttpRequest();  
} else if (window.ActiveXObject) { // IE 8 and older  
    xhr = new ActiveXObject("Microsoft.XMLHTTP");  
} 
	
//creating the xml string  
    xmlString = "<userinfo>" +  
    "  <tooltype>" + unescape(tooltype) + "</tooltype>" +  
    "  <toolname>" + unescape(toolname) + "</toolname>" +  
    "  <companyname>" + unescape(companyname) + "</companyname>" +  
	"  <itemcount>" + unescape(document.getElementById("noi").value) + "</itemcount>" +
	"  <user>" + unescape(document.getElementById("user").value) + "</user>" +
	"  <dob>" + unescape(birth) + "</dob>" +
	"  <usertype>" + "Buyer" + "</usertype>" +
    "</userinfo>";  
  
//alert(data);  
  // Build the URL to connect to  
  var url = "removecart.php";  
  
  // Open a connection to the server  
  xhr.open("POST", url, true);  
  
  // declaring that the data being sent is in XML format  
  xhr.setRequestHeader("Content-Type", "text/xml");  
  
  // Send the request  
  xhr.send(xmlString);  
}
function checkDateIssue(varBirthDate) {

            var year = varBirthDate.substring(0, 4);
            var month = varBirthDate.substring(5, 7);
            var date = varBirthDate.substring(8, 10);

            var myDate = new Date(year, month - 1, date);

            var today = new Date();

            if (myDate > today) {
                return false;
            }
            else {
                return true;
            }
}
function checkDateExpiry(varBirthDate) {

            var year = varBirthDate.substring(0, 4);
            var month = varBirthDate.substring(5, 7);
            var date = varBirthDate.substring(8, 10);

            var myDate = new Date(year, month - 1, date);

            var today = new Date();

            if (myDate < today) {
                return false;
            }
            else {
                return true;
            }
}
/* function for checking name is a string with minimum 3 characters */
function checkName(username)
{
		if((isFinite(username))){
				return false;
		}
		if( username.length>2){
				return true;
		}
		else
		{
				return false;
		}
}

