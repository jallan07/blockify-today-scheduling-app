// Document ready?
$(document).ready(function() {

// Retrieve local storage function upon page load
var storedItems_9am = JSON.parse(localStorage.getItem("storedItems_9am")) || [];
var storedItems_10am = JSON.parse(localStorage.getItem("storedItems_10am")) || [];
var storedItems_11am = JSON.parse(localStorage.getItem("storedItems_11am")) || [];
var storedItems_12pm = JSON.parse(localStorage.getItem("storedItems_12pm")) || [];
var storedItems_1pm = JSON.parse(localStorage.getItem("storedItems_1pm")) || [];
var storedItems_2pm = JSON.parse(localStorage.getItem("storedItems_2pm")) || [];
var storedItems_3pm = JSON.parse(localStorage.getItem("storedItems_3pm")) || [];
var storedItems_4pm = JSON.parse(localStorage.getItem("storedItems_4pm")) || [];
var storedItems_5pm = JSON.parse(localStorage.getItem("storedItems_5pm")) || [];


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
$(".fa-save").on("click", function(e){
    // Save textarea input to local storage
        // Prevent previous entries from being cleared automatically
        e.preventDefault();
        // Set the new data items
        var newData = {
            hour: $(this).data("time"), // 
            message: "Test test test" // How do I target the specific textarea? Currently, each one has an ID of "__am/pmMessage"
        };
        console.log(newData);
        
        // Push the newData to the corresponding stored arrays and set to local storage
        if ($(this).data("time") === "9:00 am") {
            storedItems_9am.push(newData);
            localStorage.setItem("9:00 am", JSON.stringify(storedItems_9am));
        };
        if ($(this).data("time") === "10:00 am") {
            storedItems_10am.push(newData);
            localStorage.setItem("10:00 am", JSON.stringify(storedItems_10am));
        };
        if ($(this).data("time") === "11:00 am") {
            storedItems_11am.push(newData);
            localStorage.setItem("11:00 am", JSON.stringify(storedItems_11am));
        };
        if ($(this).data("time") === "12:00 pm") {
            storedItems_12pm.push(newData);
            localStorage.setItem("12:00 pm", JSON.stringify(storedItems_12pm));
        };
        if ($(this).data("time") === "1:00 pm") {
            storedItems_1pm.push(newData);
            localStorage.setItem("1:00 pm", JSON.stringify(storedItems_1pm));
        };
        if ($(this).data("time") === "2:00 pm") {
            storedItems_2pm.push(newData);
            localStorage.setItem("2:00 pm", JSON.stringify(storedItems_2pm));
        };
        if ($(this).data("time") === "3:00 pm") {
            storedItems_3pm.push(newData);
            localStorage.setItem("3:00 pm", JSON.stringify(storedItems_3pm));
        };
        if ($(this).data("time") === "4:00 pm") {
            storedItems_4pm.push(newData);
            localStorage.setItem("4:00 pm", JSON.stringify(storedItems_4pm));
        };
        if ($(this).data("time") === "5:00 pm") {
            storedItems_5pm.push(newData);
            localStorage.setItem("5:00 pm", JSON.stringify(storedItems_5pm));
        };






    // Toast notification
        // Establish the toast div as the variable x so we can manipulate it more easily
        var x = $(".toast");
        
        // Unhide the toast notification
        x.removeClass("d-none");
        
        // Pull out a random inspiring quote from the phrase arary
        var inspo = phraseArr[Math.floor(Math.random() * phraseArr.length)];
        
        // Set the text for the toast notification
        $(".toast-body").text(inspo);
        $("small").text("Items scheduled for " + $(this).data("time"));
        
        // After 3 seconds, remove the notification
        setTimeout(function(){
            x.addClass("d-none"); }
            , 4000);
});

// ——————————— //

// // Update row classes based on hour of the day
// function updateRowClasses(){
//     // Establish a local variable for current hour & set to a number
//     var currentHour = moment().format('H');
//     currentHour = +currentHour;
//     // Establish a local variable for the row hour & set to a number
//     var rowHour = $(".tableRow").data("hour");
//     rowHour = parseInt(rowHour);
//     // // Iterate over the rows using a for loop and the .eq() method
//     for (var i = 0; i < 9; i++){
//         var row = $(".tableRow");
//         // console.log(row[i]);
//         // Compare the data attribute for the row with the current time
//         // if (rowHour === currentHour){
//         //     row[i].addClass("present");
//         //     row[i].removeClass("past");
//         //     row[i].removeClass("future");
//         //     row[i].removeClass("table-secondary");
//         // }
//         // if (rowHour < currentHour){
//         //     row[i].addClass("past");
//         //     row[i].removeClass("present");
//         //     row[i].removeClass("future");
//         //     row[i].removeClass("table-secondary");
//         // }
//         // if (rowHour > currentHour){
//         //     row[i].addClass("future");
//         //     row[i].removeClass("present");
//         //     row[i].removeClass("past");
//         //     row[i].removeClass("table-secondary");
//         // }
//     }
// };
        

for (var j = 0; j < 9; j++){

    // define the row elements
    var row = ($(".tableRow")[j]);
        console.log(row);

    // define the current hour (should stay the same each time the for loop iterates)
    var currentHour = moment().format('H');
        currentHour = +currentHour;
        console.log(currentHour);

    // iterate through each row to find each row hour
    var rowHour = $(".tableRow").data("hour")[j];
        rowHour = parseInt(rowHour); 
        console.log(rowHour); // Currently logging to the console as NaN

    // create if statements that adjust row classes based on the current hour
    

}


// ——————————————————————— //
// ——————————————————————— //
// ——————————————————————— //
});
