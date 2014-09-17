window.onload = function () {
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
   document.getElementById("birth").value = data.dob;
};

function validateform(){
		if(document.getElementById("searchtext").value === "") 
			{ 
				alert("Error: searchtext cannot be blank!"); 
				document.getElementById("searchtext").select();
				document.getElementById("searchtext").focus();
				return false; 
			} 
			url = 'populated.html?name='  + encodeURIComponent(document.getElementById("user").value) + 
			 "=type=" + encodeURIComponent(document.getElementById("searchtext").value)+"=search=" + "search" + "=birth=" +
			 encodeURIComponent(document.getElementById("birth").value);
			self.location.href = url;
}
function validateform1(){
			url = 'populated.html?name=' + encodeURIComponent(document.getElementById("user").value) + 
			 "=type=" + encodeURIComponent("design")+"=search=" + "other"+ "=birth=" +
			 encodeURIComponent(document.getElementById("birth").value);
			self.location.href = url;
}function validateform2(){
			url = 'populated.html?name='  + encodeURIComponent(document.getElementById("user").value) + 
			 "=type=" + encodeURIComponent("database")+"=search=" + "other"+ "=birth=" +
			 encodeURIComponent(document.getElementById("birth").value);
			self.location.href = url;
}function validateform3(){
			url = 'populated.html?name='  + encodeURIComponent(document.getElementById("user").value) + 
			 "=type=" + encodeURIComponent("databasetool")+"=search=" + "other"+ "=birth=" +
			 encodeURIComponent(document.getElementById("birth").value);
			self.location.href = url;
}function validateform4(){
			url = 'populated.html?name='  + encodeURIComponent(document.getElementById("user").value) + 
			 "=type=" + encodeURIComponent("codecoverage")+"=search=" + "other"+ "=birth=" +
			 encodeURIComponent(document.getElementById("birth").value);
			self.location.href = url;
}function validateform5(){
			url = 'populated.html?name='  + encodeURIComponent(document.getElementById("user").value) + 
			 "=type=" + encodeURIComponent("testingtool")+"=search=" + "other"+ "=birth=" +
			 encodeURIComponent(document.getElementById("birth").value);
			self.location.href = url;
}function validateform6(){
			url = 'populated.html?name='  + encodeURIComponent(document.getElementById("user").value) + 
			 "=type=" + encodeURIComponent("development")+"=search=" + "other"+ "=birth=" +
			 encodeURIComponent(document.getElementById("birth").value);
			self.location.href = url;
}function validateform7(){
			url = 'populated.html?name='  + encodeURIComponent(document.getElementById("user").value) + 
			 "=type=" + encodeURIComponent("profiling")+"=search=" + "other"+ "=birth=" +
			 encodeURIComponent(document.getElementById("birth").value);
			self.location.href = url;
}function validateform8(){
			url = 'populated.html?name='  + encodeURIComponent(document.getElementById("user").value) + 
			 "=type=" +encodeURIComponent("requirement")+"=search=" + "other"+ "=birth=" +
			 encodeURIComponent(document.getElementById("birth").value);
			self.location.href = url;
}function validateform9(){
			url = 'populated.html?name='  + encodeURIComponent(document.getElementById("user").value) + 
			 "=type=" + encodeURIComponent("versioning")+"=search=" + "other"+ "=birth=" +
			 encodeURIComponent(document.getElementById("birth").value);
			self.location.href = url;
}function validateform10(){
			url = 'populated.html?name='  + encodeURIComponent(document.getElementById("user").value) + 
			 "=type=" + encodeURIComponent("webdesign")+"=search=" + "other"+ "=birth=" +
			 encodeURIComponent(document.getElementById("birth").value);
			self.location.href = url;
}function validateform11(){
			url = 'populated.html?name='  + encodeURIComponent(document.getElementById("user").value) + 
			 "=type=" + encodeURIComponent("appserver")+"=search=" + "other"+ "=birth=" +
			 encodeURIComponent(document.getElementById("birth").value);
			self.location.href = url;
}function validateform12(){
			url = 'populated.html?name='  + encodeURIComponent(document.getElementById("user").value) + 
			 "=type=" + encodeURIComponent("weekly")+"=search=" + "other"+ "=birth=" +
			 encodeURIComponent(document.getElementById("birth").value);
			self.location.href = url;
}function validateform13(){
			url = 'populated.html?name='  + encodeURIComponent(document.getElementById("user").value) + 
			 "=type=" + encodeURIComponent("daily")+"=search=" + "other"+ "=birth=" +
			 encodeURIComponent(document.getElementById("birth").value);
			self.location.href = url;
}


function showcart(){
	url = 'cart.html?name=' + encodeURIComponent(document.getElementById("user").value)  + "=" + "Buyer" +"="+
		encodeURIComponent(document.getElementById("birth").value);
		
   self.location.href = url;
}