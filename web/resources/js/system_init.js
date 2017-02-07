/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function LoginHandler() {
    $.getJSON('http://' + window.location.host + '/GoHost/api/' + 'user/login?name=' + $('#loginUser').val() + '&password=' + $('#loginPass').val()).done(loginCallBack);
}

function loginCallBack(Id) {
    if (Id != 0) {
        // Storing the id number of the user
        sessionStorage.setItem('id', Id);
        // Store the username for future use
        sessionStorage.setItem('username', $('#loginUser').val());
        // If the account exists, open a new page
        window.location.href = 'Home.html#' + Id;
    } else {
        // If the account doesn't exist, show a text field saying that the account entered does not exist
        $('#loginUser').val('Your desired username is unfortunately already in use...');
        $('#test').show();
    }
}

sys_init = {
    coreUrl: "http://" + window.location.host + "/GoHost/api/",
    doLogin: function () {
        var url = sys_init.coreUrl + "user?email=" + $('#loginEmail').val() + "&password=" + $('#loginPass').val();
        $.getJSON(url).done(sys_init.moveToHome);
    },

    createUser: function () {
        var url = coreUrl + "user";
        var user = {email: $('#create_email').val(),
            password: $('#create_password').val()};
        var toSend = JSON.stringify(user);
        $.ajax({
            url: url,
            type: 'post',
            data: toSend,
            contentType: 'application/json',
            dataType: 'json',
            success: /*hide this div and show the log in div*/
        });
    },
    moveToHome: function () {
        if (Id != 0) {
            // Storing the id number of the user
            sessionStorage.setItem('id', Id);
            //Take them to home page
        } else {
            $('#regPassWarning').show();
        }
    },
    setUpIndex: function () {
        //This sets up the index.html page complete with hiding certain divs
        //shit
    }
}
