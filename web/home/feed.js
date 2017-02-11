/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var userID = parseInt(SessionStorage.getItem('id'));
var visibleEvents = null
var user = null
var eventTitles;
var eventHosts;
var eventStartTimes;
var eventEndTimes;
var eventCategories;

function getEvents(){
    user = new User();
    user.create(userID);
    visibleEvents = user.getVisibleEvents();
    getVisibleStrings();
    //this is where it connects with HTML to print the feed in objects
    
}
function getStringsFromEvents(EventsList){
  eventTitles =  new Array(EventsList.size);
  eventHosts = new Array(EventsList.size);
  eventStartTimes = new Array(EventsList.size);
  eventEndTimes = new Array(EventsList.size);
  eventCategories = new Array(EventsList.size);
  for (i=0;i<EventsList.size;i++){
  eventTitles[i] = EventsList[i].getTitle();
  eventHosts [i] = EventsList[i].getHost();
  eventStartTimes[i] = EventsList[i].getStartTime();
  eventEndTimes[i] = EventsList[i].getEndTime();
  eventCategories[i] = EventsList[i].getCategory();
  }
}
function getVisibleStrings(){
    getStringsFromEvents(visibleEvents);
}