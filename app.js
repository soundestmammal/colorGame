var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
})

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.background = "#232323";

	for(var i = 0; i < squares.length ; i++){
		squares[i].style.background = colors[i];
	}
})

colorDisplay.textContent = pickedColor;


for (var i = 0; i < colors.length ; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			resetButton.textContent = "Play Again?";
			h1.style.background = clickedColor;


		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length ; i++){
		squares[i].style.background = color;
	}
}


function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times

	for (var i = 0 ; i < num ; i++) {
		//get random color and push into arr
		arr.push(randomColor());

	};
	return arr;
}
function randomColor() {
	var r = Math.floor(Math.random() * 256);

	var g = Math.floor(Math.random() * 256);

	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}