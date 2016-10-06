/*  Parent Object*/
var App = {
	/*Initialistaion*/
	init: function() {
		/*Event handlers*/
	},
	/*Validate Form elements*/
	validateForm: function() {
		[].forEach.call(document.querySelectorAll('.error__text'), function(e) {
			e.parentNode.removeChild(e);
		});
		var firstName = document.getElementById("first-name");
		var lastName = document.getElementById("last-name");
		var email = document.getElementById("user-email");
		var password = document.getElementById("user-pasword");
		var mobile = document.getElementById("user-mobile");
		// Regular Expressions
		var regExp = {
			email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
			password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
			mobile: /^[789]\d{9}$/,
			name: /^[a-z ,.'-]+$/i
		};
		if (!(email.value.match(regExp.email))) {
			var errorMsg = document.createElement('span');
			errorMsg.className = "error__text col-xs-8";
			errorMsg.appendChild(document.createTextNode("Oops! Invalid mail ID"));
			email.parentNode.appendChild(errorMsg);
		}
		if (!(password.value.match(regExp.password))) {
			var errorMsg = document.createElement('span');
			errorMsg.className = "error__text col-xs-8";
			errorMsg.appendChild(document.createTextNode("Password way too easy to hack. Be cool, change it."));
			password.parentNode.appendChild(errorMsg);
		}
		if (!(firstName.value.match(regExp.name))) {
			var errorMsg = document.createElement('span');
			errorMsg.className = "error__text col-xs-8";
			errorMsg.appendChild(document.createTextNode("The First Name maybe symbolic but no symbols allowed here."));
			firstName.parentNode.appendChild(errorMsg);
		}
		if (!(lastName.value.match(regExp.name))) {
			var errorMsg = document.createElement('span');
			errorMsg.className = "error__text col-xs-8";
			errorMsg.appendChild(document.createTextNode("The Last Name maybe symbolic but no symbols allowed here."));
			lastName.parentNode.appendChild(errorMsg);
		}
		if (!(mobile.value.match(regExp.mobile))) {
			var errorMsg = document.createElement('span');
			errorMsg.className = "error__text col-xs-8";
			errorMsg.appendChild(document.createTextNode("That's not a mobile number! Cheggit!"));
			mobile.parentNode.appendChild(errorMsg);
		}
	}
};
/*Document Onload*/
document.addEventListener("DOMContentLoaded", function() {
	App.init();
}, false);
