var boole;
function check()
{
	
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
				
			if(document.getElementById("password").value == "") 
			{
				alert("Error: Please check that you've entered and confirmed your password!"); 
				document.getElementById("password").select();
				document.getElementById("password").focus();
				return false; 
			} 
			
			var selected;
			var select = document.getElementById("selecttype").value;
			if(select == "Administrator" ){
					selected = "Administrator";
				}else{
					selected = "Buyer";
				}

			alert("You entered a valid password: "+ document.getElementById("username").value + "username" + document.getElementById("password").value + "type"	+ selected);
			select_All();
			
			
}

function select_All(){
var value;
	$.ajax({
        url: 'loginphp.php',
        success: function(response) {
            successCallback(response);
        }
    });

}

function successCallback(responseObj){
   var obj = JSON.parse(responseObj);

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
			if(document.getElementById("username").value == obj[i][0] 
					&& document.getElementById("password").value == obj[i][1] 
					&& document.getElementById("selecttype").value == obj[i][17] && "Buyer" == obj[i][17])
			{
			 url = 'first.html?name=' + encodeURIComponent(document.getElementById("username").value) + 
			 "=dob="+obj[i][7]+"=type=" + document.getElementById("selecttype").value;
					self.location.href = url;
			}else if(document.getElementById("username").value == obj[i][0] 
					&& document.getElementById("password").value == obj[i][1] 
					&& document.getElementById("selecttype").value == obj[i][17] && "Administrator" == obj[i][17]){
			 url = 'myFormPHP.htm?name=' + encodeURIComponent(document.getElementById("username").value) + 
			 "=dob="+obj[i][7]+"=type=" + document.getElementById("selecttype").value;
					self.location.href = url;
			}else{
				boole = false;
			}
		}

			alert("Username and Passport is not registered");
			page = "Login.html";
			self.location.href = page;
}
function check1(){
			page = "signon.html";
			self.location.href = page;
}
