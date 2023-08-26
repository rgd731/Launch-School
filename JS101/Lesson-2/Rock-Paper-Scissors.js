const readline = require('readline-sync');
const VALID_CHOICES = ['rock','paper','scissors'];

function prompt(msg,additionalString = '') {
  process.stdout.write(`${msg}\n> `);
  return readline.question(additionalString);
}
function displayWinner(userChoice,computerChoice) {
  console.log(`You chose ${userChoice}, computer chose ${computerChoice}.`);
  if ((userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')) {
    console.log('You win!');
  } else if ((userChoice === 'rock' && computerChoice === 'paper') ||
          (userChoice === 'paper' && computerChoice === 'scissors') ||
          (userChoice === 'scissors' && computerChoice === 'rock')) {
    console.log('Computer wins!');
  } else {
    console.log("It's a tie!");
  }
}

while (true) {
  let userChoice = prompt("Choose one: Rock, Paper, Scissors").toLowerCase();
  while (!VALID_CHOICES.includes(userChoice)) {
    userChoice = prompt("That was not a valid choice. Please choose again").toLowerCase();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(userChoice,computerChoice);

  let answer = prompt("Would you like to play again?");
  console.log(answer);
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    answer = prompt("Please enter y or n.");
  }
  if (answer[0] === 'n') break;
}