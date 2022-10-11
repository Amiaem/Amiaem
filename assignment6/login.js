window.onload = loginLoad;
function loginLoad()
{
	let clickButton = document.getElementById("myLogin");
    clickButton.onsubmit = checkLogin;
}

function checkLogin()
{
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username');
	const password = urlParams.get('passwordMain');

	let id = document.forms["myLogin"]["username"].value;
	let pass = document.forms["myLogin"]["passwordMain"].value;

	if(id == username && pass == password)
	{
		
		loginfinish();
		alert("Success");
	}
	else
	{
		alert("Username or Password Incorrected");
		return false;
	}
}

function loginfinish()
{
	window.location.href = "https://store.steampowered.com/app/945360/Among_Us/";
}



			