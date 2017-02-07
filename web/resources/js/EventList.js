/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

eventsList={
events:null, //array of events contained in the list
accessor: null, //user that is accessing the list
viewType: 0, // 0 means view events hosting, 1 means events attending, 2 means all visible events

create: function(accessor, viewType){
    //get events into the list based on viewtype and accessor, then create events using idevent/populate using later methods
    
},
getEventsHosting: function(){
 //get all events accessor is hosting, put them in events (0)   
},
getEventsAttending: function(){
    //self explanatory (1)
},
getEventsVisible: function(){
  //self explantory (2)  
},
getEventsList: function(){
    return events;
},

}
