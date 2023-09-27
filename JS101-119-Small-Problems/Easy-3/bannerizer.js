/*
Write a function that will take a short line of text, and write it to the console log within a box.
*/

logInBox('To boldly go where no one has gone before.');
/*
  +--------------------------------------------+
  |                                            |
  | To boldly go where no one has gone before. |
  |                                            |
  +--------------------------------------------+
*/

logInBox('');
/*
  +--+
  |  |
  |  |
  |  |
  +--+
*/

function logInBox (str) {
  console.log("+-" + "-".repeat(str.length) + "-+");
  console.log("| " + " ".repeat(str.length) + " |");
  console.log("| " + str + " |");
  console.log("| " + " ".repeat(str.length) + " |");
  console.log("+-" + "-".repeat(str.length) + "-+");
}