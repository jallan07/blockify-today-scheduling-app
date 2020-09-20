const container = $("#toastContainer");

// Tutorial on toast code followed here: https://www.youtube.com/watch?v=8GPPJpiLqHk&t=666s

// on save button click, this notification fires
function saveToast() {
	var notif = $("<div>");

	notif.addClass("saveToast");

	notif.text("Task added to your block.");

	container.prepend(notif);

	setTimeout(() => {
		notif.remove();
	}, 3000);
}

// on clear button click, this notification fires
function clearToast() {
	const notif = $("<div>");
	notif.addClass("clearToast");

	notif.text("Task removed from your block.");

	container.prepend(notif);

	setTimeout(() => {
		notif.remove();
	}, 3000);
}
