var type;
var search;
var myArray = new Array();
var loc = -1;
var insertflag1;
var cardType = "";
var scrollstatus;
var upstatus;


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
var lastupdate = new Array();

var namec;

function scrollDown()
{	
var curLocation = document.getElementById("position1").value;
		scrollstatus = curLocation;
		upstatus = 1;
		select_All_updown();
}

function scrollUp()
{
	var curLocation = document.getElementById("position5").value;
		scrollstatus = curLocation;
		upstatus = 2;
		select_All_updown();
}


function firstload(){
		var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
	tmp = params[i].split('=');
     data[tmp[0]] = tmp[1];
	 data[tmp[2]] = tmp[3];
	 data[tmp[4]] = tmp[5];
	 data[tmp[6]] = tmp[7];
    }
	/*
   name = data.name;
   dob = data.dob;
   type = data.type;
   */
    namec = data.name;
	
	document.getElementById("user").value = data.name;
	document.getElementById("birth").value = data.birth;
	   
	type = data.type;
	search = data.search;

	select_All();
}

function select_All(){

	
var value;
	$.ajax({
        url: 'selectpopulated.php',
        success: function(response) {
            successCallback(response);
        }
    });

}

function successCallback(responseObj){
     var mydata = JSON.stringify(responseObj);
	 var obj = JSON.parse( responseObj );
alert(type);



var count = 0;		
for(var i in obj) 
	{
			if(type == obj[i][0] || type == obj[i][0] || type == obj[i][0] || type == obj[i][0] || type == obj[i][0] || type == obj[i][0] || type == obj[i][0] || type == obj[i][0] || type == obj[i][0] || type == obj[i][0] || type == obj[i][0])
			{
						tooltype[count] = obj[i][0];
						toolname[count] = obj[i][1];
						noofcopies[count] = obj[i][2];
						companyname[count] = obj[i][3];
						
						versiondb[count] = obj[i][4];
						imagedb[count] = obj[i][5];
						cmaddress[count] = obj[i][6];
						sysreqdb[count] = obj[i][7];

						costdb[count] = obj[i][8];
						detail[count] = obj[i][9];
						lastupdate[count] = obj[i][10];
						count = count + 1;
			}
			else if(type == "weekly" && checkDate(obj[i][10]))
			{
						tooltype[count] = obj[i][0];
						toolname[count] = obj[i][1];
						noofcopies[count] = obj[i][2];
						companyname[count] = obj[i][3];
						
						versiondb[count] = obj[i][4];
						imagedb[count] = obj[i][5];
						cmaddress[count] = obj[i][6];
						sysreqdb[count] = obj[i][7];

						costdb[count] = obj[i][8];
						detail[count] = obj[i][9];
						lastupdate[count] = obj[i][10];
						count = count + 1;
			}else if(type == "daily" && checkDate1(obj[i][10]))
			{
						tooltype[count] = obj[i][0];
						toolname[count] = obj[i][1];
						noofcopies[count] = obj[i][2];
						companyname[count] = obj[i][3];
						
						versiondb[count] = obj[i][4];
						imagedb[count] = obj[i][5];
						cmaddress[count] = obj[i][6];
						sysreqdb[count] = obj[i][7];

						costdb[count] = obj[i][8];
						detail[count] = obj[i][9];
						lastupdate[count] = obj[i][10];
						count = count + 1;
			}else if((obj[i][1].indexOf(type)>0 || obj[i][3].indexOf(type)>0 || obj[i][9].indexOf(type)>0) && search == "search")
			{
						tooltype[count] = obj[i][0];
						toolname[count] = obj[i][1];
						noofcopies[count] = obj[i][2];
						companyname[count] = obj[i][3];
						
						versiondb[count] = obj[i][4];
						imagedb[count] = obj[i][5];
						cmaddress[count] = obj[i][6];
						sysreqdb[count] = obj[i][7];

						costdb[count] = obj[i][8];
						detail[count] = obj[i][9];
						lastupdate[count] = obj[i][10];
						count = count + 1;
			}
	}	
		loc = -1;
		
 		for (var i = 0; i < 5 ; i++) {
					var num = i + 1;
					var n = num.toString(); 
					
					var name = "name".concat(n);
					document.getElementById(name).value = "";
					
					var button = "button".concat(n);
					document.getElementById(button).style.background="url('"+""+"')";;
								
					var version = "version".concat(n);
					document.getElementById(version).value = "";
					
					var cost = "cost".concat(n);
					document.getElementById(cost).value = "";
					
					var pos = "position".concat(n);
					document.getElementById(pos).value = "";
		}
										
		for (var i = 0; i < tooltype.length ; i++) 
		{
					if(i >= 5) 
					{
							var num;
							loc = loc + 1;

					
							document.getElementById("name1").value = toolname[i-4];
							document.getElementById(button).style.background="url('"+imagedb[i-4]+"')";
							document.getElementById("version1").value = versiondb[i-4];
							document.getElementById("cost1").value = costdb[i-4];
							document.getElementById("position1").value = i-4;
							
							document.getElementById("name2").value = toolname[i-3];
							document.getElementById(button).style.background="url('"+imagedb[i-3]+"')";
							document.getElementById("version2").value = versiondb[i-3];
							document.getElementById("cost2").value = costdb[i-3];
							document.getElementById("position2").value = i-3;
							
							
							document.getElementById("name3").value = toolname[i-2];
							document.getElementById(button).style.background="url('"+imagedb[i-2]+"')";
							document.getElementById("version3").value = versiondb[i-2];
							document.getElementById("cost3").value = costdb[i-2];
							document.getElementById("position3").value = i-2;
							
							document.getElementById("name4").value = toolname[i-1];
							document.getElementById(button).style.background="url('"+imagedb[i-1]+"')";
							document.getElementById("version4").value = versiondb[i-1];
							document.getElementById("cost4").value = costdb[i-1];
							document.getElementById("position4").value = i-1;
							
						
							document.getElementById("name5").value = toolname[i];
							document.getElementById(button).style.background="url('"+imagedb[i]+"')";
							document.getElementById("version5").value = versiondb[i];
							document.getElementById("cost5").value = costdb[i];
							document.getElementById("position5").value = i;
							
					}
				else{
					loc = loc + 1;
					var num = i + 1;
					var n = num.toString(); 
					
					var name = "name".concat(n);
					document.getElementById(name).value = toolname[i];
					
					var button = "button".concat(n);
					document.getElementById(button).style.background="url('"+imagedb[i]+"')";
								
					var version = "version".concat(n);
					document.getElementById(version).value = versiondb[i];
					
					var cost = "cost".concat(n);
					document.getElementById(cost).value = costdb[i];
					
					var pos = "position".concat(n);
					document.getElementById(pos).value = i;

					}
					
		}
			
}



