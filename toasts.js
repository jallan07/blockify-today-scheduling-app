// —————————————————————————————————————————————————————— //
// BEGIN phrase array that is used in toast notifications //
// —————————————————————————————————————————————————————— //
var phraseArr = [
	"Do, or do not. There is no try.",
	"It always seems impossible until it’s done.",
	"Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.",
	"Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
	"If you spend too much time thinking about a thing, you’ll never get it done.",
	"The only way around is through.",
	"Until we can manage time, we can manage nothing else.",
	"He who is not courageous enough to take risks will accomplish nothing in life.",
	"The difference between winning and losing is most often not quitting.",
	"I never dreamed about success. I worked for it.",
];
// ———————————————————————————————————————————————————— //
// END phrase array that is used in toast notifications //
// ———————————————————————————————————————————————————— //

// ————————————————————————— //
// BEGIN Toast notifications //
// ————————————————————————— //
function toastNotifications() {
	// Establish the toast div as the variable x so we can manipulate it more easily
	var x = $(".toast");
	// Unhide the toast notification
	x.removeClass("d-none");
	// Pull out a random inspiring quote from the phrase arary
	var inspo = phraseArr[Math.floor(Math.random() * phraseArr.length)];
	// Set the text for the toast notification
	$(".toast-body").text(inspo);
	$("small").text("Get sh*t done!");
	// After 3 seconds, remove the notification
	setTimeout(function () {
		x.addClass("d-none");
	}, 4000);
}
// ——————————————————————— //
// END Toast notifications //
// ——————————————————————— //
