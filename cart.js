var tooltooltype;
var tooltype;
var toolcompany;
var toolactualcount; 

var myArray = new Array();
var loc = -1;
var insertflag1;

var scrollstatus;
var upstatus;
function handleChange()
{
	if(radio1.checked == true)
	{
			var r=confirm("If you want to delete the row click 'OK' else click 'Cancel'");
			if (r==true)
			{
				var n = document.getElementById("tooltype1").value;
				var s = document.getElementById("toolname1").value;
				var b = document.getElementById("toolcount1").value;
				var x = document.getElementById("toolcname1").value;
				
				delete_(n,s,b,x);
				select_All();
				radio1.checked = false;
			}
			else
			{
				radio1.checked = false;
			}
	}else if(radio2.checked == true)
	{
			var r=confirm("If you want to delete the row click 'OK' else click 'Cancel'");
			if (r==true)
			{
				var n = document.getElementById("tooltype2").value;
				var s = document.getElementById("toolname2").value;
				var b = document.getElementById("toolcount2").value;
				var x = document.getElementById("toolcname2").value;
				
				delete_(n,s,b,x);
				select_All();
				radio2.checked = false;
			}
			else
			{
				radio2.checked = false;
			}
	}else if(radio3.checked == true)
	{
			var r=confirm("If you want to delete the row click 'OK' else click 'Cancel'");
			if (r==true)
			{
				var n = document.getElementById("tooltype3").value;
				var s = document.getElementById("toolname3").value;
				var b = document.getElementById("toolcount3").value;
				var x = document.getElementById("toolcname3").value;
				
				delete_(n,s,b,x);
				select_All();
				radio3.checked = false;
			}
			else
			{
				radio3.checked = false;
			}
	}else if(radio4.checked == true)
	{
			var r=confirm("If you want to delete the row click 'OK' else click 'Cancel'");
			if (r==true)
			{
				var n = document.getElementById("tooltype4").value;
				var s = document.getElementById("toolname4").value;
				var b = document.getElementById("toolcount4").value;
				var x = document.getElementById("toolcname4").value;
				
				delete_(n,s,b,x);
				select_All();
				radio4.checked = false;
			}
			else
			{
				radio4.checked = false;
			}
	}else if(radio5.checked == true)
	{
			var r=confirm("If you want to delete the row click 'OK' else click 'Cancel'");
			if (r==true)
			{
				var n = document.getElementById("tooltype5").value;
				var s = document.getElementById("toolname5").value;
				var b = document.getElementById("toolcount5").value;
				var x = document.getElementById("toolcname5").value;
				
				delete_(n,s,b,x);
				select_All();
				radio5.checked = false;
			}
			else
			{
				
				radio5.checked = false;
			}
	}

}


function handleChangeUpdate()
{
	if(radioup1.checked == true)
	{
				var tp = document.getElementById("toolcount1").value;
				document.getElementById("toolcount1").disabled = false;
				document.getElementById("toolcount1").value = tp;

	}else if(radioup2.checked == true)
	{
				var tp = document.getElementById("toolcount2").value;
				document.getElementById("toolcount2").disabled = false;
				document.getElementById("toolcount2").value = tp;
	}else if(radioup3.checked == true)
	{
				var tp = document.getElementById("toolcount3").value;
				document.getElementById("toolcount3").disabled = false;
				document.getElementById("toolcount3").value = tp;
	}else if(radioup4.checked == true)
	{
				var tp = document.getElementById("toolcount4").value;
				document.getElementById("toolcount4").disabled = false;
				document.getElementById("toolcount4").value = tp;
	}else if(radioup5.checked == true)
	{
				var tp = document.getElementById("toolcount5").value;
				document.getElementById("toolcount5").disabled = false;
				document.getElementById("toolcount5").value = tp;
	}

}