function select_All_updown(){
var value;
	$.ajax({
        url: 'selectpopulated.php',
        success: function(response) {
            successCallback_updown(response);
        }
    });

}

function successCallback_updown(responseObj){
 var obj = JSON.parse( responseObj );


var myDate=new Date();
myDate.setDate(myDate.getDate()-7);


var count = 0;		
for(var i in obj) 
	{
			if(type == obj[i][0] || type == obj[i][0] || type == obj[i][0] || type == obj[i][0] || type == obj[i][0] || type == obj[i][0] || type == obj[i][0] || type == obj[i][0] || type == obj[i][0] || type == obj[i][0] || type == obj[i][0])
			{
						tooltype[count] = obj[i][0];
						toolname[count] = obj[i][1];
						noofcopies[count] = obj[i][2];
						companyname[count] = obj[i][3];
						
						versiondb[count] = obj[i][4];
						imagedb[count] = obj[i][5];
						cmaddress[count] = obj[i][6];
						sysreqdb[count] = obj[i][7];

						costdb[count] = obj[i][8];
						detail[count] = obj[i][9];
						lastupdate[count] = obj[i][10];
						count = count + 1;
			}
			else if(type == "weekly" && checkDate(obj[i][10]))
			{
						tooltype[count] = obj[i][0];
						toolname[count] = obj[i][1];
						noofcopies[count] = obj[i][2];
						companyname[count] = obj[i][3];
						
						versiondb[count] = obj[i][4];
						imagedb[count] = obj[i][5];
						cmaddress[count] = obj[i][6];
						sysreqdb[count] = obj[i][7];

						costdb[count] = obj[i][8];
						detail[count] = obj[i][9];
						lastupdate[count] = obj[i][10];
						count = count + 1;
			}else if(type == "daily" && checkDate1(obj[i][10]))
			{
						tooltype[count] = obj[i][0];
						toolname[count] = obj[i][1];
						noofcopies[count] = obj[i][2];
						companyname[count] = obj[i][3];
						
						versiondb[count] = obj[i][4];
						imagedb[count] = obj[i][5];
						cmaddress[count] = obj[i][6];
						sysreqdb[count] = obj[i][7];

						costdb[count] = obj[i][8];
						detail[count] = obj[i][9];
						lastupdate[count] = obj[i][10];
						count = count + 1;
			}else if((obj[i][1].indexOf(type)>0 || obj[i][3].indexOf(type)>0 || obj[i][9].indexOf(type)>0) && search == "search")
			{
						tooltype[count] = obj[i][0];
						toolname[count] = obj[i][1];
						noofcopies[count] = obj[i][2];
						companyname[count] = obj[i][3];
						
						versiondb[count] = obj[i][4];
						imagedb[count] = obj[i][5];
						cmaddress[count] = obj[i][6];
						sysreqdb[count] = obj[i][7];

						costdb[count] = obj[i][8];
						detail[count] = obj[i][9];
						lastupdate[count] = obj[i][10];
						count = count + 1;
			}
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
					
					
					var name = "name".concat(n);
					document.getElementById(name).value = "";
					
					var button = "button".concat(n);
					document.getElementById(button).style.background="url('"+""+"')";
								
					var version = "version".concat(n);
					document.getElementById(version).value = "";
					
					var cost = "cost".concat(n);
					document.getElementById(cost).src = "";
					
					var pos = "position".concat(n);
					document.getElementById(pos).value = "";

					
		}
	
		var i = parseInt(parseInt(scrollstatus));
					if(upstatus == 2) {
					
							document.getElementById("name1").value = toolname[i-5];
							document.getElementById(button).style.background="url('"+imagedb[i-5]+"')";
							document.getElementById("version1").value = versiondb[i-5];
							document.getElementById("cost1").value = costdb[i-5];
							document.getElementById("position1").value = i-5;
							
							document.getElementById("name2").value = toolname[i-4];
							document.getElementById(button).style.background="url('"+imagedb[i-4]+"')";
							document.getElementById("version2").value = versiondb[i-4];
							document.getElementById("cost2").value = costdb[i-4];
							document.getElementById("position2").value = i-4;
							
							
							document.getElementById("name3").value = toolname[i-3];
							document.getElementById(button).style.background="url('"+imagedb[i-3]+"')";
							document.getElementById("version3").value = versiondb[i-3];
							document.getElementById("cost3").value = costdb[i-3];
							document.getElementById("position3").value = i-3;
							
							document.getElementById("name4").value = toolname[i-2];
							document.getElementById(button).style.background="url('"+imagedb[i-2]+"')";
							document.getElementById("version4").value = versiondb[i-2];
							document.getElementById("cost4").value = costdb[i-2];
							document.getElementById("position4").value = i-2;
							
						
							document.getElementById("name5").value = toolname[i-1];
							document.getElementById(button).style.background="url('"+imagedb[i-1]+"')";
							document.getElementById("version5").value = versiondb[i-1];
							document.getElementById("cost5").value = costdb[i-1];
							document.getElementById("position5").value = i-1;
						
					}
					else if(upstatus == 1){
							document.getElementById("name1").value = toolname[i+1];
							document.getElementById(button).style.background="url('"+imagedb[i+1]+"')";
							document.getElementById("version1").value = versiondb[i+1];
							document.getElementById("cost1").value = costdb[i+1];
							document.getElementById("position1").value = i+1;
							
							document.getElementById("name2").value = toolname[i+2];
							document.getElementById(button).style.background="url('"+imagedb[i+2]+"')";
							document.getElementById("version2").value = versiondb[i+2];
							document.getElementById("cost2").value = costdb[i+2];
							document.getElementById("position2").value = i+2;
							
							
							document.getElementById("name3").value = toolname[i+3];
							document.getElementById(button).style.background="url('"+imagedb[i+3]+"')";
							document.getElementById("version3").value = versiondb[i+3];
							document.getElementById("cost3").value = costdb[i+3];
							document.getElementById("position3").value = i+3;
							
							document.getElementById("name4").value = toolname[i+4];
							document.getElementById(button).style.background="url('"+imagedb[i+4]+"')";
							document.getElementById("version4").value = versiondb[i+4];
							document.getElementById("cost4").value = costdb[i+4];
							document.getElementById("position4").value = i+4;
							
						
							document.getElementById("name5").value = toolname[i+5];
							document.getElementById(button).style.background="url('"+imagedb[i]+"')";
							document.getElementById("version5").value = versiondb[i+5];
							document.getElementById("cost5").value = costdb[i+5];
							document.getElementById("position5").value = i+5;
		}
		}
}
function checkDate(varBirthDate) {

 var year = varBirthDate.substring(0, 4);
            var month = varBirthDate.substring(5, 7);
            var date = varBirthDate.substring(8, 10);

            var myDate = new Date(year, month - 1, date);

            var myDate1=new Date();
			myDate1.setDate(myDate.getDate()-7);

            if (myDate >= myDate1) {
                return true;
            }
            else {
                return false;
            }
}

