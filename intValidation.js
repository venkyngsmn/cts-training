function alphanumericplusminus(inputText)
{
	var num = /^[-+]?[0-9]+$/;
	if(inputText.value.match(num))
	{
		alert("Correct! Try another")
		document.form1.text1.focus();
		return true;
	}
	else
	{
		alert("Please enter corrent format");
		document.form1.text1.focus();
		return false;
	}
}