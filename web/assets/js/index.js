//Include this shit in system_init and move it next to the index.html page

// Set up the buttons on the login page

function setUpButtons() {
    // Button for submitting login info
    $('button#login').on('click', LoginHandler);
    // Button for creating an account
    $('button#register').on('click', RegisterHandler);

    // Hide the warning divisions upon loading
    $('#loginWarning').hide();
    $('#regWarning').hide();
    $('#regPassWarning').hide();
}

// Connect the event handler to the document
$(window).load(setUpButtons);

// Event handler for the login button
function LoginHandler() {
    $("#loginForm").submit();
}

//Event handler for the register button
function RegisterHandler() {
    if ($('#regPass').val() != $('#regPassConf').val()) {
        $('#regPassWarning').show();
    } else {
        $("#regForm").submit();
    }
}