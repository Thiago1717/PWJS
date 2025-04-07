function checkForm() {
    var error = false;
    var errorText = "";

    var contactName = document.getElementById("contactName");
    var contactEmail = document.getElementById("contactEmail");
    var message = document.getElementById("message");

    if (contactName.value.trim() === "") {
        errorText += "imię\n";
        error = true;
    }

    if (contactEmail.value.trim() === "") {
        errorText += "email\n";
        error = true;
    } else {
        var email = contactEmail.value.trim();
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,}$/;
        if (!regex.test(email)) {
            errorText += "błędny email\n";
            error = true;
        }
    }

    if (message.value.trim() === "") {
        errorText += "wiadomość\n";
        error = true;
    }

    if (!error) {
        return true;
    } else {
        alert("Nie wypełniłeś następujących pól:\n" + errorText);
        return false;
    }
}
