
var myArray = new Array();
var loc = -1;
var insertflag1;
var cardType = "";


var scrollstatus;
var upstatus;

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


function handleChange()
{
	if(radio1.checked == true)
	{
			var r=confirm("If you want to delete the row click 'OK' else click 'Cancel'");
			if (r==true)
			{
				var n = document.getElementById("type1").value;
				var s = document.getElementById("name1").value;
				var b = document.getElementById("cname1").value;
				
				delete_(n,s,b);
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
				var n = document.getElementById("type2").value;
				var s = document.getElementById("name2").value;
				var b = document.getElementById("cname2").value;

				
				delete_(n,s,b);
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
				
								var n = document.getElementById("type3").value;
				var s = document.getElementById("name3").value;
				var b = document.getElementById("cname3").value;

				delete_(n,s,b);
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
								var n = document.getElementById("type4").value;
				var s = document.getElementById("name4").value;
				var b = document.getElementById("cname4").value;

				delete_(n,s,b);
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
				var n = document.getElementById("type5").value;
				var s = document.getElementById("name5").value;
				var b = document.getElementById("cname5").value;

				
				delete_(n,s,b);
				select_All();
				radio5.checked = false;
			}
			else
			{
				
				radio5.checked = false;
			}
	}

}

function validateForm(){
		if(document.getElementById("design").checked)
		{
			cardType = "design";
		}
		else if(document.getElementById("database").checked)
		{
			cardType = "database";
		}
		else if(document.getElementById("databasetool").checked)
		{
			cardType = "databasetool";
		}
		else if(document.getElementById("codecoverage").checked)
		{
			cardType = "codecoverage";
		}
		else if(document.getElementById("testingtool").checked)
		{
			cardType = "testingtool";
		}
		else if(document.getElementById("development").checked)
		{
			cardType = "development";
		}
		else if(document.getElementById("profiling").checked)
		{
			cardType = "profiling";
		}
		else if(document.getElementById("requirement").checked)
		{
			cardType = "requirement";
		}
		else if(document.getElementById("versioning").checked)
		{
			cardType = "versioning";
		}
		else if(document.getElementById("webdesign").checked)
		{
			cardType = "webdesign";
		}
		else if(document.getElementById("appserver").checked)
		{
			cardType = "appserver";
		}
		
			var varNameflag=check(document.getElementById("namei").value);
			
			if(varNameflag==false)
			{
					alert("Please enter a valid tool name. too name can only contain alphabets and white spaces");
					document.getElementById("namei").select();
					document.getElementById("namei").focus();
					return false;
			}
			
			
			var varName= /^[a-zA-Z0-9\s]*$/;
			if(!(varName.test(document.getElementById("namei").value)))
			{
				alert("Please enter a valid tool name,tool name can only contain alphabets and white spaces");
				document.getElementById("namei").select();
				document.getElementById("namei").focus();
				return false;
			}
			

			var varSecure = /^\d{3}$/;
			if(!(varSecure.test(document.getElementById("counti").value)))
			{
				alert("Please enter a valid tool count. Valid tool count consist of 3 digits");
				document.getElementById("counti").select();
				document.getElementById("counti").focus();
				return false;
			}
			
			if(!checkSalary(document.getElementById("xxxxi").value))
		{
			alert("Please enter a valid tool cost.Max eight digits, a dot, max two digits after dot");
			document.getElementById("xxxxi").select();
			document.getElementById("xxxxi").focus();
			return false;
		}
		
			
			var varcnameiflag=check(document.getElementById("cnamei").value);
			
			if(varcnameiflag==false)
			{
					alert("Please enter a valid tool company name. tool company Name can only contain alphabets and white spaces");
					document.getElementById("cnamei").select();
					document.getElementById("cnamei").focus();
					return false;
			}
			
			
			var varCompanyName= /^[a-zA-Z0-9\s]*$/;
			if(!(varCompanyName.test(document.getElementById("cnamei").value)))
			{
				alert("Please enter a valid tool company name,tool company name can only contain alphabets and white spaces");
				document.getElementById("cnamei").select();
				document.getElementById("cnamei").focus();
				return false;
			}
			
			var varcaddressiflag=check(document.getElementById("caddressi").value);
			
			if(varcaddressiflag==false)
			{
					alert("Please enter a valid tool company address. tool company address can only contain alphabets and white spaces");
					document.getElementById("caddressi").select();
					document.getElementById("caddressi").focus();
					return false;
			}
			
			var varsysreqiflag=check(document.getElementById("sysreqi").value);
			
			if(varsysreqiflag==false)
			{
					alert("Please enter a valid tool system requirement. tool system requirement can only contain alphabets and white spaces");
					document.getElementById("sysreqi").select();
					document.getElementById("sysreqi").focus();
					return false;
			}
			
			
			var varversioniflag=check(document.getElementById("versioni").value);
			
			if(varversioniflag==false)
			{
					alert("Please enter a valid tool version. tool version can only contain alphabets and white spaces");
					document.getElementById("versioni").select();
					document.getElementById("versioni").focus();
					return false;
			}
			
			var varimageiflag=check(document.getElementById("imagei").value);
			if(varimageiflag==false)
			{
					alert("Please enter a valid tool image name. tool image name with extension");
					document.getElementById("imagei").select();
					document.getElementById("imagei").focus();
					return false;
			}
			
			if (!(document.getElementById("imagei").value).match(/\.(jpg|jpeg|png|gif)$/))
			{
					alert("Please enter a valid tool image name. tool image name with extension");
					document.getElementById("imagei").select();
					document.getElementById("imagei").focus();
					return false;
			}
			var vardetailiflag=check(document.getElementById("detailsi").value);
			
			if(vardetailiflag==false)
			{
					alert("Please enter a valid tool detail. tool detail can only contain alphabets and white spaces");
					document.getElementById("detailsi").select();
					document.getElementById("detailsi").focus();
					return false;
			}
			
			alert("cardType"+cardType+document.getElementById("namei").value+"detailsi"+
			document.getElementById("detailsi").value+"price"+document.getElementById("xxxxi").value+"counti"+document.getElementById("counti").value+
			"cnamei"+document.getElementById("cnamei").value+"caddressi"+document.getElementById("caddressi").value+
			"sysreqi"+document.getElementById("sysreqi").value+"versioni"+document.getElementById("versioni").value+"imagei"+document.getElementById("imagei").value);
			
			insert();
		select_All();
}


