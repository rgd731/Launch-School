console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

function wordToDigit(str) {
  let stringtoNum = {zero: 0, one: 1, two: 2, three: 3, four: 4,
  five: 5, six: 6, seven: 7, eight: 8, nine: 9};

  return str.split(" ").map((word, index) => {
    let punctuationRegex = /[,._"'-]/;
    let filteredWord = word.replace(punctuationRegex,"");

    if (!stringtoNum.hasOwnProperty(filteredWord)) return word;

    return word.replace(filteredWord,stringtoNum[filteredWord]);
  }).join(" ");
}