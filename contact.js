const form = document.querySelector("#contact-form");
const yourName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const phone = document.querySelector("#phone");
const subjectError = document.querySelector("#phoneError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

form.addEventListener("submit", validateForm);

function validateForm() {
	event.preventDefault();

	const yourNameValue = yourName.value;

	if (validateLength(yourNameValue, 1) === true) {
		nameError.style.display = "none";
	} else {
		nameError.style.display = "block";
	}

	const emailValue = email.value;

	if (validateEmail(emailValue) === true) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
	}

	const phonwValue = phone.value;

	if (validateEmail(phoneValue) === true) {
		phoneError.style.display = "none";
	} else {
		phoneError.style.display = "block";
	}

	const messageValue = message.value;

	if (validateLength(messageValue, 15) === true) {
		messageError.style.display = "none";
	} else {
		messageError.style.display = "block";
	}
}

function validateLength(value, lengthToCheck) {
	const trimmedValue = value.trim();
	if (trimmedValue.length >= lengthToCheck) {
		return true;
	} else {
		return false;
	}
}

function validateEmail(emailValue) {
	const regEx = /\S+@\S+\.\S+/;

	if (regEx.test(emailValue)) {
		return true;
	} else {
		return false;
	}
}
