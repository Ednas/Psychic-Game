//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;



//Lets the computer select a random letter from the available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows the user 9 guesses
// guesses = guesses || 9
var updateGuessesLeft = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
  document.querySelector('#guessLeft').innerHTML = "Hello " + guessesLeft;
  // document.getElementById('#guessLeft').append = "Hello " +guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
  document.querySelector('#let').innerHTML = guessedLetters.join(', ');
};
// Function will be called when we reset everything
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//When key is released it becomes the users guess
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();
  // Repeat the following logic whenever the user guesses incorrectly.


  // function round() {
  //   while (userGuess !== computerGuess.toString()) {
  //     guesses--;
  //     if (guesses == 0) {
  //       {
  //         break }
  //       alert("The Letter was: " + computerGuess);

  //     }

  //     //COME BACK TO THIS
  //     // It's supposed to tally the guesses and make the number go down. 
  //     //  userGuess = guesses -;
  //   }
  // }
  // round();

  // if (userGuess == computerGuess) {
  //   wins++;
  // } else if (userGuess !== computerGuess) {
  //   losses++;
  // }



  // Taking the tallies and displaying them in HTML
  //  var html = "" +
  // "<p>Wins: " + 
  // wins + 
  // "</p>" +
  // "<p>Losses: " + 
  // losses + 
  // "</p>" +
  // "<p>Guesses Left: " + (9 - guesses) 
  // +
  // "<p>Your Guesses so far: " + userGuess
  // guesses +
  // "</p>";

  // Placing the html into the game ID
  //  document.querySelector('#game').innerHTML = html;

}