function updatetool(){

if(radioup1.checked == true)
	{
				if(document.getElementById("toolcount1").value == "" || parseInt(document.getElementById("toolcount1").value) <= 0 || parseInt(document.getElementById("toolcount1").value) > toolactualcount){
								alert("Error: Toolcount should be > 0 or not more than Max count :: "+ toolactualcount);
								document.getElementById("toolcount1").value = parseInt(0);
								document.getElementById("toolcount1").select();
								document.getElementById("toolcount1").focus();
								return false;
				}

				document.getElementById("toolcount1").disabled = true;
				var n = document.getElementById("tooltype1").value;
				var s = document.getElementById("toolname1").value;
				var x = document.getElementById("toolcname1").value;
				var y = document.getElementById("toolcount1").value;
				updateDatabase(n,s,x,y);
					select_All();
				radioup1.checked = false;
	}else if(radioup2.checked == true)
	{
				if(document.getElementById("toolcount2").value == "" || parseInt(document.getElementById("toolcount2").value) <= 0 || parseInt(document.getElementById("toolcount2").value) > toolactualcount){
								alert("Error: Toolcount should be > 0 or not more than Max count :: "+ toolactualcount);
								document.getElementById("toolcount2").value = parseInt(0);
								document.getElementById("toolcount2").select();
								document.getElementById("toolcount2").focus();
								return false;
				}
				
				document.getElementById("toolcount2").disabled = true;
				var n = document.getElementById("tooltype2").value;
				var s = document.getElementById("toolname2").value;
				var x = document.getElementById("toolcname2").value;
				var y = document.getElementById("toolcount2").value;
				updateDatabase(n,s,x,y);
					select_All();
				radioup2.checked = false;
	}else if(radioup3.checked == true)
	{
				if(document.getElementById("toolcount3").value == "" || parseInt(document.getElementById("toolcount3").value) <= 0 || parseInt(document.getElementById("toolcount3").value) > toolactualcount){
								alert("Error: Toolcount should be > 0 or not more than Max count :: "+ toolactualcount);
								document.getElementById("toolcount3").value = parseInt(0);
								document.getElementById("toolcount3").select();
								document.getElementById("toolcount3").focus();
								return false;
				}
				
				document.getElementById("toolcount3").disabled = true;
				var n = document.getElementById("tooltype3").value;
				var s = document.getElementById("toolname3").value;
				var x = document.getElementById("toolcname3").value;
				var y = document.getElementById("toolcount3").value;
				updateDatabase(n,s,x,y);
					select_All();
				radioup3.checked = false;
	}else if(radioup4.checked == true)
	{
				if(document.getElementById("toolcount4").value == "" || parseInt(document.getElementById("toolcount4").value) <= 0 || parseInt(document.getElementById("toolcount4").value) > toolactualcount){
								alert("Error: Toolcount should be > 0 or not more than Max count :: "+ toolactualcount);
								document.getElementById("toolcount4").value = parseInt(0);
								document.getElementById("toolcount4").select();
								document.getElementById("toolcount4").focus();
								return false;
				}
				
				document.getElementById("toolcount4").disabled = true;
				var n = document.getElementById("tooltype4").value;
				var s = document.getElementById("toolname4").value;
				var x = document.getElementById("toolcname4").value;
				var y = document.getElementById("toolcount4").value;
				updateDatabase(n,s,x,y);
					select_All();
				radioup4.checked = false;
	}else if(radioup5.checked == true)
	{
				if(document.getElementById("toolcount5").value == "" || parseInt(document.getElementById("toolcount5").value) <= 0 || parseInt(document.getElementById("toolcount5").value) > toolactualcount){
								alert("Error: Toolcount should be > 0 or not more than Max count :: "+ toolactualcount);
								document.getElementById("toolcount5").value = parseInt(0);
								document.getElementById("toolcount5").select();
								document.getElementById("toolcount5").focus();
								return false;
				}
				
				document.getElementById("toolcount5").disabled = true;
				var n = document.getElementById("tooltype5").value;
				var s = document.getElementById("toolname5").value;
				var x = document.getElementById("toolcname5").value;
				var y = document.getElementById("toolcount5").value;
				updateDatabase(n,s,x,y);
					select_All();
				radioup5.checked = false;
	}
}
function updateDatabase(n,s,x,y){
		//creating XMLhttpRequest object  
		 var xhr;  
			 if (window.XMLHttpRequest) { // Mozilla, Safari, ...  
			xhr = new XMLHttpRequest();  
		} else if (window.ActiveXObject) { // IE 8 and older  
			xhr = new ActiveXObject("Microsoft.XMLHTTP");  
		} 
			
		//creating the xml string  
			xmlString = "<userinfo>" +  
			"  <tooltype>" + escape(n) + "</tooltype>" +  
			"  <toolname>" + escape(s) + "</toolname>" +  
			"  <companyname>" + escape(x) + "</companyname>" +  
			"  <user>" + escape(document.getElementById("user").value) + "</user>" +
			"  <dob>" + escape(document.getElementById("birth").value) + "</dob>" +
			"  <usertype>" + "Buyer" + "</usertype>" + 
			"  <toolcount>" + escape(y) + "</toolcount>" +	
			"</userinfo>";  
		  
		//alert(data);  
		  // Build the URL to connect to  
		  var url = "upgatecart.php";  
		  
		  // Open a connection to the server  
		  xhr.open("POST", url, true);  
		  
		  // declaring that the data being sent is in XML format  
		  xhr.setRequestHeader("Content-Type", "text/xml");  
		  
		  // Send the request  
		  xhr.send(xmlString);  

}
function delete_(n,s,b,x){
 
//creating XMLhttpRequest object  
 var xhr;  
     if (window.XMLHttpRequest) { // Mozilla, Safari, ...  
    xhr = new XMLHttpRequest();  
} else if (window.ActiveXObject) { // IE 8 and older  
    xhr = new ActiveXObject("Microsoft.XMLHTTP");  
} 
	
//creating the xml string  
    xmlString = "<userinfo>" +  
    "  <tooltype>" + escape(n) + "</tooltype>" +  
    "  <toolname>" + escape(s) + "</toolname>" +  
    "  <companyname>" + escape(x) + "</companyname>" +  
	"  <itemcount>" + escape(b) + "</itemcount>" +
	"  <user>" + escape(document.getElementById("user").value) + "</user>" +
	"  <dob>" + escape(document.getElementById("birth").value) + "</dob>" +
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



function scrollDown()
{	
var curLocation = document.getElementById("pos1").value;
		scrollstatus = curLocation;
		upstatus = 1;
		select_All_updown();
}

function scrollUp()
{
	var curLocation = document.getElementById("pos5").value;
		scrollstatus = curLocation;
		upstatus = 2;
		select_All_updown();
}

function checkDate(vartoolcountDate) {

            var month = vartoolcountDate.substring(0, 2);
            var date = vartoolcountDate.substring(3, 5);
            var year = vartoolcountDate.substring(6, 10);

            var myDate = new Date(year, month - 1, date);

            var today = new Date();

            if (myDate > today) {
                return false;
            }
            else {
                return true;
            }
}


   
function select_All(){

     var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
	tmp = params[i].split('=');
       document.getElementById("user").value = tmp[1];
	   document.getElementById("birth").value = tmp[5];
	   document.getElementById("usertype").value = tmp[2];
	   tooltooltype = tmp[3];
	   tooltype = tmp[4];
	   toolcompany =  tmp[6];
	   toolactualcount = tmp[7];
    }

	

   
var value;
	$.ajax({
        url: 'selectcart.php',
        success: function(response) {
            successCallback(response);
        }
    });

}

