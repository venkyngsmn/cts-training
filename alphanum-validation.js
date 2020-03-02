function alphanumeric(inputText)
{
	var regformat = /^[0-9a-zA-Z]+$/;
	if(inputText.value.match(regformat))
	{
		alert("Your registeraion number has been accepted. You can try another")
		document.form1.text1.focus();
		return true;
	}
	else
	{
		alert("Please enter alphanumeric characters only");
		document.form1.text1.focus();
		return false;
	}
}