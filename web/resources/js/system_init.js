/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */     
sys_init = {
    coreUrl: "http://" + window.location.host + "/GoHost/api/",
    doLogin: function() {
        var url = sys_init.coreUrl + "user?email="+$('#loginEmail').val()+"&password="+$('#loginPass').val();
        $.getJSON(url).done(sys_init.moveToHome);
    },
    
    createUser: function() {
        var url = coreUrl + "user";
        var user = {email:$('#create_email').val(),
                       password:$('#create_password').val()};
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
    moveToHome: function() {
        if(Id != 0){
            // Storing the id number of the user
            sessionStorage.setItem('id',Id);
            //Take them to home page
        } else {
            $('#regPassWarning').show();
        }
    },
    setUpIndex: function() {
        //This sets up the index.html page complete with hiding certain divs
        //shit
    }
}