function checkDate1(varBirthDate) {

             var year = varBirthDate.substring(0, 4);
            var month = varBirthDate.substring(5, 7);
            var date = varBirthDate.substring(8, 10);

            var myDate = new Date(year, month - 1, date);

            var myDate1=new Date();
            if (myDate == myDate1) {
                return true;
            }
            else {
                return false;
            }
}

function selectone1(){

 var curLocation = document.getElementById("position1").value;
 	var a = toolname[curLocation];
	var b = tooltype[curLocation];
	var c = companyname[curLocation];
	
	url1 = 'singletool.html?name=' + document.getElementById("user").value + "=" + a + "=" + b + "=" + c + "=" + encodeURIComponent(document.getElementById("birth").value);
	self.location = url1;
}

function selectone2(){

 var curLocation = document.getElementById("position2").value;
 	var a = toolname[curLocation];
	var b = tooltype[curLocation];
	var c = companyname[curLocation];
	
	url2 = 'singletool.html?name=' + document.getElementById("user").value + "="  + a + "=" + b + "=" + c + "=" + encodeURIComponent(document.getElementById("birth").value);
	self.location = url2;

 }
function selectone3(){

 var curLocation = document.getElementById("position3").value;
var a = toolname[curLocation];
	var b = tooltype[curLocation];
	var c = companyname[curLocation];
	
	url3 = 'singletool.html?name=' + document.getElementById("user").value + "=" + a + "=" + b + "=" + c + "=" + encodeURIComponent(document.getElementById("birth").value);
	self.location = url3;

}
function selectone4(){
 var curLocation = document.getElementById("position4").value;
var a = toolname[curLocation];
	var b = tooltype[curLocation];
	var c = companyname[curLocation];
	
	url4 = 'singletool.html?name=' + document.getElementById("user").value + "=" + a + "=" + b + "=" + c + "=" + encodeURIComponent(document.getElementById("birth").value);
	self.location = url4;

	}
function selectone5(){
 var curLocation = document.getElementById("position5").value;
var a = toolname[curLocation];
	var b = tooltype[curLocation];
	var c = companyname[curLocation];
	
	url5 = 'singletool.html?name=' + document.getElementById("user").value + "=" + a + "=" + b + "=" + c + "=" + encodeURIComponent(document.getElementById("birth").value);
	self.location = url5;

 }