let rl = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const TOTAL_GAMES = 5;

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[square] = INITIAL_MARKER;
  }

  return board;
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log(``);
  console.log(`     |     |`);
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log(`     |     |`);
  console.log(`-----+-----+-----`);
  console.log(`     |     |`);
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log(`     |     |`);
  console.log(`-----+-----+-----`);
  console.log(`     |     |`);
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log(`     |     |`);
  console.log(``);
}

function playerChoosesSquare(board) {
  let chosenSquare;

  while (true) {
    chosenSquare = rl.question("Please choose a square (1-9): ");
    
  if (board[chosenSquare] === INITIAL_MARKER && chosenSquare <= 9) break;

    console.log("Sorry, that's not a valid choice\n\n");
    continue;
  }

  board[chosenSquare] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let emptySquares = findEmptySquares(board);

  let randomIndex = Math.floor(Math.random() * emptySquares.length);

  let chosenSquare = emptySquares[randomIndex];
  board[chosenSquare] = COMPUTER_MARKER;
}

function findEmptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return findEmptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}


while (true) {
  let board = initializeBoard();
  let playerWins = 0;
  let computerWins = 0;

  while (true) {
    displayBoard(board);
    playerChoosesSquare(board);
    if(!someoneWon(board) && !boardFull(board)) {
      computerChoosesSquare(board);
      displayBoard(board);
    }

    if (!someoneWon(board) && !boardFull(board)) continue;
      displayBoard(board);

      if (someoneWon(board)) {
        let winner = detectWinner(board)

        console.log(`${winner} won!`)

        if (winner === "Player") {
          playerWins += 1;
        } else {
          computerWins += 1;
        }
      } else {
        console.log("It's a tie!");
      }

      console.log(`The current score is`)
      console.log(`Player: ${playerWins}   Computer:${computerWins}`)

      if (playerWins > (TOTAL_GAMES / 2) || computerWins > (TOTAL_GAMES / 2)) break;

      let answer = rl.question("Enter any key to continue to the next game: ")
      board = initializeBoard();
  }

  let grandChampion = (playerWins > computerWins) ? "Player" : "Computer"
  console.log(`${grandChampion} is the Grand Champion!`)

  let answer = rl.question("Would you like to play again? (y or n): ");
  if (answer.trim().toLowerCase() !== 'y') break;
}
