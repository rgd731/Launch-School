let readline = require("readline-sync");

class Card {
  constructor(card) {
    this.card = card;
    this.value = Deck.cardValues[card];
  }

  getValue() {
    return this.value;
  }

  isAce() {
    return this.card === "Ace";
  }

  isFaceCard() {
    return ["Ace","King","Queen","Jack"].includes(this.card);
  }

  toString() {
    return this.card;
  }
}

class Deck {
  static cardValues = {2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
                       10: 10,King: 10, Queen: 10, Jack: 10, Ace: 11};

  constructor() {
    this.cards = [2,3,4,5,6,7,8,9,10,'Ace','King','Queen','Jack'].reduce((acc,value) => {
      for (let i = 0; i < 4; i++) {
        acc.push(new Card(value));
      }
      return acc;
    },[]);
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  dealCard() {
    return this.cards.pop();
  }
}

class Participant {
  constructor() {
    this.hand = [];
  }

  getHand() {
    return this.hand;
  }

  getHandValue() {
    let handValue = 0;
    let aceAmount = 0;

    for (let i = 0; i < this.hand.length; i++) {
      let card = this.hand[i];
      let value = card.getValue();
      if (card.isAce()) {
        aceAmount += 1;
      }
      handValue += value;
    }

    while (aceAmount > 0 && handValue > TwentyOneGame.TARGET) {
      handValue -= 10;
      aceAmount -= 1;
    }

    return handValue;
  }

  hasBusted() {
    return this.getHandValue() > TwentyOneGame.TARGET;
  }

  addToHand(card) {
    if (this.hasOwnProperty('hiddenCard') && this.hiddenCard.length === 0) {
      this.hiddenCard.push(card);
    } else {
      this.hand.push(card);
    }
  }

  showHand() {
    return this.hand.map(card => card.toString());
  }

  resetHand() {
    this.hand = [];
    if (this.hasOwnProperty('hiddenCard')) {
      this.hiddenCard = [];
    }
  }

  hasBlackJack() {
    return (this.hand.length === 2 && this.getHandValue() === TwentyOneGame.TARGET)
  }

}

class Player extends Participant {
  constructor() {
    super();
    this.purse = 100;
    this.bet = 0;
  }

  chooseAction() {
    let choice = null;

    while (true) {
      choice = readline.question("Would you like to hit or stand? ").toLowerCase().trim();
      if (["hit","h","stand","s"].includes(choice)) break;
      console.log("Invalid choice, try again.");
    }
    console.log();

    return choice;
  }

  reachedTarget() {
    return this.getHandValue() === TwentyOneGame.TARGET;
  }

  placeBet() {
    let bet = null;
    console.log(`You have $${this.getPurse()}`);
    while (true) {
      bet = parseInt(readline.question("How much would you like to bet? $"));
      if (typeof bet === 'number' && bet <= this.purse) break;
      console.log("Invalid bet. Try again.")
      console.log();
    }
    console.log();
    
    this.bet = bet;
    this.purse -= bet;
  }

  getPurse() {
    return this.purse;
  }

  getBet() {
    return this.bet;
  }

  resetBet() {
    this.bet = 0;
  }

  addToPurse(winnings) {
    this.purse += winnings;
  }

  payOut(condition) {
    let multiplier = null;
    switch (condition) {
      case 'blackjack':
        multiplier = TwentyOneGame.BLACKJACK_PAYOUT_MULTIPLIER;
        break;
      case 'win':
        multiplier = TwentyOneGame.PAYOUT_MULTIPLIER;
        break;
      case 'tie':
        multiplier = 1;
        break;
      case 'loss':
        multiplier = 0;
        break;
    }

    let winnings = this.getBet() * multiplier;
    this.addToPurse(winnings);
    this.resetBet();
  }
}

class Dealer extends Participant {
  constructor() {
    super();
    this.hiddenCard = [];
  }

  revealCard() {
    this.hand.push(this.hiddenCard.pop());
  }

