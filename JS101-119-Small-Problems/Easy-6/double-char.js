console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

function repeater(str) {
  return str.split("").map(char => char + char).join("");
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

function doubleConsonants(str) {
  return str.split("").map(char => {
    if ('aeiou'.includes(char)){
      return char;;
    } else return char + char;
  }).join("");

}