function checkSalary(salary) {
    var re = /^\d{1,8}\.\d{0,2}$/;
		return re.test(salary);
}


function check(address)
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

function select_All(){
     var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
	tmp = params[i].split('=');
     data[tmp[0]] = tmp[1];
	 data[tmp[2]] = tmp[3];
	 data[tmp[4]] = tmp[5];
    }
	/*
   name = data.name;
   dob = data.dob;
   type = data.type;
   */
   document.getElementById("user").value = data.name;


	$.ajax({
        url: 'selecttool.php',
        success: function(response) {
            successCallback(response);
        }
    });

}

function successCallback(responseObj){
   var obj = JSON.parse(responseObj);
var tooltype = new Array();
var toolname = new Array();
var noofcopies = new Array();
var companyname = new Array();
var versiondb = new Array();
var imagedb = new Array();
var cmaddress = new Array();
var sysreqdb = new Array();
var costdb = new Array();
var detail = new Array();
	
	for(var i in obj) {
        tooltype[i] = obj[i][0];
		toolname[i] = obj[i][1];
		noofcopies[i] = obj[i][2];
		companyname[i] = obj[i][3];
		
		versiondb[i] = obj[i][4];
		imagedb[i] = obj[i][5];
		cmaddress[i] = obj[i][6];
		sysreqdb[i] = obj[i][7];

		costdb[i] = obj[i][8];
		detail[i] = obj[i][9];
    }
		loc = -1;
		
 		for (var i = 0; i < 5 ; i++) {
					var num = i + 1;
					var n = num.toString(); 
					
					var type = "type".concat(n);
					document.getElementById(type).value = "";
					
					var name = "name".concat(n);
					document.getElementById(name).value = "";
					
					var details = "details".concat(n);
					document.getElementById(details).value = "";
					
					var count = "count".concat(n);
					document.getElementById(count).value = "";
					
					var cname = "cname".concat(n);
					document.getElementById(cname).value = "";
					
					var caddress = "caddress".concat(n);
					document.getElementById(caddress).value = "";
					
					var sysreq = "sysreq".concat(n);
					document.getElementById(sysreq).value = "";
					
					var version = "version".concat(n);
					document.getElementById(version).value = "";
					
					var cost = "cost".concat(n);
					document.getElementById(cost).value = "";
					
					var image = "image".concat(n);
					document.getElementById(image).src = "";
		}
										
		for (var i = 0; i < tooltype.length ; i++) {
					if(i >= 5) {
					var num;
					loc = loc + 1;

					
							document.getElementById("type1").value = tooltype[i-4];
							document.getElementById("name1").value = toolname[i-4];
							document.getElementById("details1").value = detail[i-4];
							document.getElementById("count1").value = noofcopies[i-4];
							document.getElementById("cname1").value = companyname[i-4];
							document.getElementById("caddress1").value = cmaddress[i-4];
							document.getElementById("sysreq1").value = sysreqdb[i-4];
							document.getElementById("cost1").value = costdb[i-4];
							document.getElementById("version1").value = versiondb[i-4];
							document.getElementById("image1").value = imagedb[i-4];
							document.getElementById("pos1").value = i-4;
							
							document.getElementById("type2").value =tooltype[i-3];
							document.getElementById("name2").value =toolname[i-3];
							document.getElementById("details2").value = detail[i-3];
							document.getElementById("count2").value  = noofcopies[i-3];
							document.getElementById("cname2").value = companyname[i-3];
							document.getElementById("caddress2").value = cmaddress[i-3];
							document.getElementById("sysreq2").value = sysreqdb[i-3];
							document.getElementById("cost2").value = costdb[i-3];
							document.getElementById("version2").value = versiondb[i-3];
							document.getElementById("image2").src  = imagedb[i-3];
							document.getElementById("pos2").value = i-3;
							
							document.getElementById("type3").value =tooltype[i-2];
							document.getElementById("name3").value =toolname[i-2];
							document.getElementById("count3").value  = noofcopies[i-2];
							document.getElementById("details3").value = detail[i-2];
							document.getElementById("cname3").value  = companyname[i-2];
							document.getElementById("caddress3").vale = cmaddress[i-2];
							document.getElementById("sysreq3").value= sysreqdb[i-2];
							document.getElementById("cost3").value = costdb[i-2];
							document.getElementById("version3").value = versiondb[i-2];
							document.getElementById("image3").src  = imagedb[i-2];
							document.getElementById("pos3").value = i-2;

							document.getElementById("type4").value =tooltype[i-1];
							document.getElementById("name4").value =toolname[i-1];
							document.getElementById("count4").value  = noofcopies[i-1];
							document.getElementById("details4").value = detail[i-1];
							document.getElementById("cname4").value = companyname[i-1];
							document.getElementById("caddress4").value = cmaddress[i-1];
							document.getElementById("sysreq4").value= sysreqdb[i-1];
							document.getElementById("cost4").value = costdb[i-1];
							document.getElementById("version4").value = versiondb[i-1];
							document.getElementById("image4").src =  image[i-1];
							document.getElementById("pos4").value = i-1;

						
							document.getElementById("type5").value =tooltype[i];
							document.getElementById("name5").value =toolname[i];
							document.getElementById("count5").value = noofcopies[i]; 
							document.getElementById("details5").vale = detail[i];
							document.getElementById("cname5").value= companyname[i]; 
						   document.getElementById("caddress5").value = cmaddress[i];
							document.getElementById("sysreq5").value = sysreqdb[i];
							document.getElementById("cost5").value = costdb[i];
							document.getElementById("version5").value = versiondb[i];
							document.getElementById("image5").src =  image[i]; 
							document.getElementById("pos5").value =i; 
						
					}
					else{
					loc = loc + 1;
					var num = i + 1;
					var n = num.toString(); 
					
					
					var type = "type".concat(n);
					document.getElementById(type).value = tooltype[i];
					
					var name = "name".concat(n);
					document.getElementById(name).value = toolname[i];
					
					var details = "details".concat(n);
					document.getElementById(details).value = detail[i];
					
					var count = "count".concat(n);
					document.getElementById(count).value = noofcopies[i];
					
					var cname = "cname".concat(n);
					document.getElementById(cname).value = companyname[i];
					
					var caddress = "caddress".concat(n);
					document.getElementById(caddress).value = cmaddress[i];
					
					var sysreq = "sysreq".concat(n);
					document.getElementById(sysreq).value = sysreqdb[i];
					
					var cost = "cost".concat(n);
					document.getElementById(cost).value = costdb[i];
					
					var version = "version".concat(n);
					document.getElementById(version).value = versiondb[i];
					
					var image = "image".concat(n);
					document.getElementById(image).src = imagedb[i];
					}
					
				}
				
}


