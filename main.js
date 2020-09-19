// Document ready?
$(document).ready(function () {
	// ——————————————————————————— //
	// set local storage variables //
	// ——————————————————————————— //
	var storedItems_9 = localStorage.getItem(storedItems_9) || [];
	var storedItems_10 = localStorage.getItem(storedItems_10) || [];
	var storedItems_11 = localStorage.getItem(storedItems_11) || [];
	var storedItems_12 = localStorage.getItem(storedItems_12) || [];
	var storedItems_13 = localStorage.getItem(storedItems_13) || [];
	var storedItems_14 = localStorage.getItem(storedItems_14) || [];
	var storedItems_15 = localStorage.getItem(storedItems_15) || [];
	var storedItems_16 = localStorage.getItem(storedItems_16) || [];
	var storedItems_17 = localStorage.getItem(storedItems_17) || [];

	// ——————————————————————— //
	// save button click event //
	// ——————————————————————— //
	$(".fa-calendar-plus").on("click", function (e) {
		e.preventDefault();

		// grab the data-hour attribute value so we can use that in our logic to update the correct textareas
		var id = $(this).data("hour");

		// Set the new data items
		var task = {
			hour: $(this).data("hour"),
			message: $("textarea#" + id).val(), // How do I target the specific textarea? Currently, each one has an ID of "__am/pmMessage"
		};
		// Push the task to the corresponding stored arrays and set to local storage
		if ($(this).data("hour") === 9) {
			storedItems_9.push(task);
			localStorage.setItem("9", JSON.stringify(task.message));
		}
		if ($(this).data("hour") === 10) {
			storedItems_10.push(task);
			localStorage.setItem("10", JSON.stringify(task.message));
		}
		if ($(this).data("hour") === 11) {
			storedItems_11.push(task);
			localStorage.setItem("11", JSON.stringify(task.message));
		}
		if ($(this).data("hour") === 12) {
			storedItems_12.push(task);
			localStorage.setItem("12", JSON.stringify(task.message));
		}
		if ($(this).data("hour") === 13) {
			storedItems_13.push(task);
			localStorage.setItem("13", JSON.stringify(task.message));
		}
		if ($(this).data("hour") === 14) {
			storedItems_14.push(task);
			localStorage.setItem("14", JSON.stringify(task.message));
		}
		if ($(this).data("hour") === 15) {
			storedItems_15.push(task);
			localStorage.setItem("15", JSON.stringify(task.message));
		}
		if ($(this).data("hour") === 16) {
			storedItems_16.push(task);
			localStorage.setItem("16", JSON.stringify(task.message));
		}
		if ($(this).data("hour") === 17) {
			storedItems_17.push(task);
			localStorage.setItem("17", JSON.stringify(task.message));
		}
		// Fire off a toast notification
		saveToast();
	});

	// ———————————————————————— //
	// clear button click event //
	// ———————————————————————— //
	$(".fa-calendar-minus").on("click", function () {
		// variable that we can use to dynamically target the proper local storage and text areas
		var id = $(this).data("hour");
		// clear local storage
		localStorage.removeItem(id);
		// clear text areas
		$("#" + id).val("");
		// fire a clear task toast notification
		clearToast();
	});

	// ——————————————————————————————————————————————————— //
	// set textarea content to local storage, if it exists //
	// ——————————————————————————————————————————————————— //
	window.onload = function () {
		$("#9").val(JSON.parse(localStorage.getItem("9")));
		$("#10").val(JSON.parse(localStorage.getItem("10")));
		$("#11").val(JSON.parse(localStorage.getItem("11")));
		$("#12").val(JSON.parse(localStorage.getItem("12")));
		$("#13").val(JSON.parse(localStorage.getItem("13")));
		$("#14").val(JSON.parse(localStorage.getItem("14")));
		$("#15").val(JSON.parse(localStorage.getItem("15")));
		$("#16").val(JSON.parse(localStorage.getItem("16")));
		$("#17").val(JSON.parse(localStorage.getItem("17")));
	};

	// ——————————————————————— //
	// ——————————————————————— //
	// ——————————————————————— //
});
