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
    eventsVisible: null,
    coreUrl: "http://" + window.location.host + "/GoHost/api/",
    
    create: function(iduser){
        //This will use the iduser stored in the session by system_init to
        //create and populate a user object from an already created user row in
        //the database. After that, it will use other
        //objects to populate friends list, eventslist...
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