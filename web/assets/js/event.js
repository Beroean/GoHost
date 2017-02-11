/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Investigate if all the urls are correct
Event = {
    host: null,
    category: null,
    accessor: null,
    idevent: 0,
    chat: null,
    eventStart: 0,
    eventEnd: 0,
    eventMax: 0,
    description: "",
    title: "",
    visibility: null,
    accessibility: null,
    invitedUsers: null,
    location: null,
    users: null,
    coreUrl: "http://" + window.location.host + "/GoHost/api/",
    createFromDB: function (idevent) {
        //fill all the relevant fields from SQL, get accessor from session, create objects
        //for category, user, host, location, visibility, accessibility
        var url = Event.coreUrl + "event?idevent="+$(idevent).val();
        $.getJSON(url).done(Event.createFollowUp);
    },
    createFollowUp: function(data){
        Event.accessor = parseInt(sessionStorage.getItem('id'));
        Event.host = Event.accessor;
        idevent = data.idevent;
        category = new Category(data.idcategory);
        chat = null;//Add this in iteration 2.0
        eventStart = data.starttime;
        eventEnd = data.endtime;
        eventMax = data.maxattendees;
        description = data.description;
        title = data.title;
        location = new Location(data.idlocation);
        visibility = new Visibility(data.idvisibility);
        accessibility = new Accessibility(data.idaccessibility);
        var url = Event.coreUrl + "invited?idevent="+$(idevent).val();
        $.getJSON(url).done(Event.invitedFollowUp);
        var url1 = Event.coreUrl + "attendee?idevent="+$(idevent).val();
        $.getJSON(url1).done(Event.attendeeFollowUp);
    },
    
    invitedFollowUp: function(data){
        invitedUsers = [];
        for (n=0; n<data.length;n++){
            invitedUsers[n] = data[n].iduser;
        }
    },
    
    attendeeFollowUp: function(data){
        users = [];
        for (n=0; n<data.length;n++){
            users[n] = data[n].iduser;
        }
    },
    
    create: function (idhost, idcategory, eventStart, eventEnd, eventMax, description, title, idvisibility, idaccessibility, idlocation) {
        //creates a user from the idhost, category from idcategory, visibility from idvisibility/idaccessibility, location from idlocation, all other fields are filled from parameters
        //if accessibility is 1, add all friends to invited list. Add the created object to the database.
        var event = {title, idhost, eventMax, idlocation, idvisibility, idaccessibility, eventStart, eventEnd, description, idcategory};
		$.ajax({
		  url:'http://143.44.10.35/GoHost/api/event',
		  type:'POST',
		  data:JSON.stringify(event),
		  contentType:'application/json',
		  dataType:'json',
		  success: createFollowUp
		});
    },
    
    createFollowUp: function(id){
        //Stores the id of the event row recently added to the database
        idevent = id;
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


