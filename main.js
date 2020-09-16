// Display current date and time in the jumbotron
$("#currentDay").text(moment().format("dddd, MMMM Do"));
$("#localTime").text(moment().format("h:mm a"));

// Save user input when the save button is clicked
$(".fa-save").on("click", function(){
    console.log("This doesn't save the input yet.") // placeholder -- not ready yet.
});

// Change class of past hours to the "past" class


// Change class of current hour to the "current" class


// Change class of upcoming hours to the "upcoming" class