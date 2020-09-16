// Display current date and time in the jumbotron
$("#currentDay").text(moment().format("dddd, MMMM Do"));
$("#localTime").text(moment().format("h:mm a"));

// Save user input when the save button is clicked
$(".fa-save").on("click", function(){
    console.log("This doesn't save the input yet.")
});