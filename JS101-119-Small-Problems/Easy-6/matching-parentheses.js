console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

function isBalanced (str) {
  let openingParentheses = 0;
  let closingParentheses = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") openingParentheses += 1;
    if (str[i] === ")") closingParentheses += 1;
    if (openingParentheses - closingParentheses < 0) return false;
  }

  return openingParentheses === closingParentheses;
}