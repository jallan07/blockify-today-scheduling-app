// Document ready?
$(document).ready(function() {

// Call the retrieve local storage function upon page load
getLocalStorage();
// Call the update row classes function upon page load
updateRowClasses();
// ——————————————————————— //
// ——————————————————————— //
// ——————————————————————— //

var phraseArr = ["Do, or do not. There is no try.", "It always seems impossible until it’s done.", "Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.", "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.", "If you spend too much time thinking about a thing, you’ll never get it done.", "The only way around is through.", "Until we can manage time, we can manage nothing else.", "He who is not courageous enough to take risks will accomplish nothing in life.", "The difference between winning and losing is most often not quitting.", "I never dreamed about success. I worked for it."]


// Display current date and time in the jumbotron
var update = function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $("#localTime").text(moment().format('h:mm:ss a'));
};
update();
setInterval(update, 1000);

// Set local storage -- Save user input when the save button is clicked
$(".fa-save").on("click", function(){
    // Save textarea input to local storage
    
    // Toast notification
        // Establish the toast div as the variable x so we can manipulate it more easily
        var x = $(".toast");
        // Unhide the toast notification
        x.removeClass("d-none");
        // Pull out a random inspiring quote from the phrase arary
        var inspo = phraseArr[Math.floor(Math.random() * phraseArr.length)];
        // Set the text for the toast notification
        $(".toast-body").text(inspo);
        $("small").text($(this).data("toast"));
        // After 3 seconds, remove the notification
        setTimeout(function(){
            x.addClass("d-none"); }
            , 4000);
});


// Update row classes based on hour of the day
function updateRowClasses(){
$('.table-secondary').each(row => {
    // Establish a local variable for current hour & set to a number
    var currentHour = moment().format('H');
    currentHour = +currentHour;
    // Establish a local variable for the row hour & set to a number
    var rowHour = $("tr").data("hour");
    rowHour = +rowHour;
    // Compare the data attribute for the row with the current time
        // Change class of past hours to the "past" class
    if ( rowHour < currentHour){
        row.addClass(".past");
    }
});
};



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
