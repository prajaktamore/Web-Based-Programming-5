var cardType = "";
var paytype = "";

function validateform() {

    if(document.getElementById("username").value == "") 
			{ 
				alert("Error: Username cannot be blank!"); 
				document.getElementById("username").select();
				document.getElementById("username").focus();
				return false; 
			} 
			re = /^\w+$/; if(!re.test(document.getElementById("username").value))
			{ 
				alert("Error: Username must contain only letters, numbers and underscores!");
				document.getElementById("username").select();
				document.getElementById("username").focus();
				return false;
			}
				
			if(document.getElementById("password").value != "") 
			{
				if((document.getElementById("password").value).length < 6) 
				{ 
					alert("Error: Password must contain at least six characters!"); 
					document.getElementById("password").select();
					document.getElementById("password").focus();
				return false; 
				}
				if(document.getElementById("username").value == document.getElementById("password").value) { 
					alert("Error: Password must be different from Username!"); 
					document.getElementById("password").select();
					document.getElementById("password").focus();
					return false;
				} 
				re = /[0-9]/; 
				if(!re.test(document.getElementById("password").value))
				{ 
					alert("Error: password must contain at least one number (0-9)!"); 
					document.getElementById("password").select();
					document.getElementById("password").focus();
					return false; 
				} 
				re = /[a-z]/; 
				if(!re.test(document.getElementById("password").value)) { 
					alert("Error: password must contain at least one lowercase letter (a-z)!"); 
					document.getElementById("password").select();
					document.getElementById("password").focus();
					return false; 
				}
				re = /[A-Z]/;
				if(!re.test(document.getElementById("password").value)) { 
					alert("Error: password must contain at least one uppercase letter (A-Z)!"); 
					document.getElementById("password").select();
					document.getElementById("password").focus();
					return false; 
				}
			} else { 
				alert("Error: Please check that you've entered and confirmed your password!"); 
				document.getElementById("password").select();
					document.getElementById("password").focus();
				return false; 
			} 
    if (document.getElementById("password").value != document.getElementById("cpassword").value) {
        alert ("Passwords don't match");
        return false;
    }
	var varAddress=checkAddress(document.getElementById("address").value);
			if(varAddress==false)
			{
					alert("Please enter a valid address. Address can only contain alphabets and white space");
					document.getElementById("address").select();
					document.getElementById("address").focus();
					return false;
			}
			
			var varCityflag=checkCity(document.getElementById("city").value);
			
			if(varCityflag==false)
			{
					alert("Please enter a valid city. city can only contain alphabets and white spaces");
					document.getElementById("city").select();
					document.getElementById("city").focus();
					return false;
			}
			
			
			var varCity = /^[a-zA-Z\s]*$/;
			if(!(varCity.test(document.getElementById("city").value)))
			{
				alert("Please enter a valid city, city can only contain alphabets and white spaces");
				document.getElementById("city").select();
				document.getElementById("city").focus();
				return false;
			}

			var varStateflag=checkState(document.getElementById("state").value);
			
			if(varStateflag==false)
			{
					alert("Please enter a valid state. state can only contain alphabets and white spaces");
					document.getElementById("state").select();
					document.getElementById("state").focus();
					return false;
			}
			
			
			var varState = /^[a-zA-Z\s]*$/;
			if(!(varState.test(document.getElementById("state").value)))
			{
				alert("Please enter a valid state, state can only contain alphabets and white spaces");
				document.getElementById("state").select();
				document.getElementById("state").focus();
				return false;
			}
			
			var varCountryflag=checkCountry(document.getElementById("country").value);
			
			if(varCountryflag==false)
			{
					alert("Please enter a valid country. country can only contain alphabets and white spaces");
					document.getElementById("country").select();
					document.getElementById("country").focus();
					return false;
			}
			
			
			var varCountry = /^[a-zA-Z\s]*$/;
			if(!(varCountry.test(document.getElementById("country").value)))
			{
				alert("Please enter a valid Country, Country can only contain alphabets and white spaces");
				document.getElementById("country").select();
				document.getElementById("country").focus();
				return false;
			}
	
	var varPhone=checkPhone(document.getElementById("phone").value);
			if(varPhone==false)
			{
					alert("Please enter a valid phone number!, phone number has to be + sign followed by 12 digits, Eg: +123412341234");
					document.getElementById("phone").select();
					document.getElementById("phone").focus();
					return false;
			}
		
				var varBirthDate = /^(19|20)\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])$/;
		if(!(varBirthDate.test(document.getElementById("dob").value) && checkDate(document.getElementById("dob").value)))
		{
			alert("Please enter a valid birth date MM/DD/YYYY (YY - 19|20) and Date Not Greater Than Today.");
			document.getElementById("dob").select();
			document.getElementById("dob").focus();
			return false;
		}
		


    //email check
	var email = document.getElementById("email").value;
    var atpos=email.indexOf("@");
    var dotpos=email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        alert("Not a valid e-mail address");
        return false;
    }
			
			
			var varPostCode = /^\d{5}$/;
			if(!(varPostCode.test(document.getElementById("postcode").value)))
			{
				alert("Please enter a valid Post Code. Eg: 12345");
				document.getElementById("postcode").select();
				document.getElementById("postcode").focus();
				return false;
			}
			
				var selected;
			var select = document.getElementById("selecttype").value;
			if(select == "Administrator" ){
					selected = "Administrator";
				}else{
					selected = "Buyer";
				}
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
			paytype = "net banking";
		}else if(document.getElementById("paypal").checked)
		{
			paytype = "paypal";
		}
		
				var varBirthDate = /^(19|20)\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])$/;
		if(!(varBirthDate.test(document.getElementById("doi").value) && checkDateIssue(document.getElementById("doi").value)))
		{
			alert("Please enter a valid date if issue YYYY/MM/SS (YY - 19|20) and Date Not Greater Than Today.");
			document.getElementById("doi").select();
			document.getElementById("doi").focus();
			return false;
		}
		
				var varBirthDate = /^(19|20)\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])$/;
		if(!(varBirthDate.test(document.getElementById("doe").value) && checkDateExpiry(document.getElementById("doe").value)))
		{
			alert("Please enter a valid date of expiry MM/DD/YYYY (YY - 19|20) and Date Not Greater Than Today.");
			document.getElementById("doe").select();
			document.getElementById("doe").focus();
			return false;
		}
				alert("Username"+document.getElementById("username").value+"password"+document.getElementById("password").value+"cpassword"+document.getElementById("password").value+"address"+document.getElementById("address").value+"city"+
				document.getElementById("city").value+"state"+document.getElementById("state").value+"country"+document.getElementById("country").value+
				"postcode"+document.getElementById("postcode").value+"phone"+document.getElementById("phone").value+"dob"+document.getElementById("dob").value+"email"+document.getElementById("email").value+"select"+selected + "namecard"+document.getElementById("namecard").value+"cardnumber"+document.getElementById("cardnumber").value+"secure"+document.getElementById("secure").value+ "cardType"+cardType+"paytype"+paytype+"doi"+document.getElementById("doi").value+"doe"+document.getElementById("doe").value);
				
				insert_all();
	
	document.getElementById("username").value = "";
	document.getElementById("password").value = "";
	document.getElementById("password").value = "";
	document.getElementById("address").value = "";
	document.getElementById("city").value = "";
	document.getElementById("state").value = "";
	document.getElementById("country").value = "";
	document.getElementById("postcode").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("dob").value = "";
	document.getElementById("email").value = "";
	document.getElementById("namecard").value = "";
	document.getElementById("cardnumber").value = "";
	document.getElementById("secure").value = "";
	document.getElementById("doi").value = "";
	document.getElementById("doe").value = "";
				
}


