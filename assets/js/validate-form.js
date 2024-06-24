$(document).ready(function() {
    $('#showRegisterForm').click(function(e) {
        e.preventDefault();
        $('#loginSection').hide();
        $('#forgotPasswordSection').hide();
        $('#registerSection').fadeIn();
    });

    $('#showLoginForm').click(function(e) {
        e.preventDefault();
        $('#registerSection').hide();
        $('#forgotPasswordSection').hide();
        $('#loginSection').fadeIn();
    });

    $('#showForgotPasswordForm').click(function(e) {
        e.preventDefault();
        $('#loginSection').hide();
        $('#registerSection').hide();
        $('#forgotPasswordSection').fadeIn();
    });

    $('#showLoginFormForgot').click(function(e) {
        e.preventDefault();
        $('#forgotPasswordSection').hide();
        $('#registerSection').hide();
        $('#loginSection').fadeIn();
    });

    // Validation for registration form
    $('#registrationForm').submit(function(e) {
        e.preventDefault();
        // Perform your validation here
        let email = $('#email').val();
        let password = $('#password').val();
        let confirmPassword = $('#confirmPassword').val();
        let hint = $('#hint').val();
        let answer = $('#answer').val();
        let termsChecked = $('#terms').prop('checked');

        // Example validation: check if fields are not empty
        if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || hint.trim() === '' || answer.trim() === '' || !termsChecked) {
            alert('Please fill out all fields and agree to terms.');
            return;
        }

        // Proceed with registration
        alert('Registration successful!');
        // You can redirect or perform further actions here
    });

    // Validation for forgot password form
    $('#forgotPasswordForm').submit(function(e) {
        e.preventDefault();
        // Perform your validation here
        let emailForgot = $('#emailForgot').val();
        let hintForgot = $('#hintForgot').val();
        let answerForgot = $('#answerForgot').val();

        // Example validation: check if fields are not empty
        if (emailForgot.trim() === '' || hintForgot.trim() === '' || answerForgot.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Proceed with password reset logic (e.g., send email)
        alert('Password reset initiated.');
        // You can redirect or perform further actions here
    });
});