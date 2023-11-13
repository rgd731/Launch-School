let rl = require('readline-sync');

const RPSGame = {
  human: createPlayer('human'),
  computer: createPlayer('computer'),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!\n');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors! Goodbye!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
  
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}\n`);
  
    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if (humanMove === computerMove) {
      console.log("It's a tie");
    } else {
      console.log('Computer wins!');

    }
  },

  playAgain() {
    console.log("Would you like to play again?");
    let answer = rl.question();
    return answer[0].toLowerCase() === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

function createPlayer(playerType) {
  return {
    move: null,
    playerType,

    choose() {
      if (this.isHuman()) {
        let choice;

        while (true) {
          console.log("\nPlease choose rock, paper, or scissors: ");
          choice = rl.question();
          if (['rock','paper','scissors'].includes(choice)) break;
          console.log("Sorry, invalid choice.");
        }
        this.move = choice;
      } else {
        const choices = ['rock','paper','scissors'];
        let randomIndex = Math.floor(Math.random() * choices.length);
        this.move = choices[randomIndex];
        console.log();
      }
    },

    isHuman() {
      return this.playerType === 'human';
    },

  };
}

RPSGame.play();