  reachedTarget() {
    return this.getHandValue() >= TwentyOneGame.DEALER_TARGET;
  }

}

class TwentyOneGame {
  static TARGET = 21;
  static DEALER_TARGET = 17;
  static BLACKJACK_PAYOUT_MULTIPLIER = 1.5;
  static PAYOUT_MULTIPLIER = 2;

  constructor() {
    this.dealer = new Dealer();
    this.player = new Player();
  }

  initialize() {
    this.displayWelcomeMessage();
    while(true) {
      this.play();
      if(!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  }

  play() {
    this.dealer.resetHand();
    this.player.resetHand();
    this.takeBets();
    this.dealCards();
    this.playerTurn();
    this.dealer.revealCard();
    if (!this.player.hasBusted()) {
      this.dealerTurn();
    }
    this.displayWinner();
    this.payOutPlayers();
  }

  playAgain() {
    let choice = readline.question("Would you like to play again? ").toLowerCase().trim();
    console.log();
    return ["y","yes","yeah","sure"].includes(choice);
  }

  displayWelcomeMessage() {
    console.log("Welcome to Blackjack!\n");
  }

  displayGoodbyeMessage() {
    console.log("End of Game. Thanks for playing!");
  }

  playerTurn() {
    while (!this.player.hasBusted() && !this.player.reachedTarget()) {
      this.showCards();
      let choice = this.player.chooseAction();
      if (["stand","s"].includes(choice)) break;
      this.hit(this.player);
    }
  }

  dealerTurn() {
    while (!this.dealer.hasBusted() && !this.dealer.reachedTarget()) {
      this.hit(this.dealer);
    }
    console.log();
  }

  isWinner(participant) {
    let participantValue = participant.getHandValue();
    let dealerValue = this.dealer.getHandValue();

    return !participant.hasBusted() && (participantValue > dealerValue || this.dealer.hasBusted());
  }

  tieGame() {
    let playerValue = this.player.getHandValue();
    let dealerValue = this.dealer.getHandValue();

    return playerValue === dealerValue;
  }

  displayWinner() {
    this.showCards();
    console.log();
    if (this.player.hasBusted()) {
      console.log(`You busted! Dealer wins.`);
    } else if (this.dealer.hasBusted()) {
      console.log(`Dealer has busted! You win!`);
    } else {
      if (this.isWinner(this.player)) {
        console.log("You win!");
      } else if (this.tieGame()) {
        console.log("Tie game");
      } else {
        console.log("Dealer wins!");
      }
    }
  }

  hit(participant) {
    participant.addToHand(this.deck.dealCard());
  }

  dealCards() {
    this.deck = new Deck();
    this.deck.shuffleCards();


    this.dealer.addToHand(this.deck.dealCard());
    this.dealer.addToHand(this.deck.dealCard());
    this.player.addToHand(this.deck.dealCard());
    this.player.addToHand(this.deck.dealCard());
  }

  showCards() {
    let showTotalDealer = this.dealer.getHand().length > 1 || this.dealer.getHand()[0].isFaceCard();
    let showTotalPlayer = this.player.getHand().length > 1 || this.player.getHand()[0].isFaceCard();

    console.log(`Dealer's Hand: ${this.dealer.showHand().join(", ")} ${showTotalDealer ? `(${this.dealer.getHandValue()})` : ''}`);
    console.log(`Your Hand: ${this.player.showHand().join(", ")} ${showTotalPlayer ? `(${this.player.getHandValue()})` : ''}`);
  }

  takeBets() {
    this.player.placeBet();
  }

  payOutPlayers() {
    if (this.player.hasBlackJack()) {
      this.player.payOut('blackjack');
    } else if (this.isWinner(this.player)) {
      this.player.payOut('win');
    } else if (this.tieGame()) {
      this.player.payOut('tie');
    } else {
      this.player.payOut('loss');
    }

    console.log(`Your purse is now $${this.player.getPurse()}`)
  }
}

let game = new TwentyOneGame();
game.initialize();

