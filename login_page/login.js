
let numberOfUsers = 0

const Users = []

class User {
	constructor(username, password, email) {
		this.username = username;
		this.password = password;
		this.email = email;
		this.follows = [];
		this.events = [];
		numberOfUsers++;
		this.admin = false
	}

}
// The following users are hardcoded, we will keep a database for UserS in phase 2
Users.push(new User("Eddie", "123456", "eddie@gmail.com"))
Users.push(new User("Amber", "aabbccd", "amber@gmail.com"))
Users.push(new User("Martin", "1010", "martin@gmail.com"))
const howard = new User("Howard", "qwert", "howard@gmail.com")
howard.admin = true
Users.push(howard)



const login_form = document.querySelector("#login_form");
const logo = document.querySelector("#logo");
const register = document.querySelector("#register");

login_form.addEventListener("submit", login);
logo.addEventListener("click", toMainPage);
register.addEventListener("click", toRegisterPage)

function all_fields_filled(username, password){

	let check = 0

	if (username == ""){
		const errorMessage = document.querySelector('#userNameError')
		errorMessage.innerText = "Field Required"
		check = 1
		const input = document.querySelector('#username')
		input.style.borderColor = "red";
		
	}

	if (password == ""){
		const errorMessage = document.querySelector('#passwordError')
		errorMessage.innerText = "Field Required"
		check = 1
		const input = document.querySelector('#password')
		input.style.borderColor = "red";
		
	}

	if (check == 0){

		return true
	}


	return false
}


function toMainPage(e){
	window.location.href = "../main_page/index.html"
}

function toRegisterPage(e){
	window.location.href = "../register_page/register_page.html"

}



function clear_error_message(){
	const errors = document.getElementsByClassName("error_message");
	for (let i = 0, len = errors.length; i < len; i++){
		errors[i].innerText = ""
	}
	const info = document.getElementsByClassName("info");
	for (let i = 0, len = info.length; i < len; i++){
		info[i].style.borderColor = "black"
	}
}



function check_input_valid(username, password){
	console.log(Users)
	for (let i = 0, len = Users.length; i < len; i++){
		if (username == Users[i].username){
			if (password == Users[i].password){
				if (Users[i].admin == false){
					window.location.href = "../main_page/index.html"
				}
				else{
					console.log(222)
					window.location.href = "../admin_page/admin_page.html"
				}
				return true
			}
			else{
				const errorMessage = document.querySelector('#passwordError')
				const input = document.querySelector('#password')
				input.style.borderColor = "red";
				errorMessage.innerText = "The password you entered is incorrect."
				username.value = ""
				password.value = ""
				return false

			}

		}
	}
	const errorMessage = document.querySelector('#userNameError')
	const input = document.querySelector('#username')
	input.style.borderColor = "red";
	errorMessage.innerText = "The Username you entered cannot be identified"
	username.value = ""
	password.value = ""
	return false
}





function login(e){
	e.preventDefault();
	clear_error_message()
	const username = document.querySelector('#username').value
	const password = document.querySelector('#password').value
	if(all_fields_filled(username, password)){
		check_input_valid(username, password)
	}
	
	
}
