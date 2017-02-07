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
    
    create: function(iduser){
        
    },
    
    doLogin: function(email,password) {
        var url = User.coreUrl + "user?email="+$(email).val()+"&password="+$(password).val();
        $.getJSON(url).done(User.receiveUser);
    },
    
    receiveUser : function(Data){
        User.iduser = Data.idUser;
        if(User.iduser !== "0") {
            sessionStorage.setItem('id',User.iduser);
            User.email = Data.email;
            User.name = Data.name;
            User.createFriendsList();
            User.createHostedEventsList();
            User.createEventsAttendingList();
        }
    },
};