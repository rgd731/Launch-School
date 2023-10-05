const mapFunction = (char,index) => (index % 2 === 0) ? char.toUpperCase() : char.toLowerCase()


console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"0

function staggeredCase(str) {
  return str.split("").map(mapFunction).join("");
}

console.log(newStaggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(newStaggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  newStaggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

function newStaggeredCase(str) {
  let alphaNumIndex = 0;

  return str.split("").map(char => {
    if (!/[A-Za-z]/.test(char)) {
      return char;
    }

    let returnChar = (alphaNumIndex % 2 === 0) ? char.toUpperCase() : char.toLowerCase();
    alphaNumIndex += 1;
    return returnChar;

  }).join("");
}