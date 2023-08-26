const readline = require('readline-sync');
const VALID_CHOICES = ['rock','paper','scissors','lizard','spock'];
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};
let userWins = 0;
let computerWins = 0;

function prompt(msg,additionalString = '') {
  process.stdout.write(`${msg}\n> `);
  return readline.question(additionalString);
}
function playerWins (userChoice,computerChoice) {
  return WINNING_COMBOS[userChoice].includes(computerChoice);
}
function displayWinner(userChoice,computerChoice) {
  console.log(`You chose ${userChoice}, computer chose ${computerChoice}.`);
  if (playerWins(userChoice,computerChoice)) {
    console.log('You win!');
  } else if (userChoice === computerChoice) {
    console.log("It's a tie!");
  } else {
    console.log("Computer wins!");
  }
}
function updateScore(userChoice,computerChoice) {
  if (playerWins(userChoice,computerChoice)) {
    userWins++;
  } else if (userChoice === computerChoice) {
    userWins++;
    computerWins++;
  } else {
    computerWins++;
  }
}

while (true) {
  if (!userWins && !computerWins) {
    console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
    console.log("First to 5 wins!\n");
  }

  let userChoice = prompt("Choose one: Rock, Paper, Scissors, Lizard, Spock").toLowerCase();
  while (!VALID_CHOICES.includes(userChoice)) {
    userChoice = prompt("That was not a valid choice. Please choose again").toLowerCase();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(userChoice,computerChoice);
  updateScore(userChoice,computerChoice);
  console.log(`Current score is User: ${userWins}  Computer: ${computerWins}\n`);

  if (userWins >= 3 || computerWins >= 3) {
    console.log(`${userWins >= 3 ? 'You are' : 'Computer is'} the grand winner!`);

    let answer = prompt("Would you like to play again?").toLowerCase();
    while (answer[0] !== 'y' && answer[0] !== 'n') {
      answer = prompt("Please enter y or n.");
    }
    if (answer[0] === 'n') break;

    userWins = 0;
    computerWins = 0;
  }
}