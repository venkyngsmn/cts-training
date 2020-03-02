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

	if(username == "" && username != usernameFormat && username.length < 6)
	{
		alert("Enter the correct username format (only letters with minimum of 6 characters)");
		document.form1.username.focus();
		return false;
	}
	if(password == "" && password != passfor && password.length < 6)
	{
		alert("Enter the correct password format (only alphanumeric with minimum of 6 characters");
		document.form1.password.focus();
		return false;
	}
	if(email == "" && email != mailformat)
	{
		alert("Enter the correct email id");
		document.form1.email.focus();
		return false;
	}
	if(mobno == "" && mobno != mobfor && mobno.length != 10)
	{
		alert("Enter the correct mobile number");
		document.form1.mobno.focus();
		return false;
	}
	if(userid == "" && userid != useridFormat && userid.length < 6 && userid.length > 8)
	{
		alert("Enter correct userid");
		document.form1.userid.focus();
		return false;
	}
	if(address == "")
	{
		alert("Enter the address");
		document.form1.address.focus();
		return false;
	}
	return (true);
}
