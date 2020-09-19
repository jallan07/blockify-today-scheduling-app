// ——————————————————————————————————————————— //
// BEGIN row styling based on the current hour //
// ——————————————————————————————————————————— //
for (var i = 0; i < 9; i++) {
	// define the row elements
	var row = $(".tableRow")[i];
	var textarea = $("textarea")[i];
	// define the current hour (should stay the same each time the for loop iterates)
	var currentHour = moment().format("H");
	currentHour = +currentHour;
	// iterate through each row to find each row hour
	var rowHour = $(row).data("hour");
	rowHour = parseInt(rowHour);
	// create if statements that adjust row classes based on the current hour
	if (rowHour < currentHour) {
		$(row).addClass("past");
		$(row).removeClass("future");
		$(row).removeClass("present");
		$(row).removeClass("table-secondary");
		$(textarea).css("background-color", "#ecf0f1");
		$(textarea).attr("disabled", '""');
		$(textarea).attr("rows", "1");
		$(textarea).css("border-color", "#c0392b");
		$(textarea).css("border-width", "1px");
	}
	if (rowHour === currentHour) {
		$(row).addClass("present");
		$(row).removeClass("future");
		$(row).removeClass("past");
		$(row).removeClass("table-secondary");
		$(textarea).css("border-color", "#2ecc71");
		$(textarea).css("border-width", "2px");
	}
	if (rowHour > currentHour) {
		$(row).addClass("future");
		$(row).removeClass("past");
		$(row).removeClass("present");
		$(row).removeClass("table-secondary");
		$(textarea).css("border-color", "#2ecc71");
		$(textarea).css("border-width", "2px");
	}
}
// ————————————————————————————————————————— //
// END row styling based on the current hour //
// ————————————————————————————————————————— //
