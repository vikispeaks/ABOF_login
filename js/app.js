/*  Parent Object*/
var App = {
	/*Initialistaion*/
	init: function() {
		/*Event handlers*/

	},

	/*Validate Form elements*/
	validateForm: function() {

		var firstName = document.getElementById("first-name");
		var lastName = document.getElementById("last-name");
		var email = document.getElementById("user-email");
		var password = document.getElementById("user-pasword");
		var mobile = document.getElementById("user-mobile");
		var errorMsg = document.createElement('span');
		// Regular Expressions
		var regExp = {
				email : /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
				password : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
				mobile : /^[789]\d{9}$/
		};

		if(!(email.value.match(regExp.email))) {
					email.parentNode.appendChild(errorMsg);
		}


	}
};
/*Document Onload*/
document.addEventListener("DOMContentLoaded", function() {
	App.init();
}, false);
