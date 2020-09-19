const container = $("#toastContainer");

// on save button click, this notification fires
function saveToast() {
	const notif = $("<div>");
	notif.addClass("saveToast");

	notif.text("Task added to block.");

	container.prepend(notif);

	setTimeout(() => {
		notif.remove();
	}, 3000);
}

// on clear button click, this notification fires
function clearToast() {
	const notif = $("<div>");
	notif.addClass("clearToast");

	notif.text("Task removed from block.");

	container.prepend(notif);

	setTimeout(() => {
		notif.remove();
	}, 3000);
}