function insert() {  
		//creating XMLhttpRequest object  
		 var xhr;  
			 if (window.XMLHttpRequest) { // Mozilla, Safari, ...  
			xhr = new XMLHttpRequest();  
		} else if (window.ActiveXObject) { // IE 8 and older  
			xhr = new ActiveXObject("Microsoft.XMLHTTP");  
		}  

		//creating the xml string  
			xmlString = "<userinfo>" +  
			"  <tooltype>" + cardType + "</tooltype>" +  
			"  <toolname>" + document.getElementById("namei").value + "</toolname>" +  
			"  <detail>" + document.getElementById("detailsi").value + "</detail>" +  
			"  <cost>" + document.getElementById("xxxxi").value + "</cost>" +
			"  <noofcopies>" + document.getElementById("counti").value + "</noofcopies>" +
			"  <companyname>" + document.getElementById("cnamei").value+ "</companyname>" +
			"  <caddress>" + document.getElementById("caddressi").value+ "</caddress>" +
			"  <sysreq>" + document.getElementById("sysreqi").value+ "</sysreq>" +			
			"  <version>" + document.getElementById("versioni").value + "</version>" +
			"  <image>" + document.getElementById("imagei").value + "</image>" +
			"  <version>" + document.getElementById("versioni").value + "</version>" +
			"</userinfo>";  
		  
		//alert(data);  
		  // Build the URL to connect to  
		   var url = "inserttool.php";
		  
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

function delete_(n,s,b) {  

  
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
    "  <companyname>" + escape(b) + "</companyname>" +  
    "</userinfo>";  
  
//alert(data);  
  // Build the URL to connect to  
  var url = "deletetool.php";  
  
  // Open a connection to the server  
  xhr.open("POST", url, true);  
  
  // declaring that the data being sent is in XML format  
  xhr.setRequestHeader("Content-Type", "text/xml");  
  
  // Send the request  
  xhr.send(xmlString);  
}  

function select_All_updown(){
var value;
	$.ajax({
        url: 'selecttool.php',
        success: function(response) {
            successCallback_updown(response);
        }
    });

}

function successCallback_updown(responseObj){
 var obj = JSON.parse( responseObj );

var tooltype = new Array();
var toolname = new Array();
var noofcopies = new Array();
var companyname = new Array();
var versiondb = new Array();
var imagedb = new Array();
var cmaddress = new Array();
var sysreqdb = new Array();
var costdb = new Array();
var detail = new Array();
	
	for(var i in obj) {
        tooltype[i] = obj[i][0];
		toolname[i] = obj[i][1];
		noofcopies[i] = obj[i][2];
		companyname[i] = obj[i][3];
		
		versiondb[i] = obj[i][4];
		imagedb[i] = obj[i][5];
		cmaddress[i] = obj[i][6];
		sysreqdb[i] = obj[i][7];

		costdb[i] = obj[i][8];
		detail[i] = obj[i][9];
    }
		loc = -1;
		
	if(upstatus == 2 && (parseInt(parseInt(scrollstatus) - 5)) < 0){
			alert("Cannot scroll up");
	}else if(upstatus == 1 && (parseInt(parseInt(scrollstatus) + 5)) == tooltype.length){
			alert("Cannot scroll down");
	}else {
 		for (var i = 0; i < 5 ; i++) {
					var num = i + 1;
					var n = num.toString(); 
					
					var type = "type".concat(n);
					document.getElementById(type).value = "";
					
					var name = "name".concat(n);
					document.getElementById(name).value = "";
					
					var details = "details".concat(n);
					document.getElementById(details).value = "";
					
					var count = "count".concat(n);
					document.getElementById(count).value = "";
					
					var cname = "cname".concat(n);
					document.getElementById(cname).value = "";
					
					var caddress = "caddress".concat(n);
					document.getElementById(caddress).value = "";
					
					var sysreq = "sysreq".concat(n);
					document.getElementById(sysreq).value = "";
					
					var version = "version".concat(n);
					document.getElementById(version).value = "";
					
					var cost = "cost".concat(n);
					document.getElementById(cost).value = "";
					
					var image = "image".concat(n);
					document.getElementById(image).src = "";
					
		}
	
		var i = parseInt(parseInt(scrollstatus));
					if(upstatus == 2) {
					
							document.getElementById("type1").value = tooltype[i-5];
							document.getElementById("name1").value = toolname[i-5];
							document.getElementById("details1").value = detail[i-5];
							document.getElementById("count1").value = noofcopies[i-5];
							document.getElementById("cname1").value = companyname[i-5];
							document.getElementById("caddress1").value = cmaddress[i-5];
							document.getElementById("sysreq1").value = sysreqdb[i-5];
							document.getElementById("cost1").value = costdb[i-5];
							document.getElementById("version1").value = versiondb[i-5];
							document.getElementById("image1").src = imagedb[i-5];
							document.getElementById("pos1").value = i-5;
							
							document.getElementById("type2").value =tooltype[i-4];
							document.getElementById("name2").value =toolname[i-4];
							document.getElementById("count2").value  = noofcopies[i-4];
							document.getElementById("details2").value = detail[i-4];
							document.getElementById("cname2").value = companyname[i-4];
							document.getElementById("caddress2").value = cmaddress[i-4];
							document.getElementById("sysreq2").value = sysreqdb[i-4];
							document.getElementById("cost2").value = costdb[i-4];
							document.getElementById("version2").value = versiondb[i-4];
							document.getElementById("image2").src  = imagedb[i-4];
							document.getElementById("pos2").value = i-4;
							
							document.getElementById("type3").value =tooltype[i-3];
							document.getElementById("name3").value =toolname[i-3];
							document.getElementById("count3").value  = noofcopies[i-3];
							document.getElementById("details3").value = detail[i-3];
							document.getElementById("cname3").value  = companyname[i-3];
							document.getElementById("caddress3").vale = cmaddress[i-3];
							document.getElementById("sysreq3").value= sysreqdb[i-3];
							document.getElementById("cost3").value = costdb[i-3];
							document.getElementById("version3").value = versiondb[i-3];
							document.getElementById("image3").src  = imagedb[i-3];
							document.getElementById("pos3").value = i-3;

							document.getElementById("type4").value =tooltype[i-2];
							document.getElementById("name4").value =toolname[i-2];
							document.getElementById("count4").value  = noofcopies[i-2];
							document.getElementById("details4").value = detail[i-2];
							document.getElementById("cname4").value = companyname[i-2];
							document.getElementById("caddress4").value = cmaddress[i-2];
							document.getElementById("sysreq4").value= sysreqdb[i-2];
							document.getElementById("cost4").value = costdb[i-2];
							document.getElementById("version4").value = versiondb[i-2];
							document.getElementById("image4").src =  image[i-2];
							document.getElementById("pos4").value = i-2;

						
							document.getElementById("type5").value =tooltype[i-1];
							document.getElementById("name5").value =toolname[i-1];
							document.getElementById("count5").value = noofcopies[i-1]; 
							document.getElementById("details5").vale = detail[i-1];
							document.getElementById("cname5").value= companyname[i-1]; 
						   document.getElementById("caddress5").value = cmaddress[i-1];
							document.getElementById("sysreq5").value = sysreqdb[i-1];
							document.getElementById("cost5").value = costdb[i-1];
							document.getElementById("version5").value = versiondb[i-1];
							document.getElementById("image5").src =  image[i-1]; 
							document.getElementById("pos5").value =i-1; 
						
					}
					else if(upstatus == 1){

							document.getElementById("type1").value = tooltype[i+1];
							document.getElementById("name1").value = toolname[i+1];
							document.getElementById("details1").value = detail[i+1];
							document.getElementById("count1").value = noofcopies[i+1];
							document.getElementById("cname1").value = companyname[i+1];
							document.getElementById("caddress1").value = cmaddress[i+1];
							document.getElementById("sysreq1").value = sysreqdb[i+1];
							document.getElementById("cost1").value = costdb[i+1];
							document.getElementById("version1").value = versiondb[i+1];
							document.getElementById("image1").src = imagedb[i+1];
							document.getElementById("pos1").value = i+1;
							
							document.getElementById("type2").value =tooltype[i+2];
							document.getElementById("name2").value =toolname[i+2];
							document.getElementById("count2").value  = noofcopies[i+2];
							document.getElementById("details2").value = detail[i+2];
							document.getElementById("cname2").value = companyname[i+2];
							document.getElementById("caddress2").value = cmaddress[i+2];
							document.getElementById("sysreq2").value = sysreqdb[i+2];
							document.getElementById("cost2").value = costdb[i+2];
							document.getElementById("version2").value = versiondb[i+2];
							document.getElementById("image2").src  = imagedb[i+2];
							document.getElementById("pos2").value = i+2;
							
							document.getElementById("type3").value =tooltype[i+3];
							document.getElementById("name3").value =toolname[i+3];
							document.getElementById("count3").value  = noofcopies[i+3];
							document.getElementById("details3").value = detail[i+3];
							document.getElementById("cname3").value  = companyname[i+3];
							document.getElementById("caddress3").vale = cmaddress[i+3];
							document.getElementById("sysreq3").value= sysreqdb[i+3];
							document.getElementById("cost3").value = costdb[i+3];
							document.getElementById("version3").value = versiondb[i+3];
							document.getElementById("image3").src  = imagedb[i+3];
							document.getElementById("pos3").value = i+3;

							document.getElementById("type4").value =tooltype[i+4];
							document.getElementById("name4").value =toolname[i+4];
							document.getElementById("count4").value  = noofcopies[i+4];
							document.getElementById("details4").value = detail[i+4];
							document.getElementById("cname4").value = companyname[i+4];
							document.getElementById("caddress4").value = cmaddress[i+4];
							document.getElementById("sysreq4").value= sysreqdb[i+4];
							document.getElementById("cost4").value = costdb[i+4];
							document.getElementById("version4").value = versiondb[i+4];
							document.getElementById("image4").src =  image[i+4];
							document.getElementById("pos4").value = i+4;

						
							document.getElementById("type5").value =tooltype[i+5];
							document.getElementById("name5").value =toolname[i+5];
							document.getElementById("count5").value = noofcopies[i+5]; 
							document.getElementById("details5").vale = detail[i+5];
							document.getElementById("cname5").value= companyname[i+5]; 
						   document.getElementById("caddress5").value = cmaddress[i+5];
							document.getElementById("sysreq5").value = sysreqdb[i+5];
							document.getElementById("cost5").value = costdb[i+5];
							document.getElementById("version5").value = versiondb[i+5];
							document.getElementById("image5").src =  image[i+5]; 
							document.getElementById("pos5").value =i+5; 
											}
		}
}




function handleChangeUpdate()
{
	if(radioup1.checked == true)
	{
				document.getElementById("details1").disabled = false;
				document.getElementById("count1").disabled = false;
				document.getElementById("caddress1").disabled = false;
				document.getElementById("sysreq1").disabled = false;
				document.getElementById("cost1").disabled = false;
				document.getElementById("version1").disabled = false;
	}else if(radioup2.checked == true)
	{
			document.getElementById("details2").disabled = false;
				document.getElementById("count2").disabled = false;
				document.getElementById("caddress2").disabled = false;
				document.getElementById("sysreq2").disabled = false;
				document.getElementById("cost2").disabled = false;
				document.getElementById("version2").disabled = false;
	}else if(radioup3.checked == true)
	{
			document.getElementById("details3").disabled = false;
				document.getElementById("count3").disabled = false;
				document.getElementById("caddress3").disabled = false;
				document.getElementById("sysreq3").disabled = false;
				document.getElementById("cost3").disabled = false;
				document.getElementById("version3").disabled = false;
	}else if(radioup4.checked == true)
	{
			document.getElementById("details4").disabled = false;
				document.getElementById("count4").disabled = false;
				document.getElementById("caddress4").disabled = false;
				document.getElementById("sysreq4").disabled = false;
				document.getElementById("cost4").disabled = false;
				document.getElementById("version4").disabled = false;
	}else if(radioup5.checked == true)
	{
			document.getElementById("details5").disabled = false;
				document.getElementById("count5").disabled = false;
				document.getElementById("caddress5").disabled = false;
				document.getElementById("sysreq5").disabled = false;
				document.getElementById("cost5").disabled = false;
				document.getElementById("version5").disabled = false;
	}

}

function updatetool(){

	if(radioup1.checked == true)
	{
				verify(1);
		
	}else if(radioup2.checked == true)
	{
				verify(2);
	}else if(radioup3.checked == true)
	{
				verify(3);
	}else if(radioup4.checked == true)
	{
				verify(4);
	}else if(radioup5.checked == true)
	{
				verify(5);				
	}
}

function verify(n){

	var num = n.toString(); 
	var details = "details".concat(num);
	var count = "count".concat(num);				
	var  caddress = "caddress".concat(num);
	var sysreq = "sysreq".concat(num);
	var cost = "cost".concat(num);
	var version = "version".concat(num);

	var varSecure = /^\d{3}$/;
			if(!(varSecure.test(document.getElementById(count).value)))
			{
				alert("Please enter a valid tool count. Valid tool count consist of 3 digits");
				document.getElementById(count).select();
				document.getElementById(count).focus();
				return false;
			}
			
			if(!checkSalary(document.getElementById(cost).value))
		{
			alert("Please enter a valid tool cost.Max eight digits, a dot, max two digits after dot");
			document.getElementById(cost).select();
			document.getElementById(cost).focus();
			return false;
		}
		
			
			var varcaddressiflag=check(document.getElementById(caddress).value);
			
			if(varcaddressiflag==false)
			{
					alert("Please enter a valid tool company address. tool company address can only contain alphabets and white spaces");
					document.getElementById(caddress).select();
					document.getElementById(caddress).focus();
					return false;
			}
			
			var varsysreqiflag=check(document.getElementById(sysreq).value);
			
			if(varsysreqiflag==false)
			{
					alert("Please enter a valid tool system requirement. tool system requirement can only contain alphabets and white spaces");
					document.getElementById(sysreq).select();
					document.getElementById(sysreq).focus();
					return false;
			}
			
			
			var varversioniflag=check(document.getElementById(version).value);
			
			if(varversioniflag==false)
			{
					alert("Please enter a valid tool version. tool version can only contain alphabets and white spaces");
					document.getElementById(version).select();
					document.getElementById(version).focus();
					return false;
			}
			
			var vardetailiflag=check(document.getElementById(details).value);
			
			if(vardetailiflag==false)
			{
					alert("Please enter a valid tool detail. tool detail can only contain alphabets and white spaces");
					document.getElementById(details).select();
					document.getElementById(details).focus();
					return false;
			}					
				disablegetupdate(n);
}

function disablegetupdate(n){

	var num = n.toString(); 
	var details = "details".concat(num);
	var count = "count".concat(num);				
	var caddress = "caddress".concat(num);
	var sysreq = "sysreq".concat(num);
	var cost = "cost".concat(num);
	var version = "version".concat(num);
	var type = "type".concat(num);
	var name = "name".concat(num);
	var cname = "cname".concat(num);
	
				document.getElementById(details).disabled = false;
				document.getElementById(count).disabled = false;
				document.getElementById(caddress).disabled = false;
				document.getElementById(sysreq).disabled = false;
				document.getElementById(cost).disabled = false;
				document.getElementById(version).disabled = false;
				
				updateDatabase(document.getElementById(type).value,document.getElementById(name).value,
				document.getElementById(cname).value,document.getElementById(details).value,
				document.getElementById(count).value,document.getElementById(caddress).value,
				document.getElementById(sysreq).value,document.getElementById(cost).value
				,document.getElementById(version).value);
				
				select_All();
				
				radio1.checked = false;
				radio2.checked = false;
				radio3.checked = false;
				radio4.checked = false;
				radio5.checked = false;
				
}

function updateDatabase(a,b,c,d,e,f,g,h,i){
		//creating XMLhttpRequest object  
		 var xhr;  
			 if (window.XMLHttpRequest) { // Mozilla, Safari, ...  
			xhr = new XMLHttpRequest();  
		} else if (window.ActiveXObject) { // IE 8 and older  
			xhr = new ActiveXObject("Microsoft.XMLHTTP");  
		}  

		//creating the xml string  
			xmlString = "<userinfo>" +  
			"  <a>" + unescape(a) + "</a>" +  
			"  <b>" + unescape(b) + "</b>" +    
			"  <c>" + unescape(c) + "</c>" +  
			"  <d>" + unescape(d) + "</d>" +
			"  <e>" + unescape(e) + "</e>" +  
			"  <f>" + unescape(f) + "</f>" +
			"  <g>" + unescape(g) + "</g>" +  
			"  <h>" + unescape(h) + "</h>" +
			"  <i>" + unescape(i) + "</i>" + 
			"</userinfo>";  
		  
		//alert(data);  
		  // Build the URL to connect to  
		   var url = "updatetooladmin.php";
		  
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