function checkDate(varBirthDate) {

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


function checkAddress(address)
{
		if((isFinite(address))){
				return false;
		}
		if( address.length>1){
				return true;
		}
		else
		{
				return false;
		}
}

function checkCountry(country)
{
		if((isFinite(country))){
				return false;
		}
		if( country.length>1){
				return true;
		}
		else
		{
				return false;
		}
}
function checkState(state)
{
		if((isFinite(state))){
				return false;
		}
		if( state.length>1){
				return true;
		}
		else
		{
				return false;
		}
}
function checkCity(city)
{
		if((isFinite(city))){
				return false;
		}
		if( city.length>1){
				return true;
		}
		else
		{
				return false;
		}
}

function checkPhone(phone) 
{ 
		var re = /^\+[0-9]{12}$/;
		return re.test(phone);
}

function insert_all() {  
		//creating XMLhttpRequest object  
		 var xhr;  
			 if (window.XMLHttpRequest) { // Mozilla, Safari, ...  
			xhr = new XMLHttpRequest();  
		} else if (window.ActiveXObject) { // IE 8 and older  
			xhr = new ActiveXObject("Microsoft.XMLHTTP");  
		}  
	
		//creating the xml string  
			xmlString = "<userinfo>" +  
			"  <username>" + escape(document.getElementById("username").value) + "</username>" +  
			"  <password>" + escape(document.getElementById("password").value) + "</password>" +  
			"  <address>" + escape(document.getElementById("address").value) + "</address>" +  
			"  <city>" + escape(document.getElementById("city").value) + "</city>" +
			"  <state>" + document.getElementById("state").value + "</state>" +
			"  <country>" + document.getElementById("country").value + "</country>" +
			"  <postcode>" + document.getElementById("postcode").value + "</postcode>" +
			"  <dob>" + document.getElementById("dob").value + "</dob>" +			
			"  <phone>" + document.getElementById("phone").value + "</phone>" +
			"  <email>" + document.getElementById("email").value + "</email>" +
			"  <selecttype>" + document.getElementById("selecttype").value + "</selecttype>" +
			"  <namecard>" + document.getElementById("namecard").value + "</namecard>" +
			"  <cardnumber>" + document.getElementById("cardnumber").value + "</cardnumber>" +
			"  <secure>" + document.getElementById("secure").value + "</secure>" +
			"  <doi>" + document.getElementById("doi").value + "</doi>" +
			"  <doe>" + document.getElementById("doe").value + "</doe>" +
			"  <cardType>" + escape(cardType) + "</cardType>" +
			"  <paytype>" + escape(paytype) + "</paytype>" +
			"</userinfo>";  

		//alert(data);  
		  // Build the URL to connect to  
		   var url = "signon.php";
		  
		  // Open a connection to the server  
		  xhr.open("POST", url, true);  
		  
		  // declaring that the data being sent is in XML format  
		  xhr.setRequestHeader("Content-Type", "text/xml");  
		  xhr.setRequestHeader("Content-length", xmlString.length);
		  
			xhr.onreadystatechange = function() {//Call a function when the state changes.
			   if(xhr.readyState == 4 && xhr.status == 200) {
				  alert(xhr.responseText);
			   }
			}
		  // Send the request  
		  xhr.send(xmlString);  
		  
		//return xhr.responseText;
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