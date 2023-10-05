console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]


function removeVowels (strArr) {
  return strArr.map(str => {
    let vowels = "AEIOUaeiou";

    return str.split("").filter(char => {
      return !vowels.includes(char);
    }).join("");
  })
}