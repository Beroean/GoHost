var eventsHosted = null;
var eventsAttending = null;
var visibleEvents = null;
var user = null;
var eventTitles;
var eventHosts;
var eventStartTimes;
var eventEndTimes;
var eventCategories;



function getEvents(){
userID = parseInt(SessionStorage.getItem('id'));
user = new User();
user.create(userID);
eventsHosted = user.getEventsHosted();
eventsAttending = user.getEventsAttending();
visibleEvents = user.getVisibleEvents();

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
function getHostStrings(){
    getStringsFromEvents(eventsHosted);
}
function getAttendingStrings(){
    getStringsFromEvents(eventsAttending);
}
function getVisibleStrings(){
    getStringsFromEvents(visibleEvents);
}
function createEvent(){
    eventTitle = $('#eventTitle').val;
    eventCat = $('#eventCat').val;
    eventStart = $('#eventStart').val;
    eventEnd = $('#eventEnd').val;
    eventLoc = $('#eventLoc').val;
    eventVis = $('#eventVis').val;
    eventAcc = $('#eventAcc').val;
    maxAttendees = $('#maxAttendees').val;
    description = $('#description').val;
    var event = new Event(user.getID(),eventCat, eventStart, eventEnd, description, eventTitle, eventVis, eventAcc, eventLoc);
    
}
