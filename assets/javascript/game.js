$(document).on("mousemove", function () {
	console.log("jdsakhdksl")
})

var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/blue_crystal.png", "./assets/images/purple_crystal.png", "./assets/images/red_crystal.png", "./assets/images/yellow_crystal.png"];

// Functions

function randomTargetNumber() {
	targetNumber = Math.floor(Math.random() * 102) + 19;
}

function resetCrystals() {
	for (var i = 0; i < images.length; i++) {
		var crystal = $("<img>");
		crystal.addClass("crystal");
		crystal.attr("src", images[i]);
		crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
		crystal.attr("height", "100");
		$(".crystal-images").append(crystal);
	}
}

function resetHTML() {
	$(".target-number").html("<h5>Target Number </h5>" + "<span class='badge badge-secondary'>" + targetNumber + "</span>");
	$(".win-lose-counter").html("<h6>Wins</h6>" + "<span class='badge badge-secondary'>" + wins + "</span>" + "<h6>Losses</h6>" + "<span class='badge badge-secondary'>" + losses + "</span>");
	$(".score-number").html(counter);
	$(".crystal-images").empty();
}

function totalReset() {
	randomTargetNumber();
	counter = 0;
	resetHTML();
	resetCrystals();
}

// Running Code

// Inital Page Set Up
randomTargetNumber();
resetHTML();
resetCrystals();

// Click Functions
function crystalClick() {

	counter += parseInt($(this).attr("value"));
	$(".score-number").html(counter);
	if (counter == targetNumber) {
		wins++;
		totalReset();
	}
	else if (counter > targetNumber) {
		losses++;
		totalReset();
	};
};


$(document).on("click", ".crystal", crystalClick);