// Document ready?
$(document).ready(function() {
    
// Variable declarations
var _9_AM_Items = JSON.parse(localStorage.getItem($("9am"))) || [];
var _10_AM_Items = JSON.parse(localStorage.getItem($("10am"))) || [];
var _11_AM_Items = JSON.parse(localStorage.getItem($("11am"))) || [];
var _12_PM_Items = JSON.parse(localStorage.getItem($("12pm"))) || [];
var _1_PM_Items = JSON.parse(localStorage.getItem($("1pm"))) || [];
var _2_PM_Items = JSON.parse(localStorage.getItem($("2pm"))) || [];
var _3_PM_Items = JSON.parse(localStorage.getItem($("3pm"))) || [];
var _4_PM_Items = JSON.parse(localStorage.getItem($("4pm"))) || [];
var _5_PM_Items = JSON.parse(localStorage.getItem($("5pm"))) || [];


// Display current date and time in the jumbotron
$("#currentDay").text(moment().format("dddd, MMMM Do"));
$("#localTime").text(moment().format("h:mm a"));

// Save user input when the save button is clicked
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

           

// ——————————————————————— //
// ——————————————————————— //
// ——————————————————————— //
});
