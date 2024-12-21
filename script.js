
const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Full Name Validation
    const fullName = document.getElementById('fullName').value;
    const nameError = document.getElementById('nameError');
    if (fullName.length < 5) {
        nameError.textContent = "Name must be at least 5 characters long.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email Validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (!email.includes('@')) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Phone Number Validation
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    if (phone.length !== 10 || phone === "123456789") {
        phoneError.textContent = "Enter a valid 10-digit phone number.";
        valid = false;
    } else {
        phoneError.textContent = "";
    }   

    // Password Validation
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === fullName.toLowerCase()) {
        passwordError.textContent = "Password must be at least 8 characters and not 'password' or your name.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        valid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    if (valid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});

