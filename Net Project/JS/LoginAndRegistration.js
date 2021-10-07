var defaultUserName = "Samuel@proj.ca";
var defaultPassword = 123;

function OpenRegistrationPage(){
	//window.open("../Pages/Register.htm", Content_Frame)
	//document.getElementById('')
	//$link = $('a#RegistrationLink');
	//$link.click();
	//the one that worked -> //parent.frames.Content_Frame.location.href = "../Pages/Register.htm"; //won't work on firefox
	//window.parent.frame[2].location.href = "../Pages/Register.htm";
	alert("Bad Login!");
	document.getElementsByName('content')[0].src = "Register.htm"; //it seems like I a searching from the html file instead of the js one
}

function getCookie(cname) { //thx teacher, I tried doing my own but it didn't work
    var name = cname + "="; //I left them as a code because I know that this thing doesn't let you name two cookies similarly
    var ca = document.cookie.split(';'); //cookies with the same name overrrides one another, I had forgotten that
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function Login(){
	try{
		var userName = document.getElementById('UserName').value;
		var passwd = document.getElementById('Password').value;
		
		/*var cookies = document.cookie.split(";");
		
		for(var i = 0; i < cookies.length; ++i){
			alert(cookies[i].toString() + "==" + userName + "=" + passwd);
			
			//cookies[i].toString() == (userName + "=" + passwd)
			if (cookies[i].match(new RegExp('^' + userName + '=' + passwd)) || (userName == defaultUserName && passwd == defaultPassword)){
				//parent.frames.Menu_Frame.$("a").attr('href');
				alert("successfull login"); 
				$("a").show();  
				break;
			}
		}*/
		if ((userName == defaultUserName && passwd == defaultPassword) || getCookie(userName) == passwd){
			alert("successfull login"); 
			document.getElementById("User").innerHTML = userName;
			$("input").hide();
			$("label").hide();
			$("#Loging").hide();
			$("a").show(); 
			$("h3").show();
			$("#Logingout").show();
		}
		else{
			OpenRegistrationPage();
		}
	}
	catch(e){
		OpenRegistrationPage();
	}
}

function Register(){
	var userName = document.getElementById('UserName').value;
	var passwd = document.getElementById('Password').value;
	var validator = /^[^;]+$/;

	if(validator.test(userName) && validator.test(passwd)){
		//localStorage.setItem(userName, password); //chrome only
		//localStorage.clear(); //to clear this site local storage
		var date = new Date();
		date.setTime(date.getTime() + (1*24*60*60*1000));
		
		document.cookie = userName + "=" + passwd + "; expires=" + date.toUTCString() + "; Secure";
		alert("Registration successfull!");
	}
	else{
		alert("Please fill the fields with valid values, I only forbid ;");
	}
}

function HideTheMenu(){
	$(document).ready(function(){ 
		$("a").hide();  
		$("h3").hide();
		$("#Logingout").hide();
	});
}

function Logout(){
	document.getElementById('UserName').value = "";
	document.getElementById('Password').value = "";
	$("input").show();
	$("label").show();
	$("#Loging").show();
	$("a").hide(); 
	$("h3").hide();
	$("#Logingout").hide();
}