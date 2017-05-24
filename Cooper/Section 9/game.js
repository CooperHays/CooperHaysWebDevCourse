//create secretNumber
var secretNumber = 11;

//ask user for guess
var guess = Number(prompt("Guess a number"));

//check guess
if (guess === secretNumber) {
  alert("You're right!");
}

else if (guess > secretNumber) {
  alert("Too high, guess again!");
}

else {
  alert("Too low, guess again!");
}
