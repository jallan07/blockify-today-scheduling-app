// Display current date and time in the jumbotron
$("#currentDay").text(moment().format("dddd, MMMM Do"));
$("#localTime").text(moment().format("h:mm a"));