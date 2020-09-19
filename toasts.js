// ————————————————————————— //
// BEGIN Toast notifications //
// ————————————————————————— //
function toastNotifications() {
	// Establish the toast div as the variable x so we can manipulate it more easily
	var x = $(".toast");
	// Unhide the toast notification
	x.removeClass("d-none");
	// Set the text for the toast notification
	$("small").text("Saved");
	$(".toast-body").text("Your task has been added to the block!");
	// After 3 seconds, remove the notification
	setTimeout(function () {
		x.addClass("d-none");
	}, 3000);
}
// ——————————————————————— //
// END Toast notifications //
// ——————————————————————— //
