// Task 1

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");

const regFirstName = /[A-ZА-ЯІ][a-zа-яыъії]{1,20}$/;
const regLastName = /[A-ZА-ЯІ][a-zа-яыъії]{1,20}$/;
const regPhone = /(?:tel.)?[\+]\d{2}[\(]\d{3}[\)]\d{7}/;


let objectFromForm = {};
let boolFromForm = {};

let test;

function validate(evt) {

	evt.preventDefault();

	objectFromForm = {
		firstname : null,
		lastname : null,
		tel : null,
	};

	boolFromForm = {
		firstname : false,
		lastname : false,
		tel : false,
	};

	let valueFirstName = firstname.value;
	let valueLasttName = lastname.value;
	let valuePhone = tel.value;

	objectFromForm.firstname = valueFirstName;
	objectFromForm.lastname = valueLasttName;
	objectFromForm.tel = valuePhone;
	
	if (regFirstName.test(valueFirstName)) {
		boolFromForm.firstname = true;	
	}

	if (regLastName.test(valueLasttName)) {
		boolFromForm.lastname = true;	
	}

	if (regPhone.test(valuePhone)) {
		boolFromForm.tel = true;	
	}

	console.log(objectFromForm);
	console.log(boolFromForm);

	test = boolFromForm;

}



function showResults(results) {
	let submitLi = '';
	console.log(results);

	for (let key in results) {
		if (results[key] == true) {
			submitLi += `<li class="success">SUCCESS: ${key} passed validation</li>`;
		}
		else {
			submitLi += `<li class="error">ERROR: ${key} failed validation</li>`;
		}		
	};
	resultsList.innerHTML = submitLi;
}

function myResult () {
	showResults(test);
};

submitBtn.addEventListener("click", validate);
submitBtn.addEventListener("click", myResult);
