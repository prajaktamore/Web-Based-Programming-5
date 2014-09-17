var toolcount = false;

function select_All(){

var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
	tmp = params[i].split('=');
     document.getElementById("user").value = tmp[1];	
	 
	document.getElementById("toolname").value = tmp[2];
	document.getElementById("tooltype").value = tmp[3];
	document.getElementById("company").value = tmp[4];
	document.getElementById("birth").value = tmp[5];
    }
	
var value;
	$.ajax({
        url: 'singletool.php',
        success: function(response) {
            successCallback(response);
        }
    });

}

function successCallback(responseObj){
     var mydata = JSON.stringify(responseObj);
	 var obj = JSON.parse( responseObj );

var count = 0;		
for(var i in obj) 
	{
	var replaced = document.getElementById("toolname").value.replace(/%20/g, " ");
			if(replaced == obj[i][1] && document.getElementById("tooltype").value == obj[i][0] && 
			document.getElementById("company").value == obj[i][3])
			{
				document.getElementById("toolname").value = obj[i][1];
				document.getElementById("tooltype").value = obj[i][0];
				document.getElementById("company").value = obj[i][3];	
				document.getElementById("tooldetail").value = obj[i][9];
				if(obj[i][2] > 0) {toolcount = true;}
				document.getElementById("count").value = obj[i][2];
				document.getElementById("address").value = obj[i][6];
				document.getElementById("sysreq").value = obj[i][7];
				document.getElementById("version").value = obj[i][4];
				document.getElementById("image5").src = obj[i][5];
				document.getElementById("cost").value = obj[i][8];
			}
	}

}


function checkout(){

		if(document.getElementById("itemcount").value == "" || document.getElementById("itemcount").value <= 0)  
			{ 
				alert("Error: Item Count cannot be blank!"); 
				document.getElementById("itemcount").select();
				document.getElementById("itemcount").focus();
				return false; 
			} 
			
			
if(toolcount == true && (document.getElementById("itemcount").value <= document.getElementById("count").value)){
  url = 'checkout.html?name=' + encodeURIComponent(document.getElementById("user").value) + "=" + "Buyer" +"="+
  encodeURIComponent(document.getElementById("toolname").value) + "="+ encodeURIComponent(document.getElementById("tooltype").value) + "=" + encodeURIComponent(document.getElementById("birth").value)
  + "=" + encodeURIComponent(document.getElementById("company").value) + "=" + encodeURIComponent(document.getElementById("count").value);
 
  self.location.href = url;
  
  }else{
			alert("Sorry for Inconvenience we dont have enough count of items! User item count should be less than::" + document.getElementById("count").value); 
				document.getElementById(itemcount).select();
				document.getElementById("itemcount").focus();
				return false; 

  }
}

function cart(){
		if(document.getElementById("itemcount").value == "" || document.getElementById("itemcount").value <= 0)  
			{ 
				alert("Error: Item Count cannot be blank!"); 
				document.getElementById(itemcount).select();
				document.getElementById("itemcount").focus();
				return false; 
			} 

 if(toolcount == true &&  (document.getElementById("itemcount").value <= document.getElementById("count").value)){	
				addcart();
				alert("Check ur Cart");
  }else{
				alert("Sorry for Inconvenience we dont have enough count of items! User item count should be less than::" + document.getElementById("count").value); 
				document.getElementById(itemcount).select();
				document.getElementById("itemcount").focus();
				return false; 
  }
}

function addcart(){
 
		//creating XMLhttpRequest object  
		 var xhr;  
			 if (window.XMLHttpRequest) { // Mozilla, Safari, ...  
			xhr = new XMLHttpRequest();  
		} else if (window.ActiveXObject) { // IE 8 and older  
			xhr = new ActiveXObject("Microsoft.XMLHTTP");  
		}  

		//creating the xml string  
    xmlString = "<userinfo>" +  
    "  <tooltype>" + unescape(document.getElementById("tooltype").value) + "</tooltype>" +  
    "  <toolname>" + unescape(document.getElementById("toolname").value) + "</toolname>" +  
    "  <companyname>" + unescape(document.getElementById("company").value) + "</companyname>" +  
	"  <itemcount>" + unescape(document.getElementById("itemcount").value) + "</itemcount>" +
	"  <user>" + unescape(document.getElementById("user").value) + "</user>" +
	"  <dob>" + unescape(document.getElementById("birth").value) + "</dob>" +
	"  <usertype>" + "Buyer" + "</usertype>" +
    "</userinfo>";  
  
//alert(data);  
  // Build the URL to connect to  
  var url = "insertcart.php";  
  
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

function showcart(){
	url = 'cart.html?name=' + encodeURIComponent(document.getElementById("user").value) + "=" + "Buyer" +"="+
  encodeURIComponent(document.getElementById("toolname").value) + "="+ encodeURIComponent(document.getElementById("tooltype").value) + "=" + encodeURIComponent(document.getElementById("birth").value)
  + "=" + encodeURIComponent(document.getElementById("company").value) + "=" + encodeURIComponent(document.getElementById("count").value);
 
  window.location.href = url;
  
}