function successCallback(responseObj){
     var mydata = JSON.stringify(responseObj);
	 var obj = JSON.parse( responseObj );

	var userdb = new Array();
	var dobdb = new Array();
	var usertypedb = new Array();
	var tooltooltypedb = new Array();
	var tooltypedb = new Array();
	var toolctooltypedb = new Array();
	var toolcountdb = new Array();
    
	 var temp = 0;
	for(var i in obj) {
		if(document.getElementById("user").value == obj[i][4] && document.getElementById("birth").value == obj[i][5]
		&& document.getElementById("usertype").value == obj[i][6])
		{
			tooltypedb[temp] = obj[i][0];
			tooltooltypedb[temp] = obj[i][1];
			toolctooltypedb[temp] = obj[i][2];
			toolcountdb[temp] = obj[i][3];
			userdb[temp] = obj[i][4];
			dobdb[temp] = obj[i][5];
			usertypedb[temp] = obj[i][6];
			temp = parseInt(temp) + 1;
		}
    }
		loc = -1;
		
 		for (var i = 0; i < 5 ; i++) {
					var num = i + 1;
					var n = num.toString(); 
					
					var tooltype = "tooltype".concat(n);
					document.getElementById(tooltype).value = "";
					
					var stoolname = "toolname".concat(n);
					document.getElementById(stoolname).value = "";
					
					var toolcount = "toolcount".concat(n);
					document.getElementById(toolcount).value = "";
					
					var toolcname = "toolcname".concat(n);
					document.getElementById(toolcname).value = "";
					
					var pos = "pos".concat(n);
					document.getElementById(pos).value = "";
		}
										
		for (var i = 0; i < userdb.length ; i++) {
					if(i >= 5) {
					var num;
					loc = loc + 1;

					
							document.getElementById("tooltype1").value = tooltypedb[i-4];
							document.getElementById("toolname1").value = tooltooltypedb[i-4];
							document.getElementById("toolcount1").value = toolctooltypedb[i-4];
							document.getElementById("toolcname1").value = toolcountdb[i-4];
							document.getElementById("pos1").value = i-4;

							document.getElementById("tooltype2").value = tooltypedb[i-3];
							document.getElementById("toolname2").value = tooltooltypedb[i-3];
							document.getElementById("toolcount2").value = toolctooltypedb[i-3];
							document.getElementById("toolcname2").value = toolcountdb[i-3];
							document.getElementById("pos2").value = i-3;

							document.getElementById("tooltype3").value = tooltypedb[i-2];
							document.getElementById("toolname3").value = tooltooltypedb[i-2];
							document.getElementById("toolcount3").value =toolctooltypedb[i-2];
							document.getElementById("toolcname3").value = toolcountdb[i-2];
							document.getElementById("pos3").value = i-2;

							document.getElementById("tooltype4").value = tooltypedb[i-1];
							document.getElementById("toolname4").value = tooltooltypedb[i-1];
							document.getElementById("toolcount4").value = toolctooltypedb[i-1];
							document.getElementById("toolcname4").value = toolcountdb[i-1];
							document.getElementById("pos4").value = i-1;
						
							document.getElementById("tooltype5").value = tooltypedb[i];
							document.getElementById("toolname5").value = tooltooltypedb[i];
							document.getElementById("toolcount5").value = toolctooltypedb[i];
							document.getElementById("toolcname5").value = toolcountdb[i];
							document.getElementById("pos5").value = i;
						
					}
					else{
					loc = loc + 1;
					var num = i + 1;
					var n = num.toString(); 
					
					var tooltype = "tooltype".concat(n);
					document.getElementById(tooltype).value = tooltypedb[i];
					
					var stoolname = "toolname".concat(n);
					document.getElementById(stoolname).value = tooltooltypedb[i];
					
					var toolcount = "toolcount".concat(n);
					document.getElementById(toolcount).value = toolctooltypedb[i];
					
					var toolcname = "toolcname".concat(n);
					document.getElementById(toolcname).value = toolcountdb[i];
					
					var pos = "pos".concat(n);
					document.getElementById(pos).value = i;
					}
					
				}
				
}

