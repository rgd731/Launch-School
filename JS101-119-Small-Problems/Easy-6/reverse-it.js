console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
console.log("");

function reverseSentence(str) {
  return str.split(" ").reverse().join(" ");
}


console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

function reverseWords(str) {
  let wordArr = str.split(" ");

  return wordArr.map(word => {
    if (word.length < 5) return word;

    return word.split("").reverse().join("");
  }).join(" ");
}