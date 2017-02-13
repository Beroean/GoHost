/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Classes that I will be interacting with here: Event, User, FriendsList

// Global Variables go under here if they are needed

function setUpComponents() {
	// Link some buttons to certain functions
        $('#delete').on('click', deleteEvent);
        //Call other methods that you want to call on when this page is pulled up
	// Call function to display the blog of current user 
	getBlog();
	// Retrieve blog info fom other users
	getNewestBlogs();
        //Show and hide all the divs in the html here
}

//What is this??
//To make the call wait. Might need this later
$.wait = function(ms) {
    var defer = $.Deferred();
    setTimeout(function() { defer.resolve(); }, ms);
    return defer;
};

function refresh() {
	window.location.href = window.location.href; window.location.reload(true); 
}

$(window).load(setUpComponents);

