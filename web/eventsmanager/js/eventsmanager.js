function setUpComponents() {
    // Button for creating a new event
    $('#createEvent').on('click', createEventHandler);
}

// Connect the event handler to the document
$(window).load(setUpComponents);

