const rl = require("readline-sync");
const FULL_DECK = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,
                   10,10,10,10,'Ace','Ace','Ace','Ace','King','King','King','King',
                   'Queen','Queen','Queen','Queen','Jack','Jack','Jack','Jack'];

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
    [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements at i and j
  }
}

function calculateTotal(cards) {
  const obj = {2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
               10: 10,King: 10, Queen: 10, Jack: 10, Ace: 11};

  let total = 0;
  let totalAces = 0;
  let acesWithValueOne = 0;

  cards.forEach(card => {
    total += obj[card];

    if (card === "Ace") {
      totalAces += 1;
    }

    if (total > 21 && (totalAces > acesWithValueOne)) {
      total -= 10;
      acesWithValueOne += 1;
    }

  });

  return total;
}

function hit(cards, deck) {
  cards.push(deck.pop());
}

function hitBlackJack(cards) {
  return (cards.length === 2 && calculateTotal(cards) === 21);
}

function dealCards (playerHand, dealerHand, deck) {
  playerHand.push(deck.pop());
  dealerHand.push(deck.pop());
  playerHand.push(deck.pop());
  dealerHand.push(deck.pop());
}

function joinCards(cards) {
  if (cards.length > 2) {
  return cards.slice(0,cards.length - 1).join(", ") + ", and " + cards[cards.length - 1];
  }
  if (cards.length > 1) {
   return `${cards[0]} and ${cards[1]}`;
  }
}

function displayCardsPlayerTurn(playerHand, dealerHand) {
  console.log(`\nDealer has: ${dealerHand[0]} and unknown card.`);
  console.log(`You have: ${joinCards(playerHand)}\n\n`);
}

function displayCardsDealerTurn(playerHand, dealerHand) {
  console.log(`\nDealer has: ${joinCards(dealerHand)}`);
  console.log(`You have: ${joinCards(playerHand)}\n\n`);
}

function askForInput() {
  console.log("Would you like to hit or stay? ");
  let answer = rl.prompt().trim().toLowerCase();

  while (answer !== 'hit' && answer !== 'stay') {
    console.log("Invalid input, please try again.");
    console.log("Would you like to hit or stay? ");
    answer = rl.prompt().trim().toLowerCase();
  }

  return answer;
}

while (true) {
  let playerHand = [];
  let dealerHand = [];

  let deck = FULL_DECK.slice();
  shuffleDeck(deck);

  dealCards(playerHand, dealerHand, deck);

  displayCardsPlayerTurn(playerHand, dealerHand);

  if (hitBlackJack(playerHand)) {
    console.log("Congrats, you hit blackjack! You won!");
    continue;
  }

  // Player Turn
  while (calculateTotal(playerHand) < 21) {
    let hitOrStay = askForInput();

    if (hitOrStay === 'stay') break;

    hit(playerHand, deck);
    displayCardsPlayerTurn(playerHand, dealerHand);
  }

  if (calculateTotal(playerHand) > 21) {
    console.log("Bust! You lose!");
    continue;
  } else if (calculateTotal(playerHand) === 21) {
    console.log("You have 21.");
  }

  console.log("\nNow it's the dealer's turn.\n");

  // Dealer Turn
  displayCardsDealerTurn(playerHand, dealerHand);

  while ((calculateTotal(dealerHand) < calculateTotal(playerHand)) && calculateTotal(dealerHand) < 17) {
    console.log("Dealer is hitting...");
    hit(dealerHand,deck);

    displayCardsDealerTurn(playerHand, dealerHand);
  }

  console.log("End of dealer's turn.");

  // Compare Card values
  console.log(`You had ${calculateTotal(playerHand)}. The dealer had ${calculateTotal(dealerHand)}`);

  if (calculateTotal(dealerHand) > 21) {
    console.log("Dealer busts! You Win!");
    continue;
  } else if (calculateTotal(dealerHand) === 21 || (calculateTotal(dealerHand) > calculateTotal(playerHand))) {
    console.log("You lose.");
    continue;
  }

  console.log("You win!");
  continue;
}


// Grab a deck of cards
// Shuffle the deck

// Dealer give himself two cards with one facing up
// Player is given two cards

// Based on player's own cards and visible dealer card, player must choose to 'hit' or 'stay'
// If 'hit', player is given another card
  // If player's cards value total over 21, it's a 'bust' and dealer wins
  // If player's cards value total 21, player's turn automatically ends
  // Player can hit as long as their card values are not 21 or over
// If 'stay', dealer begins turn
  // Dealer flips second card to reveal its value
  // Dealer then 'hits' if their cards value total less than 17
  // When dealer's card values are 17 or over, the dealer 'stays'
// The total card values for the dealer and player are compared
  // Whoever has the highest total wins
