/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Event = {
    host: null,
    category: null,
    accessor: null,
    chat: null,
    eventStart: 0,
    eventEnd: 0,
    eventMax: 0,
    description: "",
    title: "",
    visbility: null,
    accessibility: null,
    invitedUsers: null,
    idevent: 0,
    location: null,
    users: null,
    coreUrl: "http://" + window.location.host + "/GoHost/api/",
    createFromDB: function (idevent) {
        //fill all the relevant fields from SQL, get accessor from session, create objects
        //for category, user, host, location, visibility, accessibility
        var url = Event.coreUrl + "event?idevent="+$(idevent).val();
        $.getJSON(url).done(sys_init.createFollowUp);
    },
    createFollowUp: function(data){
        Event.accessor = parseInt(sessionStorage.getItem('id');
    },
    
    create: function (idhost, idcategory, eventStart, eventEnd, eventMax, description, title, idvisibility, idaccessibility, idlocation) {
        //creates a user from the idhost, category from idcategory, visibility from idvisibility/idaccessibility, location from idlocation, all other fields are filled from parameters
        //if accessibility is 1, add all friends to invited list. Add the created object to the database.
    },
    isAccessorHost: function () {
        if (this.accessor.getID() == this.host.getID()) {
            return true
        } else
            return false;

    },
    isUserInEvent: function () {
        for (i = 0; i < this.users.size(); i++) {
            if (this.accessor.getID() == this.user[i].getID()) {
                return true;
            }
        }
        return false;
    },
    closeEvent: function () {
        access = new accessibility(3)
        this.accessibility = access;
    },
    deleteEvent: function () {
        //delete all mentions of event from database
    },
    isEventFull: function () {
        if (this.accessibility.getID() == 3) {
            return true;
        } else
            return false;
    },
    addUserToEvent: function (user) {
        //add user to the users array as well as the database and refresh
    },
    canUserJoin: function () {
        if (this.accessibility.getID() == 0) {
            return true;
        } else {
            for (i = 0; i < this.invited.size(); i++) {
                if (this.accessor.getID() == this.invited[i].getID() && (this.accessibility==1||this.accessibility==2)) {
                    return true;
                }
            }
            return false;
        }
    },
    canUserSee: function(){
        if (this.visibility.getID() == 0){
            return true;
        } else if (this.host.isFriendsWith(accessor) && this.visibility.getID()== 1){
            return true;
        } else return false;
    },
    editDescription: function(description){
        this.description = description;
    },
    editStartTime: function(startTime){
        this.startTime = startTime;
    },
    editEndTime: function(endTime){
        this.endTime = endTime;
    },
    
    getEventStart : function(){
        return eventStart;
    },
    
    getEventEnd : function(){
        return eventEnd;
    },
    
    getHost : function(){
        return host;
    },
    
    getCategory : function(){
        return category;
    },
    
    getTitle : function(){
        return title;
    },
    
    getidEvent : function(){
        return idevent;
    },
    
    getLocation : function(){
        return location.getName();
    },
    
    getDescription : function(){
        return description;
    },
    
    getUsers : function(){
        return users;
    },
};