function select_All_updown(){
  var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
	tmp = params[i].split('=');
       document.getElementById("user").value = tmp[1];
	   document.getElementById("birth").value = tmp[5];
	   document.getElementById("usertype").value = tmp[2];
	   tooltooltype = tmp[3];
	   tooltype = tmp[4];
	   toolcompany =  tmp[6];
	   toolactualcount = tmp[7];
    }

	

	
var value;
	$.ajax({
        url: 'select.php',
        success: function(response) {
            successCallback_updown(response);
        }
    });

}

function successCallback_updown(responseObj){
     var mydata = JSON.stringify(responseObj);
	 var obj = JSON.parse( responseObj );

	var userdb = new Array();
	var dobdb = new Array();
	var usertypedb = new Array();
	var tooltooltypedb = new Array();
	var tooltypedb = new Array();
	var toolctooltypedb = new Array();
	var toolcountdb = new Array();
    
		 var temp = 0;
	for(var i in obj) {
		if(document.getElementById("user").value == obj[i][4] && document.getElementById("birth").value == obj[i][5]
		&& document.getElementById("usertype").value == obj[i][6])
		{
			tooltypedb[temp] = obj[i][0];
			tooltooltypedb[temp] = obj[i][1];
			toolctooltypedb[temp] = obj[i][2];
			toolcountdb[temp] = obj[i][3];
			userdb[temp] = obj[i][4];
			dobdb[temp] = obj[i][5];
			usertypedb[temp] = obj[i][6];
			temp = parseInt(temp) + 1;
		}
    }

		loc = -1;
		
	if(upstatus == 2 && (parseInt(parseInt(scrollstatus) - 5)) < 0){
			alert("Cannot scroll up");
	}else if(upstatus == 1 && (parseInt(parseInt(scrollstatus) + 5)) == userdb.length){
			alert("Cannot scroll down");
	}else {
 		for (var i = 0; i < 5 ; i++) {
					var num = i + 1;
					var n = num.toString(); 
					
					var tooltype = "tooltype".concat(n);
					document.getElementById(tooltype).value = "";
					
					var stoolname = "toolname".concat(n);
					document.getElementById(stoolname).value = "";
					
					var toolcount = "toolcount".concat(n);
					document.getElementById(toolcount).value = "";
					
					var toolcname = "toolcname".concat(n);
					document.getElementById(toolcname).value = "";
					
					var pos = "pos".concat(n);
					document.getElementById(pos).value = "";
		}
	
		var i = parseInt(parseInt(scrollstatus));
					if(upstatus == 2) {
					
							document.getElementById("tooltype1").value = tooltypedb[i-5];
							document.getElementById("toolname1").value = tooltooltypedb[i-5];
							document.getElementById("toolcount1").value = toolctooltypedb[i-5];
							document.getElementById("toolcname1").value = toolcountdb[i-5];
							document.getElementById("pos1").value = i-5;

							document.getElementById("tooltype2").value = tooltypedb[i-4];
							document.getElementById("toolname2").value = tooltooltypedb[i-4];
							document.getElementById("toolcount2").value = toolctooltypedb[i-4];
							document.getElementById("toolcname2").value = toolcountdb[i-4];
							document.getElementById("pos2").value = i-4;

							document.getElementById("tooltype3").value = tooltypedb[i-3];
							document.getElementById("toolname3").value = tooltooltypedb[i-3];
							document.getElementById("toolcount3").value =toolctooltypedb[i-3];
							document.getElementById("toolcname3").value = toolcountdb[i-3];
							document.getElementById("pos3").value = i-3;

							document.getElementById("tooltype4").value = tooltypedb[i-2];
							document.getElementById("toolname4").value = tooltooltypedb[i-2];
							document.getElementById("toolcount4").value = toolctooltypedb[i-2];
							document.getElementById("toolcname4").value = toolcountdb[i-2];
							document.getElementById("pos4").value = i-2;
						
							document.getElementById("tooltype5").value = tooltypedb[i-1];
							document.getElementById("toolname5").value = tooltooltypedb[i-1];
							document.getElementById("toolcount5").value = toolctooltypedb[i-1];
							document.getElementById("toolcname5").value = toolcountdb[i-1];
							document.getElementById("pos5").value = i-1;
						
					}
					else if(upstatus == 1){
							document.getElementById("tooltype1").value = tooltypedb[i+1];
							document.getElementById("toolname1").value = tooltooltypedb[i+1];
							document.getElementById("toolcount1").value = toolctooltypedb[i+1];
							document.getElementById("toolcname1").value = toolcountdb[i+1];
							document.getElementById("pos1").value = i+1;

							document.getElementById("tooltype2").value = tooltypedb[i+2];
							document.getElementById("toolname2").value = tooltooltypedb[i+2];
							document.getElementById("toolcount2").value = toolctooltypedb[i+2];
							document.getElementById("toolcname2").value = toolcountdb[i+2];
							document.getElementById("pos2").value = i+2;

							document.getElementById("tooltype3").value = tooltypedb[i+3];
							document.getElementById("toolname3").value = tooltooltypedb[i+3];
							document.getElementById("toolcount3").value =toolctooltypedb[i+3];
							document.getElementById("toolcname3").value = toolcountdb[i+3];
							document.getElementById("pos3").value = i+3;

							document.getElementById("tooltype4").value = tooltypedb[i+4];
							document.getElementById("toolname4").value = tooltooltypedb[i+4];
							document.getElementById("toolcount4").value = toolctooltypedb[i+4];
							document.getElementById("toolcname4").value = toolcountdb[i+4];
							document.getElementById("pos4").value = i+4;
						
							document.getElementById("tooltype5").value = tooltypedb[i+5];
							document.getElementById("toolname5").value = tooltooltypedb[i+5];
							document.getElementById("toolcount5").value = toolctooltypedb[i+5];
							document.getElementById("toolcname5").value = toolcountdb[i+5];
							document.getElementById("pos5").value = i+5;					
					}
		}
}

