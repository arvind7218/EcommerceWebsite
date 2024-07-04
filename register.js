document.getElementById('register-btn').addEventListener('click', function(event) {
    event.preventDefault(); 
    var name = document.getElementById('name').value.trim();
    var emailInput = document.getElementById('email').value.trim();
    var password = document.getElementById('password1').value;
    var confirmPassword = document.getElementById('confirm-password1').value;
    var phone = document.getElementById('phone').value.trim();
    var agree = document.getElementById('agree').checked;

    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (!checkName(name)) {
        alert('Invalid Name.');
        return;
    }

    if (!isValidEmail(emailInput)) {
        alert('Invalid email.');
        return;
    }

    if (password === '') {
        alert('Password cannot be empty.');
        return;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters.');
        return;
    }

    if (confirmPassword === '') {
        alert('Please confirm your password.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (phone === '' || !isValidContact(phone)) {
        alert('Invalid contact number.');
        return;
    }

    if (!agree) {
        alert('Please agree to the terms.');
        return;
    }

    alert('Registration successful!');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password1').value = '';
    document.getElementById('confirm-password1').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('agree').checked = false;
});

function isValidEmail(email) {
    if (email === '') return false; 
    var atIndex = email.indexOf('@');
    var dotIndex = email.lastIndexOf('.');
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}

function isValidContact(contact) {
    if (contact.length !== 10) {
        return false; 
    }
    for (let i = 0; i < contact.length; i++) {
        if (contact[i] < '0' || contact[i] > '9') {
            return false; 
        }
    }
    return true; 
}

function checkName(name) {
    for (let i = 0; i < name.length; i++) {
        let charCode = name.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
            console.log("Invalid number");
            return false;
        }
    }
    return true;
}
