window.onload = function()
{

	document.querySelector("#register-submit").addEventListener("click", registration);
	
	document.querySelector("#login-submit").addEventListener("click", login);
}

function registration()
{	

	var username, reUsername, email, reEmail, password, rePassword, confirmPassword, reConfirmPassword, arrayValid, arrayErrors, result;
	
	username = document.getElementById("tbUsername").value;
		
	email = document.getElementById("tbEmail").value;
	
	password = document.getElementById("tbPassword").value;

	confirmPassword = document.getElementById("tbConfirmPassword").value;
	
	
	reUsername = /^[a-zA-Z0-9_-]{3,16}$/;
	
	reEmail = /^[\w]+[\.\_\-\w]*\@[\w]+([\.][\w]+)+$/;
	// Minimum 8 characters, at least one letter and one number
	var rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
	
	
	arrayErrors = new Array();
	arrayValid = new Array();
	

	if(!reUsername.test(username))
	{
		if (username.length > 16) {
			arrayErrors.push("Username is invalid! Maximum 16 characters!");
			document.getElementById('tbUsername').style.border = '2px solid red';
			}
		else if (username.length < 3) {
			arrayErrors.push("Username is invalid! Minimum 3 characters!");
			document.getElementById('tbUsername').style.border = '2px solid red';}
	    else{
		arrayErrors.push("Username is invalid!");
		document.getElementById('tbUsername').style.border = '2px solid red';
	    }
	}
	else
	{  	
		arrayValid.push("Username: " + username);
		document.getElementById('tbUsername').style.border = '2px solid green';
	}
	
	
	if(!reEmail.test(email))
	{
		arrayErrors.push("Email is invalid!");
		document.getElementById('tbEmail').style.border = '2px solid red';
	}
	else
	{
		arrayValid.push("Email: " + email);
		document.getElementById('tbEmail').style.border = '2px solid green';
	}
	
	if(!rePassword.test(password))
	{
		arrayErrors.push("Password must contain min 8 characters, at least one letter and one number!");
		document.getElementById('tbPassword').style.border = '2px solid red';
	}
	else
	{
		arrayValid.push("Password: " + password);
		document.getElementById('tbPassword').style.border = '2px solid green';
	}

	
	 if (password != ""  &&  confirmPassword !="" && password == confirmPassword) {
    document.getElementById('tbConfirmPassword').style.border = '2px solid green';
	document.getElementById('tbPassword').style.border = '2px solid green';
   arrayValid.push("Passwords match!");
  } else {
   document.getElementById('tbConfirmPassword').style.border = '2px solid red';
   document.getElementById('tbPassword').style.border = '2px solid red';
    arrayErrors.push("Passwords do not match!");
  }

	
	
	if(document.getElementById("checkBox").checked == true)
	{
		arrayErrors.push("Sign In!");
	}
	else
	{
		arrayValid.push("Register now!");
	}
	
	result = "<ul>";
	if(arrayErrors.length != 0)
	{
		for(var i = 0; i < arrayErrors.length; i++)
		{
			result += "<li style='color:#ff0000;'>" + arrayErrors[i] + "</li>";
		}
	}
	
	
	document.getElementById("result").style.display = "block";
	document.getElementById("result").innerHTML = result;
	
}


function login()
{	

	var username, reUsername, password, rePassword, arrayValid, arrayErrors, result;
	
	username = document.getElementById("tbUsernameLogin").value;
		
	password = document.getElementById("tbPasswordLogin").value;

	
	reUsername = /^[a-zA-Z0-9_-]{3,16}$/;

	rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
	
	
	arrayErrors = new Array();
	arrayValid = new Array();
	

	if(!reUsername.test(username))
	{
		if (username.length > 16) {
			arrayErrors.push("Username is invalid! Maximum 16 characters!");
			document.getElementById('tbUsername').style.border = '2px solid red';
			}
		else if (username.length < 3) {
			arrayErrors.push("Username is invalid! Minimum 3 characters!");
			document.getElementById('tbUsername').style.border = '2px solid red';}
	    else{
		arrayErrors.push("Username is invalid!");
		document.getElementById('tbUsername').style.border = '2px solid red';
	    }
	}
	else
	{  	
		arrayValid.push("Username: " + username);
		document.getElementById('tbUsername').style.border = '2px solid green';
	}
	

	
	if(!rePassword.test(password))
	{
		arrayErrors.push("Password must contain min 8 characters, at least one letter and one number!");
		document.getElementById('tbPassword').style.border = '2px solid red';
	}
	else
	{
		arrayValid.push("Password: " + password);
		document.getElementById('tbPassword').style.border = '2px solid green';
	}


	
	result = "<ul>";
	if(arrayErrors.length != 0)
	{
		for(var i = 0; i < arrayErrors.length; i++)
		{
			result += "<li style='color:#ff0000;'>" + arrayErrors[i] + "</li>";
		}
	}
	
	
	document.getElementById("result-login").style.display = "block";
	document.getElementById("result-login").innerHTML = result;
	
}


