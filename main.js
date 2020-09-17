// Document ready?
$(document).ready(function() {
// ——————————————————————— //
// ——————————————————————— //
// ——————————————————————— //

// Call the retrieve local storage function upon page load
getLocalStorage();

// Variable declarations


// Display current date and time in the jumbotron
var update = function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $("#localTime").text(moment().format('h:mm:ss a'));
};
update();
setInterval(update, 1000);

// Set local storage -- Save user input when the save button is clicked
$(".fa-save").on("click", function(){
    // alert("This doesn't save the input yet.") // placeholder -- not ready yet.

    // Establish the toast div as the variable x so we can manipulate it more easily
    var x = $(".toast");
    // Unhide the toast notification
    x.removeClass("d-none");
    // Set the text for the toast notification
    $(".toast-body").text("Success! Blockify has blocked out the hour.");
    $("small").text($(this).data("time"));
    // After 3 seconds, remove the notification
    setTimeout(function(){
        x.addClass("d-none"); }
        , 4000);
});



// Change class of past hours to the "past" class


// Change class of current hour to the "current" class


// Change class of upcoming hours to the "upcoming" class


// Retrieve local storage
function getLocalStorage(){
    console.log("Local storage has been retrieved.")
};
           

// ——————————————————————— //
// ——————————————————————— //
// ——————————————————————— //
});
