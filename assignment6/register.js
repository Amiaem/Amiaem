window.onload = pageLoad;
function pageLoad()
{
	let clickButton = document.getElementById("myForm");
    clickButton.onsubmit = validateForm;

}

function validateForm() 
{

    let passmain = document.forms["myForm"]["passwordMain"].value;
    let passReCheck = document.forms["myForm"]["passwordRecheck"].value;

    if(passmain != passReCheck)
    {
        document.getElementById('errormsg').innerHTML = "Password not match";
        return false;
    }
    else
    {
        alert("Success");
    }
}