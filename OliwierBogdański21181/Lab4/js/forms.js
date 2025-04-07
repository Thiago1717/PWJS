function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.innerHTML = message;
    errorElement.className = "alert alert-danger";
}

function hideError(id) {
    const errorElement = document.getElementById(id);
    errorElement.className = "hide";
}

function validateName() {
    const name = document.getElementById("contactName");
    if (name.value.trim() === "") {
        showError("errorName", "Należy podać imię!");
        name.classList.add("is-invalid");
        return false;
    } else {
        hideError("errorName");
        name.classList.remove("is-invalid");
        name.classList.add("is-valid");
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("contactEmail");
    const value = email.value.trim();
    const regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,}$/;

    if (value === "") {
        showError("errorEmail", "Należy podać adres email.");
        email.classList.add("is-invalid");
        return false;
    } else if (!regex.test(value)) {
        showError("errorEmail", "Podano błędny format adresu email.");
        email.classList.add("is-invalid");
        return false;
    } else {
        hideError("errorEmail");
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        return true;
    }
}

function validateMessage() {
    const message = document.getElementById("message");
    const value = message.value.trim();
    if (value === "") {
        showError("errorMessage", "Wiadomość jest wymagana.");
        message.classList.add("is-invalid");
        return false;
    } else {
        hideError("errorMessage");
        message.classList.remove("is-invalid");
        message.classList.add("is-valid");
        return true;
    }
}
