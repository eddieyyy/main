
let numberOfUsers = 0;

const Users = [];

class User {
	constructor(username, password, email) {
		this.username = username;
		this.password = password;
		this.email = email;
		this.follows = [];
		this.events = [];
		numberOfUsers++;
		this.admin = false;
	}

}

Users.push(new User("Eddie", "123456", "eddie@gmail.com"));
Users.push(new User("Amber", "aabbccd", "amber@gmail.com"));
Users.push(new User("Martin", "1010", "martin@gmail.com"));
Users.push(new User("Howard", "qwert", "howard@gmail.com"));

const register_form = document.querySelector("#register_form");
const logo = document.querySelector("#logo");

register_form.addEventListener("submit", addNewUser);
logo.addEventListener("click", toMainPage);

function all_fields_filled(username, password, confirmPassword, email, checkbox){

	let check = 0

	if (username == ""){
		const errorMessage = document.querySelector('#userNameError');
		const input = document.querySelector('#newusername');
		input.style.borderColor = "red";
		errorMessage.innerText = "Field Required";
		check = 1;
		
	}

	if (password == ""){
		const errorMessage = document.querySelector('#passwordError');
		const input = document.querySelector('#newpassword');
		input.style.borderColor = "red";
		errorMessage.innerText = "Field Required";
		check = 1;
		
	}

	if (confirmPassword == ""){
		const errorMessage = document.querySelector('#confirmError');
		const input = document.querySelector('#confirmpassword');
		input.style.borderColor = "red";
		errorMessage.innerText = "Field Required";
		check = 1;

	}

	if (email == ""){
		const errorMessage = document.querySelector('#emailError');
		const input = document.querySelector('#email');
		input.style.borderColor = "#f45d90";
		errorMessage.innerText = "Field Required";
		check = 1;
	}

	if (checkbox == false){
		const errorMessage = document.querySelector('#agreementError');
		const input = document.querySelector('#agreement');
		input.style.borderColor = "red";
		errorMessage.innerText = "You need to agree the Condition of Use";
		check = 1;

	}

	if (check == 0){

		return true;
	}

	return false;
}

function toMainPage(e){
	window.location.href = "../main_page/index.html";
}


function clear_error_message(){
	const errors = document.getElementsByClassName("error_message");
	for (let i = 0, len = errors.length; i < len; i++){
		errors[i].innerText = "";
	}
	const info = document.getElementsByClassName("info");
	for (let i = 0, len = info.length; i < len; i++){
		info[i].style.borderColor = "black";
	}
}

function check_username_valid(username){
	for (let i = 0, len = Users.length; i < len; i++){
		if (username == Users[i].username){
			const errorMessage = document.querySelector('#userNameError');
			const input = document.querySelector('#newusername');
			input.style.borderColor = "red";
			errorMessage.innerText = "Username exists, Please try another one";
			username.value = "";
			return false;
		}
	}

	return true;
}

function check_password(password, confirmPassword){

	if (password == confirmPassword){
		return true;
	}
	const errorMessage = document.querySelector('#confirmError');
	const input = document.querySelector('#confirmpassword');
	input.style.borderColor = "red";
	errorMessage.innerText = "Password does not match, please try again";
	confirmpassword.value = "";
	return false;

}






function addNewUser(e){
	e.preventDefault();
	clear_error_message();
	const username = document.querySelector('#newusername').value;
	const password = document.querySelector('#newpassword').value;
	const confirmPassword = document.querySelector('#confirmpassword').value;
	const email = document.querySelector('#email').value;
	const checkbox = document.querySelector('#check').checked;
	if(all_fields_filled(username, password, confirmPassword, email, checkbox)){
		if(check_username_valid(username)){
			if (check_password(password, confirmPassword)){
				const newUser = new User(username, password, email);
				Users.push(newUser);
				window.location.href = "../login_page/login.html";
			}

		}
	}
	console.log(Users);

	
}
