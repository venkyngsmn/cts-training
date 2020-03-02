function Validation()
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var usernameFormat = /^[a-zA-z]+$/;
	var passfor = /^[0-9a-zA-Z]+$/;
	var mobfor = /^[0-9]+$/;
	var useridFormat = /^[0-9]+$/;
	var username = document.form1.username.value;
	var password = document.form1.password.value;
	var email = document.form1.email.value;
	var mobno = document.form1.mobno.value;
	var userid = document.form1.userid.value;
	var address = document.form1.address.value;
	var flag = 0;
	if(username.value.match(usernameFormat) && username.length >= 6)
	{
		continue;
	}
	else{
		alert("Enter the correct username format (only letters with minimum of 6 characters)");
		flag += 1;
	}
	if(password.value.match(passfor) && password.length >= 6)
	{
		continue;
	}
	else{
		alert("Enter the correct password format (only alphanumeric with minimum of 6 characters");
		flag += 1;
	}
	if(email.value.match(mailformat))
	{
		continue;
	}
	else{
		alert("Enter the correct email id");
		flag += 1;
	}
	if(mobno.value.match(mobfor) && mobno.length == 10)
	{
		continue;
	}
	else{
		alert("Enter the correct mobile number");
		flag += 1;
	}
	if(userid.value.match(useridFormat) && userid.length >= 6 && userid.length <= 8)
	{
		continue;
	}
	else
	{
		alert("Enter correct userid");
	}
	if(flag == 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}