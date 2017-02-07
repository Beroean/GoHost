/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

sys_init = {
    coreUrl: "http://" + window.location.host + "/GoHost/api/",
    doLogin: function () {
        var url = sys_init.coreUrl + "user?email=" + $('#loginEmail').val() + "&password=" + $('#loginPass').val();
        $.getJSON(url).done(sys_init.moveToHome);
    },

    createUser: function () {
        if ($('#regPass').val() !== $('#regPassConf').val()) {
            $('#regPassWarning').show();
        } else {
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
                success: sys_init.moveToHome,
            });
        }
    },
    moveToHome: function (data) {
        if (data.iduser != 0) {
            // Storing the id number of the user
            sessionStorage.setItem('id', data.iduser);
            //Take them to home page
            window.location.href = 'home/index.html#' + data.iduser;
        } else {
            $('#regPassWarning').show();
        }
    },

    setUpButtons: function () {
        // Button for submitting login info
        $('button#login').on('click', doLogin);
        // Button for creating an account
        $('button#register').on('click', createUser);

        // Hide the warning divisions upon loading
        $('#loginWarning').hide();
        $('#regWarning').hide();
        $('#regPassWarning').hide();
    },
}

$(document).ready(sys_init.setUpButtons);