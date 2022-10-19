let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
  let randomNum = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNum];
  gamePattern.push(randomChosenColor);
}

console.log(gamePattern);
