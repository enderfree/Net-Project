var startTime;

function ValidateProperName(properName){
	var desiredFormat = /^[A-Z][a-z]{2,}$/;
	if(desiredFormat.test(properName.value) == true){
		properName.style.border = "1px solid black";
		return true;
	}
	else{
		alert('Invalid Name: ' + properName.value);
		properName.style.border = "1px solid red";
		return false;
	}
}

function ValidateEMailAddress(eMail){
	var emailValidator = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/; //whatsoever3@emailcompany.domainname
	if(emailValidator.test(eMail.value) == true){
		eMail.style.border = "1px solid black";
		return true;
	}
	else{
		alert('Invalid eMail: ' + eMail.value);
		eMail.style.border = "1px solid red";
		return false;
	}
}

function ValidatePhoneNumber(phoneNumber){
	var phoneNumberValidator = /^[0-9]{10,11}$/; //optional indicator(0 or 1) + regional code(3) + those4numbers(4) = phone number(7 or 8)
	if(phoneNumberValidator.test(phoneNumber.value) == true){
		phoneNumber.style.border = "1px solid black";
		return true;
	}
	else{
		alert('Invalid Phone Number: ' + phoneNumber.value + '\nbe sure to only input numbers');
		phoneNumber.style.border = "1px solid red";
		return false;
	}
}

function ValidateBDate(dateOfBirth){
	var bDate = new Date(dateOfBirth.value);
	var cDate = new Date();
	
	if(bDate.getFullYear() >= cDate.getFullYear()){
		alert("Arn't you a bit young to register?");
		dateOfBirth.style.border = "1px solid red";
		return false;
	}
	else{
		dateOfBirth.style.border = "1px solid black";
		return true;
	}
}

function SetStartTime(){
	startTime = new Date();
}

function VerifyEntry(){
	if(ValidateProperName(document.getElementById('firstName')) &&
		ValidateProperName(document.getElementById('lastName')) &&
		ValidateEMailAddress(document.getElementById('eMail')) &&
		ValidateProperName(document.getElementById('country')) &&
		ValidatePhoneNumber(document.getElementById('phoneNumber')) &&
		ValidateBDate(document.getElementById('dateOfBirth'))){
		var date = new Date();
		var time = (date - startTime) / 1000;
		date.setTime(date.getTime() + (1*24*60*60*1000));
			
		document.cookie = "fname=" + document.getElementById('firstName').value + "; expires=" + date.toUTCString() + "; Secure";
		document.cookie = "lname=" + document.getElementById('lastName').value + "; expires=" + date.toUTCString() + "; Secure";
		document.cookie = "eMail=" + document.getElementById('eMail').value + "; expires=" + date.toUTCString() + "; Secure";
		document.cookie = "country=" + document.getElementById('country').value + "; expires=" + date.toUTCString() + "; Secure";
		document.cookie = "phone=" + document.getElementById('phoneNumber').value + "; expires=" + date.toUTCString() + "; Secure";
		document.cookie = "dateOfBirth=" + document.getElementById('dateOfBirth').value + "; expires=" + date.toUTCString() + "; Secure";
		document.cookie = "time=" + time + "; expires=" + date.toUTCString() + "; Secure";
			
		alert('Thx for subscribing!');
	}
	else{
		alert('You have not been subscribed.');
	}
}

function FillForm(){
try{
	var cookies = document.cookie.split(";");
	
	for(var i = 0; i < cookies.length; ++i){
	var c = cookies[i];
		document.getElementById("FirstName").innerHTML = getCookie("fname");
		document.getElementById("LastName").innerHTML = getCookie("lname");
		document.getElementById("EMail").innerHTML = getCookie("eMail");
		document.getElementById("Country").innerHTML = getCookie("country");
		document.getElementById("Phone").innerHTML = getCookie("phone");
		document.getElementById("BirthDate").innerHTML = getCookie("dateOfBirth");
		document.getElementById("time").innerHTML = getCookie("time");
	}
}
catch(e){
	alert("There is no cookie!");
}
}