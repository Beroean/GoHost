/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
User = {
    iduser: 0,
    email: 0,
    password: 0,
    name: 0,
    friendslist: null,
    eventshosting: null,
    eventsattending: null,
    coreUrl: "http://" + window.location.host + "/GoHost/api/",
    
    doLogin: function(email,password) {
        var url = User.coreUrl + "user?email="+$(email).val()+"&password="+$(password).val();
        $.getJSON(url).done(User.receiveUser);
    },
    
    receiveUser : function(data) {
        User.iduser = data;
        if(User.iduser !== "0") {
            User.getEmail();
            User.getName();
            User.createFriendsList();
            User.createHostedEventsList();
            User.createEventsAttendingList();
        }
    },
    
    getEmail : function(){
        var url = User.coreUrl + "user?email="+$('#email_field').val()+"&password="+$('#password_field').val();
        $.getJSON(url).done(User.receiveUser);
    },
};


