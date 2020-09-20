var fakeTasks = [
	"You take this home, throw it in a pot, add some broth, a potato—baby, you got a stew going!",
	"It's so watery and yet, there's a smack of ham to it!",
	"Unlimited juice? This party is going to be off the hook!",
	"I'm not sure how 'Solid As a Rock' helps people forget that we built houses in Iraq.",
	"I've made a huge mistake.",
	"It's as Ann as the nose on plain's face.",
	"I know you're the big marriage expert. Oh, I'm sorry, I forgot: your wife is dead.",
	"I don't know what I expected.",
	"Did you enjoy your meal, mom? You drank it fast enough!",
	"I mean, it's one banana, Michael. What could it cost? 10 dollars?",
	"She thinks I'm too critical—that's another fault of hers.",
	"Here's some money. Go see a Star War.",
	"And that's why you always leave a note!",
];

for (var i = 0; i < fakeTasks.length; i++) {
	var id = $(".card-text")[i];
	var rndNum = Math.floor(Math.random() * fakeTasks.length);
	$(id).text(fakeTasks[rndNum]);
}

// create an event listener for the edit button
$(".fa-edit").on("click", function () {
	console.log("hi");
	// need to create code that will show the modal when it is clicked
});
